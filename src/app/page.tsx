import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, ShieldCheck, Activity, Phone, Mail, MapPin, Layout, Wind, Settings, Star } from 'lucide-react';
import HomeSlider from '@/components/HomeSlider';
import ClientMarquee from '@/components/sections/ClientMarquee';
import ECGCTA from '@/components/sections/ECGCTA';

const stats = [
  { label: "Projects Done", value: "150+" },
  { label: "Years Experience", value: "12+" },
  { label: "Client Base", value: "150+" },
  { label: "Staff Members", value: "100+" },
];

const expertise = [
  {
    title: "Modular OT Setup",
    desc: "Complete design and installation of seamless, highly sterile operation theatres using modern materials.",
    image: "/images/service-images/modular-ot-product.webp",
    link: "/services/modular-operation-theatre",
    icon: ShieldCheck
  },
  {
    title: "Medical Gas Pipelines",
    desc: "End-to-end routing, design, and testing of highly reliable medical gas pipeline systems (MGPS).",
    image: "/images/service-images/mgps-product.webp",
    link: "/services/medical-gas-pipeline-system",
    icon: Wind
  },
  {
    title: "Hospital Furniture",
    desc: "High quality, durable furniture designed for optimal patient care and comfort in hospital environments.",
    image: "/images/key-application-images/emergency-ward.webp",
    link: "/services/hospital-furniture",
    icon: Settings
  }
];

const testimonials = [
  {
    name: "Dr. Aman Maggo",
    role: "Hospital Founder, Delhi",
    text: "MedGenz executed our entire MGPS and Modular OT setup flawlessly. Their attention to NABH compliance saved us months of delay."
  },
  {
    name: "Dr. Asish",
    role: "ENT Surgeon, Haryana",
    text: "The Class 100 Modular OT built by MedGenz completely upgraded our surgical capabilities. Truly world-class panels."
  },
  {
    name: "Dr. M. Gupta",
    role: "IVF Specialist, Haryana",
    text: "MedGenz handled our complete IVF lab setup. Their understanding of ISO 5 air quality is unparalleled."
  }
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MedGenz",
    "url": "https://www.medgenz.com",
    "logo": "https://www.medgenz.com/images/brand-logo-mg/medgenz-logo/og-medgenz-logo-2-transparent.webp",
    "description": "Premier ISO certified manufacturer of Modular Operation Theatres (MOT), Medical Gas Pipeline Systems (MGPS), and turnkey hospital infrastructure in India.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9716412630",
      "contactType": "Sales"
    }
  };

  return (
    <div className="relative font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION - Integrated Slider */}
      <section className="relative min-h-screen flex items-center pt-48 md:pt-56">
        <HomeSlider />
      </section>

      {/* 2. STATS SECTION - Scaled Down */}
      <section className="py-12 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-5xl font-black text-brand-600 mb-2">{s.value}</div>
                <div className="text-slate-500 uppercase text-[9px] md:text-xs tracking-widest font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEEP ABOUT SECTION - Scaled Down */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] bg-slate-100 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
              <Image
                src="/images/about-us/about-us-home/about-us.webp"
                alt="MedGenz Facility"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-6 md:p-8 rounded-[2rem] z-20 shadow-2xl transform hover:scale-110 transition-transform cursor-default">
              <div className="text-3xl md:text-5xl font-black">12+</div>
              <div className="text-[9px] md:text-xs font-bold uppercase tracking-wider text-brand-100">Years of Legacy</div>
            </div>
          </div>

          <div className="space-y-8">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs block">Who We Are</span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight uppercase tracking-tighter">Premier Manufacturer of <br /><span className="text-brand-600">Hospital Infrastructure</span></h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
              Welcome to MedGenz. We are an ISO 9001:2015, ISO 13485:2016, and CE Certified organization engaged in Manufacturing, Supplying, and Exporting a wide array of Medical Gas Pipeline Systems (MGPS), Modular Operation Theatres, ICU Pendants, and Nurse Call Systems.
            </p>
            <div className="space-y-4">
              {["Turnkey Hospital Projects", "Certified Quality Management", "In-house Manufacturing & R&D"].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3 h-3 text-brand-600" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-600 transition-colors shadow-lg shadow-slate-900/20">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      <ClientMarquee />

      {/* 4. CORE EXPERTISE GRID - Scaled Down & Clickable */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Core <span className="text-brand-600">Expertise</span></h2>
            <div className="w-16 h-1 bg-brand-600 mx-auto rounded-full" />
            <p className="mt-8 text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-light">Providing a comprehensive range of turnkey healthcare solutions tailored to complex medical requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, i) => (
              <Link href={item.link} key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="h-56 relative overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 line-clamp-1 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow line-clamp-3 text-sm font-light">{item.desc}</p>
                  <div className="mt-auto">
                    <div className="text-brand-600 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 group-hover:gap-4 transition-all">
                      Explore Service <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-600 transition-all shadow-xl shadow-slate-900/20 transform hover:-translate-y-1">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS - Star Icons & Scaled Down */}
      <section className="py-20 bg-brand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs mb-2 block">Client Stories</span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Trusted by <span className="text-brand-600">Professionals</span></h2>
            <div className="w-16 h-1 bg-brand-600 mx-auto rounded-full" />
          </div>

          <div className="overflow-hidden pb-12">
            <div className="flex w-max gap-6 animate-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={`${t.name}-${i}`} className="w-[85vw] md:w-[450px] shrink-0 bg-white rounded-3xl p-8 shadow-lg border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-base italic leading-relaxed mb-8 font-light">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center font-bold text-brand-600 text-lg">{t.name[0]}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-slate-500 text-xs font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <ECGCTA />
    </div>
  );
}
