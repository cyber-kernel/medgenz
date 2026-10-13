import * as THREE from 'three';
import {
  TheatreMaterials,
  createMonitorTexture,
  createSurgeonPanelTexture,
  createXRayTexture
} from './materials';

function createMesh(
  geometry: THREE.BufferGeometry,
  material: THREE.Material | THREE.Material[],
  castShadow = true,
  receiveShadow = true
): THREE.Mesh {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = castShadow;
  mesh.receiveShadow = receiveShadow;
  return mesh;
}

// 1. ROOM SHELL BUILDER
export function buildRoomShell(
  dimensions: { width: number; length: number; height: number },
  isInfrastructureMode = false
): THREE.Group {
  const room = new THREE.Group();
  room.name = 'room-shell';

  const halfW = dimensions.width / 2;
  const halfL = dimensions.length / 2;
  const H = dimensions.height;

  // Floor with anti-static coving
  const floorGeo = new THREE.PlaneGeometry(dimensions.width, dimensions.length);
  const floorMat = TheatreMaterials.floorEpoxy;
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  room.add(floor);

  // Floor skirting / coving along perimeter
  const covingGeoX = new THREE.BoxGeometry(dimensions.width, 0.12, 0.05);
  const covingGeoZ = new THREE.BoxGeometry(0.05, 0.12, dimensions.length);
  const covingMat = TheatreMaterials.darkStainless;

  const covingNorth = createMesh(covingGeoX, covingMat, false, true);
  covingNorth.position.set(0, 0.06, -halfL);
  room.add(covingNorth);

  const covingSouth = createMesh(covingGeoX, covingMat, false, true);
  covingSouth.position.set(0, 0.06, halfL);
  room.add(covingSouth);

  const covingWest = createMesh(covingGeoZ, covingMat, false, true);
  covingWest.position.set(-halfW, 0.06, 0);
  room.add(covingWest);

  const covingEast = createMesh(covingGeoZ, covingMat, false, true);
  covingEast.position.set(halfW, 0.06, 0);
  room.add(covingEast);

  // Modular Wall Panels
  const wallMat = isInfrastructureMode
    ? TheatreMaterials.wallPanelTransparent
    : TheatreMaterials.wallPanel;

  // North Wall (Z = -halfL) - contains hermetic door frame opening
  const northWallLeftGeo = new THREE.BoxGeometry((dimensions.width - 2.2) / 2, H, 0.08);
  const northWallLeft = createMesh(northWallLeftGeo, wallMat);
  northWallLeft.position.set(-(halfW - (dimensions.width - 2.2) / 4), H / 2, -halfL);
  room.add(northWallLeft);

  const northWallRight = createMesh(northWallLeftGeo, wallMat);
  northWallRight.position.set(halfW - (dimensions.width - 2.2) / 4, H / 2, -halfL);
  room.add(northWallRight);

  const northWallTopGeo = new THREE.BoxGeometry(2.2, H - 2.4, 0.08);
  const northWallTop = createMesh(northWallTopGeo, wallMat);
  northWallTop.position.set(0, 2.4 + (H - 2.4) / 2, -halfL);
  room.add(northWallTop);

  // South Wall (Z = halfL) - hidden in 3D cutaway view for clear line-of-sight
  const southWallGeo = new THREE.BoxGeometry(dimensions.width, H, 0.08);
  const southWall = createMesh(southWallGeo, wallMat);
  southWall.position.set(0, H / 2, halfL);
  southWall.visible = isInfrastructureMode;
  room.add(southWall);

  // West Wall (X = -halfW)
  const westWallGeo = new THREE.BoxGeometry(0.08, H, dimensions.length);
  const westWall = createMesh(westWallGeo, wallMat);
  westWall.position.set(-halfW, H / 2, 0);
  room.add(westWall);

  // East Wall (X = halfW) - hidden in 3D cutaway view for clear line-of-sight
  const eastWallGeo = new THREE.BoxGeometry(0.08, H, dimensions.length);
  const eastWall = createMesh(eastWallGeo, wallMat);
  eastWall.position.set(halfW, H / 2, 0);
  eastWall.visible = isInfrastructureMode;
  room.add(eastWall);

  // Modular Panel Seams (vertical joint strips every 1.2m)
  const seamMat = TheatreMaterials.darkStainless;
  const seamGeoN = new THREE.BoxGeometry(0.02, H, 0.09);
  for (let x = -halfW + 1.2; x < halfW; x += 1.2) {
    if (Math.abs(x) > 1.2) {
      const seamN = new THREE.Mesh(seamGeoN, seamMat);
      seamN.position.set(x, H / 2, -halfL);
      room.add(seamN);
    }
  }

  const seamGeoW = new THREE.BoxGeometry(0.09, H, 0.02);
  for (let z = -halfL + 1.2; z < halfL; z += 1.2) {
    const seamW = new THREE.Mesh(seamGeoW, seamMat);
    seamW.position.set(-halfW, H / 2, z);
    room.add(seamW);
  }

  // MedGenz Signature Golden Yellow Dado / Impact Protection Rail along North & West walls
  const dadoMat = TheatreMaterials.plasticGold;
  const dadoGeoN = new THREE.BoxGeometry(dimensions.width, 0.08, 0.095);
  const dadoN = createMesh(dadoGeoN, dadoMat);
  dadoN.position.set(0, 1.05, -halfL);
  room.add(dadoN);

  const dadoGeoW = new THREE.BoxGeometry(0.095, 0.08, dimensions.length);
  const dadoW = createMesh(dadoGeoW, dadoMat);
  dadoW.position.set(-halfW, 1.05, 0);
  room.add(dadoW);

  // Stainless Steel Lower Wall Kickplates
  const kickMat = TheatreMaterials.stainlessSteel;
  const kickGeoN = new THREE.BoxGeometry(dimensions.width, 0.25, 0.09);
  const kickN = createMesh(kickGeoN, kickMat);
  kickN.position.set(0, 0.125, -halfL);
  room.add(kickN);

  const kickGeoW = new THREE.BoxGeometry(0.09, 0.25, dimensions.length);
  const kickW = createMesh(kickGeoW, kickMat);
  kickW.position.set(-halfW, 0.125, 0);
  room.add(kickW);

  // Ceiling Grid & Outer Ceiling Tiles
  const ceilingFrameMat = TheatreMaterials.ceilingPlenum;
  const ceilingGeo = new THREE.PlaneGeometry(dimensions.width, dimensions.length);
  const ceiling = new THREE.Mesh(ceilingGeo, ceilingFrameMat);
  ceiling.rotation.x = Math.PI / 2;
  ceiling.position.y = H;
  room.add(ceiling);

  // Peripheral Cleanroom Flush LED Light Panels
  const ledGeo = new THREE.BoxGeometry(1.2, 0.04, 0.35);
  const ledMat = TheatreMaterials.peripheralLightEmissive;
  const lightPositions = [
    { x: -1.8, y: H - 0.02, z: -2.0 },
    { x: 1.8, y: H - 0.02, z: -2.0 },
    { x: -1.8, y: H - 0.02, z: 2.0 },
    { x: 1.8, y: H - 0.02, z: 2.0 },
    { x: -2.2, y: H - 0.02, z: 0 },
    { x: 2.2, y: H - 0.02, z: 0 },
  ];

  lightPositions.forEach((pos) => {
    const luminaire = createMesh(ledGeo, ledMat, false, false);
    luminaire.position.set(pos.x, pos.y, pos.z);
    room.add(luminaire);

    const pLight = new THREE.PointLight(0xfff7ed, 0.25, 6, 2);
    pLight.position.set(pos.x, pos.y - 0.1, pos.z);
    room.add(pLight);
  });

  return room;
}

