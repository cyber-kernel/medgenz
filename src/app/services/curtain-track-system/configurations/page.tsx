import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Activity,
  Zap,
  Star
} from "lucide-react";
import ECGCTA from '@/components/sections/ECGCTA';
import ClientMarquee from '@/components/sections/ClientMarquee';
import Certifications from '@/components/sections/Certifications';
import SiteFAQ from '@/components/SiteFAQ';
import { withSeoMetadata } from '@/lib/seo-metadata';
import PageStructuredData from '@/components/PageStructuredData';
import EvidenceReferences from '@/components/sections/EvidenceReferences';
import {
  PAGE_CONTENT_UPDATED_AT,
  type SourceReference,
} from '@/lib/structured-data';

const configurationReferences: SourceReference[] = [
  {
    label: "WHO Guidelines on Core Components of Infection Prevention and Control Programmes",
    url: "https://www.who.int/publications/i/item/9789241549929",
    context:
      "WHO guidance for infection prevention and control programmes in health care; it does not certify a specific curtain, track, or antimicrobial treatment.",
  },
  {
    label: "WHO Global Guidelines for the Prevention of Surgical Site Infection",
    url: "https://www.who.int/publications/i/item/9789241550475",
    context:
      "WHO recommendations on surgical-site infection prevention, provided as general clinical context rather than product-performance evidence.",
  },
];

const configurations = [
  {
    id: "aluminum-tracks",
    title: "Heavy-Duty Aluminum Tracks",
    desc: [
      "Extruded from high-grade aluminum alloy, these rigid tracks support hospital privacy curtains. Confirm span, loading, and mounting requirements for the selected layout before installation.",
      "The listed configuration includes a 50-micron epoxy powder coat. Surface coatings do not replace routine cleaning or infection-prevention procedures; request product-specific test documentation for antimicrobial claims."
    ],
    image: "/images/hospital-curtain-track-system/heavy-duty-aluminum-tracks.webp"
  },
  {
    id: "silent-gliders",
    title: "Silent Glider Hooks",
    desc: [
      "Patient recovery relies heavily on a quiet environment. Traditional curtain tracks can be noisy, jolting patients awake when curtains are aggressively drawn by medical staff.",
      "Frictionless Movement: We utilize precision-engineered runners manufactured from virgin nylon and delrin materials. Combined with heavy-duty stainless steel curtain hooks, these gliders travel silently within the aluminum track profile. The design prevents jamming, sticking, or snagging, allowing for a perfectly smooth, single-handed glide every time."
    ],
    image: "/images/hospital-curtain-track-system/silent-glider-hooks.webp"
  },
  {
    id: "roof-suspensions",
    title: "Roof Suspension Systems",
    desc: [
      "Not all hospital wards have low or solid concrete ceilings suitable for flush track mounting. For modern facilities featuring high ceilings or delicate acoustic drop-ceilings, specialized mounting hardware is required.",
      "Rigid Bridge Supports: We manufacture custom-length, rigid aluminum suspension drops. These bridging tubes firmly anchor the track layout to the structural 'true' ceiling hidden above, providing exceptional load-bearing stability without putting stress on fragile false ceilings."
    ],
    image: "/images/hospital-curtain-track-system/roof-suspension-systems.webp"
  },
  {
    id: "custom-layouts",
    title: "Custom Bends & Layouts",
    desc: [
      "Hospital wards require highly specific spatial configurations to maximize bed capacity while maintaining privacy and accessibility for medical carts and ventilators.",
      "Precision Forming: Tracks are not simply cut and joined with angular corners. We use specialized, heavy-duty machinery at our facility to permanently bend the aluminum extrusions. This allows us to create perfectly continuous, sweeping curved L-shapes, U-shapes, or full O-shape cubicles tailored exactly to your ward's architectural footprint."
    ],
    image: "/images/hospital-curtain-track-system/custom-bends-layouts.webp"
  },
  {
    id: "curtains",
    title: "Anti-Microbial Privacy Curtains",
    desc: [
      "The fabric itself is the first line of defense in patient privacy and hygiene. Our curtains are woven from high-quality, dense polyester fabric that provides absolute visual block-out.",
      "Safety First: Each curtain is chemically treated with powerful anti-bacterial and stain-repellent agents, making them safe, washable, and highly durable. Crucially, the top panel features a specialized open-mesh design. This ensures that ceiling fire sprinklers and central HVAC airflow are never obstructed, keeping your facility compliant with strict fire safety codes."
    ],
    image: "/images/hospital-curtain-track-system/anti-microbial-privacy-curtains.webp"
  },
  {
    id: "iv-tracks",
    title: "Telescopic IV Tracks",
    desc: [
      "In critical care environments, floor space is extremely limited. Bulky floor-standing IV poles create tripping hazards and get in the way of crash carts or ventilators.",
      "Overhead Integration: We install dedicated overhead IV carrier tracks that run parallel to, or inside, the main cubicle privacy track. These feature specialized wheeled carriages equipped with adjustable, telescopic stainless-steel IV hangers. This provides immediate, mobile fluid suspension directly above the patient bed without taking up any floor space."
    ],
    image: "/images/hospital-curtain-track-system/telescopic-iv-tracks.webp"
  }
];

