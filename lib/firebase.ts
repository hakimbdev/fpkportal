import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0aiQvnSrW6HFc8qyV9krdK_5SaUXxCzY",
  authDomain: "iorbit-emis.firebaseapp.com",
  projectId: "iorbit-emis",
  storageBucket: "iorbit-emis.firebasestorage.app",
  messagingSenderId: "1047727554040",
  appId: "1:1047727554040:web:fe7293f5d6bbfd8b432a0d",
  measurementId: "G-P73RK5BGNL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth }; 
