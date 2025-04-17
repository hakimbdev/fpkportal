"use client";

import Layout from "@/components/layout/layout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Layout>
      <div className="relative bg-blue-600 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('/placeholder.jpg')" }}
        />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MAAUN</h1>
          <p className="text-xl md:max-w-2xl">
            Discover our rich history, mission, values, and commitment to excellence in education.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                Maryam Abacha American University of Nigeria is dedicated to fostering an environment where academic excellence, innovative research, and personal growth converge. Our mission is to empower students with knowledge, skills, and values that prepare them to be ethical leaders and positive contributors to society.
              </p>
              <h2 className="text-3xl font-bold mb-4 mt-8">Our Vision</h2>
              <p className="text-gray-700">
                To be a leading institution of higher learning that transforms lives, advances knowledge, and creates positive change locally and globally. We envision a community of scholars and learners who embrace diversity, promote inclusivity, and drive innovation to address the complex challenges of our time.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80 w-full">
                <Image 
                  src="/placeholder.jpg" 
                  alt="MAAUN Library" 
                  fill 
                  style={{objectFit: "cover"}} 
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* History */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 font-bold text-xl text-blue-600 mb-2 md:mb-0">2012</div>
                <div className="md:w-3/4 text-gray-700">
                  <p>Founded as Maryam Abacha American University with a vision to provide world-class education in Nigeria.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 font-bold text-xl text-blue-600 mb-2 md:mb-0">2015</div>
                <div className="md:w-3/4 text-gray-700">
                  <p>Expanded to include the School of Business and the School of Humanities, growing our academic offerings.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 font-bold text-xl text-blue-600 mb-2 md:mb-0">2018</div>
                <div className="md:w-3/4 text-gray-700">
                  <p>Established the Medical School and Research Center, marking a significant expansion into health sciences.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 font-bold text-xl text-blue-600 mb-2 md:mb-0">2020</div>
                <div className="md:w-3/4 text-gray-700">
                  <p>Opened the Institute for Technology and Innovation, focusing on computer science, engineering, and digital technology.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 font-bold text-xl text-blue-600 mb-2 md:mb-0">2023</div>
                <div className="md:w-3/4 text-gray-700">
                  <p>Launched the Center for Global Studies and expanded online learning programs, reaching students worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Academic Excellence</h3>
              <p className="text-gray-700">
                We pursue the highest standards of teaching, learning, and scholarship in all our endeavors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Integrity</h3>
              <p className="text-gray-700">
                We uphold honesty, fairness, and ethical behavior in all our actions and interactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Diversity & Inclusion</h3>
              <p className="text-gray-700">
                We embrace and celebrate our differences, creating a welcoming community for all.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Innovation</h3>
              <p className="text-gray-700">
                We foster creativity, critical thinking, and the exploration of new ideas and approaches.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Global Citizenship</h3>
              <p className="text-gray-700">
                We develop responsible citizens who contribute positively to their communities and the world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-600">Sustainability</h3>
              <p className="text-gray-700">
                We are committed to environmental stewardship and creating a sustainable future.
              </p>
            </div>
          </div>
        </div>
        
        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">University Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <div className="relative w-full h-full">
                  <Image 
                    src="/placeholder-user.jpg" 
                    alt="University President" 
                    fill 
                    style={{objectFit: "cover"}} 
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Prof. Adamu Abubakar Gwarzo</h3>
              <p className="text-blue-600 mb-3">President</p>
              <p className="text-gray-700 text-sm">
                Leading MAAUN since 2012 with a focus on innovation and global partnerships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <div className="relative w-full h-full">
                  <Image 
                    src="/placeholder-user.jpg" 
                    alt="University Provost" 
                    fill 
                    style={{objectFit: "cover"}} 
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Habib Awais Abubakar</h3>
              <p className="text-blue-600 mb-3">Provost</p>
              <p className="text-gray-700 text-sm">
                Overseeing academic affairs with expertise in creating interdisciplinary programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <div className="relative w-full h-full">
                  <Image 
                    src="/placeholder-user.jpg" 
                    alt="Dean of Students" 
                    fill 
                    style={{objectFit: "cover"}} 
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Amina Muhammad</h3>
              <p className="text-blue-600 mb-3">Dean of Students</p>
              <p className="text-gray-700 text-sm">
                Committed to enhancing the student experience and fostering a supportive community.
              </p>
            </div>
          </div>
        </div>
        
        {/* Campus Map */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Campus Map</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.jpg" 
                alt="MAAUN Campus Map" 
                fill 
                style={{objectFit: "cover"}} 
              />
            </div>
            <div className="mt-4 text-center">
              <a 
                href="/documents/campus-map.pdf" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Download Campus Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 