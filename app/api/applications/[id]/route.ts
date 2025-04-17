import { NextRequest, NextResponse } from 'next/server';
import { getApplicationById } from '@/lib/firebase-utils';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Application ID is required' },
        { status: 400 }
      );
    }
    
    const result = await getApplicationById(id);
    
    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Application not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error retrieving application:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while retrieving the application' },
      { status: 500 }
    );
  }
} 