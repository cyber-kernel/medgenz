'use client';

import React from 'react';
import {
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  ClipboardCheck,
  FileSearch,
  Users,
  Clock
} from 'lucide-react';

interface ProjectSidebarProps {
  specs: { label: string; value: string }[];
  location?: string;
  service?: string;
}

export default function ProjectSidebar({ specs, location, service }: ProjectSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-28 space-y-4">

      {/* 1. PROJECT HIGHLIGHTS - Ultra Compact */}
      {specs.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-tighter mb-4 flex items-center gap-2">
            <div className="w-1 h-3.5 bg-brand-600 rounded-full" />
            Project Details
          </h3>
          <div className="space-y-3">
            {specs.slice(0, 4).map((spec, i) => (
              <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{spec.label}</span>
                <span className="text-xs font-black text-slate-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. QUALITY PROTOCOL - Conversion Trust */}
      <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-xl relative overflow-hidden group border border-white/5">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-600 rounded-full blur-[60px] opacity-10 -mr-8 -mt-8" />

        <div className="relative z-10 mb-4">
          <div className="flex items-center gap-2.5 mb-1.5">
            <ShieldCheck className="w-5 h-5 text-brand-500" />
            <h3 className="text-sm font-black uppercase tracking-tighter">Compliance <span className="text-brand-500">Ready</span></h3>
          </div>
          <p className="text-slate-400 text-[10px] font-light leading-snug">
            All MedGenz projects follow strict global standards and NABH guidelines.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 relative z-10">
          {[
            { icon: CheckCircle, text: 'NABH Compliant' },
            { icon: ClipboardCheck, text: 'ISO 13485' },
            { icon: Users, text: 'Expert Team' },
            { icon: Clock, text: 'Timely Delivery' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
              <item.icon className="w-3 h-3 text-brand-500" />
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-300">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. HIGH IMPACT CTA - Conversion Path */}
      <div className="bg-brand-600 rounded-2xl p-6 text-white shadow-2xl shadow-brand-600/20 relative overflow-hidden group transform hover:-translate-y-1 transition-all duration-500">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-[80px] opacity-10 -mr-10 -mt-10" />

        <div className="relative z-10 text-center space-y-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg mb-2">
            <FileSearch className="w-6 h-6 text-brand-600" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tighter leading-none">Need a Site <span className="text-slate-900 underline decoration-white/40 underline-offset-4">Survey?</span></h3>
          <p className="text-brand-50 text-[10px] font-light leading-relaxed">
            Get an expert engineering audit of your facility for OT or MGPS implementation.
          </p>
          <a
            href="tel:+919716412630"
            className="block w-full bg-slate-900 text-white font-black uppercase tracking-widest text-[11px] py-4 rounded-xl shadow-xl hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 group-hover:gap-4"
          >
            Speak to Engineer <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 4. FAST CONTACT */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
        <div className="space-y-3.5">
          <a href="mailto:sales@medgenz.com" className="flex items-center gap-3.5 group/item">
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all border border-blue-100/50">
              <Mail className="w-4.5 h-4.5" />
            </div>
            <div>
              <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Email Quote</div>
              <div className="text-sm font-bold text-slate-900 tracking-tight">sales@medgenz.com</div>
            </div>
          </a>
        </div>
      </div>

    </aside>
  );
}
