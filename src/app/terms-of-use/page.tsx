import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | MedGenz India Private Limited",
  description: "Terms governing use of the MedGenz India Private Limited website.",
  alternates: {
    canonical: "https://www.medgenz.com/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 pb-16 pt-28 font-inter md:pt-36">
      <article className="mx-auto max-w-4xl rounded-[2.5rem] border border-slate-100 bg-white p-8 leading-relaxed text-slate-700 shadow-xl md:p-14">
        <h1 className="mb-8 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          Terms of Use
        </h1>

        <p>
          These terms apply to your use of the MedGenz India Private Limited website.
          By accessing the site, you agree to use it lawfully and in accordance with
          these terms.
        </p>

        <section className="mt-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Website information</h2>
          <p>
            Website content is provided for general information about MedGenz and its
            products and services. Product specifications, availability, project scope,
            pricing, and delivery terms may change and should be confirmed directly with
            MedGenz before making a purchasing decision. Website content is not medical
            advice and does not replace applicable professional or regulatory guidance.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Quotes and orders</h2>
          <p>
            A request for information or a quotation through this website is not an
            order or a binding offer. Any purchase is subject to the specifications,
            pricing, and terms agreed in the applicable quotation or written order
            confirmation.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Intellectual property</h2>
          <p>
            Unless otherwise stated, website text, graphics, logos, and other materials
            are owned by or used with permission by MedGenz India Private Limited.
            You may view and share links to the site for lawful purposes, but may not
            reproduce or commercially use its content without prior permission.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">External links and availability</h2>
          <p>
            This website may link to third-party sites for reference. MedGenz does not
            control those sites or guarantee their content. We may update or remove
            website content and cannot guarantee uninterrupted availability.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">Contact</h2>
          <p>
            For questions about these terms, contact{" "}
            <a className="font-semibold text-brand-700 underline" href="mailto:info@medgenz.com">
              info@medgenz.com
            </a>.
          </p>
        </section>
      </article>
    </main>
  );
}
