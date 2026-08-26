import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ShieldCheck, ArrowRight, Layout, Wind, Activity, Zap, FileText, ExternalLink, Lightbulb } from "lucide-react";
import ClientMarquee from '@/components/sections/ClientMarquee';
import Certifications from '@/components/sections/Certifications';
import ECGCTA from '@/components/sections/ECGCTA';

export const metadata = {
  title: "Modular Operation Theatre Manufacturers | Turnkey OT Setup",
  description: "Leading Modular Operation Theatre (MOT) manufacturers in India. We provide NABH-compliant, Class 100 turnkey OT setups, Laminar Air Flow, and cleanroom solutions.",
};

const architecture = [
  {
    category: "Infection-Controlled Infrastructure",
    badge: "Engineered for NABH",
    items: [
      { name: "Modular Wall Panels (SS-304/PUF)", slug: "wall-panels" },
      { name: "Seamless OT Ceiling Systems", slug: "ceiling-systems" },
      { name: "Hermetically Sealed OT Doors", slug: "ot-doors" },
      { name: "Anti-Static Vinyl Flooring", slug: "flooring-systems" }
    ]
  },
  {
    category: "Advanced Air Management",
    badge: "Sterile Class 100 OT",
    items: [
      { name: "Laminar Air Flow (LAF) Systems", slug: "laminar-airflow" },
      { name: "Terminal HEPA Filtration", slug: "hepa-filtration" },
      { name: "Air Handling Units (AHU)", slug: "air-handling-units" },
      { name: "OT Pressure Control System", slug: "pressure-control" },
      { name: "Precision HVAC Ducting Network", slug: "hvac-ducting" }
    ]
  },
  {
    category: "Smart Control & Electrical",
    badge: "Integrated Commands",
    items: [
      { name: "Digital Surgeon Control Panel", slug: "surgeon-control-panel" },
      { name: "Peripheral Cleanroom Lights", slug: "peripheral-cleanroom-lights" },
      { name: "Temperature & Pressure Monitoring", slug: "environment-monitoring" }
    ]
  },
  {
    category: "Surgical Support Systems",
    badge: "Utility Integrations",
    items: [
      { name: "OT Ceiling Pendants (Anaesthesia)", slug: "surgical-pendants" },
      { name: "Stainless Steel Scrub Stations", slug: "scrub-stations" },
      { name: "Flush-Mounted Storage Cabinets", slug: "storage-cabinets" },
      { name: "LED X-Ray Viewing Screens", slug: "x-ray-viewers" }
    ]
  }
];

const faqs = [
  {
    q: "What is a Modular Operation Theatre (MOT)?",
    a: "A Modular Operation Theatre is a highly advanced, prefabricated surgical environment designed to deliver absolute sterility. It uses seamless, anti-bacterial surfaces that prevent the accumulation of dust and microbes, ensuring a safe environment for surgeries."
  },
  {
    q: "Are your Modular OTs NABH compliant?",
    a: "Yes, our Turnkey MOT solutions integrate high-efficiency Laminar Air Flow (LAF) systems and specialized flooring to achieve a Class 100 / ISO 5 cleanroom standard, 100% adhering to NABH and international healthcare guidelines."
  },
  {
    q: "What components are included in a turnkey MOT setup?",
    a: "Our turnkey setups include anti-bacterial wall panels (SS-304/PUF), Laminar Air Flow (LAF) systems, hermetically sealed doors, anti-static flooring, digital surgeon control panels, and complete medical gas pipeline integration."
  },
  {
    q: "How long does it take to install a Modular OT?",
    a: "A complete turnkey Modular OT setup typically takes 4 to 6 weeks from design approval to final commissioning, depending on site readiness and customizations."
  },
  {
    q: "What type of wall panels do you use for the MOT?",
    a: "We use high-grade pre-painted galvanized iron (PPGI), Stainless Steel (SS-304), or EGP PUF panels. These are coated with an anti-microbial, anti-fungal epoxy polyester paint to ensure maximum sterility."
  },
  {
    q: "Do you provide after-sales support and AMC for Modular OTs?",
    a: "Yes, MedGenz provides comprehensive Annual Maintenance Contracts (AMC). We ensure periodic validation of Laminar Air Flow systems, HEPA filter replacements, and overall equipment maintenance."
  }
];

