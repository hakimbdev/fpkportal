import { NextRequest, NextResponse } from 'next/server';
import { findApplicationByFormattedId } from '@/lib/firebase-utils';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const applicationId = searchParams.get('applicationId');
    
    if (!applicationId) {
      return NextResponse.json(
        { success: false, error: 'Application ID is required' },
        { status: 400 }
      );
    }
    
    const result = await findApplicationByFormattedId(applicationId);
    
    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Application not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error searching for application:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while searching for the application' },
      { status: 500 }
    );
  }
} 