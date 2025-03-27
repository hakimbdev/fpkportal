"use client"

import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Link from "next/link"

type CampusTourSliderProps = {
  images: {
    url: string
    caption: string
  }[]
  autoplay?: boolean
  interval?: number
}

export function CampusTourSlider({ 
  images, 
  autoplay = true, 
  interval = 6000
}: CampusTourSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Autoplay functionality
  useEffect(() => {
    if (!emblaApi || !autoplay) return

    const intervalId = setInterval(() => {
      emblaApi.scrollNext()
    }, interval)

    return () => {
      clearInterval(intervalId)
    }
  }, [emblaApi, autoplay, interval])

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003366]">Campus Tour</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Take a virtual tour through our state-of-the-art facilities and beautiful campus grounds
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md group h-full">
                    <div className="relative h-64">
                      <Image 
                        src={image.url} 
                        alt={image.caption} 
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-[#003366]">{image.caption}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border-gray-200 text-gray-700 hover:bg-gray-100 shadow-md z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border-gray-200 text-gray-700 hover:bg-gray-100 shadow-md z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="text-center mt-10">
          <Button className="bg-[#003366] hover:bg-[#002244]" asChild>
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 