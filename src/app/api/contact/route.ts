import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Simple Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // Configure Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Admin
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Recommended: Always use your SMTP user as 'from' to avoid being flagged as spam
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `MedGenz Inquiry: ${subject}`,
      text: `
        New Message from MedGenz Website:

        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Subject: ${subject}

        Message:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #E6A100; border-bottom: 2px solid #E6A100; padding-bottom: 10px;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          <footer style="margin-top: 30px; font-size: 12px; color: #888;">
            This email was sent from the MedGenz official website contact form.
          </footer>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
