import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Appointment" <${process.env.EMAIL_USER}>`, 
      to: "adrian.dev.2025@gmail.com",
      replyTo: email,
      subject: subject || `New Message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("❌ Email sending error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
