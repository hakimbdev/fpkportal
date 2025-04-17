"use client";

import Layout from "@/components/layout/layout";
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  Send
} from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };
  
  const faqItems = [
    {
      question: "How can I schedule a campus tour?",
      answer: "You can schedule a campus tour by visiting our Admissions page and clicking on the 'Visit Campus' button. There, you'll find options for in-person and virtual tours. You can also call our Admissions Office at +234 (123) 456-7890 to arrange a tour."
    },
    {
      question: "Who should I contact about financial aid questions?",
      answer: "For questions about financial aid, scholarships, and tuition payments, please contact our Financial Aid Office at financialaid@maaun.edu.ng or call +234 (123) 456-7891. Their office hours are Monday through Friday, 9:00 AM to 5:00 PM."
    },
    {
      question: "How do I request an official transcript?",
      answer: "Official transcripts can be requested through our Registrar's Office. Visit the Student Portal and go to the 'Academic Records' section. You can also email registrar@maaun.edu.ng with your full name, student ID, and the delivery method you prefer."
    },
    {
      question: "Where can I find information about housing options?",
      answer: "For information about on-campus housing, please contact our Housing Office at housing@maaun.edu.ng or +234 (123) 456-7892. They can provide details about residence halls, meal plans, and application deadlines."
    },
    {
      question: "How do I apply for admission?",
      answer: "To apply for admission, visit our Admissions page and click on 'Apply Now'. This will take you to our online application portal. If you have questions about the application process, please contact admissions@maaun.edu.ng."
    }
  ];
  
  return (
    <Layout>
      <div className="relative bg-blue-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('/placeholder.jpg')" }}
        />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:max-w-2xl">
            We're here to help. Reach out to us with your questions, feedback, or inquiries.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Phone className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <p className="text-gray-700 mb-1">Main: +234 (123) 456-7890</p>
              <p className="text-gray-700 mb-1">Admissions: +234 (123) 456-7891</p>
              <p className="text-gray-700">Financial Aid: +234 (123) 456-7892</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Mail className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-gray-700 mb-1">info@maaun.edu.ng</p>
              <p className="text-gray-700 mb-1">admissions@maaun.edu.ng</p>
              <p className="text-gray-700">studentservices@maaun.edu.ng</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hours</h3>
              <p className="text-gray-700 mb-1">Monday-Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-gray-700 mb-1">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        {/* Contact Form & Map */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-gray-700 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="financial">Financial Aid</option>
                    <option value="academic">Academic Programs</option>
                    <option value="housing">Housing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
            
            {/* Map & Address */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                <div className="flex items-start mb-4">
                  <MapPin className="text-blue-600 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">MAAUN Main Campus</p>
                    <p className="text-gray-700">No. 54, Ahmadu Bello Way</p>
                    <p className="text-gray-700">Kano, Nigeria</p>
                  </div>
                </div>
                <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203615917!2d-118.44547384867375!3d34.06897152461311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc85f05c0f65%3A0x25a993585c134837!2sUniversity%20of%20California%2C%20Los%20Angeles!5e0!3m2!1sen!2sus!4v1621450256589!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Transportation</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Globe className="text-blue-600 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">By Car</p>
                      <p className="text-gray-700">Visitor parking is available in Lots A, B, and C. Daily parking permits can be purchased at entrance kiosks.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="text-blue-600 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Public Transportation</p>
                      <p className="text-gray-700">Bus routes 10, 15, and 24 stop directly in front of campus. The University Station is a 10-minute walk from campus.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="text-blue-600 h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Campus Shuttle</p>
                      <p className="text-gray-700">Free shuttle services run throughout campus and to nearby residential areas every 15 minutes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Department Directory */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Department Directory</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Academic Departments</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Arts & Sciences: (123) 456-7893</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Business School: (123) 456-7894</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Engineering: (123) 456-7895</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Medicine: (123) 456-7896</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Law School: (123) 456-7897</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3">Student Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Registrar: (123) 456-7898</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Financial Aid: (123) 456-7899</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Student Housing: (123) 456-7900</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Health Services: (123) 456-7901</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Career Center: (123) 456-7902</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-3">Administration</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>President's Office: (123) 456-7903</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Provost's Office: (123) 456-7904</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Human Resources: (123) 456-7905</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>Campus Security: (123) 456-7906</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-blue-600 h-4 w-4 mr-2" />
                    <span>IT Help Desk: (123) 456-7907</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQs */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <button
                    className="flex justify-between items-center w-full text-left font-medium focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="text-blue-600 h-5 w-5 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="text-blue-600 h-5 w-5 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="mt-2 text-gray-700 pl-4">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 