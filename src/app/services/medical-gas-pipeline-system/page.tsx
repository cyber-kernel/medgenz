"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle,
  ShieldCheck,
  ChevronRight,
  FileText,
  Zap,
  Activity,
  Layout,
  Settings,
  Monitor,
  AlertTriangle,
  ArrowRight,
  Star,
  ExternalLink,
  Wind,
  Droplets,
  Gauge
} from "lucide-react";
import ECGCTA from '@/components/sections/ECGCTA';
import ClientMarquee from '@/components/sections/ClientMarquee';
import Certifications from '@/components/sections/Certifications';

const architecture = [
  {
    category: "Oxygen Supply System",
    badge: "Life Support Core",
    items: [
      { name: "Oxygen Manifold (Manual/Auto)", slug: "oxygen-supply-system" },
      { name: "Emergency Oxygen Manifold", slug: "oxygen-supply-system" },
      { name: "Fully Auto Oxygen Control Panel", slug: "oxygen-supply-system" },
      { name: "Oxygen Flow Meter with Humidifier", slug: "oxygen-supply-system" }
    ],
    slug: "oxygen-supply-system"
  },
  {
    category: "Nitrous Oxide (N₂O)",
    badge: "Anaesthetic Gas Supply",
    items: [
      { name: "N₂O Manifold System", slug: "nitrous-oxide-system" },
      { name: "Emergency N₂O Manifold", slug: "nitrous-oxide-system" },
      { name: "N₂O Control Panel with Heater", slug: "nitrous-oxide-system" }
    ],
    slug: "nitrous-oxide-system"
  },
  {
    category: "Medical Air System",
    badge: "Surgical 7-Bar / Medical 4-Bar",
    items: [
      { name: "Oil-Free Air Compressor System", slug: "medical-air-system" },
      { name: "Air Receiver Tank", slug: "medical-air-system" }
    ],
    slug: "medical-air-system"
  },
  {
    category: "Central Vacuum System",
    badge: "High Suction Power",
    items: [
      { name: "Vacuum Pump System & Receiver", slug: "central-vacuum-system" },
      { name: "Bacterial Filters", slug: "central-vacuum-system" },
      { name: "Vacuum Regulators & Trolleys", slug: "central-vacuum-system" }
    ],
    slug: "central-vacuum-system"
  },
  {
    category: "MGPS Core Network",
    badge: "Medical Grade Copper",
    items: [
      { name: "Copper Pipeline Network", slug: "copper-pipeline-network" },
      { name: "Pipe Fittings & Joints", slug: "copper-pipeline-network" },
      { name: "Pipeline Installation & Brazing", slug: "copper-pipeline-network" }
    ],
    slug: "copper-pipeline-network"
  },
  {
    category: "Gas Control & Safety",
    badge: "Ward Isolation & Monitoring",
    items: [
      { name: "Area Valve Box (2/3/4 Gas)", slug: "gas-control-safety" },
      { name: "Isolation Valves (12mm - 54mm)", slug: "gas-control-safety" },
      { name: "Line Pressure Alarm Systems", slug: "gas-control-safety" }
    ],
    slug: "gas-control-safety"
  },
  {
    category: "Bed Head Panel System",
    badge: "Bedside Utility Integration",
    items: [
      { name: "3 Gas Outlet Panels", slug: "bed-head-panels" },
      { name: "4 Gas Outlet Panels", slug: "bed-head-panels" },
      { name: "ICU Bed Head Units", slug: "bed-head-panels" }
    ],
    slug: "bed-head-panels"
  },
  {
    category: "Gas Outlets & Terminals",
    badge: "Delivery Points",
    items: [
      { name: "Oxygen & Vacuum Outlets", slug: "gas-outlets-terminals" },
      { name: "Medical Air & N₂O Outlets", slug: "gas-outlets-terminals" },
      { name: "Probe & Adaptor Systems", slug: "gas-outlets-terminals" }
    ],
    slug: "gas-outlets-terminals"
  },
  {
    category: "Accessories & Consumables",
    badge: "H.P. Tubes & Connectors",
    items: [
      { name: "Color-coded H.P. Rubber Tubes", slug: "accessories-consumables" },
      { name: "Humidifier Bottles & Collection Jars", slug: "accessories-consumables" },
      { name: "Connectors & Adaptors", slug: "accessories-consumables" }
    ],
    slug: "accessories-consumables"
  }
];

