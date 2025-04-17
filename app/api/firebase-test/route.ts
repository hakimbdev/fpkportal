import { NextRequest, NextResponse } from 'next/server';
import { testFirebaseConnectivity } from '@/lib/firebase-test';

export async function GET(req: NextRequest) {
  try {
    console.log("Starting comprehensive Firebase connectivity test...");
    
    const results = await testFirebaseConnectivity();
    
    console.log("Firebase connectivity test completed.");
    console.log("Overall result:", results.overall ? "SUCCESS" : "FAILURE");
    
    return NextResponse.json({
      success: true,
      results
    });
  } catch (error: any) {
    console.error("Error during Firebase connectivity test:", error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
} 