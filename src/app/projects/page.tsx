import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, FolderKanban } from "lucide-react";
import ClientMarquee from "@/components/sections/ClientMarquee";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "MedGenz Projects | Landmark Hospital Installations & Case Studies",
  description: "Explore our successful turnkey hospital infrastructure projects including Modular OTs in Delhi, MGPS networks in UP, and high-purity IVF Labs in Punjab.",
  keywords: [
    "Hospital projects",
    "Case studies",
    "MOT installation",
    "MGPS implementation",
    "IVF lab setup",
    "Hospital construction",
    "Medical equipment installation",
  ],
  alternates: {
    canonical: "https://www.medgenz.com/projects",
  },
  openGraph: {
    type: "website",
    url: "https://www.medgenz.com/projects",
    title: "Our Landmark Hospital Projects | MedGenz",
    description:
      "Explore our successful turnkey hospital installations and case studies across India.",
    images: [
      {
        url: "https://www.medgenz.com/images/service assets/mot-page-n-eq-assets/ot-3.webp",
        width: 1200,
        height: 630,
        alt: "MedGenz Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Landmark Hospital Projects | MedGenz",
    description: "Successful turnkey hospital infrastructure installations across India.",
  },
};

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="pt-20 font-inter">
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        <div className="absolute inset-0 z-0 opacity-60">
           <Image
             src="/images/about-us/about-us-home/about-us.webp"
             alt="MedGenz Projects"
             fill
             className="object-cover"
             priority
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/20 text-brand-400 border border-brand-500/30 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">Case Studies</span>
          <h1 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">Proven <span className="text-brand-500">Installations</span></h1>
          <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed normal-case tracking-normal font-light">
            Transforming bare healthcare shells into world-class, NABH-compliant surgical and support environments across India.
          </p>
        </div>
      </section>

      {/* 2. PROJECTS GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {projects.length === 0 ? (
            <div className="py-20 text-center space-y-6 bg-slate-50 rounded-[3rem] border border-slate-100">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <FolderKanban className="w-10 h-10 text-slate-200" />
                </div>
                <h3 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">No case studies published yet.</h3>
                <p className="text-slate-400 font-light max-w-sm mx-auto">Our engineering portfolio is being updated. Check back soon for our latest turnkey installations.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {projects.map((p) => (
                <Link href={`/projects/${p.slug}`} key={p.id} className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] relative overflow-hidden flex-shrink-0">
                    {p.heroImage ? (
                      <Image src={p.heroImage} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    ) : (
                      <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                        <FolderKanban className="w-12 h-12 text-slate-200" />
                      </div>
                    )}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      {p.service && (
                        <span className="w-fit bg-brand-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                          {p.service}
                        </span>
                      )}
                      {p.location && (
                        <span className="w-fit bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                          <MapPin className="w-3 h-3 text-brand-500" /> {p.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-10 flex-grow flex flex-col">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors uppercase tracking-tighter line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-8 flex-grow font-light line-clamp-3">
                      {p.brief}
                    </p>

                    <div className="pt-8 border-t border-slate-50 mt-auto">
                      <div className="inline-flex items-center gap-3 text-brand-600 font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all">
                        Read Case Study <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. SOCIAL PROOF */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Trusted by 100+ <span className="text-brand-500">Institutions</span></h2>
          <div className="w-20 h-1 bg-brand-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">PAN INDIA PRESENCE • NEPAL EXPORT PARTNER</p>
        </div>
      </section>

      <ClientMarquee />

      {/* 4. CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-[150px] opacity-10 -mr-20 -mt-20 group-hover:opacity-20 transition-opacity" />
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-brand-400 border border-white/10 text-[10px] font-bold uppercase tracking-widest mb-8">Ready to Start?</span>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
              Have a Project <br /><span className="text-brand-500">In Mind?</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Whether it's a new facility or upgrading existing infrastructure, MedGenz has the expertise to deliver on time and within budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-brand-600 text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-brand-500 transition-all shadow-xl shadow-brand-600/30 transform hover:-translate-y-1"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
