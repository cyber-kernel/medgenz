import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import slugify from "slugify";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const publishedOnly = searchParams.get("published") === "true";

  try {
    const projects = await prisma.project.findMany({
      where: publishedOnly ? { published: true } : {},
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      title,
      subtitle,
      service,
      location,
      heroImage,
      brief,
      challenge,
      solution,
      highlights,
      specs,
      metaTitle,
      metaDescription,
      published
    } = body;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    let slug = slugify(title, { lower: true, strict: true });

    // Handle duplicate slugs
    const existingProject = await prisma.project.findUnique({ where: { slug } });
    if (existingProject) {
      slug = `${slug}-${Date.now()}`;
    }

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        subtitle,
        service,
        location,
        heroImage,
        brief,
        challenge,
        solution,
        highlights,
        specs,
        metaTitle,
        metaDescription,
        published: published || false,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Project creation error:", error);
    return NextResponse.json({ error: "Failed to create project" }, { status: 500 });
  }
}
