import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, ShieldCheck, Activity, Phone, Mail, MapPin, Layout, Wind, Settings } from 'lucide-react';
import HomeSlider from '@/components/HomeSlider';
import ClientMarquee from '@/components/sections/ClientMarquee';
import ECGCTA from '@/components/sections/ECGCTA';
import Testimonials from '@/components/sections/Testimonials';

const stats = [
  { label: "Projects Done", value: "150+" },
  { label: "Years Experience", value: "12+" },
  { label: "Client Base", value: "150+" },
  { label: "Staff Members", value: "100+" },
];

const expertise = [
  {
    title: "Modular OT Setup",
    desc: "Complete design and installation of seamless, highly sterile operation theatres using modern materials.",
    image: "/images/service-images/modular-ot-product.webp",
    link: "/services/modular-operation-theatre",
    icon: ShieldCheck
  },
  {
    title: "Medical Gas Pipelines",
    desc: "End-to-end routing, design, and testing of highly reliable medical gas pipeline systems (MGPS).",
    image: "/images/service-images/mgps-product.webp",
    link: "/services/medical-gas-pipeline-system",
    icon: Wind
  },
  {
    title: "Hospital Furniture",
    desc: "High quality, durable furniture designed for optimal patient care and comfort in hospital environments.",
    image: "/images/key-application-images/emergency-ward.webp",
    link: "/services/hospital-furniture",
    icon: Settings
  }
];


const testimonials = [
  {
    name: "Dr. Aman Maggo",
    role: "Hospital Founder, Delhi",
    text: "MedGenz executed our entire MGPS and Modular OT setup flawlessly. Their attention to NABH compliance saved us months of delay."
  },
  {
    name: "Dr. Asish",
    role: "ENT Surgeon, Haryana",
    text: "The Class 100 Modular OT built by MedGenz completely upgraded our surgical capabilities. Truly world-class panels."
  },
  {
    name: "Dr. M. Gupta",
    role: "IVF Specialist, Haryana",
    text: "MedGenz handled our complete IVF lab setup. Their understanding of ISO 5 air quality is unparalleled."
  },
  {
    name: "Dr. Rajesh Sharma",
    role: "Hospital Director, Delhi",
    text: "From planning to execution, MedGenz delivered exactly what we needed. Their team was professional, responsive, and technically strong."
  },
  {
    name: "Dr. Neha Kapoor",
    role: "Gynecologist, Gurugram",
    text: "Our Modular OT project was completed with excellent workmanship and attention to detail. MedGenz made the entire process smooth."
  },
  {
    name: "Dr. Vivek Bansal",
    role: "Orthopedic Surgeon, Noida",
    text: "The OT infrastructure delivered by MedGenz has significantly improved our surgical environment. The quality of construction is impressive."
  },
  {
    name: "Dr. Rakesh Verma",
    role: "Hospital Administrator, Punjab",
    text: "MedGenz provided an end-to-end solution for our hospital infrastructure. Their coordination between design, installation, and commissioning was excellent."
  },
  {
    name: "Dr. Priya Malhotra",
    role: "IVF Specialist, Jaipur",
    text: "The IVF laboratory setup was handled with remarkable precision. MedGenz understood our technical requirements and delivered a highly controlled environment."
  },
  {
    name: "Dr. Sandeep Mehra",
    role: "Hospital Owner, Uttar Pradesh",
    text: "We were impressed by MedGenz's technical expertise and execution quality. They delivered our MGPS installation safely and efficiently."
  },
  {
    name: "Dr. Ankit Arora",
    role: "General Surgeon, Delhi",
    text: "MedGenz transformed our existing OT into a modern surgical facility. The finishing, cleanliness, and overall quality are excellent."
  },
  {
    name: "Dr. Pooja Agarwal",
    role: "Hospital Director, Rajasthan",
    text: "Working with MedGenz was a great experience. Their team understood our requirements and provided practical solutions within our project timeline."
  },
  {
    name: "Dr. Nitin Chawla",
    role: "Medical Director, Haryana",
    text: "The team demonstrated excellent knowledge of hospital engineering and compliance requirements. Their execution was systematic from start to finish."
  },
  {
    name: "Dr. Rahul Mehta",
    role: "Laparoscopic Surgeon, Delhi",
    text: "Our new Modular OT has completely changed the working environment for our surgical team. The build quality and attention to detail are outstanding."
  },
  {
    name: "Dr. Shweta Jain",
    role: "Fertility Specialist, Chandigarh",
    text: "MedGenz delivered our IVF lab with a strong focus on environmental control and quality standards. Their technical support was excellent throughout the project."
  },
  {
    name: "Dr. Kunal Gupta",
    role: "Hospital Founder, Noida",
    text: "From consultation and design to installation, MedGenz handled every stage professionally. We are extremely satisfied with the final outcome."
  },
  {
    name: "Dr. Arvind Kumar",
    role: "Hospital Administrator, Delhi",
    text: "The MGPS installation was completed efficiently with minimal disruption to our hospital operations. The MedGenz team was highly professional."
  },
  {
    name: "Dr. Meenakshi Rao",
    role: "Gynecologist, Bengaluru",
    text: "MedGenz helped us create a modern and hygienic surgical facility that meets our operational requirements. Their team was knowledgeable and dependable."
  },
  {
    name: "Dr. Harish Saini",
    role: "Orthopedic Surgeon, Jaipur",
    text: "The Modular OT installation exceeded our expectations. The materials, finishing, and overall execution reflect a very high standard of work."
  },
  {
    name: "Dr. Sameer Khanna",
    role: "Hospital Director, Gurugram",
    text: "MedGenz provided excellent guidance throughout our hospital infrastructure project. Their ability to manage multiple technical requirements under one roof was a major advantage."
  },
  {
    name: "Dr. Kavita Singh",
    role: "Hospital Founder, Lucknow",
    text: "We are very happy with the quality and professionalism shown by the MedGenz team. They delivered a reliable healthcare infrastructure solution with excellent attention to detail."
  }
];



