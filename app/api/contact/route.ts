import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * This demo acknowledges the submission and logs it server-side. To make it
 * live, integrate your provider of choice where indicated below — e.g. Resend
 * or Nodemailer (email), HubSpot / Zoho (CRM), or a Google Sheet.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in your name, email and message." },
        { status: 400 },
      );
    }

    // Basic email sanity check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // TODO: forward this enquiry to your email/CRM provider.
    // Example (Resend): await resend.emails.send({ ... })
    console.log("New TrusTax enquiry:", {
      name,
      email,
      service: body?.service ?? "unspecified",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
