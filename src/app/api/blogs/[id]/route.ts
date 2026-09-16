import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import slugify from "slugify";

export async function GET(
  request: Request,
  { params }: any
) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        excerpt: true,
        coverImage: true,
        categories: true,
        tags: true,
        authorName: true,
        readingTime: true,
        metaTitle: true,
        metaDescription: true,
        published: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: any
) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, content, excerpt, coverImage, categories, tags, authorName, metaTitle, metaDescription, published, slug: manualSlug } = body;

    const existingBlog = await prisma.blog.findUnique({
      where: { id: params.id },
      select: { id: true, title: true, slug: true }
    });
    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    let slug = existingBlog.slug;
    if (title && title !== existingBlog.title && !manualSlug) {
      slug = slugify(title, { lower: true, strict: true });
      const duplicate = await prisma.blog.findFirst({
        where: { slug, id: { not: params.id } },
        select: { id: true }
      });
      if (duplicate) {
        slug = `${slug}-${Date.now()}`;
      }
    } else if (manualSlug) {
      slug = manualSlug;
    }

    const updatedBlog = await prisma.blog.update({
      where: { id: params.id },
      data: {
        title,
        slug,
        content,
        excerpt,
        coverImage,
        categories: categories || ["Healthcare"],
        tags: tags || [],
        authorName,
        metaTitle,
        metaDescription,
        published,
      },
    });

    return NextResponse.json(updatedBlog);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: any
) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await prisma.blog.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
