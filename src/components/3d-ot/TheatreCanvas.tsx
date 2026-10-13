'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
  EquipmentState,
  ProductItem,
  RoomMode,
  ViewCameraMode
} from '@/types/theatre';
import { MEDGENZ_PRODUCTS } from '@/data/3d-ot/products';
import { OT_LAYOUT_PRESETS } from '@/data/3d-ot/layouts';
import {
  buildRoomShell,
  buildOperatingTable,
  buildSurgicalLights,
  buildAnesthesiaWorkstation,
  buildPatientMonitor,
  buildPendant,
  buildScrubStation,
  buildSurgeonControlPanel,
  buildXRayViewer,
  buildMayoTrolley,
  buildStorageCabinet,
  buildPassBox,
  buildHermeticDoor,
  buildLaminarAirflowCanopy,
  buildGasTerminalUnits,
  buildPressureDamper,
  buildGasPipelineSystem,
  buildLaminarAirflowParticles,
  buildIcuBed,
  buildCrashCart,
  buildNurseCallStation,
  buildIvfWorkstation
} from './models/proceduralModels';
import { createMarkerSprite } from './models/markerTexture';
import { TheatreMaterials } from './models/materials';

interface TheatreCanvasProps {
  roomMode: RoomMode;
  layoutId: string;
  equipmentStates: Record<string, EquipmentState>;
  selectedProductId: string | null;
  onSelectProduct: (id: string | null) => void;
  onUpdatePosition: (id: string, pos: { x: number; y: number; z: number }) => void;
  cameraMode: ViewCameraMode;
  showMarkers: boolean;
  isInfrastructureMode: boolean;
  showAirflow: boolean;
  isEditMode: boolean;
  icuBackrestAngle?: number;
  nurseCallActive?: boolean;
}

