import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: any;
}

const defaultSEO = {
  title: 'MedGenz | Modular Operation Theatres & Medical Gas Pipeline System NABH and ISO certified turnkey solutions',
  description: 'MedGenz India Private Limited provides NABH and ISO certified turnkey solutions for Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure.',
  image: '/images/og-image.jpg',
  url: 'https://www.medgenz.com',
  type: 'website',
};

export default function SEO({
  title,
  description,
  image,
  url,
  type,
  schema
}: SEOProps) {
  const seoTitle = title ? `${title} | MedGenz` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;
  const seoType = type || defaultSEO.type;

  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content={seoType} />
      <meta property="og:site_name" content="MedGenz" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Canonical */}
      <link rel="canonical" href={seoUrl} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
