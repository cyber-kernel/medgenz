import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const adminCount = await prisma.admin.count();

    if (adminCount > 0) {
      return NextResponse.json({ message: "Admin already exists" }, { status: 400 });
    }

    const email = process.env.ADMIN_EMAIL || "admin@medgenz.com";
    const plainPassword = process.env.ADMIN_PASSWORD || "admin123";

    const hashedPassword = await bcrypt.hash(plainPassword, 12);

    await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "Admin created successfully", email });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Setup failed" }, { status: 500 });
  }
}
