import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import slugify from "slugify";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const publishedOnly = searchParams.get("published") === "true";

  try {
    const blogs = await prisma.blog.findMany({
      where: publishedOnly ? { published: true } : {},
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(blogs);
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
    const { title, content, excerpt, coverImage, category, authorName, metaTitle, metaDescription, published } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
    }

    let slug = slugify(title, { lower: true, strict: true });

    // Handle duplicate slugs
    const existingBlog = await prisma.blog.findUnique({ where: { slug } });
    if (existingBlog) {
      slug = `${slug}-${Date.now()}`;
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        coverImage,
        category,
        authorName,
        metaTitle,
        metaDescription,
        published: published || false,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Blog creation error:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
