import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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

        <article className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8 md:p-14 text-slate-700 leading-relaxed">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8">Privacy Policy</h1>

          <div className="space-y-8">
            <section>
              <p>At MedGenz India Private Limited, the security and privacy of your corporate data are our top priorities. This policy provides a transparent overview of the information we collect from you, the reasons for collecting it, and how it is managed. Operating in the medtech and healthcare infrastructure sectors, we collaborate with hospitals, clinics, and medical professionals who trust us with sensitive institutional and professional data. We highly value and fiercely protect that trust.</p>
              <p className="mt-4">If you have any questions regarding this policy, please reach out to us directly.</p>
              <p className="mt-4">This Privacy Policy applies to all visitors to our website, as well as anyone who contacts us, places an order, or interacts with MedGenz India Private Limited in any capacity. By engaging with our website or services, you acknowledge that you have read and understood this policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Information We Collect</h2>
              <p>We believe in data minimization and only collect what is strictly necessary. This falls into the following categories:</p>
              <ul className="list-disc space-y-3 pl-6 mt-4">
                <li><strong>Personal Information:</strong> Your name, professional title, organization, and email address, typically gathered when you submit a contact form, request a quote, place an order, or reach out with an inquiry.</li>
                <li><strong>Regulatory &amp; Institutional Information:</strong> When the procurement of regulated medical equipment demands it, we may require proof of medical registration, institutional affiliation, or official procurement authorization. This is a mandatory requirement under Indian law.</li>
                <li><strong>Transaction &amp; Order Records:</strong> Data pertaining to your purchases, including invoices, shipping addresses, payment confirmations, and relevant communication regarding specific orders.</li>
                <li><strong>Website Usage Data:</strong> Standard technical details such as your IP address, browser type, and the specific pages you navigate. We use this data via our analytics tools to optimize and improve our website experience.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Purpose of Data Collection</h2>
              <p>We utilize your information strictly for the following purposes, and nothing else:</p>
              <ul className="list-disc space-y-3 pl-6 mt-4">
                <li>To accurately process and deliver your orders.</li>
                <li>To ensure full compliance with the Drugs and Cosmetics Act, 1940, and the Medical Devices Rules, 2017, where applicable.</li>
                <li>To coordinate installation visits and manage ongoing service or maintenance requests.</li>
                <li>To share critical updates regarding your purchases, such as safety notices, regulatory shifts, or product enhancements.</li>
                <li>To fulfill commercial and financial record-keeping obligations as mandated by Indian tax and corporate laws.</li>
              </ul>
              <p className="mt-4"><strong>Note:</strong> We never sell your data to third parties, and we do not use your information to build profiles for targeted advertising.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">A Note on Patient Data</h2>
              <p>To ensure we provide the best product recommendations, clients sometimes share contextual details about clinical settings, ward types, or patient volumes. Please note that MedGenz India Private Limited does not collect, process, or store personally identifiable patient health information. Any incidental sharing of such clinical context is treated with the utmost confidentiality and is never retained once the immediate discussion concludes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Data Sharing and Disclosure</h2>
              <p>Your information is only shared outside of MedGenz India Private Limited under the following limited circumstances:</p>
              <ul className="list-disc space-y-3 pl-6 mt-4">
                <li><strong>Logistics Partners:</strong> To facilitate the delivery and tracking of your shipments.</li>
                <li><strong>Authorized Service Engineers:</strong> To perform on-site installations, calibrations, or warranty repairs.</li>
                <li><strong>Regulatory Bodies:</strong> Such as the CDSCO or other relevant government agencies, when strictly required by law.</li>
                <li><strong>Legal Obligations:</strong> To comply with valid government directives or binding court orders.</li>
              </ul>
              <p className="mt-4">In all of these scenarios, we ensure that only the absolute minimum amount of information necessary is shared.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Data Security Measures</h2>
              <p>We utilize standard, reasonable technical safeguards to protect your information. This includes encrypted communications, strict internal data handling policies, and secure access controls. Additionally, our staff members who handle client data receive specialized confidentiality training.</p>
              <p className="mt-4">However, no system on the internet is completely invulnerable. We strongly advise against sharing highly sensitive information through unverified or unsecured communication channels.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Data Retention</h2>
              <p>We hold onto your personal information only for as long as it is necessary to fulfill its original purpose, or as mandated by law. As per regulatory guidelines, the majority of records relating to medical device transactions must be maintained for a minimum of seven years. Once data is no longer required, it is securely and permanently destroyed.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Your Privacy Rights</h2>
              <p>You have the right at any time to request a summary of the personal data we hold about you. You may also request that we correct any inaccuracies, cease sending communications you have not explicitly consented to, or delete your data (provided there is no legal obligation for us to retain it). Please send any written requests to our contact address, and we will process them within a reasonable timeframe.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Cookies</h2>
              <p>Our website utilizes cookies to remember your browsing preferences and for basic site analytics. We do not use cookies for cross-site tracking. You can choose to disable cookies in your browser settings, though please be aware that doing so may prevent certain parts of our website from functioning properly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Policy Modifications</h2>
              <p>We may update this page and its effective date if there are material changes to how we handle your data. We encourage you to review this policy periodically. Your continued use of our services or website following any posted changes will constitute your acceptance of the updated policy.</p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
