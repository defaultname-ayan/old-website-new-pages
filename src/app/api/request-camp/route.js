import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, locality, city, pincode, address, message } = await request.json();

    // Validate ALL fields are required
    if (!name || !email || !phone || !locality || !city || !pincode || !address || !message) {
      return NextResponse.json(
        { error: 'All fields are required: name, email, phone, locality, city, pincode, address, message' },
        { status: 400 }
      );
    }

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
        rejectUnauthorized: false
      }
    });

    // Generate subject from location data
    const subject = `Memory Camp Request - ${locality}, ${city} - ${pincode}`;

    const organizationEmail = {
      from: process.env.SMTP_FROM || email,
      to: 'info@satorufoundation.org',
      replyTo: email,
      subject: '🏕️ New Camp Request from Website',
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
          <div style="max-width:600px;margin:auto;background:#fff;overflow:hidden;">
            <div style="background:#5e6f47;padding:20px;text-align:center;">
              <h2 style="color:#ecc750;margin:0;">🏕️ New Camp Request</h2>
            </div>

            <div style="padding:20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Locality:</strong> ${locality}</p>
              <p><strong>City:</strong> ${city}</p>
              <p><strong>Pincode:</strong> ${pincode}</p>
              <p><strong>Address:</strong></p>
              <p>${address.replace(/\n/g, '<br>')}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>

            <div style="background:#f5f5f5;padding:15px;text-align:center;font-size:12px;color:#666;">
              Satoru Foundation | Automated Email Notification
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const autoReplyEmail = {
      from: process.env.SMTP_FROM || 'info@satorufoundation.org',
      to: email,
      subject: 'Thank You for Your Camp Request - Satoru Foundation',
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;">
          <div style="max-width:600px;margin:auto;background:#fff;overflow:hidden;">
            <div style="background:#5e6f47;padding:30px;text-align:center;">
              <h1 style="color:#ecc750;margin:0;">Satoru Foundation</h1>
              <p style="color:#fff;">Thank You for Reaching Out</p>
            </div>

            <div style="padding:30px;">
              <p>Dear ${name},</p>
              <p>Thank you for your interest in organizing a camp with Satoru Foundation.</p>
              <p>Our team has received your request for <strong>${locality}, ${city} - ${pincode}</strong> and will review it shortly.</p>
              <p>If you have any urgent queries, feel free to contact us at <strong>info@satorufoundation.org</strong></p>
              <p>Best regards,<br><strong>Satoru Foundation Team</strong></p>
            </div>

            <div style="background:#5e6f47;padding:20px;text-align:center;color:#fff;">
              info@satorufoundation.org
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await Promise.all([
      transporter.sendMail(organizationEmail),
      transporter.sendMail(autoReplyEmail)
    ]);

    return NextResponse.json({
      success: true,
      message: 'Emails sent successfully to both organization and user',
      sentTo: {
        organization: 'info@satorufoundation.org',
        user: email
      }
    });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}
