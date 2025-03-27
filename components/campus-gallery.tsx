"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480162/photo_2025-02-24_15-04-27_3_zfqctl.jpg",
    caption: "Campus Main Building"
  },
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480163/photo_2025-02-24_15-04-28_2_r3pkld.jpg",
    caption: "Computer Laboratory"
  },
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480190/photo_2025-02-24_15-04-40_kvvb7f.jpg",
    caption: "Campus Aerial View"
  },
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480179/photo_2025-02-24_15-04-35_pmjwom.jpg",
    caption: "Polytechnic Administrative Block"
  },
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480178/photo_2025-02-24_15-04-33_pryrpk.jpg",
    caption: "Library Interior"
  },
  {
    url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1740480172/photo_2025-02-24_15-04-31_2_ie6f75.jpg",
    caption: "Science Laboratory"
  },
]

export function CampusGallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setCurrentIndex(null)
    document.body.style.overflow = 'auto'
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === null) return null
      return prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    })
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === null) return null
      return prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    })
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003366]">Campus Gallery</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our beautiful campus and facilities through these images
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64">
                <Image 
                  src={image.url} 
                  alt={image.caption} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-100 transition-opacity">
                <div className="p-4 text-white">
                  <h3 className="font-semibold text-lg">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-[#003366] hover:bg-[#002244]" asChild>
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            className="absolute left-4 text-white hover:text-gray-300"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          
          <div className="max-w-5xl max-h-[90vh] relative">
            <div className="relative h-[80vh] w-screen max-w-5xl">
              <Image 
                src={galleryImages[currentIndex].url} 
                alt={galleryImages[currentIndex].caption}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white text-center">
              <p className="text-xl">{galleryImages[currentIndex].caption}</p>
            </div>
          </div>
          
          <button 
            className="absolute right-4 text-white hover:text-gray-300"
            onClick={goToNext}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  )
} 