'use client';

import React from 'react';
import { RoomMode } from '@/types/theatre';
import { Activity, Shield, Bed, Sparkles, BellRing, Briefcase } from 'lucide-react';

interface RoomModeSwitcherProps {
  currentMode: RoomMode;
  onSelectMode: (mode: RoomMode) => void;
}

export const RoomModeSwitcher: React.FC<RoomModeSwitcherProps> = ({
  currentMode,
  onSelectMode,
}) => {
  const modes: { id: RoomMode; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'modular-ot',
      label: 'Modular OT 3D',
      icon: <Activity className="w-3.5 h-3.5" />,
      badge: 'Interactive',
    },
    {
      id: 'mgps-pipeline',
      label: 'Medical Gas (MGPS)',
      icon: <Shield className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <div className="bg-slate-950 border-b border-slate-800/80 px-4 py-1.5 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-xs">
      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mr-2 hidden lg:inline whitespace-nowrap">
        MedGenz Environments:
      </span>
      {modes.map((m) => {
        const isActive = currentMode === m.id;
        return (
          <button
            key={m.id}
            onClick={() => onSelectMode(m.id)}
            className={`flex items-center gap-1.5 py-1.5 px-3 rounded-md font-medium whitespace-nowrap transition-all ${
              isActive
                ? 'bg-brand-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            {m.icon}
            <span>{m.label}</span>
            {m.badge && (
              <span className="text-[9px] font-semibold px-1 py-0.2 rounded bg-amber-500/20 text-brand-300 ml-0.5">
                {m.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
