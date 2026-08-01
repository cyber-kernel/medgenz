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
      select: { id: true, updatedAt: true },
      orderBy: { updatedAt: "desc" },
    });

    // Define static pages
    const staticPages = [
      { path: "/", lastmod: new Date().toISOString(), priority: "1.0" },
      { path: "/about", lastmod: new Date().toISOString(), priority: "0.9" },
      { path: "/services", lastmod: new Date().toISOString(), priority: "0.9" },
      { path: "/projects", lastmod: new Date().toISOString(), priority: "0.8" },
      { path: "/blogs", lastmod: new Date().toISOString(), priority: "0.8" },
      { path: "/contact", lastmod: new Date().toISOString(), priority: "0.7" },
    ];

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
    <loc>${baseUrl}/projects/${project.id}</loc>
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
