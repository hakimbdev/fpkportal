"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from "@/components/layout/layout";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { formatTimestamp, getStatusInfo, updateApplicationStatus } from '@/lib/firebase-utils';
import { 
  Loader2, ArrowLeft, Clock, CheckCircle, XCircle, 
  AlertTriangle, Download, FileDown, ExternalLink
} from 'lucide-react';

export default function ApplicationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const [application, setApplication] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (id) {
      fetchApplication(id);
    }
  }, [id]);

  const fetchApplication = async (applicationId: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const docRef = doc(db, 'applications', applicationId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setApplication({
          id: docSnap.id,
          ...docSnap.data()
        });
      } else {
        setError('Application not found');
      }
    } catch (err) {
      console.error('Error fetching application details:', err);
      setError('Failed to load application details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (status: string) => {
    setUpdating(true);
    
    try {
      const result = await updateApplicationStatus(id, status);
      
      if (result.success) {
        // Update the local state
        setApplication({
          ...application,
          status
        });
      } else {
        alert('Failed to update status: ' + result.error);
      }
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update application status. Please try again.');
    } finally {
      setUpdating(false);
    }
  };

  const getStatusButtons = () => {
    if (!application) return null;
    
    return (
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleStatusUpdate('submitted')}
          disabled={application.status === 'submitted' || updating}
          className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 ${
            application.status === 'submitted' 
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <CheckCircle className="h-4 w-4" />
          Submitted
        </button>
        
        <button
          onClick={() => handleStatusUpdate('review')}
          disabled={application.status === 'review' || updating}
          className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 ${
            application.status === 'review' 
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          }`}
        >
          <Clock className="h-4 w-4" />
          Under Review
        </button>
        
        <button
          onClick={() => handleStatusUpdate('documents_requested')}
          disabled={application.status === 'documents_requested' || updating}
          className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 ${
            application.status === 'documents_requested' 
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
              : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
          }`}
        >
          <AlertTriangle className="h-4 w-4" />
          Request Documents
        </button>
        
        <button
          onClick={() => handleStatusUpdate('approved')}
          disabled={application.status === 'approved' || updating}
          className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 ${
            application.status === 'approved' 
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`}
        >
          <CheckCircle className="h-4 w-4" />
          Approve
        </button>
        
        <button
          onClick={() => handleStatusUpdate('rejected')}
          disabled={application.status === 'rejected' || updating}
          className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 ${
            application.status === 'rejected' 
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
              : 'bg-red-100 text-red-700 hover:bg-red-200'
          }`}
        >
          <XCircle className="h-4 w-4" />
          Reject
        </button>
      </div>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <button
              onClick={() => router.push('/admin/applications')}
              className="flex items-center text-blue-600 hover:underline"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Applications
            </button>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <span className="ml-2 text-lg">Loading application details...</span>
            </div>
          ) : error ? (
            <div className="p-4 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          ) : application ? (
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h1 className="text-2xl font-bold">{application.fullName}</h1>
                  <p className="text-gray-600">{application.applicationId}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  {updating ? (
                    <div className="flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded">
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      Updating status...
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center">
                        <span className={`px-3 py-1 rounded-full text-sm flex items-center ${getStatusInfo(application.status || 'submitted').color}`}>
                          {getStatusInfo(application.status || 'submitted').label}
                        </span>
                      </div>
                      
                      <div className="flex items-center">
                        <button
                          onClick={() => window.open(`/api/applications/pdf/${application.id}`, '_blank')}
                          className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          <FileDown className="h-4 w-4" />
                          Export PDF
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Application Status</h2>
                <div className="p-4 bg-gray-50 rounded">
                  {getStatusButtons()}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="font-medium">{application.fullName}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{application.email}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>
                      <p className="font-medium">{application.phone}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="font-medium">{application.dob}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Gender</p>
                      <p className="font-medium">{application.gender}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-4">Address Information</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Street Address</p>
                      <p className="font-medium">{application.address}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">City</p>
                      <p className="font-medium">{application.city}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">State/Province</p>
                      <p className="font-medium">{application.state}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Postal/Zip Code</p>
                      <p className="font-medium">{application.postalCode}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Country</p>
                      <p className="font-medium">{application.country}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h2 className="text-lg font-semibold mb-4">Educational Background</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Last School Attended</p>
                      <p className="font-medium">{application.highSchool}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Year of Graduation</p>
                      <p className="font-medium">{application.graduationYear}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Previous Qualifications</p>
                      <p className="font-medium">{application.previousQualifications || 'None provided'}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold mb-4">Program Information</h2>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Program Applied For</p>
                      <p className="font-medium">{application.programApplied}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Entry Level</p>
                      <p className="font-medium">
                        {application.entryLevel === 'freshman' ? 'Freshman (First Year)' : 
                         application.entryLevel === 'transfer' ? 'Transfer Student' : 
                         application.entryLevel === 'postgraduate' ? 'Postgraduate' : 
                         application.entryLevel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Personal Statement</h2>
                <div className="p-4 bg-gray-50 rounded whitespace-pre-line">
                  {application.personalStatement || 'No personal statement provided.'}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h2 className="text-lg font-semibold mb-4">Application Metadata</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Application ID</p>
                    <p className="font-medium">{application.applicationId}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Submission Date</p>
                    <p className="font-medium">{formatTimestamp(application.createdAt)}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500">Last Updated</p>
                    <p className="font-medium">{formatTimestamp(application.updatedAt)}</p>
                  </div>
                  
                  {application.metadata && (
                    <>
                      <div>
                        <p className="text-sm text-gray-500">IP Address</p>
                        <p className="font-medium">{application.metadata.clientIp}</p>
                      </div>
                      
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">User Agent</p>
                        <p className="font-medium text-xs truncate">{application.metadata.userAgent}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
} 