// 2. MOTORIZED OPERATING TABLE
export function buildOperatingTable(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'op-table-group';

  // Base Pedestal (brushed stainless steel shroud)
  const baseGeo = new THREE.BoxGeometry(0.85, 0.12, 1.35);
  const base = createMesh(baseGeo, TheatreMaterials.stainlessSteel);
  base.position.set(0, 0.06, 0);
  group.add(base);

  // Dual Central Hydraulic Column (telescoping stainless columns)
  const colGeo = new THREE.CylinderGeometry(0.18, 0.2, 0.68, 24);
  const col = createMesh(colGeo, TheatreMaterials.stainlessSteel);
  col.position.set(0, 0.44, 0);
  group.add(col);

  // Column bellows collar
  const bellowsGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.2, 24);
  const bellows = createMesh(bellowsGeo, TheatreMaterials.rubberDark);
  bellows.position.set(0, 0.72, 0);
  group.add(bellows);

  // Sub-chassis table mount
  const mountGeo = new THREE.BoxGeometry(0.55, 0.08, 1.1);
  const mount = createMesh(mountGeo, TheatreMaterials.stainlessSteel);
  mount.position.set(0, 0.84, 0);
  group.add(mount);

  // Segmented Radio-translucent Tabletop Mattress
  const matGeoHead = new THREE.BoxGeometry(0.52, 0.09, 0.35);
  const matGeoTorso = new THREE.BoxGeometry(0.56, 0.09, 0.85);
  const matGeoLegLeft = new THREE.BoxGeometry(0.26, 0.09, 0.75);
  const matGeoLegRight = new THREE.BoxGeometry(0.26, 0.09, 0.75);

  const matMaterial = TheatreMaterials.tableMattress;

  // Torso Section
  const torso = createMesh(matGeoTorso, matMaterial);
  torso.position.set(0, 0.92, 0.05);
  group.add(torso);

  // Head Section (slightly angled)
  const head = createMesh(matGeoHead, matMaterial);
  head.position.set(0, 0.93, -0.6);
  head.rotation.x = -0.05;
  group.add(head);

  // Split Leg Sections (left & right)
  const legLeft = createMesh(matGeoLegLeft, matMaterial);
  legLeft.position.set(-0.14, 0.91, 0.88);
  group.add(legLeft);

  const legRight = createMesh(matGeoLegRight, matMaterial);
  legRight.position.set(0.14, 0.91, 0.88);
  group.add(legRight);

  // Bilateral stainless steel surgical accessory rails
  const railGeo = new THREE.CylinderGeometry(0.012, 0.012, 1.8, 12);
  const railMat = TheatreMaterials.surgicalChrome;

  const railLeft = createMesh(railGeo, railMat);
  railLeft.rotation.x = Math.PI / 2;
  railLeft.position.set(-0.31, 0.88, 0.1);
  group.add(railLeft);

  const railRight = createMesh(railGeo, railMat);
  railRight.rotation.x = Math.PI / 2;
  railRight.position.set(0.31, 0.88, 0.1);
  group.add(railRight);

  // Arm Boards (Left & Right)
  const armBoardGeo = new THREE.BoxGeometry(0.16, 0.05, 0.55);
  const armLeft = createMesh(armBoardGeo, matMaterial);
  armLeft.position.set(-0.45, 0.88, -0.1);
  armLeft.rotation.y = 0.2;
  group.add(armLeft);

  const armRight = createMesh(armBoardGeo, matMaterial);
  armRight.position.set(0.45, 0.88, -0.1);
  armRight.rotation.y = -0.2;
  group.add(armRight);

  // Floor Brake Pedals
  const pedalGeo = new THREE.BoxGeometry(0.08, 0.04, 0.14);
  const pedalMat = TheatreMaterials.plasticGold;
  const pedal = createMesh(pedalGeo, pedalMat);
  pedal.position.set(0.38, 0.05, 0.6);
  group.add(pedal);

  return group;
}

