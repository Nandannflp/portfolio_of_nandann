import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      // If the URL isn't set up yet, simulate a success so the UI doesn't break
      console.warn('GOOGLE_SHEETS_WEBHOOK_URL is not set. Simulating success.');
      return NextResponse.json({ status: 'success', simulated: true });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google Apps Script error ${response.status}: ${errorText.substring(0, 100)}`);
    }

    return NextResponse.json({ status: 'success' });
  } catch (error: any) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to submit email', details: error.message },
      { status: 500 }
    );
  }
}
