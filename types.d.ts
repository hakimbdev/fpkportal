// Type declarations for missing modules
declare module 'next/link';
declare module 'lucide-react';
declare module '@/components/ui/sidebar';
declare module '@/components/ui/button';
declare module '@/components/ui/avatar';
declare module 'firebase/app';
declare module 'firebase/firestore';
declare module 'firebase/storage';
declare module 'firebase/auth';
declare module 'html2canvas';
declare module 'jspdf';

// Add JSX namespace
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 