import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import slugify from "slugify";
import { categorySlug, normalizeCategoryNames } from "@/lib/blog-categories";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const publishedOnly = searchParams.get("published") === "true";

  try {
    const blogs = await prisma.blog.findMany({
      where: publishedOnly ? { published: true } : {},
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        categories: true,
        categoryLinks: { orderBy: { position: "asc" }, include: { category: { select: { id: true, name: true } } } },
        published: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(blogs.map((blog) => ({ ...blog, categories: blog.categoryLinks.length ? blog.categoryLinks.map((link) => link.category.name) : blog.categories })));
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, content, excerpt, coverImage, categories, tags, authorName, metaTitle, metaDescription, published, faqs } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    let slug = slugify(title, { lower: true, strict: true });

    // Handle duplicate slugs
    const existingBlog = await prisma.blog.findUnique({
      where: { slug },
      select: { id: true }
    });
    if (existingBlog) {
      slug = `${slug}-${Date.now()}`;
    }

    const categoryNames = normalizeCategoryNames(categories);
    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        coverImage,
        categories: categoryNames.length ? categoryNames : ["Healthcare"],
        tags: tags || [],
        authorName,
        metaTitle,
        metaDescription,
        published: published || false,
        faqs: Array.isArray(faqs) ? faqs : [],
      },
    });

    await prisma.$transaction(async (tx) => {
      for (const [position, name] of (categoryNames.length ? categoryNames : ["Healthcare"]).entries()) {
        const category = await tx.category.upsert({ where: { name }, update: {}, create: { name, slug: categorySlug(name) } });
        await tx.blogCategory.create({ data: { blogId: blog.id, categoryId: category.id, position } });
      }
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Blog creation error:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
