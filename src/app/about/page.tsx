import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { withSeoMetadata } from "@/lib/seo-metadata";
import PageStructuredData from "@/components/PageStructuredData";

// Dynamic import to keep client component separate
const AboutClient = dynamic(() => import("./client"), {
  loading: () => <div className="min-h-screen" />,
});

export const metadata: Metadata = withSeoMetadata({
  title: "About MedGenz | Hospital Infrastructure Experts",
  description: "Discover MedGenz, an Indian manufacturer of modular operating theatres, medical gas systems, and hospital infrastructure.",
  keywords: [
    "About MedGenz",
    "Hospital manufacturer India",
    "MOT supplier",
    "MGPS manufacturer",
    "Medical equipment company",
  ],
  openGraph: {
    type: "website",
    url: "https://www.medgenz.com/about",
    title: "About MedGenz | 12+ Years of Excellence in Hospital Infrastructure",
    description:
      "Discover MedGenz's journey as India's premier manufacturer of Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure.",
    images: [
      {
        url: "https://www.medgenz.com/images/about-us/about-us-home/about-us.webp",
        width: 1200,
        height: 630,
        alt: "MedGenz About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About MedGenz | 12+ Years of Excellence",
    description:
      "India's premier manufacturer of Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure.",
  },
}, "/about");

export default function AboutPage() {
  return (
    <>
      <PageStructuredData
        name="About MedGenz"
        description="Discover MedGenz, an Indian manufacturer of modular operating theatres, medical gas systems, and hospital infrastructure."
        url="https://www.medgenz.com/about"
      />
      <AboutClient />
    </>
  );
}
