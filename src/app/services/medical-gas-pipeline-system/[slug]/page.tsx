import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle, ShieldCheck, ArrowRight, Activity, Zap, Layers, Settings, Microscope, Shield, Globe, Clock, Award, FileText, Phone, MessageSquare, Calendar, ChevronDown, Wind, Layout, Lightbulb, HelpCircle, Gauge, Droplets } from "lucide-react";
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

const productData: Record<string, ProductData> = {
  'oxygen-supply-system': {
    title: "Oxygen Supply Systems",
    tagline: "The Heartbeat of Healthcare",
    heroDesc: "Reliable oxygen delivery is the most critical utility in any medical facility. A pressure drop or switchover delay can be catastrophic. Our advanced Oxygen Supply Systems are engineered for absolute fail-safe redundancy, featuring pneumatic automation, forged brass manifolds, and precision flow meters to guarantee continuous life-support to every patient bed.",
    atAGlance: ["Fully Auto Pneumatic Switch", "Forged Brass Construction", "Zero Power Required for Switch", "HTM & Indian MGPS Compliant"],
    configurations: [
      {
        title: "Manual Oxygen Manifold",
        desc: [
          "Designed for smaller clinics or as foundational backup networks, Manual Oxygen Manifolds offer unparalleled mechanical reliability. Utilizing heavy-duty forged brass valves, they securely regulate extreme cylinder pressures down to safe hospital line levels.",
          "While they require physical staff operation to switch cylinder banks when one depletes, their sheer simplicity guarantees fail-safe operation. Without complex electronics, they require virtually zero maintenance."
        ],
        image: "/images/key-application-images/manifold-plant-rooms.webp"
      },
      {
        title: "Semi-Automatic Oxygen Manifold",
        desc: [
          "A vital step up in operational efficiency. Semi-Automatic Manifolds feature an integrated mechanical shuttle valve that actively detects pressure drops.",
          "When the primary cylinder bank runs empty, the differential pressure causes the valve to shift mechanically to the secondary reserve bank, ensuring a continuous flow of life-support gas. Hospital staff simply push a lever to reset after cylinder replacement."
        ],
        image: "/images/mgps-product-page-images/mgps-oxygen-supply-images/semi-automatic-manifold.webp"
      },
      {
        title: "Fully Auto Oxygen Control Panel",
        desc: [
          "The central brain of the hospital's primary oxygen supply. This advanced panel regulates extreme cylinder pressure (up to 150 Bar) down to a safe, constant 4-Bar line pressure.",
          "The internal pneumatic shuttle valve automatically triggers a switchover to the secondary reserve bank instantly, without human intervention and without requiring electricity, ensuring absolute continuity during blackouts."
        ],
        image: "/images/mgps-product-page-images/mgps-oxygen-supply-images/fully-auto-oxygen-control-panel.webp"
      },
      {
        title: "Emergency Oxygen Manifold",
        desc: [
          "A critical fail-safe backup lifeline mandated by HTM 02-01 and NABH protocols. Acts as the ultimate backup if the primary LMO tank or main control panel fails.",
          "Constructed from heavy-duty forged brass with integrated Non-Return Valves (NRVs) on every tailpipe connection to prevent any backward gas flow from the main system."
        ],
        image: "/images/mgps-product-page-images/mgps-oxygen-supply-images/emergency-manifold-system.webp"
      },
      {
        title: "Oxygen Flow Meter with Humidifier",
        desc: [
          "The crucial final delivery point at the patient's bedside. Allows precisely calibrated oxygen flow rates (0-15 LPM) based on exact respiratory needs.",
          "The integrated Polycarbonate Humidifier Bottle bubbles the dry gas through sterile water, adding vital moisture to prevent patient respiratory tract irritation during prolonged use."
        ],
        image: "/images/mgps-product-page-images/mgps-oxygen-supply-images/oxygen-flow-meter-with-humidifier.webp"
      }
    ],
    engineering: [
      {
        title: "Power-Free Switchover",
        desc: "Our fully automatic panels utilize differential gas pressure to trigger the switchover valve. It requires zero electricity to function, ensuring 100% mechanical reliability during power outages.",
        bullets: ["Pneumatic Operation", "Immune to Power Grids"]
      },
      {
        title: "High-Pressure Forged Brass",
        desc: "Oxygen under 150+ Bar of pressure is highly volatile. We construct our manifold headers and valves from solid forged brass block, eliminating porosity and combustion risks.",
        bullets: ["Zero Porosity Blocks", "Factory Degreased"]
      },
      {
        title: "Audio-Visual Digital Alarms",
        desc: "Linked to Master Alarm Systems. If the primary bank empties, the system triggers flashing red LEDs and sirens in plant rooms and nursing stations immediately.",
        bullets: ["Master & Area Alarms", "Instant Fault Notification"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Emergency Rooms (ER)", image: "/images/key-application-images/emergency-rooms.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "We provide complete manifold rooms including panels, sensors, and structural mounting for immediate deployment.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our pipelines and products strictly adhere to ISO 9001:2015, ensuring medical-grade safety.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere in India.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Averting Catastrophe During a City Blackout",
      context: "A multi-specialty hospital storm-related blackout happened just as their primary oxygen bank depleted. Without power, staff had to manually open valves in the dark, endangering patients.",
      solution: "MedGenz installed a Fully Auto Pneumatic Oxygen Control Panel. Switchover now happens instantly and automatically with zero electricity required, providing absolute peace of mind."
    },
    specs: [
      { label: "Block Material", value: "High-Density Forged Brass (Zero Porosity)" },
      { label: "Automation Type", value: "Fully Pneumatic Differential Pressure Switchover" },
      { label: "Flow Capacity", value: "0 to 15 LPM with Polycarbonate Humidifier" },
      { label: "Pressure Rating", value: "150 Bar (Input) / 4 Bar (Regulated Output)" },
      { label: "Safety Standard", value: "HTM 02-01, ISO Color Coded (Indian MGPS Compliant)" }
    ],
    faqs: [
      { q: "How does the Fully Auto Oxygen Control Panel work?", a: "It monitors pressure in two banks. When the primary empties, a pneumatic valve instantly switches flow to the secondary bank without human intervention." },
      { q: "Does the switchover require electricity?", a: "No. The mechanism is entirely gas-pressure driven, making it fail-safe even during a total hospital power failure." },
      { q: "What materials are used?", a: "Heavy-duty forged brass blocks and stainless steel fittings, strictly factory-degreased to prevent combustion risks." },
      { q: "Are your systems color-coded?", a: "Yes, we strictly follow Indian and International HTM standards (White for Oxygen) for easy identification." }
    ],
    heroImage: "/images/service-images/oxygen-manifold-main.webp"
  },
  'nitrous-oxide-system': {
    title: "Nitrous Oxide (N₂O) Systems",
    tagline: "Anaesthetic Gas Supply",
    heroDesc: "Nitrous Oxide is a vital anaesthetic and analgesic gas. Because N₂O undergoes rapid expansion from liquid to gas, standard manifolds freeze and fail. Our systems feature thermostatically heated control panels to guarantee continuous flow.",
    atAGlance: ["Integrated Line Heaters", "Fully Auto Pneumatic Switch", "Forged Brass Construction", "French Blue Color Coding"],
    configurations: [
      {
        title: "N₂O Control Panel with Heater",
        desc: [
          "N₂O expands rapidly, causing extreme cooling (Joule-Thomson effect) that freezes moisture on regulators. Our panels feature integrated 150W-300W heaters.",
          "Thermostatically controlled heating warms the gas as it passes through the primary regulator, guaranteeing smooth, continuous flow to the OT."
        ],
        image: "/images/mgps-product-page-images/mgps-nitrous-oxide-images/n2o-control-panel-with-heater.webp"
      },
      {
        title: "Fully Auto N₂O Manifold",
        desc: [
          "The primary hub connecting dual cylinder banks to the network. Employs pneumatic shuttle valves for instant bank switching.",
          "Ensures anaesthetic gas is never interrupted during prolonged surgeries, requiring zero manual intervention."
        ],
        image: "/images/mgps-product-page-images/mgps-nitrous-oxide-images/fully-auto-n2o-manifold.webp"
      },
      {
        title: "Emergency N₂O Manifold",
        desc: [
          "A critical tier-three backup system mandated by NABH. Provides an independent supply if the main auto panel requires maintenance.",
          "Forged brass construction with non-return valves (NRVs) to ensure zero backflow into exhausted cylinders."
        ],
        image: "/images/mgps-product-page-images/mgps-nitrous-oxide-images/n2o-emergency-manifold.webp"
      }
    ],
    engineering: [
      {
        title: "Thermostatic Line Heaters",
        desc: "Integrated electric heaters counteract the cooling effect of expanding gas, ensuring regulators never freeze during high-demand surgical scenarios.",
        bullets: ["Prevents Regulator Frost", "Thermostatically Controlled"]
      },
      {
        title: "Power-Free Switchover",
        desc: "While the heater needs power, the gas switchover valve is 100% pneumatic, ensuring bank shifting remains fail-safe during power failures.",
        bullets: ["Pneumatic Switch Mechanism", "Immune to Power Grids"]
      },
      {
        title: "Forged Brass Manifolds",
        desc: "N₂O exists as both liquid and gas under pressure. Forged brass blocks eliminate porosity and prevent micro-leaks under extreme pressure cycles.",
        bullets: ["Zero Porosity Blocks", "Handles Phase Shift"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Labour & Maternity Wards", image: "/images/key-application-images/maternity-labour-ward.webp" }
    ],
    whyChoose: [
      { title: "Rapid Installation", desc: "Streamlined precision planning ensures faster project completion with minimal disruption.", icon: "/images/why-choose-medgenz-symbols/rapid-installation-icon.webp" },
      { title: "ISO & CE Certified", desc: "Our N2O products strictly adhere to ISO 9001:2015 standards for medical safety.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Onsite installation and testing provided by our engineering teams nationwide.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Relationship doesn't end after handover; we provide complete AMC and parts support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Preventing Regulator Freeze-Ups in a Maternity Hospital",
      context: "A hospital used high N2O flow for pain relief in labor. Standard regulators were freezing over, blocking gas flow and causing staff panic.",
      solution: "Installed MedGenz N2O Control Panel with Integrated Heater. Frost accumulation stopped entirely, ensuring smooth flow even under max demand."
    },
    specs: [
      { label: "Gas Handled", value: "Nitrous Oxide (N₂O) / Entonox Compatibility" },
      { label: "Block Material", value: "High-Density Forged Brass" },
      { label: "Anti-Freeze Mechanism", value: "Thermostatic Electric Heater (150W-300W)" },
      { label: "Safety Standard", value: "HTM 02-01, ISO Color Coded (French Blue)" }
    ],
    faqs: [
      { q: "Why is a heater needed for N2O?", a: "Expanding N2O absorbs heat rapidly, freezing moisture in the air onto regulators. Heaters prevent this flow blockage." },
      { q: "Primary use outside OT?", a: "N2O (as Entonox) is used extensively in Labor Wards for rapid pain relief during childbirth." },
      { q: "Standard color code?", a: "French Blue is the official color for N2O pipelines, outlets, and cylinders." }
    ],
    heroImage: "/images/service-images/n2o-manifold-main.webp"
  },
  'medical-air-system': {
    title: "Medical Air Systems",
    tagline: "Surgical 7-Bar / Medical 4-Bar",
    heroDesc: "Medical compressed air is a life-saving drug. Any moisture, oil, or particulate contamination is unacceptable. We manufacture 100% oil-free, multi-stage filtered systems for Class 100 air purity.",
    atAGlance: ["100% Oil-Free Technology", "Advanced 4-Stage Filtration", "Twin-Tower Desiccant Dryers", "Duplex/Triplex Auto Switchover"],
    configurations: [
      {
        title: "Oil-Free Air Compressor Plant",
        desc: [
          "Strictly 100% oil-free using dry-running scroll or Teflon-coated technology. Ensures no toxic oil vapors ever enter the patient's lungs.",
          "Built in Duplex or Triplex configurations with PLC auto-sequencing to ensure surgical air is always available, even during motor maintenance."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-air-system-images/oil-free-air-compressor-system.webp"
      },
      {
        title: "High-Pressure Air Receiver Tank",
        desc: [
          "ASME-certified storage vessel with internal anti-corrosive epoxy coating. Stores 'buffered' air to prevent pump over-cycling.",
          "Equipped with auto-drain valves to instantly expel condensed water, prolonging the life of the drying towers."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-air-system-images/air-receiver-tank.webp"
      }
    ],
    engineering: [
      {
        title: "Twin-Tower Desiccant Dryers",
        desc: "Heatless dryers chemically strip moisture from air, achieving a medical-grade dew point of -40°C, stopping mold and rust.",
        bullets: ["-40°C Dew Point", "Prevents Pipeline Corrosion"]
      },
      {
        title: "Digital Dew Point Alarms",
        desc: "Integrated monitors constantly scan moisture levels, triggering sirens if desiccant needs replacement before water reaches outlets.",
        bullets: ["Continuous Moisture Scanning", "Plant Room Audio/Visual Alarms"]
      },
      {
        title: "Smart Lead-Lag Automation",
        desc: "PLC panel automatically rotates which pump starts first, equalizing motor wear and doubling plant lifespan.",
        bullets: ["Equalizes Motor Wear", "Fail-Safe Redundancy"]
      }
    ],
    applications: [
      { title: "Orthopedic OTs (7-Bar)", image: "/images/service-images/modular-ot-product.webp" },
      { title: "ICU Ventilators (4-Bar)", image: "/images/key-application-images/icu.webp" }
    ],
    whyChoose: [
      { title: "Zero Oil Risk", desc: "Standard compressors leak oil vapor; our medical plants are physically incapable of oil contamination.", icon: "/images/why-choose-medgenz-symbols/rapid-installation-icon.webp" },
      { title: "NABH Compliant", desc: "4-stage filtration (Coarse to Bacterial) adheres strictly to HTM 02-01 standards.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Setup", desc: "Headquartered in Delhi, our teams handle plant room setups for hospitals nationwide.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Validation AMC", desc: "Includes routine filter replacements, dew point calibration, and compressor maintenance.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Stopping Ventilator Failure in a Delhi ICU",
      context: "A hospital faced expensive ventilator breakdowns due to water spraying from outlets installed by an industrial contractor.",
      solution: "MedGenz installed an Oil-Free Duplex system with Twin-Tower Dryers. bone-dry air now protects their life-support machines."
    },
    specs: [
      { label: "Compression Technology", value: "100% Oil-Free Scroll or Teflon-Coated" },
      { label: "Filtration Grade", value: "HTM Compliant 4-Stage (Bacterial Removal)" },
      { label: "Air Dew Point", value: "-40°C Guaranteed" },
      { label: "Operating Pressure", value: "Medical (4-Bar) / Surgical (7-Bar to 10-Bar)" }
    ],
    faqs: [
      { q: "Why must medical air be oil-free?", a: "Standard compressors use oil that can cause fatal lipid pneumonia if patient lungs inhale the vapor." },
      { q: "Medical vs Surgical Air?", a: "Medical (4-Bar) is for breathing; Surgical (7-Bar) is for driving high-speed bone drills and saws." },
      { q: "Purpose of desiccant dryers?", a: "To chemically remove moisture, ensuring air is dry enough to prevent bacteria and rust in pipelines." }
    ],
    heroImage: "/images/service-images/medical-air-main.webp"
  },
  'central-vacuum-system': {
    title: "Central Vacuum Systems",
    tagline: "High Suction Power",
    heroDesc: "Medical vacuum is critical for removing fluids and infectious materials. Our systems provide instantaneous high suction power with absolute bio-filtration to safeguard staff and plant machinery.",
    atAGlance: ["Rotary Vane High-Suction", "Sub-Micron Bacterial Filters", "ASME Certified Receivers", "Duplex/Triplex Automation"],
    configurations: [
      {
        title: "Vacuum Pump Plant & Receiver",
        desc: [
          "Heavy-duty oil-lubricated rotary vane pumps generating suction up to -760 mmHg. Intelligent load sharing configurations.",
          "ASME-certified receiver tank stores 'negative pressure', providing instant max-power suction the second a surgical valve is opened."
        ],
        image: "/images/mgps-product-page-images/mgps-centeral-vacuum-system-images/vacuum-pump-system-receiver-tank.webp"
      },
      {
        title: "Medical Bacterial Filters",
        desc: [
          "Extracting fluids creates hazardous aerosol exhaust. Our sub-micron filters eliminate 99.999% of biological pathogens.",
          "Features a parallel bypass design, allowing nurses/engineers to change saturated filters without shutting down the OT suction."
        ],
        image: "/images/mgps-product-page-images/mgps-centeral-vacuum-system-images/medical-bacterial-filter.webp"
      },
      {
        title: "Vacuum Regulators & Trolleys",
        desc: [
          "Precision regulators allow staff to dial in exact suction levels for neonatal care or high-power orthopedic fluid extraction.",
          "Shatterproof polycarbonate collection jars feature mechanical overflow protection to block fluids from entering pipeline."
        ],
        image: "/images/mgps-product-page-images/mgps-centeral-vacuum-system-images/vacuum-regulators-ward-trolley.webp"
      }
    ],
    engineering: [
      {
        title: "PLC-Based Automation",
        desc: "Intelligent control panels alternate Lead and Lag pumps to equalize motor wear, automatically engaging standby units if pressure drops.",
        bullets: ["Equalizes Motor Wear", "Instant Fail-Safe Switchover"]
      },
      {
        title: "Redundant Filtration",
        desc: "Parallel filtration racks allow instant diversion of vacuum flow if one filter clogs, ensuring zero downtime during critical surgery.",
        bullets: ["Parallel Bypass Design", "Safe Bio-hazard Exhaust"]
      },
      {
        title: "Corrosion Resistance",
        desc: "Vacuum headers are designed using medical-grade copper or specialized CPVC to withstand corrosive bio-fluids without collapsing.",
        bullets: ["Corrosion-Proof Materials", "High Negative Pressure Rating"]
      }
    ],
    applications: [
      { title: "Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Rapid Installation", desc: "Streamlined execution and modular skids for faster plant room completion.", icon: "/images/why-choose-medgenz-symbols/rapid-installation-icon.webp" },
      { title: "Bio-Safety Certified", desc: "Our suction filtration products strictly adhere to cleanroom biological exhaust standards.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Expert engineering teams travel directly to your site for complete plant integration.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive AMC support includes filter replacements and pump vane servicing.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Preventing Suction Failure in a Trauma Center",
      context: "A busy ER experienced dangerous suction drops as their single-pump system couldn't handle volumetric demand during mass casualties.",
      solution: "Upgraded to a MedGenz Triplex Vacuum System with 1000L buffer tank. ER now has flawless, instant high-power suction during peak surges."
    },
    specs: [
      { label: "Pump Technology", value: "Heavy-Duty Rotary Vane (Oil Lubricated)" },
      { label: "Max Vacuum Level", value: "Up to -760 mmHg (-1 Bar)" },
      { label: "Filtration Standard", value: "99.999% Biological Aerosol Removal" },
      { label: "Tank Certification", value: "ASME / ISO Pressure Vessel Standard" }
    ],
    faqs: [
      { q: "Why central vacuum over portable?", a: "Silent at bedside, safer bio-hazard exhaust outside hospital, and higher instantaneous power." },
      { q: "What prevents pump destruction?", a: "Shatterproof collection jars and absolute Bacterial Filters block liquids/aerosols from reaching pump vanes." },
      { q: "Purpose of receiver tank?", a: "Stores 'negative pressure' for instant suction, preventing pumps from constant over-cycling." }
    ],
    heroImage: "/images/service-images/vacuum-system-main.webp"
  },
  'copper-pipeline-network': {
    title: "Medical Copper Pipelines",
    tagline: "The Arteries of Healthcare",
    heroDesc: "Life-support gases must travel without contamination or leakage. We supply and install seamless, degreased BS EN 13348 copper pipelines engineered for absolute safety.",
    atAGlance: ["BS EN 13348 Certified", "100% Factory Degreased", "Inert Nitrogen Purged", "Silver Brazed Joints"],
    configurations: [
      {
        title: "Copper Pipeline Network",
        desc: [
          "Seamless copper tubes manufactured to BS EN 13348 medical standards. Intensely degreased to remove manufacturing oils.",
          "Capped at both ends to ensure the internal surface remains immaculately clean until the moment of installation."
        ],
        image: "/images/service-images/copper-pipe-main.webp"
      },
      {
        title: "Medical Copper Fittings",
        desc: [
          "Specialized factory-made elbows, tees, and reducers. Precision curvature ensures laminar gas flow and zero pressure drops.",
          "Eliminates the micro-fractures caused by manual pipe bending, complying strictly with BS EN 1254-1."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-grade-copper-pipeline-images/pipe-fitting-joints.webp"
      },
      {
        title: "Distribution Installation",
        desc: [
          "Precision routing using high-strength Silver-Copper-Phosphorus brazing alloys for joints stronger than the pipes themselves.",
          "Executes every single joint using Inert Gas Shielding to guarantee spotless, oxidation-free internal pathways."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-grade-copper-pipeline-images/pipeline-installation-brazing.webp"
      }
    ],
    engineering: [
      {
        title: "Inert Nitrogen Shielding",
        desc: "During brazing, we continuously purge the pipeline with Nitrogen. This displaces oxygen, preventing toxic black soot from forming inside.",
        bullets: ["Zero Internal Oxidation", "Protects Patient Airways"]
      },
      {
        title: "Oxygen Degreasing",
        desc: "Standard pipes contain manufacturing oils that spontaneously ignite in high-pressure oxygen. Our pipes are strictly 100% degreased.",
        bullets: ["Prevents Oxygen Fires", "Factory Sealed Tubes"]
      },
      {
        title: "1.5x Pressure Testing",
        desc: "The entire network is charged with nitrogen to 150% of operating pressure and held for 24 hours to guarantee zero leaks.",
        bullets: ["Hydrostatic Verification", "24-Hour Hold Testing"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Neonatal ICUs (NICU)", image: "/images/projects/delhi-mot-thumb.webp" },
      { title: "Emergency Trauma Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Expert In-House Teams", desc: "Our specialized brazing technicians handle the entire installation, eliminating third-party errors.", icon: "/images/why-choose-medgenz-symbols/in-house-team.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015 standards for healthcare safety.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your site nationwide.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive support includes pressure re-validation and pipeline inspection services.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Preventing Oxygen Combustion in a Delhi Hospital",
      context: "A contractor illegally used standard AC copper pipes for an oxygen line, leaving heavy layers of flammable oil inside.",
      solution: "MedGenz replaced the network with BS EN 13348 degreased copper using Nitrogen Purging, passing all NABH safety audits flawlessly."
    },
    specs: [
      { label: "Pipe Standard", value: "BS EN 13348 / ASTM B819 Medical Grade" },
      { label: "Jointing Method", value: "Silver-Copper-Phosphorus Brazing" },
      { label: "Shielding Gas", value: "Continuous Inert Nitrogen Purge" },
      { label: "ID Marking", value: "Color Coded Bands per gas type (ISO 32)" }
    ],
    faqs: [
      { q: "Why not standard AC copper?", a: "Standard pipes contain manufacturing oils that spontaneously explode in high-pressure oxygen service." },
      { q: "What is Nitrogen Purging?", a: "Pumping inert gas through pipes during heat-brazing to prevent toxic soot forming inside patient lines." },
      { q: "How are lines identified?", a: "Via color-coded bands (White for O2, Yellow for Vac, etc.) denoting gas type and flow direction." }
    ],
    heroImage: "/images/service-images/mgps-product.webp"
  },
  'gas-control-safety': {
    title: "Gas Control & Safety",
    tagline: "Ward Isolation & Monitoring",
    heroDesc: "Sudden pressure drops or leaks require immediate isolation. Our AVSUs and digital alarms instantly isolate zones and notify staff without disrupting whole hospital supply.",
    atAGlance: ["2/3/4 Gas Area Valve Boxes", "12mm - 54mm Isolation Valves", "Digital Line Pressure Alarms", "Instant Emergency Shut-Off"],
    configurations: [
      {
        title: "Area Valve Box (AVSU)",
        desc: [
          "Local control center for hospital wings. Features lockable, break-glass doors for immediate emergency access to isolation valves.",
          "Integrated analog gauges provide instant visual readouts of line pressure directly at the nursing station or OT entrance."
        ],
        image: "/images/mgps-product-page-images/mgps-gas-control-valve-box-images/3-gases-area-valve-box.webp"
      },
      {
        title: "Isolation Ball Valves",
        desc: [
          "Quarter-turn, full-bore valves that do not restrict flow. 100% oxygen-degreased forged brass construction.",
          "Equipped with flat-face NIST connectors on both sides for seamless pressure testing or emergency bypass connection."
        ],
        image: "/images/mgps-product-page-images/mgps-gas-control-valve-box-images/isolation-valves-12mm-54mm.webp"
      },
      {
        title: "Line Pressure Alarm Systems",
        desc: [
          "Digital panels monitoring O2, Vac, and Air pressures. Triggers audio-visual alerts if levels deviate from safe HTM parameters.",
          "Features mute functionality and HIS/BMS integration for 24/7 centralized facility monitoring."
        ],
        image: "/images/mgps-product-page-images/mgps-gas-control-valve-box-images/line-pressure-alarm-systems.webp"
      }
    ],
    engineering: [
      {
        title: "Oxygen Degreased Hardware",
        desc: "All valves are factory-cleaned to remove hydrocarbon residue, neutralizing high-pressure oxygen combustion hazards.",
        bullets: ["Zero Porosity Forged Brass", "Prevents Spontaneous Ignition"]
      },
      {
        title: "Digital Micro-Sensors",
        desc: "High-precision pressure transducers detect fluctuations in milliseconds, ensuring alarms trigger the moment pressure fails.",
        bullets: ["Millisecond Response", "High-Precision Transducers"]
      },
      {
        title: "Fail-Safe Mechanical Locks",
        desc: "Valves and AVSU enclosures feature physical locks to prevent unauthorized tampering or accidental oxygen shut-offs.",
        bullets: ["Break-Glass Access", "Prevents Accidental Shut-offs"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Manifold Plant Rooms", image: "/images/key-application-images/manifold-plant-rooms.webp" }
    ],
    whyChoose: [
      { title: "Expert In-House Teams", desc: "Our technicians handle entire wall-flush setups, ensuring perfect alignment and calibration.", icon: "/images/why-choose-medgenz-symbols/in-house-team.webp" },
      { title: "ISO & CE Certified", desc: "Our control products adhere strictly to HTM 02-01 and ISO 9001:2015 safety standards.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "BMS Connectivity", desc: "Alarms can be linked directly to your central hospital dashboard via RS-485 Modbus.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive AMC includes annual digital sensor calibration and valve leak testing.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Isolating a Leak in a Mumbai ICU",
      context: "A renovation accident severed a gas line in a busy ward. In older systems, the entire hospital supply would need to be cut.",
      solution: "Staff broke the corridor AVSU glass and isolated only the specific zone. The rest of the hospital, including active OTs, remained unaffected."
    },
    specs: [
      { label: "Valve Material", value: "Forged Brass/Bronze (Oxygen Degreased)" },
      { label: "Valve Sizes", value: "12mm to 54mm Full-Bore" },
      { label: "Alarm Signal", value: "Audio/Visual LED + Buzzer (80dB)" },
      { label: "Enclosure", value: "Flush-Mounted Powder Coated CRCA / SS-304" }
    ],
    faqs: [
      { q: "What is an AVSU?", a: "Area Valve Service Unit—a lockable box allowing nurses to isolate gas flow to a single ward during emergencies." },
      { q: "Why degreased valves?", a: "Any oil residue inside a valve can ignite spontaneously when exposed to pure high-pressure oxygen." },
      { q: "Do alarms alert engineers?", a: "Yes, alarms sound locally at nursing stations and centrally in the engineering plant room simultaneously." }
    ],
    heroImage: "/images/service-images/area-valve-box-main.webp"
  },
  'bed-head-panels': {
    title: "Bed Head Panels",
    tagline: "Bedside Utility Integration",
    heroDesc: "The patient's bedside is the most critical zone. Trailing wires and loose oxygen pipes create severe hazards. Our extruded aluminum Bed Head Panels integrate all utilities into one sterile console.",
    atAGlance: ["Segregated Gas & Electrical", "Extruded Aluminum Body", "Customized Lengths (1m - 3m)", "Integrated Equipment Rails"],
    configurations: [
      {
        title: "3 Gas Outlet Panels",
        desc: [
          "Optimal for general wards and private rooms. Houses Oxygen, Medical Air (4 Bar), and Vacuum outlets in a compact console.",
          "Features integrated UPS-backed electrical switchboards and nurse-call buttons, with a smooth finish for rapid sterilization."
        ],
        image: "/images/mgps-product-page-images/mgps-bed-head-panel-images/3-outlets-bed-head-panel.webp"
      },
      {
        title: "4 Gas Outlet Panels",
        desc: [
          "Designed for HDUs and trauma bays. Incorporates a fourth gas line—usually Surgical Air (7 Bar) or redundant Oxygen.",
          "Larger footprint accommodates extra power sockets, RJ45 data ports, and integrated LED reading lights for patient comfort."
        ],
        image: "/images/mgps-product-page-images/mgps-bed-head-panel-images/4-outlets-bed-head-panel.webp"
      },
      {
        title: "ICU Bed Head Units",
        desc: [
          "Heavy-duty spanned units (up to 3m) custom-built for critical care. Houses multiple redundant gas outlets to run primary/backup ventilators.",
          "Features heavy-duty stainless steel medical rails to mount patient monitors and infusion pumps off the floor, clearing the emergency workspace."
        ],
        image: "/images/mgps-product-page-images/mgps-bed-head-panel-images/icu-bed-head-panel.webp"
      }
    ],
    engineering: [
      {
        title: "Segregated Compartments",
        desc: "Oxygen is highly combustible. Our panels feature solid aluminum internal partitions, keeping gas pipes and electrical wiring in separate channels.",
        bullets: ["Absolute Fire Safety", "Independent Service Access"]
      },
      {
        title: "Extruded Aluminum Profile",
        desc: "Body is manufactured from 2mm+ heavy-gauge aluminum alloy, providing high structural rigidity to support heavy monitor loads.",
        bullets: ["Rust-Proof Body", "Anti-Microbial Powder Coat"]
      },
      {
        title: "Flush-Mounted Outlets",
        desc: "Gas terminals and switches are mounted perfectly flush with the fascia to prevent impact damage and eliminate dust accumulation ledges.",
        bullets: ["Impact Protection", "Easy Wipe-Down Sterilization"]
      }
    ],
    applications: [
      { title: "Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Rapid Installation", desc: "Modular designs allow for fast wall-mount setup with minimal ward downtime.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our panels strictly adhere to ISO 9001:2015 standards for bedside safety.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, we supply and install panels nationwide.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Comprehensive AMC includes maintenance of sockets, gas outlets, and nurse call buttons.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Organizing Chaos in a Delhi ICU",
      context: "An ICU had ventilators and pumps plugged into floor extension cords. Trip hazards delayed nurses during crash situations.",
      solution: "Retrofitted customized ICU Units. Integrated all utilities into hidden channels and mounted monitors on rails, clearing floor space entirely."
    },
    specs: [
      { label: "Panel Material", value: "Extruded Aluminum Alloy (2mm minimum)" },
      { label: "Architecture", value: "3 physically segregated internal channels" },
      { label: "Surface Finish", value: "Anti-microbial electrostatic epoxy powder" },
      { label: "Electrical", value: "Modular 6/16A UPS Sockets, Data, Reading Lights" }
    ],
    faqs: [
      { q: "What is a Bed Head Panel?", a: "A wall console centralizing O2/Air outlets, power sockets, and nurse calls behind the bed." },
      { q: "Why segregate gas and electric?", a: "To prevent sparks from electrical shorts reaching pure oxygen pipes—a major fire safety rule." },
      { q: "Can ICU panels be custom lengths?", a: "Yes, we build custom lengths up to 3 meters with specific numbers of outlets per room demand." }
    ],
    heroImage: "/images/service-images/bed-head-panel-main.webp"
  },
  'gas-outlets-terminals': {
    title: "Gas Outlets & Terminals",
    tagline: "Precision Delivery Points",
    heroDesc: "The terminal unit is the final, most frequently used point of the MGPS. We manufacture precision-engineered, dual-lock outlets designed for absolute 100% leak-free operation.",
    atAGlance: ["100% Leak-Proof Seals", "Dual-Lock Safety Valve", "Non-Interchangeable Indexing", "Gas-Specific Color Coding"],
    configurations: [
      {
        title: "Oxygen & Vacuum Terminals",
        desc: [
          "Color-coded (White/Yellow) outlets with self-sealing check valves that stop gas instantly when probes are removed.",
          "Precision-machined brass cores ensure high flow rate and zero micro-leaks even after thousands of usage cycles."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-outlet-images/oxygen-nitrogen-outlets.webp"
      },
      {
        title: "Medical Air & N₂O Outlets",
        desc: [
          "High-pressure terminals for anesthesia and ventilators. Geometrically indexed to prevent any gas cross-connection errors.",
          "Available for flush wall mount, surface box, or integration into Bed Head Panels and Surgical Pendants."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-outlet-images/medical-air-nitrous-oxide.webp"
      },
      {
        title: "Probe & Adaptor Systems",
        desc: [
          "CNC-machined male probes in British (BS), DIN, AFNOR, or Parkodex standards for seamless equipment locking.",
          "Machined from high-grade stainless steel or plated brass to withstand tens of thousands of insertion cycles without wear."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-outlet-images/probe-adapter-image.webp"
      }
    ],
    engineering: [
      {
        title: "Dual-Lock Mechanism",
        desc: "Requires intentional 'push-and-twist' action to release probes, preventing accidental ventilator disconnection during bed movements.",
        bullets: ["Prevents Accidental Disconnects", "Smooth Single-Hand Insertion"]
      },
      {
        title: "Non-Interchangeable Indexing",
        desc: "Each gas type has unique geometric pin orientations; it is physically impossible to plug O2 into an N2O outlet.",
        bullets: ["Eliminates Gas Mix-ups", "Gas-Specific Internal Sizing"]
      },
      {
        title: "Precision Machined Core",
        desc: "Valve assemblies are CNC-machined from solid brass block, ensuring zero porosity and absolute leak-proof sealing.",
        bullets: ["Extruded Brass Valve Block", "100% Oxygen Degreased"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Supply", desc: "We provide complete outlet assemblies including boxes and probes for total compatibility.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO 32 Coding", desc: "Strictly adhere to international color-coding for rapid, error-free gas identification.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Setup", desc: "Expert engineering teams travel directly to your site for precision wall-integrated installation.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "100% Factory Tested", desc: "Every unit is stress-tested for leaks and flow rate efficiency before dispatch.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Oxygen Waste in a Mumbai ICU",
      context: "A hospital faced high LMO bills due to cheap outlets that failed to seal when probes were removed, creating constant micro-leaks.",
      solution: "Retrofitted with MedGenz Dual-Lock Outlets with self-sealing check valves. Micro-leaks dropped to zero immediately, saving thousands daily."
    },
    specs: [
      { label: "Valve Core Material", value: "Solid Extruded Brass (Factory Degreased)" },
      { label: "Standards Compatibility", value: "BS (British), DIN, AFNOR, or Parkodex" },
      { label: "Safety Mechanism", value: "Gas-specific pin indexing + Dual-lock release" },
      { label: "Color Coding", value: "ISO 32 / HTM compliant visual fascia" }
    ],
    faqs: [
      { q: "Function of terminal units?", a: "Final delivery points of the MGPS where ventilators or suction units plug into the central supply." },
      { q: "Prevent gas mix-ups?", a: "Outlets are gas-specific; physical pin-indexing prevents plugging an O2 probe into an N2O outlet." },
      { q: "What is Dual-Lock safety?", a: "Requires intentional pushing of a release ring, preventing probes from 'popping out' if bumped." }
    ],
    heroImage: "/images/service-images/gas-outlets-main.webp"
  },
  'accessories-consumables': {
    title: "Accessories & Consumables",
    tagline: "The Final Connection",
    heroDesc: "Integrity doesn't end at the wall outlet. Connecting accessories must be leak-proof, durable, and 100% sterile to complete the life-support network safely.",
    atAGlance: ["ISO Color-Coded Tubes", "Unbreakable Polycarbonate", "Precision Machined Brass", "100% Leak-Proof Seals"],
    configurations: [
      {
        title: "Color-Coded H.P. Rubber Tubes",
        desc: [
          "Nylon-braided reinforced high-pressure rubber hoses designed to withstand 4-Bar to 7-Bar pressure without kinking or bursting.",
          "Strictly color-coded (White, Yellow, Black/White, Blue) to ISO 32 standards for instant line tracing and safety."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-accessories-images/mgps-color-tubes.webp"
      },
      {
        title: "Humidifiers & Collection Jars",
        desc: [
          "Humidifier bottles bubble dry O2 through sterile water to prevent patient airway irritation. Jars safely trap surgical suction fluids.",
          "Manufactured from high-grade, unbreakable Polycarbonate that is fully autoclavable up to 134°C for repeated sterilization."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-accessories-images/humidifier-bottles.webp"
      },
      {
        title: "Connectors & Adaptors",
        desc: [
          "CNC-machined male probes, hose nipples, and threaded adaptors (NIST, DISS, BS) for equipment-to-outlet linking.",
          "Machined from solid brass and heavy chrome-plated to resist corrosion from harsh hospital cleaning solvents."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-accessories-images/mgps-connectors-adapters.webp"
      }
    ],
    engineering: [
      {
        title: "Nylon Braided Reinforcement",
        desc: "Internal matrix of woven nylon allows H.P. tubes to withstand massive burst pressures without bulging or rupturing.",
        bullets: ["Extreme Burst Resistance", "Anti-Static Rubber Core"]
      },
      {
        title: "Autoclavable Polycarbonate",
        desc: "Jars do not melt or cloud when subjected to 121°C / 134°C high-pressure steam, ensuring absolute infection control.",
        bullets: ["134°C Steam Sterilizable", "Shatterproof Safety"]
      },
      {
        title: "Anti-Corrosion Plating",
        desc: "All brass connectors are CNC-machined and chrome-plated, creating a brilliant, rust-proof finish that ignores harsh cleaners.",
        bullets: ["CNC Machined Precision", "Heavy Chrome/Nickel Plating"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Supply", desc: "We supply pre-crimped tubes with pre-fitted adaptors ready for immediate clinical use.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "All accessories meet rigorous ISO safety standards for gas-specific identification.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Setup", desc: "Bulk quantities maintained in Delhi NCR for immediate nationwide dispatch.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide comprehensive spare parts support for all jars, tubes, and adaptors.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Stopping Oxygen Leaks in a Delhi ICU",
      context: "A hospital noticed a spike in LMO consumption. Audit showed cheap PVC connection tubes had cracked and were leaking thousands of liters daily.",
      solution: "Replaced all connections with MedGenz Nylon-Braided H.P. Rubber Tubes. Waste dropped to zero immediately, recovering investment in one month."
    },
    specs: [
      { label: "Tube Construction", value: "Antistatic Rubber with Nylon Braid" },
      { label: "Burst Pressure", value: "> 60 Bar (Factor of safety 8x)" },
      { label: "Jar Material", value: "High-Impact Unbreakable Polycarbonate" },
      { label: "Adaptor Material", value: "Extruded Brass with heavy chrome plating" }
    ],
    faqs: [
      { q: "Why color-code rubber tubes?", a: "To prevent fatal errors by ensuring instant visual identification of the gas (e.g., White for O2)." },
      { q: "Can jars be sterilized?", a: "Yes, they are manufactured from high-grade polycarbonate and are fully autoclavable up to 134°C." },
      { q: "Lifespan of H.P. Tubes?", a: "Our nylon-reinforced rubber tubes easily last 5+ years without cracking or degrading." }
    ],
    heroImage: "/images/service-images/accessories-main.webp"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = productData[slug];
  if (!data) return { title: 'Product Not Found' };
  return {
    title: `${data.title} | MGPS Specialists | MedGenz`,
    description: data.heroDesc,
  };
}

export default async function MGPSProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = productData[slug];

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
      "url": `https://www.medgenz.com/services/medical-gas-pipeline-system/${slug}`,
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
              <li><Link href="/services/medical-gas-pipeline-system" className="hover:text-brand-600 transition-colors">MGPS</Link></li>
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
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block">System Components</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Technical <span className="text-brand-600">Configurations</span></h2>
            <div className="w-16 md:w-20 h-1 bg-brand-600 mx-auto rounded-full mb-4 md:mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-lg text-center font-light">Every component is engineered specifically for long-term hospital reliability and patient safety.</p>
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
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {data.engineering.map((eng, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-brand-600 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">{eng.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow font-light">{eng.desc}</p>
                <ul className="list-none text-gray-700 text-sm space-y-2 font-medium border-t border-gray-100 pt-4">
                  {eng.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 uppercase tracking-widest text-[10px]">
                      <span className="text-brand-50 font-bold bg-brand-600 rounded-full w-4 h-4 flex items-center justify-center shrink-0">•</span> {b}
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
                    <HelpCircle className="w-5 h-5 text-brand-600 shrink-0" />
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
