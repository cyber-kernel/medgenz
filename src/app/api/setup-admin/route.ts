import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const email = process.env.ADMIN_EMAIL;
    const plainPassword = process.env.ADMIN_PASSWORD;

    // Never fall back to default credentials in production
    if (!email || !plainPassword) {
      return NextResponse.json(
        {
          error:
            "ADMIN_EMAIL and ADMIN_PASSWORD environment variables are required",
        },
        { status: 500 }
      );
    }

    const hashedPassword = await bcrypt.hash(plainPassword, 12);

    const existingAdmin = await prisma.admin.findFirst();

    // Create admin if none exists
    if (!existingAdmin) {
      const admin = await prisma.admin.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      return NextResponse.json({
        message: "Admin created successfully",
        email: admin.email,
      });
    }

    // Update existing admin
    const admin = await prisma.admin.update({
      where: {
        id: existingAdmin.id,
      },
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      message: "Admin credentials updated successfully",
      email: admin.email,
    });
  } catch (error) {
    console.error("Admin setup error:", error);

    return NextResponse.json(
      { error: "Admin setup failed" },
      { status: 500 }
    );
  }
}