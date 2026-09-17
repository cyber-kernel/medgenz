import { Plus } from "lucide-react";

export interface SiteFAQItem {
  question: string;
  answer: string;
}

interface SiteFAQProps {
  faqs: SiteFAQItem[];
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
}

export default function SiteFAQ({ faqs, title = "Frequently Asked Questions", eyebrow = "Common Questions", description, className = "" }: SiteFAQProps) {
  const validFaqs = faqs.filter((faq) => faq.question?.trim() && faq.answer?.trim());
  if (!validFaqs.length) return null;

  return (
    <section className={`site-faq border-t border-slate-100 bg-white py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-brand-600 md:text-xs">{eyebrow}</p>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 md:text-4xl">{title}</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-brand-600" />
          {description && <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">{description}</p>}
        </div>
        <div className="space-y-4">
          {validFaqs.map((faq, index) => (
            <details key={`${faq.question}-${index}`} className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-sm font-bold uppercase tracking-tight text-slate-900 transition-all hover:bg-slate-100 md:p-8 md:text-lg">
                <span className="flex items-start gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs text-brand-600 shadow-sm transition-all group-open:bg-brand-600 group-open:text-white">{index + 1}</span>{faq.question}</span>
                <Plus className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-45" />
              </summary>
              <div className="border-t border-slate-200/50 px-6 pb-8 pt-6 text-sm font-light leading-relaxed text-slate-500 md:px-8 md:text-base">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}