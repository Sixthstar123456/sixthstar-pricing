"use client"
import { useState, useEffect, useRef } from "react"
import { Card } from "../ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../../lib/utils"

const testimonials = [
  {
    id: 1,
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747026287/ryption_m6j05p.png",
    title: "Encryption​​"
  },
  {
    id: 2,
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747026288/ryption_1_qne7u0.png",
    title: "Multi-factor authentication"
  },
  {
    id: 3,
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747026291/ryption_2_h05g6p.png",
    title: "Spam filtering"
  },
  {
    id: 4,
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747026293/ryption_3_g38ryr.png",
    title: "Device management​"
  },
  {
    id: 5,
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747026293/ryption_4_xpbc3q.png",
    title: "Reporting and auditing"
  },
  {
    id: 6,
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747026295/ryption_5_mdi3ur.png",
    title: "Phishing protection"
  }
]

export function SecurityFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef(null)
  const itemsPerPage = 3
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1 > maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 < 0 ? maxIndex : prevIndex - 1))
  }

  const goToSlide = index => {
    setCurrentIndex(index > maxIndex ? maxIndex : index)
  }

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => nextSlide(), 8000)
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

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const paginationDots = Array.from({ length: totalPages }, (_, i) => i)

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-4 py-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
          }}
        >
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-3 flex flex-col items-center"
            >
              <Card
                className="h-[300px] w-full rounded-xl overflow-hidden bg-center bg-cover relative"
                style={{
                  backgroundImage: `url(${testimonial.bgImage})`,
                }}
              />
              {/* Title below image */}
              <div className="mt-4 text-center text-lg font-medium text-gray-800">
                {testimonial.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
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

      {/* Pagination Dots */}
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

export default SecurityFeatures
