import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { Blog } from '@prisma/client';

interface RelatedBlogsProps {
  blogs: Blog[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs">Knowledge Hub</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">Related <span className="text-brand-600">Articles</span></h2>
            <div className="w-20 h-1.5 bg-brand-600 rounded-full" />
          </div>
          <Link href="/blogs" className="text-slate-900 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:text-brand-600 transition-colors group">
            Browse All Insights <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((post) => (
            <article key={post.id} className="group flex flex-col h-full bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <Link href={`/blogs/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                    <span className="text-slate-300 font-black uppercase tracking-widest text-xs">MedGenz</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-brand-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </Link>

              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-3 text-[9px] font-black text-slate-400 uppercase tracking-[0.15em] mb-4">
                  <Calendar className="w-3.5 h-3.5 text-brand-600" />
                  <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-brand-600 transition-colors uppercase tracking-tight line-clamp-2">
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-light line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-slate-50 mt-auto">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-brand-600 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    Read Full Story <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
