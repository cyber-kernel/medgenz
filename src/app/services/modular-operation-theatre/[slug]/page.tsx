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
    heroDesc: "In a sterile environment, walls are your primary defense against contamination. Traditional tiled or painted brick walls develop microscopic cracks that harbor dangerous bacteria. Whether you are executing a full modular ot wall panel setup or a specialized operating room wall panel setup, we manufacture hermetically sealed, anti-bacterial wall surfaces engineered strictly for Class 100 cleanrooms and complete NABH-compliance.",
    atAGlance: ["SS-304 & PPGI Options", "High-Density PUF Core", "Seamless RTV Joints", "Class 100 / NABH Compliant"],
    configurations: [
      {
        title: "SS-304 Stainless Steel Panels",
        desc: [
          "The gold standard for world-class surgical facilities. Stainless Steel 304 provides an ultra-hard, completely non-porous surface that is inherently immune to rust, corrosion, and the harshest chemical disinfectants used by hospital cleaning staff.",
          "The joints are perfectly sealed with antibacterial silicone for a monolithic finish, recommended for primary Operation Theatres, Cath Labs, and environments where absolute longevity and zero-particle shedding are the highest priorities."
        ],
        image: "/images/mot-product-page-images/wall-panel-images/ss-304-wall-panel.webp"
      },
      {
        title: "PPGI Modular Wall Panels",
        desc: [
          "PPGI Modular Wall Panels (Pre-Painted Galvanized Iron) remain the industry standard and most cost-effective choice for modern NABH-compliant setups across India. These high-strength panels provide a beautiful, structurally rigid inner skin for the operation theatre.",
          "Ideal for budget-conscious OT projects, Intensive Care Units (ICUs), scrub areas, and sterile corridors. The coating repels bacteria and allows for easy, wipe-down sanitization between surgical procedures."
        ],
        image: "/images/mot-product-page-images/wall-panel-images/ppgi-wall-panel.webp"
      },
      {
        title: "High-Density PUF Core Insulation",
        desc: [
          "Whether you choose SS-304 or PPGI, the outer metal sheets are just the skin. The true engineering lies inside. The panels are injected with high-density Polyurethane Foam (PUF) under immense pressure.",
          "The PUF core provides massive structural rigidity, making the walls impact-resistant. More importantly, it acts as a superior thermal barrier to lock in the AHU's cooling, and provides excellent acoustic dampening, keeping the OT completely silent."
        ],
        image: "/images/mot-product-page-images/wall-panel-images/puff-of-wall-panel.webp"
      },
      {
        title: "Lead-Lined Radiation Panels",
        desc: [
          "Modern surgical procedures frequently involve live imaging, utilizing C-Arms and specialized X-Ray equipment directly over the operating table. This exposes the surgical staff in adjacent rooms to dangerous scatter radiation.",
          "We manufacture specialized panels integrated with a 1mm to 2mm thick continuous lead sheet embedded within the core. This creates a highly effective, invisible radiation shield, ensuring absolute safety for the doctors and nurses outside the OT."
        ],
        image: "/images/mot-product-page-images/wall-panel-images/lead-lined-radtiation-panel.webp"
      }
    ],
    engineering: [
      {
        title: "3D Corner Coving",
        desc: "We completely eliminate 90-degree angles where dust accumulates. We use specialized curved aluminum or SS-304 coving at all wall-to-wall, wall-to-ceiling, and wall-to-floor junctions, ensuring a 100% easily washable, bowl-like room surface.",
        bullets: ["Eliminates Dead Corners", "Rapid Room Sterilization"]
      },
      {
        title: "Anti-Bacterial Coating",
        desc: "PPGI variants are electrostatically powder-coated with an epoxy-polyester resin. This specialized paint is infused with silver-ion technology that actively disrupts the cellular division of bacteria, fungi, and mold upon contact.",
        bullets: ["Active Microbial Resistance", "Scratch & Dent Resistant"]
      },
      {
        title: "RTV Silicone Sealing",
        desc: "After the interlocking panels are erected, every single micro-gap is flush-filled with Room Temperature Vulcanizing (RTV) medical-grade silicone. This guarantees the OT maintains its positive pressure seal without any air leakage.",
        bullets: ["Hermetic Airtight Seal", "Anti-Fungal Properties"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Hybrid Cath Labs & OTs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "CSSD & Sterile Corridors", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End Wall Panel solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Overcoming OT Contamination in a Legacy Hospital",
      context: "A 20-year-old hospital was experiencing an unacceptable rate of post-operative infections. Air quality audits revealed that their traditional painted brick walls were harboring deep-seated fungal spores inside microscopic cracks, entirely compromising their new HVAC system's efforts.",
      solution: "We performed a rapid, dry-construction retrofit. Without demolishing the existing structure, we erected a self-supporting shell of SS-304 Modular Wall Panels inside the room. The corners were finished with smooth aluminum coving, and the joints sealed with antibacterial silicone. Post-installation swabs showed a 99.9% reduction in surface microbes, instantly securing their cleanroom certification."
    },
    specs: [
      { label: "Panel Construction", value: "SS-304, PPGI, or EGP PUF Sandwich Panels" },
      { label: "Standard Dimensions", value: "Custom heights (up to 3000mm) x Standard widths (1200mm)" },
      { label: "Surface Coating", value: "Anti-microbial, anti-fungal epoxy polyester powder coating (50-70 microns)" },
      { label: "Corner Transitions", value: "Aluminum/SS coving with 3D corner pieces (No 90-degree angles)" },
      { label: "Optional Upgrades", value: "AERB-compliant Lead Lining (1mm - 2mm), Acoustic Insulation" }
    ],
    faqs: [
      { q: "Why can't standard brick and painted walls be used in an Operation Theatre?", a: "Brick walls have microscopic pores, crack over time, and feature 90-degree corners. These imperfections act as breeding grounds for bacteria and fungus. Modular panels create a completely flush, non-porous, and seamless environment that is perfectly sterile." },
      { q: "What is the difference between SS-304 and PPGI wall panels?", a: "SS-304 (Stainless Steel) is the absolute highest grade, completely rust-proof, and highly resistant to harsh surgical chemicals. PPGI (Pre-Painted Galvanized Iron) is a highly durable, cost-effective alternative coated with antibacterial paint, suitable for many cleanroom applications." },
      { q: "Can you install modular panels over existing brick walls?", a: "Yes, our modular wall panel setups are designed for both new constructions and retrofitting. We create an independent, structurally sound inner skin that covers existing brick or tiled walls without requiring major demolition." },
      { q: "How are the panel joints sealed to prevent bacteria?", a: "We leave a precise 3mm to 5mm gap between panels during installation. This gap is then flush-filled with a medical-grade, anti-fungal Room Temperature Vulcanizing (RTV) silicone sealant, creating a 100% seamless and airtight surface." },
      { q: "Is the coating scratch resistant?", a: "Yes, our panels are electrostatically powder-coated with an epoxy-polyester resin that is scratch and dent resistant." },
      { q: "Do you provide lead-lined panels?", a: "Yes, we manufacture specialized panels integrated with a 1mm to 2mm thick continuous lead sheet embedded within the core for radiation protection." }
    ],
    heroImage: "/images/mot-product-page-images/wall-panel-images/ss-304-wall-panel.webp"
  },
  'ceiling-systems': {
    title: "Seamless OT Ceiling Systems",
    tagline: "Infection-Free Infrastructure",
    heroDesc: "In an Operation Theatre, the ceiling is more than a roof—it’s the core of air management. Traditional ceilings with joints act as breeding grounds for micro-bacteria. Whether you are executing a full modular ot ceiling setup or a specialized operating room ceiling setup, we manufacture hermetically sealed, jointless ceilings engineered specifically for Class 100 cleanrooms and NABH-compliance.",
    atAGlance: ["100% Hermetically Sealed", "SS-304 & PPGI Options", "Precision LAF Integration", "Anti-Bacterial Coating"],
    configurations: [
      {
        title: "SS-304 Stainless Steel Ceilings",
        desc: [
          "The absolute premium standard for high-end surgical environments. Our modular ot SS-304 Steel Ceilings offer unmatched durability, extreme rust resistance, and the highest level of sterility available in modern medical engineering. Because stainless steel is naturally non-porous, it entirely prevents microbial colonization on its surface.",
          "During installation, the panels are expertly TIG welded or sealed with high-grade, anti-fungal silicone to create a flawless, monolithic finish. This ensures the ceiling can withstand harsh hospital-grade chemical disinfectants and daily fumigation processes without degrading or staining over decades of use."
        ],
        image: "/images/mot-product-page-images/ot-ceiling-images/ss-304-ceiling.webp"
      },
      {
        title: "PPGI Modular Ceilings",
        desc: [
          "PPGI Modular Ceilings (Pre-Painted Galvanized Iron) are the most popular and cost-effective choice for modern NABH-compliant setups across India. These panels provide exceptional structural rigidity while remaining relatively lightweight, making them perfect for standard multi-specialty hospital wards and operation theatres.",
          "Each PPGI panel is factory-coated with a 50-70 micron layer of anti-bacterial epoxy polyester powder resin. This specialized coating creates a scratch-resistant, ultra-smooth surface that actively repels bacterial growth and particulate accumulation, serving as a highly reliable foundation for Class 100 cleanroom environments."
        ],
        image: "/images/mot-product-page-images/ot-ceiling-images/ppgi-ceiling.webp"
      },
      {
        title: "Aluminum Powder-Coated Ceilings",
        desc: [
          "Ideal for older hospital buildings or retrofitting projects with strict dead-load (weight) limitations on the existing roof structure. Our modular ot Aluminum Powder-Coated Ceilings are incredibly lightweight yet maintain excellent structural integrity over long spans without sagging.",
          "Beyond being naturally non-corrosive, aluminum is highly malleable. This characteristic allows our engineering team to create extremely precise, factory-finished cutouts for specialized surgical dome lights, Laminar Air Flow (LAF) HEPA terminals, and heavy anesthesia pendants without compromising the room's hermetic seal or positive air pressure."
        ],
        image: "/images/mot-product-page-images/ot-ceiling-images/aluminum-powder-coated-ceiling.webp"
      },
      {
        title: "EGP PUF Insulated Panels",
        desc: [
          "For operation theatres situated directly below open terraces, unconditioned floors, or tin roofs, environmental control becomes a major challenge. Using modular ot EGP PUF Insulated Panels is critical in these exact scenarios to maintain surgical standards.",
          "The high-density PUF core provides exceptional thermal insulation, preventing the transfer of external heat into the OT. More importantly, this insulation eliminates the risk of condensation (sweating) on the ceiling surface, keeping the OT climate perfectly regulated, preventing mold growth, and significantly easing the load on your HVAC system."
        ],
        image: "/images/mot-product-page-images/wall-panel-images/puff-of-wall-panel.webp"
      }
    ],
    engineering: [
      {
        title: "Medical Grade Sealants",
        desc: "The joints between the ceiling panels are the most vulnerable points. We utilize specialized medical-grade RTV silicone sealants that are inherently anti-fungal and create an impenetrable, flush barrier, guaranteeing 0% air leakage.",
        bullets: ["Zero Air Leakage", "Anti-Fungal RTV Silicone"]
      },
      {
        title: "Precision LAF Cutouts",
        desc: "We CNC-machine exact apertures into the panels at our manufacturing facility. This ensures that when the Laminar Airflow (LAF) unit and heavy surgical lights are installed, they fit with absolute, gap-free precision into the ceiling grid.",
        bullets: ["Flawless LAF Integration", "Custom Pendant Cutouts"]
      },
      {
        title: "Structural Grid System",
        desc: "Behind the seamless panels lies a heavy-duty extruded aluminum suspension grid. This hidden skeleton is firmly anchored to the true concrete slab above, preventing the ceiling from sagging even when loaded with heavy medical infrastructure.",
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
      { title: "Turnkey Solutions", desc: "By providing End to End panels and ceilings system solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Solving Infection Rates in a Bihar Hospital",
      context: "Recently, a prominent 200-bed multispecialty hospital in Bihar contacted us. Despite rigorous cleaning protocols, their surgical wing was facing recurring post-operative infection spikes. During our site audit, the culprit was obvious: their traditional false ceiling had micro-cracks and unsealed joints around the AC vents, allowing contaminated air from the plenum to bypass the filters.",
      solution: "Our engineering team rapidly deployed a custom-fabricated Seamless PPGI Ceiling System. We laser-cut exact apertures for their new Laminar Air Flow system and surgical pendants, sealing the entire grid with medical-grade, anti-fungal silicone. The result was an immediate drop to a 0% infection rate and a swift NABH clearance for their facility."
    },
    specs: [
      { label: "Panel Core Options", value: "SS-304, PPGI, Aluminum, or PUF (Polyurethane Foam) Insulated" },
      { label: "Panel Thickness", value: "Customizable from 0.8mm to 1.2mm (Metal) / 50mm - 80mm (PUF)" },
      { label: "Surface Coating", value: "Anti-microbial, anti-fungal epoxy polyester powder coating (50-70 microns)" },
      { label: "Joint Sealing", value: "Medical-grade Room Temperature Vulcanizing (RTV) Silicone Sealant" },
      { label: "System Integrations", value: "Pre-engineered cutouts for LAF, Peripheral Lights, and Surgical Pendants" }
    ],
    faqs: [
      { q: "What materials are used in your Seamless OT Ceilings?", a: "We manufacture OT ceilings using premium SS-304 (Stainless Steel), PPGI (Pre-Painted Galvanized Iron), and Aluminum. All materials are coated with anti-bacterial, anti-fungal epoxy paint to ensure absolute sterility." },
      { q: "Can the ceiling integrate with Laminar Air Flow (LAF) systems?", a: "Yes. Our seamless ceilings are custom-engineered with precision cutouts to perfectly house Laminar Air Flow (LAF) units, surgical lighting, and anesthesia pendants without compromising the hermetic seal." },
      { q: "Why is a seamless ceiling important for an Operation Theatre?", a: "In a surgical environment, joints and crevices are breeding grounds for bacteria and dust. A seamless, gap-free ceiling prevents microbial accumulation, ensuring the OT remains a Class 100, NABH-compliant sterile zone." }
    ],
    heroImage: "/images/mot-product-page-images/ot-ceiling-images/ss-304-ceiling.webp"
  },
  'hermetic-doors': {
    title: "Operation Theatre Doors",
    tagline: "100% Sealed Infrastructure",
    heroDesc: "If an Operation Theatre door leaks even 1% of its air, the positive pressure drops and airborne bacteria flood in. Whether you need a standard modular ot door setup using highly durable PPGI and HPL materials, or a fully automated hermetic sealing mechanism, our hospital cleanroom doors guarantee a sterile, NABH-compliant environment.",
    atAGlance: ["100% Hermetic Seal", "Touchless Sensor Entry", "SS-304 / PPGI / HPL Cores", "AERB Lead-Lined Options"],
    configurations: [
      {
        title: "Automatic Hermetic Sliding Doors",
        desc: [
          "The absolute pinnacle of touchless infection control for modern OTs. Equipped with ultra-quiet, heavy-duty micro-processor controlled motors and highly sensitive radar/elbow sensors, surgeons can enter the sterile zone without ever touching a surface. This hospital automatic cleanroom door setup ensures maximum hygiene and minimizes cross-contamination risks.",
          "These doors utilize our signature 3-axis track system. The moment the door slides shut, the mechanism physically drops the door down by 5mm and pushes it inward, crushing the heavy-duty neoprene rubber gaskets seamlessly against the frame and floor to create an absolute 100% vacuum seal, fully compliant with NABH guidelines for positive pressure retention."
        ],
        image: "/images/mot-product-page-images/ot-doors-images/automatic-hermatic-sliding-door.webp"
      },
      {
        title: "Manual Hermetic Sliding Doors",
        desc: [
          "A highly robust, low-maintenance hospital door alternative perfect for secondary cleanrooms, ICU isolation wards, and CSSD areas. These manual sliding operation theatre doors feature the exact same 3-axis drop-down track sealing mechanism as our automated versions, guaranteeing identical positive pressure retention without the need for electrical components.",
          "To ensure effortless operation despite the heavy airtight seal, they are fitted with a specialized, ergonomically designed lever handle. A slight downward push of the handle mechanically breaks the vacuum seal, allowing the heavy door to glide open smoothly on its precision nylon rollers, making it a highly reliable and cost-effective cleanroom door solution."
        ],
        image: "/images/mot-product-page-images/ot-doors-images/manual-hermatic-sliding-door.webp"
      },
      {
        title: "Hermetic Swing Doors (Single & Double)",
        desc: [
          "Designed specifically for hospital corridors and operating theatres where adjacent wall space is too narrow to accommodate the track of a sliding door. Our hospital swing doors are engineered to maximize clear opening width in tight architectural constraints, providing an excellent space-saving cleanroom door option.",
          "Hung on heavy-duty, concealed stainless steel hinges, these doors utilize a multi-point locking mechanism that tightly compresses perimeter silicon gaskets against the customized flush frame, preventing any sterile air leakage. Available in both single leaf and double leaf OT door configurations, they offer versatile positive pressure retention for any layout."
        ],
        image: "/images/mot-product-page-images/ot-doors-images/hermatic-swing-door-single-leaf.webp"
      },
      {
        title: "PPGI Modular OT Doors",
        desc: [
          "Pre-Painted Galvanized Iron (PPGI) doors are the industry standard for NABH-compliant setups across India. These cost-effective hospital doors provide exceptional structural rigidity, utilizing a high-density PUF (polyurethane foam) core for superior thermal and acoustic insulation inside the operating room.",
          "Our PPGI cleanroom doors are coated with a specialized anti-bacterial epoxy polyester powder finish. This creates an ultra-smooth, scratch-resistant surface that actively repels bacterial growth and particulate accumulation, making these rust-resistant operation theatre doors ideal for rapid chemical wipe-downs between surgical procedures."
        ],
        image: "/images/mot-product-page-images/ot-doors-images/ppgi-modular-ot-door.webp"
      },
      {
        title: "HPL (High-Pressure Laminate) Doors",
        desc: [
          "For hospital corridors and operating rooms experiencing extreme traffic and heavy impacts from stretchers, trolleys, and medical equipment, HPL hospital doors are the ultimate solution. They provide unparalleled durability without compromising on clinical hygiene.",
          "Constructed from compact High-Pressure Laminate sheets pressed over an aluminum framework and PUF core, these premium laminate cleanroom doors are virtually indestructible. They offer extreme scratch, dent, and moisture resistance, ensuring these impact-resistant medical doors maintain a beautiful, high-end aesthetic finish that elevates the entire surgical wing for decades."
        ],
        image: "/images/mot-product-page-images/ot-doors-images/hpl-door.webp"
      },
      {
        title: "SS-304 Stainless Steel Doors",
        desc: [
          "The premium choice for environments requiring absolute maximum sterility, such as advanced organ transplant OTs, burn units, or highly corrosive environments. Our stainless steel hospital doors represent the highest tier of medical infrastructure.",
          "Manufactured from high-grade SS-304 stainless steel, these hygienic SS-304 OT doors are naturally non-porous and completely rust-proof. These corrosion-resistant cleanroom doors easily withstand the harshest medical-grade cleaning agents and aggressive daily fumigation cycles without any surface degradation, peeling, or staining over their lifetime."
        ],
        image: "/images/mot-product-page-images/ot-doors-images/stainless-steel-door.webp"
      },
      {
        title: "Lead-Lined Radiation Proof Doors",
        desc: [
          "For Hybrid Operation Theatres, Orthopedic Centers, and Cath Labs operating heavy C-Arm machines or intraoperative CT scanners, standard doors pose a severe radiation risk to staff. We manufacture specialized lead-lined radiation proof doors to block harmful X-rays while perfectly maintaining the room's sterile hermetic seal.",
          "Available in both categories (Manual and Automatic), these doors feature a continuous 1mm to 2mm sheet of high-purity lead sandwiched within the core, paired with lead-glass vision panels for 100% AERB-compliant radiation shielding. The Automatic variant utilizes a heavy-duty motor specifically calibrated to handle the extreme weight of the lead without straining, ensuring smooth touchless entry."
        ],
        image: "/images/mot-product-page-images/ot-doors-images/lead-lined-radiation-proof-door.webp"
      }
    ],
    engineering: [
      {
        title: "3-Axis Drop-Down Track",
        desc: "The secret to a true hermetic seal. When the door closes, the specialized track physically drops the heavy door downwards and pushes it inward, crushing the perimeter gaskets perfectly flush against the frame and the floor.",
        bullets: ["100% Vacuum Seal", "Positive Pressure Retention"]
      },
      {
        title: "Micro-Processor Motors",
        desc: "Our automatic variants are driven by heavy-duty, ultra-quiet brushless DC motors. They feature intelligent micro-processors that detect obstacles, automatically reversing the door to prevent injury to staff or damage to medical equipment.",
        bullets: ["Silent Operation", "Intelligent Auto-Reverse"]
      },
      {
        title: "High-Density PUF Core",
        desc: "The core of the door panel is injected with high-density Polyurethane Foam (PUF). This provides massive structural rigidity to withstand stretcher impacts, while acting as a superior thermal and acoustic barrier for the OT.",
        bullets: ["Excellent Acoustic Dampening", "High Impact Resistance"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Hybrid Cath Labs (Lead-Lined)", image: "/images/key-application-images/cath-lab.webp" },
      { title: "Isolation Wards & ICUs", image: "/images/key-application-images/icu.webp" },
      { title: "CSSD & Sterile Corridors", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End panel and door solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Securing Positive Pressure in a UP Clinic",
      context: "A newly built multi-specialty surgical clinic in Uttar Pradesh was on the verge of failing their critical NABH inspection. Despite having a state-of-the-art Laminar Air Flow system, the HVAC engineers could not maintain the required positive pressure in the OT. The sterile air was rapidly escaping through the gaps of their standard wooden swing doors.",
      solution: "Our engineering team rapidly dismantled the outdated frames and installed our Automatic Hermetic Sliding Doors with high-impact HPL finish. The moment our 3-axis drop-down seal engaged, the room achieved perfect positive pressure within 10 minutes, securing their compliance certification."
    },
    specs: [
      { label: "Outer Skin Materials", value: "PPGI (Pre-Painted Galvanized Iron), HPL (High-Pressure Laminate), or SS-304" },
      { label: "Door Core Material", value: "High-density injected PUF (Polyurethane Foam) for thermal & acoustic insulation" },
      { label: "Hermetic Sealing Mechanism", value: "3-Axis drop-down track with continuous Neoprene/Silicone gaskets" },
      { label: "Automation Sensors", value: "Touchless magic switch, radar foot sensors, or elbow push pads" },
      { label: "Vision Panel", value: "Double-glazed flush view window (Lead-glass available for X-Ray)" }
    ],
    faqs: [
      { q: "What is the difference between PPGI and HPL OT doors?", a: "PPGI doors are made of Pre-Painted Galvanized Iron, offering excellent rigidity and a smooth, anti-bacterial metal finish. HPL doors use High-Pressure Laminate, which provides extreme impact and scratch resistance, making them highly durable against stretcher and trolley collisions." },
      { q: "What makes an OT door 'Hermetically Sealed'?", a: "A hermetic seal refers to the mechanism, not the material. Our hermetic sliding doors use a 3-axis track that drops the door down and inward as it closes, crushing the rubber gaskets against the frame and floor to create a 100% airtight vacuum seal." },
      { q: "Do you provide lead-lined doors for X-Ray rooms?", a: "Yes, we integrate 1mm to 2mm thick lead shielding into both our PPGI and HPL door cores for Cath Labs and Orthopedic Operation Theatres to ensure full AERB radiation compliance." }
    ],
    heroImage: "/images/mot-product-page-images/ot-doors-images/automatic-hermatic-sliding-door.webp"
  },
  'flooring-systems': {
    title: "Modular OT Flooring Systems",
    tagline: "Infection-Free Infrastructure",
    heroDesc: "A Modular Operation Theatre is only as sterile as its foundation. We supply and execute perfectly leveled, monolithic flooring systems engineered strictly for Class 100 cleanrooms. From Conductive ESD Vinyl for Cath Labs to Heavy-Duty Self-Leveling Compound Flooring for Orthopedics, we ensure 100% NABH-compliance.",
    atAGlance: ["Self-Leveling Compound Base", "Anti-Static (ESD) Integration", "Heat-Welded Seamless Joints", "High Chemical Resistance"],
    configurations: [
      {
        title: "Conductive ESD Vinyl Flooring",
        desc: [
          "The absolute gold standard for advanced, high-tech modular OTs. This system features a 2mm thick homogeneous vinyl sheet infused with carbon compounds.",
          "During installation, a network of conductive copper tape grids is laid underneath the sheets and connected to the building's central earthing system. It continuously drains static electricity generated by staff movement, protecting sensitive micro-electronics in anesthesia workstations and patient monitors from calibration errors or damage. This makes it the absolute best choice for Super-Specialty OTs, Cardiac Wings, & Cath Labs."
        ],
        image: "/images/mot-product-page-images/ot-flooring-images/conductive-vinyl-flooring.webp"
      },
      {
        title: "Standard Homogeneous Vinyl",
        desc: [
          "Manufactured from the exact same surgical-grade, 2mm thick PVC composition as our ESD lines, but without the underlying copper grid or internal conductive fibers.",
          "Because the material is completely dense and smooth, we heat-weld the seams together using matching PVC rods to form an unbroken, fluid-tight surface across the entire room. It offers identical resistance to blood, iodine, and heavy cleaning chemicals, making it the most cost-effective and reliable solution for spaces where high-frequency static discharge is not a critical risk. This makes it the absolute best choice for General Surgery OTs, Scrub Stations, & Recovery Rooms."
        ],
        image: "/images/mot-product-page-images/ot-flooring-images/standard-homogeneous-vinyl.webp"
      },
      {
        title: "Self-Leveling Compound Flooring",
        desc: [
          "While vinyl is highly resilient, it can occasionally tear, indent, or buckle under the extreme localized point-loads of heavy surgical equipment. For these specific environments, we install poured self-leveling compound systems.",
          "This is a specialized liquid matrix poured directly over the mechanically prepared sub-base on-site. It chemically cures into a dense, 3mm to 4mm thick seamless slab. Having absolute zero joints or weld-lines anywhere in the room, it is 100% monolithic, completely impervious to fluids, and boasts immense structural impact resistance against rolling loads. This makes it the absolute best choice for Orthopedic OTs, Heavy-Traction Rooms, & Trauma Bays."
        ],
        image: "/images/mot-product-page-images/ot-flooring-images/self-leveling-modular-ot.webp"
      }
    ],
    engineering: [
      {
        title: "Seamless 4-Inch Coving",
        desc: "To maintain absolute NABH compliance and a true cleanroom environment, every flooring variant we install features a seamless 4-inch wall cove. We physically curve the vinyl or compound flooring up the edges of the room to connect smoothly with our modular wall panels.",
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
      { title: "Turnkey Solutions", desc: "From sub-base grinding to final panel integration, we handle the entire cleanroom floor execution.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & NABH Certified", desc: "Our materials and installation processes strictly adhere to NABH norms for sterile medical facilities.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Protecting Sensitive Equipment in Mumbai",
      context: "A hospital's cardiac monitors were experiencing calibration glitches due to static buildup on tiled floors.",
      solution: "Installed Conductive ESD Vinyl with copper grid earthing. Interference vanished instantly, ensuring surgical precision."
    },
    specs: [
      { label: "Material Thickness", value: "Vinyl Sheets: 2.0mm | Compound Flooring: 3.0mm - 4.0mm" },
      { label: "Seam / Joint Profile", value: "Vinyl: 100% Heat-Welded PVC Rods | Compound Flooring: Joint-Free Monolithic" },
      { label: "Chemical Resistance", value: "Resistant to Betadine, blood, iodine, and hospital-grade detergents" },
      { label: "ESD System Integration", value: "Carbon-infused layers with full copper grid earthing network" },
      { label: "Wall Integration", value: "Continuous 4-Inch wall coving seamlessly mating with modular panels" }
    ],
    faqs: [
      { q: "Can new vinyl or compound flooring be applied over our existing hospital tiles?", a: "Yes, but surface preparation is critical. We do not lay flooring directly over old tiles. Our engineers mechanically grind the existing surface and pour a specialized self-leveling base compound to ensure the floor is perfectly flat and porous before installing the final vinyl topcoat or compound flooring." },
      { q: "What happens if an orthopedic surgery table rolls over the flooring?", a: "For standard OTs, our 2mm heat-welded homogeneous vinyl easily supports general surgical equipment. However, for heavily loaded Orthopedic or Trauma tables, we strongly recommend our 3mm-4mm Heavy-Duty Self-Leveling Compound Flooring, as it will not indent, tear, or buckle under extreme point-loads." },
      { q: "How is the ESD Vinyl actually grounded?", a: "Before laying the conductive vinyl, we install a highly conductive copper tape grid in a specific layout across the subfloor. This grid is then wired directly into a dedicated earth pit in the hospital's electrical grounding system, ensuring all static is safely dissipated away from sensitive machines." }
    ],
    heroImage: "/images/mot-product-page-images/ot-flooring-images/standard-homogeneous-vinyl.webp"
  },
  'laminar-airflow': {
    title: "Laminar Air Flow (LAF) Systems",
    tagline: "Class 100 / ISO 5 Sterile Zones",
    heroDesc: "Surgical Site Infections (SSI) are largely caused by airborne bacteria settling on the sterile field. A hospital laminar air flow system prevents this by flooding the operating table with a continuous, unidirectional downward flow of ultra-pure, HEPA-filtered air. We manufacture and install the complete LAF plenum architecture to guarantee absolute NABH-compliance.",
    atAGlance: ["ISO 5 / Class 100 OT", "Unidirectional Piston Flow", "H14 HEPA Filtration", "Aluminum CG Diffusers"],
    configurations: [
      {
        title: "Vertical Laminar Air Flow (VLAF) Systems",
        desc: [
          "In high-acuity healthcare infrastructure, ceiling-mounted Vertical Laminar Air Flow (VLAF) systems are the absolute standard. We manufacture these units to integrate flawlessly into your modular OT ceiling, suspended directly above the surgical table.",
          "The VLAF plenum pushes H14 HEPA-filtered air straight down in a clean, unidirectional \"piston effect.\" This instantly washes away aerosolized bacteria and surgical dust, forcing contaminants toward the floor where they are safely extracted by corner Return Air Risers."
        ],
        image: "/images/mot-product-page-images/ot-laf-images/laminar-airflow-1.webp"
      },
      {
        title: "SS-304 / Aluminum LAF Plenums",
        desc: [
          "Our plenums are constructed in either medical-grade SS-304 stainless steel or heavy-duty powder-coated aluminum to suit the hospital's specific environmental conditions. Both materials are entirely non-corrosive and designed to withstand the high static pressure generated by the AHU.",
          "Each unit features a micro-perforated CG screen that ensures the air exits the plenum in a perfectly vertical column with zero turbulence, maintaining the critical 'Laminar' state required for Class 100 sterility."
        ],
        image: "/images/mot-product-page-images/ot-laf-images/laminar-airflow-2.webp"
      }
    ],
    engineering: [
      {
        title: "H14 HEPA Filter Banks",
        desc: "The core purification engine. We integrate medical-grade H14 Terminal HEPA filters that actively eliminate 99.995% of airborne particles down to 0.3 microns. They include built-in DOP/PAO ports for annual validation testing without dismantling the ceiling.",
        bullets: ["99.995% Efficiency Rating", "Integrated DOP Testing Ports"]
      },
      {
        title: "CG Diffuser Screens",
        desc: "To prevent \"dumping\" high-velocity air directly onto the surgical site, the LAF uses a micro-perforated Computer Graphics (CG) screen. Made from SS-304 or Aluminum, it perfectly distributes the air to create the smooth, unidirectional \"Laminar\" flow.",
        bullets: ["Zero Air Turbulence", "Micro-Perforated Aluminum/SS"]
      },
      {
        title: "Extruded Housing",
        desc: "The entire unit is housed in a heavy-duty extruded aluminum or SS-304 plenum box. It is rigorously leak-tested and sealed with polyurethane potting to ensure zero untreated air can bypass the HEPA filters and enter the OT.",
        bullets: ["100% Leak-Proof Housing", "Heavy-Duty Extruded Frame"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "IVF & Embryology Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End laminar airflow solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Surgical Infections in a Punjab Neurosurgery Center",
      context: "A newly commissioned neurosurgery and spine center in Punjab was facing a severe crisis. Despite a rigorous cleaning schedule, they were experiencing unacceptable rates of post-operative surgical site infections (SSI). An air-quality audit revealed that standard ceiling AC vents were causing turbulent air to swirl contaminated floor dust directly over the surgical bed.",
      solution: "We retrofitted their OT with a custom Aluminum Powder-Coated LAF Plenum equipped with deep-pleat H14 HEPA filters and a precise CG diffuser screen. We also installed four heavy-duty Return Air Risers near the floor to extract the contaminated air. The unidirectional piston-effect of the new LAF system immediately established a Class 100 sterile zone, permanently eliminating the airborne infection risks."
    },
    specs: [
      { label: "Plenum Material Options", value: "SS-304 Stainless Steel / Heavy-Duty Extruded Aluminum" },
      { label: "Cleanroom Standard", value: "Class 100 (US FED STD 209E) / ISO Class 5" },
      { label: "Air Velocity", value: "90 ± 20 FPM (Feet Per Minute) / 0.45 m/s" },
      { label: "HEPA Filtration Level", value: "H14 Grade (99.997% efficiency at 0.3 micron particle size)" },
      { label: "Operating Noise Level", value: "Less than 60 decibels (Quiet operational threshold)" }
    ],
    faqs: [
      { q: "What is the function of a Laminar Air Flow (LAF) system in an OT?", a: "The LAF system provides a continuous, unidirectional downward flow of ultra-clean, HEPA-filtered air directly over the operating table. This washes away airborne particles and bacteria, preventing them from settling on the surgical wound or sterile instruments." },
      { q: "What is the difference between an AHU and a LAF plenum?", a: "The Air Handling Unit (AHU) conditions, cools, and pushes the air through the ducting. The LAF plenum is the terminal unit located directly inside the OT ceiling. It houses the final HEPA filters and the diffuser screen that actually creates the smooth, non-turbulent 'laminar' flow." },
      { q: "Why are Return Air Risers installed near the floor?", a: "Since the clean air from the LAF pushes downward over the surgical table, the contaminated air carrying dust, skin flakes, and bacteria is forced toward the floor. Return Air Risers are placed at all four bottom corners of the OT to safely extract this contaminated air and route it back to the AHU for purification." }
    ],
    heroImage: "/images/mot-product-page-images/ot-laf-images/laminar-airflow-1.webp"
  },
  'hepa-filtration': {
    title: "Terminal HEPA & ULPA Filtration",
    tagline: "Medical & Cleanroom Grade",
    heroDesc: "While standard Air Handling Units (AHUs) provide initial filtration, microscopic pathogens can still breed within the hospital's ducting network. A Terminal HEPA filter is the absolute final barrier, mounted directly inside the OT ceiling's Laminar Air Flow plenum. It guarantees the air washing over the surgical table is perfectly sterile, achieving strict Class 100 cleanroom standards.",
    atAGlance: ["H14 & U15 ULPA Grades", "Mini-Pleat Technology", "Zero-Leak Aluminum Frame", "Integrated DOP/PAO Ports"],
    configurations: [
      {
        title: "The Mini-Pleat Technology",
        desc: [
          "To process the massive volume of air required for a hospital cleanroom, a filter needs a vast surface area to handle airflow without causing resistance. We utilize advanced Mini-Pleat construction across all our filter grades.",
          "The water-repellent micro-glass media is meticulously folded into tight, shallow pleats, separated by continuous beads of specialized hot-melt adhesive. This design packs the maximum amount of filtration media into a highly compact frame while ensuring extremely low initial pressure drop, thereby reducing the energy strain on your hospital's HVAC blower motors."
        ],
        image: "/images/mot-product-page-images/ot-hepa-filter/mini-pleat-hepa-filter.webp"
      },
      {
        title: "The Extruded Aluminum Frame",
        desc: [
          "A hospital HEPA filter operates under constant, high-velocity air pressure. To prevent the delicate media from warping or breaking its airtight seal, the filter housing is constructed from a heavy-duty extruded aluminum frame.",
          "The internal filter pack is entirely sealed within this aluminum casing using a zero-leak polyurethane potting compound. The frame itself is anodized to prevent any shedding of metal particles, ensuring absolute structural integrity whether it is mounted in an AHU or directly inside the Laminar Air Flow plenum."
        ],
        image: "/images/mot-product-page-images/ot-hepa-filter/aluminum-frame-hepa-filter.webp"
      }
    ],
    engineering: [
      {
        title: "H13 (Medical Grade)",
        desc: "The baseline standard for clinical safety. H13 filters trap 99.95% of particles down to 0.3 microns. They are highly common in general hospital wards, standard pathology labs, and isolation rooms where robust air purification is needed without the extreme stringency of a Class 100 cleanroom.",
        bullets: ["99.95% Efficiency", "General Ward Safety"]
      },
      {
        title: "H14 (High Efficiency)",
        desc: "The strict, non-negotiable standard for Modular Operation Theatres and critical GMP facilities. The H14 high efficiency cleanroom filter eliminates 99.995% of micro-particles. When paired with a Laminar Air Flow plenum, it guarantees an ISO 5 / Class 100 sterile surgical zone, effectively nullifying airborne infection risks.",
        bullets: ["99.995% Efficiency", "ISO 5 Cleanroom Ready"]
      },
      {
        title: "U15 / ULPA",
        desc: "Ultra-Low Penetration Air (ULPA) filters are the absolute apex of air purification. They trap 99.9995% of particles down to an incredibly microscopic 0.12 microns. A U15 ULPA filter is deployed in specialized, extremely high-purity applications like advanced IVF embryology labs, burn units, and organ transplant OTs.",
        bullets: ["99.9995% Efficiency", "Apex Air Purity"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "IVF & Embryology Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" },
      { title: "Isolation Wards & Corridors", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End Hepa-Filteration solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Passing Particle Counts in a UP Hospital",
      context: "A major surgical center in Uttar Pradesh was consistently failing their annual NABH particle count tests. Despite having a new HVAC system, their third-party auditor kept detecting high levels of 0.5-micron particles over the surgical bed, forcing the suspension of major joint replacement surgeries.",
      solution: "Our technical team inspected the ceiling and discovered they were using non-certified, deep-pleat commercial filters with leaky gaskets. We immediately retrofitted their LAF plenum with our H14 Mini-Pleat Terminal HEPA Filters set in zero-leak polyurethane potting. During the re-test via the integrated PAO ports, the particle count dropped to near zero, easily securing their Class 100 certification."
    },
    specs: [
      { label: "Filter Grade standards", value: "H13, H14, U15 (Compliant with EN 1822 Standards)" },
      { label: "H14 Filtration Efficiency", value: "≥ 99.995% at 0.3 Microns (MPPS)" },
      { label: "Filter Media", value: "Water-repellent Micro-Glass Fiber" },
      { label: "Frame Construction", value: "Extruded Anodized Aluminum with Polyurethane Potting" },
      { label: "Initial Pressure Drop", value: "~120 Pa at Rated Airflow (Highly energy efficient)" }
    ],
    faqs: [
      { q: "What is a Terminal HEPA Filter in an Operation Theatre?", a: "A Terminal HEPA Filter is the absolute final stage of air filtration. While standard filters are located inside the remote AHU, the 'terminal' filter is mounted directly inside the OT ceiling's Laminar Air Flow (LAF) plenum, ensuring no contamination can occur between the ducting and the surgical table." },
      { q: "What is the difference between H13, H14, and U15 ULPA filters?", a: "H13 (99.95%) is the medical grade standard for general hospitals and labs. H14 (99.995%) is the high-efficiency standard mandatory for Class 100 Modular Operation Theatres. U15 or ULPA (99.9995%) provides ultra-low penetration for extremely high-purity applications like organ transplants and specialized embryology." },
      { q: "How often should hospital HEPA filters be tested or replaced?", a: "HEPA filters in an OT must undergo a DOP/PAO integrity test annually to maintain NABH compliance. Depending on the hospital's pre-filtration efficiency and OT usage, the actual terminal HEPA filter typically requires replacement every 3 to 5 years." }
    ],
    heroImage: "/images/service assets/mot-page-n-eq-assets/hepa-filter.webp"
  },
  'ahu': {
    title: "Air Handling Units (AHU)",
    tagline: "The Engine of the OT",
    heroDesc: "While the Laminar Air Flow (LAF) system delivers the air, the AHU is the massive engine that creates it. A hospital-grade Air Handling Unit is responsible for cooling, dehumidifying, pressurizing, and pre-filtering the air before it ever reaches the surgical suite. We engineer double-skin thermal break AHUs that guarantee absolute climate control and zero condensation.",
    atAGlance: ["Double-Skin Thermal Break", "High Efficiency EC Plug Fans", "UVGI Coil Sterilization", "Class 100 / ISO 5 Compliant"],
    configurations: [
      {
        title: "Hygienic / Cleanroom AHU",
        desc: [
          "Built specifically for infection control and sterile environments. This is the mandatory base system for all modular OTs, ICUs, and Neonatal Intensive Care Units (NICUs). It is completely engineered around structural integrity and zero microbial growth.",
          "These units feature double-skin PUF insulated panels to prevent any thermal leakage or condensation. The internal surfaces are perfectly smooth, utilizing stainless steel or anti-microbial coatings to prevent bacterial nesting, alongside rigorous multi-stage filtration (Pre + Fine + HEPA) to continuously purify the air loop."
        ],
        image: "/images/mot-product-page-images/ahu-page-images/cleanroom-ahu.webp"
      },
      {
        title: "Laminar Flow AHU System",
        desc: [
          "Deployed almost exclusively for advanced Operation Theatres. This highly specialized Air Handling Unit is engineered with massive motor capacity to handle the intense static pressure required to force air through dense terminal HEPA filters located at the end of the duct line.",
          "It works in perfect tandem with the OT's ceiling plenum to create a unidirectional, vertical airflow over the surgical table. By precisely regulating blower speed via VFDs, the AHU guarantees a strict, uniform air velocity of ~0.25–0.35 m/s, acting as an invisible curtain that washes away surgical contaminants."
        ],
        image: "/images/mot-product-page-images/ahu-page-images/laminar-ahu.webp"
      },
      {
        title: "Treated Fresh Air Unit (TFA)",
        desc: [
          "Critical for maintaining positive pressure and flushing out dangerous anesthetic gases from the OT. A Treated Fresh Air (TFA) unit utilizes 100% outside air with absolutely zero recirculation.",
          "Because raw outdoor air in India is typically hot, humid, and heavily polluted, this heavy-duty unit is equipped with massive, deep-row cooling coils. It handles the immense thermal load of completely cooling, aggressively dehumidifying, and multi-filtering the raw air before constantly pushing it into the OT to maintain the strict +15 Pa pressure requirement."
        ],
        image: "/images/mot-product-page-images/ahu-page-images/fresh-air-ahu.webp"
      },
      {
        title: "Return Air / Recirculation AHU",
        desc: [
          "Designed to dramatically improve energy efficiency and lower hospital electricity bills by reusing already cooled and conditioned air. This unit intelligently mixes return air from the facility with a calculated ratio of fresh outdoor air.",
          "While primarily used in large hospital corridors, lobbies, and general patient wards, it is also used carefully in OT support areas. When deployed in clinical zones, it is always paired with strict HEPA filtration banks and UVGI sterilization to ensure that recirculating the air does not result in bacterial cross-contamination across wards."
        ],
        image: "/images/mot-product-page-images/ahu-page-images/recirculation-ahu.webp"
      }
    ],
    engineering: [
      {
        title: "Double-Skin Thermal Break Housing",
        desc: "The outer cabinet of the AHU is critical. If a standard single-metal cabinet is used, the cold air inside will cause the warm outside air to condense, leading to severe \"sweating,\" internal rust, and water-borne bacteria. We manufacture Double-Skin cabinets separated by a thick layer of high-density injected PUF (Polyurethane Foam), utilizing Thermal Break aluminum profiles to ensure zero temperature transfer and zero condensation.",
        bullets: ["Eliminates Condensation", "High-Density PUF Insulation"]
      },
      {
        title: "EC Plug Fans & Centrifugal Blowers",
        desc: "To push air through dense HEPA filters at the end of the duct line, the AHU must generate massive static pressure. We utilize backward-curved centrifugal blowers or highly advanced EC (Electronically Commutated) Plug Fans. EC fans eliminate belts and pulleys, operating silently. Connected to a VFD, they automatically adjust speed to maintain exact positive pressure inside the OT, saving massive electricity.",
        bullets: ["Massive Static Pressure", "VFD Energy Efficiency"]
      },
      {
        title: "Multi-Stage Pre-Filtration",
        desc: "You cannot send raw outdoor air directly to a delicate HEPA filter; it would clog within days. Our AHUs incorporate a robust multi-stage filtration bank. First, a washable aluminum G4 Pre-Filter (10-20 microns) catches large dust and pollen. Next, a synthetic F7/F9 Fine Bag Filter (1-5 microns) captures finer particulate matter before the air reaches the critical surgical zones.",
        bullets: ["Protects Terminal HEPA", "G4 & F9 Filter Banks"]
      },
      {
        title: "UVGI Coil Sterilization",
        desc: "The cooling coils inside an AHU are constantly wet due to condensation. This dark, damp environment is notorious for breeding mold and biofilm, leading to \"Sick Building Syndrome.\" We install Ultraviolet Germicidal Irradiation (UVGI) lamps directly inside the coil section to physically destroy the DNA of mold and bacteria before the air enters the hospital ductwork.",
        bullets: ["Destroys Mold & Biofilm", "Prevents Sick Building Syndrome"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "IVF & Fertility Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" },
      { title: "Isolation Wards & Corridors", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End HVAC system solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Stabilizing OT Humidity in Maharashtra",
      context: "A major surgical center located near the coast in Maharashtra was struggling with extreme humidity in their operation theatres during the monsoon season. Surgeons were complaining about fogged microscopes, and the high moisture was putting sterile instruments at risk of contamination. Their existing, cheap commercial AHU could not handle the latent heat load.",
      solution: "We designed and installed a massive Double-Skin Thermal Break DX AHU specifically engineered for deep dehumidification. We integrated a specialized wrap-around heat pipe mechanism that pre-cooled the air before the coil and re-heated it after, flawlessly maintaining the strict NABH requirement of 50% ± 5% Relative Humidity without excessive electricity costs."
    },
    specs: [
      { label: "Cabinet Construction", value: "Double Skin with 43mm/50mm PUF insulation (Density 40kg/m³)" },
      { label: "Frame Profile", value: "Extruded Aluminum with Thermal Break design" },
      { label: "Inner Skin Material", value: "SS-304 Stainless Steel or GI Plain Sheet (to prevent rust/shedding)" },
      { label: "Fan Technology", value: "Direct Driven EC Plug Fans (Energy efficient & silent)" },
      { label: "Coil Type", value: "Copper Tubes with Hydrophilic coated Aluminum Fins" }
    ],
    faqs: [
      { q: "What is the difference between an AHU and a Laminar Air Flow (LAF) system?", a: "The AHU is the 'engine' that sits outside the OT. It cools, dehumidifies, pressurizes, and pre-filters the air. The LAF is the 'delivery' unit inside the OT ceiling that pushes this treated air smoothly over the patient through final HEPA filters." },
      { q: "Why do hospital AHUs need a 'Double Skin Thermal Break'?", a: "A thermal break prevents the cold internal temperature of the AHU from transferring to the outer metal casing. Without it, the AHU would 'sweat' (form condensation), leading to severe rust and potentially introducing water-borne bacteria into the ducting." },
      { q: "What is the role of UVGI in an AHU?", a: "Ultraviolet Germicidal Irradiation (UVGI) lights are installed pointing directly at the AHU's cooling coils. Since coils are naturally damp, they can grow mold. UVGI destroys the DNA of bacteria and fungus on the coils before the air even enters the ductwork." },
      { q: "Why can't standard commercial AHUs be used in a Modular Operation Theatre?", a: "Standard commercial AHUs lack proper thermal break insulation and the high-static blower capacity needed to push air through dense HEPA filters. Using a commercial unit in an OT leads to condensation, mold growth, inadequate air changes, and severe cross-contamination risks." },
      { q: "How do your AHU systems ensure compliance with NABH and ASHRAE 170 guidelines?", a: "Our AHUs are engineered to achieve strict NABH and ASHRAE 170 parameters by maintaining precise temperature (21°C ± 3°C) and relative humidity (50% ± 5%), delivering the mandatory minimum air changes per hour (ACH), and sustaining a positive pressure gradient (+15 Pa) to block contaminated air from entering the sterile zone." }
    ],
    heroImage: "/images/mot-product-page-images/ahu-page-images/cleanroom-ahu.webp"
  },
  'pressure-control': {
    title: "OT Pressure Control Systems",
    tagline: "Advanced OT Monitoring",
    heroDesc: "While the AHU generates the airflow, the Pressure Control System acts as the \"brain and valves.\" An Operation Theatre must maintain constant positive pressure so contaminated air from corridors cannot enter when doors open. We manufacture the precise monitors, motorized dampers, and relief valves required to lock in your OT's Class 100 sterility.",
    atAGlance: ["Maintains +15 Pa Pressure", "Digital Micro-Monitors", "Motorized VAV Dampers", "Automated VFD Feedback"],
    configurations: [
      {
        title: "Differential Pressure Monitors",
        desc: [
          "These act as the \"eyes\" of the entire system. Installed flush into the OT wall (or integrated directly into our Surgeon Control Panels), these digital screens provide real-time readings of the air pressure inside the surgical room compared to the outside corridor.",
          "The monitor is programmed to ensure the room stays within the mandatory NABH positive pressure range of +2.5 Pa to +15 Pa. If the pressure drops below the safe threshold, it instantly triggers an audible and visual alarm, warning the surgical staff of a potential cleanroom breach."
        ],
        image: "/images/mot-product-page-images/environmental-monitoring-images/differential-pressure-transmitters.webp"
      },
      {
        title: "Motorized VAV / VCD Dampers",
        desc: [
          "These act as the \"muscles.\" Variable Air Volume (VAV) or Volume Control Dampers (VCD) are mechanical valves installed deep inside the HVAC ducting network just before the air enters the OT ceiling.",
          "They are fitted with electronic actuators. When the Pressure Monitor detects a drop in room pressure, it sends a signal to these actuators, which automatically open the damper flaps wider, allowing a massive rush of supply air from the AHU to re-pressurize the OT instantly."
        ],
        image: "/images/mot-product-page-images/ot-preassure-control/motorised-vav-vcd-dampers.webp"
      },
      {
        title: "Pressure Relief Dampers (PRD)",
        desc: [
          "This is the critical \"safety valve.\" If an AHU pumps too much air into a perfectly hermetically sealed room, the pressure builds up excessively. Extreme positive pressure makes it physically impossible to push the heavy OT doors open, trapping the staff inside. Worse, it can cause the false ceiling tiles to pop out.",
          "The PRD is usually installed low on the OT wall. It features precisely calibrated, gravity-weighted louvers. The moment the room pressure exceeds +15 Pa, the louvers automatically swing open, venting the excess sterile air safely into the corridor and maintaining perfect equilibrium."
        ],
        image: "/images/mot-product-page-images/ot-preassure-control/preassure-relief-damper.webp"
      },
      {
        title: "VFD Automation Logic (AHU Link)",
        desc: [
          "The ultimate communication link. Instead of just relying on duct dampers, our advanced pressure control systems communicate directly with the Air Handling Unit itself via a Variable Frequency Drive (VFD) panel.",
          "If the OT requires more pressure, the system commands the VFD to literally spin the massive AHU blower motors faster. If the room is over-pressurized, it slows the motors down. This automated feedback loop provides the most stable cleanroom environment possible while drastically reducing electricity costs for the hospital."
        ],
        image: "/images/mot-product-page-images/ot-preassure-control/vdf-panel.webp"
      }
    ],
    engineering: [
      {
        title: "Micro-Processor Sensors",
        desc: "We utilize high-sensitivity internal diaphragms capable of detecting pressure variances as minute as 0.1 Pascal. This guarantees that your digital displays provide flawless, real-time feedback without lag.",
        bullets: ["0.1 Pa Sensitivity", "Real-Time Telemetry"]
      },
      {
        title: "Electronic Actuators",
        desc: "The dampers are driven by swift-response 24V or 230V electronic actuator motors. They continuously modulate the damper louvers open and closed, instantly compensating for any sudden door openings.",
        bullets: ["Swift-Response Motors", "Continuous Modulation"]
      },
      {
        title: "Isolated Control Wiring",
        desc: "To prevent electromagnetic interference from heavy surgical equipment, all data lines connecting the monitors to the AHU VFDs are heavily shielded. This ensures the communication loop never drops during a procedure.",
        bullets: ["EMI Shielded Data Lines", "Flawless VFD Integration"]
      }
    ],
    applications: [
      { title: "Modular OTs", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Isolation Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" },
      { title: "Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "CSSD Cleanrooms", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End pressure control solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Fixing the \"Jammed Door\" Crisis in a Haryana Hospital",
      context: "A newly built surgical hospital in Haryana called us with a bizarre emergency. Their new OT was so heavily pressurized by their AHU that nurses were physically unable to push the swing doors open to get patients out after surgery. The local contractor had completely forgotten to install a pressure regulation system.",
      solution: "Our engineering team rapidly intervened. We cut a precise opening in the modular wall panel and installed a calibrated Pressure Relief Damper (PRD). We then retrofitted a Differential Pressure Monitor linked to the AHU's VFD. Within 24 hours, the room achieved perfect equilibrium. The excess air safely vented into the corridor, and the heavy doors could be opened effortlessly with one hand."
    },
    specs: [
      { label: "Standard Operating Pressure", value: "+2.5 Pascal to +15 Pascal (NABH / CDC compliance range)" },
      { label: "Monitor Display type", value: "Digital LED / Touchscreen LCD (Standalone or Integrated in Surgeon Panel)" },
      { label: "Motorized Damper Type", value: "Extruded aluminum aerofoil blades with 24V / 230V Actuators" },
      { label: "PRD Flap Material", value: "Stainless Steel SS-304 with gravity-weighted calibration mechanism" },
      { label: "Alarm Outputs", value: "Audible Buzzer & Flashing Red LED for High/Low pressure faults" }
    ],
    faqs: [
      { q: "Why must an Operation Theatre have positive pressure?", a: "Positive pressure ensures that the air pressure inside the OT is higher than the surrounding corridors. When the OT door opens, air rushes OUT, preventing airborne bacteria and contaminated dust from entering the sterile surgical field." },
      { q: "What is a Pressure Relief Damper (PRD)?", a: "A PRD is a critical mechanical safety valve usually installed in the OT wall. If the positive pressure inside the room becomes too high (which can jam doors shut or pop ceiling tiles), the weighted flaps of the PRD automatically open to release the excess air." },
      { q: "How does the pressure system communicate with the AHU?", a: "The Differential Pressure Monitor inside the OT constantly measures the room's air pressure. If the pressure drops, it sends a digital signal to the AHU's Variable Frequency Drive (VFD), instantly commanding the blower motors to speed up and push more air." }
    ],
    heroImage: "/images/service-images/pressure-monitor-main.webp"
  },
  'hvac-ducting': {
    title: "HVAC Ducting Networks",
    tagline: "The Air Highways",
    heroDesc: "The ducting network is the respiratory system of the Operation Theatre. If standard commercial ducts are used, air leaks out of joints causing catastrophic drops in positive pressure. Furthermore, poor insulation causes the metal to sweat, breeding toxic mold above the ceiling. We manufacture CNC-fabricated, zero-leak ducting engineered specifically for strict cleanroom applications.",
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
      { q: "Why is standard commercial ducting not suitable for an Operation Theatre?", a: "Standard ducting often leaks up to 10% of its air through poorly sealed joints. In an OT, any loss of air volume results in a drop in positive pressure, which violates NABH cleanroom protocols and allows bacteria to enter the room." },
      { q: "Why must OT HVAC ducts be heavily insulated?", a: "The AHU pumps extremely cold air through the ducts. If uninsulated, the warm air in the ceiling void will cause the metal ducts to 'sweat' (condensation). This moisture will drip onto the OT ceiling and rapidly grow toxic mold. We use thick closed-cell nitrile rubber to prevent this completely." },
      { q: "What is a Fire Damper in an HVAC network?", a: "A Fire Damper is a critical safety device installed inside the duct where it passes through walls. In the event of a hospital fire, a fusible link melts from the heat, snapping the damper shut instantly. This prevents the HVAC system from pumping toxic smoke and fire into the OT." },
      { q: "How are the ducts joined?", a: "Using slip-on flanges with 5mm Neoprene gaskets and medical-grade RTV sealant to ensure zero air leakage." },
      { q: "Do you perform leak testing?", a: "Yes, all our HVAC ducting networks are rigorously leak-tested prior to ceiling closure to guarantee absolute zero pressure loss." },
      { q: "Is the insulation fire-retardant?", a: "Yes, we use Class 'O' fire-retardant nitrile rubber for insulation." }
    ],
    heroImage: "/images/mot-product-page-images/ot-hvac-ducting/aluminum-hvac-ducting.webp"
  },
  'surgeon-control-panel': {
    title: "Command the Surgical Environment",
    tagline: "The Brain of the OT",
    heroDesc: "In an active surgery, doctors cannot break scrub to adjust disjointed wall switches. We manufacture centralized, flush-mounted digital interfaces that allow the surgical team to command HVAC parameters, lighting, elapsed timers, and medical gas alarms from one single, sterile dashboard.",
    atAGlance: ["Digital Touchscreen Interface", "Real-time Temp & RH Data", "Integrated Gas Alarms", "IP65 Waterproof Sealed"],
    configurations: [
      {
        title: "Flush-Mounted Digital Interface",
        desc: [
          "Traditional wall switches feature gaps and ridges where dangerous bacteria accumulate. Our Surgeon Control Panels are designed with an ultra-smooth, anti-microbial membrane keypad or a high-definition capacitive touchscreen.",
          "The entire unit is flush-mounted directly into the Modular OT wall panels. It is strictly IP65 rated (waterproof and dustproof), meaning hospital staff can aggressively spray and wipe down the panel with liquid chemical disinfectants without any risk of internal short-circuits."
        ],
        image: "/images/mot-product-page-images/ot-control-panels-images/flush-mounted-digital-interface.webp"
      },
      {
        title: "Precision Environmental Control",
        desc: [
          "The panel serves as the central brain communicating directly with the OT's Air Handling Unit (AHU) via a Variable Frequency Drive (VFD).",
          "Surgeons and anesthetists can view real-time digital readouts of the room's parameters. Using the interface, they can instantly adjust the Temperature (standard 21°C ± 2°C), manage Relative Humidity (50% ± 5%), and monitor HEPA filter status. If the AHU detects a pressure drop or filter blockage, the panel immediately triggers a visual and audible alarm."
        ],
        image: "/images/mot-product-page-images/ot-control-panels-images/precision-environmental-control.webp"
      },
      {
        title: "Integrated Medical Gas Alarms",
        desc: [
          "Surgical safety relies heavily on life-support gases. Rather than installing a separate, disjointed alarm box on the wall, our control panel features a built-in digital medical gas manometer.",
          "It provides a continuous, highly visible readout of the line pressure for up to 6 gases: Oxygen, Medical Air (4 Bar), Surgical Air (7 Bar), Nitrous Oxide, Vacuum, and CO2. If the pressure of any gas drops below or spikes above the critical threshold, the panel triggers an immediate emergency buzzer to alert the surgical team."
        ],
        image: "/images/mot-product-page-images/ot-control-panels-images/integrated-medical-gas-alarms.webp"
      },
      {
        title: "Surgical Timers & Illumination Control",
        desc: [
          "Every panel includes a highly accurate standard Day/Time clock, alongside a critical Elapsed Time Clock. This stop-watch feature is heavily utilized by anesthetists to track surgery duration, anesthesia exposure, and time critical CPR/Code Blue events down to the second.",
          "Additionally, the panel integrates comprehensive lighting controls. Staff can easily switch on/off or dim the peripheral LED room lights, X-Ray viewing screens, and surgical dome lights directly from the membrane keypad, avoiding the need to walk around the room."
        ],
        image: "/images/mot-product-page-images/ot-control-panels-images/surgical-timers-illumination-control.webp"
      }
    ],
    engineering: [
      {
        title: "Micro-Controller Board",
        desc: "The core processing unit. We use industrial-grade PCBs engineered for 24/7 continuous operation. It effortlessly handles inputs from multiple room sensors, processes analog/digital signals, and outputs precise commands to the HVAC and lighting relays without latency.",
        bullets: ["Industrial Grade PCB", "Continuous 24/7 Monitoring"]
      },
      {
        title: "IP65 Sealed Fascia",
        desc: "The front interface is constructed using a specialized anti-microbial membrane or heavy-duty capacitive glass. It is hermetically sealed to the SS-304 backbox, preventing any liquid chemical ingress during aggressive OT fumigation or deep cleaning procedures.",
        bullets: ["Anti-Microbial Surface", "100% Washable Design"]
      },
      {
        title: "Fail-Safe Relays",
        desc: "Safety is paramount in the OT. The control panel uses optically isolated relays to separate the low-voltage user interface from the high-voltage equipment it controls. This guarantees that surgeons are completely protected from electrical short circuits.",
        bullets: ["Isolated Control Circuits", "Protects Against Shocks"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Hybrid Cath Labs & OTs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "CSSD & Processing", image: "/images/key-application-images/cssd.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End panel and cabinet solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Streamlining Workflows in a Punjab Cardiac Center",
      context: "A prominent cardiac surgery center in Punjab was operating with disjointed infrastructure. The AC controls, gas alarms, light switches, and wall clocks were scattered across four different walls. During intense bypass surgeries, nurses were constantly breaking their sterile perimeter to run around the room adjusting these manual dials.",
      solution: "We performed a targeted retrofit, stripping away the individual panels and installing a singular, flush-mounted Touchscreen Surgeon Control Panel. We wired the AHU, lighting relays, and MGPS sensors directly into this central hub. The surgical team can now monitor temperature, track elapsed bypass time, and adjust lighting from one spot, saving critical seconds and vastly improving room sterility."
    },
    specs: [
      { label: "Enclosure Construction", value: "1.2mm SS-304 Stainless Steel or Powder Coated CRCA (Flush-mounted)" },
      { label: "User Interface", value: "Anti-microbial Membrane Keypad or HD Capacitive Touchscreen" },
      { label: "Ingress Protection", value: "IP65 Rated (Protected against dust ingress and low-pressure water jets)" },
      { label: "Gas Monitoring Capacity", value: "Digital manifold supporting 4-Gas up to 6-Gas configurations" },
      { label: "Auxiliary Controls", value: "Hands-free telephone, HEPA UVGI switch, Music/PA system integration" }
    ],
    faqs: [
      { q: "Why can't standard wall switches be used in an Operation Theatre?", a: "Standard physical switches and dials have crevices where bacteria, blood, and fluids can accumulate. A digital Surgeon Control Panel uses a flush membrane or touchscreen interface that can be wiped down instantly with harsh chemical disinfectants without short-circuiting." },
      { q: "What parameters can the Surgeon Control Panel monitor?", a: "The panel is the central hub. It monitors and controls OT Temperature, Humidity, Medical Gas Pipeline Pressures (O2, Air, Vacuum, N2O), HEPA filter status, Elapsed Anesthesia Timers, and Peripheral Room Lighting." },
      { q: "Is the panel waterproof?", a: "Yes, our Surgeon Control Panels are IP65 rated. The front fascia is completely sealed, making it dust-tight and protected against water jets during deep OT cleaning and fumigation." },
      { q: "Does the panel have a backup battery?", a: "The panel is typically connected to the hospital's UPS system to ensure it remains operational during power outages." },
      { q: "Can we integrate a telephone system?", a: "Yes, our panels can include hands-free telephone systems for communication outside the OT without breaking scrub." },
      { q: "Is the surface anti-microbial?", a: "Yes, we use anti-microbial membrane overlays that actively prevent cross-contamination between surgical cases." }
    ],
    heroImage: "/images/mot-product-page-images/ot-control-panels-images/flush-mounted-digital-interface.webp"
  },
  'surgical-pendants': {
    title: "OT Ceiling Pendants",
    tagline: "Ergonomic Surgical Workflows",
    heroDesc: "Floor clutter is a severe hazard in an operating room. Tangled medical gas hoses and electrical cables compromise surgical workflows and create dangerous trip hazards. Our advanced OT Ceiling Pendants consolidate all critical utilities—gases, power, data, and monitors—into ergonomic, highly maneuverable overhead consoles, keeping the floor 100% clear and sterile.",
    atAGlance: ["Heavy-Duty Load Capacity", "Pneumatic Braking System", "Segregated Gas & Power", "330° Ergonomic Rotation"],
    configurations: [
      {
        title: "Single-Arm Movable Pendants",
        desc: [
          "The industry standard for multi-specialty Operation Theatres. The Single-Arm pendant features a heavy-duty extruded aluminum articulating arm that allows the entire console to pivot smoothly up to 330 degrees around its axis.",
          "This provides exceptional flexibility, allowing the anesthetist or surgical nurse to effortlessly pull the console toward the patient during prep, and instantly push it out of the way during the surgical procedure. It supports substantial weight, easily carrying multiple monitors, infusion pumps, and surgical tools."
        ],
        image: "/images/mot-product-page-images/ot-surgical-pendant-images/single-arm-surgical-pendant.webp"
      },
      {
        title: "Double-Arm (Tandem) Pendants",
        desc: [
          "The ultimate solution for large, highly complex surgical environments like Neurosurgery, Cardiac bypass, or Hybrid OTs. The Double-Arm design features two connected articulating segments.",
          "This tandem configuration provides an incredibly wide reach radius. A surgeon can pull the equipment console from the head of the bed all the way down to the foot of the bed without ever unplugging a single wire or hose. When not in use, the arms fold completely flat against each other to conserve space."
        ],
        image: "/images/mot-product-page-images/ot-surgical-pendant-images/double-arm-surgical-pendant.webp"
      },
      {
        title: "Rigid / Fixed Pendants",
        desc: [
          "A highly robust and cost-effective solution designed for Intensive Care Units (ICUs), Emergency Recovery Rooms, and minor procedure OTs where wide multi-axis movement isn't strictly necessary.",
          "The Rigid Pendant drops straight down from the ceiling mount, providing a solid, centralized utility drop. While the console box itself can rotate 330 degrees to face the nurse, the main drop tube remains fixed in place, offering incredible stability for heavy monitors and continuous patient care equipment."
        ],
        image: "/images/mot-product-page-images/ot-surgical-pendant-images/rigid-surgical-pendant.webp"
      }
    ],
    engineering: [
      {
        title: "Pneumatic Braking",
        desc: "To prevent the heavy pendant from accidentally drifting mid-surgery, we integrate compressed-air pneumatic brakes. Pressing the release button allows effortless movement; releasing it locks the arm rigidly in place instantly.",
        bullets: ["Zero Drift Guarantee", "Compressed-Air Actuated"]
      },
      {
        title: "Segregated Utilities",
        desc: "Safety is paramount. The internal column features strictly segregated compartments. High-voltage electrical wiring is physically separated from oxygen and nitrous oxide pipelines to eliminate any risk of spark-induced fires.",
        bullets: ["Physical Compartmentalization", "Gas & Electrical Separation"]
      },
      {
        title: "Modular Trays & Rails",
        desc: "The console features adjustable equipment trays capable of holding heavy monitors or cautery machines. Integrated DIN rails on the sides allow nurses to easily clip on infusion pumps, IV poles, and syringe holders.",
        bullets: ["Adjustable Shelving", "Integrated DIN Rails"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "IVF & Embryology Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End Surgical Pendant solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Cable Clutter in a Delhi Trauma Center",
      context: "A high-volume trauma center in Delhi was struggling with emergency response times. During critical resuscitations, nurses and surgeons were constantly tripping over a maze of oxygen hoses and power cables stretching from the wall-mounted bed head panels to the surgical table.",
      solution: "We disconnected the wall utilities and installed a heavy-duty Double-Arm Anaesthesia Pendant directly over the head of the surgical table. All MGPS lines and power cables were routed through the ceiling and down the pendant arms. The floor was instantly cleared of all trip hazards, vastly improving staff mobility and room sterility during critical trauma cases."
    },
    specs: [
      { label: "Structural Material", value: "High-strength extruded Aluminum alloy with anti-microbial coating" },
      { label: "Load Bearing Capacity", value: "150 kg to 300 kg (Depending on single/double arm configuration)" },
      { label: "Rotation Radius", value: "330° rotation at each pivot joint with mechanical stops" },
      { label: "Braking Mechanism", value: "Pneumatic Air Brakes / Electro-Magnetic / Mechanical Friction" },
      { label: "Standard Integrations", value: "O2, N2O, Air, Vac, AGSS Outlets | 5/15 Amp Sockets | RJ45 Data Ports" }
    ],
    faqs: [
      { q: "Why do Operation Theatres need Ceiling Pendants?", a: "In a standard OT, electrical cables and medical gas hoses drag across the floor from wall outlets to the surgical bed. This creates massive trip hazards and contamination zones. Ceiling pendants suspend all utilities from the roof, keeping the floor 100% clear and sterile." },
      { q: "What is the difference between an Anaesthesia Pendant and a Surgical Pendant?", a: "An Anaesthesia Pendant is typically positioned near the patient's head. It holds the anesthesia machine, monitors, and specific gases (O2, N2O, AGSS). A Surgical Pendant is placed near the patient's feet or side, holding surgical tools, cautery machines, and surgical air/vacuum lines." },
      { q: "How does the pendant stay still during surgery without drifting?", a: "Our multi-arm pendants are equipped with advanced Pneumatic or Electro-Magnetic braking systems. Once the surgeon positions the pendant, they press a button on the console that locks the joints in place instantly, ensuring absolutely zero drifting during delicate procedures." }
    ],
    heroImage: "/images/mot-product-page-images/ot-surgical-pendant-images/single-arm-surgical-pendant.webp"
  },
  'scrub-stations': {
    title: "Surgical Scrub Stations",
    tagline: "Pre-Surgical Sterility",
    heroDesc: "Infection control begins outside the operating room. If a surgeon touches a standard faucet handle after washing their hands, the entire scrubbing process is compromised. We manufacture highly specialized, touchless SS-304 surgical scrub stations that ensure absolute sterility before the surgical team even steps through the OT doors.",
    atAGlance: ["Touchless IR Sensors", "Knee & Foot Backups", "Anti-Splash Sloped Basin", "Premium SS-304 Steel"],
    configurations: [
      {
        title: "Multi-Bay Configurations",
        desc: [
          "To accommodate diverse hospital requirements, we fabricate our medical scrub stations in customizable 1-Bay, 2-Bay, and 3-Bay configurations. This multi-user design ensures that lead surgeons and scrub nurses can prepare simultaneously, eliminating pre-operative bottlenecks outside the Modular OT.",
          "Each individual washing bay is spaciously engineered with a standard 800mm width. This generous spatial allowance guarantees that surgeons have ample room to rigorously scrub their hands and forearms up to the elbows without accidentally bumping into adjacent personnel—a critical factor in maintaining an unbroken sterile perimeter and adhering to strict NABH cleanroom protocols."
        ],
        image: "/images/mot-product-page-images/ot-surgical-scrub-stations-images/triple-bay-manual-surgical-scrub-station.webp"
      },
      {
        title: "Touchless Sensor Faucets",
        desc: [
          "The absolute core of pre-surgical infection control relies on eliminating physical contact points. Each scrubbing bay is equipped with a highly sensitive, medical-grade Infrared (IR) optical sensor built directly into the SS-304 back panel or the faucet neck itself. As the surgeon approaches the hospital sink, the water activates instantly without a single touch.",
          "When they step away, an integrated digital micro-controller allows the water to flow for an additional 2 to 3 seconds. This delayed shut-off is crucial, as it automatically washes away any residual betadine soap down the drain, leaving a perfectly clean basin for the next user while simultaneously saving thousands of liters of hospital water annually."
        ],
        image: "/images/mot-product-page-images/ot-surgical-scrub-stations-images/triple-bay-automatic-surgical-scrub-station.webp"
      },
      {
        title: "Integrated Soap & UV Sterilization",
        desc: [
          "Alongside our touchless faucets, every scrubbing bay features integrated automatic betadine or surgical soap dispensers, ensuring the entire pre-op cleaning protocol remains 100% hands-free.",
          "Furthermore, we offer the seamless integration of inline UV-C Water Sterilizers and 0.2-micron microbial absolute filters hidden within the stainless steel plumbing shroud. This guarantees that the water washing the surgeon's hands is fundamentally sterile and purified before it even exits the tap."
        ],
        image: "/images/mot-product-page-images/ot-surgical-scrub-stations-images/triple-bay-automatic-soap-dispenser-surgical-scrub-station.webp"
      }
    ],
    engineering: [
      {
        title: "SS-304 Construction",
        desc: "The entire body, basin, and plumbing shroud are fabricated from heavy-gauge 1.5mm Stainless Steel 304. This premium alloy is entirely non-porous, meaning bacteria cannot root into the surface.",
        bullets: ["100% Rust-Proof Material", "Seamless Welded Joints"]
      },
      {
        title: "Thermostatic Control",
        desc: "We integrate advanced Thermostatic Mixing Valves hidden within the plumbing shroud. This ensures the hot and cold water lines are blended perfectly, delivering a consistent, comfortable warm water flow.",
        bullets: ["Prevents Scalding Burns", "Hidden Anti-Tamper Valve"]
      },
      {
        title: "Fail-Safe Mechanisms",
        desc: "If a hospital experiences a severe power outage and the IR sensors lose electricity, the surgery cannot be delayed. Every station is equipped with mechanical Knee or Foot operated push-panels.",
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
      { title: "Turnkey Solutions", desc: "By providing End to End Scrub Station solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Cross-Contamination in an Orthopedic Wing",
      context: "An orthopedic hospital was experiencing a minor but consistent spike in post-op joint infections. Environmental audits showed the OT was perfectly clean, but the corridor outside was the culprit. Surgeons were using elbow-operated taps, but occasionally their sterilized forearms would brush against the wet, unsterile handle while turning the water off.",
      solution: "We ripped out the old sinks and installed a seamless 3-Bay SS-304 Scrub Station with IR Sensors. The surgeons simply step up, scrub, and step back. Because they no longer have to push or pull any physical levers with their elbows, the chain of cross-contamination was instantly broken, and infection rates dropped back to zero."
    },
    specs: [
      { label: "Construction Material", value: "1.5mm thick Premium Stainless Steel 304 (Matte/Satin Finish)" },
      { label: "Primary Activation", value: "Highly sensitive Infrared (IR) Optical Sensors" },
      { label: "Mechanical Backup", value: "Concealed Knee/Foot operated push-panel switches" },
      { label: "Temperature Control", value: "Concealed Thermostatic Mixing Valve (Pre-settable to 38°C)" },
      { label: "Water Sterilization", value: "Optional UV-C sterilizer & 0.2µm anti-bacterial inline filters" }
    ],
    faqs: [
      { q: "Why must scrub stations be touchless?", a: "In highly sterile environments like Modular Operation Theatres, touchless scrub stations are a mandatory infection control measure. Once a surgeon or scrub nurse completes their surgical hand antisepsis using betadine or chlorhexidine, physically touching a traditional faucet handle instantly re-contaminates their hands, leading to severe surgical site infections (SSI). Our advanced SS-304 scrub sinks utilize high-precision Infrared (IR) optical sensors that automatically trigger water and medical soap dispensers. This 100% hands-free, touchless activation ensures absolute compliance with strict NABH and CDC hospital hygiene guidelines, fundamentally safeguarding the sterile core of the hospital." },
      { q: "What happens if the IR sensor fails during a power outage?", a: "Continuous surgical workflows cannot be interrupted by technical failures or power outages. To guarantee fail-safe operation, every surgical scrub station we manufacture at MedGenz is equipped with redundant mechanical backups. Beneath the primary IR sensor array, we install concealed, ergonomic knee-operated or foot-operated push panels. If the hospital experiences a sudden electrical failure, the surgical staff can simply press their knee against these mechanical levers to instantly activate the water flow. This dual-redundancy ensures uninterrupted pre-surgical preparation and absolute reliability in critical healthcare scenarios." },
      { q: "How does the sink prevent water from splashing onto the surgeon?", a: "Splashing contaminated water from the drain back onto a surgeon's sterile scrub suit is a major bio-hazard. To counter this, our scrub station basins are meticulously engineered using heavy-gauge Stainless Steel 304 with an aerodynamic, deep-sloped back-wall design. Instead of hitting a flat surface and rebounding, the high-pressure water stream hits the angled plane smoothly and is safely deflected downward into an oversized, anti-vortex drain. This anti-splash ergonomic design keeps the surgical team completely dry and sterile, maintaining the integrity of the hospital cleanroom environment." },
      { q: "Is the SS-304 non-porous?", a: "Yes, SS-304 is a premium medical-grade alloy that is entirely non-porous and rust-proof." },
      { q: "Can we have both knee and foot operation?", a: "Yes, we can equip the stations with both IR sensors and redundant mechanical knee or foot operated backups." },
      { q: "What is the width of each bay?", a: "Each individual washing bay is spaciously engineered with a standard 800mm width." }
    ],
    heroImage: "/images/mot-product-page-images/ot-surgical-scrub-stations-images/single-bay-automatic-surgical-scrub-station.webp"
  },
  'x-ray-viewers': {
    title: "LED X-Ray Viewing Screens",
    tagline: "Surgical Diagnostics",
    heroDesc: "Surgeons rely on absolute visual clarity to navigate complex procedures. Old fluorescent view boxes cause severe eye strain, flicker, and protrude from the wall, gathering hazardous dust. Our advanced LED X-Ray screens are ultra-slim, flicker-free, and seamlessly flush-mounted to provide perfect diagnostic illumination without compromising cleanroom sterility.",
    atAGlance: ["10,000+ Lux Edge-Lit LED", "Class 100 Cleanroom Ready", "SS-304 Flush-Mounted", "Auto-Sensor Dimming"],
    configurations: [
      {
        title: "Double-Film Viewers (Standard OT)",
        desc: [
          "The absolute industry standard for general Modular Operation Theatres. The Double-Film (2-Panel) configuration allows lead surgeons to simultaneously compare a patient's historical X-Ray against a current intra-operative scan or MRI.",
          "Engineered for flush-mounting, this unit integrates perfectly level with SS-304 wall panels. The high-density LED matrix provides incredibly uniform light distribution (over 10,000 Lux), ensuring there are absolutely no dark spots or shadows that could lead to diagnostic errors during a fast-paced surgery."
        ],
        image: "/images/mot-product-page-images/ot-x-ray-viewers/double-film-x-ray-viewer.webp"
      },
      {
        title: "Multi-Film (3 & 4 Panel) Viewers",
        desc: [
          "Designed exclusively for highly complex environments such as Orthopedic, Neurosurgery, and Spine procedure rooms. In these specialized cases, surgeons must cross-reference multiple angles of a spinal column or massive full-body MRI sequences simultaneously.",
          "Our 3-Panel and 4-Panel (Quad) viewing screens provide massive visual real estate. Despite their large footprint, the ultra-slim LED edge-lighting technology ensures the entire unit generates virtually zero radiant heat, maintaining the strict thermal control required inside the cleanroom."
        ],
        image: "/images/mot-product-page-images/ot-x-ray-viewers/multi-film-x-ray-viewer.webp"
      },
      {
        title: "Single-Film Viewers (ICU & Wards)",
        desc: [
          "A highly compact, space-saving solution ideal for Intensive Care Units (ICUs), emergency recovery rooms, and outpatient clinics.",
          "While utilizing the exact same premium, flicker-free LED technology as our large surgical models, the Single-Film viewer is highly versatile. It can be easily surface-mounted on standard hospital walls or flush-mounted into semi-modular setups, providing immediate diagnostic capabilities right at the patient's bedside."
        ],
        image: "/images/mot-product-page-images/ot-x-ray-viewers/single-film-x-ray-viewer.webp"
      },
      {
        title: "Smart Dimmable & Auto-Sensor Viewers",
        desc: [
          "The pinnacle of diagnostic technology. Our advanced models are equipped with capacitive touch controls and internal micro-switches hidden within the film grips.",
          "The screen remains entirely dark to prevent harsh glare in the OT. The exact moment a surgeon slides a film into a specific grip, the auto-sensor instantly illuminates only that specific panel. Furthermore, the stepless digital dimming allows the radiologist or surgeon to adjust the brightness from 10% to 100%, perfectly contrasting over-exposed or under-exposed films."
        ],
        image: "/images/mot-product-page-images/ot-x-ray-viewers/smart-dimmable-auto-sensor-viewers.webp"
      }
    ],
    engineering: [
      {
        title: "High-Density LED Matrix",
        desc: "Utilizes medical-grade edge-lit LED technology producing over 10,000 Lux. Delivers absolutely uniform, flicker-free light with a 100,000-hour lifespan, ensuring zero diagnostic errors.",
        bullets: ["Zero Eye Strain", "Crisp 10,000K Color Temp"]
      },
      {
        title: "Toughened Acrylic Fascia",
        desc: "The viewing surface is covered by a shatterproof, scratch-resistant acrylic sheet that diffuses light perfectly and withstands aggressive hospital-grade chemical cleaning without yellowing.",
        bullets: ["Anti-Glare Coating", "Easy Disinfection"]
      },
      {
        title: "Roller-Grip System",
        desc: "Features an advanced spring-loaded silicone roller grip mechanism at the top. Allows surgeons to slide films in smoothly with one hand, preventing tearing and ensuring a firm hold.",
        bullets: ["Damage-Free Holding", "Single-Hand Operation"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Emergency Rooms (ER)", image: "/images/key-application-images/emergency-ward.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End diagnostic monitor solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Enhancing Clarity in Neurosurgery",
      context: "A premier neurology center was experiencing critical issues during long spinal surgeries. The surgeons were suffering from severe eye fatigue caused by the micro-flickering of old fluorescent X-Ray view boxes, which also generated excess heat inside the OT.",
      solution: "We upgraded their facility with a flush-mounted Quad-Panel LED Smart Viewer. The new unit provided absolutely flicker-free, 10,000 Lux illumination with zero radiant heat. The dimming capability allowed the surgeons to perfectly contrast dense bone scans, completely eliminating eye strain and improving diagnostic speed."
    },
    specs: [
      { label: "Light Source Technology", value: "Edge-Lit High-Density LED Matrix (100,000+ Hours Lifespan)" },
      { label: "Illumination Intensity", value: "> 10,000 Lux (Uniform light distribution with no dark spots)" },
      { label: "Color Temperature", value: "10,000K (Crisp, diagnostic blue-white light)" },
      { label: "Viewing Fascia", value: "3mm Shatterproof Anti-Glare Acrylic Sheet" },
      { label: "Frame / Enclosure", value: "Ultra-slim profile powder-coated aluminum / SS-304" }
    ],
    faqs: [
      { q: "What is the advantage of LED over old fluorescent X-Ray viewers?", a: "LED viewers are completely flicker-free, which eliminates surgeon eye strain during long procedures. They also provide 100% uniform light distribution without the dark spots common in fluorescent tubes, generate zero radiant heat, and have a lifespan of over 100,000 hours." },
      { q: "What does 'Flush-Mounted' mean for an X-Ray viewer?", a: "Instead of hanging on the wall like a picture frame (which creates a horizontal ledge for hazardous dust to settle), flush-mounted viewers are built directly into the modular wall panel. The acrylic screen sits perfectly level with the steel wall, ensuring zero dust accumulation and unhindered Laminar Airflow." },
      { q: "What is the 'Auto-Sensor' feature?", a: "To prevent harsh glare in a dark OT, our advanced models feature micro-switches in the film grips. The LED panel remains off until a surgeon physically slides an MRI or X-Ray film into the grip, at which point it instantly illuminates only that specific panel." },
      { q: "Can we adjust the brightness of the screen?", a: "Yes, our multi-panel viewing screens come with integrated digital dimming controls (either capacitive touch or rotary dials). Surgeons can easily adjust the Lux intensity from 10% to 100% to perfectly match the density of different X-Ray, CT, or MRI films for optimal contrast." },
      { q: "Are the LED X-Ray viewing screens easy to clean and maintain?", a: "Yes, our flush-mounted LED X-Ray viewing screens are designed with a completely seamless, non-porous acrylic fascia. They are specifically engineered to withstand harsh hospital-grade chemical disinfectants and daily fumigation without yellowing or scratching." }
    ],
    heroImage: "/images/mot-product-page-images/ot-x-ray-viewers/double-film-x-ray-viewer.webp"
  },
  'storage-cabinets': {
    title: "Flush-Mounted OT Cabinets",
    tagline: "Space-Saving OT Solutions",
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
      { q: "Why can't we use standard free-standing cupboards in an OT?", a: "Standard free-standing cupboards have flat tops that collect dust, gaps underneath that trap bacteria, and sharp corners that disrupt the OT's Laminar Airflow. Flush-mounted cabinets eliminate all these issues by integrating seamlessly into the wall, providing a monolithic and perfectly sterile surface." },
      { q: "Do flush-mounted cabinets compromise the wall's insulation?", a: "No. When we manufacture and install our flush-mounted cabinets, the back panel of the cabinet is heavily insulated with high-density Polyurethane Foam (PUF). This ensures the thermal and acoustic barrier of the modular wall remains perfectly intact without any heat leaks." },
      { q: "Are the internal shelves adjustable?", a: "Yes, our storage cabinets feature heavy-duty, height-adjustable SS-304 or toughened glass shelving. This flexibility allows hospital staff to easily accommodate various sizes of surgical kits, implants, and large medical consumables on the fly." },
      { q: "Can we customize the dimensions of the OT cabinets?", a: "Absolutely. As direct manufacturers, we CNC-fabricate each cabinet to match your exact hospital wall specifications, ensuring a 100% flush fit regardless of the modular panel thickness. We can design single-door, double-door, or full-wall storage grids." },
      { q: "How are the glass doors protected against shattering?", a: "We utilize double-glazed, 5mm toughened safety glass set deeply into the SS-304 frame. In the extremely rare event of a severe impact from a surgical trolley, the glass is designed to crumble into blunt granular chunks rather than dangerous sharp shards, protecting the sterile field and staff." },
      { q: "Is the SS-304 medical grade?", a: "Yes, all our SS-304 cabinets are engineered specifically for Class 100 cleanrooms, ensuring zero bio-fluid retention and maximum durability." }
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
        title: "Temperature & RH Sensors",
        desc: [
          "High-precision probes designed for extreme accuracy. These advanced sensors constantly measure the ambient Room Temperature and Relative Humidity (RH) inside the surgical suite or directly within the return air ducts.",
          "They are engineered with ultra-fast response times to instantly detect any thermal spikes caused by surgical lighting or personnel movement. If humidity breaches 60%, they immediately signal the AHU's cooling coils and heaters to initiate deep dehumidification, preventing fungal growth on sterile equipment."
        ],
        image: "/images/mot-product-page-images/environmental-monitoring-images/temperature-rh-sensor.webp"
      },
      {
        title: "Differential Pressure Transmitters",
        desc: [
          "The backbone of positive and negative pressure environments. Differential Pressure (DP) transmitters utilize highly sensitive diaphragms to measure the exact pressure variance (in Pascals) between the sterile OT and the unsterile corridor.",
          "These industrial-grade transmitters convert physical air pressure into a 4-20mA electrical signal, communicating seamlessly with the digital displays and Variable Frequency Drives (VFDs) to actively modulate duct dampers and AHU blower speeds."
        ],
        image: "/images/mot-product-page-images/environmental-monitoring-images/differential-pressure-transmitters.webp"
      },
      {
        title: "Flush-Mounted Digital Display Stations",
        desc: [
          "Surgeons and nursing staff need instant environmental awareness without looking away from the patient. Our digital display stations feature high-visibility LED screens perfectly flush-mounted into the SS-304 modular wall panels.",
          "The screens output real-time readings for Temp, RH, and Pressure. They are equipped with intelligent color-coding: numbers remain a soothing Green when parameters are safe, and instantly flash aggressive Red while sounding a piercing buzzer the second a cleanroom breach occurs."
        ],
        image: "/images/mot-product-page-images/environmental-monitoring-images/flush-mounted-digital-display-station.webp"
      },
      {
        title: "BMS Integration & Data Logging",
        desc: [
          "For NABH accreditation, hospitals must present unalterable historical logs proving that OT climates were stable during surgeries.",
          "Our environmental systems come with standard RS-485 Modbus outputs, allowing them to connect seamlessly to your facility's Building Management System (BMS) or Hospital Information System (HIS). The software records 24/7 telemetry data, providing 21 CFR Part 11 compliant audit trails, printable PDF reports, and automated email alerts to facility managers during off-hours."
        ],
        image: "/images/mot-product-page-images/environmental-monitoring-images/bms-monitoring-system.png"
      }
    ],
    engineering: [
      {
        title: "Temperature Accuracy",
        desc: "Precision sensors providing accuracy within ± 0.5°C across the standard operational range of 10°C to 40°C.",
        bullets: ["± 0.5°C Accuracy", "Fast-Response Probe"]
      },
      {
        title: "RH Accuracy",
        desc: "Utilizes capacitive polymer sensor technology to maintain relative humidity within ± 2% of the setpoint.",
        bullets: ["± 2% RH Accuracy", "Capacitive Sensor Tech"]
      },
      {
        title: "Differential Pressure Range",
        desc: "Industrial sensors measuring variances from -50 Pa to +50 Pa with an accuracy of ± 1% for active pressure control.",
        bullets: ["-50 to +50 Pa Range", "± 1% DP Accuracy"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "IVF & Embryology Labs", image: "/images/about-us/about-us-assets/ivf-about.webp" },
      { title: "Isolation Wards & Corridors", image: "/images/service assets/service-page-assets/hospital-furniture.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End instrumentation solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Passing NABH Audits in a Corporate Hospital",
      context: "A premier corporate hospital in Haryana was weeks away from a major NABH inspection. While their AHU was functioning, their analog wall thermostats were outdated, and they had no way to prove historical humidity compliance. Furthermore, surgeons were complaining about their microscopes continuously fogging up mid-procedure.",
      solution: "MedGenz rapidly deployed a network of Digital Environmental Display Stations linked to duct-mounted RH sensors. We integrated the system with their central BMS. The new sensors instantly detected sudden humidity spikes during surgical washing phases, automatically triggering the AHU dehumidification cycle. The microscope fogging stopped entirely, and the hospital presented perfect 30-day data logs to the auditors, securing their accreditation."
    },
    specs: [
      { label: "Temperature Accuracy", value: "± 0.5°C (Standard Range: 10°C to 40°C)" },
      { label: "Relative Humidity (RH) Accuracy", value: "± 2% RH (Capacitive polymer sensor technology)" },
      { label: "Differential Pressure Range", value: "-50 Pa to +50 Pa (Accuracy ± 1%)" },
      { label: "Communication Output", value: "4-20mA Analog / RS-485 Modbus RTU Protocol" },
      { label: "Display Panel Material", value: "Flush-mounted SS-304 / Anti-microbial Polycarbonate fascia" }
    ],
    faqs: [
      { q: "Why do we need strict humidity control in the OT?", a: "Humidity that is too high (above 60%) breeds bacteria and mold, while humidity that is too low (below 40%) causes static electricity to build up, which can shock sensitive patient monitoring equipment. We maintain a strict 50% ± 5% RH." },
      { q: "Can we export historical environmental data for NABH audits?", a: "Yes. Our advanced monitoring stations feature RS-485 Modbus and BMS (Building Management System) integration. This automatically logs temperature, humidity, and pressure data 24/7, providing unalterable reports for NABH auditors." },
      { q: "Does the monitoring system automatically adjust the OT cooling?", a: "Yes, our smart sensors create a feedback loop. If the room gets too hot or pressure drops, the system sends an immediate command to the Air Handling Unit (AHU) to speed up the blower motors or engage the cooling coils to re-stabilize the environment." }
    ],
    heroImage: "/images/mot-product-page-images/environmental-monitoring-images/flush-mounted-digital-display-station.webp"
  },
  'room-lighting': {
    title: "Peripheral Cleanroom Lights",
    tagline: "Cleanroom Grade Ambient Illumination",
    heroDesc: "General ambient lighting in an operating theatre cannot be ordinary. Standard commercial fixtures gather dust, disrupt airflow, and harbor dangerous bacteria. We manufacture flush-mounted, IP65-rated Peripheral LED light panels seamlessly engineered to integrate into Modular OT ceilings, ensuring a Class 100 sterile environment while providing brilliant, glare-free illumination for the entire surgical team.",
    atAGlance: ["IP65 Dust & Moisture Proof", "Flush Ceiling Integration", "Aerodynamic LAF Profile", "Anti-Glare Diffusers"],
    configurations: [
      {
        title: "Rectangular IP65 LED Panels",
        desc: [
          "Designed to sit perfectly flush with modular ceilings. Prevents air turbulence and dust accumulation.",
          "Hermetically sealed with silicon gaskets to withstand aggressive chemical deep cleaning and fumigation."
        ],
        image: "/images/mot-product-page-images/ot-peripheral-led-light-images/rectangular-peripheral-led-light.webp"
      },
      {
        title: "Dimmable Cleanroom Arrays",
        desc: [
          "Linked to Surgeon Control Panels for stepless dimming. Allows doctors to lower ambient light during endoscopy.",
          "Features high CRI (>90) for accurate skin tone and tissue color representation in the sterile zone."
        ],
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
        desc: "Operation Theatres require rigorous deep cleaning and fumigation. Our luminaires are hermetically sealed with robust silicon gaskets. They are entirely impervious to dust ingress and can withstand washing and harsh chemical fumigation agents.",
        bullets: ["Fumigation Safe", "Water Jet Protected"]
      },
      {
        title: "Anti-Glare Diffusers",
        desc: "While the surgical dome light provides intense cavity illumination, the peripheral lights provide broad ambient sight for the anesthesiologists and nurses. We use frosted polycarbonate diffusers to provide soft, uniform, flicker-free light that prevents eye fatigue during long surgeries.",
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
      { title: "Turnkey Solutions", desc: "By providing end-to-end lighting solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Resolving Laminar Air Flow Turbulence with Flush Lighting",
      context: "A newly built specialty clinic was failing its NABH cleanroom validation tests. Smoke flow tests revealed that standard, bulky commercial LED panels installed in the OT ceiling were creating severe air turbulence. This turbulence was pulling non-sterile ambient air directly into the sterile surgical zone.",
      solution: "We removed the commercial panels and retrofitted the ceiling with MedGenz Flush-Mounted IP65 Peripheral LED Panels. The perfectly flat aerodynamic profile allowed the Laminar Air Flow to travel downwards in a completely undisturbed \"piston effect\". The clinic passed their Class 100 validation test on the very next attempt, ensuring surgical safety."
    },
    specs: [
      { label: "Housing Frame Material", value: "Powder Coated CRCA Sheet / Extruded Aluminum" },
      { label: "Ingress Protection (IP) Rating", value: "IP65 / IP66 (Hermetically sealed against dust and moisture)" },
      { label: "Color Temperature", value: "6000K - 6500K (Cool White Daylight for visual clarity)" },
      { label: "Diffuser Type", value: "Frosted Polycarbonate (Anti-glare, flicker-free)" },
      { label: "Mounting Type", value: "Bottom Access Flush Mount (Easy maintenance without breaking ceiling seal)" }
    ],
    faqs: [
      { q: "Why can't we use standard LED panels in a Modular OT?", a: "Standard commercial LED panels are not hermetically sealed (IP65 rated), meaning they harbor dust and bacteria inside the fixture. Furthermore, their frames often protrude slightly from the ceiling, which disrupts the critical downward push of the Laminar Air Flow system, causing dangerous air turbulence." },
      { q: "What does an IP65 rating mean for OT lights?", a: "IP65 signifies that the light fixture is completely dust-tight and highly protected against low-pressure water jets from any direction. This is absolutely essential because Operating Theatres undergo rigorous chemical fumigation and high-pressure cleaning routines to maintain absolute sterility." },
      { q: "How do peripheral lights differ from the main Surgical Dome lights?", a: "The main surgical dome light hangs over the patient and provides intense, highly-focused, shadowless illumination directly into the deep surgical cavity. Peripheral LED lights are installed flush into the surrounding ceiling to provide bright, glare-free ambient illumination for the nurses, anesthesiologists, and the rest of the room." },
      { q: "Why is IP65 lights important?", a: "They are hermetically sealed against dust and moisture, surviving daily chemical washdowns." },
      { q: "Do they disrupt LAF?", a: "No, their flush aerodynamic profile ensures sterile air travels downwards without turbulence." },
      { q: "How do they differ from Dome lights?", a: "Dome lights are for the surgical cavity; peripheral lights provide ambient room sight." }
    ],
    heroImage: "/images/mot-product-page-images/ot-peripheral-led-light-images/rectangular-peripheral-led-light.webp"
  },
  'surgical-lights': {
    title: "Shadowless Surgical OT Lights",
    tagline: "Uncompromised Vision",
    heroDesc: "True surgical precision requires absolute visual clarity inside deep body cavities. Poor lighting causes shadows, misinterprets tissue color, and generates heat that dries out exposed organs. Our advanced OT lights deliver true shadowless, cold LED illumination, ensuring brilliant tissue rendering and perfect focus for the entire surgical team.",
    atAGlance: ["True Shadowless Tech", "HD Camera Ready", "Cold LED Illumination", "Adjustable Focus & Lux"],
    configurations: [
      {
        title: "Ceiling-Mounted LED Lights",
        desc: [
          "The modern standard for permanent operating theatres. These fixed overhead systems utilize advanced LED technology to provide incredibly high-intensity white light (up to 1,60,000 Lux per dome) with minimal heat generation, ensuring exposed tissues do not dry out.",
          "Ceiling-mounted lights are typically deployed in Double Dome or Triple Dome configurations for complex surgeries, providing stable, shadowless illumination from multiple overlapping angles while leaving the floor completely free of cables and stands."
        ],
        image: "/images/mot-product-page-images/ot-light-images/ceiling-mounted-led-light.webp"
      },
      {
        title: "Mobile & Portable OT Lights",
        desc: [
          "Engineered for ultimate flexibility and rapid deployment. These standalone lighting units are mounted on heavy-duty, anti-static casters, allowing medical staff to easily wheel them between different operating rooms, ICUs, or emergency trauma bays.",
          "Mobile OT lights offer the exact same shadowless LED technology and high lux intensity as ceiling models but feature built-in battery backups. This makes them indispensable during power failures or in makeshift surgical environments where ceiling suspension isn't structurally possible."
        ],
        image: "/images/mot-product-page-images/ot-light-images/mobile-portable-ot-lights.webp"
      },
      {
        title: "Hybrid & Halogen OT Lights",
        desc: [
          "While LED is the modern baseline, Halogen OT Lights are still favored by some surgeons for their excellent, warm-toned color rendering index (CRI), making it easier to distinguish subtle differences in deep red muscle tissues, though they emit more infrared heat.",
          "To bridge the gap, we offer Hybrid OT Lights. These advanced systems combine LED and Halogen technologies in a single housing. Surgeons can utilize the extreme brightness and cold temperature management of the LEDs, while dialing in the precise color spectrum of the halogen bulbs for specialized neuro or cardiovascular procedures."
        ],
        image: "/images/mot-product-page-images/ot-light-images/halogen-ot-lights.webp"
      },
      {
        title: "Wall-Mounted Examination Lights",
        desc: [
          "Designed for confined spaces where ceiling mounts interfere with HVAC systems, or floor space is too limited for mobile carts. Wall-mounted lights are firmly attached to the vertical partitions via articulating, spring-balanced arms.",
          "These are most commonly utilized in outpatient departments (OPD), labor rooms, emergency examination bays, or as highly directional supplementary lighting during complex, multi-angle surgeries in compact Modular OTs."
        ],
        image: "/images/mot-product-page-images/ot-light-images/wall-mounted-ot-lights.webp"
      }
    ],
    engineering: [
      {
        title: "Shadowless Technology",
        desc: "Utilizing a vast array of individual LEDs and specialized multi-faceted reflectors, our lights emit beams from hundreds of intersecting angles. This ensures that even if the surgeon’s head blocks the main light path, the operating field remains brilliantly illuminated with zero hard shadows.",
        bullets: ["Deep Cavity Illumination", "Multi-Faceted Reflectors"]
      },
      {
        title: "HD Camera Integration",
        desc: "Modern teaching hospitals require live visual documentation. Our premium light domes come \"Camera Ready,\" featuring integrated internal wiring and central mounts for high-definition 1080p or 4K surgical cameras. Allows for seamless recording and live streaming to auditoriums.",
        bullets: ["4K / HD Video Output", "Live Streaming Capability"]
      },
      {
        title: "Adjustable Focus & Lux",
        desc: "Via an intuitive sterile central handle or a wall-mounted digital touch panel, surgeons can smoothly adjust the diameter of the light field and the depth of focus. Stepless dimming from 10% to 100% ensures the perfect Lux intensity for any specific tissue type without glare.",
        bullets: ["Variable Field Diameter", "Stepless Intensity Dimming"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Ambulatory Surgery Centers", image: "/images/key-application-images/ambulatory-surgery-centers.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Emergency Rooms (ER)", image: "/images/service assets/service-page-assets/hospital-furniture.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End OT Lighting solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Deep Cavity Shadows in a Teaching Hospital",
      context: "A prominent medical teaching college was struggling during complex cardiovascular demonstrations. Their aging halogen lights were generating intense heat, drying out tissues rapidly. Furthermore, students watching on external monitors couldn't see the surgical site due to heavy shadowing from the lead surgeon's head.",
      solution: "We upgraded their main theatre with a Ceiling-Mounted Double Dome LED Light featuring true shadowless technology and an integrated 4K HD Camera. The cold LED illumination eliminated tissue drying instantly. Thanks to the multi-faceted reflectors and the central camera, students in the auditorium now receive a crystal-clear, shadow-free, real-time feed of the deep cardiac cavity, vastly improving the educational experience."
    },
    specs: [
      { label: "Maximum Illumination (Lux)", value: "Up to 1,60,000 Lux (Per Dome, highly adjustable)" },
      { label: "Color Temperature", value: "3500K - 5000K (Variable for optimal tissue contrast)" },
      { label: "Color Rendering Index (CRI)", value: "> 95 Ra (Guarantees true red tissue color visualization)" },
      { label: "LED Lifespan", value: "> 50,000 Hours (Virtually maintenance-free operation)" },
      { label: "Camera Integration Options", value: "Built-in HD / 4K Wireless Camera with remote control pan/tilt" }
    ],
    faqs: [
      { q: "What makes an OT light 'Shadowless'?", a: "A true shadowless OT light utilizes a vast array of strategically angled LED bulbs and specialized multi-faceted reflectors. This design ensures that even if the surgeon’s head or hands block a portion of the light source, the overlapping beams from other angles maintain absolute brightness in the surgical cavity." },
      { q: "Why is LED preferred over traditional Halogen OT lights?", a: "While halogen lights offer warm color rendering, they emit significant infrared heat, which can dry out exposed tissues during long surgeries. LED lights provide 'cold illumination'—delivering ultra-high intensity white light with virtually zero heat generation and vastly superior lifespans." },
      { q: "Can we integrate a camera into the surgical light later?", a: "Yes, many of our high-end LED dome systems are 'Camera-Ready.' This means they are pre-wired internally so a central HD or 4K camera can be easily installed into the central axis of the light head at a later date without replacing the entire unit." },
      { q: "What is the importance of Adjustable Focus?", a: "Different surgeries require different lighting. A cardiovascular surgery might need a wide beam to illuminate a large area, while a neurosurgery requires a narrow, deeply penetrating beam. Adjustable focus allows the surgeon to mechanically or digitally narrow the diameter of the light field to suit the procedure." }
    ],
    heroImage: "/images/mot-product-page-images/ot-light-images/ceiling-mounted-led-light.webp"
  },
  'surgical-tables': {
    title: "Surgical OT Tables",
    tagline: "Precision Patient Positioning",
    heroDesc: "The surgical table is the literal foundation of patient care inside the OT. A surgeon requires absolute anatomical access, perfect stability, and seamless integration with C-Arm imaging equipment during complex procedures. From heavy-duty electro-hydraulic bases to radiolucent carbon fiber tops, we manufacture the exact positioning platforms required for every medical specialty.",
    atAGlance: ["C-Arm & X-Ray Compatible", "High Weight Capacity", "Precise Auto-Positioning", "Multi-Specialty Attachments"],
    configurations: [
      {
        title: "General & Multi-Purpose Tables",
        desc: [
          "The versatile backbone of any standard hospital. Our General Surgery OT Tables, highly adaptable Universal OT Tables, and flexible Multi-purpose OT Tables are engineered to accommodate a vast majority of routine abdominal, cardiovascular, and minor surgical procedures.",
          "These tables feature a 4 or 5-section top, allowing for precise adjustments including Trendelenburg, reverse Trendelenburg, lateral tilt, and backrest elevation, ensuring the surgeon can easily manipulate patient posture for optimal anatomical exposure."
        ],
        image: "/images/mot-product-page-images/ot-tables-images/general-ot-table.webp"
      },
      {
        title: "Specialty-Based OT Tables",
        desc: [
          "Certain disciplines demand highly specialized hardware. For intricate bone and trauma work, we offer dedicated Orthopedic OT Tables, Traction OT Tables, and specialized Fracture OT Tables featuring robust stainless steel traction frames.",
          "Our portfolio also covers highly precise Neurosurgery OT Tables (compatible with Mayfield skull clamps) and robust Cardiovascular / Thoracic OT Tables for life-saving interventions. For specialized clinics, we manufacture heavy-capacity Bariatric OT Tables (Heavy-duty), Urology OT Tables with drainage systems, ENT OT Tables, low-height Ophthalmic OT Tables, contoured Plastic Surgery OT Tables, and advanced Laparoscopic OT Tables."
        ],
        image: "/images/mot-product-page-images/ot-tables-images/orthopedic-ot-table.webp"
      },
      {
        title: "Gynecology & Obstetrics",
        desc: [
          "Maternity, delivery, and women's health procedures require precise ergonomics and immediate transformability. We supply dedicated Gynecology OT Tables featuring built-in lithotomy stirrups and fluid collection basins.",
          "For comprehensive maternity wards, we manufacture heavy-duty Obstetric / Delivery Tables and multi-functional Labor Tables (LDR Tables) that allow a patient to remain in a single bed throughout Labor, Delivery, and Recovery. We also provide specialized Uro-Gynecology Tables engineered for complex pelvic floor procedures."
        ],
        image: "/images/mot-product-page-images/ot-tables-images/gynaecology-ot-table.webp"
      },
      {
        title: "Mechanism / Technology-Based",
        desc: [
          "The driving force behind the table dictates its speed, precision, and weight capacity. For budget-conscious rural clinics, we offer reliable Manual OT Tables and smooth, pump-operated Hydraulic OT Tables.",
          "For high-volume corporate hospitals, we engineer advanced Electro-Hydraulic OT Tables (combining electric motors with fluid power for massive lifting capacity) and ultra-precise Fully Electric OT Tables utilizing linear actuators. To guarantee absolute safety during hospital power failures, all powered models can be upgraded to Battery Operated OT Tables."
        ],
        image: "/images/mot-product-page-images/ot-tables-images/electro-hydraulic-ot-table.webp"
      },
      {
        title: "Advanced / Hybrid Tables",
        desc: [
          "For apex-tier medical facilities and teaching hospitals, operational efficiency is key. Our Modular OT Tables feature easily interchangeable table tops on a universal base, allowing a room to instantly switch from orthopedics to cardiovascular simply by rolling in a new top section.",
          "Furthermore, we design state-of-the-art Hybrid OT Tables specifically engineered for simultaneous Cath Lab and surgery integration. These tables offer perfectly synchronized movements with heavy robotic imaging systems, providing the ultimate platform for complex, multi-disciplinary surgical interventions."
        ],
        image: "/images/mot-product-page-images/ot-tables-images/hybird-ot-table.webp"
      },
      {
        title: "Imaging-Compatible Tables",
        desc: [
          "Modern, minimally invasive surgeries require continuous, live fluoroscopy and X-ray imaging directly over the patient.",
          "Our highly advanced C-Arm Compatible OT Tables and fully Radiolucent OT Tables are manufactured using specialized translucent carbon fiber or phenolic resin tops. They feature an eccentric pillar design (the lifting column is offset to one end), providing a massive, unobstructed imaging window so the C-Arm machine can freely glide under and around the patient without metal interference."
        ],
        image: "/images/mot-product-page-images/ot-tables-images/c-arm-compatible-ot-table.webp"
      }
    ],
    engineering: [
      {
        title: "Heavy-Duty Lifting Column",
        desc: "The central pillar is engineered using premium SS-304 stainless steel and enclosed linear actuators or hydraulic cylinders. It provides a massive, stable lifting capacity (up to 300+ kg for bariatric models) without any shaking or micro-vibrations during delicate microscopic procedures.",
        bullets: ["Extreme Weight Capacity", "Zero Micro-Vibrations"]
      },
      {
        title: "Anti-Static Memory Mattress",
        desc: "Patient comfort is critical during multi-hour surgeries to prevent pressure ulcers. Our tables feature high-density, seamless memory foam mattresses. They are enveloped in an anti-static, waterproof, and fire-retardant PU cover that is easily detachable for rapid sanitization between cases.",
        bullets: ["Prevents Pressure Ulcers", "Anti-Static & Waterproof"]
      },
      {
        title: "Digital Remote & Override",
        desc: "Electro-hydraulic and fully electric models are controlled via a wired or wireless digital hand remote. For absolute patient safety in the event of a total electrical failure or remote damage, the tables are equipped with a manual, mechanical override system integrated directly into the base.",
        bullets: ["Precision Digital Remote", "Fail-Safe Manual Override"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Hybrid Cath Labs", image: "/images/key-application-images/cath-lab.webp" },
      { title: "Ambulatory Surgery Centers", image: "/images/key-application-images/ambulatory-surgery-centers.webp" },
      { title: "Maternity & Labor Wards", image: "/images/key-application-images/maternity-labour-ward.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing End to End OT Table solutions, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance on all tables.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Empowering Complex Orthopedics in Punjab",
      context: "A leading joint replacement hospital in Punjab was facing severe operational delays. Their standard OT table had thick metal pillars underneath, which completely blocked their new C-Arm X-ray machine. Surgeons had to physically move the patient multiple times during surgery to get clear pelvic images, increasing anesthesia time and infection risks.",
      solution: "We replaced their outdated equipment with our premium C-Arm Compatible Electro-Hydraulic Orthopedic Table. Featuring an eccentric base and a 100% radiolucent carbon fiber top, the C-Arm can now glide seamlessly from head to toe. The integrated orthopedic traction boots allowed surgeons to perform complex hip replacements 30% faster without ever moving the patient."
    },
    specs: [
      { label: "Base & Column Material", value: "Medical Grade SS-304 Stainless Steel (Anti-rust & easy clean)" },
      { label: "Table Top Sections", value: "4 or 5 sections (Radiolucent Phenolic / Carbon Fiber available)" },
      { label: "Load Capacity", value: "150 kg (Standard) up to 300+ kg (Bariatric / Heavy Duty)" },
      { label: "Movement Articulations", value: "Hi-Low, Trendelenburg/Reverse, Lateral Tilt, Back/Leg adjustments" },
      { label: "Control Systems", value: "Wired/Wireless Digital Remote + Mechanical Manual Override" }
    ],
    faqs: [
      { q: "What makes an OT table 'C-Arm Compatible'?", a: "A C-Arm compatible table uses a radiolucent top (often made of carbon fiber or phenolic resin) that allows X-rays to pass completely through it. It is also designed without bulky metal columns directly underneath the patient, allowing the C-Arm scanner to rotate freely 360 degrees around the table during live surgery." },
      { q: "What is the difference between an Electro-Hydraulic and a Fully Electric OT table?", a: "An Electro-Hydraulic table uses an electric motor to pump hydraulic fluid to lift and tilt the table, offering massive weight capacity and smooth movements. A Fully Electric table uses electronic linear actuators (motors) for every movement, providing ultra-precise, digital positioning without the use of oil." },
      { q: "Do your OT tables have a battery backup?", a: "Yes, our electric and electro-hydraulic tables come with an integrated, high-capacity SMF battery backup. If the hospital loses power during a critical procedure, the surgeon can still adjust the table's height, Trendelenburg, and tilt functions for hours." },
      { q: "Can one table be used for both Neurology and Orthopedics?", a: "Yes, our Universal and Modular OT Tables feature interchangeable attachments. You can swap out a standard headrest for a specialized neuro-skull clamp, or attach orthopedic traction boots to the foot end, making a single table highly versatile for multispecialty hospitals." }
    ],
    heroImage: "/images/mot-product-page-images/ot-tables-images/fully-electric-ot-table1.webp"
  },
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
