// Structured data helper functions for SEO schema generation

export interface SchemaOrgType {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

// Organization schema - used on home page
export const getOrganizationSchema = (): SchemaOrgType => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MedGenz India Private Limited",
  legalName: "MedGenz India Private Limited",
  alternateName: "MedGenz",
  url: "https://www.medgenz.com",
  logo: "https://www.medgenz.com/images/brand-logo-mg/medgenz-logo/medgenz_logo_v3.webp",
  description:
    "Premier ISO certified manufacturer of Modular Operation Theatres (MOT), Medical Gas Pipeline Systems (MGPS), and turnkey hospital infrastructure in India.",
  foundingDate: "2012",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales Support",
    email: "sales@medgenz.com",
    telephone: "+91-97164-12630",
    areaServed: "IN",
    availableLanguage: ["en"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 87 F/F kh No. 31/25, near DPS, Dwarka Sector-3, Matiala",
    addressLocality: "New Delhi",
    postalCode: "110059",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/medgenz/",
    "https://youtube.com/@medgenzindiapvtltd",
    "https://www.instagram.com/medgenz_india_pvt_ltd/",
  ],
  knowsAbout: [
    "Modular Operation Theatres",
    "Medical Gas Pipeline Systems",
    "Hospital Furniture",
    "Medical Equipment",
    "Healthcare Infrastructure",
  ],
});

// LocalBusiness schema - for geographic targeting
export const getLocalBusinessSchema = (): SchemaOrgType => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MedGenz India Private Limited",
  alternateName: "MedGenz",
  image: "https://www.medgenz.com/images/brand-logo-mg/medgenz-logo/medgenz_logo_v3.webp",
  description:
    "Leading manufacturer of Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 87 F/F kh No. 31/25, near DPS, Dwarka Sector-3, Matiala",
    addressLocality: "New Delhi",
    postalCode: "110059",
    addressCountry: "IN",
  },
  telephone: "+91-97164-12630",
  email: "info@medgenz.com",
  priceRange: "$$$$",
  areaServed: {
    "@type": "Country",
    name: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.5355",
    longitude: "77.0521",
  },
});

// Service schema - for individual services
export const getServiceSchema = (
  serviceTitle: string,
  serviceDescription: string,
  serviceUrl: string
): SchemaOrgType => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceTitle,
  description: serviceDescription,
  url: serviceUrl,
  provider: {
    "@type": "Organization",
    name: "MedGenz",
    url: "https://www.medgenz.com",
    logo: "https://www.medgenz.com/images/brand-logo-mg/medgenz-logo/medgenz_logo_v3.webp",
  },
  areaServed: {
    "@type": "Country",
    name: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Our Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceTitle,
        },
      },
    ],
  },
});

// Breadcrumb schema
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const getBreadcrumbSchema = (items: BreadcrumbItem[]): SchemaOrgType => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// FAQ schema - for AEO optimization
export interface FAQItem {
  question: string;
  answer: string;
}

export const getFAQSchema = (faqs: FAQItem[]): SchemaOrgType => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Article schema - for blog posts
export interface ArticleData {
  headline: string;
  description: string;
  image?: string;
  datePublished: Date;
  dateModified?: Date;
  authorName: string;
  articleBody?: string;
}

export const getArticleSchema = (article: ArticleData): SchemaOrgType => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.headline,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished.toISOString(),
  dateModified: (article.dateModified || article.datePublished).toISOString(),
  author: {
    "@type": "Person",
    name: article.authorName,
  },
  publisher: {
    "@type": "Organization",
    name: "MedGenz",
    logo: {
      "@type": "ImageObject",
      url: "https://www.medgenz.com/images/brand-logo-mg/medgenz-logo/medgenz_logo_v3.webp",
    },
  },
  articleBody: article.articleBody,
});

// Product schema - for hospital furniture/equipment
export interface ProductData {
  name: string;
  description: string;
  image?: string;
  price?: string;
  priceCurrency?: string;
  url: string;
}

export const getProductSchema = (product: ProductData): SchemaOrgType => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  url: product.url,
  brand: {
    "@type": "Brand",
    name: "MedGenz",
  },
  manufacturer: {
    "@type": "Organization",
    name: "MedGenz",
  },
  ...(product.price && {
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.priceCurrency || "INR",
      availability: "https://schema.org/InStock",
    },
  }),
});

// Contact point schema
export const getContactPointSchema = (): SchemaOrgType => ({
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  contactType: "Sales Support",
  email: "sales@medgenz.com",
  telephone: "+91-97164-12630",
  areaServed: "IN",
  availableLanguage: ["en"],
});

// Website schema with SearchAction - for better Google integration
export const getWebsiteSchema = (): SchemaOrgType => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MedGenz India Private Limited",
  alternateName: "MedGenz",
  url: "https://www.medgenz.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.medgenz.com/blogs?q={search_term_string}",
    },
    query_input: "required name=search_term_string",
  },
});
