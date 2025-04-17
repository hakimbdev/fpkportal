import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (element: HTMLElement, fileName: string = 'application-form.pdf') => {
  try {
    // Wait for any images to load
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Clone the element to avoid modifying the original
    const clone = element.cloneNode(true) as HTMLElement;
    
    // Apply some styling to make it fit better for PDF
    clone.style.width = '800px';  // Fixed width for consistent output
    clone.style.margin = '20px';
    clone.style.backgroundColor = '#ffffff';
    clone.style.padding = '20px';
    
    // Append to body temporarily (hidden)
    clone.style.position = 'absolute';
    clone.style.left = '-9999px';
    document.body.appendChild(clone);
    
    const canvas = await html2canvas(clone, {
      scale: 2,  // Higher scale for better quality
      useCORS: true,
      logging: false,
      windowWidth: 800,  // Match the width we set
      windowHeight: element.scrollHeight,
    });
    
    // Remove clone after capturing
    document.body.removeChild(clone);
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });
    
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;
    
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    // Add additional pages if content overflows
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    // Add metadata to the PDF
    pdf.setProperties({
      title: 'Application Form',
      subject: 'Admission Application Form',
      creator: 'Admissions Portal',
      keywords: 'application, admission, university',
    });
    
    pdf.save(fileName);
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
}; 