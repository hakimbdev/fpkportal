import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Validation schema for the application form
export const formSchema = z.object({
  fullName: z.string().min(3, { message: 'Full name must be at least 3 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), { message: 'Please enter a valid date of birth.' }),
  gender: z.enum(['male', 'female', 'other'], { message: 'Please select a gender.' }),
  address: z.string().min(5, { message: 'Address must be at least 5 characters.' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters.' }),
  state: z.string().min(2, { message: 'State must be at least 2 characters.' }),
  postalCode: z.string().min(2, { message: 'Postal code must be at least 2 characters.' }),
  country: z.string().min(2, { message: 'Country must be at least 2 characters.' }),
  highSchool: z.string().min(3, { message: 'High school name must be at least 3 characters.' }),
  graduationYear: z.string().min(4, { message: 'Please enter a valid graduation year.' }),
  programApplied: z.string().min(2, { message: 'Please select a program.' }),
  entryLevel: z.enum(['freshman', 'transfer', 'postgraduate'], { message: 'Please select an entry level.' }),
  previousQualifications: z.string().optional(),
  personalStatement: z.string().min(100, { message: 'Personal statement must be at least 100 characters.' }).optional(),
});

export type ApplicationFormData = z.infer<typeof formSchema>;

export type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export function useApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationId, setApplicationId] = useState<string | null>(null);
  const [applicationDocId, setApplicationDocId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  
  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      gender: 'male',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      highSchool: '',
      graduationYear: '',
      programApplied: '',
      entryLevel: 'freshman',
      previousQualifications: '',
      personalStatement: '',
    },
  });

  const submitApplication = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    setFormError(null);
    setSubmissionState('submitting');
    
    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          hasSubmitted: true,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setApplicationId(result.applicationId);
        setApplicationDocId(result.id);
        setSubmissionState('success');
        
        // Track the submission
        if (typeof window !== 'undefined' && 'gtag' in window) {
          // @ts-ignore
          window.gtag('event', 'application_submitted', {
            'application_id': result.applicationId,
            'program': data.programApplied
          });
        }
        
        return { success: true, applicationId: result.applicationId, docId: result.id };
      } else {
        setFormError(result.error || 'Failed to submit application. Please try again.');
        setSubmissionState('error');
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = 'An error occurred. Please try again later.';
      setFormError(errorMessage);
      setSubmissionState('error');
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    form.reset();
    setApplicationId(null);
    setApplicationDocId(null);
    setFormError(null);
    setSubmissionState('idle');
  };

  return {
    form,
    isSubmitting,
    applicationId,
    applicationDocId,
    formError,
    submissionState,
    submitApplication,
    resetForm,
  };
} 