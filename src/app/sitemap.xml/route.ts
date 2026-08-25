import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const baseUrl = process.env.NEXTAUTH_URL || "https://www.medgenz.com";

  try {
    // Fetch all published blogs
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
    });

    // Fetch all projects
    const projects = await prisma.project.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
    });

    // Define all public static pages and service product routes.
    const staticPaths = [
      { path: "/", lastmod: new Date().toISOString(), priority: "1.0" },
      { path: "/about", lastmod: new Date().toISOString(), priority: "0.9" },
      { path: "/services", lastmod: new Date().toISOString(), priority: "0.9" },
      { path: "/projects", lastmod: new Date().toISOString(), priority: "0.8" },
      { path: "/blogs", lastmod: new Date().toISOString(), priority: "0.8" },
      { path: "/contact", lastmod: new Date().toISOString(), priority: "0.7" },
      { path: "/services/modular-operation-theatre", lastmod: new Date().toISOString(), priority: "0.8" },
      { path: "/services/medical-gas-pipeline-system", lastmod: new Date().toISOString(), priority: "0.8" },
      { path: "/services/hospital-furniture", lastmod: new Date().toISOString(), priority: "0.8" },
      { path: "/services/nurse-call-system", lastmod: new Date().toISOString(), priority: "0.8" },
      { path: "/services/curtain-track-system", lastmod: new Date().toISOString(), priority: "0.8" },
      { path: "/services/ivf-lab-setups", lastmod: new Date().toISOString(), priority: "0.8" },
      { path: "/services/surgical-pendants", lastmod: new Date().toISOString(), priority: "0.8" },
    ];

    const serviceProductPaths = [
      ...["wall-panels", "ceiling-systems", "hermetic-doors", "flooring-systems", "laminar-airflow", "hepa-filtration", "ahu", "pressure-control", "hvac-ducting", "surgeon-control-panel", "peripheral-cleanroom-lights", "environment-monitoring", "surgical-pendants", "scrub-stations", "storage-cabinets", "x-ray-viewers"].map((slug) => `/services/modular-operation-theatre/${slug}`),
      ...["oxygen-supply-system", "nitrous-oxide-system", "medical-air-system", "central-vacuum-system", "copper-pipeline-network", "gas-control-safety", "bed-head-panels", "gas-outlets-terminals", "accessories-consumables"].map((slug) => `/services/medical-gas-pipeline-system/${slug}`),
      ...["icu-beds", "electric-bed", "crash-cart-trollies", "fowler-ward-beds", "lockers-overbedtables", "support-therapy-beds", "speciality-beds", "transport-emergency-beds", "examination-tables", "iv-stand-accessories"].map((slug) => `/services/hospital-furniture/${slug}`),
      ...["bedside-hardware", "emergency-indicators", "central-control-displays"].map((slug) => `/services/nurse-call-system/${slug}`),
      ...["aluminum-tracks", "silent-gliders", "roof-suspensions", "custom-layouts", "curtains", "iv-tracks"].map((slug) => `/services/curtain-track-system/${slug}`),
    ].map((path) => ({ path, lastmod: new Date().toISOString(), priority: "0.7" }));

    const staticPages = [...staticPaths, ...serviceProductPaths];

    // Build XML
    const urls = [
      ...staticPages.map(
        (page) =>
          `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.path === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
      ),
      ...blogs.map(
        (blog) =>
          `  <url>
    <loc>${baseUrl}/blogs/${blog.slug}</loc>
    <lastmod>${blog.updatedAt.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
      ),
      ...projects.map(
        (project) =>
          `  <url>
    <loc>${baseUrl}/projects/${project.slug}</loc>
    <lastmod>${project.updatedAt.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
      ),
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls.join("\n")}
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Sitemap generation error:", error);
    return new Response("Sitemap generation failed", { status: 500 });
  }
}
