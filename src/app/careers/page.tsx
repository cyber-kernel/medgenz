import type { Metadata } from "next";
import CareersForm from "./CareersForm";

export const metadata: Metadata = {
  title: "Careers at MedGenz | Join Our Team",
  description:
    "Explore career opportunities at MedGenz. Share your experience and interests with our team.",
  alternates: {
    canonical: "https://www.medgenz.com/careers",
  },
};

export default function CareersPage() {
  return <CareersForm />;
}