const faqs = [
  {
    q: "What is a Medical Gas Pipeline System (MGPS)?",
    a: "A Medical Gas Pipeline System (MGPS) is the critical life-support network of a hospital, safely delivering oxygen, vacuum, and medical air to patient bedsides. We provide complete turnkey MGPS solutions, from designing the pipeline routing to manufacturing oxygen manifolds and executing the final installation."
  },
  {
    q: "Are the MGPS installations by MedGenz NABH and HTM 02-01 compliant?",
    a: "Yes, absolute patient safety is our priority. MedGenz strictly adhere to HTM 02-01, NFPA 99, and ISO 7396-1 standards. Our engineering ensures your hospital easily achieves NABH accreditation by utilizing certified equipment and rigorous 150% pressure leak testing."
  },
  {
    q: "What type of copper piping do you use for hospital gas networks?",
    a: "We exclusively use BS EN 13348 medical-grade, half-hard seamless copper pipes. All pipes are factory-degreased to eliminate fire hazards. Furthermore, our technicians perform silver brazing under a continuous inert nitrogen purge to prevent internal oxidation and blockages."
  },
  {
    q: "How do your fully automatic oxygen manifolds prevent supply failure?",
    a: "Our fully automatic oxygen control panels are engineered for zero downtime. If the active cylinder bank depletes, the manifold's pneumatic shuttle valve instantly and mechanically switches to the reserve bank. This fail-safe mechanism requires zero human intervention, ensuring uninterrupted life-support gas flow."
  },
  {
    q: "How are gas leaks or pressure drops monitored in the MGPS network?",
    a: "We install digital Area Valve Service Units (AVSUs) and line pressure alarms outside every critical zone, such as Modular OTs and ICUs. If the pressure of oxygen or vacuum deviates from safe parameters, the system triggers instant audio-visual alerts, allowing staff to isolate the specific zone safely."
  }
];

