import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, ArrowRight, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import ECGCTA from "@/components/sections/ECGCTA";
import type { Metadata } from "next";
import { isContentEmpty } from "@/lib/content-utils";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog) return { title: "Blog Post Not Found | MedGenz" };

  const title = blog.metaTitle || blog.title;
  const description = blog.metaDescription || blog.excerpt || "Read this insightful article from MedGenz about hospital infrastructure and medical equipment.";

  return {
    title: `${title} | MedGenz Blog`,
    description,
    keywords: [blog.category, "healthcare", "hospital infrastructure", blog.title],
    authors: [{ name: blog.authorName }],
    alternates: {
      canonical: `https://www.medgenz.com/blogs/${blog.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://www.medgenz.com/blogs/${blog.slug}`,
      title,
      description,
      images: blog.coverImage
        ? [
            {
              url: blog.coverImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
      publishedTime: blog.createdAt.toISOString(),
      modifiedTime: blog.updatedAt.toISOString(),
      authors: [blog.authorName],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@medgenz",
    },
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog || !blog.published) {
    notFound();
  }

  const hasContent = !isContentEmpty(blog.content);

  return (
    <div className="pt-20 font-inter bg-white overflow-x-hidden">
      {/* 1. ARTICLE HERO */}
      <section className="relative py-16 md:py-24 bg-slate-50 border-b border-slate-100 overflow-hidden uppercase tracking-tighter">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200 rounded-full blur-[150px] opacity-10 -mr-20 -mt-20" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-brand-600 font-bold uppercase tracking-widest text-[10px] mb-8 md:mb-12 hover:gap-4 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
          </Link>

          <div className="max-w-4xl text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg shadow-brand-600/20">
              {blog.category}
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter uppercase break-words">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 md:gap-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] border-t border-slate-200 pt-8">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                    <User className="w-5 h-5" />
                 </div>
                 <div>
                    <div className="text-slate-900 leading-none mb-1">{blog.authorName || "MedGenz Admin"}</div>
                    <div className="text-slate-300 text-[8px]">Engineering Expert</div>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <Calendar className="w-5 h-5 text-brand-600 shrink-0" />
                 <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COVER IMAGE AREA */}
      {blog.coverImage && (
        <section className="max-w-7xl mx-auto px-6 -mt-12 md:-mt-20 relative z-20">
          <div className="relative aspect-video max-h-[600px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      )}

      {/* 3. CONTENT AREA - Professional Article Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Main Content - Column width restricted for readability */}
            <div className="lg:col-span-8 min-w-0 overflow-hidden">
              {hasContent ? (
                <div
                  className="prose prose-slate prose-lg md:prose-xl max-w-none
                  prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-slate-900
                  prose-p:text-slate-600 prose-p:font-light prose-p:leading-relaxed
                  prose-strong:font-black prose-strong:text-slate-900
                  prose-img:rounded-[2rem] prose-img:shadow-xl prose-img:mx-auto
                  prose-blockquote:border-l-brand-600 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:font-light prose-blockquote:italic
                  prose-a:text-brand-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                  prose-li:text-slate-600 prose-li:font-light break-words"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              ) : (
                <div className="py-20 text-center bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200 text-slate-400 font-light">
                    Article content is being updated. Check back soon.
                </div>
              )}

              {/* Social Share Footer */}
              <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
                 <div className="flex items-center gap-4">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Share Insight:</span>
                    <div className="flex gap-2">
                       <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all shadow-sm">
                          <Facebook className="w-4 h-4" />
                       </button>
                       <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all shadow-sm">
                          <Twitter className="w-4 h-4" />
                       </button>
                       <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all shadow-sm">
                          <Linkedin className="w-4 h-4" />
                       </button>
                    </div>
                 </div>

                 <Link href="/blogs" className="flex items-center gap-3 text-brand-600 font-bold uppercase tracking-widest text-[10px] hover:gap-5 transition-all">
                    Browse More Articles <ArrowRight className="w-4 h-4" />
                  </Link>
              </div>
            </div>

            {/* Sidebar - Sticky on desktop */}
            <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-32">
               <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group border border-white/5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600 rounded-full blur-[80px] opacity-20 -mr-10 -mt-10" />
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-4 relative z-10">Expert Consultation</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light relative z-10">
                     Need specialized advice on your hospital's modular OT or MGPS project? Speak directly with our engineering team.
                  </p>
                  <Link href="/contact" className="relative z-10 block w-full bg-brand-600 text-white text-center py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-brand-600/20">
                     Request a Call
                  </Link>
               </div>

               <div className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50">
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter mb-6">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                     {['MOT', 'NABH', 'Sterility', 'Cleanroom', 'MGPS', 'Life Support'].map((tag) => (
                        <span key={tag} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:border-brand-600 hover:text-brand-600 transition-all cursor-pointer">
                           #{tag}
                        </span>
                     ))}
                  </div>
               </div>
            </aside>
          </div>
        </div>
      </section>

      <ECGCTA />
    </div>
  );
}
