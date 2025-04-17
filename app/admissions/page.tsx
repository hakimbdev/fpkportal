"use client";

import Layout from "@/components/layout/layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, GraduationCap, FileText, DollarSign } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <Layout>
      <div className="relative bg-blue-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('/placeholder.jpg')" }}
        />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl md:max-w-2xl">
            Join our vibrant community of learners and innovators. We welcome applications from 
            students with diverse backgrounds and experiences.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-blue-100 p-4 rounded-full">
              <CalendarDays className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl mb-2">Key Dates</CardTitle>
            <CardDescription className="text-gray-600">
              Stay on track with our application deadlines and important admissions dates.
            </CardDescription>
            <div className="mt-4">
              <Link href="/admissions/dates">
                <Button variant="outline" className="mt-2">View Dates</Button>
              </Link>
            </div>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-blue-100 p-4 rounded-full">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl mb-2">Requirements</CardTitle>
            <CardDescription className="text-gray-600">
              Learn about admission requirements for undergraduate and graduate programs.
            </CardDescription>
            <div className="mt-4">
              <Link href="/admissions/requirements">
                <Button variant="outline" className="mt-2">View Requirements</Button>
              </Link>
            </div>
          </Card>
          
          <Card className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4 bg-blue-100 p-4 rounded-full">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl mb-2">Tuition & Aid</CardTitle>
            <CardDescription className="text-gray-600">
              Explore tuition costs, scholarships, financial aid options, and payment plans.
            </CardDescription>
            <div className="mt-4">
              <Link href="/admissions/financial-aid">
                <Button variant="outline" className="mt-2">Financial Information</Button>
              </Link>
            </div>
          </Card>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Application Process</h2>
          <Tabs defaultValue="undergraduate" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate" className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Complete Online Application</h3>
                    <p className="text-gray-600">Create an account and complete your application profile with personal information, academic history, and program preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Submit Required Documents</h3>
                    <p className="text-gray-600">Upload your transcripts, standardized test scores, statement of purpose, and letters of recommendation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Pay Application Fee</h3>
                    <p className="text-gray-600">Submit the non-refundable application fee to process your application. Fee waivers are available for eligible students.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Check Application Status</h3>
                    <p className="text-gray-600">Track your application status through your applicant portal and respond to any additional requests for information.</p>
                    <div className="mt-2">
                      <Link href="/check-status" className="text-blue-600 hover:underline inline-flex items-center">
                        Check status <span className="ml-1 text-xs">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link href="/apply">
                    <Button className="px-8">Start Your Application</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="graduate" className="p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Research Programs and Requirements</h3>
                    <p className="text-gray-600">Review program-specific admission requirements, faculty research interests, and funding opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Complete Online Application</h3>
                    <p className="text-gray-600">Create an account and submit your application with personal information, academic history, and research interests.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Submit Required Documents</h3>
                    <p className="text-gray-600">Upload your transcripts, GRE/GMAT scores, CV/resume, research proposal, and letters of recommendation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Interview Process</h3>
                    <p className="text-gray-600">Selected candidates may be invited for interviews with faculty members and program directors.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">5</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Admission Decision</h3>
                    <p className="text-gray-600">Admission decisions are typically announced 8-10 weeks after the application deadline.</p>
                    <div className="mt-2">
                      <Link href="/check-status" className="text-blue-600 hover:underline inline-flex items-center">
                        Check status <span className="ml-1 text-xs">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link href="/apply">
                    <Button className="px-8">Start Your Application</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Have Questions?</h2>
          <p className="text-center mb-8">
            Our admissions team is here to help you navigate the application process and answer any questions you may have.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="font-medium mb-2">Contact Admissions</h3>
              <p className="text-gray-600 mb-3">admissions@maaun.edu.ng</p>
              <p className="text-gray-600">+234 (123) 456-7890</p>
            </div>
            <div className="text-center">
              <h3 className="font-medium mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-3">Schedule a campus tour</p>
              <Link href="/admissions/visit">
                <Button variant="outline" size="sm">Book a Visit</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 