export const TheatreCanvas: React.FC<TheatreCanvasProps> = ({
  roomMode,
  layoutId,
  equipmentStates,
  selectedProductId,
  onSelectProduct,
  onUpdatePosition,
  cameraMode,
  showMarkers,
  isInfrastructureMode,
  showAirflow,
  isEditMode,
  icuBackrestAngle = 30,
  nurseCallActive = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const equipmentGroupsRef = useRef<Map<string, THREE.Group>>(new Map());
  const markersRef = useRef<Map<string, THREE.Sprite>>(new Map());
  const airflowParticlesRef = useRef<THREE.Points | null>(null);
  const selectionOutlineRef = useRef<THREE.BoxHelper | null>(null);

  const [webglError, setWebglError] = useState<string | null>(null);
  const isDraggingRef = useRef(false);
  const dragPlaneRef = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));
  const planeIntersectRef = useRef(new THREE.Vector3());
  const dragOffsetRef = useRef(new THREE.Vector3());

  const layout = OT_LAYOUT_PRESETS[layoutId] || OT_LAYOUT_PRESETS['standard-ot'];
  const roomDims = layout.roomDimensions;

  // Initialize Scene, Camera, Renderer & Lighting
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglError('WebGL is not supported in your current browser.');
        return;
      }
    } catch {
      setWebglError('Failed to initialize WebGL context.');
      return;
    }

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a); // Slate 900 matching MedGenz dark sections
    sceneRef.current = scene;

    scene.fog = new THREE.FogExp2(0x0f172a, 0.03);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(4.8, 4.2, 5.2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.maxPolarAngle = Math.PI / 2 - 0.02;
    controls.minDistance = 1.5;
    controls.maxDistance = 18;
    controls.target.set(0, 1.1, 0);
    controlsRef.current = controls;

    // Studio Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xe0f2fe, 0x0f172a, 0.55);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.35);
    keyLight.position.set(5, 8, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 25;
    keyLight.shadow.camera.left = -6;
    keyLight.shadow.camera.right = 6;
    keyLight.shadow.camera.top = 6;
    keyLight.shadow.camera.bottom = -6;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // MedGenz Gold rim backlight accent
    const rimLight = new THREE.DirectionalLight(0xE6A100, 0.35);
    rimLight.position.set(-6, 5, -4);
    scene.add(rimLight);

    // Floor Grid for Edit Mode
    const grid = new THREE.GridHelper(10, 20, 0xE6A100, 0x334155);
    grid.position.y = 0.005;
    grid.name = 'floor-grid';
    grid.visible = false;
    scene.add(grid);

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      // Airflow particles animation
      if (airflowParticlesRef.current && airflowParticlesRef.current.visible) {
        const posAttr = airflowParticlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
        const positions = posAttr.array as Float32Array;
        for (let i = 0; i < positions.length / 3; i++) {
          positions[i * 3 + 1] -= 0.012; // downward laminar air motion
          if (positions[i * 3 + 1] < 0.9) {
            positions[i * 3 + 1] = 2.9; // recycle back to ceiling plenum
          }
        }
        posAttr.needsUpdate = true;
      }

      // Keep selection bounding box updated
      if (selectionOutlineRef.current && selectionOutlineRef.current.visible) {
        selectionOutlineRef.current.update();
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  // Rebuild Room Shell & Equipment Mesh Groups upon roomMode / layoutId / infrastructureMode changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Clean up previous room objects
    const toRemove: THREE.Object3D[] = [];
    scene.children.forEach((child) => {
      if (
        child.name === 'room-shell' ||
        child.name === 'mgps-pipelines' ||
        child.name === 'laminar-particles' ||
        child.userData?.isEquipmentGroup ||
        child.userData?.isMarker
      ) {
        toRemove.push(child);
      }
    });
    toRemove.forEach((obj) => scene.remove(obj));

    equipmentGroupsRef.current.clear();
    markersRef.current.clear();

    // 1. Build Room Shell
    const roomShell = buildRoomShell(roomDims, isInfrastructureMode);
    scene.add(roomShell);

    // 2. Build Gas Pipeline System
    if (isInfrastructureMode || roomMode === 'mgps-pipeline') {
      const pipes = buildGasPipelineSystem(roomDims);
      scene.add(pipes);
    }

    // 3. Build Laminar Airflow Particles
    const particles = buildLaminarAirflowParticles();
    particles.visible = showAirflow && roomMode === 'modular-ot';
    airflowParticlesRef.current = particles;
    scene.add(particles);

    // 4. Build Equipment according to current Room Mode
    MEDGENZ_PRODUCTS.forEach((prod) => {
      let group: THREE.Group | null = null;

      // Mode-specific equipment filtering
      if (roomMode === 'icu-furniture') {
        if (prod.id === 'icu-bed') group = buildIcuBed(icuBackrestAngle);
        else if (prod.id === 'crash-cart') group = buildCrashCart();
        else if (prod.id === 'patient-monitor') group = buildPatientMonitor();
        else if (prod.id === 'nurse-call-station') group = buildNurseCallStation(nurseCallActive);
      } else if (roomMode === 'nurse-call') {
        if (prod.id === 'nurse-call-station') group = buildNurseCallStation(nurseCallActive);
        else if (prod.id === 'patient-monitor') group = buildPatientMonitor();
        else if (prod.id === 'op-table') group = buildOperatingTable();
      } else if (roomMode === 'ivf-cleanroom') {
        if (prod.id === 'ivf-workstation') group = buildIvfWorkstation();
        else if (prod.id === 'pass-box') group = buildPassBox();
        else if (prod.id === 'laminar-air-ceiling') group = buildLaminarAirflowCanopy();
        else if (prod.id === 'storage-cabinet') group = buildStorageCabinet();
      } else {
        // Standard Modular OT & MGPS Pipeline Modes
        switch (prod.id) {
          case 'op-table': group = buildOperatingTable(); break;
          case 'surgical-light': group = buildSurgicalLights(); break;
          case 'anesthesia-workstation': group = buildAnesthesiaWorkstation(); break;
          case 'patient-monitor': group = buildPatientMonitor(); break;
          case 'anesthesia-pendant': group = buildPendant('anesthesia'); break;
          case 'surgical-pendant': group = buildPendant('surgical'); break;
          case 'laminar-air-ceiling': group = buildLaminarAirflowCanopy(); break;
          case 'surgeon-control-panel': group = buildSurgeonControlPanel(); break;
          case 'scrub-station': group = buildScrubStation(); break;
          case 'hermetic-door': group = buildHermeticDoor(); break;
          case 'xray-viewer': group = buildXRayViewer(); break;
          case 'mayo-trolley': group = buildMayoTrolley(); break;
          case 'storage-cabinet': group = buildStorageCabinet(); break;
          case 'pass-box': group = buildPassBox(); break;
          case 'gas-terminal-units': group = buildGasTerminalUnits(); break;
          case 'pressure-relief-damper': group = buildPressureDamper(); break;
          default: break;
        }
      }

      if (group) {
        group.userData = { isEquipmentGroup: true, productId: prod.id };

        // Position & Rotate
        const state = equipmentStates[prod.id];
        const pos = state ? state.position : prod.defaultPosition;
        const rotY = state ? state.rotationY : prod.defaultRotationY;
        const visible = state ? state.visible : true;

        group.position.set(pos.x, pos.y, pos.z);
        group.rotation.y = rotY;
        group.visible = visible;

        scene.add(group);
        equipmentGroupsRef.current.set(prod.id, group);

        // Add 3D Numbered Badge Marker Sprite
        const marker = createMarkerSprite(prod.markerNumber, prod.id);
        marker.position.set(pos.x, pos.y + prod.heightOffset + 0.35, pos.z);
        marker.visible = showMarkers && visible;
        scene.add(marker);
        markersRef.current.set(prod.id, marker);
      }
    });
  }, [roomMode, layoutId, isInfrastructureMode, showAirflow, icuBackrestAngle, nurseCallActive]);

  // Sync Positions & Rotations when equipmentStates update
  useEffect(() => {
    equipmentGroupsRef.current.forEach((group, id) => {
      const state = equipmentStates[id];
      if (state) {
        group.position.set(state.position.x, state.position.y, state.position.z);
        group.rotation.y = state.rotationY;
        group.visible = state.visible;

        const prod = MEDGENZ_PRODUCTS.find((p) => p.id === id);
        const marker = markersRef.current.get(id);
        if (marker && prod) {
          marker.position.set(
            state.position.x,
            state.position.y + prod.heightOffset + 0.35,
            state.position.z
          );
          marker.visible = showMarkers && state.visible;
        }
      }
    });
  }, [equipmentStates, showMarkers]);

  // Update Grid & Selection Box
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const grid = scene.getObjectByName('floor-grid');
    if (grid) grid.visible = isEditMode;

    // Selection Outline Box
    if (selectionOutlineRef.current) {
      scene.remove(selectionOutlineRef.current);
      selectionOutlineRef.current = null;
    }

    if (selectedProductId) {
      const selectedGroup = equipmentGroupsRef.current.get(selectedProductId);
      if (selectedGroup) {
        const box = new THREE.BoxHelper(selectedGroup, 0xE6A100);
        box.name = 'selection-outline';
        scene.add(box);
        selectionOutlineRef.current = box;
      }
    }
  }, [selectedProductId, isEditMode]);

  // Camera Mode Presets & Smooth Animations
  useEffect(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    let targetPos = new THREE.Vector3();
    let targetLook = new THREE.Vector3(0, 1.1, 0);

    switch (cameraMode) {
      case 'top-down':
        targetPos.set(0, 8.5, 0.01);
        targetLook.set(0, 0, 0);
        break;
      case 'surgeon':
        targetPos.set(0.8, 1.65, 0.9);
        targetLook.set(0, 0.95, 0);
        break;
      case 'door':
        targetPos.set(0, 1.7, -3.2);
        targetLook.set(0, 1.2, 0);
        break;
      case 'free':
      default:
        targetPos.set(4.8, 4.2, 5.2);
        targetLook.set(0, 1.1, 0);
        break;
    }

    // Animate camera smoothly
    const startPos = camera.position.clone();
    const startLook = controls.target.clone();
    let progress = 0;

    const animCamera = () => {
      progress += 0.05;
      if (progress <= 1) {
        camera.position.lerpVectors(startPos, targetPos, progress);
        controls.target.lerpVectors(startLook, targetLook, progress);
        controls.update();
        requestAnimationFrame(animCamera);
      }
    };
    animCamera();
  }, [cameraMode]);

  // Pointer Interaction (Selection & Drag-to-move)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const camera = cameraRef.current;
    const scene = sceneRef.current;
    if (!container || !camera || !scene) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(x, y), camera);

    // Raycast markers first
    const markerObjects = Array.from(markersRef.current.values()).filter((m) => m.visible);
    const markerHits = raycaster.intersectObjects(markerObjects);
    if (markerHits.length > 0) {
      const hitMarker = markerHits[0].object as THREE.Sprite;
      const pid = hitMarker.userData?.productId;
      if (pid) {
        onSelectProduct(pid);
        return;
      }
    }

    // Raycast equipment groups
    const eqGroups = Array.from(equipmentGroupsRef.current.values()).filter((g) => g.visible);
    const hits = raycaster.intersectObjects(eqGroups, true);

    if (hits.length > 0) {
      let curr: THREE.Object3D | null = hits[0].object;
      while (curr && !curr.userData?.isEquipmentGroup) {
        curr = curr.parent;
      }

      if (curr && curr.userData?.productId) {
        const pid = curr.userData.productId;
        onSelectProduct(pid);

        // If in edit mode and product is movable & unlocked, initiate dragging
        if (isEditMode) {
          const state = equipmentStates[pid];
          const prod = MEDGENZ_PRODUCTS.find((p) => p.id === pid);

          if (state && !state.locked && prod && prod.isMovable) {
            isDraggingRef.current = true;
            if (controlsRef.current) controlsRef.current.enabled = false;

            dragPlaneRef.current.setFromNormalAndCoplanarPoint(
              new THREE.Vector3(0, 1, 0),
              new THREE.Vector3(0, state.position.y, 0)
            );

            if (raycaster.ray.intersectPlane(dragPlaneRef.current, planeIntersectRef.current)) {
              dragOffsetRef.current.subVectors(
                new THREE.Vector3(state.position.x, state.position.y, state.position.z),
                planeIntersectRef.current
              );
            }
          }
        }
        return;
      }
    }

    // Clicked empty background
    if (!isDraggingRef.current) {
      onSelectProduct(null);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !selectedProductId || !isEditMode) return;

    const container = containerRef.current;
    const camera = cameraRef.current;
    if (!container || !camera) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(x, y), camera);

    if (raycaster.ray.intersectPlane(dragPlaneRef.current, planeIntersectRef.current)) {
      const newPos = new THREE.Vector3().addVectors(planeIntersectRef.current, dragOffsetRef.current);

      // Clamp to room bounds
      const halfW = roomDims.width / 2 - 0.5;
      const halfL = roomDims.length / 2 - 0.5;
      const clampedX = Math.max(-halfW, Math.min(halfW, newPos.x));
      const clampedZ = Math.max(-halfL, Math.min(halfL, newPos.z));

      // Snap to 0.05m grid in edit mode
      const snappedX = Math.round(clampedX * 20) / 20;
      const snappedZ = Math.round(clampedZ * 20) / 20;

      const currentState = equipmentStates[selectedProductId];
      onUpdatePosition(selectedProductId, {
        x: snappedX,
        y: currentState ? currentState.position.y : 0,
        z: snappedZ,
      });
    }
  };

  const handlePointerUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      if (controlsRef.current) controlsRef.current.enabled = true;
    }
  };

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-slate-950">
      {webglError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-slate-300">
          <p className="text-base font-semibold text-amber-400 mb-2">{webglError}</p>
          <p className="text-xs text-slate-400 max-w-md">
            Please verify hardware acceleration is enabled in your browser settings or try accessing via a WebGL-compatible browser.
          </p>
        </div>
      ) : (
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        />
      )}
    </div>
  );
};
