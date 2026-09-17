import slugify from "slugify";

export function normalizeCategoryNames(input: unknown): string[] {
  const values = Array.isArray(input) ? input : typeof input === "string" ? input.split(",") : [];
  const seen = new Set<string>();
  return values
    .map((value) => String(value).trim().replace(/\s+/g, " "))
    .filter((value) => value.length > 0)
    .filter((value) => {
      const key = value.toLocaleLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

export function categorySlug(name: string): string {
  return slugify(name, { lower: true, strict: true }) || `category-${Date.now()}`;
}