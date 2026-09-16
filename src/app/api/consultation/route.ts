import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Configure Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Admin
    const mailOptions = {
      from: `"Consultation: ${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New Blog Consultation Request: ${name}`,
      text: `
        New Expert Guidance Request:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company || "Not provided"}

        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 25px; border-radius: 15px;">
          <h2 style="color: #E6A100; border-bottom: 2px solid #E6A100; padding-bottom: 15px; margin-bottom: 20px;">New Consultation Request</h2>

          <div style="margin-bottom: 20px;">
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 5px 0;"><strong>Company:</strong> ${company || "Not provided"}</p>
          </div>

          <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; border-left: 4px solid #E6A100;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <footer style="margin-top: 30px; font-size: 11px; color: #999; text-align: center;">
            This request was submitted via the Expert Guidance form on the MedGenz Blog.
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Request submitted successfully!" });
  } catch (error: any) {
    console.error("Consultation API Error:", error);
    return NextResponse.json(
      { error: "System encountered an error. Please try again later." },
      { status: 500 }
    );
  }
}