// 3. DUAL-DOME SURGICAL LIGHTING SYSTEM
export function buildSurgicalLights(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'surgical-lights-group';

  const spindleGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.25, 24);
  const spindle = createMesh(spindleGeo, TheatreMaterials.surgicalLightHousing);
  spindle.position.set(0, 0.12, 0);
  group.add(spindle);

  // Major Arm System
  const armGeoH1 = new THREE.CylinderGeometry(0.035, 0.035, 0.9, 16);
  const armH1 = createMesh(armGeoH1, TheatreMaterials.surgicalLightHousing);
  armH1.rotation.z = Math.PI / 2.3;
  armH1.position.set(-0.4, -0.1, 0);
  group.add(armH1);

  const armV1 = createMesh(armGeoH1, TheatreMaterials.surgicalLightHousing);
  armV1.rotation.z = -Math.PI / 3;
  armV1.position.set(-0.85, -0.4, 0.1);
  group.add(armV1);

  const domeGeo = new THREE.CylinderGeometry(0.35, 0.32, 0.1, 32);
  const majorDome = createMesh(domeGeo, TheatreMaterials.surgicalLightHousing);
  majorDome.position.set(-1.1, -0.7, 0.1);
  majorDome.rotation.x = 0.25;
  majorDome.rotation.z = 0.15;
  group.add(majorDome);

  const lensGeo = new THREE.CylinderGeometry(0.33, 0.33, 0.02, 32);
  const majorLens = createMesh(lensGeo, TheatreMaterials.surgicalLightEmissive, false, false);
  majorLens.position.set(-1.1, -0.75, 0.1);
  majorLens.rotation.copy(majorDome.rotation);
  group.add(majorLens);

  const handleGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.12, 16);
  const handle = createMesh(handleGeo, TheatreMaterials.surgicalChrome);
  handle.position.set(-1.1, -0.82, 0.1);
  group.add(handle);

  const spotLightMajor = new THREE.SpotLight(0xffffff, 2.8, 5, Math.PI / 6, 0.4, 1.2);
  spotLightMajor.position.set(-1.1, -0.75, 0.1);
  spotLightMajor.target.position.set(0, 0.9, 0);
  group.add(spotLightMajor);
  group.add(spotLightMajor.target);

  // Minor Arm System
  const armGeoH2 = new THREE.CylinderGeometry(0.03, 0.03, 0.8, 16);
  const armH2 = createMesh(armGeoH2, TheatreMaterials.surgicalLightHousing);
  armH2.rotation.z = -Math.PI / 2.5;
  armH2.position.set(0.38, -0.08, -0.2);
  group.add(armH2);

  const armV2 = createMesh(armGeoH2, TheatreMaterials.surgicalLightHousing);
  armV2.rotation.z = Math.PI / 3.2;
  armV2.position.set(0.78, -0.35, -0.3);
  group.add(armV2);

  const minorDomeGeo = new THREE.CylinderGeometry(0.25, 0.23, 0.09, 32);
  const minorDome = createMesh(minorDomeGeo, TheatreMaterials.surgicalLightHousing);
  minorDome.position.set(0.95, -0.62, -0.35);
  minorDome.rotation.x = -0.3;
  minorDome.rotation.z = -0.2;
  group.add(minorDome);

  const minorLens = createMesh(new THREE.CylinderGeometry(0.24, 0.24, 0.02, 32), TheatreMaterials.surgicalLightEmissive, false, false);
  minorLens.position.set(0.95, -0.67, -0.35);
  minorLens.rotation.copy(minorDome.rotation);
  group.add(minorLens);

  const spotLightMinor = new THREE.SpotLight(0xffffff, 2.0, 5, Math.PI / 7, 0.5, 1.2);
  spotLightMinor.position.set(0.95, -0.67, -0.35);
  spotLightMinor.target.position.set(0, 0.9, 0);
  group.add(spotLightMinor);
  group.add(spotLightMinor.target);

  return group;
}

