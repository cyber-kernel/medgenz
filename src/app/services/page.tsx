import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, CheckCircle, ArrowRight, Activity, Layout, Layers, Wind, Settings, Microscope, Scissors } from "lucide-react";
import type { Metadata } from "next";
import { getFAQSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Turnkey Hospital Infrastructure Services | MedGenz | MOT, MGPS, Hospital Furniture",
  description: "Expert manufacturers and installers of Modular Operation Theatres (MOT), Medical Gas Pipeline Systems (MGPS), Hospital Furniture, ICU Beds, IVF Labs, and Nurse Call Systems in India.",
  keywords: [
    "Modular Operation Theatre",
    "MOT manufacturer",
    "Medical Gas Pipeline System",
    "MGPS supplier",
    "Hospital furniture",
    "ICU beds",
    "IVF lab setup",
    "Hospital equipment India",
    "NABH compliant OT",
  ],
  alternates: {
    canonical: "https://www.medgenz.com/services",
  },
  openGraph: {
    type: "website",
    url: "https://www.medgenz.com/services",
    title: "Turnkey Hospital Infrastructure Services | MedGenz",
    description:
      "Expert manufacturers of Modular Operation Theatres, Medical Gas Pipeline Systems, and complete hospital infrastructure solutions.",
    images: [
      {
        url: "https://www.medgenz.com/images/service-images/modular-ot-product.webp",
        width: 1200,
        height: 630,
        alt: "MedGenz Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Infrastructure Services | MedGenz",
    description:
      "Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital equipment manufacturing.",
  },
};

const serviceCategories = [
  {
    title: "Modular Operation Theatre",
    slug: "modular-operation-theatre",
    desc: "Advanced NABH compliant MOT setups with laminar airflow and antimicrobial panels.",
    icon: Layout,
    features: ["Wall & Ceiling Panels", "Laminar Airflow", "Hermetically Sealed Doors", "Surgical Pendants"],
    image: "/images/service-images/modular-ot-product.webp"
  },
  {
    title: "Medical Gas Pipeline System",
    slug: "medical-gas-pipeline-system",
    desc: "Safe and efficient delivery of medical gases through centralized pipeline systems.",
    icon: Wind,
    features: ["Oxygen Plants", "Vacuum Systems", "Nitrous Oxide", "Bed Head Panels"],
    image: "/images/service-images/mgps-product.webp"
  },
  {
    title: "Hospital Furniture",
    slug: "hospital-furniture",
    desc: "High-quality ICU beds, fowler beds, and specialized medical furniture.",
    icon: Settings,
    features: ["ICU Electric Beds", "Fowler Ward Beds", "Examination Tables", "Crash Carts"],
    image: "/images/key-application-images/emergency-ward.webp"
  },
  {
    title: "Nurse Call System",
    slug: "nurse-call-system",
    desc: "Digital communication systems for enhanced patient safety and staff efficiency.",
    icon: CheckCircle,
    features: ["Bedside Stations", "Display Panels", "Code Blue Alerts", "Mobile Integration"],
    image: "/images/key-application-images/nurse-call-system.webp"
  },
  {
    title: "Curtain Track System",
    slug: "curtain-track-system",
    desc: "Hospital cubicle curtain tracks for ward privacy and infection control.",
    icon: Scissors,
    features: ["Aluminum Tracks", "Anti-microbial Fabrics", "Silent Glider Hooks", "Fire Retardant"],
    image: "/images/hospital-curtain-track-system/heavy-duty-aluminum-tracks.webp"
  }
];

const faqs = [
  {
    question: "What kind of hospital infrastructure solutions does MedGenz provide?",
    answer: "MedGenz delivers turnkey solutions for modular operating theatres, medical gas pipeline systems, hospital furniture, nurse call systems, and curtain track systems for healthcare facilities across India.",
  },
  {
    question: "Is MedGenz suitable for new hospital projects and retrofits?",
    answer: "Yes. MedGenz supports both greenfield hospital projects and retrofit upgrades with compliant infrastructure, installation support, and maintenance-ready systems.",
  },
  {
    question: "Do your systems support infection control and compliance requirements?",
    answer: "Our products are designed for sterile workflows, durable performance, and healthcare compliance, with a strong focus on safety, hygiene, and long-term reliability.",
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Healthcare Infrastructure Manufacturing & Installation",
    "provider": {
      "@type": "Organization",
      "name": "MedGenz",
      "url": "https://www.medgenz.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Hospital Services",
      "itemListElement": serviceCategories.map(cat => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": cat.title,
          "description": cat.desc
        }
      }))
    }
  };

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(faqs)) }}
      />
      {/* Hero */}
      <section className="relative py-32 bg-slate-950 text-white overflow-hidden uppercase tracking-tighter">
        <div className="absolute inset-0 z-0 opacity-60">
           <Image
             src="/images/service-images/modular-ot-product.webp"
             alt="MedGenz Services"
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Expertise</span>
          <h1 className="text-3xl md:text-6xl font-black text-white mb-6">Turnkey <br /> <span className="text-brand-500">Solutions</span></h1>
          <p className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed normal-case tracking-normal font-light">
            MedGenz provides end-to-end hospital infrastructure services, from planning and design to manufacturing, installation, and maintenance.
          </p>
        </div>
      </section>

      {/* Deep Service Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {serviceCategories.map((cat, i) => (
              <Link href={`/services/${cat.slug}`} key={i} className="group flex flex-col bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative h-72 overflow-hidden">
                  <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow font-light">{cat.desc}</p>

                  <ul className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
                    {cat.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2.5 text-xs font-black text-slate-800 uppercase tracking-widest">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-600 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="bg-slate-900 text-white py-4 px-8 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-600 transition-all w-full md:w-fit shadow-xl shadow-slate-900/20"
                  >
                    Explore System <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-brand-600 font-black uppercase tracking-[0.25em] text-sm mb-4">Common Questions</p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Answers for hospital buyers and project teams</h2>
            <p className="text-slate-600 text-lg leading-relaxed">These questions help clarify how MedGenz supports planning, installation, and long-term healthcare infrastructure performance.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <details key={index} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all">
                <summary className="cursor-pointer list-none text-lg font-black text-slate-900 flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-brand-600 text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24 bg-brand-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight uppercase tracking-tighter">Engineering Safety. <br /> Delivering Quality.</h2>
          <p className="text-brand-100 text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-light">
            Every project we undertake is built with precision and care, ensuring the highest level of infection control.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-slate-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-slate-800 transition-all shadow-2xl"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
