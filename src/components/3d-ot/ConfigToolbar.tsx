'use client';

import React, { useRef } from 'react';
import { ViewCameraMode } from '@/types/theatre';
import { OT_LAYOUT_PRESETS } from '@/data/3d-ot/layouts';
import {
  Camera,
  Layers,
  Wind,
  Edit3,
  Save,
  RotateCcw,
  Download,
  Upload,
  Menu,
  Eye,
  CheckCircle2
} from 'lucide-react';

interface ConfigToolbarProps {
  layoutId: string;
  onSelectLayout: (id: string) => void;
  cameraMode: ViewCameraMode;
  onSelectCameraMode: (mode: ViewCameraMode) => void;
  isEditMode: boolean;
  onToggleEditMode: () => void;
  showMarkers: boolean;
  onToggleMarkers: () => void;
  isInfrastructureMode: boolean;
  onToggleInfrastructure: () => void;
  showAirflow: boolean;
  onToggleAirflow: () => void;
  onSaveLayout: () => void;
  onResetLayout: () => void;
  onExportLayout: () => void;
  onImportLayout: (jsonText: string) => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  savedNotification: string | null;
}

export const ConfigToolbar: React.FC<ConfigToolbarProps> = ({
  layoutId,
  onSelectLayout,
  cameraMode,
  onSelectCameraMode,
  isEditMode,
  onToggleEditMode,
  showMarkers,
  onToggleMarkers,
  isInfrastructureMode,
  onToggleInfrastructure,
  showAirflow,
  onToggleAirflow,
  onSaveLayout,
  onResetLayout,
  onExportLayout,
  onImportLayout,
  onToggleSidebar,
  isSidebarOpen,
  savedNotification,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) onImportLayout(content);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="relative z-10 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        className="hidden"
        onChange={handleFileUpload}
      />

      {/* Left: Sidebar Toggle & Layout Presets */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle equipment catalogue"
          className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg border font-medium transition-colors ${
            isSidebarOpen
              ? 'bg-brand-600 text-white border-brand-500 shadow-sm'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white hover:bg-slate-750'
          }`}
        >
          <Menu className="w-4 h-4" />
          <span className="hidden sm:inline">Catalogue</span>
        </button>

        {/* Layout Preset Segment Buttons */}
        <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800">
          {Object.values(OT_LAYOUT_PRESETS).map((preset) => (
            <button
              key={preset.id}
              onClick={() => onSelectLayout(preset.id)}
              className={`py-1 px-2.5 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                layoutId === preset.id
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {preset.name.split(' ')[0]} OT
            </button>
          ))}
        </div>
      </div>

      {/* Center: Camera Views & Inspection Toggles */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {/* Camera Views */}
        <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded-lg border border-slate-800">
          {[
            { id: 'free', label: '3D Free' },
            { id: 'top-down', label: 'Plan View' },
            { id: 'surgeon', label: 'Surgeon POV' },
            { id: 'door', label: 'Door Entry' },
          ].map((cam) => (
            <button
              key={cam.id}
              onClick={() => onSelectCameraMode(cam.id as ViewCameraMode)}
              className={`py-1 px-2 rounded-md text-[11px] font-medium transition-colors ${
                cameraMode === cam.id
                  ? 'bg-slate-800 text-brand-400 font-bold border border-brand-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cam.label}
            </button>
          ))}
        </div>

        {/* Feature Toggles */}
        <button
          onClick={onToggleMarkers}
          title="Toggle equipment numbered 3D badge markers"
          className={`p-1.5 rounded-lg border transition-colors ${
            showMarkers
              ? 'bg-brand-600/20 text-brand-400 border-brand-500/50'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
          }`}
        >
          <Eye className="w-4 h-4" />
        </button>

        <button
          onClick={onToggleInfrastructure}
          title="Toggle wall transparency and medical gas pipeline infrastructure"
          className={`p-1.5 rounded-lg border transition-colors ${
            isInfrastructureMode
              ? 'bg-brand-600/20 text-brand-400 border-brand-500/50'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
        </button>

        <button
          onClick={onToggleAirflow}
          title="Toggle laminar airflow vertical particles"
          className={`p-1.5 rounded-lg border transition-colors ${
            showAirflow
              ? 'bg-brand-600/20 text-brand-400 border-brand-500/50'
              : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
          }`}
        >
          <Wind className="w-4 h-4" />
        </button>

        <button
          onClick={onToggleEditMode}
          className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg border font-medium transition-colors ${
            isEditMode
              ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
              : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
          }`}
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>{isEditMode ? 'Drag Active' : 'Edit Layout'}</span>
        </button>
      </div>

      {/* Right: Save / Reset / Export / Import */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onSaveLayout}
          title="Save layout locally in browser"
          className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-750 transition-colors"
        >
          <Save className="w-4 h-4" />
        </button>

        <button
          onClick={onResetLayout}
          title="Restore default preset arrangement"
          className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-750 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={onExportLayout}
          title="Export layout configuration as JSON file"
          className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-750 transition-colors"
        >
          <Download className="w-4 h-4" />
        </button>

        <button
          onClick={() => fileInputRef.current?.click()}
          title="Import layout configuration JSON file"
          className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-750 transition-colors"
        >
          <Upload className="w-4 h-4" />
        </button>

        {savedNotification && (
          <div className="flex items-center gap-1 py-1 px-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-medium animate-in fade-in duration-150">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>{savedNotification}</span>
          </div>
        )}
      </div>
    </div>
  );
};
