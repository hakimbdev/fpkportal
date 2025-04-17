"use client";

import React, { useRef, useState } from 'react';
import { generatePDF } from '@/lib/pdf-utils';
import { Loader2, Download, CheckCircle2, AlertCircle } from 'lucide-react';
import { useApplicationForm, ApplicationFormData } from '@/lib/hooks/use-application-form';

// Array of programs
const PROGRAMS = [
  'Computer Science',
  'Business Administration',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Medicine',
  'Nursing',
  'Pharmacy',
  'Law',
  'Education',
  'Economics',
  'Accounting',
  'Architecture',
  'Civil Engineering',
  'English Literature',
  'History',
  'Physics',
  'Chemistry',
  'Biology',
  'Mathematics',
  'Psychology',
];

export const ApplicationForm = () => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
  const {
    form,
    isSubmitting,
    applicationId,
    formError,
    submissionState,
    submitApplication
  } = useApplicationForm();

  const onSubmit = async (data: ApplicationFormData) => {
    await submitApplication(data);
  };

  const handleDownloadPDF = async () => {
    if (!formRef.current) return;
    
    setIsGeneratingPDF(true);
    try {
      const success = await generatePDF(
        formRef.current,
        `application-${applicationId || 'form'}.pdf`
      );
      
      if (success) {
        alert('Application form downloaded successfully!');
      } else {
        alert('Failed to generate PDF. Please try again.');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('An error occurred while generating the PDF.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="container mx-auto py-6 px-0">
      <h1 className="text-2xl font-bold mb-6">Admission Application Form</h1>
      
      <div ref={formRef} className="bg-white p-6 rounded-lg shadow-md">
        {formError && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded flex items-start gap-2">
            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div>{formError}</div>
          </div>
        )}
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
                <input
                  {...form.register('fullName')}
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                {form.formState.errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.fullName.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  {...form.register('email')}
                  type="email"
                  placeholder="johndoe@example.com"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input
                  {...form.register('phone')}
                  type="text"
                  placeholder="+1234567890"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Date of Birth <span className="text-red-500">*</span></label>
                <input
                  {...form.register('dob')}
                  type="date"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
                {form.formState.errors.dob && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.dob.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    {...form.register('gender')}
                    type="radio"
                    value="male"
                    className="form-radio"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    {...form.register('gender')}
                    type="radio"
                    value="female"
                    className="form-radio"
                  />
                  <span>Female</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    {...form.register('gender')}
                    type="radio"
                    value="other"
                    className="form-radio"
                  />
                  <span>Other</span>
                </label>
              </div>
              {form.formState.errors.gender && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.gender.message}</p>
              )}
            </div>
          </div>
          
          {/* Address Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Address</h2>
            
            <div>
              <label className="block text-sm font-medium mb-1">Street Address</label>
              <input
                {...form.register('address')}
                type="text"
                placeholder="123 Main St."
                className="w-full p-2 border rounded"
              />
              {form.formState.errors.address && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.address.message}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  {...form.register('city')}
                  type="text"
                  placeholder="New York"
                  className="w-full p-2 border rounded"
                />
                {form.formState.errors.city && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.city.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">State/Province</label>
                <input
                  {...form.register('state')}
                  type="text"
                  placeholder="NY"
                  className="w-full p-2 border rounded"
                />
                {form.formState.errors.state && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.state.message}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Postal/Zip Code</label>
                <input
                  {...form.register('postalCode')}
                  type="text"
                  placeholder="10001"
                  className="w-full p-2 border rounded"
                />
                {form.formState.errors.postalCode && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.postalCode.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Country</label>
                <input
                  {...form.register('country')}
                  type="text"
                  placeholder="United States"
                  className="w-full p-2 border rounded"
                />
                {form.formState.errors.country && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.country.message}</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Educational Background */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Educational Background</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Last School Attended</label>
                <input
                  {...form.register('highSchool')}
                  type="text"
                  placeholder="City High School"
                  className="w-full p-2 border rounded"
                />
                {form.formState.errors.highSchool && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.highSchool.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Year of Graduation</label>
                <input
                  {...form.register('graduationYear')}
                  type="text"
                  placeholder="2023"
                  className="w-full p-2 border rounded"
                />
                {form.formState.errors.graduationYear && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.graduationYear.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Previous Qualifications (Optional)</label>
              <textarea
                {...form.register('previousQualifications')}
                placeholder="List any degrees, diplomas, or certificates you have obtained"
                className="w-full p-2 border rounded min-h-[100px]"
              />
              {form.formState.errors.previousQualifications && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.previousQualifications.message}</p>
              )}
            </div>
          </div>
          
          {/* Program Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Program Information</h2>
            
            <div>
              <label className="block text-sm font-medium mb-1">Program Applied For</label>
              <select
                {...form.register('programApplied')}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a program</option>
                {PROGRAMS.map((program) => (
                  <option key={program} value={program}>
                    {program}
                  </option>
                ))}
              </select>
              {form.formState.errors.programApplied && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.programApplied.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Entry Level</label>
              <select
                {...form.register('entryLevel')}
                className="w-full p-2 border rounded"
              >
                <option value="freshman">Freshman (First Year)</option>
                <option value="transfer">Transfer Student</option>
                <option value="postgraduate">Postgraduate</option>
              </select>
              {form.formState.errors.entryLevel && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.entryLevel.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Personal Statement</label>
              <textarea
                {...form.register('personalStatement')}
                placeholder="Tell us about yourself and why you want to study this program (minimum 100 characters)"
                className="w-full p-2 border rounded min-h-[150px]"
              />
              <p className="text-gray-500 text-sm mt-1">Minimum 100 characters required.</p>
              {form.formState.errors.personalStatement && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.personalStatement.message}</p>
              )}
            </div>
          </div>
          
          {/* Form submission */}
          <div className="pt-4">
            {!applicationId ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
              >
                {submissionState === 'submitting' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> 
                    Submitting Application...
                  </>
                ) : 'Submit Application'}
              </button>
            ) : (
              <div className="flex flex-col items-center space-y-4 p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="text-green-500">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium">Application Submitted Successfully!</h3>
                  <p className="text-gray-600 mt-2">Your application has been stored in our database</p>
                  <p className="text-gray-700 font-medium mt-3">Application ID: <span className="font-bold">{applicationId}</span></p>
                  <p className="text-sm text-gray-500 mt-1">Please save this ID for future reference.</p>
                </div>
                <button
                  onClick={handleDownloadPDF}
                  disabled={isGeneratingPDF}
                  className="w-full py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2 transition-colors"
                >
                  {isGeneratingPDF ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Generating PDF...
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5" />
                      Download Application as PDF
                    </>
                  )}
                </button>
                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>You will receive an email with further instructions shortly.</p>
                  <p className="mt-1">For any questions, contact admissions@maaun.edu.ng</p>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