export default function MOTPage() {
  return (
    <div className="pt-20 font-inter">
      {/* CLEAN PRODUCT HEADER */}
      <section className="pt-28 pb-8 md:pt-40 md:pb-16 bg-white border-b border-gray-100 uppercase tracking-tighter">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav aria-label="breadcrumb" className="mb-4 md:mb-6">
            <ol className="service-breadcrumb flex w-full min-w-0 items-center gap-x-1.5 md:gap-x-2 whitespace-nowrap text-[8px] sm:text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-normal md:tracking-wider">
              <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li><Link href="/services" className="hover:text-brand-600 transition-colors">Services</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li className="text-brand-600 font-bold">Modular OT</li>
            </ol>
          </nav>

          <div className="w-full lg:max-w-6xl">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">Class 100 Cleanroom Certified</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">Modular Operation Theatre <span className="text-brand-600">Manufacturers</span></h1>
            <p className="text-gray-600 text-sm md:text-xl mb-6 md:mb-8 leading-relaxed normal-case tracking-normal font-light">
              We design, manufacture, and install ultra-sterile, Class 100 cleanroom environments engineered to minimize infection risks and optimize surgical workflows.
            </p>

            <div className="mb-8 border-l-4 border-brand-600 bg-brand-50 rounded-r-xl p-4 md:p-5 shadow-sm">
              <h3 className="text-[11px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">System Execution Blueprint</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-6 text-sm md:text-base text-gray-800 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> SS-304 & PUF Paneling
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> NABH & HTM Compliant
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Class 100 HEPA Filtration
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Anti-Static Vinyl Flooring
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-lg border border-gray-200">4.9/5 based on 47 reviews</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center gap-2">
                Get a Free Quote <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS MOT */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-tighter">What is a <span className="text-brand-600">Modular Operation Theatre?</span></h2>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg font-light">
              A Modular Operation Theatre (MOT) is a highly advanced, prefabricated surgical environment designed to deliver absolute sterility. Unlike traditional brick-and-mortar OTs, modular setups use seamless, anti-bacterial surfaces that prevent the accumulation of dust and microbes.
            </p>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg font-light">
              At MedGenz, our Turnkey MOT solutions integrate high-efficiency <strong>Laminar Air Flow (LAF) systems</strong>, HEPA filters, and specialized <strong>anti-static flooring</strong> to achieve a <strong>Class 100 / ISO 5 cleanroom standard</strong>, strictly adhering to NABH and international healthcare guidelines.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="border-l-4 border-brand-600 pl-3 md:pl-4">
                <div className="text-xl md:text-2xl font-black text-gray-900">Zero</div>
                <div className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Infection Risk Design</div>
              </div>
              <div className="border-l-4 border-brand-600 pl-3 md:pl-4">
                <div className="text-xl md:text-2xl font-black text-gray-900">100%</div>
                <div className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">NABH Compliant</div>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2 mb-4 md:mb-0">
            <div className="absolute inset-0 bg-brand-100 rounded-3xl transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10"></div>
            <div className="relative rounded-3xl shadow-xl overflow-hidden w-full aspect-[4/3] border border-gray-200 bg-white">
              <Image src="/images/service assets/mot-page-n-eq-assets/ot-3.webp" alt="Modular Operation Theatre" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">System Architecture</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Complete <span className="text-brand-600">Turnkey OT Solutions</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg font-light">We engineer, manufacture, and integrate every critical component required for a world-class, zero-infection operating theatre.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8 mb-8 md:mb-12">
            {architecture.map((cat, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-200 shadow-sm hover:border-brand-200 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200">
                  <h3 className="text-base md:text-xl font-bold text-gray-900 leading-tight uppercase tracking-tighter">{cat.category}</h3>
                  <span className="text-[8px] md:text-[10px] text-green-600 font-bold uppercase tracking-widest border border-green-200 bg-green-50 px-2 py-0.5 rounded-full">{cat.badge}</span>
                </div>
                <div className="space-y-1 flex-grow">
                  {cat.items.map((item, ii) => (
                    <Link key={ii} href={`/services/modular-operation-theatre/${item.slug}`} className="group flex items-center justify-between p-2 md:p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100 font-bold text-xs md:text-sm">
                      <span className="text-gray-700 group-hover:text-brand-700">{item.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 group-hover:text-brand-600 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ADD-ON INTEGRATIONS */}
          <div className="bg-gradient-to-r from-brand-900 to-gray-900 rounded-3xl p-5 md:p-12 border border-gray-800 shadow-xl flex flex-col md:flex-row items-center gap-4 md:gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-3xl opacity-10 -mr-20 -mt-20"></div>
            <div className="md:w-1/2 relative z-10 text-center md:text-left">
              <span className="text-brand-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2 block">Optional / Add-On Integrations</span>
              <h3 className="text-2xl md:text-4xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter">Surgical Equipment</h3>
              <p className="text-gray-300 text-xs md:text-lg leading-relaxed font-light">
                Beyond the core infrastructure, we offer a complete, ready-to-operate solution. Equip your new Modular OT with our premium range of operating hardware.
              </p>
            </div>
            <div className="md:w-1/2 w-full grid sm:grid-cols-2 gap-3 md:gap-4 relative z-10">
              <Link href="/services/modular-operation-theatre/surgical-ot-lights" className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 md:p-5 rounded-xl backdrop-blur-sm transition-all group flex flex-col gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">OT Lights</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-brand-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              <Link href="/services/modular-operation-theatre/surgical-tables" className="bg-white/5 hover:bg-white/10 border border-white/10 p-3 md:p-5 rounded-xl backdrop-blur-sm transition-all group flex flex-col gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center">
                  <Layout className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-xs md:text-sm uppercase tracking-widest">OT Tables</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-brand-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCE VAULT */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 border-b-2 border-gray-200 pb-4 gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tighter">Technical <span className="text-brand-600">Resource Vault</span></h2>
            <span className="w-max self-start text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">Architect Portal</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <a href="/images/technical-resource-valut/modular-ot-tech-resource-vault/modular-operation-theatre-layout-drawing.pdf" target="_blank" className="group bg-white rounded-lg md:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all overflow-hidden flex flex-col text-center md:text-left">
              <div className="h-16 md:h-40 bg-gray-100 flex items-center justify-center border-b border-gray-200 group-hover:bg-brand-50 transition-colors relative">
                <FileText className="w-8 h-8 md:w-16 md:h-16 text-brand-300 group-hover:text-brand-500 transition-colors" />
              </div>
              <div className="p-2 md:p-5 flex flex-col flex-grow items-center md:items-start">
                <h4 className="font-bold text-gray-900 group-hover:text-brand-700 text-[10px] md:text-base leading-tight mb-1">MOT Layout Drawing</h4>
                <p className="hidden md:block text-xs text-gray-500 mb-4 flex-grow font-light">DWG Format • OT Zoning Guides</p>
                <div className="text-[9px] md:text-xs font-bold text-brand-600 flex items-center gap-1 md:gap-2 mt-auto">Open Document <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /></div>
              </div>
            </a>
            <a href="/images/technical-resource-valut/modular-ot-tech-resource-vault/medgenz_nabh_modular-ot-checklist.pdf" target="_blank" className="group bg-white rounded-lg md:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all overflow-hidden flex flex-col text-center md:text-left">
              <div className="h-16 md:h-40 bg-gray-100 flex items-center justify-center border-b border-gray-200 group-hover:bg-brand-50 transition-colors relative">
                <FileText className="w-8 h-8 md:w-16 md:h-16 text-red-300 group-hover:text-red-500 transition-colors" />
              </div>
              <div className="p-2 md:p-5 flex flex-col flex-grow items-center md:items-start">
                <h4 className="font-bold text-gray-900 group-hover:text-brand-700 text-[10px] md:text-base leading-tight mb-1">NABH OT Checklist</h4>
                <p className="hidden md:block text-xs text-gray-500 mb-4 flex-grow font-light">PDF Document • Compliance Standards</p>
                <div className="text-[9px] md:text-xs font-bold text-brand-600 flex items-center gap-1 md:gap-2 mt-auto">Open Document <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /></div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200 font-inter">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-2 border-brand-600 pb-2 md:pb-3 inline-block uppercase tracking-tighter">MOT Technical Specifications</h2>
          <div className="overflow-x-auto rounded-xl bg-white border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold w-1/3 border-r border-gray-200 text-[10px] uppercase tracking-widest">Air Quality Standard</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">ISO Class 5 / US FED STD 209E Class 100</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Wall Panel Materials</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Pre-painted Galvanized Iron (PPGI), SS-304, or EGP PUF Panels</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Paint / Finish</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Anti-microbial, anti-fungal epoxy polyester paint</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Air Filtration</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Terminal HEPA Filters (0.3 micron at 99.997% efficiency)</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Flooring Thickness</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">2mm - 3mm Anti-static Seamless Vinyl/Epoxy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Certifications />

      {/* VIDEO */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">See It In Action</span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">Experience a <span className="text-brand-600">Turnkey MOT Setup</span></h2>
            <p className="text-gray-500 text-sm md:text-base font-light">Watch a real-world walkthrough of our Class 100 Modular Operation Theatres.</p>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-200 bg-gray-900 aspect-video">
            <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/CGU6enjAdvQ?si=V36jOXDH91B2oayO"
                title="MedGenz Modular Operation Theatre Demonstration"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      <ClientMarquee />

      {/* FAQ */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200 font-inter">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 uppercase tracking-tighter">Frequently Asked <span className="text-brand-600">Questions</span></h2>
            <p className="text-gray-500 text-sm md:text-base">Technical details regarding our Turnkey Modular OT setups.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-lg md:rounded-xl border border-gray-200 shadow-sm overflow-hidden" open={i === 0}>
                <summary className="flex items-center justify-between p-3 md:p-5 font-bold text-gray-900 cursor-pointer hover:bg-white transition-colors">
                  <span className="text-xs sm:text-sm md:text-lg flex items-start gap-2 md:gap-3">
                    <span className="text-brand-600 shrink-0">{i + 1}.</span>
                    {faq.q}
                  </span>
                </summary>
                <div className="px-3 md:px-5 pb-3 md:pb-5 pt-1 text-gray-600 text-xs md:text-base leading-relaxed border-t border-gray-100 mt-2 font-light">
                  <p className="mt-1 md:mt-2">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ECGCTA />
    </div>
  );
}
