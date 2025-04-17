"use client";

import Layout from "@/components/layout/layout";
import { ApplicationStatus } from "@/components/application-status";
import { Search, Clock, AlertCircle, Database } from 'lucide-react';

export default function CheckStatusPage() {
  return (
    <Layout>
      <div className="relative bg-blue-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('/images/campus-main.jpg')" }}
        />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Check Application Status</h1>
          <p className="text-xl md:max-w-2xl">
            Track the status of your admission application. Enter your application ID to view your current status.
            All application data is stored securely in our database.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md">
            <ApplicationStatus />
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <Search className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Real-time Status Updates</h3>
              </div>
              <p className="text-gray-700">Your application status is updated in real-time as our admissions team reviews your information. Check back regularly for the latest updates.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <Database className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Secure Database Storage</h3>
              </div>
              <p className="text-gray-700">Your application information is securely stored in our Firebase database with encryption and strict access controls.</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Application Status Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 font-medium">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-lg">Submitted</h3>
                  <p className="text-gray-600">Your application has been received and is awaiting review by our admissions team. Data is stored in our Firebase database.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 font-medium">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-lg">Under Review</h3>
                  <p className="text-gray-600">Your application is currently being reviewed by the admissions committee. This process typically takes 2-3 weeks.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 font-medium">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-lg">Additional Documents Requested</h3>
                  <p className="text-gray-600">We need additional documents to complete your application. Please check your email for details and upload the requested files.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                  <span className="text-blue-600 font-medium">4</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-lg">Decision Made</h3>
                  <p className="text-gray-600">A decision has been made on your application. You will receive an official notification by email with further instructions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4">If you can't find your application or have questions about your status, please contact our admissions office:</p>
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="mb-4 md:mb-0">
                <p className="font-medium">Email</p>
                <p className="text-gray-600">admissions@maaun.edu.ng</p>
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+234 (123) 456-7890</p>
              </div>
              <div>
                <p className="font-medium">Office Hours</p>
                <p className="text-gray-600">Monday-Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 