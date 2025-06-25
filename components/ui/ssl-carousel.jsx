"use client"

import { Card } from "./card"

const testimonials = [
  {
    id: 1,
    title: "Positive SSL",
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750825732/new_mo2t5w.png",
  },
  {
    id: 2,
    title: "Wildcard SSL",
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750825733/new_1_oczqps.png",
  },
  {
    id: 3,
    title: "Multi Domain SSL",
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1750825736/new_2_es1kb6.png",
  }
]

export function SSLTypesGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="relative h-[300px] bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div
              className="w-full h-full bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${testimonial.bgImage})`,
              }}
            />

            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-2 px-4 text-sm font-semibold">
              {testimonial.title}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SSLTypesGrid
