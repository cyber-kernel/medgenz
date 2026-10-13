'use client';

import React, { useState } from 'react';
import { RoomModeSwitcher } from './RoomModeSwitcher';
import { ConfigToolbar } from './ConfigToolbar';
import { TheatreCanvas } from './TheatreCanvas';
import { EquipmentSidebar } from './EquipmentSidebar';
import { ProductInfoPanel } from './ProductInfoPanel';
import { TransformPanel } from './TransformPanel';
import { IcuInteractiveControls } from './specialized/IcuInteractiveControls';
import { NurseCallInteractiveDemo } from './specialized/NurseCallInteractiveDemo';
import { TurnkeyWorkflowPanel } from './specialized/TurnkeyWorkflowPanel';
import { EnquiryModal } from './EnquiryModal';
import {
  RoomMode,
  ViewCameraMode,
  EquipmentState,
  ProductItem
} from '@/types/theatre';
import { MEDGENZ_PRODUCTS } from '@/data/3d-ot/products';
import {
  getInitialEquipmentStates,
  saveLayoutToStorage,
  loadLayoutFromStorage,
  exportLayoutAsJson,
  validateAndImportJson
} from '@/lib/3d-ot-storage';

export default function ThreeDOTStudio() {
  const [roomMode, setRoomMode] = useState<RoomMode>('modular-ot');
  const [layoutId, setLayoutId] = useState<string>('standard-ot');
  const [cameraMode, setCameraMode] = useState<ViewCameraMode>('free');

  // Scene state
  const [equipmentStates, setEquipmentStates] = useState<Record<string, EquipmentState>>(() => {
    const saved = loadLayoutFromStorage();
    if (saved && saved.equipmentStates) {
      return saved.equipmentStates;
    }
    return getInitialEquipmentStates('standard-ot');
  });

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isTransformOpen, setIsTransformOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Visualization toggles
  const [showMarkers, setShowMarkers] = useState(true);
  const [isInfrastructureMode, setIsInfrastructureMode] = useState(false);
  const [showAirflow, setShowAirflow] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  // Specialized states
  const [icuBackrestAngle, setIcuBackrestAngle] = useState(30);
  const [nurseCallActive, setNurseCallActive] = useState(false);

  // Modals & Feedback
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const selectedProduct = selectedProductId
    ? MEDGENZ_PRODUCTS.find((p) => p.id === selectedProductId) || null
    : null;

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Switch layout preset
  const handleSelectLayout = (newLayoutId: string) => {
    setLayoutId(newLayoutId);
    setEquipmentStates(getInitialEquipmentStates(newLayoutId));
    setSelectedProductId(null);
    showNotification(`Loaded ${newLayoutId.split('-')[0].toUpperCase()} OT Preset`);
  };

  // Position update
  const handleUpdatePosition = (id: string, pos: { x: number; y: number; z: number }) => {
    setEquipmentStates((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      return {
        ...prev,
        [id]: {
          ...existing,
          position: pos,
        },
      };
    });
  };

  // Rotation update
  const handleUpdateRotation = (id: string, rotY: number) => {
    setEquipmentStates((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      return {
        ...prev,
        [id]: {
          ...existing,
          rotationY: rotY,
        },
      };
    });
  };

  // Toggle Lock
  const handleToggleLock = (id: string) => {
    setEquipmentStates((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      return {
        ...prev,
        [id]: {
          ...existing,
          locked: !existing.locked,
        },
      };
    });
  };

  // Toggle Visibility
  const handleToggleVisibility = (id: string) => {
    setEquipmentStates((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      return {
        ...prev,
        [id]: {
          ...existing,
          visible: !existing.visible,
        },
      };
    });
  };

  // Reset Position of single product
  const handleResetProduct = (id: string) => {
    const prod = MEDGENZ_PRODUCTS.find((p) => p.id === id);
    if (!prod) return;
    setEquipmentStates((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      return {
        ...prev,
        [id]: {
          ...existing,
          position: { ...prod.defaultPosition },
          rotationY: prod.defaultRotationY,
        },
      };
    });
    showNotification(`Reset ${prod.name.split(' ')[0]} to origin`);
  };

  // Save to localStorage
  const handleSaveLayout = () => {
    const success = saveLayoutToStorage(layoutId, roomMode, equipmentStates);
    if (success) {
      showNotification('Layout saved locally in browser');
    }
  };

  // Reset entire layout
  const handleResetEntireLayout = () => {
    setEquipmentStates(getInitialEquipmentStates(layoutId));
    setSelectedProductId(null);
    showNotification('Restored default preset arrangement');
  };

  // Export JSON
  const handleExport = () => {
    exportLayoutAsJson(layoutId, roomMode, equipmentStates);
    showNotification('Configuration exported as JSON');
  };

  // Import JSON
  const handleImport = (jsonText: string) => {
    const res = validateAndImportJson(jsonText);
    if (res.success && res.data) {
      setEquipmentStates(res.data.equipmentStates);
      if (res.data.layoutId) setLayoutId(res.data.layoutId);
      if (res.data.roomMode) setRoomMode(res.data.roomMode);
      showNotification('Imported layout configuration successfully');
    } else {
      showNotification(`Import failed: ${res.error || 'Invalid file'}`);
    }
  };

  return (
    <div className="relative flex flex-col w-full h-screen min-h-[700px] overflow-hidden bg-slate-950 text-white font-sans pt-[128px] md:pt-[136px] lg:pt-[144px]">
      {/* Domain / Room Mode Switcher Bar */}
      <RoomModeSwitcher
        currentMode={roomMode}
        onSelectMode={(mode) => {
          setRoomMode(mode);
          setSelectedProductId(null);
        }}
      />

      {/* Studio Configurator Toolbar */}
      <ConfigToolbar
        layoutId={layoutId}
        onSelectLayout={handleSelectLayout}
        cameraMode={cameraMode}
        onSelectCameraMode={setCameraMode}
        isEditMode={isEditMode}
        onToggleEditMode={() => setIsEditMode((prev) => !prev)}
        showMarkers={showMarkers}
        onToggleMarkers={() => setShowMarkers((prev) => !prev)}
        isInfrastructureMode={isInfrastructureMode}
        onToggleInfrastructure={() => setIsInfrastructureMode((prev) => !prev)}
        showAirflow={showAirflow}
        onToggleAirflow={() => setShowAirflow((prev) => !prev)}
        onSaveLayout={handleSaveLayout}
        onResetLayout={handleResetEntireLayout}
        onExportLayout={handleExport}
        onImportLayout={handleImport}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
        savedNotification={notification}
      />

      {/* Main 3D Interactive Viewport */}
      <main className="relative flex-1 w-full h-full overflow-hidden">
        <TheatreCanvas
          roomMode={roomMode}
          layoutId={layoutId}
          equipmentStates={equipmentStates}
          selectedProductId={selectedProductId}
          onSelectProduct={(id) => {
            setSelectedProductId(id);
            if (!id) setIsTransformOpen(false);
          }}
          onUpdatePosition={handleUpdatePosition}
          cameraMode={cameraMode}
          showMarkers={showMarkers}
          isInfrastructureMode={isInfrastructureMode}
          showAirflow={showAirflow}
          isEditMode={isEditMode}
          icuBackrestAngle={icuBackrestAngle}
          nurseCallActive={nurseCallActive}
        />

        {/* Equipment Catalogue Sidebar */}
        <EquipmentSidebar
          products={MEDGENZ_PRODUCTS}
          equipmentStates={equipmentStates}
          selectedProductId={selectedProductId}
          onSelectProduct={(id) => {
            setSelectedProductId(id);
            if (window.innerWidth < 640) setIsSidebarOpen(false);
          }}
          onToggleVisibility={handleToggleVisibility}
          onToggleLock={handleToggleLock}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Product Information Card / Drawer */}
        <ProductInfoPanel
          product={selectedProduct}
          state={selectedProductId ? equipmentStates[selectedProductId] : undefined}
          onClose={() => {
            setSelectedProductId(null);
            setIsTransformOpen(false);
          }}
          onToggleLock={handleToggleLock}
          onToggleVisibility={handleToggleVisibility}
          onResetPosition={handleResetProduct}
          onOpenTransform={() => setIsTransformOpen(true)}
          onEnquire={() => setIsEnquiryOpen(true)}
        />

        {/* Fine-Tuning Coordinate Transform Panel */}
        {isTransformOpen && selectedProduct && (
          <TransformPanel
            product={selectedProduct}
            state={selectedProductId ? equipmentStates[selectedProductId] : undefined}
            onUpdatePosition={handleUpdatePosition}
            onUpdateRotation={handleUpdateRotation}
            onReset={handleResetProduct}
            onClose={() => setIsTransformOpen(false)}
          />
        )}

        {/* Specialized ICU Bed Control Overlay */}
        {roomMode === 'icu-furniture' && (
          <IcuInteractiveControls
            backrestAngle={icuBackrestAngle}
            onUpdateBackrestAngle={setIcuBackrestAngle}
            onReset={() => setIcuBackrestAngle(30)}
          />
        )}

        {/* Specialized Nurse Call Demo Overlay */}
        {roomMode === 'nurse-call' && (
          <NurseCallInteractiveDemo
            isActive={nurseCallActive}
            onToggleAlert={() => setNurseCallActive((prev) => !prev)}
            onTriggerCodeBlue={() => setNurseCallActive(true)}
          />
        )}

        {/* Turnkey Project Services Workflow Overlay */}
        {roomMode === 'turnkey-services' && (
          <TurnkeyWorkflowPanel
            onClose={() => setRoomMode('modular-ot')}
            onRequestProposal={() => setIsEnquiryOpen(true)}
          />
        )}
      </main>

      {/* Technical Consultation & Proposal Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        selectedProduct={selectedProduct}
        layoutId={layoutId}
      />
    </div>
  );
}
