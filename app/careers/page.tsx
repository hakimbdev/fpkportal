import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BadgeCheck, 
  BriefcaseBusiness, 
  Building2, 
  FileSearch, 
  GraduationCap, 
  HandHeart, 
  Heart, 
  Lightbulb,
  MapPin, 
  MessageSquare, 
  MoveUpRight, 
  Search, 
  SendToBack, 
  Sparkles, 
  Star, 
  Users2
} from "lucide-react"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#003366] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                Build Your Career at MAAUN
              </h1>
              <p className="text-xl mb-8">
                Join our team of dedicated professionals and contribute to shaping the future of education in Nigeria.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#ff7f00] hover:bg-[#e67300]">View Open Positions</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Life at MAAUN
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
                alt="MAAUN Staff"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Jobs Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-8">Find Your Perfect Role</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1 text-gray-700">Keywords</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input className="pl-10" placeholder="Job title, skills, or keywords" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Department</label>
                  <select className="w-full rounded-md border border-gray-300 p-2">
                    <option value="">All Departments</option>
                    <option value="academic">Academic</option>
                    <option value="administration">Administration</option>
                    <option value="it">Information Technology</option>
                    <option value="finance">Finance</option>
                    <option value="facilities">Facilities</option>
                    <option value="student-affairs">Student Affairs</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700">Job Type</label>
                  <select className="w-full rounded-md border border-gray-300 p-2">
                    <option value="">All Types</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="temporary">Temporary</option>
                  </select>
                </div>
              </div>
              <Button className="w-full bg-[#003366] hover:bg-[#002244]">
                Search Jobs
              </Button>
            </div>
            
            <div className="mt-12">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="all">All Positions</TabsTrigger>
                    <TabsTrigger value="academic">Academic</TabsTrigger>
                    <TabsTrigger value="administrative">Administrative</TabsTrigger>
                  </TabsList>
                  <span className="text-gray-600">12 open positions</span>
                </div>
                
                <TabsContent value="all">
                  <div className="space-y-4">
                    <JobCard
                      title="Assistant Professor of Computer Science"
                      department="Faculty of Computing"
                      location="Kano Campus"
                      type="Full-time"
                      posted="2 days ago"
                      deadline="August 30, 2023"
                    />
                    <JobCard
                      title="Facilities Manager"
                      department="Administration"
                      location="Kabo Campus"
                      type="Full-time"
                      posted="5 days ago"
                      deadline="August 20, 2023"
                    />
                    <JobCard
                      title="Student Affairs Coordinator"
                      department="Student Affairs"
                      location="Kano Campus"
                      type="Full-time"
                      posted="1 week ago"
                      deadline="August 25, 2023"
                    />
                    <JobCard
                      title="IT Support Specialist"
                      department="Information Technology"
                      location="Kabo Campus"
                      type="Full-time"
                      posted="2 weeks ago"
                      deadline="August 15, 2023"
                    />
                    <JobCard
                      title="Lecturer, Department of Economics"
                      department="Faculty of Social Sciences"
                      location="Kano Campus"
                      type="Full-time"
                      posted="2 weeks ago"
                      deadline="September 5, 2023"
                    />
                  </div>
                  <div className="mt-8 text-center">
                    <Button variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                      Load More Jobs
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="academic">
                  <div className="space-y-4">
                    <JobCard
                      title="Assistant Professor of Computer Science"
                      department="Faculty of Computing"
                      location="Kano Campus"
                      type="Full-time"
                      posted="2 days ago"
                      deadline="August 30, 2023"
                    />
                    <JobCard
                      title="Lecturer, Department of Economics"
                      department="Faculty of Social Sciences"
                      location="Kano Campus"
                      type="Full-time"
                      posted="2 weeks ago"
                      deadline="September 5, 2023"
                    />
                    <JobCard
                      title="Associate Professor of Mechanical Engineering"
                      department="Faculty of Engineering"
                      location="Kabo Campus"
                      type="Full-time"
                      posted="3 weeks ago"
                      deadline="September 10, 2023"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="administrative">
                  <div className="space-y-4">
                    <JobCard
                      title="Facilities Manager"
                      department="Administration"
                      location="Kabo Campus"
                      type="Full-time"
                      posted="5 days ago"
                      deadline="August 20, 2023"
                    />
                    <JobCard
                      title="Student Affairs Coordinator"
                      department="Student Affairs"
                      location="Kano Campus"
                      type="Full-time"
                      posted="1 week ago"
                      deadline="August 25, 2023"
                    />
                    <JobCard
                      title="IT Support Specialist"
                      department="Information Technology"
                      location="Kabo Campus"
                      type="Full-time"
                      posted="2 weeks ago"
                      deadline="August 15, 2023"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="bg-[#f0f5fa] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">Why Join MAAUN</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Discover the benefits and opportunities that make MAAUN an exceptional place to build your career.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Sparkles className="h-10 w-10 text-[#ff7f00]" />}
              title="Innovation-Driven Environment"
              description="Be part of an institution that embraces innovation and encourages fresh ideas to advance education."
            />
            <BenefitCard
              icon={<Users2 className="h-10 w-10 text-[#ff7f00]" />}
              title="Collaborative Culture"
              description="Work alongside dedicated professionals committed to academic excellence and student success."
            />
            <BenefitCard
              icon={<GraduationCap className="h-10 w-10 text-[#ff7f00]" />}
              title="Professional Development"
              description="Access continuous learning opportunities, workshops, and career advancement pathways."
            />
            <BenefitCard
              icon={<Star className="h-10 w-10 text-[#ff7f00]" />}
              title="Competitive Benefits"
              description="Enjoy comprehensive benefits including healthcare, retirement plans, and paid time off."
            />
            <BenefitCard
              icon={<HandHeart className="h-10 w-10 text-[#ff7f00]" />}
              title="Work-Life Balance"
              description="We value your well-being with flexible scheduling options and family-friendly policies."
            />
            <BenefitCard
              icon={<SendToBack className="h-10 w-10 text-[#ff7f00]" />}
              title="Diverse Community"
              description="Join a culturally rich and inclusive community with perspectives from across Nigeria and beyond."
            />
          </div>
        </div>
      </div>

      {/* Life at MAAUN */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">Life at MAAUN</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Experience a workplace culture that fosters growth, collaboration, and excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
                    alt="Campus life"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1606761568410-3928e9b3d2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=350&q=80"
                    alt="Staff meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=350&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80"
                    alt="Staff development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">A Community of Excellence</h3>
              <p className="text-gray-700 mb-6">
                At MAAUN, we foster a vibrant workplace environment where staff members are valued, empowered, and inspired to make a difference. Our team collaborates across departments to create exceptional experiences for our students and community.
              </p>
              <p className="text-gray-700 mb-6">
                We celebrate achievements, promote work-life balance, and create opportunities for professional growth. Regular team-building activities, staff recognition programs, and community engagement initiatives strengthen our sense of belonging.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#003366] hover:bg-[#002244]">Meet Our Team</Button>
                <Button variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                  View Employee Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-[#003366] text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Employees Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working at MAAUN has provided me with incredible opportunities to grow academically and professionally. The collaborative atmosphere and support from leadership have been instrumental in my success."
              name="Dr. Ibrahim Ahmed"
              position="Associate Professor, Faculty of Engineering"
              image="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TestimonialCard
              quote="I appreciate the emphasis on work-life balance and professional development. MAAUN truly invests in its staff and provides resources to help us excel in our roles while furthering our education."
              name="Amina Yusuf"
              position="Student Affairs Coordinator"
              image="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <TestimonialCard
              quote="The innovative spirit at MAAUN makes it an exciting place to work. I've been able to implement new technologies and approaches that have significantly improved our IT infrastructure."
              name="David Okafor"
              position="IT Manager"
              image="https://randomuser.me/api/portraits/men/67.jpg"
            />
          </div>
        </div>
      </div>

      {/* How to Apply */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">How to Apply</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our application process is designed to be straightforward and efficient.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProcessStep
                number="1"
                title="Find a Position"
                description="Browse our current openings and find a role that matches your skills and career aspirations."
              />
              <ProcessStep
                number="2"
                title="Submit Application"
                description="Complete the online application form and upload your resume, cover letter, and required documents."
              />
              <ProcessStep
                number="3"
                title="Interview Process"
                description="Selected candidates will be invited for interviews, which may include multiple rounds depending on the position."
              />
            </div>
            <div className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#003366] mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What should I include in my application?</AccordionTrigger>
                  <AccordionContent>
                    Your application should include an updated resume/CV, a tailored cover letter explaining your interest in the position, copies of your academic credentials, and any other documents specified in the job posting. Ensure all documents are clearly labeled with your name.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How long does the application process take?</AccordionTrigger>
                  <AccordionContent>
                    The timeline varies depending on the position and number of applicants. Generally, you can expect to hear from us within 2-3 weeks after the application deadline. The entire process, from application to offer, typically takes 4-6 weeks.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you offer relocation assistance?</AccordionTrigger>
                  <AccordionContent>
                    Yes, for certain positions, particularly senior academic and administrative roles, we offer relocation assistance. The details of the relocation package will be discussed during the final stages of the interview process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>What is the interview process like?</AccordionTrigger>
                  <AccordionContent>
                    Our interview process typically includes an initial screening interview (often virtual), followed by an in-person or panel interview. For academic positions, candidates may be asked to deliver a teaching demonstration or research presentation. Administrative roles may include skills assessments or case studies.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I apply for multiple positions?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you may apply for multiple positions if you meet the qualifications. However, we recommend focusing on roles that best match your skills and career goals. Please submit separate applications for each position you're interested in.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-[#f0f5fa] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#003366] mb-6">Have Questions?</h2>
            <p className="text-gray-700 mb-8">
              Our Human Resources team is here to help with any questions about careers at MAAUN.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building2 className="h-5 w-5 text-[#ff7f00] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Human Resources Department</p>
                      <p className="text-gray-600">MAAUN Administration Building</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#ff7f00] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">Maryam Abacha American University of Nigeria, Kabo, Kano State</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-[#ff7f00] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">careers@maaun.edu.ng</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FileSearch className="h-5 w-5 text-[#ff7f00] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
                    <Input type="email" placeholder="Your email address" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Subject</label>
                    <Input placeholder="Message subject" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
                    <textarea 
                      className="w-full rounded-md border border-gray-300 p-2 min-h-[100px]" 
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#003366] hover:bg-[#002244]">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#003366] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Explore current opportunities and take the first step toward a rewarding career at MAAUN.
          </p>
          <Button className="bg-[#ff7f00] hover:bg-[#e67300] text-lg px-8 py-6">
            View Open Positions
          </Button>
        </div>
      </div>
    </div>
  )
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#003366] mb-3 text-center">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  )
}

function JobCard({ title, department, location, type, posted, deadline }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#003366] mb-1">{title}</h3>
          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4 gap-y-2 mb-4 md:mb-0">
            <span className="flex items-center">
              <BriefcaseBusiness className="h-4 w-4 mr-1" /> {department}
            </span>
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" /> {location}
            </span>
            <span className="flex items-center">
              <BadgeCheck className="h-4 w-4 mr-1" /> {type}
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="text-sm text-gray-500">
            <p>Posted: {posted}</p>
            <p>Deadline: {deadline}</p>
          </div>
          <Button className="text-white bg-[#003366] hover:bg-[#002244]">
            Apply Now <MoveUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, name, position, image }) {
  return (
    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image 
            src={image} 
            alt={name} 
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-300">{position}</p>
        </div>
      </div>
      <p className="italic text-gray-100 mb-4">"{quote}"</p>
    </div>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-[#003366] text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-[#003366] mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
} 