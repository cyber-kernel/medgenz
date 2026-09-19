import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import slugify from "slugify";
import { categorySlug, normalizeCategoryNames } from "@/lib/blog-categories";

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
        categoryLinks: { orderBy: { position: "asc" }, include: { category: { select: { id: true, name: true } } } },
        tags: true,
        authorName: true,
        readingTime: true,
        metaTitle: true,
        metaDescription: true,
        published: true,
        createdAt: true,
        updatedAt: true,
        faqs: true,
      },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ ...blog, categories: blog.categoryLinks.length ? blog.categoryLinks.map((link) => link.category.name) : blog.categories });
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
    const { title, content, excerpt, coverImage, categories, tags, authorName, metaTitle, metaDescription, published, slug: manualSlug, faqs } = body;

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

    const categoryNames = normalizeCategoryNames(categories);
    const selectedCategories = categoryNames.length ? categoryNames : ["Healthcare"];
    const updatedBlog = await prisma.blog.update({
      where: { id: params.id },
      data: {
        title,
        slug,
        content,
        excerpt,
        coverImage,
        categories: selectedCategories,
        tags: tags || [],
        authorName,
        metaTitle,
        metaDescription,
        published,
        faqs: Array.isArray(faqs) ? faqs : [],
      },
    });

    await prisma.$transaction(async (tx) => {
      await tx.blogCategory.deleteMany({ where: { blogId: params.id } });
      for (const [position, name] of selectedCategories.entries()) {
        const category = await tx.category.upsert({ where: { name }, update: {}, create: { name, slug: categorySlug(name) } });
        await tx.blogCategory.create({ data: { blogId: params.id, categoryId: category.id, position } });
      }
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
