import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function GET(req: NextRequest) {
  try {
    console.log("Checking applications collection in Firestore...");
    
    // Get all applications
    const querySnapshot = await getDocs(collection(db, 'applications'));
    console.log(`Found ${querySnapshot.size} documents in applications collection`);
    
    // Extract and sanitize application data (remove sensitive info)
    const applications = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      applications.push({
        id: doc.id,
        applicationId: data.applicationId || 'N/A',
        fullName: data.fullName || 'N/A',
        email: data.email ? '***@***' : 'N/A', // Redacted for privacy
        status: data.status || 'N/A',
        programApplied: data.programApplied || 'N/A',
        createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : 'N/A',
      });
    });
    
    return NextResponse.json({ 
      success: true, 
      count: applications.length,
      applications
    });
    
  } catch (error: any) {
    console.error("Error checking applications collection:", error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
} 