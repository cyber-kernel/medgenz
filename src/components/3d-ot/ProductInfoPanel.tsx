'use client';

import React from 'react';
import { ProductItem, EquipmentState } from '@/types/theatre';
import { CATEGORY_LABELS } from '@/data/3d-ot/products';
import { X, Lock, Unlock, Eye, EyeOff, RotateCcw, Move, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProductInfoPanelProps {
  product: ProductItem | null;
  state: EquipmentState | undefined;
  onClose: () => void;
  onToggleLock: (id: string) => void;
  onToggleVisibility: (id: string) => void;
  onResetPosition: (id: string) => void;
  onOpenTransform: (id: string) => void;
  onEnquire: (product: ProductItem) => void;
}

export const ProductInfoPanel: React.FC<ProductInfoPanelProps> = ({
  product,
  state,
  onClose,
  onToggleLock,
  onToggleVisibility,
  onResetPosition,
  onOpenTransform,
  onEnquire,
}) => {
  if (!product) return null;

  const isLocked = state?.locked ?? false;
  const isVisible = state?.visible ?? true;

  return (
    <div className="absolute top-4 right-4 z-20 w-80 sm:w-96 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 text-slate-100 shadow-2xl p-5 transition-all animate-in fade-in slide-in-from-right-4 duration-200">
      {/* Header with Numbered Badge and Close */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-brand-600/30 shrink-0">
            {product.markerNumber}
          </div>
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-brand-400 block">
              {CATEGORY_LABELS[product.category] || product.category}
            </span>
            <h3 className="text-base font-bold text-white leading-tight">
              {product.name}
            </h3>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close product panel"
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Short Description */}
      <p className="text-xs text-slate-300 leading-relaxed mb-4">
        {product.shortDesc}
      </p>

      {/* Specifications Block */}
      <div className="space-y-2.5 mb-4 text-xs bg-slate-950/60 p-3.5 rounded-lg border border-slate-800/80">
        {product.detailedSpecs.standards && (
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span className="font-medium text-slate-300">Compliance: </span>
            <span className="text-emerald-400">{product.detailedSpecs.standards}</span>
          </div>
        )}

        {product.detailedSpecs.materials && (
          <div>
            <span className="text-slate-400 font-medium">Materials: </span>
            <span className="text-slate-200">{product.detailedSpecs.materials}</span>
          </div>
        )}

        {product.detailedSpecs.dimensions && (
          <div>
            <span className="text-slate-400 font-medium">Dimensions: </span>
            <span className="text-slate-200">{product.detailedSpecs.dimensions}</span>
          </div>
        )}

        {product.detailedSpecs.features.length > 0 && (
          <div className="pt-1.5 border-t border-slate-800">
            <span className="text-slate-400 font-medium block mb-1.5">Engineering Features:</span>
            <ul className="space-y-1 pl-1">
              {product.detailedSpecs.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-slate-300">
                  <span className="text-brand-400 leading-none mt-1">▪</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.detailedSpecs.technicalNotes && (
          <div className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800/60">
            Note: {product.detailedSpecs.technicalNotes}
          </div>
        )}
      </div>

      {/* Interactive Controls & Coordinates */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>Mounting: <strong className="text-slate-200 uppercase">{product.mounting}</strong></span>
          {state && (
            <span className="font-mono tabular-nums text-[11px]">
              Pos: [{state.position.x.toFixed(2)}, {state.position.z.toFixed(2)}]
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {product.isMovable && (
            <button
              onClick={() => onOpenTransform(product.id)}
              disabled={isLocked}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                isLocked
                  ? 'border-slate-800 text-slate-500 bg-slate-900 cursor-not-allowed'
                  : 'border-slate-700 hover:border-brand-500 text-white bg-slate-800 hover:bg-slate-750'
              }`}
            >
              <Move className="w-3.5 h-3.5 text-brand-400" />
              <span>Transform</span>
            </button>
          )}

          {product.isMovable && (
            <button
              onClick={() => onResetPosition(product.id)}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white bg-slate-800 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

          {product.isMovable && (
            <button
              onClick={() => onToggleLock(product.id)}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                isLocked
                  ? 'border-amber-500/50 text-amber-300 bg-amber-500/10'
                  : 'border-slate-700 text-slate-300 hover:text-white bg-slate-800'
              }`}
            >
              {isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
              <span>{isLocked ? 'Locked' : 'Unlocked'}</span>
            </button>
          )}

          <button
            onClick={() => onToggleVisibility(product.id)}
            className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
              !isVisible
                ? 'border-rose-500/50 text-rose-300 bg-rose-500/10'
                : 'border-slate-700 text-slate-300 hover:text-white bg-slate-800'
            }`}
          >
            {isVisible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span>{isVisible ? 'Visible' : 'Hidden'}</span>
          </button>
        </div>
      </div>

      {/* Primary CTA: Consult MedGenz */}
      <button
        onClick={() => onEnquire(product)}
        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-brand-600/20"
      >
        <span>Request Technical Proposal / Quote</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
