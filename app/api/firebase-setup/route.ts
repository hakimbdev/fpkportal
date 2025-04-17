import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export async function GET(req: NextRequest) {
  try {
    console.log("Setting up Firebase collections...");
    
    // Create sample data for test collection
    const testDoc = await addDoc(collection(db, 'test'), {
      message: 'This is a test document',
      createdAt: Timestamp.now()
    });
    console.log("Test document created with ID:", testDoc.id);
    
    // Create a sample application document
    const sampleApplication = {
      applicationId: 'APP-SAMPLE001',
      fullName: 'Sample Student',
      email: 'sample@example.com',
      phone: '+1234567890',
      dob: '1990-01-01',
      gender: 'male',
      address: '123 Sample Street',
      city: 'Sample City',
      state: 'Sample State',
      postalCode: '12345',
      country: 'Sample Country',
      highSchool: 'Sample High School',
      graduationYear: '2020',
      programApplied: 'Computer Science',
      entryLevel: 'freshman',
      personalStatement: 'This is a sample personal statement for testing purposes.',
      status: 'submitted',
      statusUpdatedAt: Timestamp.now(),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
      hasSubmitted: true,
      metadata: {
        clientIp: 'test-setup',
        userAgent: 'test-setup',
        submissionDate: new Date().toISOString(),
      }
    };
    
    try {
      const applicationDoc = await addDoc(collection(db, 'applications'), sampleApplication);
      console.log("Sample application created with ID:", applicationDoc.id);
    } catch (appError: any) {
      console.error("Error creating sample application:", appError);
      return NextResponse.json({
        success: false,
        message: "Firebase collections partially set up. Failed to create sample application.",
        error: appError.message
      }, { status: 500 });
    }
    
    return NextResponse.json({
      success: true,
      message: "Firebase collections successfully set up with sample data",
      testDocId: testDoc.id
    });
    
  } catch (error: any) {
    console.error("Error setting up Firebase collections:", error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
} 