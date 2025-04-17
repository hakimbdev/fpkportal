"use client";

import Layout from "@/components/layout/layout";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Globe, 
  Users, 
  Award, 
  Library,
  Clock,
  ArrowRight
} from "lucide-react";

export default function AcademicsPage() {
  return (
    <Layout>
      <div className="relative bg-blue-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('/placeholder.jpg')" }}
        />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
          <p className="text-xl md:max-w-2xl">
            Discover our diverse academic programs, exceptional faculty, and resources designed to help you succeed.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Academic Excellence */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Academic Excellence</h2>
              <p className="text-gray-700 mb-4">
                At MAAUN, we are committed to providing an education that combines rigorous academic standards with innovative teaching methods. Our programs are designed to challenge and inspire students while preparing them for successful careers and meaningful lives.
              </p>
              <p className="text-gray-700 mb-6">
                With a student-to-faculty ratio of 14:1, our students receive personalized attention and mentorship from distinguished faculty who are leaders in their fields. We offer a comprehensive range of undergraduate, graduate, and professional programs across multiple disciplines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/academics/undergraduate" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Undergraduate Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/academics/graduate" 
                  className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors"
                >
                  Graduate Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80 w-full">
                <Image 
                  src="/placeholder.jpg" 
                  alt="MAAUN Classroom" 
                  fill 
                  style={{objectFit: "cover"}} 
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Schools and Colleges */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Schools and Colleges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="/images/college-arts.jpg" 
                  alt="College of Arts and Sciences" 
                  fill 
                  style={{objectFit: "cover"}} 
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">College of Arts and Sciences</h3>
                <p className="text-gray-700 mb-4">
                  Our largest and most diverse college, offering programs in the humanities, natural sciences, and social sciences.
                </p>
                <Link 
                  href="/academics/arts-sciences" 
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  Explore programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="/images/college-business.jpg" 
                  alt="School of Business" 
                  fill 
                  style={{objectFit: "cover"}} 
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">School of Business</h3>
                <p className="text-gray-700 mb-4">
                  Preparing future business leaders through programs in finance, marketing, management, and entrepreneurship.
                </p>
                <Link 
                  href="/academics/business" 
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  Explore programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="/images/college-engineering.jpg" 
                  alt="College of Engineering" 
                  fill 
                  style={{objectFit: "cover"}} 
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">College of Engineering</h3>
                <p className="text-gray-700 mb-4">
                  Innovative programs in civil, electrical, mechanical, and computer engineering with hands-on learning.
                </p>
                <Link 
                  href="/academics/engineering" 
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  Explore programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="/images/college-medicine.jpg" 
                  alt="School of Medicine" 
                  fill 
                  style={{objectFit: "cover"}} 
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">School of Medicine</h3>
                <p className="text-gray-700 mb-4">
                  Educating future physicians with a focus on patient-centered care, research, and community service.
                </p>
                <Link 
                  href="/academics/medicine" 
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  Explore programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="/images/college-education.jpg" 
                  alt="School of Education" 
                  fill 
                  style={{objectFit: "cover"}} 
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">School of Education</h3>
                <p className="text-gray-700 mb-4">
                  Preparing innovative educators and leaders who make a positive impact on students and communities.
                </p>
                <Link 
                  href="/academics/education" 
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  Explore programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="/images/college-law.jpg" 
                  alt="School of Law" 
                  fill 
                  style={{objectFit: "cover"}} 
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">School of Law</h3>
                <p className="text-gray-700 mb-4">
                  Offering comprehensive legal education with opportunities for practical experience and specialization.
                </p>
                <Link 
                  href="/academics/law" 
                  className="text-blue-600 hover:underline inline-flex items-center"
                >
                  Explore programs <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/academics/all-programs" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              View All Academic Programs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        
        {/* Academic Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Academic Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Learning</h3>
              <p className="text-gray-700">
                Study abroad opportunities in over 50 countries, international research collaborations, and a diverse campus community.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interdisciplinary Studies</h3>
              <p className="text-gray-700">
                Programs that cross traditional boundaries, allowing students to combine interests and develop versatile skill sets.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Honors Program</h3>
              <p className="text-gray-700">
                Challenging coursework, special seminars, research opportunities, and dedicated mentorship for high-achieving students.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">First-Year Experience</h3>
              <p className="text-gray-700">
                A comprehensive program to help new students transition to university life and build a foundation for academic success.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Learning</h3>
              <p className="text-gray-700">
                Evening, weekend, and online courses to accommodate diverse student needs and schedules.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Preparation</h3>
              <p className="text-gray-700">
                Internships, co-ops, career counseling, and professional development opportunities integrated into academic programs.
              </p>
            </div>
          </div>
        </div>
        
        {/* Academic Calendar */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Academic Calendar</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                  Fall Semester 2023
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium w-1/2">New Student Orientation:</span>
                    <span className="text-gray-700">August 20-24</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Classes Begin:</span>
                    <span className="text-gray-700">August 28</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Labor Day (No Classes):</span>
                    <span className="text-gray-700">September 4</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Fall Break:</span>
                    <span className="text-gray-700">October 16-17</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Thanksgiving Break:</span>
                    <span className="text-gray-700">November 22-26</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Last Day of Classes:</span>
                    <span className="text-gray-700">December 8</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Final Exams:</span>
                    <span className="text-gray-700">December 11-15</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Winter Commencement:</span>
                    <span className="text-gray-700">December 17</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                  Spring Semester 2024
                </h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-medium w-1/2">New Student Orientation:</span>
                    <span className="text-gray-700">January 8-10</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Classes Begin:</span>
                    <span className="text-gray-700">January 16</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">MLK Day (No Classes):</span>
                    <span className="text-gray-700">January 15</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Spring Break:</span>
                    <span className="text-gray-700">March 11-15</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Last Day of Classes:</span>
                    <span className="text-gray-700">April 26</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Reading Days:</span>
                    <span className="text-gray-700">April 29-30</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Final Exams:</span>
                    <span className="text-gray-700">May 1-7</span>
                  </li>
                  <li className="flex">
                    <span className="font-medium w-1/2">Spring Commencement:</span>
                    <span className="text-gray-700">May 11-12</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="/documents/academic-calendar.pdf" 
                className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors"
              >
                Download Full Academic Calendar <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Academic Resources */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Academic Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <Library className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">University Libraries</h3>
                  <p className="text-gray-700 mb-3">
                    Our libraries provide access to millions of books, journals, and digital resources, along with expert research assistance and comfortable study spaces.
                  </p>
                  <Link 
                    href="/academics/libraries" 
                    className="text-blue-600 hover:underline inline-flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <BookOpen className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Academic Advising</h3>
                  <p className="text-gray-700 mb-3">
                    Dedicated advisors help students navigate their academic journey, select courses, plan for graduation, and connect with university resources.
                  </p>
                  <Link 
                    href="/academics/advising" 
                    className="text-blue-600 hover:underline inline-flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <GraduationCap className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Learning Support Center</h3>
                  <p className="text-gray-700 mb-3">
                    Free tutoring, academic coaching, writing assistance, and learning strategies to help students excel in their courses.
                  </p>
                  <Link 
                    href="/academics/learning-center" 
                    className="text-blue-600 hover:underline inline-flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <Users className="text-blue-600 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Disability Services</h3>
                  <p className="text-gray-700 mb-3">
                    Accommodations and support services to ensure equal access to education for students with disabilities.
                  </p>
                  <Link 
                    href="/academics/disability-services" 
                    className="text-blue-600 hover:underline inline-flex items-center"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 