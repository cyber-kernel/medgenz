import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Search, XCircle, FileText } from "lucide-react";
import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Healthcare Infrastructure Blog | Modular OT & MGPS Insights | MedGenz",
  description: "Read expert insights and trends on Modular Operation Theatre design, Medical Gas Pipeline Systems, hospital engineering, and healthcare infrastructure from MedGenz experts.",
  keywords: [
    "Healthcare blog",
    "Hospital engineering",
    "Modular OT design",
    "Medical gas systems",
    "NABH compliance",
    "Hospital infrastructure",
    "Healthcare trends",
  ],
  alternates: {
    canonical: "https://www.medgenz.com/blogs",
  },
};

interface BlogListingPageProps {
  searchParams: Promise<{ category?: string; tag?: string }>;
}

export default async function BlogListingPage({ searchParams }: BlogListingPageProps) {
  const { category, tag } = await searchParams;

  // Build where clause
  const whereClause: any = { published: true };
  if (category) {
    whereClause.categories = { has: category };
  }
  if (tag) {
    whereClause.tags = { has: tag };
  }

  const blogs = await prisma.blog.findMany({
    where: whereClause,
    orderBy: { createdAt: "desc" },
  });

  const activeFilter = category || tag;

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MedGenz Healthcare Insights",
    "description": "Insights and trends in hospital infrastructure and medical engineering.",
    "publisher": {
      "@type": "Organization",
      "name": "MedGenz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.medgenz.com/images/brand-logo-mg/medgenz-logo/og-medgenz-logo-2.jpg"
      }
    },
    "blogPost": blogs.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.coverImage,
      "datePublished": post.createdAt.toISOString(),
      "articleSection": post.categories.join(', '),
      "author": {
        "@type": "Person",
        "name": "MedGenz Admin"
      }
    }))
  };

  return (
    <div className="font-inter min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* BLOG HERO */}
      <section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="/images/blogs/blogs-hero.jpeg"
            alt="MedGenz healthcare insights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-24 md:pt-32">
          <span className="text-brand-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Knowledge Hub</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
            {category ? <><span className="text-brand-500">{category}</span> Insights</> : tag ? <>Topic: <span className="text-brand-500">#{tag}</span></> : <>Latest <span className="text-brand-500">Insights</span></>}
          </h1>
          <p className="text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light normal-case tracking-normal">
            Stay updated with the latest trends, safety protocols, and engineering breakthroughs in hospital infrastructure.
          </p>
        </div>
      </section>

      {/* FILTER BAR / STATUS */}
      {activeFilter && (
        <div className="bg-slate-50 border-b border-slate-100 py-6">
           <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <Search className="w-5 h-5 text-brand-600" />
                 <span className="text-slate-600 font-medium">Showing results for: <span className="text-slate-900 font-black uppercase tracking-wider ml-1">{activeFilter}</span></span>
              </div>
              <Link href="/blogs" className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-colors font-bold uppercase tracking-widest text-[10px]">
                 <XCircle className="w-4 h-4" /> Clear Filter
              </Link>
           </div>
        </div>
      )}

      {/* BLOG LISTING */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          {blogs.length === 0 ? (
            <div className="py-32 text-center space-y-8 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200 max-w-4xl mx-auto">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <FileText className="w-12 h-12 text-slate-200" />
                </div>
                <div className="space-y-4">
                   <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">No Articles Found</h3>
                   <p className="text-slate-500 font-light max-w-md mx-auto">We couldn't find any published articles matching your current selection. Try exploring other categories.</p>
                </div>
                <Link href="/blogs" className="inline-flex bg-brand-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-brand-600/20 hover:bg-slate-900 transition-all transform hover:-translate-y-1">
                   Back to All Articles
                </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
              {blogs.map((post) => (
                <article key={post.id} className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-500">
                  <Link href={`/blogs/${post.slug}`} className="aspect-[16/10] bg-slate-100 relative overflow-hidden block">
                    <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                      {post.categories.map((cat, idx) => (
                        <span key={idx} className="bg-brand-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg shadow-brand-600/30">
                          {cat}
                        </span>
                      ))}
                    </div>
                    {post.coverImage && (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                  </Link>

                  <div className="p-8 lg:p-10 flex-grow flex flex-col">
                    <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                      <span className="flex items-center gap-2 border-r border-slate-200 pr-6"><Calendar className="w-3.5 h-3.5 text-brand-600" /> {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-2"><User className="w-3.5 h-3.5 text-brand-600" /> Admin</span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-brand-600 transition-colors uppercase tracking-tighter line-clamp-2 min-h-[3.5rem] lg:min-h-[4.5rem]" style={{ wordBreak: 'normal', overflowWrap: 'break-word' }}>
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-slate-500 text-base leading-relaxed mb-10 flex-grow font-light line-clamp-3" style={{ wordBreak: 'normal', overflowWrap: 'break-word' }}>
                      {post.excerpt}
                    </p>

                    <div className="pt-8 border-t border-slate-50 mt-auto">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="text-brand-600 font-black text-xs uppercase tracking-widest flex items-center gap-3 group-hover:gap-5 transition-all"
                      >
                        Read Full Article <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[150px] -mr-20 -mt-20" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">Stay Informed on <br /><span className="text-brand-500">Healthcare Engineering</span></h2>
          <p className="text-slate-400 mb-12 text-lg md:text-xl font-light">Subscribe to our newsletter to receive the latest industry updates directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Your professional email"
              suppressHydrationWarning={true}
              className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-white outline-none focus:border-brand-600 transition-all font-medium"
            />
            <button className="bg-brand-600 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/20">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