// 4. INTEGRATED ANESTHESIA WORKSTATION
export function buildAnesthesiaWorkstation(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'anesthesia-workstation-group';

  const baseGeo = new THREE.BoxGeometry(0.72, 0.18, 0.65);
  const base = createMesh(baseGeo, TheatreMaterials.darkStainless);
  base.position.set(0, 0.09, 0);
  group.add(base);

  const castorGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.04, 16);
  const castorMat = TheatreMaterials.rubberDark;
  [[-0.3, -0.26], [0.3, -0.26], [-0.3, 0.26], [0.3, 0.26]].forEach(([cx, cz]) => {
    const castor = createMesh(castorGeo, castorMat);
    castor.rotation.z = Math.PI / 2;
    castor.position.set(cx, 0.04, cz);
    group.add(castor);
  });

  const cabGeo = new THREE.BoxGeometry(0.68, 0.55, 0.6);
  const cab = createMesh(cabGeo, TheatreMaterials.plasticWhite);
  cab.position.set(0, 0.45, 0);
  group.add(cab);

  const handleGeo = new THREE.BoxGeometry(0.35, 0.02, 0.03);
  [0.32, 0.48, 0.64].forEach((hy) => {
    const h = createMesh(handleGeo, TheatreMaterials.surgicalChrome);
    h.position.set(0, hy, 0.31);
    group.add(h);
  });

  const tableGeo = new THREE.BoxGeometry(0.74, 0.04, 0.66);
  const table = createMesh(tableGeo, TheatreMaterials.stainlessSteel);
  table.position.set(0, 0.74, 0);
  group.add(table);

  const uprightGeo = new THREE.BoxGeometry(0.05, 0.65, 0.05);
  const uprightL = createMesh(uprightGeo, TheatreMaterials.stainlessSteel);
  uprightL.position.set(-0.32, 1.08, -0.26);
  group.add(uprightL);

  const uprightR = createMesh(uprightGeo, TheatreMaterials.stainlessSteel);
  uprightR.position.set(0.32, 1.08, -0.26);
  group.add(uprightR);

  const vapGeo = new THREE.BoxGeometry(0.12, 0.25, 0.16);
  const vapSevo = createMesh(vapGeo, TheatreMaterials.gasVacuum);
  vapSevo.position.set(-0.16, 0.95, -0.15);
  group.add(vapSevo);

  const vapIso = createMesh(vapGeo, TheatreMaterials.gasNitrous);
  vapIso.position.set(0.04, 0.95, -0.15);
  group.add(vapIso);

  const flowGeo = new THREE.BoxGeometry(0.24, 0.32, 0.08);
  const flowBlock = createMesh(flowGeo, TheatreMaterials.darkStainless);
  flowBlock.position.set(0.2, 0.98, -0.15);
  group.add(flowBlock);

  const canisterGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.34, 20);
  const canister = createMesh(canisterGeo, TheatreMaterials.glassWindow);
  canister.position.set(-0.24, 0.95, 0.16);
  group.add(canister);

  const ventScreenGeo = new THREE.BoxGeometry(0.42, 0.32, 0.05);
  const ventScreen = createMesh(ventScreenGeo, TheatreMaterials.darkStainless);
  ventScreen.position.set(0, 1.35, -0.15);
  ventScreen.rotation.x = -0.15;
  group.add(ventScreen);

  const ventFaceGeo = new THREE.PlaneGeometry(0.38, 0.28);
  const ventFaceMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
  const ventFace = new THREE.Mesh(ventFaceGeo, ventFaceMat);
  ventFace.position.set(0, 1.35, -0.12);
  ventFace.rotation.x = -0.15;
  group.add(ventFace);

  return group;
}

// 5. MULTI-PARAMETER PATIENT MONITOR
export function buildPatientMonitor(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'patient-monitor-group';

  const bodyGeo = new THREE.BoxGeometry(0.52, 0.36, 0.12);
  const body = createMesh(bodyGeo, TheatreMaterials.plasticWhite);
  group.add(body);

  const bezelGeo = new THREE.BoxGeometry(0.5, 0.34, 0.02);
  const bezel = createMesh(bezelGeo, TheatreMaterials.darkStainless);
  bezel.position.set(0, 0, 0.06);
  group.add(bezel);

  const screenGeo = new THREE.PlaneGeometry(0.46, 0.3);
  const screenMat = new THREE.MeshBasicMaterial({ map: createMonitorTexture() });
  const screen = new THREE.Mesh(screenGeo, screenMat);
  screen.position.set(0, 0, 0.072);
  group.add(screen);

  const alarmGeo = new THREE.BoxGeometry(0.18, 0.03, 0.05);
  const alarm = createMesh(alarmGeo, TheatreMaterials.greenNormal, false, false);
  alarm.position.set(0, 0.19, 0);
  group.add(alarm);

  const armGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.35, 16);
  const arm = createMesh(armGeo, TheatreMaterials.surgicalChrome);
  arm.rotation.x = Math.PI / 2;
  arm.position.set(0, 0, -0.2);
  group.add(arm);

  return group;
}

// 6. CEILING UTILITY PENDANT (Anesthesia or Surgical)
export function buildPendant(type: 'anesthesia' | 'surgical'): THREE.Group {
  const group = new THREE.Group();
  group.name = `pendant-${type}-group`;

  const flangeGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.08, 24);
  const flange = createMesh(flangeGeo, TheatreMaterials.stainlessSteel);
  flange.position.set(0, 0.04, 0);
  group.add(flange);

  const downColGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.65, 20);
  const downCol = createMesh(downColGeo, TheatreMaterials.stainlessSteel);
  downCol.position.set(0, -0.3, 0);
  group.add(downCol);

  const arm1Geo = new THREE.BoxGeometry(0.85, 0.12, 0.14);
  const arm1 = createMesh(arm1Geo, TheatreMaterials.plasticWhite);
  arm1.position.set(0.35, -0.65, 0);
  group.add(arm1);

  const knuckleGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.22, 20);
  const knuckle = createMesh(knuckleGeo, TheatreMaterials.darkStainless);
  knuckle.position.set(0.72, -0.65, 0);
  group.add(knuckle);

  const consoleGeo = new THREE.BoxGeometry(0.38, 1.05, 0.38);
  const consoleBody = createMesh(consoleGeo, TheatreMaterials.plasticWhite);
  consoleBody.position.set(0.72, -1.25, 0);
  group.add(consoleBody);

  const gasRingGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.03, 16);
  const gasMaterials = [
    TheatreMaterials.gasOxygen,
    TheatreMaterials.gasNitrous,
    TheatreMaterials.gasAir,
    TheatreMaterials.gasVacuum,
  ];

  gasMaterials.forEach((mat, idx) => {
    const ring = createMesh(gasRingGeo, mat);
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0.62 + (idx % 2) * 0.12, -1.0 - Math.floor(idx / 2) * 0.12, 0.2);
    group.add(ring);
  });

  const socketGeo = new THREE.BoxGeometry(0.08, 0.06, 0.02);
  [-1.3, -1.45, -1.6].forEach((sy) => {
    const s1 = createMesh(socketGeo, TheatreMaterials.darkStainless);
    s1.position.set(0.64, sy, 0.2);
    group.add(s1);

    const s2 = createMesh(socketGeo, TheatreMaterials.darkStainless);
    s2.position.set(0.78, sy, 0.2);
    group.add(s2);
  });

  const shelfGeo = new THREE.BoxGeometry(0.55, 0.03, 0.48);
  const sTop = createMesh(shelfGeo, TheatreMaterials.stainlessSteel);
  sTop.position.set(0.72, -1.15, 0);
  group.add(sTop);

  const sBottom = createMesh(shelfGeo, TheatreMaterials.stainlessSteel);
  sBottom.position.set(0.72, -1.5, 0);
  group.add(sBottom);

  const handleBarGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.45, 12);
  const handleL = createMesh(handleBarGeo, TheatreMaterials.surgicalChrome);
  handleL.position.set(0.48, -1.75, 0.22);
  handleL.rotation.z = Math.PI / 2;
  group.add(handleL);

  return group;
}

