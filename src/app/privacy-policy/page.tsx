import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Download, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | MedGenz India Private Limited',
  description: 'Read the official privacy policy of MedGenz India Private Limited.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-16 md:pt-36 font-inter">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-600 font-bold uppercase tracking-widest text-[10px] mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden p-8 md:p-14">
          <div className="flex flex-col items-center text-center mb-10 border-b border-slate-100 pb-8">
            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-4 border border-brand-100 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-3">
              Privacy <span className="text-brand-600">Policy</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-light max-w-xl">
              Official legal document outline regarding privacy commitments and data usage policy at MedGenz India Private Limited.
            </p>
          </div>

          <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 relative mb-10">
            <iframe
              src="/medgenz_privacy_policy.pdf"
              className="w-full h-full border-none"
              title="MedGenz Privacy Policy Document"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 border border-slate-100 p-6 rounded-2xl">
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-slate-900 mb-1">Having trouble viewing the PDF?</h3>
              <p className="text-slate-500 text-xs font-light">You can download the document directly to view it on your device.</p>
            </div>
            <a
              href="/medgenz_privacy_policy.pdf"
              download
              className="bg-brand-600 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-600/30 flex items-center gap-2 hover:bg-brand-500 transition-all shrink-0"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
