import { NextResponse } from "next/server";
import { sendMail } from "@/lib/smtp";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  formType?: "contact" | "appointment";
  recaptchaToken?: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyRecaptcha(token: string) {
  const secret = getRequiredEnv("RECAPTCHA_SECRET_KEY");

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to verify reCAPTCHA.");
  }

  const data = (await response.json()) as {
    success?: boolean;
  };

  return Boolean(data.success);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const recaptchaToken = body.recaptchaToken?.trim() ?? "";
    const formType = body.formType === "appointment" ? "appointment" : "contact";

    if (!name || !email || !phone || !message || !recaptchaToken) {
      return NextResponse.json(
        { message: "Please complete all fields and verify reCAPTCHA." },
        { status: 400 },
      );
    }

    const isHuman = await verifyRecaptcha(recaptchaToken);

    if (!isHuman) {
      return NextResponse.json(
        { message: "reCAPTCHA validation failed. Please try again." },
        { status: 400 },
      );
    }

    const emailConfig =
      formType === "appointment"
        ? {
            to: ["megnasemail@gmail.com", "sethivirdidds@gmail.com"],
            cc: ["info@socialhi5.com"],
            subject: "New Appointment from SethiVirdiDDS",
            heading: "New Appointment Form Submission",
          }
        : {
            to: ["sethivirdidds@gmail.com"],
            cc: ["info@socialhi5.com"],
            subject: "New Appointment from sethivirdidds - Contact Us",
            heading: "New Contact Form Submission",
          };

    await sendMail(
      {
        host: getRequiredEnv("SMTP_HOST").replace(/^"|"$/g, ""),
        port: Number(getRequiredEnv("SMTP_PORT")),
        user: getRequiredEnv("SMTP_USER").replace(/^"|"$/g, "").trim(),
        pass: getRequiredEnv("SMTP_PASS").replace(/^"|"$/g, "").trim(),
        from: getRequiredEnv("SMTP_FROM").replace(/^"|"$/g, "").trim(),
      },
      {
        to: emailConfig.to,
        cc: emailConfig.cc,
        replyTo: email,
        subject: emailConfig.subject,
        text: `Name: ${name}\nEmail: ${email}\nTelephone: ${phone}\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6;">
            <h2 style="margin-bottom: 16px;">${emailConfig.heading}</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Telephone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
          </div>
        `,
      },
    );

    return NextResponse.json({ message: "Form submitted successfully." });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit the form right now.",
      },
      { status: 500 },
    );
  }
}
