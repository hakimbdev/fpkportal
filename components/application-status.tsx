"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Search, AlertCircle, CheckCircle, Database, FileSpreadsheet } from 'lucide-react';
import { formatTimestamp, getStatusInfo } from '@/lib/firebase-utils';

// Validation schema for the status check form
const statusFormSchema = z.object({
  applicationId: z.string().min(1, { message: 'Application ID is required' }),
});

type ApplicationStatus = {
  id: string;
  applicationId: string;
  fullName: string;
  email: string;
  programApplied: string;
  entryLevel: string;
  status: string;
  hasSubmitted: boolean;
  createdAt: { seconds: number; nanoseconds: number };
  statusUpdatedAt?: { seconds: number; nanoseconds: number };
};

export const ApplicationStatus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [application, setApplication] = useState<ApplicationStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof statusFormSchema>>({
    resolver: zodResolver(statusFormSchema),
    defaultValues: {
      applicationId: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof statusFormSchema>) => {
    setIsLoading(true);
    setError(null);
    setApplication(null);

    try {
      // Check if the input looks like a document ID or formatted Application ID
      const isFormattedId = data.applicationId.startsWith('APP-');
      
      if (isFormattedId) {
        // If it's a formatted ID (APP-XXXXXXXX), use the search endpoint
        const searchResponse = await fetch(`/api/applications/search?applicationId=${data.applicationId}`);
        const searchResult = await searchResponse.json();
        
        if (searchResult.success) {
          setApplication(searchResult.data);
        } else {
          setError('Application not found. Please check your application ID.');
        }
      } else {
        // If it looks like a document ID, try to fetch directly
        const response = await fetch(`/api/applications/${data.applicationId}`);
        const result = await response.json();

        if (result.success) {
          setApplication(result.data);
        } else {
          setError('Application not found. Please check your application ID.');
        }
      }
    } catch (error) {
      console.error('Error checking application status:', error);
      setError('An error occurred while checking application status.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusDisplay = () => {
    if (!application) return null;
    
    // Use the status field if available, otherwise fallback to hasSubmitted
    if (application.status) {
      return getStatusInfo(application.status);
    } else {
      // Fallback for older records without status field
      return application.hasSubmitted
        ? getStatusInfo('submitted')
        : getStatusInfo('unknown');
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Check Application Status</h2>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Enter Application ID</label>
          <div className="flex">
            <input
              {...form.register('applicationId')}
              type="text"
              placeholder="e.g. APP-12345678"
              className="flex-1 p-3 border rounded-l focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-6 py-3 rounded-r hover:bg-blue-700 disabled:opacity-50 flex items-center transition-colors"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Search className="h-5 w-5" />
              )}
              <span className="ml-2 font-medium">{isLoading ? 'Checking...' : 'Check'}</span>
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Enter the application ID you received after submitting your application form.
          </p>
          {form.formState.errors.applicationId && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.applicationId.message}</p>
          )}
        </div>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-md border border-red-100 flex items-start">
          <AlertCircle className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <p className="font-medium">Application Not Found</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}

      {application && (
        <div className="mt-6 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-blue-50 p-4 border-b border-gray-200">
            <div className="flex items-center">
              <Database className="h-5 w-5 text-blue-600 mr-2" />
              <h3 className="text-lg font-medium">Application Details</h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              This information is retrieved from our Firebase database.
            </p>
          </div>
          
          <div className="p-5 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
              <div>
                <p className="text-sm text-gray-500">Application ID</p>
                <p className="font-medium">{application.applicationId}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Submission Date</p>
                <p className="font-medium">{formatTimestamp(application.createdAt)}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-sm flex items-center ${getStatusDisplay()?.color}`}>
                    {application.status === 'submitted' || !application.status ? (
                      <CheckCircle className="h-4 w-4 mr-1" />
                    ) : (
                      <FileSpreadsheet className="h-4 w-4 mr-1" />
                    )}
                    {getStatusDisplay()?.label}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Last updated: {application.statusUpdatedAt ? formatTimestamp(application.statusUpdatedAt) : formatTimestamp(application.createdAt)}
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium">{application.fullName}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{application.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Program Applied</p>
                  <p className="font-medium">{application.programApplied}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Entry Level</p>
                  <p className="font-medium">{application.entryLevel === 'freshman' ? 'Freshman (First Year)' : 
                    application.entryLevel === 'transfer' ? 'Transfer Student' : 
                    application.entryLevel === 'postgraduate' ? 'Postgraduate' : 
                    application.entryLevel}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-gray-50 p-4 rounded-md text-sm text-gray-600">
              <p><strong>Status Information:</strong> {getStatusDisplay()?.description}. Your application information is securely stored in our Firebase database.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 