export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MedGenz India Private Limited",
    "legalName": "MedGenz India Private Limited",
    "alternateName": "MedGenz",
    "url": "https://www.medgenz.com",
    "logo": "https://www.medgenz.com/images/brand-logo-mg/medgenz-logo/og-medgenz-logo-2-transparent.webp",
    "description": "Premier ISO certified manufacturer of Modular Operation Theatres (MOT), Medical Gas Pipeline Systems (MGPS), and turnkey hospital infrastructure in India.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9716412630",
      "contactType": "Sales"
    }
  };

  return (
    <div className="relative font-inter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION - Integrated Slider */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-32">
        <HomeSlider />
      </section>

      {/* 2. STATS SECTION - Scaled Down */}
      <section className="py-8 md:py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-brand-600 mb-0.5">{s.value}</div>
                <div className="text-slate-500 uppercase text-[8px] md:text-[9px] tracking-widest font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEEP ABOUT SECTION - Scaled Down */}
      <section className="py-12 md:py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative group">
            <div className="aspect-[3/2] bg-slate-100 rounded-[2rem] overflow-hidden relative shadow-xl">
              <Image
                src="/images/about-us/about-us-home/about-us.webp"
                alt="MedGenz Facility"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-brand-600 text-white p-3 md:p-5 rounded-[1.5rem] z-20 shadow-xl transform hover:scale-105 transition-transform cursor-default leading-none">
              <div className="text-3xl md:text-5xl font-black mb-1">12+</div>
              <div className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-brand-100">Years of Legacy</div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[10px] block">Who We Are</span>
            <h2 className="text-xl md:text-3xl font-black text-slate-900 leading-tight uppercase tracking-tighter">Premier Manufacturer of <br /><span className="text-brand-600">Hospital Infrastructure</span></h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              Welcome to MedGenz. We are an ISO 9001:2015, ISO 13485:2016, and CE Certified organization engaged in Manufacturing, Supplying, and Exporting a wide array of Medical Gas Pipeline Systems (MGPS), Modular Operation Theatres, ICU Pendants, and Nurse Call Systems.
            </p>
            <div className="space-y-3">
              {["Turnkey Hospital Projects", "Certified Quality Management", "In-house Manufacturing & R&D"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-2.5 h-2.5 text-brand-600" />
                  </div>
                  <span className="text-slate-700 font-bold text-xs">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex bg-slate-900 text-white px-5 py-3 rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-brand-600 transition-colors shadow-lg shadow-slate-900/10">
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      <ClientMarquee />

      {/* 4. CORE EXPERTISE GRID - Scaled Down & Clickable */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Core <span className="text-brand-600">Expertise</span></h2>
            <div className="w-10 h-1 bg-brand-600 mx-auto rounded-full" />
            <p className="mt-5 text-slate-500 text-xs md:text-sm max-w-xl mx-auto font-light">Providing a comprehensive range of turnkey healthcare solutions tailored to complex medical requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {expertise.map((item, i) => (
              <Link href={item.link} key={i} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                <div className="h-48 relative overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3 line-clamp-1 uppercase tracking-tighter">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow line-clamp-3 text-xs md:text-sm font-light">{item.desc}</p>
                  <div className="mt-auto">
                    <div className="text-brand-600 font-bold uppercase tracking-widest text-[9px] flex items-center gap-2 group-hover:gap-4 transition-all">
                      Explore Service <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="inline-block bg-slate-900 text-white px-6 py-3.5 rounded-lg font-bold uppercase tracking-widest text-[10px] hover:bg-brand-600 transition-all shadow-xl shadow-slate-900/10 transform hover:-translate-y-1">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS - Star Icons & Scaled Down */}
      <section className="py-12 md:py-16 bg-brand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-[9px] mb-1 block">Client Stories</span>
            <h2 className="text-xl md:text-3xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Trusted by <span className="text-brand-600">Professionals</span></h2>
            <div className="w-10 h-1 bg-brand-600 mx-auto rounded-full" />
          </div>

          <div className="overflow-hidden pb-8">
            <Testimonials testimonials={testimonials} />
          </div>
        </div>
      </section>

      <ECGCTA />
    </div>
  );
}
