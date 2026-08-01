import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Activity, Zap, ChevronDown, ArrowRight } from "lucide-react";
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

const motProducts: Record<string, ProductData> = {
  'wall-panels': {
    title: "Modular OT Wall Panels",
    tagline: "Infection-Free Infrastructure",
    heroDesc: "In a sterile environment, walls are your primary defense. Traditional walls have pores and cracks that harbor bacteria. We manufacture hermetically sealed, anti-bacterial SS-304 and PPGI wall panels engineered strictly for Class 100 cleanrooms and NABH-compliance.",
    atAGlance: ["SS-304 & PPGI Options", "High-Density PUF Core", "Seamless RTV Joints", "Class 100 / NABH Compliant"],
    configurations: [
      {
        title: "SS-304 Stainless Steel Panels",
        desc: ["The gold standard for world-class surgical facilities. SS-304 provides an ultra-hard, non-porous surface immune to rust and harsh chemical disinfectants.", "expertly sealed with antibacterial silicone for a monolithic finish, ideally for primary OTs and Cath Labs."],
        image: "/images/mot-product-page-images/wall-panel-images/ss-304-wall-panel.webp"
      },
      {
        title: "PPGI Modular Wall Panels",
        desc: ["Pre-Painted Galvanized Iron (PPGI) panels are a cost-effective choice for NABH-compliant setups. Coated with anti-microbial paint.", "Ideal for budget-conscious OT projects, ICUs, and sterile corridors with high structural rigidity and easy sanitization."],
        image: "/images/mot-product-page-images/wall-panel-images/ppgi-wall-panel.webp"
      }
    ],
    engineering: [
      {
        title: "3D Corner Coving",
        desc: "We completely eliminate 90-degree angles where dust accumulates using specialized curved aluminum or SS-304 coving.",
        bullets: ["Eliminates Dead Corners", "Rapid Room Sterilization"]
      },
      {
        title: "Anti-Bacterial Coating",
        desc: "PPGI variants are electrostatically coated with silver-ion technology that actively disrupts bacterial cellular division.",
        bullets: ["Active Microbial Resistance", "Scratch & Dent Resistant"]
      },
      {
        title: "RTV Silicone Sealing",
        desc: "Interlocking panels are flush-filled with medical-grade RTV silicone, guaranteeing zero air leakage and positive pressure.",
        bullets: ["Hermetic Airtight Seal", "Anti-Fungal Properties"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "CSSD & Processing", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "From sub-base grinding to final panel integration, we handle the entire cleanroom floor execution.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Overcoming OT Contamination in a Legacy Hospital",
      context: "A 20-year-old hospital faced recurring infections. Audit revealed porous brick walls harboring fungal spores in microscopic cracks.",
      solution: "Erected a self-supporting shell of SS-304 Modular Wall Panels. Microbes reduced by 99.9%, instantly securing NABH certification."
    },
    specs: [
      { label: "Panel Construction", value: "SS-304, PPGI, or EGP PUF Sandwich Panels" },
      { label: "Standard Dimensions", value: "Custom heights (up to 3000mm) x 1200mm widths" },
      { label: "Surface Coating", value: "Anti-microbial epoxy polyester powder (50-70 microns)" },
      { label: "Corner Transitions", value: "Aluminum/SS coving with 3D corner pieces" }
    ],
    faqs: [
      { q: "Why can't standard brick walls be used in an OT?", a: "Brick walls have pores, crack, and have corners that breed bacteria. Modular panels are non-porous and seamless." },
      { q: "What is the difference between SS-304 and PPGI?", a: "SS-304 is the highest tier, completely rust-proof. PPGI is a cost-effective durable alternative with antibacterial paint." },
      { q: "How are joints sealed?", a: "Using medical-grade RTV silicone sealant to create a 100% airtight and flush surface." }
    ],
    heroImage: "/images/mot-product-page-images/wall-panel-images/ss-304-wall-panel.webp"
  },
  'ceiling-systems': {
    title: "Seamless OT Ceiling Systems",
    tagline: "Infection-Free Infrastructure",
    heroDesc: "In an Operation Theatre, the ceiling is the core of air management. Traditional ceilings with joints act as breeding grounds for micro-bacteria. We manufacture hermetically sealed, jointless ceilings engineered for Class 100 cleanrooms and NABH-compliance.",
    atAGlance: ["100% Hermetically Sealed", "SS-304 & PPGI Options", "Precision LAF Integration", "Anti-Bacterial Coating"],
    configurations: [
      {
        title: "SS-304 Stainless Steel Ceilings",
        desc: ["The premium standard for high-end surgical facilities. Matched durability and highest sterility. Naturally non-porous to prevent colonization.", "expertly TIG welded or sealed with anti-fungal silicone for a flawless monolithic finish."],
        image: "/images/mot-product-page-images/ot-ceiling-images/ss-304-ceiling.webp"
      },
      {
        title: "Aluminum Powder-Coated Ceilings",
        desc: ["Perfect for retrofitting with weight limitations. Lightweight yet structurally rigid over long spans without sagging.", "Naturally non-corrosive and malleable for precise factory-finished cutouts for LAF and pendants."],
        image: "/images/mot-product-page-images/ot-ceiling-images/aluminum-powder-coated-ceiling.webp"
      }
    ],
    engineering: [
      {
        title: "Medical Grade Sealants",
        desc: "We utilize specialized RTV silicone sealants that are inherently anti-fungal and create an impenetrable, flush barrier.",
        bullets: ["Zero Air Leakage", "Anti-Fungal RTV Silicone"]
      },
      {
        title: "Precision LAF Cutouts",
        desc: "We CNC-machine exact apertures for LAF units and heavy surgical lights, ensuring a gap-free precision fit.",
        bullets: ["Flawless LAF Integration", "Custom Pendant Cutouts"]
      },
      {
        title: "Structural Grid System",
        desc: "Behind panels lies a heavy-duty extruded aluminum suspension grid firmly anchored to the true concrete slab.",
        bullets: ["Heavy-Duty Aluminum Grid", "Zero Sagging Guarantee"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Cath Labs & Hybrid OTs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "CSSD & Sterile Corridors", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "From design to final integration, we provide End to End ceiling systems for hospital cleanrooms.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015 standards.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our teams travel to your site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide comprehensive maintenance support after project handover.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Solving Infection Rates in a Bihar Hospital",
      context: "A 200-bed hospital faced infection spikes. Audit showed a traditional false ceiling had cracks pulling in contaminated air.",
      solution: "Deployed a custom Seamless PPGI Ceiling System with laser-cut apertures. Infection rate dropped to 0% immediately."
    },
    specs: [
      { label: "Panel Core Options", value: "SS-304, PPGI, Aluminum, or PUF Insulated" },
      { label: "Panel Thickness", value: "0.8mm to 1.2mm (Metal) / 50mm - 80mm (PUF)" },
      { label: "Surface Coating", value: "Anti-microbial epoxy polyester powder (50-70 microns)" },
      { label: "Joint Sealing", value: "Medical-grade Room Temperature Vulcanizing (RTV) Silicone" }
    ],
    faqs: [
      { q: "What materials are used?", a: "Premium SS-304, PPGI, and Aluminum coated with anti-bacterial epoxy paint." },
      { q: "Can the ceiling integrate with LAF?", a: "Yes, custom-engineered precision cutouts perfectly house LAF units and pendants." },
      { q: "Why is a seamless ceiling important?", a: "To prevent joints and crevices from becoming breeding grounds for bacteria and dust." }
    ],
    heroImage: "/images/mot-product-page-images/ot-ceiling-images/ss-304-ceiling.webp"
  },
  'doors': {
    title: "Operation Theatre Doors",
    tagline: "100% Sealed Infrastructure",
    heroDesc: "If an OT door leaks, positive pressure drops and airborne bacteria flood in. We manufacture hermetically sealed sliding and swing doors in PPGI, HPL, and SS-304, guaranteeing a sterile, NABH-compliant environment.",
    atAGlance: ["100% Hermetic Seal", "Touchless Sensor Entry", "SS-304 / PPGI / HPL Cores", "AERB Lead-Lined Options"],
    configurations: [
      {
        title: "Automatic Hermetic Sliding Doors",
        desc: ["Touchless infection control with micro-processor controlled motors. Features elbow/radar sensors for maximum hygiene.", "3-axis track system drops door down and inward upon closing to create an absolute vacuum seal."],
        image: "/images/mot-product-page-images/ot-doors-images/automatic-hermatic-sliding-door.webp"
      },
      {
        title: "Manual Hermetic Sliding Doors",
        desc: ["Robust, low-maintenance alternative for ICUs and CSSD. Exact same 3-axis seal as automated versions.", "Ergonomic lever handle breaks vacuum seal mechanically for effortless gliding on precision rollers."],
        image: "/images/mot-product-page-images/ot-doors-images/manual-hermatic-sliding-door.webp"
      },
      {
        title: "HPL (High-Pressure Laminate) Doors",
        desc: ["Ultimate durability against heavy impacts from stretchers and trolleys. Extremely scratch and moisture resistant.", "Laminate sheets over aluminum frame and PUF core. High-end aesthetic finish for surgical wings."],
        image: "/images/mot-product-page-images/ot-doors-images/hpl-door.webp"
      }
    ],
    engineering: [
      {
        title: "3-Axis Drop-Down Track",
        desc: "The secret to true hermetic sealing: it physically drops the door down and inward, crushing gaskets perfectly flush.",
        bullets: ["100% Vacuum Seal", "Positive Pressure Retention"]
      },
      {
        title: "Micro-Processor Motors",
        desc: "Driven by ultra-quiet brushless DC motors with obstacle detection to automatically reverse and prevent injury.",
        bullets: ["Silent Operation", "Intelligent Auto-Reverse"]
      },
      {
        title: "High-Density PUF Core",
        desc: "Injected under pressure for structural rigidity against stretcher impacts and superior acoustic dampening.",
        bullets: ["Excellent Acoustic Dampening", "High Impact Resistance"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "Isolation Wards & ICUs", image: "/images/key-application-images/icu.webp" },
      { title: "CSSD & Sterile Corridors", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We handle the entire panel and door setup, eliminating third-party errors and delays.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our doors strictly adhere to international medical-grade outcomes and ISO certifications.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Expert engineering teams travel directly to your hospital site anywhere in India.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive lifetime maintenance and spare parts support for all door systems.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Securing Positive Pressure in a UP Clinic",
      context: "A clinic failed NABH inspection because sterile air escaped through standard wooden swing door gaps.",
      solution: "Installed Automatic Hermetic Sliding Doors. 3-axis seal achieved perfect positive pressure in 10 minutes."
    },
    specs: [
      { label: "Outer Skin Materials", value: "PPGI, HPL (High-Pressure Laminate), or SS-304" },
      { label: "Door Core Material", value: "High-density injected PUF for insulation" },
      { label: "Sealing Mechanism", value: "3-Axis drop-down track with Neoprene gaskets" },
      { label: "Automation Sensors", value: "Touchless magic switch, radar, or elbow push pads" }
    ],
    faqs: [
      { q: "Difference between PPGI and HPL?", a: "PPGI offers rigidity; HPL provides extreme impact resistance against stretchers and trolleys." },
      { q: "What makes a door 'Hermetic'?", a: "A 3-axis track that drops the door down and in, creating a 100% airtight vacuum seal." },
      { q: "Are lead-lined doors available?", a: "Yes, 1mm-2mm lead shielding can be integrated for AERB radiation compliance." }
    ],
    heroImage: "/images/mot-product-page-images/ot-doors-images/automatic-hermatic-sliding-door.webp"
  },
  'flooring': {
    title: "Modular OT Flooring Systems",
    tagline: "Infection-Free Foundation",
    heroDesc: "An OT is only as sterile as its foundation. We execute perfectly leveled, monolithic flooring systems for Class 100 cleanrooms. From Conductive ESD Vinyl to Heavy-Duty Self-Leveling Compounds, we ensure 100% compliance.",
    atAGlance: ["Self-Leveling Compound Base", "Anti-Static (ESD) Integration", "Heat-Welded Seamless Joints", "High Chemical Resistance"],
    configurations: [
      {
        title: "Conductive ESD Vinyl Flooring",
        desc: ["Infused with carbon compounds and laid over a copper tape grid wired to earthing. Drains static electricity generated by movement.", "Protects sensitive micro-electronics in anesthesia workstations. Essential for Super-Specialty OTs and Cath Labs."],
        image: "/images/mot-product-page-images/ot-flooring-images/conductive-vinyl-flooring.webp"
      },
      {
        title: "Self-Leveling Compound Flooring",
        desc: ["Poured liquid matrix that cures into a 3mm-4mm dense, joint-free monolithic slab. Absolute 100% fluid-tight surface.", "Immense impact resistance against rolling loads. Best for Orthopedic OTs and Heavy-Traction Rooms."],
        image: "/images/mot-product-page-images/ot-flooring-images/self-leveling-modular-ot.webp"
      }
    ],
    engineering: [
      {
        title: "Seamless 4-Inch Coving",
        desc: "We curve the flooring up walls to connect smoothly with modular panels, eliminating 90-degree corners where bacteria hide.",
        bullets: ["Eliminates Dead Corners", "Absolute NABH Compliance"]
      },
      {
        title: "Heat-Welded Joints",
        desc: "Vinyl seams are fused using matching PVC rods to form an unbroken, fluid-tight surface resistant to iodine and blood.",
        bullets: ["Monolithic Surface", "100% Impervious to Fluids"]
      },
      {
        title: "Copper Grid Earthing",
        desc: "ESD lines include underlying copper grid networks to safely dissipate static away from delicate medical machines.",
        bullets: ["Static Drainage", "Electronic Safety"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "CSSD & Scrub Stations", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Execution", desc: "From sub-base grinding to final coving, we handle the entire cleanroom floor project.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "NABH Certified", desc: "Our materials and installation processes strictly adhere to NABH norms for sterile medical facilities.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Teams", desc: "Headquartered in Delhi NCR, our specialized teams travel directly to your hospital site.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide comprehensive maintenance and AMC support after project handover.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Protecting Sensitive Equipment in Mumbai",
      context: "A hospital's cardiac monitors were experiencing calibration glitches due to static buildup on tiled floors.",
      solution: "Installed Conductive ESD Vinyl with copper grid earthing. Interference vanished instantly, ensuring surgical precision."
    },
    specs: [
      { label: "Material Thickness", value: "Vinyl: 2.0mm | Compound: 3.0mm - 4.0mm" },
      { label: "Seam / Joint Profile", value: "Heat-Welded PVC Rods or Monolithic Poured" },
      { label: "Chemical Resistance", value: "Resistant to Betadine, Iodine, and Hospital Detergents" },
      { label: "Wall Integration", value: "Continuous 4-Inch wall coving for easy cleaning" }
    ],
    faqs: [
      { q: "Can it be applied over old tiles?", a: "Yes, we mechanically grind the surface and pour a self-leveling base to ensure a flat, foundation." },
      { q: "What is best for Orthopedics?", a: "Heavy-Duty Self-Leveling Compound is recommended as it won't indent under extreme table point-loads." },
      { q: "How is ESD Vinyl grounded?", a: "Via a copper tape grid laid under the sheets and wired to the building's central earthing." }
    ],
    heroImage: "/images/mot-product-page-images/ot-flooring-images/standard-homogeneous-vinyl.webp"
  },
  'laminar-airflow': {
    title: "Laminar Air Flow (LAF) Systems",
    tagline: "The Core of Sterility",
    heroDesc: "LAF systems are the most critical component for achieving Class 100 sterility. By pushing HEPA-filtered air in a vertical, unidirectional piston effect, we wash away contaminants from the surgical field. We manufacture SS-304 and Aluminum plenums engineered for absolute surgical safety.",
    atAGlance: ["Class 100 / ISO 5 Air", "Vertical Unidirectional Flow", "SS-304 / Aluminum Body", "Tightly Sealed Filter Banks"],
    configurations: [
      {
        title: "SS-304 LAF Plenum",
        desc: ["High-grade stainless steel construction for maximum durability and chemical resistance. Features double-layered CG screen for uniform velocity.", "Recommended for Transplant OTs and Joint Replacement surgeries requiring absolute sterile airflow."],
        image: "/images/mot-product-page-images/ot-laf-images/laminar-airflow-2.webp"
      },
      {
        title: "Aluminum Powder-Coated LAF",
        desc: ["Lightweight solution with excellent corrosion resistance. Factory-coated with antibacterial epoxy resin.", "Aerodynamic design ensures quiet operation and perfect integration with modular ceiling grids."],
        image: "/images/mot-product-page-images/ot-laf-images/laminar-airflow-1.webp"
      }
    ],
    engineering: [
      {
        title: "Piston-Effect Velocity",
        desc: "Air is pushed at a constant ~0.30 m/s velocity, creating a downward pressure curtain that prevents non-sterile air from rising.",
        bullets: ["Uniform Air Distribution", "Prevents Turbulence"]
      },
      {
        title: "CG Screen Technology",
        desc: "Specialized double-layered mesh screens ensure the air exits the plenum in a perfectly vertical, non-turbulent column.",
        bullets: ["Laminar Flow Perfection", "Easy-Clean Mesh"]
      },
      {
        title: "Airtight HEPA Seals",
        desc: "Filter housings feature fluid or gasket seals to ensure 100% of the air passes through the HEPA media before entering the OT.",
        bullets: ["Zero Bypass Risk", "Secure Filter Clamping"]
      }
    ],
    applications: [
      { title: "Orthopedic OTs", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Cardiac Surgery", image: "/images/key-application-images/cath-lab.webp" },
      { title: "Neurosurgery Units", image: "/images/key-application-images/icu.webp" },
      { title: "IVF Embryology Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" }
    ],
    whyChoose: [
      { title: "Expert Fabrication", desc: "Our plenums are precision-manufactured in-house to ensure zero air leakage and perfect velocity.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "Certified Performance", desc: "Every LAF system undergoes rigorous smoke flow and velocity testing prior to handover.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Support", desc: "Headquartered in Delhi, our teams provide onsite installation and testing nationwide.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime AMC", desc: "We provide comprehensive support including HEPA validation and filter replacement services.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Post-Op Infections in Patna",
      context: "A hospital faced recurring infections. Smoke tests showed their old LAF was creating turbulent vortices over the patient.",
      solution: "Retrofitted with MedGenz SS-304 LAF Plenum featuring CG screens. Unidirectional flow restored, infection rates dropped to zero."
    },
    specs: [
      { label: "Plenum Material", value: "SS-304 (1.2mm) / Powder Coated Aluminum" },
      { label: "Air Velocity Standard", value: "90 fpm ± 20% (0.25 - 0.45 m/s)" },
      { label: "Filtration Grade", value: "Terminal H14 HEPA Filters (99.997% efficiency)" },
      { label: "CG Screen", value: "Removable Double-Layer Monofilament Mesh" }
    ],
    faqs: [
      { q: "What is 'Laminar' flow?", a: "Air moving in parallel layers at the same speed, creating a piston effect that pushes contaminants away." },
      { q: "Why use SS-304 for the plenum?", a: "For maximum sterility, rust resistance, and ability to withstand aggressive disinfectants." },
      { q: "How often are filters tested?", a: "NABH mandates validation every 6 months to ensure Class 100 air quality." }
    ],
    heroImage: "/images/mot-product-page-images/ot-laf-images/laminar-airflow-2.webp"
  },
  'hepa-filtration': {
    title: "Terminal HEPA & ULPA Filtration",
    tagline: "Absolute Air Purity",
    heroDesc: "HEPA filters are the final defense against airborne pathogens. Trapping 99.997% of particles down to 0.3 microns, they are the only way to achieve true Class 100 sterile conditions. We supply and install certified H14 grade terminal units for high-risk surgical zones.",
    atAGlance: ["99.997% Efficiency", "H14 Grade H-14 Standard", "0.3 Micron Trap Rating", "Leak-Proof Housing"],
    configurations: [
      {
        title: "Terminal HEPA Modules",
        desc: ["Flush-mounted ceiling modules providing final air purification directly at the room inlet. Essential for ICUs and sterile corridors.", "Features integrated dampers and pressure test ports for easy validation without breaking ceiling seals."],
        image: "/images/service assets/mot-page-n-eq-assets/hepa-filter.webp"
      },
      {
        title: "ULPA Filter Modules (U15)",
        desc: ["The absolute apex of air purification. Traps 99.9995% of particles down to 0.12 microns.", "Deployed in high-purity zones like organ transplant suites and IVF embryology labs."],
        image: "/images/mot-product-page-images/ot-hepa-filter/hepa-filter-setup.webp"
      }
    ],
    engineering: [
      {
        title: "Deep-Pleat Technology",
        desc: "Our filters use high-surface-area glass fiber media folded into deep pleats, ensuring low pressure drop and extended filter life.",
        bullets: ["Low Static Resistance", "Long Operational Life"]
      },
      {
        title: "Scan-Tested Reliability",
        desc: "Every filter is factory scan-tested for leaks (DOP test) to ensure zero bypass at the pleat edges or the frame gasket.",
        bullets: ["100% Leak-Free Guarantee", "Certified H14 Efficiency"]
      },
      {
        title: "Fluid Seal Housings",
        desc: "Utilizes a gel-filled channel to create an airtight seal between the filter and the housing, eliminating gasket bypass.",
        bullets: ["Superior Airtight Seal", "Easy Filter Replacement"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units", image: "/images/key-application-images/icu.webp" },
      { title: "Isolation Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" },
      { title: "IVF & Stem Cell Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" }
    ],
    whyChoose: [
      { title: "Certified Grades", desc: "We exclusively supply EN 1822 certified H14 grade HEPA filters for medical applications.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "In-House Testing", desc: "Our teams perform onsite DOP leak testing to ensure absolute cleanroom compliance.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Supply", desc: "We stock and supply replacement filters for all hospital sites across the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Validation Support", desc: "We provide complete documentation and validation certificates for hospital accreditation.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Rectifying Air Quality in a Pune IVF Lab",
      context: "An embryology lab faced poor success rates. Air audits revealed they were using standard AC filters instead of medical HEPA.",
      solution: "Installed Terminal H14 HEPA Modules. Air particle count dropped from 1,00,000 to < 100 instantly, restoring success rates."
    },
    specs: [
      { label: "Filter Grade", value: "EN 1822 H14 (99.995% Efficiency)" },
      { label: "Particle Size", value: "0.3 Microns" },
      { label: "Frame Material", value: "Anodized Aluminum / SS-304" },
      { label: "Face Velocity", value: "100 fpm (Nominal)" }
    ],
    faqs: [
      { q: "What does H14 grade mean?", a: "It is the highest standard of HEPA, trapping nearly 100% of sub-micron pathogens." },
      { q: "How often should HEPA be replaced?", a: "Typically every 1-2 years, depending on pre-filter maintenance and room demand." },
      { q: "What is a DOP test?", a: "Dispersed Oil Particulate testing to check for leaks in the filter media or seal." }
    ],
    heroImage: "/images/service assets/mot-page-n-eq-assets/hepa-filter.webp"
  },
  'ahu': {
    title: "Air Handling Units (AHU)",
    tagline: "The Engine of the OT",
    heroDesc: "The AHU is the massive engine that sitting outside the OT. It cools, dehumidifies, and multi-filters the air before it reaches the surgical suite. We manufacture double-skin thermal break units that guarantee absolute climate control.",
    atAGlance: ["Double-Skin Thermal Break", "High Efficiency EC Plug Fans", "UVGI Coil Sterilization", "Class 100 / ISO 5 Compliant"],
    configurations: [
      {
        title: "Cleanroom Hygienic AHU",
        desc: ["The mandatory base system for OTs and ICUs. Built specifically for zero microbial growth with smooth internal surfaces.", "Features double-skin PUF insulated panels to prevent thermal leakage and multi-stage filtration banks."],
        image: "/images/mot-product-page-images/ahu-page-images/cleanroom-ahu.webp"
      },
      {
        title: "Treated Fresh Air Unit (TFA)",
        desc: ["Critical for maintaining positive pressure and flushing anesthetic gases. Utilizes 100% outside air with zero recirculation.", "Equipped with massive cooling coils to handle the immense thermal load of raw outdoor air."],
        image: "/images/mot-product-page-images/ahu-page-images/fresh-air-ahu.webp"
      }
    ],
    engineering: [
      {
        title: "Double-Skin PUF Housing",
        desc: "Cabinets separated by injected high-density PUF insulation to ensure zero temperature transfer and zero sweating.",
        bullets: ["Eliminates Condensation", "High-Density Insulation"]
      },
      {
        title: "EC Plug Fan Technology",
        desc: "Direct-driven motors that operate silently and automatically adjust speed via VFD to maintain exact room pressure.",
        bullets: ["Massive Static Pressure", "Energy Efficient & Silent"]
      },
      {
        title: "UVGI Coil Sterilization",
        desc: "Ultraviolet lamps pointing at cooling coils destroy mold and biofilm before air enters the ductwork.",
        bullets: ["Destroys Mold & Biofilm", "Prevents Sick Building Syndrome"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units", image: "/images/key-application-images/icu.webp" },
      { title: "IVF & Fertility Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" },
      { title: "Isolation Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Turnkey HVAC", desc: "By providing end-to-end HVAC solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015 standards for medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Our engineering teams travel directly to your site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide comprehensive maintenance and validation services for the life of the plant.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Stabilizing OT Humidity in Maharashtra",
      context: "A surgical center near the coast faced extreme humidity, fogging microscopes and risking contamination.",
      solution: "Installed a Double-Skin Thermal Break DX AHU with wrap-around heat pipes. 50% ± 5% Relative Humidity maintained flawlessly."
    },
    specs: [
      { label: "Cabinet Construction", value: "Double Skin with 43mm/50mm PUF insulation" },
      { label: "Frame Profile", value: "Extruded Aluminum with Thermal Break" },
      { label: "Fan Technology", value: "Direct Driven EC Plug Fans" },
      { label: "Coil Type", value: "Copper Tubes with Hydrophilic Aluminum Fins" }
    ],
    faqs: [
      { q: "Difference between AHU and LAF?", a: "AHU is the external 'engine' that cools and filters air; LAF is the internal 'delivery' plenum." },
      { q: "Why use 'Double Skin'?", a: "To prevent external condensation (sweating) which breeds rust and mold." },
      { q: "What is UVGI?", a: "Ultraviolet lights that sterilize the cooling coils to kill mold and bacteria." }
    ],
    heroImage: "/images/mot-product-page-images/ahu-page-images/cleanroom-ahu.webp"
  },
  'pressure-control': {
    title: "OT Pressure Control Systems",
    tagline: "Sterile Pressure Balancing",
    heroDesc: "While the AHU generates airflow, the Pressure Control System acts as the brain. An OT must maintain constant positive pressure so contaminated air cannot enter. We manufacture precise monitors and relief valves to lock in Class 100 sterility.",
    atAGlance: ["Maintains +15 Pa Pressure", "Digital Micro-Monitors", "Motorized VAV Dampers", "Automated VFD Feedback"],
    configurations: [
      {
        title: "Differential Pressure Monitor",
        desc: ["Digital screens provide real-time readings of room pressure compared to outer corridors. Programmable for NABH ranges.", "Triggers instant audio-visual alarms if pressure drops below the safe threshold of +2.5 Pa."],
        image: "/images/mot-product-page-images/environmental-monitoring-images/differential-pressure-transmitters.webp"
      },
      {
        title: "Pressure Relief Damper (PRD)",
        desc: ["The critical mechanical safety valve. Automatically vents excess air if positive pressure becomes too high.", "Precisely calibrated gravity-weighted louvers ensure heavy doors remain easy to open for staff safety."],
        image: "/images/mot-product-page-images/ot-preassure-control/preassure-relief-damper.webp"
      }
    ],
    engineering: [
      {
        title: "Micro-Processor Sensors",
        desc: "High-sensitivity internal diaphragms detect variances as minute as 0.1 Pascal for real-time telemetry.",
        bullets: ["0.1 Pa Sensitivity", "Real-Time Telemetry"]
      },
      {
        title: "Electronic Actuators",
        desc: "Swift-response motors continuously modulate duct dampers to compensate for sudden door openings.",
        bullets: ["Swift-Response Motors", "Continuous Modulation"]
      },
      {
        title: "Isolated Control Wiring",
        desc: "Heavily shielded data lines connect monitors to VFDs, ensuring zero electromagnetic interference during surgery.",
        bullets: ["EMI Shielded Data Lines", "Flawless VFD Integration"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Isolation Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" },
      { title: "Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "CSSD Cleanrooms", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We provide complete end-to-end pressure control setups from design to validation.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our instruments strictly adhere to NABH norms for sterile medical cleanrooms.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Engineering teams provide onsite installation and testing across all Indian states.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "relationship continues with annual calibration and maintenance support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Fixing the Jammed Door Crisis in Haryana",
      context: "An OT was so over-pressurized that staff couldn't push the heavy swing doors open to exit.",
      solution: "Installed calibrated PRDs and a Digital Pressure Monitor linked to the VFD. equilibrium achieved instantly."
    },
    specs: [
      { label: "Operating Pressure", value: "+2.5 Pascal to +15 Pascal" },
      { label: "Monitor Display", value: "Digital LED / Touchscreen Integrated" },
      { label: "Damper Type", value: "Motorized VAV with 24V Actuators" },
      { label: "PRD Material", value: "SS-304 with gravity-weighted calibration" }
    ],
    faqs: [
      { q: "Why is positive pressure needed?", a: "To ensure that air only rushes OUT when doors open, preventing bacteria from entering." },
      { q: "What is a PRD?", a: "A pressure relief damper acts as a safety valve to vent excess air and keep doors operable." },
      { q: "How does it link to the AHU?", a: "The monitor sends feedback to the VFD to slow down or speed up the blower motors." }
    ],
    heroImage: "/images/service-images/pressure-monitor-main.webp"
  },
  'hvac-ducting': {
    title: "HVAC Ducting Networks",
    tagline: "The Air Highways",
    heroDesc: "The ducting network is the respiratory system of the OT. Standard ducts leak air, causing pressure drops. We manufacture CNC-fabricated, zero-leak ducting with thick thermal insulation.",
    atAGlance: ["CNC-Fabricated GI & Alu", "Zero-Leak Flange Joints", "Nitrile Thermal Insulation", "Fire Damper Integrated"],
    configurations: [
      {
        title: "GI Rectangular Ducting",
        desc: ["Fabricated from high-grade Galvanized Iron (GI) sheets. Features TDC/TDF flange joints for a zero-leak seal.", "Durable and cost-effective solution for standard cleanroom air supply and return networks."],
        image: "/images/mot-product-page-images/ot-hvac-ducting/aluminum-hvac-ducting.webp"
      },
      {
        title: "Aluminium / PIR Ducting",
        desc: ["Naturally rust-proof and lightweight. Pre-insulated (PIR) panels eliminate the need for secondary nitrile wrapping.", "Recommended for high-humidity coastal zones and sensitive MRI environments requiring non-ferrous materials."],
        image: "/images/mot-product-page-images/ot-hvac-ducting/pre-insulated-ducting.webp"
      }
    ],
    engineering: [
      {
        title: "Zero-Leak Joints",
        desc: "Duct segments are joined using precision flanges and medical-grade gasket tape to ensure 100% pressure retention.",
        bullets: ["TDC/TDF Flange Seals", "Zero Pressure Loss"]
      },
      {
        title: "Nitrile Insulation",
        desc: "Ducts are fully wrapped in closed-cell nitrile rubber (13-19mm) to prevent condensation and mold growth.",
        bullets: ["Prevents Sweating", "Fire-Retardant Class 'O'"]
      },
      {
        title: "Internal Smoothing",
        desc: "Internal surfaces are treated to be ultra-smooth, reducing friction loss and preventing dust accumulation in corners.",
        bullets: ["Low Static Resistance", "Anti-Bacterial Internal Seal"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units", image: "/images/key-application-images/icu.webp" },
      { title: "Sterile Corridors", image: "/images/key-application-images/cssd.webp" },
      { title: "CSSD Processing", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey HVAC", desc: "We design, fabricate, and install the complete duct network, ensuring perfect air balancing.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our fabrication processes adhere to SMACNA standards for cleanroom ducting.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Onsite fabrication teams ensure perfect fitment regardless of hospital layout complexities.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive AMC includes annual duct cleaning and air balancing services.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Fixing the Sweating Ceiling in Delhi",
      context: "A hospital ceiling leaked because of cheap fiberglass insulation on ducts collapsing from moisture.",
      solution: "Replaced with CNC-fabricated GI ducting and closed-cell Nitrile Rubber. Condensation stopped permanently."
    },
    specs: [
      { label: "Material Base", value: "GI (120-275 GSM) / Pure Aluminum" },
      { label: "Manufacturing Standard", value: "SMACNA / IS 655 compliant" },
      { label: "Thermal Insulation", value: "13mm - 19mm Nitrile Rubber" },
      { label: "Safety Devices", value: "UL-listed Fire Dampers Integrated" }
    ],
    faqs: [
      { q: "Why is commercial ducting bad for OTs?", a: "Standard ducts leak air, causing a drop in positive pressure and allowing bacteria entry." },
      { q: "Why insulate ducts?", a: "To prevent metal 'sweating' (condensation), which drips and breeds toxic mold." },
      { q: "What is a Fire Damper?", a: "A safety device that snaps shut during a fire to block smoke from entering the OT." }
    ],
    heroImage: "/images/mot-product-page-images/ot-hvac-ducting/aluminum-hvac-ducting.webp"
  },
  'control-panel': {
    title: "Surgeon Control Panels",
    tagline: "The Brain of the OT",
    heroDesc: "In a surgery, doctors cannot break scrub to adjust wall switches. We manufacture centralized digital interfaces that command HVAC, lighting, and alarms from one single sterile dashboard.",
    atAGlance: ["Digital Touchscreen Interface", "Real-time Temp & RH Data", "Integrated Gas Alarms", "IP65 Waterproof Sealed"],
    configurations: [
      {
        title: "Flush-Mounted Digital Panel",
        desc: ["Smooth, anti-microbial membrane keypad or HD capacitive touchscreen. Sits level with Modular OT wall panels.", "IP65 rated to allow aggressive chemical wipe-downs without risking internal short-circuits."],
        image: "/images/mot-product-page-images/ot-control-panels-images/flush-mounted-digital-interface.webp"
      },
      {
        title: "Environmental & Gas Hub",
        desc: ["Centralized monitoring of OT Temperature, Humidity, and HEPA status. Linked directly to the AHU.", "Built-in digital manometer for up to 6 gases with audio-visual alarms for pressure deviations."],
        image: "/images/mot-product-page-images/ot-control-panels-images/precision-environmental-control.webp"
      }
    ],
    engineering: [
      {
        title: "Micro-Controller Board",
        desc: "Industrial-grade PCBs engineered for 24/7 operation. Handles multiple sensor inputs without latency.",
        bullets: ["Industrial Grade PCB", "Continuous 24/7 Monitoring"]
      },
      {
        title: "IP65 Sealed Fascia",
        desc: "Anti-microbial membrane is hermetically sealed to the SS backbox, preventing liquid ingress during fumigation.",
        bullets: ["Anti-Microbial Surface", "100% Washable Design"]
      },
      {
        title: "Fail-Safe Relays",
        desc: "Uses optically isolated relays to separate low-voltage UI from high-voltage equipment, protecting surgeons.",
        bullets: ["Isolated Control Circuits", "Protects Against Shocks"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We provide complete panel and control solutions, eliminating delays and ensuring quality.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015 for medical-grade control outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Engineering teams travel directly to your site for precision wall-integrated installation.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive lifetime maintenance and remote troubleshooting support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Streamlining Workflows in a Punjab Cardiac Center",
      context: "Scattered manual controls forced nurses to break the sterile perimeter repeatedly to adjust dials.",
      solution: "Installed a Touchscreen Surgeon Control Panel. Team can now monitor temp, timers, and lights from one spot."
    },
    specs: [
      { label: "Enclosure Construction", value: "1.2mm SS-304 Stainless Steel" },
      { label: "User Interface", value: "Anti-microbial Membrane / HD Touch" },
      { label: "Ingress Protection", value: "IP65 Rated (Washable)" },
      { label: "Gas Alarms", value: "Supports 4-Gas to 6-Gas setups" }
    ],
    faqs: [
      { q: "Why use a digital panel?", a: "Standard switches have crevices for bacteria. Panels are flush and instantly washable." },
      { q: "What parameters are monitored?", a: "Temp, Humidity, Gas Pressures, HEPA status, and Anesthesia Timers." },
      { q: "Is the panel waterproof?", a: "Yes, IP65 rating protects against water and fumigation chemicals." }
    ],
    heroImage: "/images/mot-product-page-images/ot-control-panels-images/flush-mounted-digital-interface.webp"
  },
  'surgical-pendants': {
    title: "OT Ceiling Pendants",
    tagline: "Ergonomic Workflow Integration",
    heroDesc: "Floor clutter is a severe hazard in an operating room. Our advanced Ceiling Pendants consolidate medical gases, power, and data into ergonomic, overhead consoles, keeping the floor 100% clear and sterile.",
    atAGlance: ["Heavy-Duty Load Capacity", "Pneumatic Braking System", "Segregated Gas & Power", "330° Ergonomic Rotation"],
    configurations: [
      {
        title: "Single-Arm Movable Pendant",
        desc: ["The industry standard for multi-specialty OTs. 330-degree rotation allows the console to pivot smoothly around the table.", "Allows anesthetists to pull equipment close during prep and push it away during the surgery."],
        image: "/images/mot-product-page-images/ot-surgical-pendant-images/single-arm-surgical-pendant.webp"
      },
      {
        title: "Double-Arm (Tandem) Pendant",
        desc: ["Ultimate solution for Neurosurgery and Cardiac OTs. Two articulating segments provide a massive reach radius.", "Arms fold completely flat when not in use to conserve space in the surgical suite."],
        image: "/images/mot-product-page-images/ot-surgical-pendant-images/double-arm-surgical-pendant.webp"
      },
      {
        title: "Rigid / Fixed Pendant",
        desc: ["Robust and cost-effective for ICUs and recovery rooms. provides a solid, centralized utility drop from the ceiling.", "The console box rotates 330 degrees, providing stable mounting for monitors and infusion pumps."],
        image: "/images/mot-product-page-images/ot-surgical-pendant-images/rigid-surgical-pendant.webp"
      }
    ],
    engineering: [
      {
        title: "Pneumatic Braking",
        desc: "Integrated compressed-air brakes prevent accidental drifting. Releasing the lock button anchors the arm rigidly.",
        bullets: ["Zero Drift Guarantee", "Compressed-Air Actuated"]
      },
      {
        title: "Segregated Utilities",
        desc: "Internal column features physical compartmentalization of electrical wiring and gas pipelines to prevent fires.",
        bullets: ["Physical Segregation", "Complete Fire Safety"]
      },
      {
        title: "Modular Trays & Rails",
        desc: "Equipped with adjustable heavy-duty trays and integrated DIN rails for infusion pumps and monitors.",
        bullets: ["Adjustable Shelving", "Integrated DIN Rails"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "IVF & Fertility Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We handle End to End Surgical Pendant solutions, eliminating delays and ensuring quality.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015 standards for surgical safety.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Expert engineering teams travel directly to your site anywhere in India.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive lifetime maintenance support for all articulating pendant joints.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Cable Clutter in a Delhi Trauma Center",
      context: "A hospital struggled with trip hazards from hoses and cables stretching from walls to the surgical table.",
      solution: "Installed a Double-Arm Anaesthesia Pendant. Utilities now drop from the ceiling, clearing the floor entirely."
    },
    specs: [
      { label: "Structural Material", value: "High-strength extruded Aluminum alloy" },
      { label: "Load Capacity", value: "150 kg to 300 kg (Model dependent)" },
      { label: "Rotation Radius", value: "330° at each pivot joint" },
      { label: "Braking Mechanism", value: "Pneumatic Air Brakes / Friction" }
    ],
    faqs: [
      { q: "Why use ceiling pendants?", a: "To eliminate trip hazards from floor cables and hoses, ensuring a sterile and clear path." },
      { q: "Anaesthesia vs Surgical Pendants?", a: "Anaesthesia units hold gas lines and monitors; Surgical units hold tools and cautery equipment." },
      { q: "How to prevent drifting?", a: "Via pneumatic brakes that lock the arm joints instantly when the positioning button is released." }
    ],
    heroImage: "/images/mot-product-page-images/ot-surgical-pendant-images/single-arm-surgical-pendant.webp"
  },
  'scrub-stations': {
    title: "Surgical Scrub Stations",
    tagline: "Pre-Surgical Sterility",
    heroDesc: "Infection control begins outside the OT. We manufacture touchless SS-304 surgical scrub stations that ensure absolute sterility before the team enters the sterile zone.",
    atAGlance: ["Touchless IR Sensors", "Knee & Foot Backups", "Anti-Splash Sloped Basin", "Premium SS-304 Steel"],
    configurations: [
      {
        title: "Multi-Bay configurations",
        desc: ["Available in 1-Bay, 2-Bay, and 3-Bay setups to accommodate various team sizes. 800mm wide bays ensure ample scrubbing space.", "Prevents lead surgeons and nurses from bumping into each other during prep, maintaining a sterile perimeter."],
        image: "/images/mot-product-page-images/ot-surgical-scrub-stations-images/triple-bay-automatic-surgical-scrub-station.webp"
      },
      {
        title: "Integrated Soap & UV Station",
        desc: ["Touchless betadine dispensers alongside inline UV-C Water Sterilizers. Guarantees the washing water itself is pure.", "Includes 0.2-micron microbial absolute filters hidden within the plumbing shroud for absolute purification."],
        image: "/images/mot-product-page-images/ot-surgical-scrub-stations-images/single-bay-automatic-soap-dispenser-surgical-scrub-station.webp"
      }
    ],
    engineering: [
      {
        title: "SS-304 Construction",
        desc: "Body and basin fabricated from 1.5mm thick SS-304. Non-porous and rust-proof with seamless welded joints.",
        bullets: ["100% Rust-Proof Material", "Seamless Welded Joints"]
      },
      {
        title: "Thermostatic Control",
        desc: "Integrated mixing valves ensure hot/cold lines are blended to a consistent, comfortable warm flow.",
        bullets: ["Prevents Scalding Burns", "Hidden Anti-Tamper Valve"]
      },
      {
        title: "Fail-Safe Mechanisms",
        desc: "Equipped with redundant mechanical knee-operated panels for use during power outages or sensor maintenance.",
        bullets: ["Knee-Operated Backups", "Zero Power Dependency"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "CSSD Cleanrooms", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We handle End to End Scrub Station solutions, eliminating delays and ensuring quality.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015 standards for surgical sterility.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Expert engineering teams travel to your hospital site anywhere in India for setup.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive lifetime maintenance and spare parts support for all stations.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Cross-Contamination in an Orthopedic Wing",
      context: "Surgeons using old elbow-operated taps occasionally brushed sterilized arms against wet handles.",
      solution: "Installed 3-Bay SS-304 Station with IR Sensors. Chain of contamination broken; infection rates dropped to zero."
    },
    specs: [
      { label: "Construction Material", value: "1.5mm thick Premium SS-304" },
      { label: "Activation type", value: "Infrared (IR) Optical Sensors" },
      { label: "Backup Control", value: "Mechanical Knee / Foot Push Panels" },
      { label: "Water Sterilization", value: "Optional UV-C & 0.2µm Inline Filters" }
    ],
    faqs: [
      { q: "Why must scrub stations be touchless?", a: "To prevent re-contaminating sterilized hands via faucet handles, following NABH guidelines." },
      { q: "What if sensors fail during power loss?", a: "Mechanical knee-panels ensure water flow continues uninterrupted even without power." },
      { q: "How to prevent water splashing?", a: "Deep-sloped back-walls deflect high-pressure streams downward into the anti-vortex drain." }
    ],
    heroImage: "/images/mot-product-page-images/ot-surgical-scrub-stations-images/single-bay-automatic-surgical-scrub-station.webp"
  },
  'x-ray-viewers': {
    title: "LED X-Ray Viewing Screens",
    tagline: "Surgical Diagnostics",
    heroDesc: "Surgeons rely on absolute visual clarity. Our advanced LED X-Ray screens are ultra-slim, flicker-free, and flush-mounted to provide perfect diagnostics without compromising cleanroom sterility.",
    atAGlance: ["10,000+ Lux Edge-Lit LED", "Class 100 Cleanroom Ready", "SS-304 Flush-Mounted", "Auto-Sensor Dimming"],
    configurations: [
      {
        title: "Double-Film Viewers",
        desc: ["Standard for general OTs. Allows surgeons to compare historical scans against intra-operative MRIs.", "Flush-mounted to integrate level with wall panels, ensuring zero dust accumulation on ledges."],
        image: "/images/mot-product-page-images/ot-x-ray-viewers/double-film-x-ray-viewer.webp"
      },
      {
        title: "Multi-Film (Quad) Viewers",
        desc: ["Designed for Neurosurgery and Spine rooms where multiple scan angles must be viewed at once.", "Ultra-slim edge-lit technology generates zero radiant heat, maintaining OT thermal control."],
        image: "/images/mot-product-page-images/ot-x-ray-viewers/multi-film-x-ray-viewer.webp"
      }
    ],
    engineering: [
      {
        title: "High-Density LED Matrix",
        desc: "Medical-grade edge-lit technology producing 10,000+ Lux. absolutely uniform, flicker-free light.",
        bullets: ["Zero Eye Strain", "100,000+ Hour Lifespan"]
      },
      {
        title: "Toughened Acrylic Fascia",
        desc: "Viewing surface is covered by shatterproof, scratch-resistant acrylic that withstands chemical disinfectants.",
        bullets: ["Anti-Glare Coating", "Non-Yellowing Surface"]
      },
      {
        title: "Roller-Grip System",
        desc: "Advanced spring-loaded silicone grips allow surgeons to slide films in smoothly with one hand.",
        bullets: ["Damage-Free Film Holding", "Single-Hand Operation"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Emergency Rooms (ER)", image: "/images/key-application-images/emergency-ward.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We provide complete diagnostic viewing systems, eliminating third-party errors.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015 for healthcare diagnostics.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Teams travel to your hospital site for precision flush-mount installation.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive lifetime maintenance and parts support for all viewing units.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Enhancing Clarity in Neurosurgery",
      context: "Surgeons suffered eye fatigue from old fluorescent view boxes that flickered and generated heat.",
      solution: "Upgraded to Quad-Panel LED Smart Viewers. Flicker-free light and dimming capability restored diagnostic speed."
    },
    specs: [
      { label: "Light Technology", value: "Edge-Lit High-Density LED Matrix" },
      { label: "Brightness Intensity", value: "> 10,000 Lux (Uniform)" },
      { label: "Color Temp", value: "10,000K (Diagnostic Blue-White)" },
      { label: "Frame / Enclosure", value: "Flush SS-304 / Aluminum profile" }
    ],
    faqs: [
      { q: "Advantage of LED over Fluorescent?", a: "Flicker-free to prevent eye strain, 100% uniform light, and 100,000+ hour life." },
      { q: "What is 'Flush-Mounted'?", a: "Built directly into the modular wall so no ledge exists for dust to settle." },
      { q: "Is there an auto-sensor?", a: "Yes, advanced models stay dark until a film is slid into the grip, then illuminate instantly." }
    ],
    heroImage: "/images/mot-product-page-images/ot-x-ray-viewers/double-film-x-ray-viewer.webp"
  },
  'storage-cabinets': {
    title: "Flush-Mounted OT Cabinets",
    tagline: "Space-Saving Integration",
    heroDesc: "In an Operation Theatre, free-standing furniture gathers dust. Our SS-304 flush-mounted surgical cabinets integrate into modular walls, providing sterile storage without compromising airflow.",
    atAGlance: ["100% Flush Integration", "Premium SS-304 Steel", "Toughened Safety Glass", "Hermetic Magnetic Seals"],
    configurations: [
      {
        title: "Glass-Door View Cabinets",
        desc: ["Double-glazed toughened glass allows nurses to visually locate instruments instantly without breaking the sterile seal.", "Frame perfectly aligns with modular wall panels to ensure zero dust accumulation ledges."],
        image: "/images/mot-product-page-images/ot-storage-cabinet-images/glass-door-storage-cabinet.webp"
      },
      {
        title: "Solid SS-304 Door Cabinets",
        desc: ["Designed for light-sensitive medications and high-value robotic components requiring strict security.", "Utilizes heavy-duty magnetic closure gaskets to maintain the OT's critical positive pressure."],
        image: "/images/mot-product-page-images/ot-storage-cabinet-images/ss-door-storage-cabinet.webp"
      }
    ],
    engineering: [
      {
        title: "SS-304 Construction",
        desc: "Built entirely with 1.5mm thick Premium SS-304. non-porous and rust-proof with seamlessly welded joints.",
        bullets: ["100% Rust-Proof Material", "Seamless Welded Joints"]
      },
      {
        title: "Airtight Sealing",
        desc: "High-grade neoprene and magnetic gaskets around the door perimeter prevent OT pressure loss.",
        bullets: ["Magnetic/Silicone Gaskets", "Retains Positive Pressure"]
      },
      {
        title: "Adjustable Shelving",
        desc: "Height-adjustable SS-304 or 8mm toughened glass shelving to accommodate various surgical kit sizes.",
        bullets: ["8mm Toughened Glass/SS", "High Load Bearing Capacity"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "CSSD & Processing", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We handle End to End Storage Cabinet solutions, eliminating delays and ensuring quality.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015 for cleanroom storage standards.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Teams travel to your site for precision wall-integrated installation.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive lifetime maintenance and AMC support after project handover.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Maximizing Space in a Cardiac Center",
      context: "Free-standing racks cluttered the floor, disrupting sterile workflow and blocking staff paths.",
      solution: "Removed racks and integrated SS-304 Flush-Mounted Cabinets. Reclaimed 15% floor space instantly."
    },
    specs: [
      { label: "Cabinet Body Material", value: "1.5mm thick Premium SS-304" },
      { label: "Door Specs", value: "5mm Double-Glazed Glass or Solid SS-304" },
      { label: "Back Panel Insulation", value: "High-density PUF to match wall thickness" },
      { label: "Hardware", value: "Concealed SS hinges & Magnetic Seals" }
    ],
    faqs: [
      { q: "Why use flush-mounted cabinets?", a: "To eliminate dust-trapping ledges and floor gaps found in standard cupboards." },
      { q: "Does it compromise wall insulation?", a: "No, cabinet rears are insulated with PUF to maintain the wall's thermal barrier." },
      { q: "Are shelves adjustable?", a: "Yes, heavy-duty internal tracks allow height adjustment for any equipment." }
    ],
    heroImage: "/images/mot-product-page-images/ot-storage-cabinet-images/glass-door-storage-cabinet.webp"
  },
  'environment-monitoring': {
    title: "Environmental Monitoring Systems",
    tagline: "Intelligent Data Logging",
    heroDesc: "Scientific proof of OT safety is mandatory. Absolute control over Temperature, Humidity, and Pressure is required for NABH cleanrooms. Our stations provide real-time tracking and automated logging.",
    atAGlance: ["Real-Time Temp & RH Data", "High-Precision DP Sensors", "BMS & RS-485 Logging", "Audio/Visual Alarm Triggers"],
    configurations: [
      {
        title: "Digital Display Stations",
        desc: ["High-visibility LED screens flush-mounted into SS-304 panels. Output real-time Temp, RH, and Pressure readings.", "Numbers remain Green when safe; aggressive Red flashes with buzzers occur the second a breach happens."],
        image: "/images/mot-product-page-images/environmental-monitoring-images/flush-mounted-digital-display-station.webp"
      },
      {
        title: "Differential Pressure Transmitters",
        desc: ["Industrial-grade sensors convert air pressure into electrical signals for AHU feedback loops.", "Measures exact pressure variance in Pascals between sterile OT and outer corridor."],
        image: "/images/mot-product-page-images/environmental-monitoring-images/differential-pressure-transmitters.webp"
      }
    ],
    engineering: [
      {
        title: "Micro-Processor Sensors",
        desc: "High-sensitivity internal diaphragms detect variances as minute as 0.1 Pascal for real-time telemetry.",
        bullets: ["0.1 Pa Sensitivity", "Real-Time Telemetry"]
      },
      {
        title: "Electronic Actuators",
        desc: "Swift-response motors continuously modulate duct dampers to compensate for sudden door openings.",
        bullets: ["Swift-Response Motors", "Continuous Modulation"]
      },
      {
        title: "BMS Integration",
        desc: "Telemetry data is recorded 24/7, providing unalterable reports for NABH auditors and facility managers.",
        bullets: ["Audit-Ready Logs", "HIS/BMS Connectivity"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "IVF & Embryology Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" },
      { title: "Isolation Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We provide End to End instrumentation solutions, eliminating delays and ensuring quality.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015 for medical monitoring outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Engineering teams travel to your hospital site for precision sensor calibration.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive lifetime maintenance and periodic calibration support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Passing NABH Audits in a Corporate Hospital",
      context: "A hospital had no way to prove historical humidity compliance to auditors during a major inspection.",
      solution: "Deployed Digital Display Stations with BMS logging. Microscope fogging stopped and perfect data logs secured accreditation."
    },
    specs: [
      { label: "Temperature Accuracy", value: "± 0.5°C" },
      { label: "RH Accuracy", value: "± 2% (Capacitive sensor)" },
      { label: "DP Range", value: "-50 Pa to +50 Pa (± 1%)" },
      { label: "Comm Output", value: "RS-485 Modbus RTU Protocol" }
    ],
    faqs: [
      { q: "Why strict humidity control?", a: "High humidity breeds bacteria; low humidity build static electricity that shocks sensitive gear." },
      { q: "Can data be exported?", a: "Yes, BMS integration logs data 24/7 for unalterable audit-ready reports." },
      { q: "Does it adjust cooling?", a: "Yes, sensors command the AHU speed via VFD feedback loops to re-stabilize the room." }
    ],
    heroImage: "/images/mot-product-page-images/environmental-monitoring-images/flush-mounted-digital-display-station.webp"
  },
  'room-lighting': {
    title: "Peripheral Cleanroom Lights",
    tagline: "Ambient Illumination",
    heroDesc: "General lighting in an OT cannot be ordinary. Standard fixtures gather dust and disrupt airflow. We manufacture flush-mounted, IP65-rated Peripheral LED panels.",
    atAGlance: ["IP65 Dust & Moisture Proof", "Flush Ceiling Integration", "Aerodynamic LAF Profile", "Anti-Glare Diffusers"],
    configurations: [
      {
        title: "Rectangular IP65 LED Panels",
        desc: ["Designed to sit perfectly flush with modular ceilings. Prevents air turbulence and dust accumulation.", "Hermetically sealed with silicon gaskets to withstand aggressive chemical deep cleaning and fumigation."],
        image: "/images/mot-product-page-images/ot-peripheral-led-light-images/rectangular-peripheral-led-light.webp"
      },
      {
        title: "Dimmable Cleanroom Arrays",
        desc: ["Linked to Surgeon Control Panels for stepless dimming. Allows doctors to lower ambient light during endoscopy.", "Features high CRI (>90) for accurate skin tone and tissue color representation in the sterile zone."],
        image: "/images/mot-product-page-images/ot-peripheral-led-light-images/rectangular-peripheral-led-light.webp"
      }
    ],
    engineering: [
      {
        title: "Flush-Mount Aerodynamics",
        desc: "Lights sit perfectly flat to ensure LAF pushes sterile air perfectly downward without disruption.",
        bullets: ["Zero Air Turbulence", "Prevents Dust Accumulation"]
      },
      {
        title: "IP65 Sealed Housings",
        desc: "entirely impervious to dust ingress and can withstand washing and harsh chemical fumigation agents.",
        bullets: ["Fumigation Safe", "Water Jet Protected"]
      },
      {
        title: "Anti-Glare Diffusers",
        desc: "Frosted polycarbonate diffusers provide soft, flicker-free light that prevents eye fatigue during long surgeries.",
        bullets: ["Reduces Eye Strain", "Soft, Uniform Illumination"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "IVF & Embryology Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "CSSD Processing", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End lighting solutions, we eliminate delays and ensure quality.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015 standards for medical facilities.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Engineering teams travel to your site anywhere in India for installation.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide comprehensive lifetime maintenance and spare parts support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Resolving LAF Turbulence",
      context: "A clinic failed validation because bulky commercial LED panels created air vortices that pulled in contaminants.",
      solution: "Retrofitted with Flush-Mounted IP65 Panels. Airflow became an undisturbed 'piston effect', passing validation."
    },
    specs: [
      { label: "Ingress Protection", value: "IP65 / IP66 Rated" },
      { label: "Color Temperature", value: "6000K - 6500K (Daylight)" },
      { label: "Diffuser Material", value: "Frosted Polycarbonate (Anti-glare)" },
      { label: "CRI Rating", value: "Ra > 90 (Accurate Tissue Rendering)" }
    ],
    faqs: [
      { q: "Why use IP65 lights?", a: "They are hermetically sealed against dust and moisture, surviving daily chemical washdowns." },
      { q: "Do they disrupt LAF?", a: "No, their flush aerodynamic profile ensures sterile air travels downwards without turbulence." },
      { q: "How do they differ from Dome lights?", a: "Dome lights are for the surgical cavity; peripheral lights provide ambient room sight." }
    ],
    heroImage: "/images/mot-product-page-images/ot-peripheral-led-light-images/rectangular-peripheral-led-light.webp"
  },
  'surgical-lights': {
    title: "Shadowless Surgical OT Lights",
    tagline: "Uncompromised Vision",
    heroDesc: "True surgical precision requires absolute visual clarity. Poor lighting interprets tissue color incorrectly and generates heat. Our lights deliver shadowless, cold LED illumination.",
    atAGlance: ["True Shadowless Tech", "HD Camera Ready", "Cold LED Illumination", "Adjustable Focus & Lux"],
    configurations: [
      {
        title: "Ceiling-Mounted Double Dome",
        desc: ["High-intensity LED technology (up to 1,60,000 Lux). Fixed overhead for stable, multi-angle illumination.", "Eliminates infrared heat to ensure exposed tissues do not dry out during procedures."],
        image: "/images/mot-product-page-images/ot-light-images/ceiling-mounted-led-light.webp"
      },
      {
        title: "Mobile / Portable OT Lights",
        desc: ["Indispensable for flexible deployment. Mounted on anti-static castors with built-in battery backups.", "Exact same shadowless technology as ceiling models, perfect for emergency trauma bays."],
        image: "/images/mot-product-page-images/ot-light-images/mobile-portable-ot-lights.webp"
      }
    ],
    engineering: [
      {
        title: "Shadowless Technology",
        desc: "Strategic array of intersecting LED beams ensures that if a head blocks one path, others maintain brightness.",
        bullets: ["Deep Cavity Illumination", "Multi-Faceted Reflectors"]
      },
      {
        title: "HD Camera Ready",
        desc: "integrated mounts for 4K surgical cameras. Allows recording and live streaming to auditoriums.",
        bullets: ["4K / HD Video Output", "Live Streaming Capability"]
      },
      {
        title: "Adjustable Focus & Lux",
        desc: "Intuitive sterile handle or digital panel for stepless dimming and variable field diameter.",
        bullets: ["Variable Field Diameter", "Stepless Intensity Dimming"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We handle the entire OT lighting project, ensuring absolute clinical precision.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015 standards for surgical safety.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Our teams travel to your hospital site anywhere in the country for setup.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive support for the lifetime of your surgical lighting infrastructure.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Cavity Shadows in a Teaching Hospital",
      context: "Halogen lights were generating heat and students couldn't see the surgical site due to heavy shadowing.",
      solution: "Upgraded to Ceiling Double Dome LEDs with 4K Camera. Shadow-free feed restored education quality."
    },
    specs: [
      { label: "Max Illumination", value: "Up to 1,60,000 Lux" },
      { label: "Color Temp", value: "3500K - 5000K (Adjustable)" },
      { label: "Color Rendering (CRI)", value: "> 95 Ra" },
      { label: "LED Lifespan", value: "> 50,000 Hours" }
    ],
    faqs: [
      { q: "What makes it shadowless?", a: "Multiple intersecting LED beams that compensate if one path is blocked by a head or hand." },
      { q: "Why LED over Halogen?", a: "LEDs provide 'cold illumination'—zero heat and much longer lifespans." },
      { q: "Can a camera be added?", a: "Yes, our 'Camera-Ready' domes are pre-wired for central HD/4K cameras." }
    ],
    heroImage: "/images/mot-product-page-images/ot-light-images/ceiling-mounted-led-light.webp"
  },
  'surgical-tables': {
    title: "Surgical OT Tables",
    tagline: "Precision Positioning",
    heroDesc: "The literal foundation of patient care. A surgeon requires absolute anatomical access and perfect stability. We manufacture platforms from heavy-duty electro-hydraulic bases to radiolucent carbon fiber tops.",
    atAGlance: ["C-Arm & X-Ray Compatible", "High Weight Capacity", "Precise Auto-Positioning", "Multi-Specialty Attachments"],
    configurations: [
      {
        title: "C-Arm Compatible Table",
        desc: ["Radiolucent carbon fiber or phenolic resin top. Offset pillar design provides unobstructed 360-degree imaging.", "Allows C-Arm machine to glide freely under the patient without metal interference during live surgery."],
        image: "/images/mot-product-page-images/ot-tables-images/c-arm-compatible-ot-table.webp"
      },
      {
        title: "Electro-Hydraulic Table",
        desc: ["Combines electric precision with hydraulic lifting power (300+ kg). smooth and stable articulations.", "Integrated battery backup ensures full movement control even during total power failure."],
        image: "/images/mot-product-page-images/ot-tables-images/electro-hydraulic-ot-table.webp"
      }
    ],
    engineering: [
      {
        title: "Heavy-Duty Lifting Column",
        desc: "Central pillar using SS-304 and enclosed linear actuators for zero micro-vibrations during delicate surgery.",
        bullets: ["Extreme Weight Capacity", "Zero Micro-Vibrations"]
      },
      {
        title: "Anti-Static Memory Mattress",
        desc: "High-density memory foam wrapped in anti-static, waterproof PU cover to prevent pressure ulcers.",
        bullets: ["Prevents Pressure Ulcers", "Detachable for Sanitization"]
      },
      {
        title: "Digital Remote & Override",
        desc: "Wired/wireless remote control with an integrated mechanical override for absolute emergency safety.",
        bullets: ["Precision Digital Remote", "Fail-Safe Manual Override"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "Trauma Centers", image: "/images/key-application-images/icu.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We provide complete OT Table solutions, ensuring clinical precision and safety.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015 standards for surgical facilities.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Our teams travel directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive maintenance support for all table mechanisms.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Empowering Complex Orthopedics in Punjab",
      context: "A hospital's old table blocked their new C-Arm X-Ray machine, forcing staff to move patients mid-surgery.",
      solution: "Installed C-Arm Compatible Electro-Hydraulic Table. Carbon fiber top allowed head-to-toe imaging without movement."
    },
    specs: [
      { label: "Column Material", value: "Medical Grade SS-304" },
      { label: "Load Capacity", value: "300+ kg (Heavy-Duty)" },
      { label: "Articulations", value: "Trendelenburg, Lateral Tilt, Back/Leg Adj" },
      { label: "Control System", value: "Digital Remote + Manual Override" }
    ],
    faqs: [
      { q: "What is 'C-Arm Compatible'?", a: "Radiolucent tops (X-ray transparent) and offset pillars that allow imaging scanners free access." },
      { q: "Electro-Hydraulic vs Electric?", a: "Hydraulic offers massive weight lifting; Electric offers zero-oil precise digital motors." },
      { q: "Is there battery backup?", a: "Yes, all powered models include SMF backups for continuous use during outages." }
    ],
    heroImage: "/images/mot-product-page-images/ot-tables-images/fully-electric-ot-table1.webp"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = motProducts[slug];
  if (!data) return { title: 'Product Not Found' };
  return {
    title: `${data.title} | Modular OT Specialists | MedGenz`,
    description: data.heroDesc,
  };
}

export default async function MOTProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = motProducts[slug];

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
      "url": `https://www.medgenz.com/services/modular-operation-theatre/${slug}`,
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
              <li><Link href="/services/modular-operation-theatre" className="hover:text-brand-600 transition-colors">Modular OT</Link></li>
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
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Console <span className="text-brand-600">Configurations</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg text-center font-light">Every configuration is precision-manufactured and modularly designed to fit your exact demands.</p>
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
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Anatomy of <span className="text-brand-600">Safety</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg text-center font-light">Our systems are governed by extreme safety protocols to ensure zero-defect, fail-safe operation.</p>
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
                <div className="p-4 text-center flex-grow flex items-center justify-center">
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
                  <span className="text-sm md:text-base pr-4 flex items-center gap-3 text-left font-bold">
                    <Zap className="w-5 h-5 text-brand-600 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className="transition duration-300 group-open:-rotate-180 shrink-0 text-brand-600 w-5 h-5" />
                </summary>
                <div className="px-3 md:px-5 pb-3 md:pb-5 pt-1 text-gray-600 text-xs md:text-base leading-relaxed border-t border-gray-100 mt-2 font-light">
                  <p className="mt-1 md:mt-2 ml-6 md:ml-9">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Certifications />
      <ClientMarquee />
      <ECGCTA />
    </div>
  );
}