const engineering = [
  {
    title: "Extruded Alloy Strength",
    desc: "We use minimum 1.5mm thickness extruded aluminum. Unlike cheap, rolled-steel tracks that bend under the weight of wet curtains or patient tugging, our alloy provides immense rigidity while remaining incredibly lightweight for ceiling suspension.",
    bullets: ["Zero Sagging or Bowing", "Lightweight Suspension"]
  },
  {
    title: "Seamless Joint Connectors",
    desc: "For expansive, multi-bed wards, multiple tracks must be joined. We utilize precision internal splice connectors that align the tracks microscopically. This ensures the glider hooks never 'catch' or jam at the connection seams when pulled quickly.",
    bullets: ["Invisible Splicing", "Catch-Free Transitions"]
  },
  {
    title: "Deep Profile Design",
    desc: "The 'C' channel of our track is cut deeper than industry standard. This deep-profile geometry fully conceals the nylon runners within the track, protecting them from dust accumulation while providing a cleaner, more architectural finish to the room.",
    bullets: ["Dust/Debris Shielding", "Clean Architectural Look"]
  }
];

const applications = [
  { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
  { title: "General Bed Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" },
  { title: "Maternity & Labor Rooms", image: "/images/key-application-images/maternity-labour-ward.webp" }
];

const whyChoose = [
  { title: "In-House Bending", desc: "We utilize precision machines to bend our own tracks, ensuring exact fits without structural weakness.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
  { title: "ISO Certified Quality", desc: "Our extrusions and coatings strictly adhere to ISO 9001:2015, guaranteeing long-lasting healthcare safety.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
  { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our installation teams travel directly to hospital sites anywhere in India.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
  { title: "After-Sales Support", desc: "Ask about available maintenance and replacement support for your selected system and service agreement.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
];

const specs = [
  { label: "Track Extrusion", value: "High-Grade Aluminum Alloy (Min 1.5mm wall thickness)" },
  { label: "Surface Coating", value: "50-Micron Epoxy Powder Coat (Anti-Microbial White/Custom)" },
  { label: "Glider / Runner", value: "Virgin Nylon/Delrin Body with Stainless Steel Hooks" },
  { label: "Curtain Fabric", value: "Fire-Retardant, Anti-Bacterial Polyester (Washable)" },
  { label: "Mounting Configuration", value: "Flush Ceiling Mount or Aluminum Bridge Suspension Drops" }
];

const faqs = [
  {
    q: "What materials are used in your hospital cubicle curtain tracks?",
    a: "The listed configuration uses extruded aluminum alloy with a 50-micron powder coat. Confirm the coating specification for your project, and follow the facility's cleaning and infection-prevention procedures."
  },
  {
    q: "Do the curtain tracks operate silently?",
    a: "Yes, the system utilizes specialized silent glider hooks made of virgin nylon and delrin materials. Unlike cheap metal rings, our runners move effortlessly within the aluminum channel, ensuring that resting patients are never disturbed by loud grating noises."
  },
  {
    q: "Can you customize the track layout for our hospital beds?",
    a: "Absolutely. We use specialized bending machinery at our manufacturing facility to custom curve the extruded aluminum tracks into perfect L-shapes, U-shapes, or continuous O-shapes. This provides a layout tailored exactly to your ward's architectural floor plan."
  },
  {
    q: "Are the hospital privacy curtains fire-retardant?",
    a: "Fire performance and sprinkler compatibility depend on the selected curtain and local requirements. Ask for the product's fire-test documentation and have the design reviewed against the facility's applicable fire code."
  }
];

export const metadata = withSeoMetadata({
  title: "Hospital Curtain Track Components | MedGenz",
  description: "Explore hospital curtain tracks, silent gliders, privacy curtains, and telescopic IV tracks from MedGenz.",
}, "/services/curtain-track-system/configurations");

export default function CTSConfigurations() {
  return (
    <div className="pt-20 font-inter">
      <PageStructuredData
        type="WebPage"
        name="Hospital Curtain Track Components | MedGenz"
        description="Explore hospital curtain tracks, silent gliders, privacy curtains, and telescopic IV tracks from MedGenz."
        url="https://www.medgenz.com/services/curtain-track-system/configurations"
        dateModified={PAGE_CONTENT_UPDATED_AT}
        citation={configurationReferences}
      />
      {/* PRODUCT HEADER */}
      <section className="pt-28 pb-8 md:pt-40 md:pb-16 bg-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <nav aria-label="breadcrumb" className="mb-4 md:mb-6">
            <ol className="flex items-center space-x-2 text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider">
              <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li><Link href="/services/curtain-track-system" className="hover:text-brand-600 transition-colors">Curtain Track</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li className="text-brand-600 font-bold">CTS Configuration</li>
            </ol>
          </nav>

          <div className="max-w-6xl">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
              Ultimate Patient Privacy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight uppercase tracking-tighter">
              Cubicle Curtain Track <span className="text-brand-600">Configurations</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-xl mb-6 md:mb-8 leading-relaxed font-light">
              Engineered for smooth gliding and absolute durability. Our anti-microbial aluminum partition tracks ensure strict infection control and total patient privacy in ICUs, emergency rooms, and multi-bed general wards.
            </p>

            {/* AT A GLANCE BOX */}
            <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl p-4 md:p-6 mb-8 inline-block w-full shadow-sm">
              <div className="flex items-center gap-2 mb-3 md:mb-4 border-b border-gray-100 pb-3">
                <Activity className="w-5 h-5 text-brand-600" />
                <span className="font-bold text-gray-900 text-sm md:text-base uppercase tracking-wider">System At a Glance</span>
              </div>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 text-sm text-gray-700 font-medium">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0 shadow-[0_0_8px_rgba(230,161,0,0.6)]"></span> Heavy-Duty Aluminum</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0 shadow-[0_0_8px_rgba(230,161,0,0.6)]"></span> Silent Frictionless Glide</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0 shadow-[0_0_8px_rgba(230,161,0,0.6)]"></span> Custom U/L-Shape Bends</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-brand-500 shrink-0 shadow-[0_0_8px_rgba(230,161,0,0.6)]"></span> Anti-Microbial Coating</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center gap-2">
                Get a Free Quote <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ALTERNATING CATALOGUE SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">Core Partition Hardware</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">System <span className="text-brand-600">Configurations</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg font-light">We manufacture and integrate all necessary hardware to build a sturdy, reliable, and aesthetically pleasing ward partition system.</p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {configurations.map((config, i) => (
              <div key={config.id} id={config.id} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center group scroll-mt-32">
                <div className={`md:col-span-5 relative ${i % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="relative w-full h-56 sm:h-72 lg:h-80 bg-gray-100 rounded-xl shadow-md border border-gray-200 overflow-hidden">
                    <Image src={config.image} alt={config.title} fill className="object-cover" />
                  </div>
                </div>
                <div className={`md:col-span-7 ${i % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">{config.title}</h3>
                  <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4 font-light">
                    {config.desc.map((p, pi) => <p key={pi}>{p}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL ENGINEERING */}
      <section className="py-6 md:py-10 px-6 md:px-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">Internal Engineering</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-gray-900 uppercase tracking-tighter">Design <span className="text-brand-600">Superiority</span></h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto rounded-full mb-3 md:mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg font-light">Our track systems are engineered to eliminate common points of failure found in standard hospital partitions.</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-2 md:gap-3">
            {engineering.map((eng, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-2 md:p-3 shadow-sm border border-gray-100 border-t-4 border-t-brand-600 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-[10px] sm:text-xs md:text-base font-bold text-gray-900 mb-2 uppercase tracking-tighter">{eng.title}</h3>
                <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed mb-3 font-light">{eng.desc}</p>
                <ul className="list-none text-[10px] md:text-xs text-gray-700 space-y-1 font-medium border-t border-gray-100 pt-2">
                  {eng.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 uppercase tracking-widest text-[10px]">
                      <span className="text-brand-500 font-bold">•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-6 md:py-10 px-6 md:px-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">Where We Install</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-gray-900 uppercase tracking-tighter">Key <span className="text-brand-600">Applications</span></h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto rounded-full mb-3 md:mb-4"></div>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {applications.map((app, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[3/2] relative p-1 bg-gray-50">
                  <Image src={app.image} alt={app.title} fill className="object-cover rounded-xl" />
                </div>
                <div className="p-2 text-center flex-grow flex items-center justify-center">
                  <h3 className="font-bold text-gray-900 text-xs md:text-base leading-tight uppercase tracking-tighter">{app.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MEDGENZ */}
      <section className="py-6 md:py-10 px-6 md:px-10 bg-white border-b border-gray-100">

        <div className="text-center mb-5 md:mb-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 uppercase tracking-tighter">Why Choose <span className="text-brand-600">MedGenz?</span></h2>
          <div className="w-12 h-1 bg-brand-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto font-light">We don't just supply tracks; we engineer and execute complete turnkey privacy systems.</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 relative z-10">
          {whyChoose.map((point, i) => (
            <div key={i} className="bg-white p-2 rounded-xl border border-slate-100 hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 md:w-10 md:h-10 mb-2 relative">
                <Image src={point.icon} alt={point.title} fill className="object-contain" />
              </div>
              <h3 className="text-[10px] sm:text-xs md:text-base font-bold text-gray-900 mb-2 uppercase tracking-tighter">{point.title}</h3>
              <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed font-light">{point.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION NOTE */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-brand-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-brand-100 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-4 right-6 text-brand-100 opacity-30 text-8xl font-serif leading-none">&quot;</div>
          <div className="relative z-10">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 block">Application Note</span>
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">Selecting Quiet-Running Curtain Hardware</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 font-light">
              Curtain movement can add to background noise in patient-care areas. Low-friction gliders are designed to move more quietly than metal rings, but actual sound levels depend on the track, installation, maintenance, and how the curtains are used.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <strong>Selection tip:</strong> <span className="font-light">Evaluate a sample track and glider in the intended environment, and confirm that the chosen system meets the facility's cleaning, durability, and fire-safety requirements.</span>
            </p>
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200 font-inter">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-2 border-brand-600 pb-2 md:pb-3 inline-block uppercase tracking-tighter">Technical Specifications</h2>
          <div className="overflow-x-auto rounded-xl bg-white border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <tbody>
                {specs.map((spec, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <th className="p-4 bg-gray-50 text-gray-900 font-bold w-1/3 border-r border-gray-200 text-[10px] uppercase tracking-widest">{spec.label}</th>
                    <td className="p-4 text-gray-700 text-sm md:text-base font-bold">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Certifications />
      <ClientMarquee />

      <SiteFAQ
        title="Frequently Asked Questions"
        eyebrow="Common Questions"
        description="Technical details regarding our hospital curtain track configurations."
        faqs={faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
      />

      <EvidenceReferences references={configurationReferences} />
      <ECGCTA />
    </div>
  );
}
