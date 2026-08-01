import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Validation: Image types only
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type. Only JPEG, PNG, and WebP are allowed." }, { status: 400 });
    }

    // Validation: Max 5MB
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Max size is 5MB." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = path.extname(file.name) || ".webp";
    const filename = `${uuidv4()}${ext}`;
    const uploadDir = path.join(process.cwd(), "public/uploads");
    const filePath = path.join(uploadDir, filename);

    await writeFile(filePath, buffer);

    const url = `/uploads/${filename}`;

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}
