import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  getDoc, 
  query, 
  where, 
  getDocs,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  highSchool: string;
  graduationYear: string;
  programApplied: string;
  entryLevel: string;
  previousQualifications?: string;
  personalStatement?: string;
  hasSubmitted: boolean;
  applicationId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Save application form to Firestore
export const saveApplicationForm = async (formData: Omit<ApplicationFormData, 'applicationId' | 'createdAt' | 'updatedAt'>) => {
  try {
    const timestamp = new Date();
    const docRef = await addDoc(collection(db, 'applications'), {
      ...formData,
      createdAt: Timestamp.fromDate(timestamp),
      updatedAt: Timestamp.fromDate(timestamp),
    });
    
    // Update the document with the applicationId
    const applicationId = `APP-${docRef.id.substring(0, 8).toUpperCase()}`;
    await updateDoc(doc(db, 'applications', docRef.id), {
      applicationId
    });
    
    return { success: true, applicationId, id: docRef.id };
  } catch (error) {
    console.error('Error saving application form:', error);
    return { success: false, error };
  }
};

// Get application by ID
export const getApplicationById = async (id: string) => {
  try {
    const docRef = doc(db, 'applications', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { success: true, data: docSnap.data() };
    } else {
      return { success: false, error: 'Application not found' };
    }
  } catch (error) {
    console.error('Error getting application:', error);
    return { success: false, error };
  }
};

// Get application by email
export const getApplicationByEmail = async (email: string) => {
  try {
    const q = query(collection(db, 'applications'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    const applications: any[] = [];
    querySnapshot.forEach((doc) => {
      applications.push({ id: doc.id, ...doc.data() });
    });
    
    return { success: true, data: applications };
  } catch (error) {
    console.error('Error getting application by email:', error);
    return { success: false, error };
  }
}; 