// 7. SURGICAL SCRUB STATION (Double Bay)
export function buildScrubStation(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'scrub-station-group';

  const splashGeo = new THREE.BoxGeometry(1.6, 1.25, 0.05);
  const splash = createMesh(splashGeo, TheatreMaterials.stainlessSteel);
  splash.position.set(0, 0.95, 0);
  group.add(splash);

  const basinGeo = new THREE.BoxGeometry(1.5, 0.45, 0.55);
  const basin = createMesh(basinGeo, TheatreMaterials.stainlessSteel);
  basin.position.set(0, 0.65, 0.3);
  group.add(basin);

  const innerSinkGeo = new THREE.BoxGeometry(0.65, 0.38, 0.45);
  const inner1 = createMesh(innerSinkGeo, TheatreMaterials.darkStainless);
  inner1.position.set(-0.38, 0.68, 0.3);
  group.add(inner1);

  const inner2 = createMesh(innerSinkGeo, TheatreMaterials.darkStainless);
  inner2.position.set(0.38, 0.68, 0.3);
  group.add(inner2);

  const spoutMat = TheatreMaterials.surgicalChrome;
  [-0.38, 0.38].forEach((fx) => {
    const neckGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.3, 16);
    const neck = createMesh(neckGeo, spoutMat);
    neck.position.set(fx, 1.05, 0.15);
    neck.rotation.x = 0.3;
    group.add(neck);

    const sensorGeo = new THREE.BoxGeometry(0.04, 0.04, 0.02);
    const sensor = createMesh(sensorGeo, TheatreMaterials.redEmergency);
    sensor.position.set(fx, 0.94, 0.04);
    group.add(sensor);

    const dispGeo = new THREE.BoxGeometry(0.12, 0.22, 0.1);
    const disp = createMesh(dispGeo, TheatreMaterials.plasticWhite);
    disp.position.set(fx > 0 ? fx + 0.3 : fx - 0.3, 1.2, 0.06);
    group.add(disp);
  });

  return group;
}

// 8. DIGITAL SURGEON CONTROL PANEL
export function buildSurgeonControlPanel(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'surgeon-panel-group';

  const frameGeo = new THREE.BoxGeometry(0.72, 0.95, 0.04);
  const frame = createMesh(frameGeo, TheatreMaterials.stainlessSteel);
  group.add(frame);

  const glassGeo = new THREE.PlaneGeometry(0.66, 0.88);
  const glassMat = new THREE.MeshBasicMaterial({ map: createSurgeonPanelTexture() });
  const glass = new THREE.Mesh(glassGeo, glassMat);
  glass.position.set(0, 0, 0.022);
  group.add(glass);

  return group;
}

// 9. FLUSH X-RAY / DICOM FILM VIEWER
export function buildXRayViewer(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'xray-viewer-group';

  const encGeo = new THREE.BoxGeometry(1.2, 0.65, 0.04);
  const enc = createMesh(encGeo, TheatreMaterials.stainlessSteel);
  group.add(enc);

  const screenGeo = new THREE.PlaneGeometry(1.12, 0.58);
  const screenMat = new THREE.MeshBasicMaterial({ map: createXRayTexture() });
  const screen = new THREE.Mesh(screenGeo, screenMat);
  screen.position.set(0, 0, 0.022);
  group.add(screen);

  return group;
}

