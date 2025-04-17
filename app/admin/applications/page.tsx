"use client";

import { useState, useEffect } from 'react';
import Layout from "@/components/layout/layout";
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { formatTimestamp, getStatusInfo, updateApplicationStatus } from '@/lib/firebase-utils';
import { Loader2, RefreshCw, CheckCircle, XCircle, AlertTriangle, Clock } from 'lucide-react';

type Application = {
  id: string;
  applicationId: string;
  fullName: string;
  email: string;
  programApplied: string;
  status: string;
  entryLevel: string;
  createdAt: { seconds: number; nanoseconds: number };
};

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const applicationsQuery = query(
        collection(db, 'applications'),
        orderBy('createdAt', 'desc'),
        limit(50)
      );
      
      const querySnapshot = await getDocs(applicationsQuery);
      const applicationsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Application[];
      
      setApplications(applicationsList);
    } catch (err) {
      console.error('Error fetching applications:', err);
      setError('Failed to load applications. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    setUpdating(id);
    
    try {
      const result = await updateApplicationStatus(id, status);
      
      if (result.success) {
        // Update the local state
        setApplications(applications.map(app => 
          app.id === id ? { ...app, status } : app
        ));
      } else {
        alert('Failed to update status: ' + result.error);
      }
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update application status. Please try again.');
    } finally {
      setUpdating(null);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Applications Management</h1>
            <button 
              onClick={fetchApplications}
              disabled={loading}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              <span>{loading ? 'Loading...' : 'Refresh'}</span>
            </button>
          </div>
          
          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <span className="ml-2 text-lg">Loading applications...</span>
            </div>
          ) : applications.length === 0 ? (
            <div className="text-center p-8 text-gray-500">
              <p>No applications found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left">Application ID</th>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Date</th>
                    <th className="py-3 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {applications.map((application) => (
                    <tr key={application.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <a 
                          href={`/admin/applications/${application.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {application.applicationId}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <div>{application.fullName}</div>
                        <div className="text-xs text-gray-500">{application.email}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div>{application.programApplied}</div>
                        <div className="text-xs text-gray-500">
                          {application.entryLevel === 'freshman' ? 'Freshman' : 
                           application.entryLevel === 'transfer' ? 'Transfer' :
                           application.entryLevel === 'postgraduate' ? 'Postgraduate' :
                           application.entryLevel}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusInfo(application.status || 'submitted').color}`}>
                          {getStatusInfo(application.status || 'submitted').label}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {formatTimestamp(application.createdAt)}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          {updating === application.id ? (
                            <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                          ) : (
                            <>
                              {application.status !== 'review' && (
                                <button
                                  onClick={() => handleStatusUpdate(application.id, 'review')}
                                  className="p-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                                  title="Mark as Under Review"
                                >
                                  <Clock className="h-4 w-4" />
                                </button>
                              )}
                              
                              {application.status !== 'documents_requested' && (
                                <button
                                  onClick={() => handleStatusUpdate(application.id, 'documents_requested')}
                                  className="p-1 bg-yellow-100 text-yellow-600 rounded hover:bg-yellow-200"
                                  title="Request Documents"
                                >
                                  <AlertTriangle className="h-4 w-4" />
                                </button>
                              )}
                              
                              {application.status !== 'approved' && (
                                <button
                                  onClick={() => handleStatusUpdate(application.id, 'approved')}
                                  className="p-1 bg-green-100 text-green-600 rounded hover:bg-green-200"
                                  title="Approve Application"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </button>
                              )}
                              
                              {application.status !== 'rejected' && (
                                <button
                                  onClick={() => handleStatusUpdate(application.id, 'rejected')}
                                  className="p-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
                                  title="Reject Application"
                                >
                                  <XCircle className="h-4 w-4" />
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
} 