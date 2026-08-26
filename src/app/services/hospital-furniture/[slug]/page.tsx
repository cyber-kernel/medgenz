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

const productData: Record<string, ProductData> = {
  'icu-beds': {
    title: "Advanced ICU Beds",
    tagline: "Critical Care & Life Support",
    heroDesc: "Critical care beds engineered for maximum patient safety, rapid CPR positioning, and seamless integration with life support systems. Designed specifically for intensive care units, high dependency units, and cardiac care environments.",
    atAGlance: ["5-Function Electrics", "Built-in Weighing Scale", "Instant CPR Release", "Anti-Microbial ABS Panels"],
    configurations: [
      {
        title: "ICU Bed (5-Function Electric)",
        desc: [
          "The standard requirement for modern intensive care. Our fully electric 5-function ICU bed is powered by ultra-silent, medical-grade linear actuators, allowing nurses to adjust the patient effortlessly via intuitive control panels on the side rails and footboard.",
          "It provides comprehensive positioning including Hi-Low height adjustment, Backrest, Knee-rest, and critical Trendelenburg / Reverse Trendelenburg angles to aid in respiratory distress and circulatory shock management."
        ],
        image: "/images/hospital-furniture-images/icu-beds-images/icu-bed-electric.webp"
      },
      {
        title: "ICU Bed with Built-in Weighing System",
        desc: [
          "In critical care, accurate fluid management and medication dosing are highly dependent on exact patient weight. Moving a sedated or intubated patient to a scale is dangerous and time-consuming.",
          "This specialized bed integrates high-precision load cell sensors directly into the bed frame structure. It features an LCD digital display at the footboard, continuous weight monitoring, and a 'Tare' function to zero out the weight of blankets, monitors, or added pillows without disturbing the patient."
        ],
        image: "/images/hospital-furniture-images/icu-beds-images/icu-bed-weighting-support.webp"
      },
      {
        title: "ICU Bed with Ventilator & X-Ray Support",
        desc: [
          "Designed for the most severe cases requiring constant life support. This bed acts as a centralized care hub, featuring integrated oxygen cylinder holders, heavy-duty mounting poles for syringe/infusion pumps, and specialized structural routing for ventilator tubing to prevent accidental extubation.",
          "Furthermore, the backrest is constructed from a Radiolucent material, allowing for clear, artifact-free chest X-rays to be taken directly in the bed using a portable C-arm, eliminating the need to transfer unstable patients to the radiology department."
        ],
        image: "/images/hospital-furniture-images/icu-beds-images/icu-bed-ventilator-support.webp"
      }
    ],
    engineering: [
      {
        title: "Instant CPR Release",
        desc: "During cardiac arrest, every second counts. Our ICU beds are equipped with dual-sided manual CPR quick-release levers. Pulling this lever instantly drops the backrest to a flat 0-degree angle, providing a firm surface for chest compressions without waiting for the slow motorized descent.",
        bullets: ["Zero-second backrest drop", "Mechanical override function"]
      },
      {
        title: "Central Locking Castors",
        desc: "Transporting a patient requires smooth mobility, but treatments require absolute immobility. We use 125mm heavy-duty, anti-static castors linked to a single central braking pedal. A single press locks all four wheels simultaneously, preventing dangerous bed shifts during intubation.",
        bullets: ["Single-pedal braking", "Directional lock for transit"]
      },
      {
        title: "Tuck-Away ABS Side Rails",
        desc: "Patient falls are a major liability. The bed features split, 4-piece molded ABS side rails. They provide maximum height for fall prevention and incorporate dampeners to tuck away smoothly and silently under the mattress base, ensuring zero gap transfer to stretchers.",
        bullets: ["Zero-transfer gap design", "Anti-microbial ABS polymer"]
      }
    ],
    applications: [
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Cardiac Care Units (CCU)", image: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp" },
      { title: "High Dependency Units (HDU)", image: "/images/key-application-images/icu.webp" },
      { title: "Post-Operative Recovery", image: "/images/key-application-images/emergency-rooms.webp" }
    ],
    whyChoose: [
      { title: "In-House Production", desc: "By manufacturing our own bed frames with robotic welding, we guarantee zero structural defects and maximum load limits.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "NABH & IEC Compliant", desc: "Our electrical actuators and bed structures strictly adhere to international medical device safety regulations (IEC 60601-2-52).", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our installation teams deploy equipment directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide replacement actuators, castor wheels, and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Reducing Response Time in the CCU",
      context: "A prominent Cardiac Care Unit was facing delays during emergency interventions because their manual crank beds took too long to level out for chest compressions. Furthermore, moving patients to weigh them was causing unneeded stress on fragile heart rates.",
      solution: "MedGenz outfitted the ward with our Advanced ICU Beds featuring built-in weighing scales and mechanical CPR quick-release. Nursing staff can now monitor patient weight digitally in real-time for precise fluid management, and the backrest can be instantly flattened in zero seconds during a code blue, drastically improving intervention times."
    },
    specs: [
      { label: "Frame Material", value: "Epoxy Powder Coated CRC Steel Tube (Robotic Welded)" },
      { label: "Motor System", value: "4-Actuator System (Medical Grade, IP54 Water Resistant)" },
      { label: "Max Safe Working Load", value: "250 KG (Dynamic Testing Approved)" },
      { label: "Mattress Base", value: "4-Section Perforated Sheet (Allows ventilation to prevent bedsores)" },
      { label: "Side Rails & Panels", value: "Tuck-Away Anti-Microbial ABS (Head & Foot Boards easily removable)" }
    ],
    faqs: [
      { q: "What happens to an electric bed during a power failure?", a: "Our 5-function electric beds come with a built-in battery backup system that ensures full motorized functionality (lifting, lowering, backrest adjustment) can continue for several hours during a total hospital power failure." },
      { q: "How does the CPR quick-release function work?", a: "Waiting for a motor to lower a backrest during a cardiac emergency is too slow. The mechanical CPR lever bypasses the motor entirely, allowing gravity and dampeners to drop the backrest perfectly flat in under two seconds so compressions can begin immediately." },
      { q: "Can X-Rays be performed directly on the bed?", a: "Yes. If you select our 'Ventilator & X-Ray Support' model, the backrest is fitted with a radiolucent cassette tray. A portable C-arm can slide under the bed to take clear chest X-rays without needing to transfer the patient." },
      { q: "What is the maximum weight capacity of these beds?", a: "Our standard electric ICU beds are engineered with robotic-welded CRC steel frames, supporting a maximum safe working load of up to 250 KG. This robust construction ensures absolute stability even during vigorous CPR procedures." },
      { q: "How easy is it to clean and disinfect the beds?", a: "Infection control is paramount. The beds feature seamless, molded anti-microbial ABS side rails and removable head/foot boards, eliminating deep crevices where bacteria can hide. All surfaces are designed to withstand repeated cleaning with harsh hospital-grade disinfectants." }
    ],
    heroImage: "/images/hospital-furniture-images/icu-beds-images/icu-bed-electric.webp"
  },
  'fowler-ward-beds': {
    title: "Fowler & Ward Beds",
    tagline: "General Patient Care",
    heroDesc: "Robust, ergonomic patient beds designed for high-turnover general wards, recovery rooms, and clinics. Built with heavy-duty CRC steel, smooth crank mechanisms, and anti-microbial ABS panels to provide comfort and unyielding durability.",
    atAGlance: ["1 to 2 Crank Mechanisms", "Epoxy Powder Coated", "Collapsible Side Rails", "Detachable ABS Panels"],
    configurations: [
      {
        title: "Semi Fowler Bed (1-Function)",
        desc: [
          "The classic solution for general patient wards. The Semi-Fowler bed features a 2-section perforated CRC mattress base with a single mechanical function.",
          "Using a smooth, fold-away stainless steel crank handle located at the foot of the bed, nurses can easily elevate the Backrest up to 70 degrees. This upright positioning is crucial for feeding, patient comfort, and easing respiratory distress in recovering patients."
        ],
        image: "/images/hospital-furniture-images/fowler-beds-images/semi-fowler-bed.webp"
      },
      {
        title: "Full Fowler Bed (2-Function)",
        desc: [
          "Designed for patients requiring extended hospital stays. The Full Fowler bed upgrades the patient experience with a 4-section mattress base and dual independent crank mechanisms.",
          "Alongside backrest elevation, the second crank allows for Knee-rest adjustment up to 35 degrees. Elevating the knees improves blood circulation, relaxes abdominal muscles, and critically prevents the patient from uncomfortably sliding down toward the footboard when sitting upright."
        ],
        image: "/images/hospital-furniture-images/fowler-beds-images/full-fowler-bed.webp"
      },
      {
        title: "General Ward Bed (Plain Bed)",
        desc: [
          "Stripped down to absolute essentials for maximum durability. Our General Ward beds feature a rigid, flat, single-piece perforated metal top structure with zero moving mechanical parts to break down.",
          "Perfectly suited for clinics, triage areas, and high-turnover general wards. They come equipped with IV pole mounting brackets, robust structural bracing, and can be mounted on anti-skid rubber stumps or heavy-duty castors for easy ward cleaning."
        ],
        image: "/images/hospital-furniture-images/fowler-beds-images/general-ward-bed.webp"
      }
    ],
    engineering: [
      {
        title: "Smooth Crank Mechanism",
        desc: "Nurses adjust these beds dozens of times a day. We use precision-threaded lead screws with thrust bearings to ensure the crank turns smoothly with minimal physical effort, even when lifting a heavy patient. The handle folds away neatly when not in use to prevent tripping.",
        bullets: ["Low-friction thrust bearings", "Foldable stainless steel handle"]
      },
      {
        title: "Epoxy Powder Coating",
        desc: "Hospital beds are constantly exposed to fluids and harsh disinfectants. The entire CRC steel frame undergoes a multi-step pre-treatment process before being baked with a high-temperature epoxy powder coating, rendering it highly rust and scratch-resistant.",
        bullets: ["Anti-corrosive finish", "Easy-to-clean hygienic surface"]
      },
      {
        title: "Collapsible Side Rails",
        desc: "Patient safety is guaranteed with our heavy-duty side rails. Available in either Aluminum or Stainless Steel construction, these rails provide full-length fall protection and feature a single-button release to instantly collapse downwards for easy patient transfer.",
        bullets: ["Single-button quick release", "Secure locking mechanism"]
      }
    ],
    applications: [
      { title: "General Public Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" },
      { title: "Private Patient Rooms", image: "/images/key-application-images/maternity-labour-ward.webp" },
      { title: "Clinics & Nursing Homes", image: "/images/key-application-images/icu.webp" },
      { title: "Post-Op Step Down", image: "/images/key-application-images/emergency-rooms.webp" }
    ],
    whyChoose: [
      { title: "In-House Production", desc: "By manufacturing our own bed frames with robotic welding, we guarantee zero structural defects and maximum load limits.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "NABH & ISO Compliant", desc: "Our bed structures and materials strictly adhere to national hospital outfitting and safety regulations.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our installation teams deploy equipment directly to your hospital site anywhere in the country.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "Our relationship doesn't end after handover. We provide replacement parts, castors, and AMC support.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Equipping a 200-Bed Community Hospital",
      context: "A newly constructed community hospital required outfitting for their massive general ward wings. They needed beds that were highly durable, easy for a small nursing staff to operate, and strictly within a tight budget without sacrificing patient safety.",
      solution: "MedGenz manufactured and deployed 150 Full Fowler Beds with manual crank mechanisms. The dual-crank setup allowed nurses to position patients comfortably to prevent sliding, while the lack of electronic motors meant zero maintenance downtime for the facility. The heavy-duty CRC frames ensured the investment would last for decades."
    },
    specs: [
      { label: "Frame Material", value: "Heavy-Duty CRC Steel Tube (Robotic Welded)" },
      { label: "Surface Finish", value: "Pre-treated & Epoxy Powder Coated (Anti-Corrosive)" },
      { label: "Max Safe Working Load", value: "180 KG" },
      { label: "Mattress Base", value: "Perforated CRCA Sheet (2-Section or 4-Section)" },
      { label: "Head & Foot Boards", value: "Easily Detachable ABS Polymer" }
    ],
    faqs: [
      { q: "What is the difference between a Semi-Fowler and a Full Fowler bed?", a: "A Semi-Fowler bed has a single function (1-crank) that only elevates the patient's backrest. A Full Fowler bed has two functions (2-cranks), allowing adjustment of both the backrest and the knee-rest." },
      { q: "Are these beds manually operated or electric?", a: "Our standard Fowler beds utilize a smooth, foldable manual crank mechanism. However, we also manufacture electric variants of these beds with medical-grade actuators upon request." },
      { q: "Do the beds come with a mattress?", a: "Mattresses are typically sold separately. We supply premium multi-section high-density PU foam mattresses perfectly cut to fit the specific bends of Semi and Full Fowler beds." },
      { q: "What is the weight capacity of your ward beds?", a: "Built from heavy-duty CRC (Cold Rolled Coil) steel tubes with robotic welding, our Fowler and General Ward beds are tested to safely support a working load of up to 180 KG." },
      { q: "Are the headboards and side rails included?", a: "Yes, our Fowler beds come standard with easily removable ABS head and foot boards. We also offer collapsible aluminum or stainless steel side rails as an essential inclusion." }
    ],
    heroImage: "/images/hospital-furniture-images/fowler-beds-images/full-fowler-bed.webp"
  },
  'crash-cart-trollies': {
    title: "Crash Carts & Trolleys",
    tagline: "Rapid Code Blue Response",
    heroDesc: "In a cardiac emergency, split seconds save lives. Our medical crash carts and specialized ward trolleys are engineered for extreme mobility, instant accessibility, and secure organization of critical life-saving equipment and narcotics.",
    atAGlance: ["Break-Away Safety Locks", "360° Defibrillator Shelf", "Smooth Anti-Static Castors", "Modular Drawer Dividers"],
    configurations: [
      {
        title: "Crash Cart (Emergency Resuscitation)",
        desc: [
          "The ultimate Code Blue response unit. The Emergency Crash Cart is a highly maneuverable workstation designed to bring life-saving equipment directly to the patient's bedside within seconds. Constructed from a lightweight aluminum frame with high-impact ABS panels.",
          "It comes fully equipped with a swiveling defibrillator shelf, a rigid rear-mounted CPR cardiac board, an oxygen cylinder holder, an IV pole, and a central locking system with break-away plastic seals for instantaneous drawer access during a crisis."
        ],
        image: "/images/hospital-furniture-images/crash-cart-trollies-images/crashcart-trolly.webp"
      },
      {
        title: "Medication Trolley",
        desc: [
          "Designed for accuracy and security during daily ward rounds. The Medication Trolley provides a highly organized mobile platform for nurses to dispense drugs safely to multiple patients without returning to the pharmacy.",
          "It features a secure central key lock to prevent unauthorized access to narcotics. The multi-tiered drawers are fitted with modular, customizable ABS grid dividers, allowing staff to organize ampoules, pill bottles, and syringes perfectly."
        ],
        image: "/images/hospital-furniture-images/crash-cart-trollies-images/medication-trolly.webp"
      },
      {
        title: "Dressing & Instrument Trolley",
        desc: [
          "A sterile, robust mobile surface for minor surgical procedures, wound dressings, and instrument transport. Constructed entirely from premium Grade 304 Stainless Steel, making it completely rust-proof and safe for intensive chemical disinfection.",
          "It features 2 or 3 tiered shelves with raised guard rails on three sides to prevent sterile instruments or fluid bowls from slipping off during transit."
        ],
        image: "/images/hospital-furniture-images/crash-cart-trollies-images/dressing-instrument-trolly.webp"
      }
    ],
    engineering: [
      {
        title: "Rapid Access Locking",
        desc: "Crash carts contain dangerous narcotics but must be instantly accessible. We utilize a central locking mechanism paired with a break-away plastic seal system. Staff can visually confirm the cart is fully stocked if the seal is intact, and instantly snap it off with one hand when a code blue is called.",
        bullets: ["Break-Away Emergency Seals", "Centralized Drawer Locking"]
      },
      {
        title: "High-Mobility Anti-Static Castors",
        desc: "A loaded cart is heavy and must navigate tight corners at a sprint. Our trolleys sit on premium 125mm noiseless twin-wheel castors. Two castors feature foot brakes, and all are anti-static to prevent spark hazards when using a defibrillator.",
        bullets: ["Anti-Static Rubber Wheels", "Wrap-around Crash Bumpers"]
      },
      {
        title: "Modular ABS Organization",
        desc: "Chaos inside a drawer wastes time. The ABS drawers slide on smooth, full-extension telescopic channels. The interior of each drawer features a customizable interlocking grid system, allowing nurses to create perfectly sized compartments for specific gear.",
        bullets: ["Customizable Grid Dividers", "Full-Extension Telescopic Rails"]
      }
    ],
    applications: [
      { title: "Emergency Rooms (ER)", image: "/images/key-application-images/emergency-rooms.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Operation Theatres", image: "/images/service assets/mot-page-n-eq-assets/ot-3.webp" },
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "In-House Assembly", desc: "Our trolleys are built and load-tested in-house to ensure smooth castor operation and structural integrity under pressure.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "NABH Compliant", desc: "Our crash carts strictly adhere to national safety guidelines regarding narcotic security and rapid access.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our logistics team ensures rapid deployment to any facility nationwide.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide replacement castors, drawer tracks, locking mechanisms, and complete support post-installation.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Shaving Seconds Off Code Blue Responses",
      context: "A large metropolitan hospital realized their Code Blue response times were lagging. Nurses were struggling to push heavy, outdated metal carts down carpeted hallways, and once at the bedside, vital seconds were lost searching disorganized drawers.",
      solution: "The facility upgraded their emergency fleet to MedGenz ABS Crash Carts. The lightweight chassis and anti-static swivel castors allowed nurses to sprint down hallways effortlessly. The customized ABS grid dividers ensured every ampoule was perfectly placed, and the break-away locks guaranteed the cart was fully stocked yet instantly accessible."
    },
    specs: [
      { label: "Frame Architecture", value: "Aluminum Alloy Columns with High-Impact ABS Panels" },
      { label: "Mobility System", value: "125mm Noiseless Anti-Static Castors (2 with Brakes)" },
      { label: "Drawer System", value: "5 ABS Drawers (2 Small, 2 Medium, 1 Large) with Telescopic Rails" },
      { label: "Security", value: "Central Key Lock OR Break-Away Disposable Plastic Seals" },
      { label: "Standard Accessories", value: "Defib Shelf, CPR Board, IV Pole, Sharps Bracket, O2 Cylinder Holder" }
    ],
    faqs: [
      { q: "What is the purpose of a break-away lock on a crash cart?", a: "A break-away lock ensures the secure storage of life-saving medications during normal hours, yet allows nurses to instantly snap the plastic seal for immediate access during an emergency without searching for keys." },
      { q: "Can the drawer configurations be customized?", a: "Yes. Our crash carts and medication trolleys feature modular ABS drawer dividers. Staff can easily reconfigure the internal grid to securely hold specific ampoules and syringes." },
      { q: "What accessories come standard with the emergency crash cart?", a: "Standard equipment includes a 360-degree swivel defibrillator shelf, an adjustable IV pole, a rigid CPR cardiac board, an oxygen cylinder holder, and a side-mounted sharps container bracket." },
      { q: "Are the castors anti-static?", a: "Yes, this is a critical safety feature. Our emergency carts prevent static buildup that could interfere with ECG readings or create a spark hazard near oxygen." },
      { q: "How easy is it to clean the carts?", a: "The carts are clad in seamless ABS polymer or stainless steel panels. These surfaces are completely non-porous and highly resistant to blood, fluids, and harsh chemical disinfectants." }
    ],
    heroImage: "/images/hospital-furniture-images/crash-cart-trollies-images/crashcart-trolly.webp"
  },
  'electric-bed': {
    title: "Motorized Electric Beds",
    tagline: "Patient Comfort & Control",
    heroDesc: "Advanced motorized beds designed for easy patient positioning and reduced physical strain on nursing staff. Features smooth, medical-grade actuators for precise adjustments in VIP rooms and critical care wards.",
    atAGlance: ["Remote Controlled", "Battery Backup", "3 to 5 Functions", "Antibacterial Finish"],
    configurations: [
      {
        title: "Fully Electric Multi-Function Bed",
        desc: [
          "Powered by high-torque linear actuators, this bed allows for effortless height, backrest, and knee-rest adjustments via a simple wired remote or integrated side-rail buttons.",
          "Includes an integrated emergency battery backup to ensure all functions remain operational during power failures, maintaining patient safety and comfort at all times."
        ],
        image: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp"
      }
    ],
    engineering: [
      {
        title: "Silent Actuator System",
        desc: "Equipped with CE-certified linear motors that operate at less than 45 decibels, ensuring a quiet recovery environment without the 'clunking' sounds of manual cranks.",
        bullets: ["Wired remote control", "Smooth start/stop motion"]
      }
    ],
    applications: [
      { title: "Private VIP Rooms", image: "/images/key-application-images/maternity-labour-ward.webp" },
      { title: "Cardiac Wards", image: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp" }
    ],
    whyChoose: [
      { title: "User Friendly", desc: "Allows patients to adjust their own position, promoting independence and reducing nurse workload.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "Safety Tested", desc: "Actuators are IP54 rated for water resistance and durability against hospital spills.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Nationwide Setup", desc: "Expert onsite assembly and training for hospital staff by our Delhi-based teams.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "AMC Support", desc: "Comprehensive maintenance for all electrical components and periodic actuator calibration.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Improving Patient Independence",
      context: "A multi-specialty hospital wanted to reduce nurse call volume for simple bed adjustments in their private suites.",
      solution: "Installed MedGenz Fully Electric Beds. Call volume for routine positioning decreased by 60%, allowing nurses to focus on clinical care."
    },
    specs: [
      { label: "Actuators", value: "4-Motor Linear System (CE Certified)" },
      { label: "Remote", value: "Wired Handheld Controller / Nurse Control Unit" },
      { label: "Safe Load", value: "220 KG" },
      { label: "Backup", value: "Built-in Lead-Acid Battery (4-6 Hours)" }
    ],
    faqs: [
      { q: "What is the difference between a Semi-Electric and a Fully Electric bed?", a: "A Semi-Electric bed features motorized adjustment for the backrest and knee-rest using a remote control, but the overall height of the bed (Hi-Low) is adjusted manually via a crank. A Fully Electric bed is 100% motorized, allowing remote adjustment of the backrest, knee-rest, AND the bed height." },
      { q: "What happens if there is a power failure?", a: "Our Fully Electric and premium Semi-Electric beds are equipped with an integrated battery backup system. In the event of a power cut, the bed retains full motorized functionality for several hours, allowing emergency repositioning." },
      { q: "Are the remotes easy for elderly patients to use?", a: "Yes, patient autonomy is a key focus. The beds come with a highly intuitive, ergonomic hand pendant featuring large, clear, color-coded buttons with icons. Patients can easily raise their head or knees without waiting for nursing assistance." },
      { q: "Can the bed height be lowered to prevent fall injuries?", a: "Yes. Our Fully Electric beds feature a motorized 'Hi-Low' function. The bed can be lowered very close to the ground, which is a critical safety feature for Alzheimer's or dementia patients prone to rolling out of bed, minimizing the risk of a fall injury." },
      { q: "Is the electrical system safe from liquid spills?", a: "Absolutely. All electronic components, including the medical-grade linear actuators, control box, and hand pendant, are IP54 rated for water and dust resistance. They are completely safe against accidental fluid spills and routine hospital cleaning." }
    ],
    heroImage: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp"
  },
  'speciality-beds': {
    title: "Specialty & Bariatric Beds",
    tagline: "Specific Clinical Needs",
    heroDesc: "Engineered for specific patient populations, including high-weight bariatric patients, pediatric care, and orthopedic recovery where standard beds lack the required width or structural bracing.",
    atAGlance: ["Reinforced Chassis", "Extra-Wide Platform", "Pediatric Safety Rails", "Traction Support"],
    configurations: [
      {
        title: "Bariatric Heavy-Duty Bed",
        desc: [
          "Designed with a reinforced steel framework and wider 1200mm mattress base to safely accommodate patients up to 350 KG with dignity and comfort.",
          "Equipped with high-output motors to maintain smooth movement under extreme loads and integrated scales to monitor patient weight without transfer."
        ],
        image: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp"
      },
      {
        title: "Orthopedic Traction Bed",
        desc: [
          "Features integrated Balkan frames and pulley systems for skeletal traction. The mattress base is split to allow for specific limb elevation and immobilisation protocols.",
          "Constructed with heavy-gauge steel to handle the constant stress of traction weights and patient shifts."
        ],
        image: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp"
      }
    ],
    engineering: [
      {
        title: "Robotic-Welded Framework",
        desc: "Heavily braced chassis using high-gauge CRCA steel to ensure zero flex under high static and dynamic loads, essential for bariatric safety.",
        bullets: ["350 KG static load rating", "Reinforced joint points"]
      }
    ],
    applications: [
      { title: "Orthopedic Units", image: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp" },
      { title: "Bariatric Clinics", image: "/images/key-application-images/icu.webp" },
      { title: "Pediatric Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "High Strength", desc: "No compromise on structural safety for heavy-weight patients; factor of safety 2.5x.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "Clinical Specific", desc: "Designs tailored for specific recovery protocols like orthopedic traction and pediatrics.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Custom Widths", desc: "Available in custom dimensions from 900mm to 1200mm width to suit specific facility space.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Extreme Reliability", desc: "Long-term reliability for demanding clinical environments with high patient turnover.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Expanding Bariatric Care Capability",
      context: "A hospital lacked specialized beds for obese patients, leading to manual handling injuries for staff and safety risks for patients.",
      solution: "Outfitted a dedicated bariatric wing with MedGenz reinforced beds. Staff injuries related to patient handling dropped to zero."
    },
    specs: [
      { label: "Frame Material", value: "Reinforced 2.0mm CRCA Steel" },
      { label: "Mattress Width", value: "1200mm (Standard is 900mm)" },
      { label: "Motors", value: "High-Torque 8000N Actuators" },
      { label: "Casters", value: "Double-Bearing 150mm Heavy-Duty Wheels" }
    ],
    faqs: [
      { q: "What is the weight limit on the Bariatric bed?", a: "Our Bariatric beds are built with heavy-duty robotic-welded steel frames and high-torque dual actuators, safely supporting a working load of up to 350 KG to 500 KG depending on the specific model requested." },
      { q: "How do Pediatric beds prevent child injuries?", a: "Pediatric beds feature full-height safety enclosures and side rails with strictly regulated gap spacing to prevent entrapment. All joints and moving parts are shielded with pinch-free mechanisms, and latches are child-proofed to prevent accidental drops." },
      { q: "Can the Orthopedic bed support traction equipment?", a: "Yes. Our Orthopedic beds are designed with reinforced sockets specifically to accommodate standard Balkan frames and overhead traction pulley systems required for complex bone alignment and trauma recovery." },
      { q: "Why are Geriatric beds so close to the floor?", a: "Geriatric beds utilize an ultra-low Hi-Low mechanism. By lowering the mattress base to just a few inches off the floor, we severely mitigate the risk of injury if an elderly patient, especially those with dementia or Alzheimer's, rolls out of bed during the night." },
      { q: "Are these specialty beds manual or electric?", a: "While Pediatric and basic Orthopedic beds can be configured as manual crank systems, our Bariatric and Geriatric beds are almost exclusively fully electric. Motorization is crucial for safely lifting heavy patients and managing the ultra-low height adjustments without straining nursing staff." }
    ],
    heroImage: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp"
  },
  'support-therapy-beds': {
    title: "Support & Therapy Beds",
    tagline: "Wound Care & Prevention",
    heroDesc: "Prevent and treat pressure ulcers (bedsores) with our medical-grade air mattresses and pressure relief beds. Engineered for long-term patient care, burn units, and ICUs, these systems provide dynamic weight redistribution.",
    atAGlance: ["Alternating Pressure Therapy", "Whisper-Quiet Pump", "CPR Quick Deflation Valve", "Fluid-Resistant TPU Covers"],
    configurations: [
      {
        title: "Air Mattress Bed (Alternating Pressure)",
        desc: [
          "The frontline defense against decubitus ulcers for completely immobile patients. This active system utilizes a motorized pump connected to a specialized overlay featuring multiple rows of tubular air cells.",
          "The pump constantly cycles air through an A/B alternating deflation sequence, mimicking natural body movement and completely eliminating prolonged skin ischemia (lack of blood flow)."
        ],
        image: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp"
      },
      {
        title: "Pressure Relief Bed (Zoned Support)",
        desc: [
          "A reactive, non-motorized solution ideal for high-risk patients. This bed integrates a highly specialized, multi-density foam and cooling gel structure.",
          "The mattress features distinct anatomical zones: soft heel and sacrum areas to disperse weight, and firm edge structures to assist patients when transferring out of bed."
        ],
        image: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp"
      }
    ],
    engineering: [
      {
        title: "Alternating Pressure Cycles",
        desc: "The pump runs a continuous 10-12 minute cycle, slowly inflating cell row 'A' while gently deflating cell row 'B'. This ensures no single patch of skin bears weight long enough to suffer tissue necrosis.",
        bullets: ["Automated A/B Sequence", "Adjustable Pressure Dials"]
      },
      {
        title: "Whisper-Quiet Compressor",
        desc: "The external air pump features a vibration-dampened aluminum housing that operates at less than 30 decibels, ensuring it will not disturb the patient's sleep.",
        bullets: ["< 30 Decibel Output", "Anti-Vibration Mounts"]
      },
      {
        title: "Medical-Grade TPU Construction",
        desc: "Air cells are constructed from medical-grade TPU (Thermoplastic Polyurethane). It is highly flexible, entirely waterproof, and treated with anti-microbial agents.",
        bullets: ["Fluid-Proof & Easy Clean", "Inherently Fire Retardant"]
      }
    ],
    applications: [
      { title: "Burn Care Units", image: "/images/key-application-images/icu.webp" },
      { title: "Intensive Care Units", image: "/images/key-application-images/icu.webp" },
      { title: "Geriatric & Long-Term Care", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" }
    ],
    whyChoose: [
      { title: "Quality Control", desc: "Every compressor pump is stress-tested for 48 hours to ensure zero pressure loss before dispatch.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "Clinical Validation", desc: "Our alternating pressure therapies conform to rigorous wound care standards for Stage IV ulcer treatment.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our logistics team ensures rapid deployment to any facility nationwide.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide replacement mattress cells, pump motors, and complete AMC support post-installation.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Halting Tissue Necrosis in Long-Term Care",
      context: "A prominent geriatric facility saw an alarming rise in Stage 2 ulcers. Despite strict manual turning schedules, patient weight distribution was causing severe skin friction.",
      solution: "Replaced high-risk inventory with MedGenz Alternating Air Mattress Systems. Within 60 days, the incidence of new bedsores plummeted by over 90%."
    },
    specs: [
      { label: "Therapy Type", value: "A/B Alternating Pressure / Zoned Static Relief" },
      { label: "Pump Cycle Time", value: "10 - 12 Minutes (Variable dial adjustment)" },
      { label: "Mattress Material", value: "Medical-Grade Nylon/TPU (Anti-Microbial)" },
      { label: "Emergency Response", value: "Pull-tag CPR Rapid Deflation Valve" }
    ],
    faqs: [
      { q: "What is the difference between a standard mattress and an alternating air mattress?", a: "A standard mattress exerts constant pressure on the patient's skin, which can block blood flow and cause bedsores. An alternating air mattress is actively connected to a pump that inflates and deflates alternating rows of air cells. This constantly shifts the pressure points, mimicking natural body movement and allowing healthy blood flow to all areas of the skin." },
      { q: "Can these beds treat existing pressure ulcers?", a: "Yes. Our Support & Therapy beds are designed for both prevention and treatment. For patients with existing Stage I to Stage IV decubitus ulcers, the alternating pressure relief allows the wounds the necessary lack of friction and improved blood circulation needed to heal effectively." },
      { q: "How noisy is the air pump?", a: "Patient rest is vital. Our systems are equipped with a whisper-quiet, low-vibration aluminum motor housing. It operates at less than 30 decibels, ensuring it will not disturb the patient's sleep or cause irritation in a quiet ward." },
      { q: "What happens in the event of a cardiac emergency or power failure?", a: "Safety is built-in. Our air mattresses feature a highly visible, quick-release CPR (Cardiopulmonary Resuscitation) valve. Pulling this tag instantly deflates the mattress to provide a hard, flat surface required for chest compressions. In the event of a power failure, the mattress retains air for several hours in a static mode." },
      { q: "Are the mattresses waterproof and easy to clean?", a: "Absolutely. The outer covers are made from medical-grade TPU or PVC fabric. They are completely waterproof, fluid-resistant, fire-retardant, and treated with an anti-microbial finish. They can be easily wiped down with standard hospital disinfectants without degrading." }
    ],
    heroImage: "/images/hospital-furniture-images/speciality-beds-images/orthopedic-bed.webp"
  },
  'transport-emergency-beds': {
    title: "Transport & Emergency",
    tagline: "Seamless Mobility",
    heroDesc: "In critical moments, seamless mobility saves lives. Our emergency stretcher beds and patient transfer trolleys are engineered for rapid transit, featuring heavy-duty castors and intuitive steering.",
    atAGlance: ["Up to 250KG Safe Load", "Central Locking Castors", "5th Wheel Steering", "Drop-Down Side Rails"],
    configurations: [
      {
        title: "Stretcher Bed (Trauma & ER)",
        desc: [
          "The ultimate trauma bay asset. Engineered for high-speed emergency environments, featuring dual hydraulic columns for rapid height and Trendelenburg adjustments using hands-free foot pedals.",
          "Built with a radiolucent top for instant X-rays and heavy-duty crash bumpers to protect both patient and facility during rapid movement."
        ],
        image: "/images/hospital-furniture-images/transport-emergency-images/stretcher-bed.webp"
      },
      {
        title: "Trolley Bed (Patient Transfer)",
        desc: [
          "The workhorse of daily logistics. Designed for comfortable inter-departmental transit. Features a gas-spring adjustable backrest and full-length drop-down side rails.",
          "Equipped with integrated oxygen cylinder cage and IV pole slots to ensure continuous care during every move."
        ],
        image: "/images/hospital-furniture-images/transport-emergency-images/trolly-bed.webp"
      }
    ],
    engineering: [
      {
        title: "Advanced Mobility",
        desc: "Utilizes massive 200mm anti-static castors paired with a '5th Wheel' steering system. The center wheel acts as a pivot, completely preventing 'shopping cart drift'.",
        bullets: ["5th Wheel Pivot Steering", "Central Pedal Braking"]
      },
      {
        title: "Crash & Impact Defense",
        desc: "The entire chassis is shielded by a heavy-duty, wrap-around thermoplastic bumper system, protecting hospital walls and insulating the patient.",
        bullets: ["Non-Marking Corner Bumpers", "Heavy-Gauge Steel Chassis"]
      },
      {
        title: "Rapid Positioning",
        desc: "Dual hydraulic pumps allow nurses to instantly raise, lower, or tilt the patient into shock-recovery positions using robust foot pedals.",
        bullets: ["Dual Hydraulic Columns", "Hands-Free Adjustments"]
      }
    ],
    applications: [
      { title: "Emergency & Trauma (ER)", image: "/images/key-application-images/emergency-ward.webp" },
      { title: "Diagnostic Imaging", image: "/images/key-application-images/emergency-ward.webp" },
      { title: "Ambulance Transfer Bays", image: "/images/key-application-images/emergency-rooms.webp" }
    ],
    whyChoose: [
      { title: "In-House Quality", desc: "Built and hydraulically tested in-house to ensure zero fluid leaks or mechanism jams under heavy load.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "NABH Compliant", desc: "Strictly adheres to national safety guidelines regarding side-rail entrapment and dynamic load limits.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our logistics team ensures rapid deployment to any facility nationwide.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide replacement castors, hydraulic pumps, side rails, and complete AMC support post-installation.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Halving Transit Time in the ER",
      context: "A Level-1 trauma center found orderly staff struggling with sharp corners. Older trolleys would 'drift' into walls, causing painful impacts.",
      solution: "Upgraded to MedGenz 5th Wheel stretchers. The retractable wheel allowed perfect pivoting, cutting corridor transit time in half."
    },
    specs: [
      { label: "Frame Architecture", value: "Heavy-Duty Epoxy Coated Steel & Aluminum" },
      { label: "Mobility System", value: "200mm Anti-Static Castors + 5th Wheel" },
      { label: "Height Adjustment", value: "Dual Hydraulic Columns via Foot Pedal" },
      { label: "X-Ray imaging", value: "Full-Length Radiolucent Top" }
    ],
    faqs: [
      { q: "What is the difference between a standard ward bed and a stretcher bed?", a: "Ward beds are designed for long-term recovery and stationary comfort. Stretcher beds are built entirely around mobility. They feature larger castors, a narrower profile to fit through tight corridors, crash-resistant bumpers, and specialized steering mechanisms to move a patient rapidly during a trauma event." },
      { q: "What is 5th Wheel Steering?", a: "A 5th wheel is a retractable center wheel located underneath the chassis. When engaged, it acts as a central pivot point. This allows a single nurse or orderly to push the heavy stretcher in a perfectly straight line down long corridors and effortlessly pivot it 360 degrees in tight ER bays without 'drifting'." },
      { q: "Can X-Rays be taken directly on the stretcher?", a: "Yes, our advanced trauma stretchers are equipped with a radiolucent backrest and full-length X-ray cassette trays. This allows emergency staff to take critical X-rays immediately upon the patient's arrival using a C-arm without moving the unstable patient to a separate table." },
      { q: "How does the central locking system work?", a: "During CPR or intubation, the stretcher must be completely immobile. Instead of walking around to lock each wheel individually, the central locking system uses a single, easy-access foot pedal that instantly engages the brakes on all four castors simultaneously." },
      { q: "What is the maximum weight capacity of these transport beds?", a: "Our stretchers and trolleys are constructed from heavy-gauge tubular steel and high-grade aluminum. Combined with robust dual hydraulic lifting columns, they safely support a maximum working load of up to 250 KG." }
    ],
    heroImage: "/images/hospital-furniture-images/transport-emergency-images/stretcher-trolly.webp"
  },
  'lockers-overbedtables': {
    title: "Lockers & Overbed Tables",
    tagline: "Patient Comfort & Organization",
    heroDesc: "Elevate the patient experience with ergonomic, easy-to-clean bedside accessories. Our lockers provide secure personal storage, while our pneumatic overbed tables offer a sturdy surface for dining and clinical support.",
    atAGlance: ["Gas-Spring Adjustable", "Anti-Microbial ABS Tops", "Smooth Swivel Castors", "Lockable Patient Storage"],
    configurations: [
      {
        title: "Bedside Locker (Storage Unit)",
        desc: [
          "A compact storage solution for the patient's immediate vicinity. Features include a lockable top drawer for valuables and built-in towel hangers and shoe racks.",
          "The top surface is fitted with a molded ABS tray with raised edges to contain accidental fluid spills during meals."
        ],
        image: "/images/hospital-furniture-images/lockers-overbed-tables-images/bedside-lockers.webp"
      },
      {
        title: "Overbed Table (Adjustable Dining)",
        desc: [
          "Essential for bedridden patients. Features a smooth gas-spring pneumatic mechanism for effortless height adjustment with one hand.",
          "The low-profile, U-shaped base slides under any hospital bed or armchair, maximizing floor space."
        ],
        image: "/images/hospital-furniture-images/lockers-overbed-tables-images/overbed-table.webp"
      }
    ],
    engineering: [
      {
        title: "Pneumatic Adjustments",
        desc: "Utilizing high-grade pneumatic gas springs, the table can be raised or lowered silently with a simple squeeze of the handle.",
        bullets: ["One-Handed Operation", "Gas-Spring Assisted Lift"]
      },
      {
        title: "Infection Control Surfaces",
        desc: "Seamless molded ABS plastic for locker tops and membrane-pressed laminates for tables. Non-porous and fluid-resistant.",
        bullets: ["Raised Spill-Proof Edges", "Chemical Resistant Tops"]
      }
    ],
    applications: [
      { title: "General Public Wards", image: "/images/service assets/service-page-assets/hospital-furniture.webp" },
      { title: "Private Patient Suites", image: "/images/key-application-images/maternity-labour-ward.webp" }
    ],
    whyChoose: [
      { title: "In-House Quality", desc: "Our lockers and tables are built and load-tested in-house to ensure structural integrity and smooth operation.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "NABH Compliant", desc: "Strictly adhere to safety guidelines regarding infection control surfaces and stability.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, we ensure rapid deployment nationwide.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide replacement castors, gas springs, and complete support post-installation.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Improving Patient Autonomy",
      context: "A maternity ward found mother's struggling with heavy, non-adjustable dining trays, requiring constant staff assistance.",
      solution: "Outfitted with MedGenz Gas-Spring Overbed Tables. Patients could adjust height with one hand, reducing nurse call volume."
    },
    specs: [
      { label: "Frame Material", value: "Heavy-Duty CRC Steel (Epoxy Coated)" },
      { label: "Top Surfaces", value: "Molded ABS Polymer (Spill-Proof)" },
      { label: "Table Adjustment", value: "Pneumatic Gas-Spring Cylinder" },
      { label: "Mobility", value: "50mm Twin-Wheel Swivel Castors" }
    ],
    faqs: [
      { q: "How does the overbed table adjust in height?", a: "Our overbed tables utilize a smooth pneumatic gas-spring mechanism. A simple squeeze of the lever located under the tabletop allows the patient or nurse to effortlessly raise or lower the table to the exact desired height with one hand." },
      { q: "Can the bedside locker hold a patient's personal valuables securely?", a: "Yes, our premium bedside lockers are equipped with a lockable top drawer specifically designed for patients to securely store wallets, phones, and other personal valuables during their hospital stay." },
      { q: "Are the surfaces resistant to hospital disinfectants?", a: "Absolutely. Both our lockers and overbed tables feature tops made from medical-grade ABS polymer or high-pressure membrane-pressed laminate. These materials are non-porous, highly resistant to chemical disinfectants, and feature raised edges to contain fluid spills." },
      { q: "Will the overbed table fit under low-clearance beds?", a: "Yes, the overbed table is engineered with a 'low-profile U-shaped base'. This allows the frame to easily slide under ultra-low geriatric beds, specialized ICUs, and standard ward beds without obstructing the patient's legs." },
      { q: "Do the castors lock to prevent rolling during meals?", a: "Yes. Our lockers and tables are fitted with premium twin-wheel swivel castors, and at least two of these castors are equipped with foot-operated brakes to ensure the unit remains completely stationary during dining or when used for support." }
    ],
    heroImage: "/images/about-us/about-us-assets/hospital-ward-about.webp"
  },
  'iv-stand-accessories': {
    title: "IV Stands & Accessories",
    tagline: "Fluid & Infusion Management",
    heroDesc: "Essential support for continuous patient care. Our premium IV poles and stands are engineered for absolute stability and heavy-duty load capacity to manage sensitive electronic pumps.",
    atAGlance: ["Anti-Tip Weighted Base", "Medical-Grade SS 304", "Telescopic Adjustments", "Heavy-Duty Pump Support"],
    configurations: [
      {
        title: "Standard Mobile IV Stand",
        desc: [
          "Essential mobile infusion pole for general wards. Constructed from highly durable, rust-proof Grade 304 stainless steel.",
          "Sits on a wide 5-leg star base with smooth-rolling castors and telescopic height adjustment via a secure friction knob."
        ],
        image: "/images/hospital-furniture-images/iv-stands-images/standard-iv-stands.webp"
      },
      {
        title: "Heavy-Duty ICU Infusion Stand",
        desc: [
          "Features a massively reinforced, weighted cast-iron base that anchors the center of gravity low to the floor.",
          "Thicker gauge steel pole accommodates multiple pump brackets and multi-hook top assemblies without swaying during transit."
        ],
        image: "/images/hospital-furniture-images/iv-stands-images/heavy-duty-iv-stand.webp"
      }
    ],
    engineering: [
      {
        title: "Anti-Tip Dynamics",
        desc: "Wide-diameter 5-leg star base with integrated solid weights to ensure stand does not topple when carrying multiple 1L infusion bags.",
        bullets: ["Weighted cast-iron bases", "Low center of gravity"]
      },
      {
        title: "Medical-Grade SS 304",
        desc: "Main telescopic poles and hooks are entirely rust-proof and sterile, withstanding daily wipe-downs with harsh disinfectants.",
        bullets: ["Corrosion-proof finish", "Seamless welding"]
      }
    ],
    applications: [
      { title: "General Patient Wards", image: "/images/about-us/about-us-assets/hospital-ward-about.webp" },
      { title: "Intensive Care Units (ICU)", image: "/images/key-application-images/icu.webp" },
      { title: "Ambulatory Day Care", image: "/images/key-application-images/emergency-rooms.webp" }
    ],
    whyChoose: [
      { title: "In-House Quality", desc: "Built and stress-tested in-house to ensure anti-tip stability under heavy multi-pump loads.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "NABH Compliant", desc: "Strictly adhere to safety guidelines regarding hygiene surfaces and fall prevention.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Lifetime Support", desc: "We provide replacement castors, hooks, and height-adjustment knobs post-installation.", icon: "/images/why-choose-medgenz-symbols/support.webp" },
      { title: "Bulk Availability", desc: "Headquartered in Delhi NCR, we maintain large stocks for immediate nationwide dispatch.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" }
    ],
    caseStudy: {
      title: "Eliminating Tipping Hazards",
      context: "A newly commissioned ICU found standard IV poles dangerously unstable when nurses attached multiple heavy syringe pumps.",
      solution: "Upgraded to MedGenz Heavy-Duty Stands with cast-iron weighted bases. Nurses could now load 4 pumps and sprint with confidence."
    },
    specs: [
      { label: "Pole Construction", value: "Medical-Grade Stainless Steel (SS 304)" },
      { label: "Base Design", value: "5-Leg Weighted Star Base" },
      { label: "Height Adjustment", value: "1200mm to 2100mm (Telescopic)" },
      { label: "Hook Style", value: "2-Prong or 4-Prong SS Ram-Horn" }
    ],
    faqs: [
      { q: "What is the difference between a standard IV stand and a heavy-duty ICU stand?", a: "Standard IV stands are lightweight and designed to hold a few bags of IV fluids for general ward patients. Heavy-duty ICU stands are built with thicker gauge steel and heavily weighted bases specifically to safely hold the weight of multiple heavy electronic syringe and infusion pumps without tipping over." },
      { q: "How is the height of the IV stand adjusted?", a: "Our IV stands feature a smooth, telescopic pole mechanism. They are equipped with a secure, ergonomic friction knob that allows nurses to easily raise or lower the height of the fluid bags with one hand, locking it firmly into place." },
      { q: "Are the stands prone to tipping over?", a: "No. Patient safety is our priority. We utilize a wide 5-leg star base design, often reinforced with solid cast-iron weights underneath. This creates an extremely low center of gravity, making the stands highly resistant to tipping even during rapid transit." },
      { q: "Are the fluid hooks replaceable?", a: "Yes, our stands come equipped with premium 2-prong or 4-prong 'ram-horn' style stainless steel hooks. These top assemblies are modular and can be easily replaced or upgraded if necessary." },
      { q: "Do you provide mounting solutions directly for hospital beds?", a: "Absolutely. Alongside floor-standing models, we supply specialized IV poles that mount directly into the accessory sockets of our Fowler and ICU beds, as well as space-saving ceiling-mounted telescopic IV tracks." }
    ],
    heroImage: "/images/hospital-furniture-images/iv-stands-images/heavy-duty-iv-stand.webp"
  },
  'examination-tables': {
    title: "Examination Tables",
    tagline: "Clinical Diagnostics & OPD",
    heroDesc: "The focal point of the outpatient department. Our examination tables are engineered to maximize doctor ergonomics, patient comfort, and clinical efficiency in physician clinics and triage areas.",
    atAGlance: ["Adjustable Headrests", "Integrated Tool Storage", "Tear-Resistant Upholstery", "Built-in Paper Roll Holder"],
    configurations: [
      {
        title: "Standard Examination Couch",
        desc: [
          "Essential workstation for general physicians. Features a robust two-section design with a manually adjustable headrest for patient comfort.",
          "Can be configured with integrated lower cabinets and sliding drawers to store stethoscopes and diagnostic tools immediately under the bed."
        ],
        image: "/images/service assets/service-page-assets/hospital-furniture.webp"
      },
      {
        title: "Gynecological / Obstetric Table",
        desc: [
          "Tailored for maternity clinics, ensuring optimal patient positioning and doctor access. Includes padded adjustable lithotomy poles.",
          "Features a specialized U-cut mattress design and a sliding stainless steel basin for hygienic fluid collection."
        ],
        image: "/images/key-application-images/maternity-labour-ward.webp"
      },
      {
        title: "Pediatric Examination Table",
        desc: [
          "Scaled for infants with raised, padded guard rails on three sides to prevent accidental falls. Features child-friendly upholstery colors.",
          "Can be configured with a built-in digital weighing scale or infant measuring tape embedded into the mattress cover."
        ],
        image: "/images/about-us/about-us-assets/hospital-ward-about.webp"
      }
    ],
    engineering: [
      {
        title: "Ergonomic Upholstery",
        desc: "Utilizes 50mm high-density PU foam that will not sag over time. Tightly upholstered in premium, tear-resistant medical PVC/rexine.",
        bullets: ["High-Density PU Foam", "Fluid & Stain Resistant"]
      },
      {
        title: "Infection Control Aids",
        desc: "Integrated paper roll dispenser bracket allows doctors to pull a fresh sterile sheet between patients in seconds.",
        bullets: ["Integrated Paper Dispenser", "Seamless Stitching"]
      },
      {
        title: "Mechanical Reliability",
        desc: "Headrests use heavy-duty ratchet mechanisms or gas-spring cylinders for smooth elevation without sudden drops.",
        bullets: ["Heavy-Duty Ratchet Joints", "Gas-Spring Backrest Options"]
      }
    ],
    applications: [
      { title: "OPD Clinics", image: "/images/service assets/service-page-assets/hospital-furniture.webp" },
      { title: "Gynecology Clinics", image: "/images/key-application-images/maternity-labour-ward.webp" },
      { title: "Emergency Triage", image: "/images/key-application-images/emergency-ward.webp" }
    ],
    whyChoose: [
      { title: "In-House Assembly", desc: "Tables are welded and upholstered in-house to ensure frames won't wobble and foam won't sag.", icon: "/images/why-choose-medgenz-symbols/in-house-assemble.webp" },
      { title: "NABH Compliant", desc: "Meets strict national safety guidelines regarding hygiene surfaces and load stability.", icon: "/images/why-choose-medgenz-symbols/certified.webp" },
      { title: "Pan-India Execution", desc: "Headquartered in Delhi NCR, our logistics team ensures rapid deployment nationwide.", icon: "/images/why-choose-medgenz-symbols/pan-india.webp" },
      { title: "Lifetime Support", desc: "We provide replacement upholstery, mechanical ratchets, and complete support post-installation.", icon: "/images/why-choose-medgenz-symbols/support.webp" }
    ],
    caseStudy: {
      title: "Streamlining Throughput in a Busy OPD",
      context: "A polyclinic bottleneck occurred in exam rooms where doctors repeatedly walked across rooms for tools.",
      solution: "Upgraded to MedGenz Examination Couches with multi-drawer storage and built-in paper roll dispensers. Throughput increased dramatically."
    },
    specs: [
      { label: "Frame Architecture", value: "Tubular CRC Steel (Epoxy Powder Coated)" },
      { label: "Mattress Structure", value: "Two-Section, 50mm High-Density PU Foam" },
      { label: "Upholstery", value: "Fluid Resistant Medical PVC / Rexine" },
      { label: "Max Safe Load", value: "150 KG" }
    ],
    faqs: [
      { q: "What is the weight capacity of the standard examination table?", a: "Our examination tables are constructed from heavy-duty tubular steel. They are factory-tested to safely support a working load of up to 150 KG without bending or structural compromise." },
      { q: "Do the gynecological tables come with accessories?", a: "Yes, our Gynecological and Obstetric Examination Tables come fully equipped with adjustable lithotomy poles/crutches, a specialized U-cut mattress design, and a sliding stainless steel fluid collection bowl." },
      { q: "Is a paper roll holder included as standard?", a: "Yes, to maintain high infection control standards in busy OPDs, all our standard examination tables feature an integrated paper roll dispenser bracket located at the head or foot end." },
      { q: "How do you clean the table upholstery?", a: "The mattress sections are upholstered in premium, non-porous medical PVC/rexine. They are highly fluid-resistant and can be easily wiped down between patients using standard hospital-grade chemical disinfectants without cracking or peeling." },
      { q: "Can the tables be customized with drawers or cabinets?", a: "Absolutely. We offer variations of our standard exam couches that feature built-in lower cabinets and sliding drawers. This allows doctors to store stethoscopes, gloves, and diagnostic tools directly under the table to save clinic space." }
    ],
    heroImage: "/images/service assets/service-page-assets/hospital-furniture.webp"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = productData[slug];
  if (!data) return { title: 'Product Not Found' };
  return {
    title: `${data.title} | Hospital Furniture | MedGenz`,
    description: data.heroDesc,
  };
}

export default async function FurnitureProductPage({ params }: { params: Promise<{ slug: string }> }) {
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
      "url": `https://www.medgenz.com/services/hospital-furniture/${slug}`,
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
            <ol className="service-breadcrumb flex w-full min-w-0 items-center gap-x-1.5 md:gap-x-2 whitespace-nowrap text-[8px] sm:text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-normal md:tracking-wider">
              <li><Link href="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
              <li><span className="mx-1 md:mx-2">/</span></li>
              <li><Link href="/services/hospital-furniture" className="hover:text-brand-600 transition-colors">Hospital Furniture</Link></li>
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
              <Link href="/contact" className="bg-brand-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center gap-2 transition-transform hover:-translate-y-1">
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
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Clinical <span className="text-brand-600">Models</span></h2>
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
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 uppercase tracking-tighter">Anatomy of <span className="text-brand-600">Durability</span></h2>
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
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {data.applications.map((app, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-square relative p-2 bg-gray-50">
                  <Image src={app.image} alt={app.title} fill className="object-cover rounded-xl" />
                </div>
                <div className="p-3 md:p-4 text-center">
                  <h3 className="font-bold text-gray-900 text-[10px] sm:text-xs md:text-sm leading-tight uppercase tracking-tighter">{app.title}</h3>
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 relative z-10">
            {data.whyChoose.map((point, i) => (
              <div key={i} className="bg-white p-3 md:p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300">
                <div className="w-9 h-9 md:w-12 md:h-12 mb-3 md:mb-4 relative">
                  <Image src={point.icon} alt={point.title} fill className="object-contain" />
                </div>
                <h3 className="text-[10px] sm:text-xs md:text-base font-bold text-gray-900 mb-2 uppercase tracking-tighter">{point.title}</h3>
                <p className="text-[10px] md:text-xs text-gray-600 leading-relaxed font-light">{point.desc}</p>
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