// 10. SURGICAL MAYO TROLLEY
export function buildMayoTrolley(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'mayo-trolley-group';

  const baseUGeo = new THREE.BoxGeometry(0.65, 0.05, 0.55);
  const base = createMesh(baseUGeo, TheatreMaterials.stainlessSteel);
  base.position.set(0, 0.04, 0);
  group.add(base);

  const postGeo = new THREE.CylinderGeometry(0.025, 0.028, 0.95, 16);
  const post = createMesh(postGeo, TheatreMaterials.surgicalChrome);
  post.position.set(0.26, 0.52, 0);
  group.add(post);

  const trayGeo = new THREE.BoxGeometry(0.7, 0.04, 0.5);
  const tray = createMesh(trayGeo, TheatreMaterials.stainlessSteel);
  tray.position.set(0, 1.02, 0);
  group.add(tray);

  const drapeGeo = new THREE.BoxGeometry(0.66, 0.015, 0.46);
  const drapeMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.7 });
  const drape = createMesh(drapeGeo, drapeMat);
  drape.position.set(0, 1.045, 0);
  group.add(drape);

  const instMat = TheatreMaterials.surgicalChrome;
  const instGeo1 = new THREE.BoxGeometry(0.16, 0.01, 0.02);
  const instGeo2 = new THREE.BoxGeometry(0.18, 0.01, 0.03);

  for (let i = 0; i < 5; i++) {
    const inst = createMesh(i % 2 === 0 ? instGeo1 : instGeo2, instMat);
    inst.position.set(-0.2 + i * 0.09, 1.055, 0);
    inst.rotation.y = 0.1 * (i - 2);
    group.add(inst);
  }

  return group;
}

// 11. FLUSH STORAGE CABINET
export function buildStorageCabinet(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'storage-cabinet-group';

  const caseGeo = new THREE.BoxGeometry(1.25, 1.85, 0.45);
  const casing = createMesh(caseGeo, TheatreMaterials.stainlessSteel);
  group.add(casing);

  const glassDoorGeo = new THREE.BoxGeometry(0.56, 1.75, 0.03);
  const glassDoorL = createMesh(glassDoorGeo, TheatreMaterials.glassWindow);
  glassDoorL.position.set(-0.29, 0, 0.23);
  group.add(glassDoorL);

  const glassDoorR = createMesh(glassDoorGeo, TheatreMaterials.glassWindow);
  glassDoorR.position.set(0.29, 0, 0.23);
  group.add(glassDoorR);

  const shelfGeo = new THREE.BoxGeometry(1.15, 0.03, 0.38);
  [-0.5, -0.1, 0.3, 0.65].forEach((sy) => {
    const shelf = createMesh(shelfGeo, TheatreMaterials.stainlessSteel);
    shelf.position.set(0, sy, 0);
    group.add(shelf);
  });

  return group;
}

// 12. INTERLOCKING PASS BOX
export function buildPassBox(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'pass-box-group';

  const boxGeo = new THREE.BoxGeometry(0.68, 0.68, 0.55);
  const box = createMesh(boxGeo, TheatreMaterials.stainlessSteel);
  group.add(box);

  const doorGeo = new THREE.BoxGeometry(0.56, 0.56, 0.03);
  const door = createMesh(doorGeo, TheatreMaterials.glassWindow);
  door.position.set(0, 0, 0.28);
  group.add(door);

  const uvGeo = new THREE.SphereGeometry(0.02, 16, 16);
  const uvMat = new THREE.MeshBasicMaterial({ color: 0xE6A100 });
  const uv = new THREE.Mesh(uvGeo, uvMat);
  uv.position.set(0.22, 0.26, 0.29);
  group.add(uv);

  return group;
}

// 13. HERMETIC SLIDING DOOR
export function buildHermeticDoor(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'hermetic-door-group';

  const trackGeo = new THREE.BoxGeometry(2.6, 0.18, 0.16);
  const track = createMesh(trackGeo, TheatreMaterials.stainlessSteel);
  track.position.set(0.3, 2.22, 0.06);
  group.add(track);

  const leafGeo = new THREE.BoxGeometry(1.5, 2.1, 0.06);
  const leaf = createMesh(leafGeo, TheatreMaterials.plasticWhite);
  leaf.position.set(0, 1.05, 0.02);
  group.add(leaf);

  const winGeo = new THREE.BoxGeometry(0.4, 0.7, 0.08);
  const win = createMesh(winGeo, TheatreMaterials.glassWindow);
  win.position.set(0, 1.35, 0.02);
  group.add(win);

  const handleGeo = new THREE.BoxGeometry(0.04, 0.35, 0.02);
  const handle = createMesh(handleGeo, TheatreMaterials.stainlessSteel);
  handle.position.set(0.6, 1.0, 0.06);
  group.add(handle);

  return group;
}

// 14. LAMINAR AIRFLOW CEILING CANOPY (Plenum Box)
export function buildLaminarAirflowCanopy(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'laminar-air-canopy-group';

  const plenumGeo = new THREE.BoxGeometry(2.5, 0.25, 2.5);
  const plenum = createMesh(plenumGeo, TheatreMaterials.stainlessSteel);
  plenum.position.set(0, 0, 0);
  group.add(plenum);

  const screenGeo = new THREE.PlaneGeometry(2.4, 2.4);
  const screen = new THREE.Mesh(screenGeo, TheatreMaterials.hepaDiffuser);
  screen.rotation.x = Math.PI / 2;
  screen.position.set(0, -0.13, 0);
  group.add(screen);

  const spindleCutGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.28, 24);
  const spindleCollar = createMesh(spindleCutGeo, TheatreMaterials.stainlessSteel);
  spindleCollar.position.set(0, 0, 0);
  group.add(spindleCollar);

  return group;
}

// 15. MEDICAL GAS TERMINAL UNITS (Wall Panel)
export function buildGasTerminalUnits(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'gas-terminal-units-group';

  const plateGeo = new THREE.BoxGeometry(0.65, 0.18, 0.03);
  const plate = createMesh(plateGeo, TheatreMaterials.stainlessSteel);
  group.add(plate);

  const outlets = [
    { mat: TheatreMaterials.gasOxygen, x: -0.22 },
    { mat: TheatreMaterials.gasNitrous, x: -0.07 },
    { mat: TheatreMaterials.gasAir, x: 0.08 },
    { mat: TheatreMaterials.gasVacuum, x: 0.23 },
  ];

  outlets.forEach(({ mat, x }) => {
    const outGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.03, 16);
    const out = createMesh(outGeo, mat);
    out.rotation.x = Math.PI / 2;
    out.position.set(x, 0, 0.025);
    group.add(out);
  });

  return group;
}

