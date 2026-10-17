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
  title: 'MedGenz | Modular OTs & Hospital Infrastructure',
  description: 'MedGenz delivers modular operating theatres, medical gas systems, and hospital infrastructure solutions across India.',
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
  const seoTitle = (title ? `${title} | MedGenz` : defaultSEO.title).slice(0, 59).trim();
  const seoDescription = (description || defaultSEO.description).slice(0, 159).trim();
  const seoImage = image || defaultSEO.image;
  const seoUrl = url || defaultSEO.url;
  const seoType = type || defaultSEO.type;

  return (
    <>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content="Modular OT, Medical Gas Pipeline, Hospital Furniture, Healthcare Infrastructure" />

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
