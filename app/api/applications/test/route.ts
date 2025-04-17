import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';

export async function GET(req: NextRequest) {
  try {
    console.log("Testing Firestore connection...");
    
    // First, check if we can read from Firestore
    try {
      console.log("Attempting to read from 'test' collection...");
      const querySnapshot = await getDocs(collection(db, 'test'));
      console.log(`Found ${querySnapshot.size} documents in test collection`);
      
      // Log each document
      const docs = [];
      querySnapshot.forEach((doc) => {
        console.log(`Doc ID: ${doc.id}, Data:`, doc.data());
        docs.push({ id: doc.id, ...doc.data() });
      });
      
      if (querySnapshot.size === 0) {
        console.log("No documents found in test collection. Will try to add one.");
      }
    } catch (readError: any) {
      console.error("Error reading from Firestore:", readError);
    }
    
    // Now try to write to Firestore
    console.log("Attempting to add a document to 'test' collection...");
    const testData = {
      message: "Test document",
      createdAt: Timestamp.fromDate(new Date()),
    };
    
    const docRef = await addDoc(collection(db, 'test'), testData);
    console.log("Test document written with ID:", docRef.id);
    
    return NextResponse.json({ 
      success: true, 
      message: "Firestore connection test successful", 
      documentId: docRef.id 
    });
    
  } catch (error: any) {
    console.error("Firestore test failed:", error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
} 