'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, addDoc, getDocs, Timestamp, DocumentData } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';

export default function FirebaseDebugPage() {
  const [testStatus, setTestStatus] = useState<string>('Idle');
  const [authStatus, setAuthStatus] = useState<string>('Not authenticated');
  const [testData, setTestData] = useState<DocumentData[]>([]);
  const [applications, setApplications] = useState<DocumentData[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // Test authentication
  const testAuth = async () => {
    setTestStatus('Testing authentication...');
    try {
      const userCredential = await signInAnonymously(auth);
      setAuthStatus(`Authenticated as: ${userCredential.user.uid}`);
      return true;
    } catch (error: any) {
      setError(`Authentication error: ${error.message}`);
      return false;
    }
  };
  
  // Test reading from test collection
  const testRead = async () => {
    setTestStatus('Testing read access...');
    try {
      const querySnapshot = await getDocs(collection(db, 'test'));
      const docs: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setTestData(docs);
      setTestStatus(`Successfully read ${docs.length} test documents`);
      return true;
    } catch (error: any) {
      setError(`Read error: ${error.message}`);
      return false;
    }
  };
  
  // Test writing to test collection
  const testWrite = async () => {
    setTestStatus('Testing write access...');
    try {
      const docData = {
        message: 'Test document from debug UI',
        timestamp: Timestamp.now()
      };
      
      const docRef = await addDoc(collection(db, 'test'), docData);
      setTestStatus(`Successfully wrote document with ID: ${docRef.id}`);
      
      // Refresh test data
      await testRead();
      return true;
    } catch (error: any) {
      setError(`Write error: ${error.message}`);
      return false;
    }
  };
  
  // Check applications collection
  const checkApplications = async () => {
    setTestStatus('Checking applications collection...');
    try {
      const querySnapshot = await getDocs(collection(db, 'applications'));
      const docs: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        docs.push({ id: doc.id, ...doc.data() });
      });
      setApplications(docs);
      setTestStatus(`Found ${docs.length} application documents`);
      return true;
    } catch (error: any) {
      setError(`Applications check error: ${error.message}`);
      return false;
    }
  };
  
  // Run all tests
  const runAllTests = async () => {
    setError(null);
    const authSuccess = await testAuth();
    if (!authSuccess) return;
    
    const readSuccess = await testRead();
    if (!readSuccess) return;
    
    const writeSuccess = await testWrite();
    if (!writeSuccess) return;
    
    await checkApplications();
  };
  
  // Create sample application
  const createSampleApplication = async () => {
    setTestStatus('Creating sample application...');
    try {
      const sampleApplication = {
        applicationId: `APP-TEST-${Date.now().toString().slice(-8)}`,
        fullName: 'Test Student',
        email: 'test@example.com',
        phone: '+1234567890',
        dob: '1990-01-01',
        gender: 'male',
        address: '123 Test Street',
        city: 'Test City',
        state: 'Test State',
        postalCode: '12345',
        country: 'Test Country',
        highSchool: 'Test High School',
        graduationYear: '2020',
        programApplied: 'Computer Science',
        entryLevel: 'freshman',
        personalStatement: 'This is a test personal statement.',
        status: 'submitted',
        statusUpdatedAt: Timestamp.fromDate(new Date()),
        createdAt: Timestamp.fromDate(new Date()),
        updatedAt: Timestamp.fromDate(new Date()),
        hasSubmitted: true,
        metadata: {
          clientIp: 'debug-ui',
          userAgent: 'debug-ui',
          submissionDate: new Date().toISOString(),
        }
      };
      
      const docRef = await addDoc(collection(db, 'applications'), sampleApplication);
      setTestStatus(`Created sample application with ID: ${docRef.id}`);
      
      // Refresh applications list
      await checkApplications();
    } catch (error: any) {
      setError(`Sample application creation error: ${error.message}`);
    }
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Firebase Debug Console</h1>
      
      <div className="bg-gray-100 p-4 mb-6 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Test Status</h2>
        <p className={error ? 'text-red-600' : 'text-blue-600'}>{testStatus}</p>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <p className="mt-2">Auth: {authStatus}</p>
      </div>
      
      <div className="flex space-x-4 mb-6">
        <button 
          onClick={runAllTests} 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Run All Tests
        </button>
        <button 
          onClick={testRead} 
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Test Read
        </button>
        <button 
          onClick={testWrite} 
          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
        >
          Test Write
        </button>
        <button 
          onClick={checkApplications} 
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Check Applications
        </button>
        <button 
          onClick={createSampleApplication} 
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Create Sample Application
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Test Documents ({testData.length})</h2>
          {testData.length > 0 ? (
            <ul className="space-y-2">
              {testData.map((doc) => (
                <li key={doc.id} className="bg-gray-50 p-2 rounded">
                  <p><span className="font-medium">ID:</span> {doc.id}</p>
                  <p><span className="font-medium">Message:</span> {doc.message}</p>
                  <p>
                    <span className="font-medium">Timestamp:</span> 
                    {doc.timestamp ? new Date(doc.timestamp.seconds * 1000).toLocaleString() : 'N/A'}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No test documents found</p>
          )}
        </div>
        
        <div className="border rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Applications ({applications.length})</h2>
          {applications.length > 0 ? (
            <ul className="space-y-2">
              {applications.map((app) => (
                <li key={app.id} className="bg-gray-50 p-2 rounded">
                  <p>
                    <span className="font-medium">Application ID:</span>
                    {app.applicationId || 'N/A'}
                  </p>
                  <p>
                    <span className="font-medium">Name:</span> 
                    {app.fullName || 'N/A'}
                  </p>
                  <p>
                    <span className="font-medium">Status:</span> 
                    {app.status || 'N/A'}
                  </p>
                  <p>
                    <span className="font-medium">Created:</span>
                    {app.createdAt ? new Date(app.createdAt.seconds * 1000).toLocaleString() : 'N/A'}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No applications found</p>
          )}
        </div>
      </div>
    </div>
  );
} 