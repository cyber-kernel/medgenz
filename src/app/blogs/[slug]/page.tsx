import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, ArrowRight, Clock, Bookmark } from "lucide-react";
import type { Metadata } from "next";
import { isContentEmpty, normalizeRichText } from "@/lib/content-utils";
import BlogSidebar from "@/components/sections/BlogSidebar";
import RelatedBlogs from "@/components/sections/RelatedBlogs";
import SiteFAQ from "@/components/SiteFAQ";
import BlogShareButtons from "@/components/sections/BlogShareButtons";

interface TableOfContentsItem {
  id: string;
  label: string;
  level: number;
}

function getTableOfContents(html: string): { items: TableOfContentsItem[]; content: string } {
  const usedIds = new Set<string>();
  const items: TableOfContentsItem[] = [];
  const content = normalizeRichText(html).replace(
    /<h([2-6])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (heading, level, attributes, innerHtml) => {
      const label = innerHtml.replace(/<[^>]*>/g, '').replace(/&nbsp;/gi, ' ').trim();
      if (!label) return heading;

      const baseId = label
        .toLowerCase()
        .replace(/&amp;/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') || `section-${items.length + 1}`;
      let id = baseId;
      let suffix = 2;
      while (usedIds.has(id)) id = `${baseId}-${suffix++}`;
      usedIds.add(id);
      items.push({ id, label, level: Number(level) });

      const withoutId = attributes.replace(/\sid=(['"]).*?\1/gi, '');
      return `<h${level}${withoutId} id="${id}">${innerHtml}</h${level}>`;
    }
  );

  return { items, content };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await prisma.blog.findUnique({
    where: { slug },
    select: {
      title: true,
      metaTitle: true,
      metaDescription: true,
      excerpt: true,
      categories: true,
      tags: true,
      coverImage: true,
      createdAt: true,
      updatedAt: true,
      authorName: true,
      slug: true,
      published: true,
      content: true,
      readingTime: true,
      faqs: true,
    },
  });

  if (!blog) return { title: "Blog Post Not Found | MedGenz" };

  const title = blog.metaTitle || blog.title;
  const description = blog.metaDescription || blog.excerpt || "Read this insightful article from MedGenz about hospital infrastructure and medical equipment.";

  return {
    title: `${title} | MedGenz Blog`,
    description,
    keywords: [...(blog.categories || []), ...(blog.tags || []), "healthcare", "hospital infrastructure", blog.title],
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
    select: {
      title: true,
      metaTitle: true,
      metaDescription: true,
      excerpt: true,
      categories: true,
      tags: true,
      coverImage: true,
      createdAt: true,
      updatedAt: true,
      authorName: true,
      slug: true,
      published: true,
      content: true,
      readingTime: true,
      faqs: true,
    },
  });

  if (!blog || !blog.published) {
    notFound();
  }

  // Prefer category matches, then fill the row with the latest published articles.
  const categoryRelatedBlogs = await prisma.blog.findMany({
    where: {
      categories: { hasSome: blog.categories },
      slug: { not: blog.slug },
      published: true
    },
    select: {
      id: true,
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      categories: true,
      createdAt: true,
    },
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  const relatedBlogIds = new Set(categoryRelatedBlogs.map((relatedBlog) => relatedBlog.id));
  const fallbackRelatedBlogs = categoryRelatedBlogs.length < 3
    ? await prisma.blog.findMany({
        where: {
          published: true,
          slug: { not: blog.slug },
          ...(categoryRelatedBlogs.length ? { id: { notIn: Array.from(relatedBlogIds) } } : {}),
        },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          coverImage: true,
          categories: true,
          createdAt: true,
        },
        take: 3 - categoryRelatedBlogs.length,
        orderBy: { createdAt: 'desc' },
      })
    : [];
  const relatedBlogs = [...categoryRelatedBlogs, ...fallbackRelatedBlogs];

  // Fetch all unique categories across all blogs
  const allBlogs = await prisma.blog.findMany({
    where: { published: true },
    select: { categories: true }
  });
  const categorySet = new Set<string>();
  allBlogs.forEach(b => b.categories.forEach(c => categorySet.add(c)));
  const allCategories = Array.from(categorySet).sort();

  const hasContent = !isContentEmpty(blog.content);
  const tableOfContents = getTableOfContents(blog.content || '');

  // JSON-LD Breadcrumb
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.medgenz.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Knowledge Hub",
        "item": "https://www.medgenz.com/blogs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": blog.categories[0] || 'Healthcare',
        "item": `https://www.medgenz.com/blogs?category=${encodeURIComponent(blog.categories[0] || 'Healthcare')}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": blog.title,
        "item": `https://www.medgenz.com/blogs/${blog.slug}`
      }
    ]
  };

  return (
    <div className="pt-20 font-inter bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* 1. ARTICLE HERO - Clean & Minimal */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full blur-[150px] opacity-10 -mr-40 -mt-40" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 mb-10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
             <Link href="/blogs" className="hover:text-brand-400 transition-colors">Knowledge Hub</Link>
             <span className="opacity-30">/</span>
             <span className="text-brand-500">{blog.categories.join(' & ')}</span>
          </nav>

          <div className="max-w-5xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-10 tracking-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 md:gap-12 pt-10 border-t border-white/10">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-600/20">
                     <User className="w-6 h-6" />
                  </div>
                  <div>
                     <div className="text-white text-[11px] font-black leading-none mb-1 uppercase tracking-wider">{blog.authorName}</div>
                     <div className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Medical Infrastructure Expert</div>
                  </div>
               </div>

               <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Calendar className="w-5 h-5 text-brand-600 shrink-0" />
                  <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
               </div>

               <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Clock className="w-5 h-5 text-brand-600 shrink-0" />
                  <span>{blog.readingTime || '6 Min Read'}</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN LAYOUT GRID */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* Left Content Column */}
            <div className="flex-grow lg:w-2/3 min-w-0">

              {/* Cover Image - Now inside the content grid for better focus */}
              {blog.coverImage && (
                <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 group">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )}

              {hasContent ? (
                <div className="article-content-shell">
                  <div
                    className="prose prose-content prose-slate prose-sm md:prose-base max-w-none
                    prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-slate-900
                    prose-p:text-slate-600 prose-p:font-light prose-p:leading-relaxed
                    prose-strong:font-black prose-strong:text-slate-900
                    prose-img:rounded-[1.5rem] prose-img:shadow-2xl prose-img:mx-auto prose-img:my-10
                    prose-blockquote:border-l-4 prose-blockquote:border-brand-600 prose-blockquote:bg-slate-50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:font-light prose-blockquote:italic prose-blockquote:text-slate-700
                    prose-a:text-brand-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                    prose-li:text-slate-600 prose-li:font-light prose-li:marker:text-brand-600"
                    dangerouslySetInnerHTML={{ __html: tableOfContents.content }}
                  />
                </div>
              ) : (
                <div className="py-24 text-center bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                    <Bookmark className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Article content is being updated</p>
                </div>
              )}

              {/* Social Share Footer */}
              <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-10">
                 <div className="flex items-center gap-6">
                    <span className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">Share Insight:</span>
                    <BlogShareButtons
                     url={`https://www.medgenz.com/blogs/${blog.slug}`}
                     title={blog.title}
                    />
                 </div>

                 <Link href="/blogs" className="flex items-center gap-3 text-brand-600 font-black uppercase tracking-widest text-[11px] hover:gap-5 transition-all group">
                    Browse More Articles <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="w-full lg:w-1/3">
              <BlogSidebar
                categories={blog.categories}
                allCategories={allCategories}
                tableOfContents={tableOfContents.items}
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. RELATED ARTICLES */}
      <SiteFAQ faqs={Array.isArray(blog.faqs) ? blog.faqs as { question: string; answer: string }[] : []} title="Article FAQs" />
      <RelatedBlogs blogs={relatedBlogs} />
    </div>
  );
}
