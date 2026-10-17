import type { Metadata } from "next";
import ContactClient from "./client";
import { withSeoMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = withSeoMetadata({
  title: "Contact MedGenz | Hospital Solutions",
  description:
    "Contact MedGenz about modular operating theatres, medical gas systems, and hospital infrastructure. Call +91-97164-12630 or email sales@medgenz.com.",
  keywords: ["Contact MedGenz", "Hospital solutions", "Modular OT consultation"],
}, "/contact");

export default function ContactPage() {
  return <ContactClient />;
}
