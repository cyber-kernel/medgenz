import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/prisma";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getServerSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const body = await request.json();
  if (!Array.isArray(body.blogIds) || new Set(body.blogIds).size !== body.blogIds.length) return NextResponse.json({ error: "Invalid article order." }, { status: 400 });
  await prisma.$transaction(body.blogIds.map((blogId: string, position: number) => prisma.blogCategory.update({ where: { blogId_categoryId: { blogId, categoryId: id } }, data: { position } })));
  return NextResponse.json({ ok: true });
}