// 16. PRESSURE RELIEF DAMPER
export function buildPressureDamper(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'pressure-damper-group';

  const frameGeo = new THREE.BoxGeometry(0.42, 0.42, 0.04);
  const frame = createMesh(frameGeo, TheatreMaterials.stainlessSteel);
  group.add(frame);

  const bladeGeo = new THREE.BoxGeometry(0.36, 0.06, 0.01);
  [-0.12, -0.04, 0.04, 0.12].forEach((by) => {
    const blade = createMesh(bladeGeo, TheatreMaterials.darkStainless);
    blade.position.set(0, by, 0.015);
    blade.rotation.x = 0.2;
    group.add(blade);
  });

  return group;
}

// 17. MEDICAL GAS PIPELINE SYSTEM (MGPS Infrastructure Inspection)
export function buildGasPipelineSystem(dimensions: { width: number; length: number; height: number }): THREE.Group {
  const group = new THREE.Group();
  group.name = 'mgps-pipelines';

  const halfW = dimensions.width / 2;
  const halfL = dimensions.length / 2;
  const H = dimensions.height;

  const pipeConfigs = [
    { mat: TheatreMaterials.gasOxygen, yOffset: 0.08, name: 'O2 (White)' },
    { mat: TheatreMaterials.gasNitrous, yOffset: 0.16, name: 'N2O (Blue)' },
    { mat: TheatreMaterials.gasAir, yOffset: 0.24, name: 'Air 4-Bar (Black/White)' },
    { mat: TheatreMaterials.gasVacuum, yOffset: 0.32, name: 'Vacuum (Yellow)' },
  ];

  pipeConfigs.forEach((cfg) => {
    const pipeXGeo = new THREE.CylinderGeometry(0.018, 0.018, dimensions.width - 0.4, 12);
    const pipeX = new THREE.Mesh(pipeXGeo, TheatreMaterials.copperPipe);
    pipeX.rotation.z = Math.PI / 2;
    pipeX.position.set(0, H - cfg.yOffset, -halfL + 0.3);
    group.add(pipeX);

    const ringGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.08, 12);
    [-1.5, 0, 1.5].forEach((rx) => {
      const ring = new THREE.Mesh(ringGeo, cfg.mat);
      ring.rotation.z = Math.PI / 2;
      ring.position.set(rx, H - cfg.yOffset, -halfL + 0.3);
      group.add(ring);
    });

    const dropGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.5, 12);
    const drop = new THREE.Mesh(dropGeo, TheatreMaterials.copperPipe);
    drop.position.set(-halfW + 0.25, H - 0.75 - cfg.yOffset, -halfL + 0.8 + cfg.yOffset * 3);
    group.add(drop);
  });

  const avsuGeo = new THREE.BoxGeometry(0.65, 0.5, 0.14);
  const avsu = createMesh(avsuGeo, TheatreMaterials.stainlessSteel);
  avsu.position.set(-halfW + 0.15, 1.6, -halfL + 1.2);
  group.add(avsu);

  const avsuWin = createMesh(new THREE.BoxGeometry(0.55, 0.4, 0.02), TheatreMaterials.glassWindow);
  avsuWin.position.set(-halfW + 0.22, 1.6, -halfL + 1.2);
  group.add(avsuWin);

  return group;
}

// 18. LAMINAR AIRFLOW STREAMLINES
export function buildLaminarAirflowParticles(): THREE.Points {
  const count = 350;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2.2;
    positions[i * 3 + 1] = 0.9 + Math.random() * 2.0;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2.2;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xE6A100, // MedGenz Golden airflow particles
    size: 0.035,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geometry, material);
  points.name = 'laminar-particles';
  return points;
}

// 19. ELECTRIC ICU BED
export function buildIcuBed(backrestAngle = 30): THREE.Group {
  const group = new THREE.Group();
  group.name = 'icu-bed-group';

  const baseGeo = new THREE.BoxGeometry(1.0, 0.12, 2.15);
  const base = createMesh(baseGeo, TheatreMaterials.plasticWhite);
  base.position.set(0, 0.15, 0);
  group.add(base);

  const wheelGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.04, 16);
  [[-0.42, -0.9], [0.42, -0.9], [-0.42, 0.9], [0.42, 0.9]].forEach(([wx, wz]) => {
    const w = createMesh(wheelGeo, TheatreMaterials.rubberDark);
    w.rotation.z = Math.PI / 2;
    w.position.set(wx, 0.06, wz);
    group.add(w);
  });

  const actGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.35, 12);
  const act = createMesh(actGeo, TheatreMaterials.surgicalChrome);
  act.position.set(0, 0.35, 0);
  group.add(act);

  const railGeo = new THREE.BoxGeometry(0.06, 0.38, 0.55);
  [
    [-0.48, -0.3], [0.48, -0.3],
    [-0.48, 0.45], [0.48, 0.45],
  ].forEach(([rx, rz]) => {
    const r = createMesh(railGeo, TheatreMaterials.plasticGold);
    r.position.set(rx, 0.72, rz);
    group.add(r);
  });

  const boardGeo = new THREE.BoxGeometry(0.96, 0.55, 0.06);
  const headboard = createMesh(boardGeo, TheatreMaterials.plasticWhite);
  headboard.position.set(0, 0.8, -1.05);
  group.add(headboard);

  const footboard = createMesh(boardGeo, TheatreMaterials.plasticWhite);
  footboard.position.set(0, 0.8, 1.05);
  group.add(footboard);

  const rad = (backrestAngle * Math.PI) / 180;
  const backMatGeo = new THREE.BoxGeometry(0.88, 0.12, 0.85);
  const backrest = createMesh(backMatGeo, TheatreMaterials.tableMattress);
  backrest.position.set(0, 0.58 + Math.sin(rad) * 0.25, -0.45 - Math.cos(rad) * 0.1);
  backrest.rotation.x = -rad;
  group.add(backrest);

  const legMatGeo = new THREE.BoxGeometry(0.88, 0.12, 1.05);
  const legMat = createMesh(legMatGeo, TheatreMaterials.tableMattress);
  legMat.position.set(0, 0.58, 0.45);
  group.add(legMat);

  const ivPoleGeo = new THREE.CylinderGeometry(0.012, 0.012, 1.4, 12);
  const ivPole = createMesh(ivPoleGeo, TheatreMaterials.surgicalChrome);
  ivPole.position.set(0.42, 1.1, -1.0);
  group.add(ivPole);

  return group;
}

