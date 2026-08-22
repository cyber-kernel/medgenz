import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Tag, Clock } from "lucide-react";
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
  openGraph: {
    type: "website",
    url: "https://www.medgenz.com/blogs",
    title: "Healthcare Infrastructure Insights & Blog | MedGenz",
    description:
      "Latest blog posts on Modular Operation Theatres, Medical Gas Pipelines, and hospital engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Infrastructure Blog | MedGenz",
    description: "Expert insights on hospital design and medical infrastructure.",
  },
};

export default async function BlogListingPage() {
  const blogs = await prisma.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

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
      "author": {
        "@type": "Person",
        "name": "MedGenz Admin"
      }
    }))
  };

  return (
    <div className="font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* BLOG HERO */}
      <section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        <div className="absolute inset-0 z-0 opacity-60">
          <Image
            src="/images/service-images/service-hero.webp"
            alt="MedGenz healthcare insights"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pt-24 md:pt-32">
          <span className="text-brand-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Knowledge Hub</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">Latest <span className="text-brand-500">Insights</span></h1>
          <p className="text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light normal-case tracking-normal">
            Stay updated with the latest trends, safety protocols, and engineering breakthroughs in hospital infrastructure.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {blogs.length === 0 ? (
            <div className="py-20 text-center space-y-6">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="w-10 h-10 text-slate-200" />
                </div>
                <h3 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">No articles published yet.</h3>
                <p className="text-slate-400 font-light">Check back soon for high-impact healthcare engineering insights.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {blogs.map((post) => (
                <article key={post.id} className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-500">
                  <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bg-brand-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-600/30">
                        {post.category}
                      </span>
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
                  </div>

                  <div className="p-10 flex-grow flex flex-col">
                    <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
                      <span className="flex items-center gap-2 border-r border-slate-200 pr-6"><Calendar className="w-3.5 h-3.5 text-brand-600" /> {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-2"><User className="w-3.5 h-3.5 text-brand-600" /> Admin</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-brand-600 transition-colors uppercase tracking-tighter line-clamp-2 min-h-[3.5rem] md:min-h-[4.5rem]">
                      <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-slate-500 text-base leading-relaxed mb-10 flex-grow font-light line-clamp-3">
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

function FileText({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    )
}
