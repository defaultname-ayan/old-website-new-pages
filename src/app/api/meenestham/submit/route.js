import { NextResponse } from 'next/server';
import { prisma } from 'lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();

    const { name, email, phone, address, parentName, parentAge, message } = data;

    const requiredFields = ['name', 'email', 'phone', 'address', 'parentName', 'parentAge'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Save to DB
    const submission = await prisma.meeNesthamSubmission.create({
      data: {
        name,
        email,
        phone,
        address,
        parentName,
        parentAge: parseInt(parentAge),
        message: message || '',
      },
    });

    // Send Emails
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


    const organizationEmail = {
      from: process.env.SMTP_FROM || email,
      to: 'info@satorufoundation.org',
      subject: `Aatmeeya Sparsha Visit Request: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5e6f47;">New Aatmeeya Sparsha Visit Request</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Parent's Name:</strong> ${parentName}</p>
            <p><strong>Parent's Age:</strong> ${parentAge}</p>
            <p><strong>Address:</strong></p>
            <div style="background-color: white; padding: 10px; border-radius: 4px; margin-top: 5px;">
              ${address.replace(/\n/g, '<br>')}
            </div>
            ${message ? `
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>` : ''}
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent via the Aatmeeya Sparsha request form on the Satoru Foundation website.
          </p>
        </div>
      `,
    };
    
    
    // Auto-reply email to user
    const autoReplyEmail = {
      from: process.env.SMTP_FROM || 'info@satorufoundation.org',
      to: email,
      subject: 'Thank you for your Aatmeeya Sparsha request - Satoru Foundation',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5e6f47;">Thank You for Reaching Out!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for requesting a free Aatmeeya Sparsha visit. We have received your details and will contact you within 24–48 hours.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #5e6f47; margin-top: 0;">Your Submission Summary:</h3>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Parent's Name:</strong> ${parentName}</p>
            <p><strong>Parent's Age:</strong> ${parentAge}</p>
            <p><strong>Address:</strong><br>${address.replace(/\n/g, '<br>')}</p>
            ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
          </div>
          
          <p>If you have any urgent inquiries, feel free to reach us at <strong>info@satorufoundation.org</strong>.</p>
          
          <p>Best regards,<br>
          <strong>Satoru Foundation Team</strong></p>
          
          <div style="border-top: 2px solid #ecc750; padding-top: 20px; margin-top: 30px; color: #666; font-size: 12px;">
            <p><strong>Satoru Foundation</strong><br>
            Email: info@satorufoundation.org </p>
          </div>
        </div>
      `,
    };
    
    await Promise.all([
      transporter.sendMail(organizationEmail),
      transporter.sendMail(autoReplyEmail)
    ]);

    return NextResponse.json({
      success: true,
      message: 'Submission saved and emails sent successfully.',
      submissionId: submission.id,
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Something went wrong', details: error.message }, { status: 500 });
  }
}


