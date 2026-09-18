'use client';

import React from 'react';
import {
  Phone,
  Mail,
  ArrowRight,
  FileSearch
} from 'lucide-react';

interface ProjectSidebarProps {
  specs: { label: string; value: string }[];
  location?: string;
  service?: string;
}

export default function ProjectSidebar({ specs, location, service }: ProjectSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-36 space-y-4">

      {/* 1. PROJECT HIGHLIGHTS - Professional & Compact */}
      {specs.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
          <h3 className="text-sm font-black text-slate-900 uppercase tracking-tighter mb-4 flex items-center gap-2">
            <div className="w-1 h-3.5 bg-brand-600 rounded-full" />
            Project Details
          </h3>
          <div className="space-y-2.5">
            {specs.slice(0, 5).map((spec, i) => (
              <div key={i} className="flex justify-between items-start gap-4 border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{spec.label}</span>
                <span className="text-[11px] font-black text-slate-900 text-right leading-tight">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. QUALITY PROTOCOL - Building Trust */}
      <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden group border border-white/5">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-600 rounded-full blur-[60px] opacity-10 -mr-8 -mt-8" />

        <div className="relative z-10 mb-4">
          <div className="flex items-center gap-2.5 mb-1.5">
            <h3 className="text-base font-black uppercase tracking-tighter">Compliance <span className="text-brand-500">Ready</span></h3>
          </div>
          <p className="text-slate-400 text-[10px] font-light leading-snug">
            All MedGenz projects adhere to strict NABH and global ISO standards.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 relative z-10">
          {[
            'NABH Protocol',
            'ISO Certified',
            'Expert Team',
            'On-Time'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-300 truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. CONVERSION CTA - Need a Site Survey? */}
      <div className="bg-brand-600 rounded-2xl p-6 text-white shadow-2xl shadow-brand-600/20 relative overflow-hidden group transform hover:-translate-y-1 transition-all duration-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-[80px] opacity-10 -mr-10 -mt-10" />

        <div className="relative z-10 text-center space-y-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-1">
            <FileSearch className="w-6 h-6 text-brand-600" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tighter leading-none">Need a Site <span className="text-slate-900 underline decoration-white/40 underline-offset-4">Survey?</span></h3>
          <p className="text-brand-50 text-[11px] font-light leading-relaxed">
            Speak directly with an engineer for a facility audit or turnkey project proposal.
          </p>
          <a
            href="tel:+919716412630"
            className="block w-full bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] py-4 rounded-xl shadow-xl hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 group-hover:gap-4"
          >
            Speak to Engineer <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 4. FAST CONTACT - High Visibility */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm group hover:shadow-md transition-all">
        <div className="space-y-4">
          <a href="tel:+919716412630" className="flex items-center gap-4 group/item">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 group-hover/item:bg-brand-600 group-hover/item:text-white transition-all border border-brand-100/50">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Direct Call</div>
              <div className="text-base font-bold text-slate-900 tracking-tight">+91 97164 12630</div>
            </div>
          </a>

          <a href="mailto:sales@medgenz.com" className="flex items-center gap-4 group/item">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all border border-blue-100/50">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Email Quote</div>
              <div className="text-base font-bold text-slate-900 tracking-tight">sales@medgenz.com</div>
            </div>
          </a>
        </div>
      </div>

    </aside>
  );
}
