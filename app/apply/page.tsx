"use client";

import Layout from "@/components/layout/layout";
import { ApplicationForm } from "@/components/application-form";
import { Lock, Server, Clock, UserCheck, Database } from 'lucide-react';

export default function ApplyPage() {
  return (
    <Layout>
      <div className="relative bg-blue-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('/images/campus-main.jpg')" }}
        />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Application for Admission</h1>
          <p className="text-xl md:max-w-2xl">
            Complete the form below to apply for admission to MAAUN. All fields marked with an asterisk (*) are required.
            Your application will be securely stored in our database.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <ApplicationForm />
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Secure Storage</h3>
            </div>
            <p className="text-gray-700">Your application data is securely stored in our Firebase database with encryption and strict access controls.</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Data Privacy</h3>
            </div>
            <p className="text-gray-700">We respect your privacy. Your personal information is protected and only used for admission purposes.</p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold">Real-time Processing</h3>
            </div>
            <p className="text-gray-700">Your application is processed in real-time and you'll receive an immediate confirmation with your application ID.</p>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Application Process</h2>
          <ol className="space-y-6 ml-6 list-decimal">
            <li className="pl-2">
              <p className="font-medium">Complete and submit this application form</p>
              <p className="text-gray-600">Fill out all required fields and submit your application online. Your data will be instantly stored in our secure Firebase database.</p>
            </li>
            <li className="pl-2">
              <p className="font-medium">Application review</p>
              <p className="text-gray-600">Our admissions team will review your application within 2-3 weeks. You can check your application status anytime using your application ID.</p>
            </li>
            <li className="pl-2">
              <p className="font-medium">Submit supporting documents</p>
              <p className="text-gray-600">You may be required to submit additional documents such as transcripts, test scores, and recommendation letters.</p>
            </li>
            <li className="pl-2">
              <p className="font-medium">Admission decision</p>
              <p className="text-gray-600">You will be notified of the admission decision by email. All communication records will be maintained in our database.</p>
            </li>
          </ol>
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="mb-4">If you have any questions or need assistance with your application, please contact our admissions office:</p>
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
    </Layout>
  );
} 