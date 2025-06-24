"use client"

import { Card } from "./card"

const testimonials = [
  {
    id: 1,
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741252838/Positive_snagss.jpg",
  },
  {
    id: 2,
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741252980/Positive_1_xnrslh.jpg",
  },
  {
    id: 3,
    bgImage: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741252983/Positive_2_apkoik.jpg",
  }
]

export function SSLTypesGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="h-[300px] overflow-hidden bg-center bg-no-repeat bg-contain relative !border-none shadow-none rounded-xl"
            style={{
              backgroundImage: `url(${testimonial.bgImage})`,
            }}
          >
            <div className="absolute inset-0 " />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SSLTypesGrid
