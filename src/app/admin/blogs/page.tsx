"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  Globe,
  Clock,
  MoreVertical,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  published: boolean;
  createdAt: string;
  coverImage: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchParams] = useState("");

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    try {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBlogs(blogs.filter(b => b.id !== id));
      } else {
        alert("Failed to delete blog");
      }
    } catch (error) {
      console.error("Delete error", error);
    }
  };

  const filteredBlogs = blogs.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Manage <span className="text-brand-600">Blogs</span></h1>
          <p className="text-slate-500 font-medium mt-2">Create and edit your industry insights.</p>
        </div>
        <Link href="/admin/blogs/new" className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/20">
          <Plus className="w-5 h-5" /> New Post
        </Link>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by title or category..."
              value={searchTerm}
              onChange={(e) => setSearchParams(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-4 focus:ring-brand-600/10 outline-none transition-all font-medium"
            />
          </div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            {filteredBlogs.length} Articles Found
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Post Info</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Category</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Status</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Date</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                [...Array(3)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan={5} className="px-8 py-10 bg-slate-50/30"></td>
                  </tr>
                ))
              ) : filteredBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 relative rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                        {blog.coverImage ? (
                          <Image src={blog.coverImage} alt={blog.title} fill className="object-cover" />
                        ) : (
                          <FileText className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300" />
                        )}
                      </div>
                      <div className="max-w-xs md:max-w-md">
                        <div className="font-bold text-slate-900 line-clamp-1">{blog.title}</div>
                        <div className="text-xs text-slate-400 font-medium truncate">/{blog.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-slate-200">
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    {blog.published ? (
                      <span className="inline-flex items-center gap-1.5 text-green-600 bg-green-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-100">
                        <CheckCircle2 className="w-3 h-3" /> Published
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-yellow-100">
                        <Clock className="w-3 h-3" /> Draft
                      </span>
                    )}
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-500 font-medium">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/blogs/${blog.slug}`}
                        target="_blank"
                        className="p-2 text-slate-400 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/admin/blogs/${blog.id}/edit`}
                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!loading && filteredBlogs.length === 0 && (
            <div className="py-20 text-center">
              <AlertCircle className="w-12 h-12 text-slate-200 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-400">No blog posts found matching your search.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
