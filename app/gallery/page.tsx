"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, X } from "lucide-react"
import { ImageSlider } from "@/components/image-slider"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const images = [
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480162/photo_2025-02-24_15-04-27_3_zfqctl.jpg",
      caption: "Campus Main Building"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480163/photo_2025-02-24_15-04-28_2_r3pkld.jpg",
      caption: "Computer Laboratory"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480192/photo_2025-02-24_15-04-41_2_vjp402.jpg",
      caption: "Student Collaboration Space"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480190/photo_2025-02-24_15-04-40_kvvb7f.jpg",
      caption: "Campus Aerial View"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480188/photo_2025-02-24_15-04-39_odlwrv.jpg",
      caption: "Engineering Workshop"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480179/photo_2025-02-24_15-04-35_pmjwom.jpg",
      caption: "Polytechnic Administrative Block"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480180/photo_2025-02-24_15-04-35_3_pyc3bs.jpg",
      caption: "Student Recreation Center"
    },
    {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480178/photo_2025-02-24_15-04-33_pryrpk.jpg",
      caption: "Library Interior"
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
    },
  ]

  const featuredImages = images.slice(0, 5)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#003366] text-white py-6">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <Button variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Featured Slider */}
      <div className="w-full">
        <ImageSlider images={featuredImages} height="h-[500px]" />
      </div>

      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#003366]">Campus Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Explore the Federal Polytechnic Kabo campus through our gallery of images showcasing our facilities, 
              buildings, and learning environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-64">
                  <Image 
                    src={image.url} 
                    alt={image.caption} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg text-[#003366]">{image.caption}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              These images showcase our commitment to providing a conducive environment for 
              learning, research, and social activities. Our campus is equipped with modern facilities 
              to support our students' academic and personal development.
            </p>
            <Button className="bg-[#003366] hover:bg-[#002244]" asChild>
              <Link href="/contact">Contact Us for Campus Tour</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] relative">
            <div className="relative h-[80vh] w-screen max-w-5xl">
              <Image 
                src={images[selectedImage].url} 
                alt={images[selectedImage].caption}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white text-center">
              <p className="text-xl">{images[selectedImage].caption}</p>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-[#002244] text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Federal Polytechnic Kabo. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
} 