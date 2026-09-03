'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, ShieldCheck, Zap, Activity, Info, AlertCircle, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CATEGORIES = [
  { id: 'icu', name: 'ICU & Critical Care', rate: 1.1 },
  { id: 'ot', name: 'Operation Theatre', rate: 1.2 },
  { id: 'imaging', name: 'Imaging (X-Ray/C-Arm)', rate: 1.15 },
  { id: 'ward', name: 'General Ward Equipment', rate: 1.0 },
];

export default function AMCCMCCalculator() {
  const [price, setPrice] = useState<number>(500000);
  const [type, setType] = useState<'amc' | 'cmc'>('amc');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [age, setAge] = useState<number>(1);
  const [estimate, setEstimate] = useState<number>(0);

  useEffect(() => {
    // Base Rates: AMC = 4%, CMC = 8%
    const basePercent = type === 'amc' ? 0.04 : 0.08;

    // Age Multiplier: +5% per year after year 3
    const ageMultiplier = age > 3 ? 1 + (age - 3) * 0.05 : 1.0;

    const calculated = price * basePercent * category.rate * ageMultiplier;
    setEstimate(Math.round(calculated));
  }, [price, type, category, age]);

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 md:px-6 font-inter">
      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden grid lg:grid-cols-2">

        <div className="p-6 md:p-10 space-y-6 bg-slate-50/50">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-600/20">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Cost Estimator</h3>
              <p className="text-[10px] font-bold text-brand-600 uppercase tracking-widest leading-none">Instant Quote</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Equipment Price */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Purchase Price (₹)</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-base">₹</span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl py-4 pl-10 pr-4 outline-none focus:border-brand-600 focus:ring-4 focus:ring-brand-600/5 transition-all font-bold text-slate-900 text-base"
                />
              </div>
              <input
                type="range"
                min="50000"
                max="5000000"
                step="50000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
              />
            </div>

            {/* Contract Type */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setType('amc')}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-1 group",
                  type === 'amc' ? "bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-600/20" : "bg-white border-slate-100 text-slate-400 hover:border-brand-200"
                )}
              >
                <span className="text-sm font-black uppercase tracking-widest">AMC</span>
                <span className={cn("text-[8px] uppercase font-bold", type === 'amc' ? "text-brand-100" : "text-slate-300")}>Service Only</span>
              </button>
              <button
                type="button"
                onClick={() => setType('cmc')}
                className={cn(
                  "p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-1 group",
                  type === 'cmc' ? "bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-600/20" : "bg-white border-slate-100 text-slate-400 hover:border-brand-200"
                )}
              >
                <span className="text-sm font-black uppercase tracking-widest">CMC</span>
                <span className={cn("text-[8px] uppercase font-bold", type === 'cmc' ? "text-brand-100" : "text-slate-300")}>Parts Included</span>
              </button>
            </div>

            {/* Category Grid */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Category</label>
              <div className="grid grid-cols-2 gap-3">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "flex items-center justify-center p-3 rounded-lg border text-center transition-all",
                      category.id === cat.id ? "bg-white border-brand-600 ring-2 ring-brand-600/10" : "bg-white/50 border-slate-100 opacity-60 hover:opacity-100 hover:border-brand-200"
                    )}
                  >
                    <span className="text-[11px] font-bold text-slate-700 leading-tight">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Age Selection */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Equipment Age: <span className="text-brand-600 font-black">{age} Year{age > 1 ? 's' : ''}</span></label>
              <div className="flex justify-between gap-2">
                {[1, 2, 3, 4, 5, 6].map((v) => (
                  <button
                    key={v}
                    onClick={() => setAge(v)}
                    className={cn(
                      "flex-1 py-3 rounded-lg text-xs font-black transition-all",
                      age === v ? "bg-slate-900 text-white" : "bg-white text-slate-400 hover:bg-slate-100"
                    )}
                  >
                    {v}Y
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: OUTPUT */}
        <div className="p-6 md:p-10 bg-white flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100">
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Estimated Annual Fee</p>
              <div className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                ₹{estimate.toLocaleString()}
                <span className="text-sm text-slate-400 align-baseline ml-2 font-bold uppercase tracking-widest">/ Year</span>
              </div>
            </div>

            <div className="space-y-4 max-w-sm mx-auto">
              <h4 className="text-[10px] font-black text-brand-600 uppercase tracking-[0.2em] border-b border-slate-100 pb-2 text-center">Included in {type.toUpperCase()}</h4>
              <div className="space-y-3">
                {[
                  "4 Preventive Maintenance visits",
                  "Unlimited Breakdown Calls",
                  "Electrical Safety Checks",
                  "Reports for NABH Audit",
                  type === 'cmc' ? "Spare Parts Replacement" : "Spare Parts (as actuals)",
                  "Response under 24 hours"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={cn("w-4 h-4 shrink-0 mt-0.5", i === 4 && type === 'amc' ? "text-slate-300" : "text-green-500")} />
                    <p className={cn("text-xs md:text-sm font-medium", i === 4 && type === 'amc' ? "text-slate-400 italic" : "text-slate-600")}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-xl p-3 flex gap-2">
              <AlertCircle className="w-4 h-4 text-brand-600 shrink-0" />
              <p className="text-[9px] text-brand-900 leading-relaxed">
                Algorithm-based estimate. Actual quotes vary by model and location.
              </p>
            </div>

            <button className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-brand-600 transition-all shadow-lg shadow-slate-900/10 mt-4">
              Get Formal Proposal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
