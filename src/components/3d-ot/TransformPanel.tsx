'use client';

import React from 'react';
import { ProductItem, EquipmentState } from '@/types/theatre';
import { Move, X, Check, RotateCcw } from 'lucide-react';

interface TransformPanelProps {
  product: ProductItem | null;
  state: EquipmentState | undefined;
  onUpdatePosition: (id: string, pos: { x: number; y: number; z: number }) => void;
  onUpdateRotation: (id: string, rotY: number) => void;
  onReset: (id: string) => void;
  onClose: () => void;
}

export const TransformPanel: React.FC<TransformPanelProps> = ({
  product,
  state,
  onUpdatePosition,
  onUpdateRotation,
  onReset,
  onClose,
}) => {
  if (!product || !state) return null;

  const currentDegrees = Math.round(((state.rotationY * 180) / Math.PI) % 360);

  return (
    <div className="absolute bottom-16 right-4 z-20 w-72 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 text-slate-100 shadow-2xl p-4">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Move className="w-4 h-4 text-brand-400" />
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Transform: {product.name.split(' ')[0]}
          </h4>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-3 text-xs">
        {/* Position X Slider */}
        <div>
          <div className="flex justify-between text-slate-400 mb-1">
            <span>Position X (Lateral)</span>
            <span className="font-mono text-slate-200">{state.position.x.toFixed(2)} m</span>
          </div>
          <input
            type="range"
            min="-2.8"
            max="2.8"
            step="0.05"
            value={state.position.x}
            onChange={(e) =>
              onUpdatePosition(product.id, {
                ...state.position,
                x: parseFloat(e.target.value),
              })
            }
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
          />
        </div>

        {/* Position Z Slider */}
        <div>
          <div className="flex justify-between text-slate-400 mb-1">
            <span>Position Z (Longitudinal)</span>
            <span className="font-mono text-slate-200">{state.position.z.toFixed(2)} m</span>
          </div>
          <input
            type="range"
            min="-3.2"
            max="3.2"
            step="0.05"
            value={state.position.z}
            onChange={(e) =>
              onUpdatePosition(product.id, {
                ...state.position,
                z: parseFloat(e.target.value),
              })
            }
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
          />
        </div>

        {/* Rotation Slider */}
        {product.isRotatable && (
          <div>
            <div className="flex justify-between text-slate-400 mb-1">
              <span>Rotation Angle</span>
              <span className="font-mono text-slate-200">{currentDegrees}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="5"
              value={(currentDegrees + 360) % 360}
              onChange={(e) =>
                onUpdateRotation(product.id, (parseFloat(e.target.value) * Math.PI) / 180)
              }
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex gap-2 pt-2 border-t border-slate-800">
          <button
            onClick={() => onReset(product.id)}
            className="flex-1 py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-medium flex items-center justify-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Pos</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-1.5 px-2 bg-brand-600 hover:bg-brand-500 text-white rounded text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
          >
            <Check className="w-3 h-3" />
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>
  );
};
