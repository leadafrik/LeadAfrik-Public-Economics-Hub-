import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { checkRateLimit } from '@/lib/rateLimit';

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 3 requests per IP per day
    const rateLimitError = checkRateLimit(request, { limit: 3, window: 86400 });
    if (rateLimitError) {
      return rateLimitError;
    }

    const { name, email, organization, scope, budget } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Send email to admin
    const emailHost = process.env.EMAIL_HOST;
    const emailPort = parseInt(process.env.EMAIL_PORT || '587');
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailFrom = process.env.EMAIL_FROM || emailUser;

    if (emailHost && emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        host: emailHost,
        port: emailPort,
        secure: emailPort === 465,
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      try {
        // Send to admin
        await transporter.sendMail({
          from: emailFrom,
          to: emailUser,
          subject: `New Data Request from ${name}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333;">
              <h2 style="color: #0B2A4A;">New Data Request Submitted</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Organization:</strong> ${organization || 'Not specified'}</p>
              <p><strong>Data Scope:</strong> ${scope || 'Not specified'}</p>
              <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
              <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
            </div>
          `,
          text: `New Data Request\n\nName: ${name}\nEmail: ${email}\nOrganization: ${organization || 'Not specified'}\nScope: ${scope || 'Not specified'}\nBudget: ${budget || 'Not specified'}\nSubmitted: ${new Date().toISOString()}`,
        });

        // Send confirmation to user
        await transporter.sendMail({
          from: emailFrom,
          to: email,
          subject: 'Data Request Received - LeadAfrik',
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0B2A4A;">Your Data Request Has Been Received</h2>
              <p>Hi ${name},</p>
              <p>Thank you for your interest in LeadAfrik's data services. We've received your request and our team will review it carefully.</p>
              <p>We'll get back to you within 24 hours with more information about how we can help.</p>
              <p style="color: #666; font-size: 14px; margin-top: 30px;">Best regards,<br/>LeadAfrik Team</p>
            </div>
          `,
          text: `Hi ${name},\n\nThank you for your interest in LeadAfrik's data services. We've received your request and our team will review it carefully.\n\nWe'll get back to you within 24 hours with more information about how we can help.\n\nBest regards,\nLeadAfrik Team`,
        });
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Continue - request is still logged
      }
    }

    console.log('Data request received:', { name, email, organization, scope, budget, timestamp: new Date() });

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
