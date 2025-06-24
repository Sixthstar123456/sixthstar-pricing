"use client"
import { useState, useEffect, useRef } from "react"

import { Card,CardContent } from "./card"

import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "../../lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Manikandan",
    
    company: "Chrysalis Homeneeds Pvt. Ltd.",
    avatar: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746421323/Untitled_design_12_j9tvdf.png?height=80&width=80",
    content:
      "Professional guidance with unlimited resource availability. They allow you to easily scale the service at any time.",
    rating: 4.5
  },
  {
    id: 2,
    name: "Sethu Murugan",
    company: "Hinduja Leyland",
    avatar: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746421323/Untitled_design_12_j9tvdf.png?height=80&width=80",
    content:
      "Our e-commerce site had growth only after installing SSL certification. They give you complete guidance right from installation to changing the site into HTTPS.",
    rating: 5
  },
  {
    id: 3,
    name: "Richard",
    company: "Shankara Building Products Ltd.",
    avatar: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746421323/Untitled_design_12_j9tvdf.png?height=80&width=80",
    content:
      "Lower or increase your cloud storage based on your requirement since their service is redundant and flexible payment is available.",
    rating: 4
  },
  {
    id: 4,
    name: "Anitha",
    company: "Bhoomi and Buildings Pvt Ltd",
    avatar: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746421517/Untitled_design_13_bo4ptl.png?height=80&width=80",
    content:
      "Though we opted for shared hosting, the services didn’t change. They are versatile and provided us with the support system at its best.",
    rating: 4.5
  },
  {
    id: 5,
    name: "Ganapathy",
    role: "Product Manager",
    company: "Billroth Hospitals",
    avatar: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746421323/Untitled_design_12_j9tvdf.png?height=80&width=80",
    content:
      "Mail servers are a prodigy in Sixth Star. They have excellent features like blacklisting and abuse management where you won’t find any spams.",
    rating: 4
  },
  {
    id: 6,
    name: "Chalapathirao Sajjarao",
    company: "ROCKWORTH",
    avatar: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746421323/Untitled_design_12_j9tvdf.png?height=80&width=80",
    content:
      "A distinct and cost-effective solution can be acquired here. It is sure that your dedicated server will be power-packed with resources that have outperforming features.",
    rating: 5
  }
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef(null)
  const itemsPerPage = 3
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + 1
      return nextIndex > maxIndex ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex - 1
      return nextIndex < 0 ? maxIndex : nextIndex
    })
  }

  const goToSlide = index => {
    setCurrentIndex(index > maxIndex ? maxIndex : index)
  }

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 8000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }
  }, [isAutoplay, currentIndex])

  const handleMouseEnter = () => {
    setIsAutoplay(false)
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  const handleMouseLeave = () => {
    setIsAutoplay(true)
  }

  // Calculate number of pagination dots needed
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const paginationDots = Array.from({ length: totalPages }, (_, i) => i)

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-4 py-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      

      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>

      <div className="overflow-hidden relative bg-white">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
          }}
        >
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-3"
            >
              <Card className="border border-gray-200  transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="w-16 h-16 border-4 border-white shadow-md">
                        <AvatarImage
                          src={testimonial.avatar || "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746421323/Untitled_design_12_j9tvdf.png"}
                          
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={cn(
                            "w-4 h-4",
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 fill-gray-300"
                          )}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-700 italic flex-grow">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      <div className="flex justify-center mt-8 gap-2">
        {paginationDots.map(index => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              Math.floor(currentIndex / itemsPerPage) === index
                ? "bg-blue-600 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
