import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle, ShieldCheck, ArrowRight, Activity, Zap, Layers, Settings, Microscope, Shield, Globe, Clock, Award, FileText, Phone, MessageSquare, Calendar, Wind, Layout, Lightbulb, Scissors } from "lucide-react";
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

const ctsProducts: Record<string, ProductData> = {
  'aluminum-tracks': {
    title: "Heavy-Duty Aluminum Tracks",
    tagline: "CTS Configuration",
    heroDesc: "Extruded from premium high-grade aluminum alloy, these rigid tracks form the indestructible backbone of the hospital partition system. Engineered to support the weight of heavy curtains without sagging or bowing.",
    atAGlance: ["Minimum 1.5mm Thickness", "50-Micron Epoxy Coating", "Anti-Microbial Surfaces", "Rust & Corrosion Proof"],
    configurations: [
      {
        title: "Extruded Aluminum Profile",
        desc: [
          "Our tracks are manufactured from high-grade aluminum alloy (6063-T5) ensuring maximum structural integrity. The cross-sectional design is optimized for both ceiling flush mounting and suspended configurations.",
          "Every millimeter is treated with a specialized anti-microbial powder coat that actively inhibits bacterial growth, essential for ICU and Emergency Ward environments."
        ],
        image: "/images/hospital-curtain-track-system/heavy-duty-aluminum-tracks.webp"
      }
    ],
    engineering: [
      {
        title: "Extruded Alloy Strength",
        desc: "We use minimum 1.5mm thickness extruded aluminum. Unlike cheap, rolled-steel tracks, our alloy provides immense rigidity while remaining incredibly lightweight.",
        bullets: ["Zero Sagging or Bowing", "Lightweight Suspension"]
      },
      {
        title: "Deep Profile Design",
        desc: "The 'C' channel is cut deeper than industry standard, fully concealing the runners and protecting them from dust accumulation.",
        bullets: ["Dust/Debris Shielding", "Clean Architectural Look"]
      }
    ],
    applications: [
      { title: "Intensive Care Units", image: "/images/key-application-images/icu.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "In-House Bending", desc: "Precision machines bend tracks for exact fits without structural weakness.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "ISO Certified", desc: "Our processes strictly adhere to ISO 9001:2015 standards.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Our teams travel directly to hospital sites anywhere in India.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide comprehensive maintenance and track adjustment services.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Overhauling a Major Cardiac ICU",
      context: "A hospital faced noise complaints due to scraping metal hooks on steel tracks.",
      solution: "Installed MedGenz Silent Gliders on Aluminum Tracks. Staff can now draw curtains instantly and completely silently."
    },
    specs: [
      { label: "Material", value: "High-grade Extruded Aluminum Alloy (6063-T5)" },
      { label: "Wall Thickness", value: "Minimum 1.5mm" },
      { label: "Surface Finish", value: "50-Micron Anti-Microbial Epoxy Powder Coat" },
      { label: "Standard Lengths", value: "12ft, 14ft (Custom Cutting Available)" }
    ],
    faqs: [
      { q: "What materials are used?", a: "Our tracks are made from heavy-duty extruded aluminum with an anti-microbial epoxy coating." },
      { q: "Can the tracks be bent?", a: "Yes, we use specialized machinery to create perfectly curved L-shape and U-shape cubicles." }
    ],
    heroImage: "/images/hospital-curtain-track-system/heavy-duty-aluminum-tracks.webp"
  },
  'silent-gliders': {
    title: "Silent Glider Hooks",
    tagline: "CTS Configuration",
    heroDesc: "Patient recovery relies on a quiet environment. Our silent gliders are precision-engineered to move effortlessly within the track profile, ensuring resting patients are not disturbed by loud noises.",
    atAGlance: ["Virgin Nylon Runners", "Stainless Steel Hooks", "Jam-Free Operation", "Acoustic Dampening"],
    configurations: [
      {
        title: "Low-Friction Nylon Runners",
        desc: [
          "Manufactured from high-grade virgin nylon and delrin materials. These runners provide a frictionless surface that slides effortlessly even under the load of heavy curtains.",
          "Features integrated stainless steel hooks that are resistant to hospital cleaning chemicals and will not rust over years of use."
        ],
        image: "/images/hospital-curtain-track-system/silent-glider-hooks.webp"
      }
    ],
    engineering: [
      {
        title: "Seamless Joint Connectors",
        desc: "We use precision internal splice connectors that align tracks microscopically, ensuring gliders never 'catch' at seams.",
        bullets: ["Invisible Splicing", "Catch-Free Transitions"]
      },
      {
        title: "Frictionless Glide",
        desc: "Precision-engineered runners travel silently within the aluminum track profile without sticking or snagging.",
        bullets: ["Silent Operation", "Jam-Free Pulling"]
      }
    ],
    applications: [
      { title: "VIP Recovery Rooms", image: "/images/key-application-images/post-op.webp" },
      { title: "Pediatric Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Precision Engineering", desc: "Every hook is tested for load and glide consistency.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "Medical Grade", desc: "All materials are non-toxic and bacterial resistant.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India", desc: "Full onsite installation support across the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Durability", desc: "Designed for a minimum 10-year duty cycle in high-traffic wards.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Improving Patient Rest in Delhi",
      context: "A hospital reported high patient stress levels due to noisy ward partitions.",
      solution: "Retrofit existing tracks with MedGenz Silent Gliders. Noise levels dropped by 90% during curtain operations."
    },
    specs: [
      { label: "Runner Material", value: "Virgin Nylon / Delrin" },
      { label: "Hook Material", value: "SS-304 Stainless Steel" },
      { label: "Load Capacity", value: "Up to 10kg per meter of curtain" },
      { label: "Operating Noise", value: "< 20 Decibels (Near Silent)" }
    ],
    faqs: [
      { q: "Do the curtain tracks operate silently?", a: "Yes, the system utilizes specialized silent glider hooks that move effortlessly without grating sounds." },
      { q: "Are the hooks rust-proof?", a: "Absolutely. We use SS-304 stainless steel hooks to prevent corrosion from cleaning agents." }
    ],
    heroImage: "/images/hospital-curtain-track-system/silent-glider-hooks.webp"
  },
  'roof-suspensions': {
    title: "Roof Suspension Systems",
    tagline: "CTS Configuration",
    heroDesc: "For modern facilities with high or false ceilings, specialized mounting hardware is required. Our bridging tubes firmly anchor the track layout to the structural 'true' ceiling for absolute stability.",
    atAGlance: ["Rigid Bridge Supports", "Custom Drop Lengths", "Structural Anchoring", "False Ceiling Safe"],
    configurations: [
      {
        title: "Aluminum Bridge Suspensions",
        desc: [
          "Custom-length, rigid aluminum suspension drops that bypass fragile false ceilings. These bridging tubes firmly anchor to the concrete slab above.",
          "Ensures the track layout remains perfectly level and stable, regardless of ceiling height or material."
        ],
        image: "/images/hospital-curtain-track-system/roof-suspension-systems.webp"
      }
    ],
    engineering: [
      {
        title: "Rigid Bridge Supports",
        desc: "We manufacture custom rigid aluminum drops that provide exceptional load-bearing stability without stress on false ceilings.",
        bullets: ["High Load Bearing", "Adjustable Heights"]
      }
    ],
    applications: [
      { title: "Modern Hospital ICUs", image: "/images/key-application-images/icu.webp" },
      { title: "Emergency Trauma Bays", image: "/images/key-application-images/triage.webp" }
    ],
    whyChoose: [
      { title: "Custom Fabrication", desc: "Drops are cut and threaded in-house to match your specific ceiling depth.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "Safety Assured", desc: "Pull-out tests conducted on every structural anchor point.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Expert Setup", desc: "Teams trained in overhead structural mounting and leveling.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Reliability", desc: "Anchored to last as long as the building structure itself.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "High Ceiling Challenge in Mumbai",
      context: "A hospital had 15ft ceilings, making standard track installation impossible.",
      solution: "Engineered 5ft rigid suspension drops to bring tracks down to a functional level while maintaining stability."
    },
    specs: [
      { label: "Support Material", value: "Rigid Aluminum Tubing" },
      { label: "Mounting Plate", value: "Heavy-Gauge Galvanized Steel" },
      { label: "Max Drop Length", value: "Up to 3 Meters (Custom lengths available)" },
      { label: "Weight Stability", value: "Supports up to 50kg static load" }
    ],
    faqs: [
      { q: "How is it mounted with false ceilings?", a: "We use rigid aluminum bridge supports that anchor directly to the true ceiling slab above." },
      { q: "Are the suspension rods adjustable?", a: "Yes, we provide adjustable telescoping rods for minor level corrections onsite." }
    ],
    heroImage: "/images/hospital-curtain-track-system/roof-suspension-systems.webp"
  },
  'custom-layouts': {
    title: "Custom Bends & Layouts",
    tagline: "CTS Configuration",
    heroDesc: "Every ward has a unique footprint. We use specialized machinery to permanently bend aluminum extrusions, creating sweeping L-shapes, U-shapes, or full O-shape cubicles tailored to your bed arrangements.",
    atAGlance: ["Precision Factory Bending", "Continuous Profiles", "L/U/O Shape Options", "Space-Optimized Geometry"],
    configurations: [
      {
        title: "Sweeping Curve Bends",
        desc: [
          "Unlike standard joints that cause gliders to snag, our continuous bent profiles ensure the curtain travels around corners with zero resistance.",
          "Factory-formed using digital bending machines for consistent radius and structural strength without kinking the aluminum."
        ],
        image: "/images/hospital-curtain-track-system/custom-bends-layouts.webp"
      }
    ],
    engineering: [
      {
        title: "Precision Forming",
        desc: "Tracks are permanently bent at our facility using heavy-duty machinery to create continuous sweeping curves.",
        bullets: ["Smooth Cornering", "No Kink Bends"]
      }
    ],
    applications: [
      { title: "Multi-Bed Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" },
      { title: "Maternity Rooms", image: "/images/key-application-images/maternity-labour-ward.webp" }
    ],
    whyChoose: [
      { title: "Perfect Fit", desc: "Every layout is custom-measured to ensure maximum patient space and accessibility.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "Sterile Design", desc: "No corner joints where dust or bacteria can accumulate.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India", desc: "Site measurement and verification by our expert surveyors.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Aesthetics", desc: "Sweepings curves provide a modern, high-end look to hospital wards.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Optimizing Maternity Ward in Jaipur",
      context: "A maternity ward needed to accommodate 10 beds in a circular architectural zone.",
      solution: "Designed and installed custom O-shape tracks that followed the room's curvature, providing full privacy for each bed."
    },
    specs: [
      { label: "Available Bends", value: "90°, 135°, Custom Radius Curves" },
      { label: "Bend radius", value: "Standard 300mm (Customizable)" },
      { label: "Layout types", value: "Straight, L-Shape, U-Shape, Circular" },
      { label: "Structural integrity", value: "Cold-forming process maintains alloy strength" }
    ],
    faqs: [
      { q: "Can you customize for specific bed layouts?", a: "Yes, we custom bend tracks into perfect L, U, or O shapes tailored to your bed arrangements." },
      { q: "Does bending weaken the track?", a: "No, our cold-bending process ensures the aluminum maintains its full load-bearing capacity." }
    ],
    heroImage: "/images/hospital-curtain-track-system/custom-bends-layouts.webp"
  },
  'curtains': {
    title: "Anti-Microbial Privacy Curtains",
    tagline: "CTS Configuration",
    heroDesc: "Our curtains are woven from dense, high-quality polyester fabric providing absolute visual block-out. Chemically treated with anti-bacterial and stain-repellent agents for maximum hospital hygiene.",
    atAGlance: ["Fire-Retardant (NFPA 701)", "Anti-Bacterial Treated", "Open-Mesh Top Design", "Water & Stain Repellent"],
    configurations: [
      {
        title: "Medical-Grade Privacy Fabric",
        desc: [
          "Woven from high-denier polyester with permanent anti-microbial properties that remain effective even after multiple high-temperature industrial washes.",
          "Features an open-mesh top design to comply with fire safety codes, allowing ceiling sprinkler water to penetrate the partition in case of fire."
        ],
        image: "/images/hospital-curtain-track-system/anti-microbial-privacy-curtains.webp"
      }
    ],
    engineering: [
      {
        title: "Safety First Design",
        desc: "Top panels feature specialized open-mesh design ensuring fire sprinklers and central HVAC airflow are never obstructed.",
        bullets: ["Fire Safety Compliant", "Airflow Friendly"]
      }
    ],
    applications: [
      { title: "Isolation Cubicles", image: "/images/key-application-images/icu.webp" },
      { title: "Emergency Rooms", image: "/images/key-application-images/triage.webp" }
    ],
    whyChoose: [
      { title: "Certified Safety", desc: "Curtains meet international fire-retardant standards (NFPA 701).", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Infection Control", desc: "Silver-ion treatment provides 24/7 protection against cross-contamination.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "Easy Maintenance", desc: "Fabric is stain-resistant and withstands 100+ industrial wash cycles.", icon: "/images/why-choose-medgenz-symbols/support.webp" },
      { title: "Visual Privacy", desc: "Dense weave ensures no silhouettes or shadows are visible from outside.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" }
    ],
    caseStudy: {
      title: "Infection Control in Bengaluru",
      context: "A multi-specialty hospital faced rising HAI rates due to non-sterile partition fabrics.",
      solution: "Replaced all ward curtains with MedGenz Anti-Microbial Curtains. Swab tests showed zero bacterial growth on fabric surfaces."
    },
    specs: [
      { label: "Fabric Material", value: "100% Fire-Retardant Polyester" },
      { label: "Weight", value: "Minimum 250 GSM" },
      { label: "Mesh Height", value: "Standard 20-inch Top Mesh" },
      { label: "Color Options", value: "Medical Blue, Sea Green, Beige (Custom Available)" }
    ],
    faqs: [
      { q: "Are the privacy curtains fire-retardant?", a: "Yes, they are chemically treated to meet NFPA 701 international fire safety regulations." },
      { q: "How often should curtains be washed?", a: "They are designed for 24/7 use and should be laundered monthly or when visibly soiled." }
    ],
    heroImage: "/images/hospital-curtain-track-system/anti-microbial-privacy-curtains.webp"
  },
  'iv-tracks': {
    title: "Telescopic IV Tracks",
    tagline: "CTS Configuration",
    heroDesc: "Free up valuable floor space in critical care zones. Our overhead IV carrier tracks provide mobile, space-saving fluid suspension directly above the patient bed without bulky tripping hazards.",
    atAGlance: ["Overhead Integration", "Telescopic SS Hangers", "Floor-Space Optimized", "Wheeled smooth Carriage"],
    configurations: [
      {
        title: "Integrated Bedside IV Systems",
        desc: [
          "Installed parallel to or alongside the cubicle track. Features specialized wheeled carriages equipped with adjustable, telescopic stainless-steel IV hangers.",
          "Allows nurses to position fluid bags exactly where needed, keeping the floor area clear for crash carts and ventilators."
        ],
        image: "/images/hospital-curtain-track-system/telescopic-iv-tracks.webp"
      }
    ],
    engineering: [
      {
        title: "Overhead Integration",
        desc: "Mobile fluid suspension installed parallel to privacy tracks, providing easy bag access without taking up floor space.",
        bullets: ["Space-Saving Design", "Adjustable Height Hangers"]
      }
    ],
    applications: [
      { title: "Critical Care Units", image: "/images/key-application-images/icu.webp" },
      { title: "Dialysis Bays", image: "/images/key-application-images/post-op.webp" }
    ],
    whyChoose: [
      { title: "Workflow Optimized", desc: "Allows medical staff to move freely around the bed during emergencies.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "Medical Grade SS", desc: "Telescopic hangers made from surgical-grade SS-304.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Custom Fit", desc: "Tracks can be integrated into existing partition layouts.", icon: "/images/why-choose-medgenz-symbols/support.webp" },
      { title: "Durability", desc: "Heavy-duty wheeled carriages ensure jam-free movement for years.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" }
    ],
    caseStudy: {
      title: "Clearing Tripping Hazards in Lucknow",
      context: "A small-footprint ICU struggled with floor-standing IV poles blocking medical carts.",
      solution: "Installed MedGenz Telescopic IV Tracks. Floor space availability increased by 40%, improving emergency response speeds."
    },
    specs: [
      { label: "Hanger Material", value: "SS-304 Stainless Steel" },
      { label: "Telescopic Range", value: "700mm to 1500mm Adjustment" },
      { label: "Carriage Type", value: "Dual-Wheeled Ball Bearing Runners" },
      { label: "Weight Rating", value: "Supports up to 5kg per hook" }
    ],
    faqs: [
      { q: "How much weight can the IV track support?", a: "Each IV carriage can safely support up to 5kg of fluid bags." },
      { q: "Can it be installed with any track?", a: "Yes, our IV tracks are compatible with our standard aluminum extrusion profiles." }
    ],
    heroImage: "/images/hospital-curtain-track-system/telescopic-iv-tracks.webp"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = ctsProducts[slug];
  if (!data) return { title: 'Product Not Found' };
  return {
    title: `${data.title} | Curtain Track System | MedGenz`,
    description: data.heroDesc,
  };
}

export default async function CTSProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = ctsProducts[slug];

  if (!data) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": data.title,
    "description": data.heroDesc,
    "brand": {
      "@type": "Brand",
      "name": "MedGenz"
    },
    "image": data.heroImage,
    "offers": {
      "@type": "Offer",
      "url": `https://www.medgenz.com/services/curtain-track-system/${slug}`,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="pt-20 font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* CLEAN PRODUCT HEADER */}
      <section className="pt-28 pb-8 md:pt-40 md:pb-16 bg-white border-b border-gray-100 uppercase tracking-tighter">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <nav aria-label="breadcrumb" className="mb-4 md:mb-6">
            <ol className="flex items-center space-x-2 text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider">
              <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li><Link href="/services/curtain-track-system" className="hover:text-brand-600 transition-colors">Curtain Track System</Link></li>
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
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">Hardware Options</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">System <span className="text-brand-600">Configurations</span></h2>
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
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Anatomy of <span className="text-brand-600">Superiority</span></h2>
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
