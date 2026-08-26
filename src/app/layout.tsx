import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FAQAccordionController from "@/components/FAQAccordionController";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/structured-data";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  preload: true,
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: "MedGenz | Modular Operation Theatres & Medical Gas Pipeline System NABH and ISO certified turnkey solutions",
  description: "MedGenz India Private Limited provides NABH and ISO certified turnkey solutions for Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure.",
  keywords: [
    "Modular Operation Theatre",
    "MGPS",
    "Medical Gas Pipeline System",
    "Hospital Furniture",
    "Hospital Equipment",
    "ICU Beds",
    "Medical Gas System India",
    "Healthcare Infrastructure",
    "Hospital Construction",
  ],
  authors: [{ name: "MedGenz India Private Limited" }],
  creator: "MedGenz India Private Limited",
  publisher: "MedGenz India Private Limited",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: "/medgenz-favicon-new2.webp",
    apple: "/medgenz-favicon-new2.webp",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.medgenz.com",
    siteName: "MedGenz India Private Limited",
    title: "MedGenz | Modular Operation Theatres & Medical Gas Pipeline System NABH and ISO certified turnkey solutions",
    description:
      "MedGenz India Private Limited provides NABH and ISO certified turnkey solutions for Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure.",
    images: [
      {
        url: "https://www.medgenz.com/images/brand-logo-mg/medgenz-logo/medgenz_logo_v3.webp",
        width: 1200,
        height: 630,
        alt: "MedGenz Logo",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedGenz | Modular Operation Theatres & Medical Gas Pipeline System NABH and ISO certified turnkey solutions",
    description:
      "MedGenz India Private Limited provides NABH and ISO certified turnkey solutions for Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure.",
    creator: "@medgenz",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.medgenz.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KVMMLBDW');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Structured Data - Organization & Website */}
        <script
          key="org-schema"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          key="site-schema"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={cn(
          inter.variable,
          poppins.variable,
          "font-inter bg-white text-slate-900 antialiased"
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVMMLBDW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <ScrollReveal />
        <FAQAccordionController />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
