"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  CheckCircle2,
  Clock,
  Plus,
  ArrowUpRight,
  TrendingUp,
  ExternalLink,
  ChevronRight,
  FolderKanban
} from "lucide-react";

interface Stats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
  totalProjects: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalProjects: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [blogsRes, projectsRes] = await Promise.all([
          fetch("/api/blogs"),
          fetch("/api/projects")
        ]);

        const blogsData = await blogsRes.json();
        const projectsData = await projectsRes.json();

        const published = Array.isArray(blogsData) ? blogsData.filter((b: any) => b.published).length : 0;
        const totalProjects = Array.isArray(projectsData) ? projectsData.length : 0;

        setStats({
          totalBlogs: Array.isArray(blogsData) ? blogsData.length : 0,
          publishedBlogs: published,
          draftBlogs: (Array.isArray(blogsData) ? blogsData.length : 0) - published,
          totalProjects
        });
      } catch (error) {
        console.error("Failed to fetch stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-8 space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Admin <span className="text-brand-600">Dashboard</span></h1>
          <p className="text-slate-500 font-medium mt-2">Manage your healthcare insights and project portfolio.</p>
        </div>
        <Link href="/admin/blogs/new" className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/20">
          <Plus className="w-5 h-5" /> New Blog Post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3" /> Live
            </span>
          </div>
          <div className="text-4xl font-black text-slate-900 tracking-tighter mb-1">
            {loading ? "..." : stats.totalBlogs}
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Total Blogs</p>
        </div>

        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
              <FolderKanban className="w-6 h-6" />
            </div>
          </div>
          <div className="text-4xl font-black text-slate-900 tracking-tighter mb-1">
            {loading ? "..." : stats.totalProjects}
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Active Projects</p>
        </div>

        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
          <div className="text-4xl font-black text-slate-900 tracking-tighter mb-1">
            {loading ? "..." : stats.publishedBlogs}
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Published</p>
        </div>

        <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition-colors">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <div className="text-4xl font-black text-slate-900 tracking-tighter mb-1">
            {loading ? "..." : stats.draftBlogs}
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">Drafts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600 rounded-full blur-[100px] opacity-10 -mr-20 -mt-20 group-hover:opacity-20 transition-opacity" />
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-black tracking-tighter uppercase mb-4 leading-tight">Industry <br /><span className="text-brand-500">Insights</span></h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                Your expertise in Modular OT and MGPS helps hospitals achieve better safety outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/blogs" target="_blank" className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all">
                Public Blog <ExternalLink className="w-4 h-4 text-brand-500" />
              </Link>
              <Link href="/admin/blogs" className="inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-brand-600/20">
                Manage Posts <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 border border-slate-100 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity" />
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-black tracking-tighter uppercase mb-4 leading-tight text-slate-900">Project <br /><span className="text-blue-600">Portfolio</span></h2>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
                Showcase your high-fidelity installations and secure multi-million rupee turnkey contracts.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/projects" target="_blank" className="inline-flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 border border-slate-100 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] text-slate-600 transition-all">
                Public Portfolio <ExternalLink className="w-4 h-4 text-blue-500" />
              </Link>
              <Link href="/admin/projects" className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] text-white transition-all shadow-xl">
                Manage Projects <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
