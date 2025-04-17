import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Award, 
  BookOpen, 
  Building, 
  Calendar, 
  Clock, 
  FileText, 
  GraduationCap, 
  Heart,
  Mail as MailIcon,
  MapPin,
  MessagesSquare, 
  Phone as PhoneIcon,
  Search, 
  Share2, 
  User, 
  Users,
  ArrowRight
} from "lucide-react"

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#003366] text-white relative">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">MAAUN Alumni Network</h1>
            <p className="text-xl mb-8">
              Connect with fellow graduates, access exclusive resources, and stay engaged with your alma mater.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#ff7f00] hover:bg-[#e67300] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Join the Network</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 transition-all duration-300">Find Alumni</Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Alumni gathering" 
            fill 
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/70 to-transparent"></div>
        </div>
      </div>

      {/* Alumni Benefits */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">Benefits of the Alumni Network</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Being part of the MAAUN Alumni Network offers numerous advantages to help you stay connected and advance your career.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            icon={<Users className="h-10 w-10 text-[#ff7f00]" />}
            title="Networking Opportunities"
            description="Connect with thousands of alumni worldwide through events and our online directory."
          />
          <BenefitCard
            icon={<Building className="h-10 w-10 text-[#ff7f00]" />}
            title="Career Resources"
            description="Access job listings, career counseling, and professional development workshops."
          />
          <BenefitCard
            icon={<BookOpen className="h-10 w-10 text-[#ff7f00]" />}
            title="Lifelong Learning"
            description="Enjoy discounted rates for continuing education courses and special seminars."
          />
          <BenefitCard
            icon={<Award className="h-10 w-10 text-[#ff7f00]" />}
            title="Recognition"
            description="Get featured in our alumni spotlight and receive awards for outstanding achievements."
          />
        </div>
      </div>

      {/* Alumni Directory */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-[#003366] mb-4">Find Alumni</h2>
              <p className="text-gray-600 mb-6">
                Search our alumni directory to reconnect with old classmates or find professionals in your field.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Search className="h-5 w-5 mr-2 text-[#ff7f00]" />
                  <span>Search Filters</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 flex items-center">
                      <User className="h-4 w-4 mr-2 text-[#ff7f00]" />
                      Name
                    </label>
                    <Input placeholder="Enter name" className="focus:ring-[#ff7f00]/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2 text-[#ff7f00]" />
                      Graduation Year
                    </label>
                    <Input type="number" placeholder="e.g. 2018" className="focus:ring-[#ff7f00]/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-[#ff7f00]" />
                      Faculty/Department
                    </label>
                    <select className="w-full rounded-md border border-gray-300 p-2 focus:ring-[#ff7f00]/20 focus:border-[#ff7f00]">
                      <option value="">All Departments</option>
                      <option value="business">Business Administration</option>
                      <option value="engineering">Engineering</option>
                      <option value="computing">Computing & IT</option>
                      <option value="health">Health Sciences</option>
                      <option value="arts">Arts & Humanities</option>
                      <option value="science">Natural Sciences</option>
                      <option value="education">Education</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 flex items-center">
                      <Building className="h-4 w-4 mr-2 text-[#ff7f00]" />
                      Industry
                    </label>
                    <select className="w-full rounded-md border border-gray-300 p-2 focus:ring-[#ff7f00]/20 focus:border-[#ff7f00]">
                      <option value="">All Industries</option>
                      <option value="tech">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="education">Education</option>
                      <option value="government">Government</option>
                      <option value="nonprofit">Non-profit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#ff7f00]" />
                      Location
                    </label>
                    <Input placeholder="City, State, or Country" className="focus:ring-[#ff7f00]/20" />
                  </div>
                  <Button className="w-full bg-[#003366] hover:bg-[#002244] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    <Search className="h-4 w-4 mr-2" /> Search Alumni
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium">Featured Alumni</h3>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AlumniCard
                  name="Dr. Amina Yusuf"
                  image="https://randomuser.me/api/portraits/women/45.jpg"
                  graduationYear="2010"
                  department="Medicine"
                  position="Cardiologist at Federal Medical Center"
                  location="Lagos, Nigeria"
                />
                <AlumniCard
                  name="Ibrahim Mohammed"
                  image="https://randomuser.me/api/portraits/men/32.jpg"
                  graduationYear="2015"
                  department="Computer Science"
                  position="Software Engineer at Microsoft"
                  location="Abuja, Nigeria"
                />
                <AlumniCard
                  name="Fatima Abdullahi"
                  image="https://randomuser.me/api/portraits/women/68.jpg"
                  graduationYear="2012"
                  department="Business Administration"
                  position="CEO at TechFinance Ltd"
                  location="Kano, Nigeria"
                />
                <AlumniCard
                  name="Dr. Yusuf Ahmed"
                  image="https://randomuser.me/api/portraits/men/52.jpg"
                  graduationYear="2008"
                  department="Engineering"
                  position="Regional Director at Shell"
                  location="Port Harcourt, Nigeria"
                />
              </div>
              <div className="mt-8 text-center">
                <Button className="bg-[#003366] hover:bg-[#002244] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Load More Alumni</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events & Reunions */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">Events & Reunions</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Stay connected with fellow alumni through our exciting events and reunions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            title="Annual Alumni Homecoming"
            date="October 15-17, 2023"
            location="MAAUN Main Campus"
            image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            description="Join us for three days of networking, campus tours, and celebrations featuring distinguished alumni speakers."
          />
          <EventCard
            title="Class of 2013 Reunion"
            date="September 8, 2023"
            location="Sheraton Hotel, Abuja"
            image="https://images.unsplash.com/photo-1511795409834-432f88e5a2b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            description="A special evening to celebrate the 10-year anniversary of the Class of 2013. Dinner, dancing, and reminiscing."
          />
          <EventCard
            title="Alumni Business Networking"
            date="August 25, 2023"
            location="Virtual Event"
            image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            description="Connect with fellow alumni entrepreneurs and professionals in this virtual networking session."
          />
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-all duration-300">
            View All Events
          </Button>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-[#f0f5fa] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-4">Alumni Success Stories</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Be inspired by the achievements of our distinguished alumni around the globe.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SuccessStoryCard
              image="https://randomuser.me/api/portraits/women/33.jpg"
              name="Dr. Habiba Mohammed"
              achievement="Dr. Habiba has become a leading researcher in infectious diseases, contributing significantly to malaria research in sub-Saharan Africa. Her work has been recognized by the World Health Organization, and she received the Nigerian Medical Excellence Award in 2020."
            />
            <SuccessStoryCard
              image="https://randomuser.me/api/portraits/men/76.jpg"
              name="Emeka Okonkwo"
              achievement="Emeka founded one of Nigeria's most successful tech startups, NovaTech, which now employs over 200 people and has secured $15 million in venture capital. His company specializes in fintech solutions that have revolutionized banking access in rural areas."
            />
          </div>
          <div className="text-center mt-10">
            <Button className="bg-[#003366] hover:bg-[#002244] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">View More Success Stories</Button>
          </div>
        </div>
      </div>

      {/* Give Back */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Give Back to MAAUN</h2>
            <p className="text-gray-700 mb-6">
              As alumni, you can make a lasting impact on the future of MAAUN and its students. Your support helps provide scholarships, improve facilities, and enhance the quality of education.
            </p>
            <div className="space-y-4 mb-6">
              <InitiativeCard
                icon={<Heart className="h-5 w-5 text-[#ff7f00] mt-1 mr-3 flex-shrink-0" />}
                title="Scholarship Fund"
                description="Support deserving students with financial needs through scholarships."
              />
              <InitiativeCard
                icon={<Heart className="h-5 w-5 text-[#ff7f00] mt-1 mr-3 flex-shrink-0" />}
                title="Campus Development"
                description="Contribute to building and upgrading campus facilities."
              />
              <InitiativeCard
                icon={<Heart className="h-5 w-5 text-[#ff7f00] mt-1 mr-3 flex-shrink-0" />}
                title="Research Support"
                description="Fund research initiatives that address critical challenges."
              />
              <InitiativeCard
                icon={<Heart className="h-5 w-5 text-[#ff7f00] mt-1 mr-3 flex-shrink-0" />}
                title="Mentorship Program"
                description="Volunteer to mentor current students in your field of expertise."
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#ff7f00] hover:bg-[#e67300] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Make a Donation</Button>
              <Button variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-all duration-300">
                Become a Mentor
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1591522810850-58128c5fb089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
              alt="MAAUN students"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/70 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Newsletter & Contact */}
      <div className="bg-[#003366] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
              <p className="mb-6">
                Subscribe to our alumni newsletter to stay updated with the latest news, events, and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:border-[#ff7f00] focus:ring-[#ff7f00]/20"
                />
                <Button className="bg-[#ff7f00] hover:bg-[#e67300] whitespace-nowrap transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Subscribe
                </Button>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Alumni Relations Office</h2>
              <p className="mb-4">
                Have questions or need assistance? Reach out to our dedicated alumni relations team.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center hover:pl-2 transition-all duration-300">
                  <User className="h-5 w-5 mr-2 text-[#ff7f00]" />
                  <span>Mrs. Fatima Bello, Alumni Relations Director</span>
                </div>
                <div className="flex items-center hover:pl-2 transition-all duration-300">
                  <MailIcon className="h-5 w-5 mr-2 text-[#ff7f00]" />
                  <span>alumni@maaun.edu.ng</span>
                </div>
                <div className="flex items-center hover:pl-2 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2 text-[#ff7f00]" />
                  <span>+234 812 345 6789</span>
                </div>
              </div>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300">
                <MessagesSquare className="h-4 w-4 mr-2" /> Send a Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-center text-[#ff7f00] text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#003366] mb-3 text-center">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  )
}

function AlumniCard({ name, image, graduationYear, department, position, location }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#003366] mb-2">{name}</h3>
        <p className="text-gray-700 mb-1">Class of {graduationYear} • {department}</p>
        <p className="text-gray-700 mb-3">{position}</p>
        <div className="flex items-center text-gray-600">
          <MapPin size={16} className="mr-1 text-[#ff7f00]" />
          <span>{location}</span>
        </div>
        <div className="mt-4 flex space-x-2">
          <Button size="sm" variant="outline" className="flex-1 hover:bg-[#003366] hover:text-white transition-colors duration-300">
            <User size={16} className="mr-1" />
            View Profile
          </Button>
          <Button size="sm" variant="outline" className="flex-1 hover:bg-[#ff7f00] hover:text-white transition-colors duration-300">
            <MailIcon size={16} className="mr-1" />
            Message
          </Button>
        </div>
      </div>
    </div>
  )
}

function EventCard({ title, date, location, image, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#003366] mb-2">{title}</h3>
        <div className="flex items-center mb-2 text-gray-700">
          <Calendar size={16} className="mr-2 text-[#ff7f00]" />
          <span>{date}</span>
        </div>
        <div className="flex items-center mb-3 text-gray-700">
          <MapPin size={16} className="mr-2 text-[#ff7f00]" />
          <span>{location}</span>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <Button variant="outline" className="w-full hover:bg-[#003366] hover:text-white transition-colors duration-300">Learn More</Button>
      </div>
    </div>
  )
}

function SuccessStoryCard({ image, name, achievement }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#003366] mb-2">{name}</h3>
        <p className="text-gray-700">{achievement}</p>
        <Button variant="link" className="p-0 mt-2 text-[#ff7f00] hover:text-[#ff7f00]/80 group transition-colors duration-300">
          Read Full Story
          <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  )
}

function InitiativeCard({ icon, title, description }) {
  return (
    <div className="flex space-x-4 items-start p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
      <div className="text-[#ff7f00] text-2xl">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold text-[#003366] mb-1">{title}</h4>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
} 