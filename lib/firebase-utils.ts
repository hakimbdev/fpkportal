import { db } from './firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  Timestamp,
  serverTimestamp,
  DocumentData,
  QuerySnapshot,
  DocumentSnapshot,
  updateDoc
} from 'firebase/firestore';

const APPLICATIONS_COLLECTION = 'applications';

/**
 * Fetch an application by its ID
 * @param docId Firestore document ID
 */
export const getApplicationById = async (docId: string) => {
  try {
    const docRef = doc(db, APPLICATIONS_COLLECTION, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { 
        success: true, 
        data: { id: docSnap.id, ...docSnap.data() } 
      };
    } else {
      return { success: false, error: 'Application not found' };
    }
  } catch (error) {
    console.error('Error fetching application:', error);
    return { success: false, error: 'Failed to fetch application' };
  }
};

/**
 * Search for applications by formatted application ID
 * @param applicationId Formatted application ID (APP-XXXXXXXX)
 */
export const findApplicationByFormattedId = async (applicationId: string) => {
  try {
    const q = query(
      collection(db, APPLICATIONS_COLLECTION),
      where('applicationId', '==', applicationId)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      // Should only have one result
      const docSnap = querySnapshot.docs[0];
      return { 
        success: true, 
        data: { id: docSnap.id, ...docSnap.data() } 
      };
    } else {
      return { success: false, error: 'Application not found' };
    }
  } catch (error) {
    console.error('Error searching for application:', error);
    return { success: false, error: 'Failed to search for application' };
  }
};

/**
 * Update application status
 * @param docId Firestore document ID
 * @param status New status value
 */
export const updateApplicationStatus = async (docId: string, status: string) => {
  try {
    const docRef = doc(db, APPLICATIONS_COLLECTION, docId);
    await updateDoc(docRef, {
      status,
      statusUpdatedAt: Timestamp.fromDate(new Date()),
      updatedAt: Timestamp.fromDate(new Date())
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error updating application status:', error);
    return { success: false, error: 'Failed to update application status' };
  }
};

/**
 * Format Firestore timestamp for display
 * @param timestamp Firestore timestamp
 */
export const formatTimestamp = (timestamp: { seconds: number; nanoseconds: number }) => {
  if (!timestamp) return 'N/A';
  return new Date(timestamp.seconds * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Get application status label from status value
 * @param status Status string from Firestore
 */
export const getStatusInfo = (status: string) => {
  switch (status) {
    case 'submitted':
      return {
        label: 'Submitted',
        color: 'bg-green-100 text-green-800',
        description: 'Your application has been received'
      };
    case 'review':
      return {
        label: 'Under Review',
        color: 'bg-blue-100 text-blue-800',
        description: 'Your application is being reviewed'
      };
    case 'documents_requested':
      return {
        label: 'Documents Requested',
        color: 'bg-yellow-100 text-yellow-800',
        description: 'Additional documents have been requested'
      };
    case 'approved':
      return {
        label: 'Approved',
        color: 'bg-green-100 text-green-800',
        description: 'Your application has been approved'
      };
    case 'rejected':
      return {
        label: 'Rejected',
        color: 'bg-red-100 text-red-800',
        description: 'Your application has been rejected'
      };
    default:
      return {
        label: 'Unknown',
        color: 'bg-gray-100 text-gray-800',
        description: 'Status unknown'
      };
  }
}; 