// 20. EMERGENCY CRASH CART
export function buildCrashCart(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'crash-cart-group';

  const bodyGeo = new THREE.BoxGeometry(0.68, 0.85, 0.52);
  const body = createMesh(bodyGeo, TheatreMaterials.redEmergency);
  body.position.set(0, 0.52, 0);
  group.add(body);

  const drawerGeo = new THREE.BoxGeometry(0.62, 0.12, 0.02);
  [0.25, 0.4, 0.55, 0.7, 0.85].forEach((dy) => {
    const d = createMesh(drawerGeo, TheatreMaterials.plasticWhite);
    d.position.set(0, dy, 0.26);
    group.add(d);
  });

  const defGeo = new THREE.BoxGeometry(0.35, 0.03, 0.35);
  const defShelf = createMesh(defGeo, TheatreMaterials.stainlessSteel);
  defShelf.position.set(0.42, 1.02, 0);
  group.add(defShelf);

  const defUnitGeo = new THREE.BoxGeometry(0.28, 0.2, 0.22);
  const defUnit = createMesh(defUnitGeo, TheatreMaterials.darkStainless);
  defUnit.position.set(0.42, 1.14, 0);
  group.add(defUnit);

  const o2CylGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.65, 16);
  const o2Cyl = createMesh(o2CylGeo, TheatreMaterials.gasAir);
  o2Cyl.position.set(-0.25, 0.5, -0.32);
  group.add(o2Cyl);

  return group;
}

// 21. NURSE CALL BEDSIDE STATION
export function buildNurseCallStation(isActive = false): THREE.Group {
  const group = new THREE.Group();
  group.name = 'nurse-call-station-group';

  const plateGeo = new THREE.BoxGeometry(0.18, 0.28, 0.02);
  const plate = createMesh(plateGeo, TheatreMaterials.plasticWhite);
  group.add(plate);

  const callBtnGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.02, 16);
  const callBtn = createMesh(callBtnGeo, TheatreMaterials.redEmergency);
  callBtn.rotation.x = Math.PI / 2;
  callBtn.position.set(0, 0.04, 0.015);
  group.add(callBtn);

  const cancelBtnGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.02, 16);
  const cancelBtn = createMesh(cancelBtnGeo, TheatreMaterials.greenNormal);
  cancelBtn.rotation.x = Math.PI / 2;
  cancelBtn.position.set(0, -0.06, 0.015);
  group.add(cancelBtn);

  const domeGeo = new THREE.ConeGeometry(0.08, 0.12, 4);
  const domeMat = new THREE.MeshStandardMaterial({
    color: isActive ? 0xef4444 : 0x10b981,
    emissive: isActive ? 0xef4444 : 0x10b981,
    emissiveIntensity: isActive ? 1.5 : 0.2,
  });
  const dome = createMesh(domeGeo, domeMat, false, false);
  dome.position.set(0, 0.8, 0.08);
  dome.rotation.x = Math.PI / 2;
  group.add(dome);

  return group;
}

// 22. IVF CLEANROOM WORKSTATION
export function buildIvfWorkstation(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'ivf-workstation-group';

  const standGeo = new THREE.BoxGeometry(1.3, 0.75, 0.8);
  const stand = createMesh(standGeo, TheatreMaterials.plasticWhite);
  stand.position.set(0, 0.375, 0);
  group.add(stand);

  const stageGeo = new THREE.BoxGeometry(1.2, 0.05, 0.7);
  const stage = createMesh(stageGeo, TheatreMaterials.stainlessSteel);
  stage.position.set(0, 0.775, 0);
  group.add(stage);

  const hoodGeo = new THREE.BoxGeometry(1.25, 0.95, 0.75);
  const hood = createMesh(hoodGeo, TheatreMaterials.plasticWhite);
  hood.position.set(0, 1.3, 0);
  group.add(hood);

  const sashGeo = new THREE.BoxGeometry(1.15, 0.55, 0.02);
  const sash = createMesh(sashGeo, TheatreMaterials.glassWindow);
  sash.position.set(0, 1.15, 0.36);
  group.add(sash);

  const scopeGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.35, 16);
  const scope = createMesh(scopeGeo, TheatreMaterials.darkStainless);
  scope.position.set(0, 1.05, 0);
  group.add(scope);

  return group;
}
