import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Zap, Phone, ArrowRight, Microscope } from "lucide-react";

export const metadata = {
  title: "Turnkey IVF Lab Cleanroom Setups | MedGenz",
  description: "ISO 5 and NABH compliant IVF laboratory cleanroom setups. Precision-engineered sterile environments for clinical embryology and fertility centers.",
};

const technicalSpecs = [
  { label: "Air Quality Standard", value: "ISO 5 (Class 100) and ISO 7 (Class 10,000) Environments" },
  { label: "VOC Control", value: "Strict use of Low-VOC materials and specialized gas-phase filtration" },
  { label: "HVAC Integration", value: "Dedicated AHU with HEPA/ULPA filtration and precision humidity control" },
  { label: "Lighting", value: "UV-free warm LED lighting to protect sensitive embryos" },
  { label: "Surfaces", value: "Seamless, chemical-resistant medical grade paneling and flooring" },
];

const features = [
  {
    title: "Embryology Cleanroom",
    desc: "Precision-controlled environment with laminar airflow stations for embryo handling.",
    image: "/images/about-us/about-us-assets/ivf-about.webp"
  },
  {
    title: "Andrology Lab Setup",
    desc: "Fully equipped zones for sperm processing and diagnostic procedures.",
    image: "/images/service-images/modular-ot-product.webp"
  },
  {
    title: "Cryopreservation Zone",
    desc: "Safe and monitored storage areas for long-term embryo and gamete banking.",
    image: "/images/service-images/mgps-product.webp"
  }
];

export default function IVFPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image
             src="/images/about-us/about-us-assets/ivf-about.webp"
             alt="IVF Laboratory"
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/60" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-600/20 text-brand-300 border border-brand-400/30 text-xs font-bold uppercase tracking-widest mb-4">Precision Sterile Environments</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Turnkey IVF Lab <span className="text-brand-500">Setups</span></h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            Engineering the highest success rates through science-driven cleanroom technology. We design and build ISO 5 embryology labs with zero-toxicity environments.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Where Engineering Meets <span className="text-brand-600">Life</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                An IVF laboratory requires much more than standard hospital hygiene. The sensitivity of embryos to VOCs, airborne particles, and light requires a highly specialized engineering approach. MedGenz provides the complete blueprint, execution, and certification.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Total VOC and Chemical Pollutant Control",
                  "ISO 5 Cleanroom Air Quality (HEPA/ULPA)",
                  "Precision Temperature & Humidity Regulation",
                  "Non-Toxic, Zero-Outgassing Lab Materials",
                  "Modular Cleanroom Partitioning & False Ceilings"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-semibold">
                    <CheckCircle className="w-5 h-5 text-brand-600" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us/about-us-assets/ivf-about.webp"
                alt="IVF Lab Setup"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Laboratory <span className="text-brand-600">Zones</span></h2>
            <div className="w-20 h-1.5 bg-brand-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {features.map((f, i) => (
              <div key={i} className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src={f.image} alt={f.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
                  <p className="text-slate-600 mb-6">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 border-b-2 border-brand-600 pb-3 inline-block">Lab Technical Specifications</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {technicalSpecs.map((spec, i) => (
                    <tr key={i} className="border-b border-slate-200 last:border-0 hover:bg-slate-50 transition-colors">
                      <th className="p-4 md:p-6 bg-slate-50 text-slate-900 font-bold w-1/3 border-r border-slate-200">{spec.label}</th>
                      <td className="p-4 md:p-6 text-slate-700">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-600">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Build Your Premier Fertility Center</h2>
          <p className="text-brand-100 text-xl mb-12">Partner with experts who understand the critical nuances of IVF cleanroom engineering.</p>
          <Link href="/contact" className="inline-flex bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all gap-2 items-center">
            Consult an Expert <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
