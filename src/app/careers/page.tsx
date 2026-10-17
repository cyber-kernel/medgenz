import type { Metadata } from "next";
import CareersForm from "./CareersForm";
import { withSeoMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = withSeoMetadata({
  title: "Careers at MedGenz | Join Our Team",
  description:
    "Explore career opportunities at MedGenz. Share your experience and interests with our team.",
}, "/careers");

export default function CareersPage() {
  return <CareersForm />;
}
