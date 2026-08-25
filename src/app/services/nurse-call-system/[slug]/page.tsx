import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle, ShieldCheck, ArrowRight, Activity, Zap, Layers, Settings, Microscope, Shield, Globe, Clock, Award, FileText, Phone, MessageSquare, Calendar, Wind, Layout, Lightbulb } from "lucide-react";
import ECGCTA from '@/components/sections/ECGCTA';
import ClientMarquee from '@/components/sections/ClientMarquee';
import Certifications from '@/components/sections/Certifications';

interface ConfigItem {
  title: string;
  desc: string[];
  image: string;
}

interface EngineeringItem {
  title: string;
  desc: string;
  bullets: string[];
}

interface ApplicationItem {
  title: string;
  image: string;
}

interface WhyChooseItem {
  title: string;
  desc: string;
  icon: string;
}

interface SpecItem {
  label: string;
  value: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface ProductData {
  title: string;
  tagline: string;
  heroDesc: string;
  atAGlance: string[];
  configurations: ConfigItem[];
  engineering: EngineeringItem[];
  applications: ApplicationItem[];
  whyChoose: WhyChooseItem[];
  caseStudy: {
    title: string;
    context: string;
    solution: string;
  };
  specs: SpecItem[];
  faqs: FAQItem[];
  heroImage: string;
}

const ncsProducts: Record<string, ProductData> = {
  'bedside-hardware': {
    title: "Patient & Bedside Hardware",
    tagline: "Critical Care Communication",
    heroDesc: "In a healthcare setting, every second counts. The patient bedside hardware serves as the primary touchpoint between a vulnerable patient and the duty nursing staff. Whether installing wall-mounted Bedside Units, ergonomic Patient Handsets, or wireless Remotes, our hardware is engineered with antibacterial surfaces, instant tactile feedback, and fail-safe disconnect alerts to guarantee rapid response and total peace of mind.",
    atAGlance: ["Antibacterial ABS Housing", "Quick-Disconnect DIN Sockets", "High-Tactile Call Controls", "Braille & Illuminated Visuals"],
    configurations: [
      {
        title: "Wall-Mounted Bedside Unit",
        desc: [
          "The central hub placed behind or directly next to each hospital bed. Mounted flush or surface-level on bed head panels, our Bedside Unit features integrated call buttons, presence/reset buttons for attending nurses, clear status LEDs, and heavy-duty self-locking quick-release DIN connection ports.",
          "Built-in intelligent circuitry constantly monitors cable connectivity. In case a patient handset is accidentally disconnected, the bedside unit immediately senses cord unplugging and triggers an automatic alert to the nurse station, eliminating communication blind spots."
        ],
        image: "/images/ncs-images/bedside-unit.webp"
      },
      {
        title: "Ergonomic Patient Handset",
        desc: [
          "Specially sculpted to fit comfortably into the palm of elderly, post-operative, or weak patients. Features oversized soft-touch buttons with tactile relief, built-in Braille markings, and high-visibility LED backlighting for quick location during dark night shifts.",
          "Connected via a flexible, coiled 2.5-meter anti-tangle PU cable with heavy-duty strain relief. Optional multi-function variants include integrated room light control buttons, reading lamp toggles, and dual-way voice intercom speakers."
        ],
        image: "/images/ncs-images/patient-handset.webp"
      },
      {
        title: "Handheld Remote & Wireless Pendants",
        desc: [
          "Designed for maximum patient mobility across recovery suites, VIP rooms, and attached washrooms. These compact, lightweight remotes allow ambulatory or bed-bound patients to trigger instant alerts without relying on a tethered wall cord.",
          "Encased in an IP67 waterproof enclosure, the remote is completely safe against accidental fluid spills or immersion during bed-baths. Features a single prominent red panic call trigger, neck lanyard attachments, and ultra-low power consumption for multi-year battery lifespans."
        ],
        image: "/images/ncs-images/ncs-remote.webp"
      }
    ],
    engineering: [
      {
        title: "Antibacterial Polymer Shell",
        desc: "Molded with silver-ion impregnated fire-retardant ABS resin. The surface naturally inhibits cross-contamination and bacterial growth, standing up to rigorous daily sanitization routines.",
        bullets: ["Silver-Ion Microbe Resistance", "Chemical-Resistant ABS Body"]
      },
      {
        title: "Strain-Relief Anti-Yank DIN Sockets",
        desc: "Bedside sockets use quick-release magnetic or friction DIN plugs. If a bed is moved quickly or a cord is yanked hard, the cable disconnects cleanly without damaging internal wall wiring or microchips.",
        bullets: ["Auto-Disconnect Sensor", "Anti-Strangulation Coiled Cord"]
      },
      {
        title: "High-Glow Tactile Keypads",
        desc: "Features raised membrane call buttons with audible click confirmation and high-luminance dual LED backlighting, making it effortless for patients to call for care even in total darkness.",
        bullets: ["Night-Glow LED Indication", "Tactile Click & Braille Print"]
      }
    ],
    applications: [
      { title: "General Wards & Inpatient Beds", image: "/images/key-application-images/general-ward.webp" },
      { title: "ICUs & High Dependency Units", image: "/images/key-application-images/icu.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End panels and ceilings system solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Patient Communication Lag in a Lucknow Hospital",
      context: "A premier 250-bed multi-specialty hospital in Lucknow was struggling with high nursing response times and patient dissatisfaction due to damaged, non-durable bedside handsets causing unrecorded call drops.",
      solution: "MedGenz retrofitted all inpatient wards with our Anti-Yank Bedside Units and Ergonomic Patient Handsets. The result was a 65% reduction in average response time and 100% NABH communication compliance."
    },
    specs: [
      { label: "Enclosure Material", value: "Fire-Retardant Antibacterial ABS Plastic / Polycarbonate Compound" },
      { label: "Communication Protocol", value: "RS-485 Industrial Bus / TCP-IP Ethernet / 433MHz Wireless (Remotes)" },
      { label: "Cable & Connector Specs", value: "2.5m Coiled Anti-Tangle PU Cable with Self-Locking Quick-Release DIN Plug" },
      { label: "Ingress Protection (IP)", value: "IP54 (Bedside Unit & Handset) / IP67 Waterproof (Remote Pendant)" }
    ],
    faqs: [
      { q: "What materials are used in MedGenz Bedside Units and Handsets?", a: "All our bedside hardware components are molded from high-impact, fire-retardant antibacterial ABS plastic that withstands daily chemical disinfection with hospital-grade sanitizers." },
      { q: "How does the patient handset handle accidental cable unplugging?", a: "Our bedside units are equipped with automatic cord-disconnect detection. If a patient or staff member accidentally yanks the handset cable, the system immediately triggers a distinct alert at the central nurse station." },
      { q: "Can these bedside devices integrate with existing central nurse call networks?", a: "Yes. MedGenz bedside units and remotes support standard RS-485 bus protocol and IP/Ethernet architectures, making them easily retrofitted into both legacy and modern hospital infrastructure." }
    ],
    heroImage: "/images/ncs-images/bedside-unit-main.webp"
  },
  'central-control-displays': {
    title: "Central Control & Displays",
    tagline: "Real-Time Call Routing & Monitoring",
    heroDesc: "In high-occupancy hospital wards, nursing staff require seamless command over dozens of simultaneous patient calls, bathroom alarms, and critical Code Blue emergencies. MedGenz Central Control Modules and Ward TV Display Units form the digital brain of the Nurse Call System—routing call traffic in real time, prioritizing emergency alerts, and displaying high-visibility room numbers on central corridor TV screens.",
    atAGlance: ["Real-Time Call Queueing", "High-Def TV Display Output", "RS-485 / IP Network Gateway", "Automated Response Logging"],
    configurations: [
      {
        title: "Master Central Control Module",
        desc: [
          "The core intelligence processing unit stationed at the duty nurse counter. Houses a high-reliability industrial micro-controller that manages call prioritization, dual-way audio intercom switching, overdoor light triggers, and network communications across up to 256 inpatient beds.",
          "Equipped with an intuitive touch-screen interface, internal battery backup, high-decibel multi-tone audio chimes, and automatic failure diagnostic sensors. Integrates seamlessly with hospital IP networks or legacy RS-485 cabling grids."
        ],
        image: "/images/ncs-images/central-control-module.webp"
      },
      {
        title: "Ward TV Display Unit",
        desc: [
          "Large-format, high-visibility LED TV display monitors positioned in central ward corridors and nursing stations. Designed for long-distance readability, the screen instantly displays active bed calls, room numbers, call priority levels (Routine, Washroom Fall, Code Blue), and response timer counters.",
          "Driven directly by the Central Control Module via HDMI or IP streaming, the TV display eliminates visual confusion. Features color-coded call cards (Red for Bathroom, Yellow for Bedside, Blue for Cardiac Emergency) paired with distinct audible corridor chimes."
        ],
        image: "/images/ncs-images/ncs-tv-display.webp"
      }
    ],
    engineering: [
      {
        title: "Dual RS-485 / IP Bus Architecture",
        desc: "Features redundant communication channels that ensure zero loss of call signals even during heavy multi-bed call traffic or local cable damage.",
        bullets: ["Multi-Drop Bus Topology", "Fail-Safe Signal Redundancy"]
      },
      {
        title: "Industrial Quad-Core Processor",
        desc: "Built with fanless industrial-grade microprocessors capable of processing sub-millisecond call queuing, audio switching, and live video feeds 24/7.",
        bullets: ["24/7 Continuous Duty Cycle", "Instant Multi-Tone Alarm Driver"]
      },
      {
        title: "Low-Latency AV Output Gateway",
        desc: "Streams high-resolution color-coded visual matrices directly to ward LED TV screens without lag, displaying active bed calls, priority icons, and nurse presence status.",
        bullets: ["Direct HDMI & IP Streaming", "High Contrast Full HD Visuals"]
      }
    ],
    applications: [
      { title: "Central Nurse Duty Counters", image: "/images/key-application-images/nurse-station.webp" },
      { title: "Inpatient Ward Corridors", image: "/images/key-application-images/corridor-entry.webp" },
      { title: "Multi-Bed Intensive Care Units", image: "/images/key-application-images/icu.webp" },
      { title: "Emergency & Triage Command Units", image: "/images/key-application-images/triage.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End panels and ceilings system solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Missed Patient Calls across a 300-Bed Bhopal Facility",
      context: "A major 300-bed multi-specialty hospital in Bhopal suffered from high response lags and uncoordinated nurse routing across 3 separate ward floors because legacy systems lacked centralized visual displays.",
      solution: "MedGenz installed Master Central Control Modules with 43-inch Ward TV Display Monitors at all floor counters. Visual alerts reduced response times by over 80% and enabled full audit-ready call log reporting."
    },
    specs: [
      { label: "Control Module Capacity", value: "Supports up to 256 Bedside Units & 64 Bathroom Modules per Controller" },
      { label: "Communication Protocol", value: "RS-485 Industrial Bus / TCP-IP Ethernet Gateway / Wi-Fi Hub" },
      { label: "TV Display Specifications", value: "32\" to 55\" Industrial Commercial LED Monitor (HDMI / IP Input)" },
      { label: "Power Supply & Backup", value: "220V AC Input with Integrated SMPS & Automatic Battery Backup" }
    ],
    faqs: [
      { q: "How many bedside units can a single Central Control Module manage?", a: "A single MedGenz Central Control Module can handle up to 256 bedside units and 64 bathroom pull-cord modules using expandable RS-485 bus nodes or IP network switches." },
      { q: "Can the system connect to standard hospital TV monitors?", a: "Yes. Our Central Control Units feature native HDMI/AV output ports and IP network streaming, allowing direct connection to standard LED Smart TV screens located at nurse stations or in corridors." },
      { q: "Does the system log call response times for hospital audits?", a: "Yes. The Central Control Module records timestamps for every incoming call, nurse acknowledgement time, and call reset time, storing data locally or transmitting it to your hospital's HMIS database." }
    ],
    heroImage: "/images/ncs-images/central-control-module-main.webp"
  },
  'emergency-indicators': {
    title: "Emergency & Visual Indicators",
    tagline: "Instant Visual Awareness",
    heroDesc: "When a patient suffers a sudden fall or distress, seconds dictate clinical outcomes. MedGenz Emergency & Visual Indicators—including IP67 waterproof Bathroom Pull-Cord Units and Multi-Color Overdoor Corridor Light Indicators—provide instant, high-visibility visual and acoustic cues to alert staff without a second lost.",
    atAGlance: ["IP67 Waterproof Bathroom Unit", "Anti-Strangulation Pull Cord", "Tri-Color Overdoor LED Dome", "360° Corridor Visibility"],
    configurations: [
      {
        title: "IP67 Waterproof Bathroom Pull-Cord Unit",
        desc: [
          "Designed specifically for high-risk, humid areas including attached patient toilets, WCs, and handicap-accessible shower cubicles. Molded in a 100% sealed IP67 waterproof enclosure, this unit stands up to direct water splashes and high steam.",
          "Features a 2-meter anti-bacterial, high-tensile orange pull cord equipped with two ergonomic drop handles positioned at floor level and mid-height."
        ],
        image: "/images/ncs-images/bathroom-unit.webp"
      },
      {
        title: "Multi-Color Overdoor Indicator Light",
        desc: [
          "Mounted directly above patient room entryways and corridor doors, the Overdoor Light provides instant, 360-degree visual notification. Featuring ultra-bright SMD LEDs housed under a frosted prismatic lens dome, it remains clearly visible over long corridor distances.",
          "Supports multi-color signaling modes (Red, Green, Blue, Yellow) to differentiate between standard bedside calls, urgent bathroom emergencies, Code Blue cardiac alarms, and attending nurse presence inside the room."
        ],
        image: "/images/ncs-images/door-indicator-light.webp"
      }
    ],
    engineering: [
      {
        title: "Hermetic IP67 Gasket Seal",
        desc: "Bathroom call units are sealed with silicone O-rings and ultrasonic-welded ABS enclosures, ensuring moisture, soap suds, and water jets cannot enter the internal circuitry.",
        bullets: ["100% Water Splash-Proof Body", "Anti-Corrosive Contacts"]
      },
      {
        title: "Anti-Strangulation Breakaway Pull Cord",
        desc: "The 2-meter orange cord incorporates a safety breakaway mechanism under excessive loads, eliminating strangulation hazards while maintaining high tensile durability for emergency pulls.",
        bullets: ["Dual Floor & Mid-Height Handles", "Antimicrobial Nylon Pull String"]
      },
      {
        title: "Multi-Spectrum Ultra-LED Matrix",
        desc: "Overdoor lights integrate high-efficiency RGB SMD LEDs behind frosted optical polycarbonate diffusion lenses, guaranteeing 180° horizontal and vertical visual recognition across hospital hallways.",
        bullets: ["Distinct Tri-Color Alert Sequences", "50,000+ Hours LED Lifespan"]
      }
    ],
    applications: [
      { title: "Patient Bathrooms & Disabled WCs", image: "/images/key-application-images/patient-bathroom.webp" },
      { title: "Inpatient Ward Corridors", image: "/images/key-application-images/corridor-entry.webp" },
      { title: "ICUs & Isolation Cubicles", image: "/images/key-application-images/icu.webp" },
      { title: "Dialysis & Day Care Recovery Bays", image: "/images/key-application-images/post-op.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End panels and ceilings system solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Washroom Emergency Delays in a Jaipur Super-Specialty Facility",
      context: "A 180-bed orthopedic hospital in Jaipur suffered from delayed nurse response during post-surgical patient falls in bathrooms because push-buttons were unreachable and standard corridor lights failed to indicate bathroom-specific emergencies.",
      solution: "MedGenz installed IP67 Waterproof Pull-Cord Bathroom Units with floor-level handles and Multi-Color Overdoor Indicator Lights. Emergency calls triggered flashing red corridor domes, reducing response times by over 70%."
    },
    specs: [
      { label: "Bathroom Unit Rating", value: "IP67 Water Splash-Proof Enclosure with Hermetic Silicone Gasket" },
      { label: "Pull Cord Specifications", value: "2.0 Meter High-Tensile Orange Nylon Cord with Dual Drop Handles & Safety Breakaway" },
      { label: "Overdoor Light Source", value: "High-Luminance Tri-Color SMD LEDs (Red, Green, Blue/Yellow) with Frosted Lens Dome" },
      { label: "Operating Voltage", value: "12V – 24V DC Ultra-Low Voltage Operation for Patient Safety" }
    ],
    faqs: [
      { q: "How does the MedGenz bathroom unit handle moisture and direct water exposure?", a: "Our bathroom pull-cord emergency units are fully sealed inside IP67 waterproof and splash-proof enclosures, rendering them completely immune to high moisture, steam, and direct water exposure." },
      { q: "What do the different colors on the overdoor light indicator represent?", a: "The tri-color high-luminance LED light uses distinct visual signals: steady Red for routine patient call, flashing Red/Orange for urgent bathroom emergency, Blue/Pink for Code Blue, and Green for nurse presence." },
      { q: "Can these visual indicators integrate into existing hospital corridor grids?", a: "Yes. MedGenz overdoor lights and bathroom units connect via standard 2-wire/RS-485 bus protocol or IP-based networks." }
    ],
    heroImage: "/images/ncs-images/bathroom-unit-main.webp"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = ncsProducts[slug];
  if (!data) return { title: 'Product Not Found' };
  return {
    title: `${data.title} | Nurse Call System | MedGenz`,
    description: data.heroDesc,
  };
}

export default async function NCSProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = ncsProducts[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="pt-20 font-inter">
      {/* CLEAN PRODUCT HEADER */}
      <section className="pt-28 pb-8 md:pt-40 md:pb-16 bg-white border-b border-gray-100 uppercase tracking-tighter">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav aria-label="breadcrumb" className="mb-4 md:mb-6">
            <ol className="flex items-center space-x-2 text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider">
              <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li><Link href="/services/nurse-call-system" className="hover:text-brand-600 transition-colors">Nurse Call System</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li className="text-brand-600 font-bold">{data.title}</li>
            </ol>
          </nav>

          <div className="max-w-6xl">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-600 border border-brand-100 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
              {data.tagline}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-gray-600 text-sm md:text-xl mb-6 md:mb-8 leading-relaxed normal-case tracking-normal font-light">
              {data.heroDesc}
            </p>

            <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl p-4 md:p-6 mb-8 inline-block w-full shadow-sm">
                <div className="flex items-center gap-2 mb-3 md:mb-4 border-b border-gray-100 pb-3">
                    <Activity className="w-5 h-5 text-brand-600" />
                    <span className="font-bold text-gray-900 text-sm md:text-base uppercase tracking-wider">System At a Glance</span>
                </div>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 text-sm text-gray-700 font-medium normal-case tracking-normal">
                    {data.atAGlance.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0 shadow-[0_0_8px_rgba(230,161,0,0.6)]"></span>
                        {item}
                      </li>
                    ))}
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

      {/* CONFIGURATIONS */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">System Infrastructure</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Hardware <span className="text-brand-600">Configurations</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg text-center font-light">Every component is medical-grade and specifically designed for long-term hospital reliability.</p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {data.configurations.map((config, i) => (
              <div key={i} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center group">
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
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">Internal Engineering</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Anatomy of <span className="text-brand-600">Reliability</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {data.engineering.map((eng, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-brand-600 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">{eng.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow font-light">{eng.desc}</p>
                <ul className="list-none text-gray-700 text-sm space-y-2 font-medium border-t border-gray-100 pt-4">
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
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">Where We Install</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Key <span className="text-brand-600">Applications</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {data.applications.map((app, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-square relative p-2 bg-gray-50">
                  <Image src={app.image} alt={app.title} fill className="object-cover rounded-xl" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-900 text-xs md:text-sm leading-tight uppercase tracking-tighter">{app.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MEDGENZ */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100">
          <div className="text-center mb-8 md:mb-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 uppercase tracking-tighter">Why Choose <span className="text-brand-600">MedGenz?</span></h2>
            <div className="w-12 h-1 bg-brand-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto font-light">We don't just supply equipment; we engineer and execute complete turnkey hospital ecosystems.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative z-10">
            {data.whyChoose.map((point, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 mb-4 relative">
                  <Image src={point.icon} alt={point.title} fill className="object-contain" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-tighter">{point.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-brand-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-brand-100 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-4 right-6 text-brand-100 opacity-30 text-8xl font-serif leading-none">&quot;</div>
          <div className="relative z-10">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 block">Quick Case Study</span>
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">{data.caseStudy.title}</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 font-light">{data.caseStudy.context}</p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed"><strong>The Solution:</strong> <span className="font-light">{data.caseStudy.solution}</span></p>
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="py-10 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 md:mb-8 border-b-2 border-brand-600 pb-2 md:pb-3 inline-block uppercase tracking-tighter">Technical Specifications</h2>
          <div className="overflow-x-auto rounded-xl bg-white border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <tbody>
                {data.specs.map((spec, i) => (
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

      {/* FAQ */}
      <section className="py-12 md:py-24 px-4 md:px-6 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 text-center uppercase tracking-tighter">Frequently Asked <span className="text-brand-600">Questions</span></h2>
            <div className="w-16 h-1 bg-brand-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-500 text-sm md:text-base text-center font-light">Technical details regarding our {data.title}.</p>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-lg md:rounded-xl border border-gray-200 shadow-sm overflow-hidden" open={i === 0}>
                <summary className="flex items-center justify-between p-3 md:p-5 font-bold text-gray-900 cursor-pointer hover:bg-white transition-colors">
                  <span className="text-sm md:text-base pr-4 flex items-start gap-3 text-left font-bold">
                    <span className="text-brand-600 shrink-0">{i + 1}.</span>
                    {faq.q}
                  </span>
                </summary>
                <div className="px-3 md:px-5 pb-3 md:pb-5 pt-1 text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-100 mt-2 font-light">
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
