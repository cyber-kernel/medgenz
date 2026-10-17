import type { Metadata } from "next";

export const SITE_URL = "https://www.medgenz.com";

function limitAtWordBoundary(value: string, maxLength: number): string {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const shortened = normalized.slice(0, maxLength + 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return shortened.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim();
}

function normalizeKeywords(keywords: Metadata["keywords"]): string[] {
  if (!keywords) return ["MedGenz", "Hospital Infrastructure"];

  const values = (Array.isArray(keywords) ? keywords : [keywords])
    .flatMap((keyword) => String(keyword).split(","))
    .map((keyword) => keyword.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  const normalized: string[] = [];
  const seen = new Set<string>();
  let length = 0;

  for (const keyword of values) {
    const normalizedKeyword = keyword.toLowerCase();
    if (seen.has(normalizedKeyword)) continue;
    const separatorLength = normalized.length ? 2 : 0;
    const availableLength = 99 - length - separatorLength;
    if (availableLength <= 0) break;

    const limitedKeyword = limitAtWordBoundary(keyword, availableLength);
    if (!limitedKeyword) break;
    normalized.push(limitedKeyword);
    seen.add(normalizedKeyword);
    length += separatorLength + limitedKeyword.length;
    if (limitedKeyword.length < keyword.length) break;
  }

  return normalized;
}

export function withSeoMetadata(metadata: Metadata, pathname: string): Metadata {
  const title =
    typeof metadata.title === "string"
      ? limitAtWordBoundary(metadata.title, 59)
      : "MedGenz | Hospital Infrastructure";
  const description = limitAtWordBoundary(
    typeof metadata.description === "string"
      ? metadata.description
      : "MedGenz delivers hospital infrastructure solutions across India.",
    159,
  );
  const canonical = new URL(pathname, SITE_URL).toString();

  return {
    ...metadata,
    title,
    description,
    keywords: normalizeKeywords(metadata.keywords),
    alternates: {
      ...metadata.alternates,
      canonical,
    },
  };
}
