import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CheckCircle, ShieldCheck, ArrowRight, Activity, Zap, Layers, Settings, Microscope, Shield, Globe, Clock, Award, FileText, Phone, MessageSquare, Calendar, Wind, Layout, Lightbulb, Gauge, Droplets } from "lucide-react";
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
    title: "Hospital Oxygen Supply Systems",
    tagline: "The Heartbeat of Healthcare",
    heroDesc: "Reliable oxygen delivery is the most critical utility in any medical facility. A pressure drop or switchover delay can be catastrophic. Our advanced Oxygen Supply Systems are engineered for absolute fail-safe redundancy, featuring pneumatic automation, forged brass manifolds, and precision flow meters to guarantee continuous life-support to every patient bed.",
    atAGlance: ["Fully Auto Pneumatic Switch", "Forged Brass Construction", "Zero Power Required for Switch", "HTM & Indian MGPS Compliant"],
    configurations: [
      {
        title: "Manual Oxygen Manifold",
        desc: [
          "Designed for smaller clinics or as foundational backup networks, Manual Oxygen Manifolds offer unparalleled mechanical reliability. Utilizing heavy-duty forged brass valves, they securely regulate extreme cylinder pressures down to safe hospital line levels.",
          "While they require physical staff operation to switch cylinder banks when one depletes, their sheer simplicity guarantees fail-safe operation. Without complex electronics, they require virtually zero maintenance and can withstand decades of continuous use in harsh environments."
        ],
        image: "/images/key-application-images/manifold-plant-rooms.webp"
      },
      {
        title: "Semi-Automatic Oxygen Manifold",
        desc: [
          "A vital step up in operational efficiency. Semi-Automatic Manifolds feature an integrated mechanical shuttle valve that actively detects pressure drops.",
          "When the primary cylinder bank runs completely empty, the differential pressure causes the valve to shift mechanically to the secondary reserve bank, ensuring a continuous flow of life-support gas to the hospital. While the switchover itself is automatic, hospital staff must simply push a lever to reset the primary side after replacing the empty cylinders."
        ],
        image: "/images/mgps-product-page-images/mgps-oxygen-supply-images/semi-automatic-manifold.webp"
      },
      {
        title: "Fully Auto Oxygen Control Panel",
        desc: [
          "The central brain of the hospital's primary oxygen supply. This advanced panel is connected to two independent banks of high-pressure oxygen cylinders and regulates the extreme cylinder pressure (often up to 150 Bar) down to a safe, constant 4-Bar line pressure.",
          "Pneumatic Automation: The moment the active cylinder bank drops below a critical threshold, the internal pneumatic shuttle valve automatically triggers a switchover to the secondary reserve bank. This happens instantly, without human intervention, and crucially—without requiring electricity—ensuring absolute continuous supply even during blackouts."
        ],
        image: "/images/mgps-product-page-images/mgps-oxygen-supply-images/fully-auto-oxygen-control-panel.webp"
      },
      {
        title: "Emergency Oxygen Manifold",
        desc: [
          "A critical fail-safe mandated by HTM 02-01 and strict NABH safety protocols. The Emergency Manifold acts as the ultimate backup lifeline for the hospital.",
          "If the primary Liquid Medical Oxygen (LMO) tank fails, or if the main Auto Control Panel requires routine maintenance, this secondary system is instantly brought online. Constructed from heavy-duty forged brass, these manifolds feature non-return valves (NRVs) on every tailpipe connection to ensure that an empty cylinder cannot draw oxygen backward out of the main system."
        ],
        image: "/images/mgps-product-page-images/mgps-oxygen-supply-images/emergency-manifold-system.webp"
      },
      {
        title: "Oxygen Flow Meter with Humidifier",
        desc: [
          "The crucial final delivery point at the patient's bedside. Our Oxygen Flow Meters plug directly into the MGPS wall outlets or Bed Head Panels, allowing nursing staff to precisely calibrate the oxygen flow rate (typically 0-15 Liters Per Minute) based on the patient's exact respiratory needs.",
          "The integrated Polycarbonate Humidifier Bottle is essential for patient comfort. Pure pipeline oxygen is inherently extremely dry; the humidifier bubbles the gas through sterile water, adding vital moisture to the air before it reaches the patient's nasal cannula, preventing severe respiratory tract irritation during prolonged use."
        ],
        image: "/images/mgps-product-page-images/mgps-oxygen-supply-images/oxygen-flow-meter-with-humidifier.webp"
      }
    ],
    engineering: [
      {
        title: "Power-Free Switchover",
        desc: "The most dangerous moment in oxygen supply is a power outage combined with empty cylinders. Our fully automatic panels utilize differential gas pressure to trigger the switchover valve. It requires zero electricity to function, ensuring 100% mechanical reliability.",
        bullets: ["Pneumatic Operation", "Immune to Power Grids"]
      },
      {
        title: "High-Pressure Forged Brass",
        desc: "Oxygen under 150+ Bar of pressure is highly volatile. We construct our manifold headers and valves from solid forged brass block. This eliminates porosity and completely mitigates the risk of high-pressure combustion or micro-leaks.",
        bullets: ["Zero Porosity Blocks", "Factory Degreased"]
      },
      {
        title: "Audio-Visual Digital Alarms",
        desc: "Our control panels are linked to Master Alarm Systems. If the primary bank empties, the system mechanically switches over and immediately triggers a flashing red LED and a loud siren in the plant room and nursing stations, prompting staff to replace the empty cylinders safely.",
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
      { title: "Turnkey Solutions", desc: "By providing turnkey manifolds and panels solutions, we eliminate delays and ensure strict pressure quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our pipelines and oxygen products strictly adhere to ISO 9001:2015, ensuring medical-grade safety outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Averting Catastrophe During a City Blackout",
      context: "A prominent mid-sized multi-specialty hospital was operating on a dated, manually-switched oxygen manifold. During an intense summer storm, the city experienced a massive power blackout just as their primary oxygen cylinder bank depleted. Without power, standard electronic alarms failed, and staff had to scramble in the dark with flashlights to manually wrench open the reserve valves, endangering multiple patients on ventilators.",
      solution: "MedGenz overhauled their entire plant room with a Fully Automatic Pneumatic Oxygen Control Panel and an independent Emergency Backup Manifold. Because the new system runs entirely on differential gas pressure, the switchover to the reserve bank now happens instantly and automatically, zero electricity required. This robust mechanical fail-safe has given the hospital administration and surgical team absolute peace of mind."
    },
    specs: [
      { label: "Manifold Block Material", value: "High-Density Forged Brass (Zero Porosity)" },
      { label: "Automation Type", value: "Fully Pneumatic Differential Pressure Switchover" },
      { label: "Flow Meter Capacity", value: "0 to 15 LPM (Liters Per Minute) with Polycarbonate Humidifier" },
      { label: "Max Operating Pressure", value: "150 Bar (Cylinder Input) / 4 Bar (Regulated Output)" },
      { label: "Safety Standards", value: "HTM 02-01, ISO Color Coded (Compliant with Indian MGPS codes)" }
    ],
    faqs: [
      { q: "How does the Fully Auto Oxygen Control Panel work?", a: "The control panel continuously monitors the pressure of two connected oxygen cylinder banks. When the primary bank runs empty, a pneumatic shuttle valve automatically switches the gas draw to the secondary reserve bank, ensuring the hospital never loses oxygen pressure." },
      { q: "Does the automatic switchover require electricity?", a: "No. Our core switchover mechanism is entirely pneumatic (driven by gas pressure). This is a critical fail-safe, meaning the oxygen supply will continue to switch over automatically even during a complete hospital power blackout." },
      { q: "What materials are used in the oxygen manifold construction?", a: "To handle extreme high pressure safely, our manifolds are constructed using heavy-duty forged brass blocks and high-grade stainless steel fittings. All components are strictly factory-degreased to prevent any combustion risks with pure oxygen." },
      { q: "Are your systems compliant with Indian MGPS color codes?", a: "Yes, our entire pipeline network and outlet systems strictly adhere to the Indian MGPS color-coding standards, ensuring rapid, error-free identification by medical staff and maintenance teams." }
    ],
    heroImage: "/images/service-images/oxygen-manifold-main.webp"
  },
  'nitrous-oxide-system': {
    title: "Hospital Nitrous Oxide (N₂O) Systems",
    tagline: "Anaesthetic Gas Supply",
    heroDesc: "Nitrous Oxide is a vital anaesthetic and analgesic gas utilized in Operation Theatres and Labor Wards. Because N₂O undergoes rapid expansion from liquid to gas, standard manifolds freeze and fail under high flow. Our specialized N₂O Supply Systems feature thermostatically heated control panels and fully automated switchovers to guarantee uninterrupted, safe delivery to the surgical team.",
    atAGlance: ["Integrated Line Heaters", "Fully Auto Pneumatic Switch", "Forged Brass Construction", "French Blue Color Coding"],
    configurations: [
      {
        title: "N₂O Control Panel with Heater",
        desc: [
          "The most crucial component in an N₂O network. Because Nitrous Oxide expands rapidly from a liquid state inside the cylinder into a gas in the pipeline, it causes a severe drop in temperature (Joule-Thomson effect). Without intervention, the moisture in the air freezes on the regulators, blocking gas flow entirely.",
          "Integrated Heating: Our N₂O control panels are equipped with integrated, thermostatically controlled electric line heaters (usually 150W - 300W). This safely warms the gas as it passes through the primary regulator, completely preventing frost accumulation and guaranteeing a smooth, continuous flow of anaesthetic gas to the Operation Theatre."
        ],
        image: "/images/mgps-product-page-images/mgps-nitrous-oxide-images/n2o-control-panel-with-heater.webp"
      },
      {
        title: "Fully Auto N₂O Manifold System",
        desc: [
          "The primary distribution hub connecting the high-pressure N₂O cylinder banks to the hospital pipeline network. To ensure absolute patient safety during prolonged surgeries, the manifold utilizes a dual-bank configuration (e.g., 2x2 or 4x4 cylinders).",
          "Pneumatic Switchover: Just like our oxygen systems, the N₂O manifold features a fully automated pneumatic shuttle valve. When the primary bank of cylinders is exhausted, the system automatically and instantly shifts to the reserve bank without requiring manual intervention or electricity."
        ],
        image: "/images/mgps-product-page-images/mgps-nitrous-oxide-images/fully-auto-n2o-manifold.webp"
      },
      {
        title: "Emergency N₂O Manifold",
        desc: [
          "A critical redundancy measure mandated by HTM 02-01 and NABH protocols. The Emergency N₂O Manifold serves as an independent, third-tier backup system.",
          "If the main automatic control panel requires maintenance, or if an unprecedented facility-wide supply issue occurs, this emergency manifold can be instantly engaged to keep the surgical team supplied with vital anaesthesia. It is constructed from the same heavy-duty forged brass with integrated Non-Return Valves (NRVs) to prevent any backflow."
        ],
        image: "/images/mgps-product-page-images/mgps-nitrous-oxide-images/n2o-emergency-manifold.webp"
      }
    ],
    engineering: [
      {
        title: "Thermostatic Line Heaters",
        desc: "We integrate 230V or 24V electric line heaters directly into the primary reduction stage of the control panel. This directly counteracts the Joule-Thomson cooling effect, ensuring the regulators never freeze and block the gas flow during high-demand surgical scenarios.",
        bullets: ["Prevents Regulator Frost", "Thermostatically Controlled"]
      },
      {
        title: "Power-Free Switchover",
        desc: "The fully automatic panels utilize differential gas pressure to trigger the switchover shuttle valve between the primary and secondary cylinder banks. While the heater requires electricity, the actual gas flow and switchover mechanism is 100% pneumatic and fail-safe.",
        bullets: ["Pneumatic Switch Mechanism", "Immune to Power Grids"]
      },
      {
        title: "Forged Brass Manifolds",
        desc: "Because N₂O exists as both a liquid and a gas under high pressure (approx. 50 Bar) inside the cylinder, the manifold headers must be incredibly robust. We construct our manifolds from solid forged brass block, eliminating porosity and preventing micro-leaks under extreme pressure.",
        bullets: ["Zero Porosity Blocks", "Handles Liquid-Gas Shift"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Labour & Maternity Wards", image: "/images/key-application-images/maternity-labour-ward.webp" }
    ],
    whyChoose: [
      { title: "Rapid Installation", desc: "By following streamlined execution and precision planning, we ensure faster project completion with minimal disruption and maximum efficiency.", icon: "/images/why-choose-medgenz-symbols/rapid-installation-icon.webp" },
      { title: "ISO & CE Certified", desc: "Our pipelines and MGPS products strictly adhere to ISO 9001:2015, ensuring medical-grade safety outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Preventing Regulator Freeze-Ups in a Maternity Hospital",
      context: "A busy maternity hospital heavily utilized Entonox (an Oxygen and Nitrous Oxide mix) for rapid pain relief in their labor wards. During a particularly demanding night with multiple simultaneous deliveries, the high flow rate caused their standard N₂O manifold regulator to completely freeze over due to the Joule-Thomson effect, blocking the gas flow entirely and causing panic.",
      solution: "The Solution: MedGenz was called in for an emergency retrofit. We installed our advanced N₂O Control Panel with an Integrated Thermostatic Heater. The heater safely warmed the high-pressure gas just before the expansion valve, completely preventing frost accumulation. Even under maximum hospital-wide demand, the anaesthetic gas flow now remains perfectly smooth and continuous."
    },
    specs: [
      { label: "Gas Handled", value: "Nitrous Oxide (N₂O) / Entonox Compatibility" },
      { label: "Manifold Block Material", value: "High-Density Forged Brass (Zero Porosity)" },
      { label: "Automation Type", value: "Fully Pneumatic Differential Pressure Switchover" },
      { label: "Anti-Freeze Mechanism", value: "Electric Line Heater (150W - 300W, Thermostatically Controlled)" },
      { label: "Safety Standards", value: "HTM 02-01, ISO Color Coded (French Blue)" }
    ],
    faqs: [
      { q: "Why does the N₂O Control Panel require a heater?", a: "Nitrous Oxide is stored in cylinders as a liquid under high pressure. When it is drawn into the manifold and expands into a gas, it rapidly absorbs heat (Joule-Thomson effect). Without a heater, this extreme cooling causes atmospheric moisture to freeze on the regulators, potentially blocking the gas flow entirely during a surgery." },
      { q: "What happens if the primary N₂O cylinder bank empties?", a: "Our N₂O manifolds feature fully automatic pneumatic switchovers. The moment the primary bank's pressure drops below the critical threshold, the system automatically draws from the secondary reserve bank, ensuring the anaesthetic gas supply is never interrupted." },
      { q: "Is Nitrous Oxide used outside of Operation Theatres?", a: "Yes. While primarily used as an anaesthetic in OTs, N₂O is frequently mixed with Oxygen (known as Entonox) and used extensively in Labor and Maternity Wards for highly effective, rapid pain relief during childbirth, as well as in Dental Surgery clinics." },
      { q: "What is the standard color code for N₂O pipelines?", a: "According to HTM 02-01 and Indian MGPS standards, the official color code for Nitrous Oxide (N₂O) pipeline networks, outlets, and cylinders is French Blue. This ensures instant visual identification by medical staff." }
    ],
    heroImage: "/images/service-images/n2o-manifold-main.webp"
  },
  'medical-air-system': {
    title: "Hospital Medical Air Compressor Systems",
    tagline: "Surgical 7-Bar / Medical 4-Bar",
    heroDesc: "Medical compressed air is a life-saving drug. Whether powering heavy-duty pneumatic surgical tools at 7-Bar or providing breathable air to ICU ventilators at 4-Bar, any moisture, oil, or particulate contamination is unacceptable. We manufacture 100% oil-free, multi-stage filtered Medical Air Systems engineered for absolute patient safety and uninterrupted hospital operation.",
    atAGlance: ["100% Oil-Free Technology", "Advanced 4-Stage Filtration", "Twin-Tower Desiccant Dryers", "Duplex/Triplex Auto Switchover"],
    configurations: [
      {
        title: "Oil-Free Air Compressor System",
        desc: [
          "The generation engine of the entire network. Standard industrial compressors utilize oil to lubricate their pistons, which inevitably leaks toxic vapor into the airstream. Our Medical Air Compressors are strictly 100% Oil-Free, utilizing advanced dry-running scroll or Teflon-coated reciprocating technology. This ensures no oil ever enters the patient's respiratory pathway.",
          "Duplex/Triplex Automation: Hospitals cannot pause surgeries for maintenance. Our systems are built in Duplex (2 pumps) or Triplex (3 pumps) configurations with a PLC-based auto-sequencing panel. If the primary pump requires maintenance or if the hospital demand suddenly spikes, the secondary pumps activate instantly to share the load."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-air-system-images/oil-free-air-compressor-system.webp"
      },
      {
        title: "Air Receiver Tank",
        desc: [
          "Operating a compressor constantly burns out the motors. The Air Receiver Tank acts as a massive buffer storage vessel. It stores compressed air at high pressure, allowing the compressor to rest, and provides an immediate, stable burst of volume when a surgeon activates a high-flow pneumatic drill in the OT.",
          "Constructed from heavy-gauge steel and strictly compliant with ASME pressure vessel standards, our tanks are treated with a specialized anti-corrosive internal epoxy coating to prevent interior rust. They are equipped with automatic auto-drain valves to instantly expel the bulk of the initial condensed water before it reaches the dryers."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-air-system-images/air-receiver-tank.webp"
      }
    ],
    engineering: [
      {
        title: "Twin-Tower Desiccant Dryers",
        desc: "Compressing air generates massive amounts of water. If moisture reaches the pipeline, it destroys ventilators and grows biofilm. Our Heatless Twin-Tower Desiccant Dryers chemically strip moisture from the air, achieving a medical-grade dew point of -40°C.",
        bullets: ["-40°C Dew Point Guarantee", "Prevents Pipeline Rust & Mold"]
      },
      {
        title: "Digital Dew Point Alarms",
        desc: "You cannot wait for water to pour out of an ICU outlet to know your dryer failed. We install integrated Dew Point Monitors that constantly analyze the moisture content of the supply line, triggering an instant alarm if the desiccant material needs replacement.",
        bullets: ["Continuous Moisture Scanning", "Audio/Visual Plant Room Alarms"]
      },
      {
        title: "Smart Lead-Lag Automation",
        desc: "In a multi-pump setup, the PLC (Programmable Logic Controller) automatically rotates which pump starts first (\"Lead\") and which acts as backup (\"Lag\"). This equalizes wear and tear across all motors, doubling the lifespan of your medical air plant.",
        bullets: ["Equalizes Motor Wear", "Fully Automated Switchover"]
      }
    ],
    applications: [
      { title: "Orthopedic OTs (7-Bar Tools)", image: "/images/service-images/modular-ot-product.webp" },
      { title: "ICU Ventilators (4-Bar)", image: "/images/key-application-images/icu.webp" }
    ],
    whyChoose: [
      { title: "Rapid Installation", desc: "By following streamlined execution and precision planning, we ensure faster project completion with minimal disruption and maximum efficiency.", icon: "/images/why-choose-medgenz-symbols/rapid-installation-icon.webp" },
      { title: "ISO & CE Certified", desc: "Our pipelines and MGPS products strictly adhere to ISO 9001:2015, ensuring medical-grade safety outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Stopping Ventilator Failure in a Delhi ICU",
      context: "A prominent 100-bed hospital in Delhi was experiencing repeated, costly breakdowns of their high-end ICU ventilators. The internal valves of the ventilators were corroding and jamming. Their existing contractor had installed a standard industrial compressor without a proper drying system, causing liquid water to literally spray out of the medical air outlets.",
      solution: "The Solution: MedGenz rapidly executed a plant room overhaul. We bypassed the faulty unit and installed our medical-grade Duplex Oil-Free Compressor paired with a Heatless Twin-Tower Desiccant Dryer and a 4-Stage Filtration Rack. The dew point dropped instantly to -40°C. The air lines became bone-dry, permanently protecting their critical life-support machines and restoring absolute patient safety."
    },
    specs: [
      { label: "Compressor Type", value: "100% Oil-Free Scroll or Teflon-Coated Reciprocating" },
      { label: "Filtration Standard", value: "HTM 02-01 Compliant 4-Stage (Coarse, Fine, Active Carbon, Bacterial)" },
      { label: "Dryer Technology", value: "Heatless Twin-Tower Desiccant Dryer (Dew Point -40°C or better)" },
      { label: "Operating Pressure", value: "Medical Air (4-Bar) / Surgical Tool Air (7-Bar to 10-Bar)" },
      { label: "Control Automation", value: "PLC-Based Duplex/Triplex Auto-Sequencing Panel with Alarms" }
    ],
    faqs: [
      { q: "Why must medical compressors be 100% oil-free?", a: "Medical compressed air is directly inhaled by patients through ventilators and anesthesia machines. If a standard oil-lubricated compressor is used, microscopic oil vapors can enter the lungs, causing severe respiratory damage or fatal lipid pneumonia. 100% oil-free compressors physically eliminate this risk." },
      { q: "What is the difference between Surgical Air (7-Bar) and Medical Air (4-Bar)?", a: "Medical Air operates at 4-Bar pressure and is used for patient respiration, incubators, and ventilators. Surgical Air operates at a much higher 7-Bar pressure and is strictly used to drive high-speed pneumatic surgical tools, such as orthopedic bone drills and saws." },
      { q: "Why is a desiccant air dryer necessary in the system?", a: "When air is compressed, it generates massive amounts of moisture. If this water enters the pipeline, it causes internal rust, bacterial growth, and destroys expensive ventilators. A twin-tower desiccant dryer chemically strips this moisture, guaranteeing an ultra-dry dew point of -40°C." },
      { q: "How often should the 4-stage filters be replaced?", a: "For strict NABH and HTM 02-01 compliance, the pre-filters, coalescing filters, active carbon (odor) filters, and final bacterial filters should be visually inspected every 3 to 6 months and completely replaced annually, or whenever the digital differential pressure gauge indicates a blockage." }
    ],
    heroImage: "/images/service-images/medical-air-main.webp"
  },
  'central-vacuum-system': {
    title: "Hospital Central Vacuum Systems",
    tagline: "High Suction Power",
    heroDesc: "Medical vacuum is a critical life-support utility used to remove fluids, gases, and infectious materials during surgery and continuous patient care. We manufacture heavy-duty, fully automated Central Vacuum Systems engineered for instantaneous high suction power, absolute bio-filtration, and strict NABH compliance.",
    atAGlance: ["Rotary Vane High-Suction", "Sub-Micron Bacterial Filters", "ASME Certified Receivers", "Duplex/Triplex Automation"],
    configurations: [
      {
        title: "Vacuum Pump System & Receiver Tank",
        desc: [
          "The powerhouse of the suction network. We utilize heavy-duty, oil-lubricated rotary vane vacuum pumps capable of generating immense, instantaneous suction (up to -760 mmHg). Built in Duplex or Triplex configurations, the system intelligently shares the load and provides fail-safe redundancy for critical care units.",
          "Connected to these pumps is the High-Capacity Vacuum Receiver Tank. This ASME-certified vessel acts as a massive vacuum buffer. It stores the \"negative pressure\", allowing surgeons to access instant high-power suction the second they open a valve, while completely preventing the pumps from over-cycling and burning out during peak surgical demand."
        ],
        image: "/images/mgps-product-page-images/mgps-centeral-vacuum-system-images/vacuum-pump-system-receiver-tank.webp"
      },
      {
        title: "Medical Bacterial Filters",
        desc: [
          "Extracting bio-fluids from a patient creates a highly hazardous, aerosolized bio-exhaust. Before this contaminated air reaches the mechanical vacuum pumps—or is exhausted outside the hospital—it must be absolutely sterilized to prevent severe biological contamination of the facility.",
          "Our system incorporates Dual Medical-Grade Bacterial Filters directly into the main pipeline before the receiver tank. Featuring a specialized borosilicate glass microfiber core, these filters eliminate 99.999% of liquid aerosols, droplets, and biological pathogens, completely protecting the mechanical pump vanes and the hospital's environment from infection."
        ],
        image: "/images/mgps-product-page-images/mgps-centeral-vacuum-system-images/medical-bacterial-filter.webp"
      },
      {
        title: "Vacuum Regulators & Ward Trolleys",
        desc: [
          "The exact point of patient care. A high-precision central vacuum is too powerful for delicate procedures. Our high-precision Vacuum Regulators plug directly into the wall outlets or Bed Head Panels, allowing nursing staff to dial in the exact negative pressure required—from gentle pediatric airway clearing to high-power surgical fluid extraction.",
          "To catch the extracted fluids safely, we supply shatterproof polycarbonate collection jars (ranging from 1L to 2L capacities) equipped with mechanical overfill protection valves. For emergency fluid management across large hospital wards where wall outlets may be occupied, we provide heavy-duty, mobile Ward Vacuum Trolleys that connect directly to the central MGPS network."
        ],
        image: "/images/mgps-product-page-images/mgps-centeral-vacuum-system-images/vacuum-regulators-ward-trolley.webp"
      }
    ],
    engineering: [
      {
        title: "PLC-Based Automation",
        desc: "Our systems feature intelligent PLC control panels that automatically alternate the lead and lag pumps. This equalizes motor wear and tear, automatically engaging the standby pump if the primary unit fails or if surgical demand suddenly spikes across the hospital.",
        bullets: ["Equalizes Motor Wear", "Instant Fail-Safe Switchover"]
      },
      {
        title: "Redundant Filtration",
        desc: "A single clogged filter can shut down the entire hospital's suction capability. Our bacterial filtration rack is built with a parallel bypass system. If a filter becomes saturated with bio-fluids during a critical surgery, staff can instantly divert the vacuum flow to the secondary filter without shutting down the plant.",
        bullets: ["Parallel Bypass Design", "Zero Operational Downtime"]
      },
      {
        title: "Corrosion Resistance",
        desc: "The suction network must handle highly corrosive bio-fluids. We design our vacuum headers using heavy-duty medical-grade copper or specialized CPVC pipes engineered to withstand constant negative pressure and harsh chemical washdowns without collapsing or rusting internally.",
        bullets: ["Medical-Grade Copper/CPVC", "Withstands High Negative Pressure"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Rapid Installation", desc: "By following streamlined execution and precision planning, we ensure faster project completion with minimal disruption and maximum efficiency.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "ISO & CE Certified", desc: "Our pipelines and suction products strictly adhere to ISO 9001:2015, ensuring medical-grade safety outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Preventing Suction Failure in a High-Volume ER",
      context: "A busy Level-1 trauma center in Uttar Pradesh was experiencing dangerous suction drops. During mass casualty events when multiple emergency bays were active simultaneously, their single-pump legacy system couldn't handle the massive volumetric demand, putting patient airways at risk.",
      solution: "MedGenz rapidly upgraded their plant room to our Heavy-Duty Triplex Vacuum Pump System paired with a massive 1000-liter receiver buffer tank. We integrated a smart PLC automation panel that instantly kicks in the secondary and tertiary pumps the moment line pressure drops. The ER now enjoys flawless, instantaneous high-power suction, even during peak emergency surges."
    },
    specs: [
      { label: "Pump Technology", value: "Heavy-Duty Rotary Vane (Oil Lubricated for maximum durability)" },
      { label: "Max Vacuum Level", value: "Up to -760 mmHg (-1 Bar) continuous suction" },
      { label: "Receiver Tank Material", value: "Epoxy Coated Carbon Steel (Strictly ASME Certified)" },
      { label: "Filtration Standard", value: "99.999% Biological Aerosol Removal (Borosilicate Glass Microfiber)" },
      { label: "Automation Protocol", value: "PLC-Based Duplex/Triplex Auto-Sequencing Panel with Alarms" }
    ],
    faqs: [
      { q: "Why use a central vacuum system instead of portable suction machines?", a: "Portable machines are noisy, take up critical floor space, require constant emptying, and vent aerosolized bacteria directly back into the room. A central system operates silently from the plant room and safely exhausts bio-hazards completely outside the hospital." },
      { q: "What is the purpose of the vacuum receiver tank?", a: "The tank essentially stores 'negative pressure'. When a surgeon opens a valve, the suction is instantaneous because it draws from the tank's massive vacuum reserve. This prevents the heavy-duty pumps from constantly turning on and off for minor tasks, vastly extending their lifespan." },
      { q: "How are bio-fluids prevented from destroying the pumps?", a: "Our systems employ a strict multi-tier defense: shatterproof collection jars at the patient's bedside, secondary trap bottles on the wards, and finally, absolute Bacterial Filters in the plant room that physically block any liquids or bio-aerosols from reaching the mechanical pump vanes." }
    ],
    heroImage: "/images/service-images/vacuum-system-main.webp"
  },
  'copper-pipeline-network': {
    title: "Medical Grade Copper Pipelines",
    tagline: "The Arteries of Healthcare",
    heroDesc: "Life-support gases must travel from the plant room to the patient's bedside without contamination, pressure drop, or leakage. Standard plumbing copper oxidizes, flaking toxic soot into ventilators, and harbors residual oils that spontaneously combust when mixed with high-pressure oxygen. We supply and install seamless, degreased BS EN 13348 copper pipelines engineered strictly for absolute patient safety.",
    atAGlance: ["BS EN 13348 Certified", "100% Factory Degreased", "Inert Nitrogen Purged", "Silver Brazed Joints"],
    configurations: [
      {
        title: "Copper Pipeline Network",
        desc: [
          "The structural highway of your hospital's gas supply. We strictly utilize half-hard and hard tempered, non-arsenical, seamless copper tubes manufactured precisely to BS EN 13348 and ASTM B819 medical standards.",
          "Unlike standard tubing, our medical copper is intensely degreased at the factory to strip away all hydrocarbon residues, and then individually capped at both ends. This guarantees the internal surface remains immaculately clean during transit and storage, eliminating the catastrophic risk of high-pressure oxygen fires."
        ],
        image: "/images/service-images/mgps-product.webp"
      },
      {
        title: "Pipe Fittings & Joints",
        desc: [
          "A pipeline is only as strong as its weakest joint. Bending pipes manually causes micro-fractures and creates turbulent airflow, which drops the pressure before it reaches the patient. We utilize specialized, factory-made medical copper fittings—including elbows, tees, and reducers—that comply directly with BS EN 1254-1.",
          "These heavy-duty, lead-free capillary fittings are designed to slip perfectly over the outer diameter of the tube. Their precise inner curvature ensures a smooth, laminar flow of oxygen, completely eliminating pressure loss across multi-story hospital layouts."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-grade-copper-pipeline-images/pipe-fitting-joints.webp"
      },
      {
        title: "Pipeline Installation & Brazing",
        desc: [
          "Flawless jointing requires master-class execution. Our highly trained technical teams assemble the pipeline network using specialized Silver-Copper-Phosphorus (Ag-Cu-P) brazing alloys. This creates a capillary bond that is actually stronger than the copper tube itself, capable of withstanding extreme pressure surges.",
          "To ensure absolute safety, every single joint is brazed using the critical Inert Gas Shielding method, guaranteeing a spotless, oxidation-free internal environment ready for direct patient use."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-grade-copper-pipeline-images/pipeline-installation-brazing.webp"
      }
    ],
    engineering: [
      {
        title: "Inert Nitrogen Shielding",
        desc: "When a copper pipe is heated with a torch, the oxygen inside instantly forms toxic black soot (copper oxide) that will blow into a patient's lungs. During brazing, we continuously purge the pipeline with inert Nitrogen gas. This completely displaces the oxygen, leaving the internal joint flawlessly clean and shiny.",
        bullets: ["Zero Internal Oxidation", "Protects Patient Airways"]
      },
      {
        title: "Oxygen Degreasing",
        desc: "We don't take risks with standard plumbing pipes. Every inch of our MGPS copper is heavily degreased using industrial solvents to remove microscopic manufacturing oils. It is then sealed with plastic caps to ensure no contaminants enter before installation, neutralizing combustion hazards.",
        bullets: ["Prevents Oxygen Fires", "Factory Capped Tubes"]
      },
      {
        title: "1.5x Pressure Testing",
        desc: "Before sealing the ceilings, the entire pipeline network undergoes a rigorous hydrostatic and pneumatic pressure test. We charge the system with dry nitrogen to 150% (1.5x) of its maximum operating pressure and hold it for 24 hours to guarantee absolute, microscopic leak-proof integrity.",
        bullets: ["150% Load Verification", "24-Hour Hold Testing"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Neonatal ICUs (NICU)", image: "/images/projects/delhi-mot-thumb.webp" },
      { title: "Emergency Trauma Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Expert In-House Teams", desc: "Our specialized brazing technicians handle the entire installation, eliminating third-party errors and delays.", icon: "/images/why-choose-medgenz-symbols/in-house-team.webp" },
      { title: "ISO & CE Certified", desc: "Our pipelines and MGPS products strictly adhere to ISO 9001:2015, ensuring medical-grade safety outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Preventing Oxygen Combustion in a Delhi Hospital",
      context: "A newly built critical care center in New Delhi called us for an urgent pipeline inspection before their final NABH audit. Their previous local contractor had illegally used standard air-conditioning (AC) copper pipes for the main oxygen supply line to save costs, leaving heavy layers of flammable industrial oil inside the system.",
      solution: "This was a catastrophic fire hazard waiting to happen. MedGenz rapidly dismantled the entire compromised network. We replaced it wall-to-wall with genuine, factory-degreased BS EN 13348 Medical Grade Copper, executing every single joint using Inert Nitrogen Purging. The hospital passed their pressure and flow tests flawlessly, securing absolute safety for their patients and staff."
    },
    specs: [
      { label: "Pipe Material Standard", value: "BS EN 13348 / ASTM B819 (Degreased Medical Grade Copper)" },
      { label: "Fitting Standard", value: "BS EN 1254-1 Capillary end-feed medical fittings" },
      { label: "Brazing Filler Metal", value: "Silver-Copper-Phosphorus (Ag-Cu-P) Alloy, completely Lead-Free" },
      { label: "Internal Shielding", value: "Continuous Inert Nitrogen Purge during all heat-brazing processes" },
      { label: "Pipe Identification", value: "ISO 32 / HTM 02-01 Color Coded Adhesive Banding per gas type" }
    ],
    faqs: [
      { q: "Why can't we use standard plumbing or AC copper pipes for Medical Gas?", a: "Standard commercial copper pipes are manufactured using oil lubricants. If high-pressure oxygen comes into contact with even microscopic oil residue inside the pipe, it creates a massive, spontaneous combustion hazard. Medical Grade Copper (BS EN 13348) is strictly factory-degreased, capped at both ends, and certified 100% oil-free for safe oxygen service." },
      { q: "What is Inert Nitrogen Purging during brazing?", a: "When copper is heated with a blowtorch, the oxygen inside the pipe reacts with the metal, creating toxic black soot (copper oxide) that will blow directly into the patient's lungs. To prevent this, we pump inert Nitrogen gas through the pipes during the brazing process, completely displacing the oxygen and leaving the inside of the joint flawlessly clean." },
      { q: "How do you identify different gas lines in the hospital?", a: "Every copper pipeline we install is strictly identified using adhesive color-coded banding according to international MGPS standards (e.g., White for Oxygen, Black/White for Medical Air, Yellow for Vacuum). The bands denote the gas name, pressure, and flow direction." }
    ],
    heroImage: "/images/service-images/mgps-product.webp"
  },
  'gas-control-safety': {
    title: "Gas Control & Safety",
    tagline: "Ward Isolation & Monitoring",
    heroDesc: "Medical gas emergencies, such as pipeline leaks or sudden pressure drops, require immediate localized isolation. If a ward experiences a leak, shutting down the entire hospital's supply is catastrophic. We manufacture precision Area Valve Boxes (AVSU), Isolation Valves, and Digital Alarm Systems to instantly isolate zones and notify staff without disrupting the entire facility.",
    atAGlance: ["2/3/4 Gas Area Valve Boxes", "12mm - 54mm Isolation Valves", "Digital Line Pressure Alarms", "Instant Emergency Shut-Off"],
    configurations: [
      {
        title: "Area Valve Box (2/3/4 Gas)",
        desc: [
          "The Area Valve Service Unit (AVSU) is the localized control center for individual hospital wings, ICUs, or Operation Theatres. Available in 2, 3, or 4-gas configurations, these boxes allow nursing and maintenance staff to instantly shut off the gas supply to a specific zone without affecting the rest of the facility.",
          "Encased in a powder-coated CRCA or SS-304 box, our AVSUs feature a lockable, break-glass acrylic door for immediate emergency access. Each gas line includes an integrated analog pressure gauge, providing an instant visual readout of the line pressure directly at the ward level."
        ],
        image: "/images/mgps-product-page-images/mgps-gas-control-valve-box-images/3-gases-area-valve-box.webp"
      },
      {
        title: "Isolation Valves (12mm - 54mm)",
        desc: [
          "The physical mechanisms that stop the flow. We supply premium, quarter-turn, full-bore ball valves that do not restrict the flow of gas when fully open, completely eliminating pressure drops across the network. Available in sizes ranging from 12mm up to massive 54mm main-line diameters.",
          "These valves are constructed from heavy-duty forged brass or bronze and utilize Teflon (PTFE) seats to ensure they remain 100% leak-proof over tens of thousands of cycles. Each valve is equipped with flat-face NIST connectors on both sides, allowing engineers to connect pressure testing gauges or emergency bypass cylinders seamlessly."
        ],
        image: "/images/mgps-product-page-images/mgps-gas-control-valve-box-images/isolation-valves-12mm-54mm.webp"
      },
      {
        title: "Line Pressure Alarm Systems",
        desc: [
          "Complete situational awareness for the medical staff. Our digital alarm panels constantly monitor the pressure of Oxygen, Vacuum, Medical Air, and Nitrous Oxide running through the pipes. They are installed locally at the nursing stations and centrally in the manifold plant room.",
          "If the pressure of any gas drops below the critical life-support threshold (Low Alarm) or spikes dangerously high (High Alarm), the panel instantly flashes a bright red LED and sounds a piercing 80-decibel buzzer. The system also features a \"Mute\" button for staff, while maintaining the visual flashing alert until the pressure is successfully restored."
        ],
        image: "/images/mgps-product-page-images/mgps-gas-control-valve-box-images/line-pressure-alarm-systems.webp"
      }
    ],
    engineering: [
      {
        title: "Oxygen Degreased Hardware",
        desc: "Any residual oil or grease from the manufacturing process inside a valve can spontaneously combust when exposed to high-pressure oxygen. All our isolation valves and AVSU fittings are heavily degreased and ultrasonically cleaned at the factory, neutralizing this fatal fire hazard.",
        bullets: ["Zero Hydrocarbon Residue", "Prevents Oxygen Fires"]
      },
      {
        title: "Digital Micro-Sensors",
        desc: "Our alarm systems rely on high-precision electronic pressure transducers tapped directly into the pipeline. These sensors detect pressure fluctuations in milliseconds, ensuring that the alarms trigger exactly when the pressure deviates from the set HTM parameters.",
        bullets: ["Millisecond Response Time", "High-Precision Transducers"]
      },
      {
        title: "Fail-Safe Mechanical Locks",
        desc: "Accidentally turning off an oxygen valve to an active ICU can kill patients. Our isolation valves and AVSU enclosures are equipped with physical locking mechanisms. They require specialized keys or break-glass access, ensuring valves remain securely in the ON/OFF position and preventing tampering.",
        bullets: ["Prevents Accidental Shut-offs", "Break-Glass Emergency Access"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" },
      { title: "Manifold Plant Rooms", image: "/images/key-application-images/manifold-plant-rooms.webp" }
    ],
    whyChoose: [
      { title: "Expert In-House Teams", desc: "Our specialized brazing technicians handle the entire installation, eliminating third-party errors and delays.", icon: "/images/why-choose-medgenz-symbols/in-house-team.webp" },
      { title: "ISO & CE Certified", desc: "Our pipelines and MGPS products strictly adhere to ISO 9001:2015, ensuring medical-grade safety outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Isolating a Leak in a Mumbai ICU",
      context: "A renovation accident accidentally severed a secondary oxygen line in a busy Mumbai hospital's ICU wing. In older hospitals, this would require shutting down the main plant, cutting off oxygen to all other wards and active operating theatres.",
      solution: "Thanks to our clearly marked Area Valve Service Unit (AVSU) installed in the corridor, nursing staff instantly broke the emergency glass and shut off the specific zone. Simultaneously, the Digital Line Alarm notified the central plant room. The rest of the hospital, including active OTs, remained completely unaffected while our team rapidly repaired the localized leak."
    },
    specs: [
      { label: "Valve Material Specification", value: "Forged Brass/Bronze (100% Oxygen Degreased & Cleaned)" },
      { label: "AVSU Enclosure", value: "Powder Coated CRCA Steel or SS-304 with Break-Glass Acrylic" },
      { label: "Alarm Outputs", value: "Audio/Visual LED with built-in BMS / RS-485 Modbus integration" },
      { label: "Valve Diameters", value: "12mm, 15mm, 22mm, 28mm, 42mm, 54mm (Full-bore non-restrictive)" },
      { label: "Compliance Standard", value: "HTM 02-01 / NFPA 99 (Color Coded according to gas type)" }
    ],
    faqs: [
      { q: "What is an Area Valve Service Unit (AVSU)?", a: "An AVSU is a lockable enclosure containing isolation valves and pressure gauges for a specific ward or OT. It allows medical staff to shut off gas to a single zone during emergencies, leaks, or maintenance without disrupting the life-support supply to the rest of the hospital." },
      { q: "Why do the valves need to be 'Oxygen Cleaned' or 'Degreased'?", a: "Any oil, grease, or hydrocarbon residue inside a valve can spontaneously ignite or explode when exposed to high-pressure oxygen. All our isolation valves are ultrasonically cleaned and degreased at the factory to eliminate this fatal fire hazard." },
      { q: "How do the Line Pressure Alarms work?", a: "Digital pressure sensors are installed in the pipeline. If the gas pressure drops below or spikes above the normal operating range (e.g., 4 Bar for Oxygen), the alarm panel instantly flashes a red LED and sounds a loud buzzer to alert the nurses and central plant room." }
    ],
    heroImage: "/images/service-images/area-valve-box-main.webp"
  },
  'bed-head-panels': {
    title: "Hospital Bed Head Panel System",
    tagline: "Bedside Utility Integration",
    heroDesc: "The patient's bedside is the most critical zone in a hospital. Trailing wires, loose oxygen pipes, and scattered electrical sockets create severe tripping hazards and infection risks. We manufacture extruded aluminum Bed Head Panels (BHP) that perfectly integrate medical gas outlets, electrical power, and nurse call systems into one sleek, ergonomic, and sterile console.",
    atAGlance: ["Segregated Gas & Electrical", "Extruded Aluminum Body", "Customized Lengths (1m - 3m)", "Integrated Equipment Rails"],
    configurations: [
      {
        title: "3 Gas Outlet Panels",
        desc: [
          "The optimal configuration for general patient wards, private rooms, and step-down recovery units. The 3-Gas layout typically houses the most essential life-support utilities: Oxygen, Medical Air (4 Bar), and Vacuum.",
          "Designed to be compact (usually 1 to 1.5 meters in length), it keeps the bedside uncluttered while providing enough integrated electrical switchboards and nurse-call buttons to handle standard patient monitoring. The smooth powder-coated finish ensures rapid disinfection between patient admissions."
        ],
        image: "/images/mgps-product-page-images/mgps-bed-head-panel-images/3-outlets-bed-head-panel.webp"
      },
      {
        title: "4 Gas Outlet Panels",
        desc: [
          "Engineered for High-Dependency Units (HDU), emergency trauma bays, and specialized post-operative recovery wards. This expanded console incorporates a fourth gas line—often Surgical Air (7 Bar) or a secondary redundant Oxygen outlet.",
          "The 4-Gas panel offers a larger architectural footprint to safely house additional electrical components, including multiple UPS-backed sockets for mobile ventilators, RJ45 data ports for HIS integration, and integrated LED reading lights for patient comfort without needing auxiliary wall fixtures."
        ],
        image: "/images/mgps-product-page-images/mgps-bed-head-panel-images/4-outlets-bed-head-panel.webp"
      },
      {
        title: "ICU Bed Head Units",
        desc: [
          "The ultimate life-support console. Intensive Care Units require massive utility access. These heavy-duty, extended units are custom-built (often spanning 2 to 3 meters across the width of the bed) to handle the intense demands of critically ill patients.",
          "ICU panels house multiple duplicate gas outlets to run primary and backup ventilators simultaneously. They feature up to 12+ electrical sockets on emergency UPS circuits, heavy-duty stainless steel medical rails for mounting multi-parameter patient monitors, and integrated IV poles for syringe pumps, organizing massive cable loads flawlessly."
        ],
        image: "/images/mgps-product-page-images/mgps-bed-head-panel-images/icu-bed-head-panel.webp"
      }
    ],
    engineering: [
      {
        title: "Segregated Compartments",
        desc: "Medical Oxygen is a massive fire hazard. To comply with strict HTM standards, our panels feature distinct, solid aluminum internal partitions. The high-pressure medical gas pipes are routed in a completely separate channel from the high-voltage electrical wiring, preventing any spark from ever reaching the oxygen.",
        bullets: ["Absolute Fire Safety", "Independent Service Access"]
      },
      {
        title: "Extruded Aluminum Profile",
        desc: "The entire body of the panel is manufactured from heavy-gauge extruded aluminum alloy. Unlike cheap plastic or folded steel, aluminum is naturally rust-proof, incredibly rigid, and can support the heavy weight of attached patient monitors and suction jars without bending or detaching from the wall.",
        bullets: ["High Structural Rigidity", "Anti-Microbial Powder Coat"]
      },
      {
        title: "Flush-Mounted Outlets",
        desc: "A hospital bed being moved aggressively can easily snap off a protruding gas nozzle. Our engineering ensures that all medical gas terminals, electrical switches, and nurse call buttons are mounted perfectly flush with the front fascia, protecting the hardware and eliminating dust traps.",
        bullets: ["Impact Damage Protection", "Easy Wipe-Down Sterilization"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Rapid Installation", desc: "Our specialize technician install extruded panels turnkey, we eliminate delays and ensure strict quality control.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade safety outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Organizing the Chaos in a Delhi ICU",
      context: "A multi-specialty hospital in New Delhi was facing critical inefficiencies in their 30-bed ICU. Ventilators, multipara monitors, and syringe pumps were plugged into loose extension cords on the floor, while raw oxygen pipes dangled from the ceiling. It was a severe tripping hazard that constantly delayed nurses during crash situations.",
      solution: "MedGenz retrofitted the entire ward with customized, wall-to-wall ICU Bed Head Units. We integrated all gas lines into the hidden top channel and all UPS wiring into the bottom channel. We added heavy-duty medical rails directly onto the panels to mount the monitors off the bed. The floor space was completely cleared, and emergency response times improved dramatically."
    },
    specs: [
      { label: "Panel Material", value: "Heavy-gauge Extruded Aluminum Alloy (2mm minimum thickness)" },
      { label: "Surface Finish", value: "Anti-microbial, electrostatic epoxy powder coated for easy sterilization" },
      { label: "Internal Architecture", value: "2 or 3 completely segregated physical channels for Gas and High/Low Voltage" },
      { label: "Gas Outlet Compatibility", value: "Accommodates Parkodex, DIN, BS, or AFNOR standard medical gas probes" },
      { label: "Electrical & Data", value: "Modular 6/16A sockets (UPS color-coded), RJ45 Data, Nurse Call integration" }
    ],
    faqs: [
      { q: "What is a Bed Head Panel (BHP)?", a: "A Bed Head Panel is a wall-mounted aluminum console located behind a hospital bed. It centralizes all necessary medical gas outlets (Oxygen, Air, Vacuum), electrical power sockets, and communication ports (Nurse Call, Data) into one sleek, organized unit." },
      { q: "Why must medical gas and electrical lines be segregated?", a: "Medical Oxygen is highly combustible. If an electrical short circuit occurs within the panel, absolute physical separation is required by HTM and NABH standards to prevent a spark from igniting the high-pressure oxygen lines. Our panels feature dedicated, solid aluminum internal partitions." },
      { q: "Can you customize the length and outlets of the ICU panel?", a: "Yes, as direct manufacturers, we build custom lengths ranging from compact 1-meter ward panels up to massive 3-meter ICU consoles. We can configure the exact number of gas outlets, UPS electrical sockets, and monitor mounting rails based on your specific requirements." },
      { q: "Do you provide monitor mounting rails on the panels?", a: "Yes, our ICU units feature integrated heavy-duty medical rails capable of securely holding patient monitors, IV poles, and syringe pumps, completely freeing up floor space around the bed." }
    ],
    heroImage: "/images/service-images/bed-head-panel-main.webp"
  },
  'gas-outlets-terminals': {
    title: "Medical Gas Outlets & Terminal Units",
    tagline: "Delivery Points",
    heroDesc: "The medical gas outlet is the final, most frequently used delivery point of the entire pipeline network. A leaking or incompatible terminal unit can endanger patient lives and waste expensive medical gases. We manufacture precision-engineered, dual-lock medical gas terminal units designed for absolute safety, rapid plugging, and 100% leak-free operation.",
    atAGlance: ["100% Leak-Proof Seals", "Dual-Lock Safety Valve", "Non-Interchangeable Indexing", "Gas-Specific Color Coding"],
    configurations: [
      {
        title: "Oxygen & Vacuum Outlets",
        desc: [
          "The most essential configuration for general patient wards, private rooms, and basic recovery units. The Oxygen (O2) terminal provides life-sustaining respiratory support, while the Vacuum terminal allows for immediate suctioning of airways and fluids.",
          "These outlets are distinctly color-coded (White for Oxygen, Yellow for Vacuum as per ISO 32 / HTM standards) and can be flush-mounted directly into the wall or integrated seamlessly into extruded aluminum Bed Head Panels. The internal valves feature self-sealing check valves, so the gas stops instantly the moment a probe is removed."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-outlet-images/oxygen-nitrogen-outlets.webp"
      },
      {
        title: "Medical Air & N₂O Outlets",
        desc: [
          "Engineered for high-dependency units (HDUs), emergency trauma bays, and operation theatres. These specialized outlets safely deliver Nitrous Oxide (N₂O) for anesthesia, Medical Air (4 Bar) for driving ventilators, and high-pressure Surgical Air (7 Bar) required to power pneumatic bone drills and saws.",
          "Safety is paramount with these highly pressurized gases. The outlet fascias and internal brass blocks are geometrically indexed. It is physically impossible to connect a high-pressure 7-Bar Surgical Air probe into a delicate 4-Bar Medical Air outlet, protecting both the patient and the expensive surgical equipment."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-outlet-images/medical-air-nitrous-oxide.webp"
      },
      {
        title: "Probe & Adaptor Systems",
        desc: [
          "The critical link between the wall outlet and the medical device (flowmeters, suction regulators, ventilators). We manufacture high-precision male probes and adaptors designed to lock seamlessly into the terminal units.",
          "We offer probes machined to exact international geometric profiles, ensuring compatibility with your hospital's specific standard—whether that is the robust British Standard (BS), the European DIN standard, the French AFNOR standard, or the reliable Parkodex design. All probes are machined from high-grade stainless steel or plated brass to withstand tens of thousands of insertion cycles without wear."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-outlet-images/probe-adapter-image.webp"
      }
    ],
    engineering: [
      {
        title: "Dual-Lock Mechanism",
        desc: "Accidental disconnection of a ventilator during a bed movement is a critical failure. Our terminals feature a \"push-and-twist\" or active release ring mechanism. This guarantees the probe locks in securely and requires intentional, two-step action by the nurse to release, preventing accidental pop-outs.",
        bullets: ["Prevents Accidental Disconnects", "Smooth Single-Hand Insertion"]
      },
      {
        title: "Precision Machined Core",
        desc: "The internal valve assembly is CNC-machined from a solid block of extruded brass. Unlike cheap plastic or cast components, solid brass ensures incredible durability against the mechanical wear of continuous probe insertions and eliminates the risk of high-pressure micro-leaks.",
        bullets: ["Extruded Brass Valve Block", "100% Oxygen Degreased"]
      },
      {
        title: "Gas-Specific Indexing",
        desc: "Safety through design. Every component—from the external color-coded fascia (ISO 32 standards) to the internal pin-indexing geometry—is uniquely configured for its specific gas. This makes cross-connection physically impossible, safeguarding the patient entirely.",
        bullets: ["ISO 32 Color Coded Fascia", "Physical Non-Interchangeability"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Solutions", desc: "By providing outlets and panels turnkey, we eliminate delays and ensure strict pressure quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade safety outcomes.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams travel directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Eliminating Oxygen Waste in a Mumbai ICU",
      context: "A mid-sized hospital in Mumbai was facing skyrocketing liquid medical oxygen (LMO) bills. An audit revealed the hospital was losing thousands of liters of oxygen daily. The source? Cheaply manufactured terminal units in the ICU that failed to seal completely when the ventilator probes were removed, creating a constant, silent micro-leak across 40 beds.",
      solution: "The Solution: MedGenz's engineering team executed a rapid retrofit. We replaced all faulty wall units with our precision-machined Dual-Lock Oxygen Outlets featuring high-density self-sealing check valves. The micro-leaks dropped to absolute zero immediately, recovering the hospital's entire retrofit investment within three months through saved oxygen costs."
    },
    specs: [
      { label: "Valve Block Material", value: "Extruded Brass (100% Oxygen Degreased & Factory Cleaned)" },
      { label: "Standards Compatibility", value: "Available in British Standard (BS), DIN, AFNOR, or Parkodex formats" },
      { label: "Safety Mechanism", value: "Gas-specific pin indexing and dual-lock push/twist release" },
      { label: "Color Coding", value: "Compliant with ISO 32 / HTM 02-01 visual identification standards" },
      { label: "Mounting Options", value: "Flush wall mount, surface box mount, or Bed Head Panel integration" }
    ],
    faqs: [
      { q: "What is the function of a Medical Gas Terminal Unit?", a: "The terminal unit (or gas outlet) is the final delivery point of the Medical Gas Pipeline System (MGPS). It allows doctors and nurses to quickly and safely plug in medical equipment like ventilators, flow meters, or suction units into the hospital's central gas supply." },
      { q: "How do you prevent staff from plugging an Oxygen line into a Nitrous Oxide outlet?", a: "Every gas outlet we manufacture is gas-specific. They feature unique geometric pin-indexing and specific internal diameters for each gas type (O2, N2O, Air, Vacuum). It is physically impossible to plug an oxygen probe into a nitrous oxide terminal, entirely eliminating catastrophic gas mix-ups." },
      { q: "What does a Dual-Lock Safety Mechanism do?", a: "A standard outlet can sometimes eject a high-pressure probe if bumped. Our dual-lock mechanism requires the nurse to actively push a release ring while pulling the probe. This guarantees that life-support connections cannot be accidentally disconnected during patient movement or surgery." }
    ],
    heroImage: "/images/service-images/gas-outlets-main.webp"
  },
  'accessories-consumables': {
    title: "Medical Gas Pipeline Accessories",
    tagline: "The Final Connection",
    heroDesc: "The integrity of a medical gas pipeline doesn't end at the wall outlet. The accessories connecting the terminal unit to the patient must be completely leak-proof, highly durable, and 100% sterile. We manufacture premium color-coded high-pressure tubes, unbreakable humidifier bottles, and precision-machined brass adaptors to flawlessly complete your life-support network.",
    atAGlance: ["ISO Color-Coded Tubes", "Unbreakable Polycarbonate", "Precision Machined Brass", "100% Leak-Proof Seals"],
    configurations: [
      {
        title: "Color-Coded H.P. Rubber Tubes",
        desc: [
          "Connecting ventilators and anesthesia machines to wall outlets requires highly flexible, incredibly strong tubing. We supply High-Pressure (H.P.), anti-static, and flame-retardant rubber hoses reinforced with heavy-duty nylon braiding. This prevents the tube from expanding, kinking, or bursting under constant 4-Bar to 7-Bar pressure.",
          "Every tube is strictly color-coded to international ISO 32 standards (White for Oxygen, Yellow for Vacuum, Black/White for Air, Blue for N₂O). This high visibility guarantees that nursing staff can trace lines instantly and prevents fatal cross-connection errors during frantic emergencies."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-accessories-images/mgps-color-tubes.webp"
      },
      {
        title: "Humidifier Bottles & Collection Jars",
        desc: [
          "Pure pipeline oxygen is extremely dry and can severely irritate a patient's respiratory tract. Our Humidifier Bottles attach to flowmeters, bubbling the gas through sterile water to add vital moisture before inhalation. For the vacuum system, our Collection Jars safely trap suctioned blood and bio-fluids, featuring integrated mechanical overflow valves to protect the central pump.",
          "Unlike cheap glass or acrylic that shatters when dropped, all our bottles and jars are manufactured from high-grade, unbreakable Polycarbonate. They are fully autoclavable up to 134°C, allowing hospitals to easily steam-sterilize them between patients for absolute infection control."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-accessories-images/humidifier-bottles.webp"
      },
      {
        title: "Connectors & Adaptors",
        desc: [
          "The crucial joints of the medical gas network. We manufacture high-precision male probes, hose nipples, Y-splitters, and threaded adaptors designed to lock seamlessly into the terminal units and medical equipment.",
          "Machined from solid, extruded brass and heavily chrome-plated to resist corrosion from hospital cleaning agents, our adaptors are engineered for tens of thousands of insertion cycles without wear. We support all major international geometries, including DISS, NIST, British Standard (BS), and DIN, ensuring 100% compatibility with your existing hospital infrastructure."
        ],
        image: "/images/mgps-product-page-images/mgps-medical-gas-accessories-images/mgps-connectors-adapters.webp"
      }
    ],
    engineering: [
      {
        title: "Nylon Braided Reinforcement",
        desc: "Standard PVC tubes expand and burst under continuous pressure. Our H.P. rubber tubes feature an internal matrix of tightly woven nylon braiding. This engineering allows the tube to easily withstand up to 4x the normal operating pressure without bulging or rupturing.",
        bullets: ["Extreme Burst Resistance", "Anti-Static Rubber Core"]
      },
      {
        title: "Autoclavable Polycarbonate",
        desc: "Hospital cross-contamination is a severe risk if equipment is not properly sterilized. Our humidifier bottles and vacuum jars are molded from high-impact polycarbonate plastic that does not melt or degrade when subjected to 121°C high-pressure steam in an autoclave.",
        bullets: ["121°C Steam Sterilizable", "Shatterproof Durability"]
      },
      {
        title: "Anti-Corrosion Plating",
        desc: "Brass is strong, but raw brass oxidizes over time. Every gas connector and adaptor we supply is CNC-machined from extruded brass and then heavily electroplated with chrome/nickel. This creates a brilliant, rust-proof finish that ignores harsh medical cleaning solvents.",
        bullets: ["CNC Machined Precision", "Heavy Chrome Plating"]
      }
    ],
    applications: [
      { title: "Modular Operation Theatres", image: "/images/service-images/modular-ot-product.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Turnkey Supply", desc: "By Supplying our own tubes and adaptors, we eliminate delays and ensure strict pressure quality control.", icon: "/images/why-choose-medgenz-symbols/turnkey-solution.webp" },
      { title: "ISO & CE Certified", desc: "Our processes and products strictly adhere to ISO 9001:2015, ensuring medical-grade safety outcomes.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our engineering teams supply directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide comprehensive lifetime maintenance and spare parts support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Preventing Oxygen Leaks in a Delhi ICU",
      context: "A major super-specialty hospital in New Delhi was noticing a massive spike in their Liquid Medical Oxygen (LMO) consumption. An audit revealed that while their main copper pipeline was flawless, the cheap PVC connection tubes running from the wall outlets to the ventilators had become brittle and were developing micro-cracks, silently leaking thousands of liters of oxygen every week.",
      solution: "The Solution: MedGenz was called in for an immediate accessory overhaul. We replaced all 150 connection points with our premium Nylon-Braided H.P. Rubber Tubes securely machine-crimped to high-grade brass adaptors. The tubes easily handled the constant 4-bar pressure without expanding or cracking. The hospital’s oxygen waste plummeted to zero, saving them significant operational costs within the first month."
    },
    specs: [
      { label: "Tube Material Construction", value: "Antistatic Rubber internally reinforced with woven Nylon Braid" },
      { label: "Tube Burst Pressure", value: "> 60 Bar (Operating safety factor heavily exceeds 4-7 Bar medical flow)" },
      { label: "Jar / Bottle Material", value: "High-Impact Unbreakable Polycarbonate" },
      { label: "Sterilization Rating", value: "Fully Autoclavable at 121°C / 134°C for repeated clinical use" },
      { label: "Adaptor Material", value: "Extruded Brass with heavy chrome plating / SS-304 Stainless Steel" }
    ],
    faqs: [
      { q: "Why do oxygen tubes need to be color-coded?", a: "Color-coding is an international ISO 32 safety standard designed to prevent fatal medical errors. Oxygen tubes are White, Vacuum is Yellow, Medical Air is Black/White, and Nitrous Oxide is Blue. This ensures nurses instantly connect the right gas to the right patient device." },
      { q: "Can the humidifier bottles and collection jars be sterilized?", a: "Yes, our jars are manufactured from high-grade, unbreakable Polycarbonate. They are fully autoclavable up to 121°C / 134°C, meaning they can be steam-sterilized between patients to completely eliminate cross-contamination." },
      { q: "What is the lifespan of a High-Pressure (H.P.) Rubber Tube?", a: "Standard PVC tubes crack and leak within a year. Our H.P. Rubber Tubes are reinforced with nylon braiding, allowing them to withstand massive burst pressures and heavy UV/chemical exposure. They easily last 5+ years without degrading, though annual inspections are recommended." },
      { q: "Do you provide custom length tubes with pre-fitted adaptors?", a: "Yes. We supply high-pressure tubes in custom lengths. Our factory technicians securely machine-crimp the precise brass connectors (DISS, NIST, BS, or DIN) onto both ends, ensuring a 100% leak-proof, ready-to-use assembly for your hospital." }
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
          <div className="max-w-5xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(200px,240px))] justify-center gap-6">
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
