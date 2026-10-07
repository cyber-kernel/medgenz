import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

const allowedSubjects = [
  "General Inquiry",
  "Modular OT Project",
  "MGPS Installation",
  "Hospital Furniture",
  "IVF Lab Setup",
];

const allowedDesignations = [
  "Doctor / Surgeon",
  "Principal Architect",
  "Project Contractor",
  "Medical College Admin",
  "Organisational Staff",
  "Personal",
];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function applyTemplate(template: string, values: Record<string, string>) {
  return template.replace(/\{\{(\w+)\}\}/g, (placeholder, key: string) =>
    Object.prototype.hasOwnProperty.call(values, key) ? values[key] : placeholder
  );
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
    }

    const fields = body as Record<string, unknown>;
    const values = {
      name: typeof fields.name === "string" ? fields.name.trim() : "",
      email: typeof fields.email === "string" ? fields.email.trim() : "",
      phone: typeof fields.phone === "string" ? fields.phone.trim() : "",
      subject: typeof fields.subject === "string" ? fields.subject.trim() : "",
      designation: typeof fields.designation === "string" ? fields.designation.trim() : "",
      message: typeof fields.message === "string" ? fields.message.trim() : "",
    };

    if (
      !values.name ||
      values.name.length > 120 ||
      !isValidEmail(values.email) ||
      values.email.length > 254 ||
      values.phone.length > 40 ||
      !allowedSubjects.includes(values.subject) ||
      !allowedDesignations.includes(values.designation) ||
      !values.message ||
      values.message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please check the required fields and try again." },
        { status: 400 }
      );
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
    const port = Number(SMTP_PORT);
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !Number.isInteger(port) || port <= 0) {
      console.error("Contact form email configuration is incomplete.");
      return NextResponse.json(
        { error: "The contact form is temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    const receiver = process.env.CONTACT_RECEIVER || "info@medgenz.com";
    if (!isValidEmail(receiver)) {
      console.error("CONTACT_RECEIVER is not a valid email address.");
      return NextResponse.json(
        { error: "The contact form is temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    const submission = await prisma.contactSubmission.create({
      data: {
        ...values,
        phone: values.phone || null,
        designation: values.designation || null,
      },
    });

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const safeValues = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [key, escapeHtml(value)])
    );

    await transporter.sendMail({
      from: `"MedGenz Website" <${SMTP_USER}>`,
      to: receiver,
      replyTo: values.email,
      subject: `MedGenz Inquiry: ${values.subject}`,
      text: [
        "New message from the MedGenz website contact form",
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone || "Not provided"}`,
        `Subject: ${values.subject}`,
        `Designation: ${values.designation || "Not provided"}`,
        "",
        "Message:",
        values.message,
        "",
        `Submission ID: ${submission.id}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #E6A100; border-bottom: 2px solid #E6A100; padding-bottom: 10px;">New Website Inquiry</h2>
          <p><strong>Name:</strong> ${safeValues.name}</p>
          <p><strong>Email:</strong> ${safeValues.email}</p>
          <p><strong>Phone:</strong> ${safeValues.phone || "Not provided"}</p>
          <p><strong>Subject:</strong> ${safeValues.subject}</p>
          <p><strong>Designation:</strong> ${safeValues.designation || "Not provided"}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${safeValues.message}</p>
          </div>
          <p style="font-size: 12px; color: #888;">Submission ID: ${submission.id}</p>
        </div>
      `,
    });

    const autoReplySubjectTemplate =
      process.env.CONTACT_AUTOREPLY_SUBJECT?.trim() ||
      "We received your {{subject}} inquiry | MedGenz";
    const autoReplyTextTemplate =
      process.env.CONTACT_AUTOREPLY_TEXT?.trim() ||
      [
        "Hello {{name}},",
        "",
        "Thank you for reaching out to MedGenz. We have received your inquiry and our team will review your requirements and get back to you as soon as possible.",
        "",
        "Your inquiry: {{subject}}",
        "",
        "If you need to add anything, reply to this email and our team will be happy to help.",
        "",
        "Warm regards,",
        "MedGenz Team",
        "info@medgenz.com",
      ].join("\n");
    const autoReplyText = applyTemplate(autoReplyTextTemplate, values);
    const autoReplySubject = applyTemplate(autoReplySubjectTemplate, values)
      .replace(/[\r\n]+/g, " ")
      .trim();
    const autoReplyHtml = process.env.CONTACT_AUTOREPLY_TEXT?.trim()
      ? `<div style="white-space: pre-wrap;">${escapeHtml(autoReplyText)}</div>`
      : `
        <div style="margin:0;padding:40px 16px;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:#172033;">
          <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e2e8f0;">
            <div style="padding:28px 36px;background:#0f172a;border-bottom:4px solid #e6a100;">
              <p style="margin:0;color:#fbbf24;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">MedGenz</p>
              <h1 style="margin:16px 0 0;color:#ffffff;font-size:26px;line-height:1.3;">Thank you for getting in touch</h1>
            </div>
            <div style="padding:34px 36px;">
              <p style="margin:0 0 18px;font-size:16px;line-height:1.7;">Hello ${safeValues.name},</p>
              <p style="margin:0 0 24px;color:#475569;font-size:15px;line-height:1.8;">
                We have received your inquiry. Our team will review your requirements and get back to you as soon as possible.
              </p>
              <div style="padding:18px 20px;background:#fffbeb;border:1px solid #fde68a;border-radius:12px;">
                <p style="margin:0 0 6px;color:#92400e;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Your inquiry</p>
                <p style="margin:0;color:#1e293b;font-size:15px;font-weight:700;">${safeValues.subject}</p>
              </div>
              <p style="margin:24px 0 0;color:#475569;font-size:14px;line-height:1.8;">
                If you would like to add anything, simply reply to this email and our team will be happy to help.
              </p>
              <p style="margin:28px 0 0;color:#334155;font-size:14px;line-height:1.8;">
                Warm regards,<br /><strong>MedGenz Team</strong><br />
                <a href="mailto:info@medgenz.com" style="color:#b77900;text-decoration:none;">info@medgenz.com</a>
              </p>
            </div>
            <div style="padding:16px 36px;background:#f8fafc;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:11px;line-height:1.6;">
              This is an automatic confirmation that your message reached MedGenz.
            </div>
          </div>
        </div>
      `;
    let autoReplyStatus: "sent" | "failed" = "failed";

    try {
      await transporter.sendMail({
        from: `"MedGenz" <${SMTP_USER}>`,
        to: values.email,
        subject: autoReplySubject,
        text: autoReplyText,
        html: autoReplyHtml,
      });
      autoReplyStatus = "sent";
    } catch (error) {
      console.error("Contact form auto-reply failed.", error);
    }

    return NextResponse.json({
      message: "Your inquiry was received.",
      autoReplyStatus,
    });
  } catch (error) {
    console.error("Contact form submission failed.", error);
    return NextResponse.json(
      { error: "We could not submit your inquiry. Please try again later." },
      { status: 500 }
    );
  }
}
