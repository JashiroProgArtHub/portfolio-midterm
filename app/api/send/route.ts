import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use a verified domain later
      to: ['loberanesjashen22@gmail.com'],
      subject: `New Message from ${name}`,
      reply_to: email,
      text: message,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}