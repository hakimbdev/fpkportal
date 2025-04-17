import { db, auth } from './firebase';
import { collection, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';

/**
 * Comprehensive Firebase connectivity check
 * Tests authentication, reading, and writing to Firestore
 */
export async function testFirebaseConnectivity() {
  const results = {
    auth: { success: false, message: '', error: null },
    read: { success: false, message: '', error: null, count: 0 },
    write: { success: false, message: '', error: null, docId: null },
    overall: false
  };

  try {
    console.log("Testing Firebase authentication...");
    try {
      const userCredential = await signInAnonymously(auth);
      results.auth = {
        success: true,
        message: `Successfully authenticated anonymously. UID: ${userCredential.user.uid}`,
        error: null
      };
      console.log(results.auth.message);
    } catch (authError: any) {
      results.auth = {
        success: false,
        message: '',
        error: `Authentication failed: ${authError.message}`
      };
      console.error(results.auth.error);
    }

    console.log("Testing Firestore read access...");
    try {
      const testCollection = collection(db, 'test');
      const snapshot = await getDocs(testCollection);
      results.read = {
        success: true,
        message: `Successfully read from 'test' collection. Found ${snapshot.size} documents.`,
        error: null,
        count: snapshot.size
      };
      console.log(results.read.message);
      
      snapshot.forEach(doc => {
        console.log(`Document ${doc.id}:`, doc.data());
      });
    } catch (readError: any) {
      results.read = {
        success: false,
        message: '',
        error: `Read operation failed: ${readError.message}`,
        count: 0
      };
      console.error(results.read.error);
    }

    console.log("Testing Firestore write access...");
    try {
      const testCollection = collection(db, 'test');
      const docData = {
        message: 'Test connectivity document',
        timestamp: Timestamp.now(),
        testType: 'connectivity-check'
      };
      
      const docRef = await addDoc(testCollection, docData);
      results.write = {
        success: true,
        message: `Successfully wrote to 'test' collection. Document ID: ${docRef.id}`,
        error: null,
        docId: docRef.id
      };
      console.log(results.write.message);
    } catch (writeError: any) {
      results.write = {
        success: false,
        message: '',
        error: `Write operation failed: ${writeError.message}`,
        docId: null
      };
      console.error(results.write.error);
    }

    // Determine overall success
    results.overall = results.auth.success && results.read.success && results.write.success;
    
    return results;
  } catch (error: any) {
    console.error("Unhandled error in Firebase connectivity test:", error);
    return {
      ...results,
      overall: false,
      error: `Unhandled error: ${error.message}`
    };
  }
} 