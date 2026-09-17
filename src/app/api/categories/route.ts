import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";
import { categorySlug, normalizeCategoryNames } from "@/lib/blog-categories";

export async function GET() {
  const categories = await prisma.category.findMany({
    include: {
      blogs: {
        orderBy: { position: "asc" },
        include: { blog: { select: { id: true, title: true, slug: true, published: true } } },
      },
    },
    orderBy: { name: "asc" },
  });
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  if (!(await getServerSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const names = normalizeCategoryNames((await request.json()).name);
  if (names.length !== 1) return NextResponse.json({ error: "Enter one non-empty category name." }, { status: 400 });
  try {
    const category = await prisma.category.create({ data: { name: names[0], slug: categorySlug(names[0]) } });
    return NextResponse.json(category, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Category name already exists." }, { status: 409 });
  }
}

export async function PUT(request: Request) {
  if (!(await getServerSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const names = normalizeCategoryNames(body.name);
  if (!body.id || names.length !== 1) return NextResponse.json({ error: "A category id and name are required." }, { status: 400 });
  try {
    const category = await prisma.category.update({ where: { id: body.id }, data: { name: names[0], slug: categorySlug(names[0]) } });
    return NextResponse.json(category);
  } catch {
    return NextResponse.json({ error: "Category name already exists or was not found." }, { status: 409 });
  }
}

export async function DELETE(request: Request) {
  if (!(await getServerSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Category id is required." }, { status: 400 });
  const category = await prisma.category.findUnique({ where: { id }, select: { name: true } });
  if (!category) return NextResponse.json({ error: "Category not found." }, { status: 404 });
  await prisma.$transaction(async (tx) => {
    const blogs = await tx.blog.findMany({ where: { categories: { has: category.name } }, select: { id: true, categories: true } });
    for (const blog of blogs) {
      await tx.blog.update({ where: { id: blog.id }, data: { categories: blog.categories.filter((name) => name.toLocaleLowerCase() !== category.name.toLocaleLowerCase()) } });
    }
    await tx.category.delete({ where: { id } });
  });
  return NextResponse.json({ ok: true });
}