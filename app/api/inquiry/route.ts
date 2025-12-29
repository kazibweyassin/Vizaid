import { NextRequest, NextResponse } from 'next/server';
import { sendInquiryEmail } from '@/lib/email';
import { AirTicketingInquiry, VisaInquiry, TourInquiry, ContactForm } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    // Validate request
    if (!type || !data) {
      return NextResponse.json(
        { error: 'Missing type or data' },
        { status: 400 }
      );
    }

    // Validate type
    const validTypes = ['air-ticketing', 'visa', 'tour', 'contact'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid inquiry type' },
        { status: 400 }
      );
    }

    // Send email (in production, this would use a real email service)
    await sendInquiryEmail(
      type as 'air-ticketing' | 'visa' | 'tour' | 'contact',
      data as AirTicketingInquiry | VisaInquiry | TourInquiry | ContactForm
    );

    // In production, you might also want to save to a database here

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}



