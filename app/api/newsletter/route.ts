import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { sanityFetch } from '@/lib/sanity.client';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await sanityFetch({
      query: `*[_type == "subscriber" && email == $email][0]`,
      params: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { error: 'This email is already subscribed' },
        { status: 400 }
      );
    }

    // Save to Sanity
    const sanityClient = await import('@sanity/client').then(m => 
      m.createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        token: process.env.SANITY_API_TOKEN!,
        useCdn: false,
        apiVersion: '2024-01-01',
      })
    );

    const subscriber = await sanityClient.create({
      _type: 'subscriber',
      email,
      name: name || null,
      subscriptionDate: new Date().toISOString(),
      active: true,
    });

    // Get email credentials from environment
    const emailHost = process.env.EMAIL_HOST;
    const emailPort = parseInt(process.env.EMAIL_PORT || '587');
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailFrom = process.env.EMAIL_FROM || emailUser;

    if (emailHost && emailUser && emailPass) {
      // Create transporter
      const transporter = nodemailer.createTransport({
        host: emailHost,
        port: emailPort,
        secure: emailPort === 465,
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      // Send confirmation email
      try {
        await transporter.sendMail({
          from: emailFrom,
          to: email,
          subject: 'Welcome to LeadAfrik Newsletter',
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0B2A4A;">Welcome to LeadAfrik!</h2>
              <p>Hi ${name || 'there'},</p>
              <p>Thank you for subscribing to our newsletter. You'll receive:</p>
              <ul>
                <li>Monthly data drops on Kenya's economy</li>
                <li>Policy analysis & explainers</li>
                <li>Economic trends & insights</li>
              </ul>
              
              <p><strong>While you wait for our first newsletter, check out our YouTube channel</strong> for more content:</p>
              <p><a href="https://www.youtube.com/@leadafrik" style="display: inline-block; padding: 12px 24px; background-color: #0B2A4A; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">Watch on YouTube</a></p>
              
              <p style="color: #666; font-size: 14px; margin-top: 30px;">Best regards,<br/>LeadAfrik Team</p>
            </div>
          `,
          text: `Welcome to LeadAfrik!\n\nHi ${name || 'there'},\n\nThank you for subscribing to our newsletter. You'll receive:\n- Monthly data drops on Kenya's economy\n- Policy analysis & explainers\n- Economic trends & insights\n\nWhile you wait for our first newsletter, check out our YouTube channel:\nhttps://www.youtube.com/@leadafrik\n\nBest regards,\nLeadAfrik Team`,
        });

        // Send notification to admin
        await transporter.sendMail({
          from: emailFrom,
          to: emailUser,
          subject: 'New Newsletter Signup',
          html: `
            <p>New newsletter signup:</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Name:</strong> ${name || 'Not provided'}</p>
            <p><strong>Date:</strong> ${new Date().toISOString()}</p>
          `,
          text: `New newsletter signup:\n\nEmail: ${email}\nName: ${name || 'Not provided'}\nDate: ${new Date().toISOString()}`,
        });
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // Continue even if email fails - subscriber is still saved in Sanity
      }
    }

    console.log('Newsletter signup saved:', { email, name, timestamp: new Date() });

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
