import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, ShieldCheck, Activity, Phone, Mail, MapPin, Layout, Wind, Settings, Zap } from 'lucide-react';
import HomeSlider from '@/components/HomeSlider';
import ClientMarquee from '@/components/sections/ClientMarquee';
import ECGCTA from '@/components/sections/ECGCTA';

const stats = [
  { label: "Projects Done", value: "150+" },
  { label: "Years Experience", value: "12+" },
  { label: "Client Base", value: "100+" },
  { label: "Staff Members", value: "500+" },
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
    "logo": "https://www.medgenz.com/images/brand-logo-mg/medgenz-logo/medgenz-logo1.webp",
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
      {/* Massive Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <HomeSlider />

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-600/20 text-brand-300 border border-brand-400/30 text-[10px] md:text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
              India's Trusted Infrastructure Partner
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Modular Operation Theatre <br />
              <span className="text-brand-500 drop-shadow-2xl">Manufacturers.</span>
            </h1>

            <p className="text-slate-200 text-sm md:text-2xl mb-10 max-w-3xl font-light leading-relaxed">
              We design, manufacture, and install world-class, clean-room compliant operation theatres and MGPS systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start">
              <Link href="/services" className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-bold text-base uppercase tracking-widest shadow-xl shadow-brand-600/40 hover:bg-brand-500 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                Our Services <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#contact-form" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all px-10 py-5 rounded-2xl font-bold text-base uppercase tracking-widest backdrop-blur-md flex items-center justify-center">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-6xl font-black text-brand-600 mb-2">{s.value}</div>
                <div className="text-slate-500 uppercase text-[10px] md:text-sm tracking-widest font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep About Section */}
      <section className="py-24 bg-white overflow-hidden">
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
            <div className="absolute -bottom-8 -right-8 bg-brand-600 text-white p-8 md:p-10 rounded-[2rem] z-20 shadow-2xl transform hover:scale-110 transition-transform cursor-default">
              <div className="text-4xl md:text-6xl font-black">12+</div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-brand-100">Years of Legacy</div>
            </div>
          </div>

          <div className="space-y-8">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-sm block">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Premier Manufacturer of <span className="text-brand-600">Hospital Infrastructure</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Welcome to MedGenz. We are an ISO 9001:2015, ISO 13485:2016, and CE Certified organization engaged in Manufacturing, Supplying, and Exporting a wide array of Medical Gas Pipeline Systems (MGPS), Modular Operation Theatres, ICU Pendants, and Nurse Call Systems.
            </p>
            <div className="space-y-4">
              {["Turnkey Hospital Projects", "Certified Quality Management", "In-house Manufacturing & R&D"].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-brand-600" />
                  </div>
                  <span className="text-slate-700 font-bold">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-600 transition-colors shadow-lg shadow-slate-900/20">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      <ClientMarquee />

      {/* Core Expertise Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Core <span className="text-brand-600">Expertise</span></h2>
            <div className="w-20 h-1.5 bg-brand-600 mx-auto rounded-full" />
            <p className="mt-8 text-slate-500 text-lg max-w-2xl mx-auto">Providing a comprehensive range of turnkey healthcare solutions tailored to complex medical requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {expertise.map((item, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="h-64 relative overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8 group-hover:bg-brand-600 group-hover:text-white transition-colors flex-shrink-0">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 line-clamp-1">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow line-clamp-3">{item.desc}</p>
                  <div className="mt-auto">
                    <Link href={item.link} className="text-brand-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all">
                      Explore Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/services" className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-brand-600 transition-all shadow-xl shadow-slate-900/20 transform hover:-translate-y-1">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Swipeable Testimonials */}
      <section className="py-24 bg-brand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-2 block">Client Stories</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Trusted by <span className="text-brand-600">Medical Professionals</span></h2>
            <div className="w-20 h-1.5 bg-brand-600 mx-auto rounded-full" />
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[85vw] md:min-w-[450px] bg-white rounded-3xl p-10 shadow-lg border border-slate-100 snap-center relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Zap key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 text-lg italic leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center font-bold text-brand-600 text-xl">{t.name[0]}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-slate-500 text-sm font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ECGCTA />
    </div>
  );
}
