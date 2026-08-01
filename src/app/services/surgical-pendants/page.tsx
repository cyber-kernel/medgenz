import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Activity, ShieldCheck, Zap, Phone, ArrowRight } from "lucide-react";

export const metadata = {
  title: "OT Ceiling Pendants & Anaesthesia Units | MedGenz",
  description: "Manufacturers of high-load OT Ceiling Pendants. We supply Single-Arm, Double-Arm, and Rigid Anaesthesia pendants with pneumatic brakes for Modular OTs.",
};

const technicalSpecs = [
  { label: "Structural Material", value: "High-strength extruded Aluminum alloy with anti-microbial coating" },
  { label: "Load Bearing Capacity", value: "150 kg to 300 kg (Depending on single/double arm configuration)" },
  { label: "Rotation Radius", value: "330° rotation at each pivot joint with mechanical stops" },
  { label: "Braking Mechanism", value: "Pneumatic Air Brakes / Electro-Magnetic / Mechanical Friction" },
  { label: "Standard Integrations", value: "O2, N2O, Air, Vac, AGSS Outlets | 5/15 Amp Sockets | RJ45 Data Ports" },
];

const variants = [
  {
    title: "Single-Arm Movable Pendants",
    desc: "Exceptional flexibility with 330° pivot, ideal for multi-specialty OTs.",
    image: "/images/mot-product-page-images/ot-surgical-pendant-images/single-arm-surgical-pendant.webp"
  },
  {
    title: "Double-Arm (Tandem) Pendants",
    desc: "Incredibly wide reach for complex cardiac or neurosurgery procedures.",
    image: "/images/mot-product-page-images/ot-surgical-pendant-images/double-arm-surgical-pendant.webp"
  },
  {
    title: "Rigid / Fixed ICU Pendants",
    desc: "Robust stability for critical care monitoring and equipment management.",
    image: "/images/mot-product-page-images/ot-surgical-pendant-images/rigid-surgical-pendant.webp"
  }
];

export default function PendantsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image
             src="/images/mot-product-page-images/ot-surgical-pendant-images/double-arm-surgical-pendant.webp"
             alt="Surgical Pendants"
             fill
             className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/60" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-600/20 text-brand-300 border border-brand-400/30 text-xs font-bold uppercase tracking-widest mb-4">Ergonomic Surgical Workflows</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">OT Ceiling <span className="text-brand-500">Pendants</span></h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            Eliminate floor clutter and enhance sterility. Consolidate medical gases, power, and data into ergonomic, highly maneuverable overhead consoles.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why are Ceiling Pendants <span className="text-brand-600">Critical?</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Floor clutter is a severe hazard. Tangled hoses and cables compromise workflows and create trip hazards. Our pendants keep the floor 100% clear and sterile while delivering utilities exactly where needed.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-brand-600 pl-4">
                  <div className="text-2xl font-bold text-slate-900">330°</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Ergonomic Rotation</div>
                </div>
                <div className="border-l-4 border-brand-600 pl-4">
                  <div className="text-2xl font-bold text-slate-900">300KG</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Load Capacity</div>
                </div>
              </div>
            </div>
            <div className="aspect-video relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/mot-product-page-images/ot-surgical-pendant-images/single-arm-surgical-pendant.webp"
                alt="OT Pendant"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pendant <span className="text-brand-600">Variants</span></h2>
            <div className="w-20 h-1.5 bg-brand-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {variants.map((v, i) => (
              <div key={i} className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image src={v.image} alt={v.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h3>
                  <p className="text-slate-600 mb-6">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 border-b-2 border-brand-600 pb-3 inline-block">Technical Specifications</h2>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Optimize Your Surgical Environment</h2>
          <p className="text-brand-100 text-xl mb-12">Get expert guidance on pendant placement and load calculations for your next OT project.</p>
          <Link href="/contact" className="inline-flex bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all gap-2 items-center">
            Consult our Engineers <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
