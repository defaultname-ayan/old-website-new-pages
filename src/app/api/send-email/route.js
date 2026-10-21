import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, phone, subject, message, to } = await request.json();

    // Validate required fields
    if (!name || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      requireTLS: process.env.SMTP_TLS === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email to the organization
    const organizationEmail = {
      from: process.env.SMTP_FROM || 'info@satorufoundation.org',
      to: to || 'info@satorufoundation.org',
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5e6f47;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact Number:</strong> ${phone}</p>
            <p><strong>Reason for Contact:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Satoru Foundation contact form.
          </p>
        </div>
      `,
    };

    const emailResult = await transporter.sendMail(organizationEmail);
    console.log('Organization email sent:', emailResult.messageId);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      sentTo: {
        organization: to || 'info@satorufoundation.org',
      },
    });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}