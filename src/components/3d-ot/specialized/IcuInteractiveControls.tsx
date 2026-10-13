'use client';

import React from 'react';
import { Bed, RotateCcw } from 'lucide-react';

interface IcuInteractiveControlsProps {
  backrestAngle: number;
  onUpdateBackrestAngle: (angle: number) => void;
  onReset: () => void;
}

export const IcuInteractiveControls: React.FC<IcuInteractiveControlsProps> = ({
  backrestAngle,
  onUpdateBackrestAngle,
  onReset,
}) => {
  return (
    <div className="absolute bottom-6 left-6 z-20 w-80 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 text-slate-100 p-4 shadow-2xl">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Bed className="w-4 h-4 text-brand-400" />
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Electric ICU Bed Controls
          </h4>
        </div>
        <button
          onClick={onReset}
          className="p-1 rounded text-slate-400 hover:text-white transition-colors"
          title="Reset Bed Position"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-3 text-xs">
        <div>
          <div className="flex justify-between text-slate-400 mb-1.5">
            <span>Backrest Articulation (Fowler)</span>
            <span className="font-mono text-brand-400 font-bold">{backrestAngle}°</span>
          </div>
          <input
            type="range"
            min="0"
            max="75"
            step="1"
            value={backrestAngle}
            onChange={(e) => onUpdateBackrestAngle(parseInt(e.target.value, 10))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
          />
        </div>

        {/* Preset Positions */}
        <div className="grid grid-cols-3 gap-1.5 pt-1">
          <button
            onClick={() => onUpdateBackrestAngle(0)}
            className={`py-1.5 px-2 rounded text-[11px] font-medium border transition-colors ${
              backrestAngle === 0
                ? 'bg-brand-600 text-white border-brand-500'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
            }`}
          >
            Flat (0°)
          </button>
          <button
            onClick={() => onUpdateBackrestAngle(30)}
            className={`py-1.5 px-2 rounded text-[11px] font-medium border transition-colors ${
              backrestAngle === 30
                ? 'bg-brand-600 text-white border-brand-500'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
            }`}
          >
            Cardiac (30°)
          </button>
          <button
            onClick={() => onUpdateBackrestAngle(60)}
            className={`py-1.5 px-2 rounded text-[11px] font-medium border transition-colors ${
              backrestAngle === 60
                ? 'bg-brand-600 text-white border-brand-500'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
            }`}
          >
            Fowler (60°)
          </button>
        </div>

        <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
          Features: Split ABS safety rails, dual manual emergency CPR release levers, integrated weighing scale support.
        </div>
      </div>
    </div>
  );
};
