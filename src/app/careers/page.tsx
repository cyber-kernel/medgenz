import type { Metadata } from "next";
import CareersForm from "./CareersForm";
import { withSeoMetadata } from "@/lib/seo-metadata";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata: Metadata = withSeoMetadata({
  title: "Careers at MedGenz | Join Our Team",
  description:
    "Explore career opportunities at MedGenz. Share your experience and interests with our team.",
}, "/careers");

export default function CareersPage() {
  return (
    <>
      <PageStructuredData
        name="Careers at MedGenz"
        description="Explore career opportunities at MedGenz and share your experience and interests with the team."
        url="https://www.medgenz.com/careers"
      />
      <CareersForm />
    </>
  );
}
