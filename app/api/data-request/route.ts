import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, organization, scope, budget } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // TODO: Integrate with Typeform webhooks or send email
    console.log('Data request:', { name, email, organization, scope, budget, timestamp: new Date() });

    // Example email integration (requires nodemailer or similar):
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.DATA_REQUEST_EMAIL || 'stephen@leadafrik.com',
      subject: `Data Request from ${name}`,
      html: `
        <h2>New Data Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization || 'Not specified'}</p>
        <p><strong>Scope:</strong> ${scope || 'Not specified'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
      `,
    });
    */

    return NextResponse.json(
      { 
        success: true, 
        message: 'Data request submitted successfully. We will contact you within 24 hours.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Data request error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to submit data request' },
      { status: 500 }
    );
  }
}
