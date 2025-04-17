import { NextRequest, NextResponse } from 'next/server';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import PDFDocument from 'pdfkit';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Application ID is required' },
        { status: 400 }
      );
    }
    
    // Fetch the application from Firestore
    const docRef = doc(db, 'applications', id);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      );
    }
    
    const application = {
      id: docSnap.id,
      ...docSnap.data()
    };
    
    // Generate PDF using PDFKit
    const pdfBuffer = await generatePDF(application);
    
    // Return the PDF as a downloadable file
    const response = new NextResponse(pdfBuffer);
    
    // Set appropriate headers for PDF download
    response.headers.set('Content-Type', 'application/pdf');
    response.headers.set('Content-Disposition', `attachment; filename="application-${application.applicationId}.pdf"`);
    
    return response;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while generating the PDF' },
      { status: 500 }
    );
  }
}

async function generatePDF(application: any): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const chunks: Buffer[] = [];
      const doc = new PDFDocument({ margin: 50 });
      
      // Collect PDF data chunks
      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);
      
      // Add header with logo
      doc.fontSize(20).text('MAAUN University', { align: 'center' });
      doc.fontSize(16).text('Application Form', { align: 'center' });
      doc.moveDown(0.5);
      
      // Add application ID and date
      doc.fontSize(10).text(`Application ID: ${application.applicationId}`, { align: 'right' });
      const submissionDate = new Date(application.createdAt.seconds * 1000);
      doc.text(`Submission Date: ${submissionDate.toLocaleDateString()}`, { align: 'right' });
      doc.moveDown(1);
      
      // Add section: Personal Information
      addSection(doc, 'Personal Information');
      addField(doc, 'Full Name', application.fullName);
      addField(doc, 'Email', application.email);
      addField(doc, 'Phone', application.phone);
      addField(doc, 'Date of Birth', application.dob);
      addField(doc, 'Gender', application.gender);
      doc.moveDown(0.5);
      
      // Add section: Address
      addSection(doc, 'Address Information');
      addField(doc, 'Street Address', application.address);
      addField(doc, 'City', application.city);
      addField(doc, 'State/Province', application.state);
      addField(doc, 'Postal Code', application.postalCode);
      addField(doc, 'Country', application.country);
      doc.moveDown(0.5);
      
      // Add section: Educational Background
      addSection(doc, 'Educational Background');
      addField(doc, 'Last School Attended', application.highSchool);
      addField(doc, 'Year of Graduation', application.graduationYear);
      
      if (application.previousQualifications) {
        addField(doc, 'Previous Qualifications', application.previousQualifications);
      }
      doc.moveDown(0.5);
      
      // Add section: Program Information
      addSection(doc, 'Program Information');
      addField(doc, 'Program Applied For', application.programApplied);
      
      let entryLevelText = application.entryLevel;
      if (application.entryLevel === 'freshman') entryLevelText = 'Freshman (First Year)';
      if (application.entryLevel === 'transfer') entryLevelText = 'Transfer Student';
      if (application.entryLevel === 'postgraduate') entryLevelText = 'Postgraduate';
      
      addField(doc, 'Entry Level', entryLevelText);
      doc.moveDown(0.5);
      
      // Add section: Personal Statement
      if (application.personalStatement) {
        addSection(doc, 'Personal Statement');
        doc.fontSize(10).text(application.personalStatement, {
          align: 'left',
          width: 500
        });
        doc.moveDown(1);
      }
      
      // Add section: Application Status
      addSection(doc, 'Application Status');
      let statusText = 'Submitted';
      
      if (application.status) {
        switch (application.status) {
          case 'review':
            statusText = 'Under Review';
            break;
          case 'documents_requested':
            statusText = 'Documents Requested';
            break;
          case 'approved':
            statusText = 'Approved';
            break;
          case 'rejected':
            statusText = 'Rejected';
            break;
        }
      }
      
      addField(doc, 'Current Status', statusText);
      
      // Add footer with page numbers
      const totalPages = doc.bufferedPageRange().count;
      for (let i = 0; i < totalPages; i++) {
        doc.switchToPage(i);
        doc.fontSize(8)
           .text(
              `Page ${i + 1} of ${totalPages}`,
              doc.page.margins.left,
              doc.page.height - 50,
              { align: 'center', width: doc.page.width - doc.page.margins.right - doc.page.margins.left }
           );
      }
      
      // Finalize the PDF
      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

function addSection(doc: PDFKit.PDFDocument, title: string) {
  doc.fontSize(14).text(title, { underline: true });
  doc.moveDown(0.5);
}

function addField(doc: PDFKit.PDFDocument, label: string, value: string) {
  doc.fontSize(10)
     .text(`${label}: `, { continued: true })
     .font('Helvetica-Bold')
     .text(value || 'N/A');
  
  doc.font('Helvetica');
  doc.moveDown(0.2);
} 