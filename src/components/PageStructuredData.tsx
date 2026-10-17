"use client";

import {
  getWebPageSchema,
  type SourceReference,
} from "@/lib/structured-data";

interface PageStructuredDataProps {
  type?: string;
  name: string;
  description: string;
  url: string;
  dateModified?: string;
  citation?: SourceReference[];
}

export default function PageStructuredData(props: PageStructuredDataProps) {
  const schema = getWebPageSchema(props);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