export default function MGPSHub() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/images/service-images/mgps-product.webp", alt: "Medical Gas Pipeline Installation" },
    { src: "/images/key-application-images/manifold-plant-rooms.webp", alt: "Oxygen Manifold System" },
    { src: "/images/mgps-product-page-images/mgps-bed-head-panel-images/4-outlets-bed-head-panel.webp", alt: "Hospital Bed Head Panels" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

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
              <li className="text-brand-600 font-bold">Medical Gas Pipeline System</li>
            </ol>
          </nav>

          <div className="w-full lg:max-w-6xl">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
              HTM & NFPA Compliant
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
              Medical Gas Pipeline <span className="text-brand-600">System (MGPS)</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-xl mb-6 md:mb-8 leading-relaxed normal-case tracking-normal font-light">
              We engineer and install life-saving Medical Gas Pipeline Systems ensuring uninterrupted, highly sterile delivery of Oxygen, Medical Air, and Vacuum directly to the patient's bedside.
            </p>

            <div className="mb-8 border-l-4 border-brand-600 bg-brand-50 rounded-r-xl p-4 md:p-5 shadow-sm">
                <h3 className="text-[11px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">System Execution Blueprint</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 gap-x-6 text-sm md:text-base text-gray-800 font-medium normal-case tracking-normal">
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> BS EN 13348 Copper
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> HTM 02-01 Compliant
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> Automatic Manifolds
                    </div>
                    <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> 150% Leak-Proof Testing
                    </div>
                </div>
            </div>

            {/* STAR RATING BOX */}
            <div className="flex items-center gap-3 mb-8">
                <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-lg border border-gray-200">4.8/5 based on 105 reviews</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center gap-2 transition-transform hover:-translate-y-1">
                Get a Free Quote <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION WITH SLIDER */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-tighter">The Lifeline of <span className="text-brand-600">Modern Hospitals</span></h2>
            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-lg font-light">
              A Medical Gas Pipeline System (MGPS) is critical hospital infrastructure designed to provide a safe, continuous, and highly pressurized flow of medical gases. It replaces the outdated and hazardous practice of wheeling heavy gas cylinders through hospital corridors.
            </p>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg font-light">
              From <strong>Fully Automatic Oxygen Manifolds</strong> to <strong>BS EN 13348 certified Copper Piping</strong>, MedGenz executes complete turnkey MGPS projects. We ensure every outlet point delivers flawless, life-sustaining pressure.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="border-l-4 border-brand-600 pl-3 md:pl-4">
                <div className="text-xl md:text-2xl font-black text-gray-900">100%</div>
                <div className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Leak-Proof Brazing</div>
              </div>
              <div className="border-l-4 border-brand-600 pl-3 md:pl-4">
                <div className="text-xl md:text-2xl font-black text-gray-900">24/7</div>
                <div className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mt-1">Continuous Supply</div>
              </div>
            </div>
          </div>

          <div className="relative order-1 md:order-2 mb-4 md:mb-0">
            <div className="absolute inset-0 bg-brand-100 rounded-2xl transform translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 -z-10"></div>
            <div className="relative rounded-2xl shadow-lg overflow-hidden w-full aspect-[3/2] border border-gray-200 bg-white">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE - 9 CARD GRID */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">System Architecture</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Complete <span className="text-brand-600">MGPS Integration</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg font-light">From central plants to bedside outlets, we design and manufacture every component of the medical gas delivery network.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-8 md:mb-12">
            {architecture.map((cat, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm hover:border-brand-200 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight uppercase tracking-tighter">{cat.category}</h3>
                  <span className="text-[8px] md:text-[10px] text-green-600 font-bold uppercase tracking-widest border border-green-200 bg-green-50 px-2 py-0.5 rounded-full">{cat.badge}</span>
                </div>
                <div className="space-y-1 flex-grow">
                  {cat.items.map((item, ii) => (
                    <Link key={ii} href={`/services/medical-gas-pipeline-system/${cat.slug}`} className="group flex items-center justify-between p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100 font-bold text-xs md:text-sm">
                      <span className="text-gray-700 group-hover:text-brand-700">{item.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 group-hover:text-brand-600 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
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
            <a href="https://drive.google.com/file/d/1tzHDy3cESZkprCHA3yQP4qEiJtNVgOrb/view?usp=sharing" target="_blank" className="group bg-white rounded-lg md:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all overflow-hidden flex flex-col text-center md:text-left">
              <div className="h-16 md:h-40 bg-gray-100 flex items-center justify-center border-b border-gray-200 group-hover:bg-brand-50 transition-colors relative">
                <FileText className="w-8 h-8 md:w-16 md:h-16 text-brand-300 group-hover:text-brand-500 transition-colors" />
              </div>
              <div className="p-2 md:p-5 flex flex-col flex-grow items-center md:items-start">
                <h4 className="font-bold text-gray-900 group-hover:text-brand-700 text-[10px] md:text-base leading-tight mb-1">MGPS Layout Drawing</h4>
                <p className="hidden md:block text-xs text-gray-500 mb-4 flex-grow font-light">DWG Format • For Hospital Architects</p>
                <div className="text-[9px] md:text-xs font-bold text-brand-600 flex items-center gap-1 md:gap-2 mt-auto">Open Document <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /></div>
              </div>
            </a>
            <Link href="#" className="group bg-white rounded-lg md:rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all overflow-hidden flex flex-col text-center md:text-left">
              <div className="h-16 md:h-40 bg-gray-100 flex items-center justify-center border-b border-gray-200 group-hover:bg-brand-50 transition-colors relative">
                <FileText className="w-8 h-8 md:w-16 md:h-16 text-red-300 group-hover:text-red-500 transition-colors" />
              </div>
              <div className="p-2 md:p-5 flex flex-col flex-grow items-center md:items-start">
                <h4 className="font-bold text-gray-900 group-hover:text-brand-700 text-[10px] md:text-base leading-tight mb-1">HTM 02-01 Checklist</h4>
                <p className="hidden md:block text-xs text-gray-500 mb-4 flex-grow font-light">PDF Document • Safety Standards</p>
                <div className="text-[9px] md:text-xs font-bold text-brand-600 flex items-center gap-1 md:gap-2 mt-auto">Open Document <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-gray-50 border-b border-gray-200 font-inter">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-2 border-brand-600 pb-2 md:pb-3 inline-block uppercase tracking-tighter">MGPS Technical Specifications</h2>
          <div className="overflow-x-auto rounded-xl bg-white border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold w-1/3 border-r border-gray-200 text-[10px] uppercase tracking-widest">Copper Pipe Standard</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">BS EN 13348 / ASTM B819 Medical Grade Seamless Copper</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Working Pressures</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Oxygen / Air: 4 Bar | Surgical Air: 7 Bar | Vacuum: -400mmHg</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Brazing Method</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Inert Gas (Nitrogen) Shielding to prevent internal oxidation</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <th className="p-4 bg-gray-50 text-gray-900 font-bold border-r border-gray-200 text-[10px] uppercase tracking-widest">Color Coding System</th>
                  <td className="p-4 text-gray-700 text-sm md:text-base font-bold">Strict adherence to Indian & International HTM Color-Coding Standards</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Certifications />
      <ClientMarquee />

      {/* FAQ */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200 font-inter">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 uppercase tracking-tighter">Frequently Asked <span className="text-brand-600">Questions</span></h2>
            <p className="text-gray-500 text-sm md:text-base">Technical details regarding our Turnkey Medical Gas Pipeline Systems.</p>
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
