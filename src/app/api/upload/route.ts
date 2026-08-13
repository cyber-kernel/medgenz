import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { v4 as uuidv4 } from "uuid";
import path from "path";

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

    const ext = path.extname(file.name) || ".webp";
    const filename = `uploads/${uuidv4()}${ext}`;

    // Upload to Vercel Blob with PRIVATE access (as required by your store)
    const blob = await put(filename, file, {
      access: 'private',
      addRandomSuffix: false, // We already use UUID
    });

    // Return the proxy URL instead of direct blob URL so it can be viewed publicly
    const proxyUrl = `/api/blob?url=${encodeURIComponent(blob.url)}`;

    return NextResponse.json({ url: proxyUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Failed to upload file to storage" }, { status: 500 });
  }
}
