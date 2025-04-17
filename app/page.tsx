import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  ChevronRight,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Search,
  Twitter,
  Users,
  Youtube,
} from "lucide-react"
import { ImageSlider } from "@/components/image-slider"
import { CampusTourSlider } from "@/components/campus-tour-slider"

export default function Home() {
  const heroSlides = [
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480162/photo_2025-02-24_15-04-27_3_zfqctl.jpg",
      caption: "Welcome to Federal Polytechnic Kabo"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480190/photo_2025-02-24_15-04-40_kvvb7f.jpg",
      caption: "Excellence in Technical Education"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480179/photo_2025-02-24_15-04-35_pmjwom.jpg",
      caption: "Developing Skills for the Future"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480178/photo_2025-02-24_15-04-33_pryrpk.jpg",
      caption: "State-of-the-art Learning Facilities"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480180/photo_2025-02-24_15-04-35_3_pyc3bs.jpg",
      caption: "A Vibrant Campus Community"
    }
  ]

  const tourImages = [
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480163/photo_2025-02-24_15-04-28_2_r3pkld.jpg",
      caption: "Computer Laboratory"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480192/photo_2025-02-24_15-04-41_2_vjp402.jpg",
      caption: "Student Collaboration Space"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480188/photo_2025-02-24_15-04-39_odlwrv.jpg",
      caption: "Engineering Workshop"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480177/photo_2025-02-24_15-04-34_taqqyy.jpg",
      caption: "Lecture Hall"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480177/photo_2025-02-24_15-04-33_3_t651yc.jpg",
      caption: "Student Hostel Block"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480177/photo_2025-02-24_15-04-35_2_iaf1fg.jpg",
      caption: "Sports Facility"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480174/photo_2025-02-24_15-04-32_vceag7.jpg",
      caption: "Outdoor Study Area"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480172/photo_2025-02-24_15-04-31_2_ie6f75.jpg",
      caption: "Science Laboratory"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480124/photo_2025-02-24_15-03-52_2_k5z86a.jpg",
      caption: "Campus Garden"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white py-2 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>+234 803 123 4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@fpkabo.edu.ng</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="/alumni" className="hover:underline">
              Alumni
            </Link>
            <Link href="/careers" className="hover:underline">
              Careers
            </Link>
            <Link href="/admin/login" className="hover:underline font-medium">
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://res.cloudinary.com/dc5qncppu/image/upload/v1740480225/FEDPOLYLOGO_dt7a5r.jpg"
                alt="FPK Logo"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-[#003366]">Federal Polytechnic</h1>
                <h2 className="text-sm text-[#003366]">Kabo, Kano State</h2>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-[#003366] font-medium hover:text-[#0056b3]">
                Home
              </Link>
              <Link href="/about" className="text-[#003366] font-medium hover:text-[#0056b3]">
                About
              </Link>
              <Link href="/academics" className="text-[#003366] font-medium hover:text-[#0056b3]">
                Academics
              </Link>
              <Link href="/admissions" className="text-[#003366] font-medium hover:text-[#0056b3]">
                Admissions
              </Link>
              <Link href="/gallery" className="text-[#003366] font-medium hover:text-[#0056b3]">
                Gallery
              </Link>
              <Link href="/contact" className="text-[#003366] font-medium hover:text-[#0056b3]">
                Contact
              </Link>
              <Button variant="outline" size="icon" className="ml-2">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="default" className="ml-2 bg-[#003366] hover:bg-[#002244]" asChild>
                <Link href="/admin/login">Admin Login</Link>
              </Button>
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <Button className="md:hidden" variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="default" size="sm" className="bg-[#003366] hover:bg-[#002244]" asChild>
                <Link href="/admin/login">Admin</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with Slider */}
        <section className="relative">
          <div className="w-full">
            <ImageSlider images={heroSlides} height="h-[500px]" />
            <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-4 px-4">
              <Button className="bg-[#ff7f00] hover:bg-[#e67300] text-white">Apply Now</Button>
              <Button variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30">
                Explore Programs
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-white py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f0f5fa] p-6 rounded-lg shadow-sm flex items-start">
                <GraduationCap className="h-10 w-10 text-[#003366] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">Admissions</h3>
                  <p className="text-gray-600 mb-4">Learn about our admission process and requirements</p>
                  <Link href="/admissions" className="text-[#ff7f00] font-medium flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#f0f5fa] p-6 rounded-lg shadow-sm flex items-start">
                <Users className="h-10 w-10 text-[#003366] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">Student Life</h3>
                  <p className="text-gray-600 mb-4">Discover the vibrant campus community and activities</p>
                  <Link href="/student-life" className="text-[#ff7f00] font-medium flex items-center">
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-[#f0f5fa] p-6 rounded-lg shadow-sm flex items-start">
                <Calendar className="h-10 w-10 text-[#003366] mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-[#003366] mb-2">Events</h3>
                  <p className="text-gray-600 mb-4">Stay updated with polytechnic events and activities</p>
                  <Link href="/events" className="text-[#ff7f00] font-medium flex items-center">
                    View Calendar <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#003366] mb-6">About FPK</h2>
                <p className="text-gray-700 mb-6">
                  Federal Polytechnic Kabo (FPK) is a public polytechnic located in Kabo, Kano State, Nigeria.
                  Founded with a vision to provide quality technical education that meets industry standards, FPK is
                  committed to academic excellence, research, and community service.
                </p>
                <p className="text-gray-700 mb-6">
                  Our polytechnic offers a diverse range of National Diploma (ND) and Higher National Diploma (HND) programs across various
                  disciplines including Engineering, Technology, Applied Sciences, and Business. With practical-oriented facilities and experienced faculty, we prepare our students to become skilled professionals.
                </p>
                <Button className="bg-[#003366] hover:bg-[#002244]">Learn More About Us</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="FPK Main Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#003366]">Our Academic Programs</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Discover our diverse range of undergraduate and postgraduate programs designed to prepare you for
                success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Department of Computing",
                  programs: [
                    "Computer Science",
                    "Software Engineering",
                    "Computer Engineering",
                    "Information Technology",
                    "Data Processing",
                  ],
                },
                {
                  title: "Department of Engineering",
                  programs: [
                    "Civil Engineering",
                    "Electrical Engineering",
                    "Mechanical Engineering",
                    "Agricultural Engineering",
                    "Chemical Engineering",
                  ],
                },
                {
                  title: "Department of Technology",
                  programs: [
                    "Building Technology",
                    "Architectural Technology",
                    "Surveying & Geo-Informatics",
                    "Estate Management",
                    "Quantity Surveying",
                  ],
                },
                {
                  title: "Department of Business",
                  programs: [
                    "Accounting",
                    "Business Administration",
                    "Banking & Finance",
                    "Marketing",
                    "Office Technology Management",
                  ],
                },
                {
                  title: "Department of Applied Sciences",
                  programs: [
                    "Science Laboratory Technology",
                    "Food Technology",
                    "Agricultural Technology",
                    "Nutrition & Dietetics",
                    "Environmental Science",
                  ],
                },
                {
                  title: "Department of Vocational Studies",
                  programs: ["Mass Communication", "Tourism & Hospitality", "Catering & Hotel Management", "Fashion Design", "Arts & Design"],
                },
              ].map((faculty, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-[#003366] mb-4">{faculty.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {faculty.programs.map((program, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ChevronRight className="h-4 w-4 text-[#ff7f00] mr-2" />
                        {program}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/academics/${faculty.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[#ff7f00] font-medium flex items-center"
                  >
                    View Details <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-[#003366] hover:bg-[#002244]">View All Programs</Button>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#003366]">News & Events</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Stay updated with the latest happenings at FPK.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "FPK Hosts National Technical Education Conference",
                  date: "June 15, 2023",
                  excerpt:
                    "The polytechnic recently hosted a national conference on technical education with participants from across Nigeria.",
                  image:
                    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80",
                },
                {
                  title: "New Training Partnership with Industry Leaders",
                  date: "May 28, 2023",
                  excerpt:
                    "FPK has signed new training partnership agreements with several industry leaders to collaborate on practical skill development.",
                  image:
                    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80",
                },
                {
                  title: "FPK Students Win National Innovation Competition",
                  date: "April 10, 2023",
                  excerpt:
                    "A team of FPK students emerged as winners in the National Technical Innovation Competition held in Abuja.",
                  image:
                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80",
                },
              ].map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative">
                    <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                    <h3 className="text-xl font-semibold text-[#003366] mb-3">{news.title}</h3>
                    <p className="text-gray-700 mb-4">{news.excerpt}</p>
                    <Link href="/news" className="text-[#ff7f00] font-medium flex items-center">
                      Read More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white">
                View All News & Events
              </Button>
            </div>
          </div>
        </section>

        {/* Campus Life Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#003366]">Campus Life</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Experience the vibrant and diverse community at FPK.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80"
                  alt="FPK Library"
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">Modern Library</h3>
                    <p className="text-sm">Access to thousands of books and digital resources</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80"
                  alt="FPK Laboratory"
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">Advanced Laboratories</h3>
                    <p className="text-sm">State-of-the-art facilities for research and learning</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80"
                  alt="FPK Sports Facilities"
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">Sports Facilities</h3>
                    <p className="text-sm">Multiple sports facilities for physical development</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=400&q=80"
                  alt="FPK Student Hostel"
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">Student Accommodation</h3>
                    <p className="text-sm">Comfortable and secure living spaces for students</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button className="bg-[#003366] hover:bg-[#002244]">Explore Campus Life</Button>
            </div>
          </div>
        </section>

        {/* Campus Tour Section */}
        <CampusTourSlider images={tourImages} />

        {/* Call to Action */}
        <section className="bg-[#003366] py-16 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Begin Your Journey at FPK</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step towards a bright future. Apply now for admission to our programs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#ff7f00] hover:bg-[#e67300] text-white">Apply for Admission</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Request Information
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#002244] text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                  <span>Federal Polytechnic Kabo, Kabo, Kano State, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+234 803 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>info@fpkabo.edu.ng</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-[#ff7f00]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/academics" className="hover:text-[#ff7f00]">
                    Academic Programs
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="hover:text-[#ff7f00]">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/student-life" className="hover:text-[#ff7f00]">
                    Student Life
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#ff7f00]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/library" className="hover:text-[#ff7f00]">
                    Library
                  </Link>
                </li>
                <li>
                  <Link href="/e-learning" className="hover:text-[#ff7f00]">
                    E-Learning Portal
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#ff7f00]">
                    Campus Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/calendar" className="hover:text-[#ff7f00]">
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-[#ff7f00]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/alumni" className="hover:text-[#ff7f00]">
                    Alumni
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-[#ff7f00]">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-6">
                <Link
                  href="https://facebook.com"
                  className="bg-white/10 hover:bg-[#ff7f00] p-2 rounded-full transition-colors duration-300"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="bg-white/10 hover:bg-[#ff7f00] p-2 rounded-full transition-colors duration-300"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="bg-white/10 hover:bg-[#ff7f00] p-2 rounded-full transition-colors duration-300"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="bg-white/10 hover:bg-[#ff7f00] p-2 rounded-full transition-colors duration-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="https://youtube.com"
                  className="bg-white/10 hover:bg-[#ff7f00] p-2 rounded-full transition-colors duration-300"
                >
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for updates</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md text-gray-900 w-full" />
                <Button className="bg-[#ff7f00] hover:bg-[#e67300] rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Federal Polytechnic Kabo. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

