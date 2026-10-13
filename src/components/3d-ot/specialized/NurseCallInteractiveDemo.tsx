'use client';

import React, { useState } from 'react';
import { Bell, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

interface NurseCallInteractiveDemoProps {
  isActive: boolean;
  onToggleAlert: () => void;
  onTriggerCodeBlue: () => void;
}

export const NurseCallInteractiveDemo: React.FC<NurseCallInteractiveDemoProps> = ({
  isActive,
  onToggleAlert,
}) => {
  const [alertType, setAlertType] = useState<'normal' | 'code-blue'>('normal');

  const handleTrigger = (type: 'normal' | 'code-blue') => {
    setAlertType(type);
    if (!isActive) {
      onToggleAlert();
    }
  };

  const handleCancel = () => {
    if (isActive) {
      onToggleAlert();
    }
  };

  return (
    <div className="absolute bottom-6 left-6 z-20 w-84 sm:w-96 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 text-slate-100 p-4 shadow-2xl">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-brand-400" />
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Nurse Call & Code Blue Simulation
          </h4>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={`w-2.5 h-2.5 rounded-full ${
              isActive
                ? alertType === 'code-blue'
                  ? 'bg-amber-500 animate-ping'
                  : 'bg-rose-500 animate-ping'
                : 'bg-emerald-500'
            }`}
          />
          <span className="text-[11px] font-mono text-slate-400">
            {isActive ? (alertType === 'code-blue' ? 'CODE BLUE' : 'CALL ACTIVE') : 'STANDBY'}
          </span>
        </div>
      </div>

      {/* Simulated Signal Path */}
      <div className="mb-3 bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-xs space-y-2">
        <div className="text-[11px] text-slate-400 font-medium">Signal Route Simulation:</div>
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className={isActive ? 'text-amber-400 font-bold' : 'text-slate-400'}>
            1. Bedside Handset
          </span>
          <span className="text-slate-600">➔</span>
          <span className={isActive ? 'text-rose-400 font-bold' : 'text-slate-400'}>
            2. Corridor Dome Lamp
          </span>
          <span className="text-slate-600">➔</span>
          <span className={isActive ? 'text-brand-400 font-bold' : 'text-slate-400'}>
            3. Master Console
          </span>
        </div>

        {isActive && (
          <div className="p-2 rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 text-[11px] flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400 animate-bounce" />
            <span>
              {alertType === 'code-blue'
                ? 'EMERGENCY: Code Blue Resuscitation Team Dispatched to OT-01'
                : 'PATIENT ASSISTANCE CALL: Room 101 OT Bed Active'}
            </span>
          </div>
        )}
      </div>

      {/* Interactive Trigger Buttons */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <button
          onClick={() => handleTrigger('normal')}
          disabled={isActive && alertType === 'normal'}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition-colors shadow-md shadow-amber-600/20"
        >
          <Bell className="w-3.5 h-3.5" />
          <span>Patient Call</span>
        </button>

        <button
          onClick={() => handleTrigger('code-blue')}
          disabled={isActive && alertType === 'code-blue'}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-colors shadow-md shadow-brand-600/20"
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Code Blue</span>
        </button>
      </div>

      {isActive && (
        <button
          onClick={handleCancel}
          className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors mb-2"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Reset / Cancel Alert</span>
        </button>
      )}

      <div className="text-[10px] text-slate-500 italic">
        Educational visualization only. Runs entirely locally in browser.
      </div>
    </div>
  );
};
