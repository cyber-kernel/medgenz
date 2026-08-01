"use client";

import { FolderKanban, Plus, AlertCircle } from "lucide-react";

export default function AdminProjectsPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Manage <span className="text-brand-600">Projects</span></h1>
          <p className="text-slate-500 font-medium mt-2">Showcase your landmark installations.</p>
        </div>
        <button className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/20">
          <Plus className="w-5 h-5" /> New Project
        </button>
      </div>

      <div className="py-32 text-center space-y-6 bg-white rounded-[3rem] border border-slate-100">
          <FolderKanban className="w-16 h-16 text-slate-100 mx-auto" />
          <h3 className="text-2xl font-bold text-slate-300 uppercase tracking-widest">Project Management coming soon</h3>
          <p className="text-slate-400 font-light max-w-md mx-auto">We are building a premium project showcase manager to highlight your engineering excellence.</p>
      </div>
    </div>
  );
}
