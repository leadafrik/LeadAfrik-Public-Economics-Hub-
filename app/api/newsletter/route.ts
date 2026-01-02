import { NextRequest, NextResponse } from 'next/server';

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

    // TODO: Integrate with Mailchimp or Substack
    // For now, log to console and return success
    console.log('Newsletter signup:', { email, name, timestamp: new Date() });

    // Example Mailchimp integration (requires MAILCHIMP_API_KEY env var):
    /*
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
    const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
    const mailchimpListId = process.env.MAILCHIMP_LIST_ID;

    if (!mailchimpApiKey || !mailchimpServerPrefix || !mailchimpListId) {
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${mailchimpApiKey}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'pending',
          merge_fields: name ? { FNAME: name.split(' ')[0], LNAME: name.split(' ')[1] || '' } : {},
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to subscribe');
    }
    */

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
