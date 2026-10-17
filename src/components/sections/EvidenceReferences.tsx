import {
  PAGE_CONTENT_UPDATED_AT,
  type SourceReference,
} from "@/lib/structured-data";

interface EvidenceReferencesProps {
  references: SourceReference[];
}

export default function EvidenceReferences({ references }: EvidenceReferencesProps) {
  return (
    <section
      aria-labelledby="evidence-references-title"
      className="border-t border-slate-200 bg-slate-50 py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="evidence-references-title"
          className="text-xl font-bold text-slate-900 md:text-2xl"
        >
          Which standards and guidance are relevant?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          These independent references provide general technical or clinical
          context. They do not certify a MedGenz product or project; confirm
          applicable requirements for each facility and product specification.
        </p>
        <ul className="mt-5 space-y-4">
          {references.map((reference) => (
            <li key={reference.url} className="max-w-4xl text-sm leading-6 text-slate-700">
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 underline underline-offset-4"
              >
                {reference.label}
              </a>
              <span>: {reference.context}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-slate-500">
          Page information updated{" "}
          <time dateTime={PAGE_CONTENT_UPDATED_AT}>October 17, 2026</time>.
        </p>
      </div>
    </section>
  );
}
