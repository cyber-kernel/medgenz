'use client';

import React, { useState } from 'react';
import { ProductItem, EquipmentState } from '@/types/theatre';
import { CATEGORY_LABELS } from '@/data/3d-ot/products';
import { Search, Eye, EyeOff, Lock, Unlock, ChevronRight, X } from 'lucide-react';

interface EquipmentSidebarProps {
  products: ProductItem[];
  equipmentStates: Record<string, EquipmentState>;
  selectedProductId: string | null;
  onSelectProduct: (id: string) => void;
  onToggleVisibility: (id: string) => void;
  onToggleLock: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const EquipmentSidebar: React.FC<EquipmentSidebarProps> = ({
  products,
  equipmentStates,
  selectedProductId,
  onSelectProduct,
  onToggleVisibility,
  onToggleLock,
  isOpen,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <aside
      className={`absolute top-0 left-0 z-30 h-full w-80 sm:w-88 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 text-slate-100 flex flex-col transition-transform duration-200 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold tracking-wide text-white">
            Equipment Catalogue
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono tabular-nums">
              {filteredProducts.length} items
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search equipment or system..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
          />
        </div>

        {/* Category Pills/Tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-brand-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {CATEGORY_LABELS[cat] ? CATEGORY_LABELS[cat].split(' ')[0] : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Equipment List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
        {filteredProducts.map((product) => {
          const state = equipmentStates[product.id];
          const isSelected = selectedProductId === product.id;
          const isVisible = state?.visible ?? true;
          const isLocked = state?.locked ?? false;

          return (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product.id)}
              className={`group flex items-center justify-between gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-amber-950/40 border-brand-500/80 shadow-md shadow-brand-600/10'
                  : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-brand-600 text-white shadow'
                      : 'bg-slate-800 text-brand-400 group-hover:bg-brand-600 group-hover:text-white'
                  }`}
                >
                  {product.markerNumber}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold text-slate-200 truncate group-hover:text-white">
                    {product.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 block truncate">
                    {CATEGORY_LABELS[product.category] || product.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => onToggleLock(product.id)}
                  title={isLocked ? 'Unlock position' : 'Lock position'}
                  className={`p-1.5 rounded transition-colors ${
                    isLocked
                      ? 'text-amber-400 bg-amber-500/10'
                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() => onToggleVisibility(product.id)}
                  title={isVisible ? 'Hide item' : 'Show item'}
                  className={`p-1.5 rounded transition-colors ${
                    !isVisible
                      ? 'text-rose-400 bg-rose-500/10'
                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {isVisible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                </button>

                <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 transition-colors ml-0.5" />
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
