import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactClient = dynamic(() => import("./page"), {
  loading: () => <div className="min-h-screen" />,
});

export const metadata: Metadata = {
  title: "Contact MedGenz | Get in Touch for Hospital Infrastructure Solutions",
  description: "Contact MedGenz for Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure solutions. Call +91-97164-12630 or email sales@medgenz.com.",
  keywords: [
    "Contact MedGenz",
    "Hospital equipment inquiry",
    "MOT consultation",
    "MGPS quote",
    "Medical equipment supplier",
    "Healthcare infrastructure contact",
  ],
  alternates: {
    canonical: "https://www.medgenz.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://www.medgenz.com/contact",
    title: "Contact MedGenz | Get in Touch for Hospital Infrastructure Solutions",
    description:
      "Contact MedGenz for Modular Operation Theatres, Medical Gas Pipeline Systems, and hospital infrastructure solutions.",
  },
  twitter: {
    card: "summary",
    title: "Contact MedGenz",
    description:
      "Get in touch with MedGenz for hospital infrastructure solutions and equipment inquiries.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
