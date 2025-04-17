import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, updateDoc, doc, Timestamp, serverTimestamp, getDocs, FirestoreError } from 'firebase/firestore';
import * as z from 'zod';

// Validation schema for the application form
const formSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name must be at least 3 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), { message: 'Please enter a valid date of birth.' }),
  gender: z.enum(['male', 'female', 'other'], { message: 'Please select a gender.' }),
  address: z.string().min(5, { message: 'Address must be at least 5 characters.' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters.' }),
  state: z.string().min(2, { message: 'State must be at least 2 characters.' }),
  postalCode: z.string().min(2, { message: 'Postal code must be at least 2 characters.' }),
  country: z.string().min(2, { message: 'Country must be at least 2 characters.' }),
  highSchool: z.string().min(3, { message: 'High school name must be at least 3 characters.' }),
  graduationYear: z.string().min(4, { message: 'Please enter a valid graduation year.' }),
  programApplied: z.string().min(2, { message: 'Please select a program.' }),
  entryLevel: z.enum(['freshman', 'transfer', 'postgraduate'], { message: 'Please select an entry level.' }),
  previousQualifications: z.string().optional(),
  personalStatement: z.string().min(100, { message: 'Personal statement must be at least 100 characters.' }).optional(),
  hasSubmitted: z.boolean().default(true),
});

// Helper function to check if Firestore is working
async function checkFirestoreConnection() {
  try {
    // Try to fetch one document from the 'test' collection
    const testSnapshot = await getDocs(collection(db, 'test'));
    return { success: true, message: `Successfully connected to Firestore. Found ${testSnapshot.size} test documents.` };
  } catch (error: any) {
    return { success: false, error: `Failed to connect to Firestore: ${error.message}` };
  }
}

export async function POST(req: NextRequest) {
  console.log("Received application submission request");
  try {
    const body = await req.json();
    console.log("Submission body:", JSON.stringify(body).substring(0, 200) + "...");  // Log just the start to avoid sensitive data
    
    // Validate form data
    const result = formSchema.safeParse(body);
    
    if (!result.success) {
      console.error("Validation failed:", result.error.errors);
      return NextResponse.json(
        { success: false, error: result.error.errors },
        { status: 400 }
      );
    }
    
    console.log("Form data validation succeeded");
    
    // Check Firestore connection
    const connectionCheck = await checkFirestoreConnection();
    console.log("Firestore connection check:", connectionCheck);
    
    if (!connectionCheck.success) {
      console.error("Firestore connection failed:", connectionCheck.error);
      return NextResponse.json(
        { success: false, error: `Database connection error: ${connectionCheck.error}` },
        { status: 500 }
      );
    }
    
    // Get client IP and user agent for audit purposes
    const clientIp = req.headers.get('x-forwarded-for') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';
    console.log(`Client info - IP: ${clientIp.split(',')[0]} | Agent: ${userAgent.substring(0, 50)}...`);
    
    // Prepare data for Firestore
    const timestamp = new Date();
    const firestoreData = {
      ...result.data,
      status: 'submitted',  // Initial status
      statusUpdatedAt: Timestamp.fromDate(timestamp),
      createdAt: Timestamp.fromDate(timestamp),
      updatedAt: Timestamp.fromDate(timestamp),
      metadata: {
        clientIp,
        userAgent,
        submissionDate: timestamp.toISOString(),
      }
    };
    
    console.log("Attempting to save data to Firestore collection 'applications'");
    
    // Save validated data to Firestore
    try {
      const docRef = await addDoc(collection(db, 'applications'), firestoreData);
      console.log("Document written with ID:", docRef.id);
      
      // Generate unique application ID
      const applicationId = `APP-${docRef.id.substring(0, 8).toUpperCase()}`;
      console.log("Generated application ID:", applicationId);
      
      // Update the document with the applicationId
      try {
        await updateDoc(doc(db, 'applications', docRef.id), {
          applicationId,
          updatedAt: Timestamp.fromDate(new Date())
        });
        console.log("Document successfully updated with application ID");
      } catch (updateError: any) {
        console.error("Error updating document with application ID:", updateError);
        // We still return success since the document was created
      }
      
      console.log(`Application submitted successfully. ID: ${applicationId}`);
      
      return NextResponse.json(
        { 
          success: true, 
          applicationId, 
          id: docRef.id,
          message: "Your application has been successfully submitted and stored in our database."
        },
        { status: 201 }
      );
    } catch (firestoreError: any) {
      console.error("Detailed Firestore error:", firestoreError);
      console.error("Error name:", firestoreError.name);
      console.error("Error code:", firestoreError.code);
      console.error("Error message:", firestoreError.message);
      
      // Throw to the catch block
      throw firestoreError;
    }
  } catch (error: any) {
    console.error('Error saving application to Firestore:', error);
    console.error('Error details:', error.message);
    console.error('Stack trace:', error.stack);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred while storing your application in our database',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
} 