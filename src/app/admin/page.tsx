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
  ChevronRight
} from "lucide-react";

interface Stats {
  totalBlogs: number;
  publishedBlogs: number;
  draftBlogs: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ totalBlogs: 0, publishedBlogs: 0, draftBlogs: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        const published = data.filter((b: any) => b.published).length;
        setStats({
          totalBlogs: data.length,
          publishedBlogs: published,
          draftBlogs: data.length - published,
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
              <FileText className="w-7 h-7" />
            </div>
            <span className="text-green-500 bg-green-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3" /> Live
            </span>
          </div>
          <div className="text-5xl font-black text-slate-900 tracking-tighter mb-1">
            {loading ? "..." : stats.totalBlogs}
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Total Blog Posts</p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
              <CheckCircle2 className="w-7 h-7" />
            </div>
          </div>
          <div className="text-5xl font-black text-slate-900 tracking-tighter mb-1">
            {loading ? "..." : stats.publishedBlogs}
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Published Articles</p>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition-colors">
              <Clock className="w-7 h-7" />
            </div>
          </div>
          <div className="text-5xl font-black text-slate-900 tracking-tighter mb-1">
            {loading ? "..." : stats.draftBlogs}
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Pending Drafts</p>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[150px] opacity-10 -mr-20 -mt-20 group-hover:opacity-20 transition-opacity" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-tight">Ready to publish more <br /><span className="text-brand-500">Industry Insights?</span></h2>
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              Your expertise in Modular OT and MGPS helps hospitals achieve better safety outcomes. Keep writing!
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Link href="/blogs" target="_blank" className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 px-8 py-5 rounded-2xl font-bold uppercase tracking-widest transition-all">
              View public Blog <ExternalLink className="w-5 h-5 text-brand-500" />
            </Link>
            <Link href="/admin/blogs" className="inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 px-8 py-5 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl shadow-brand-600/20">
              Manage All Posts <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
