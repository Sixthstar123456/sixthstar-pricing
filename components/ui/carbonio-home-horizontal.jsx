import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card,CardContent } from "./card"

gsap.registerPlugin(ScrollTrigger)

const HorizontalScrollCarousel = ({ items, title, subtitle }) => {
  const sectionRef = useRef(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const carouselWidth = carouselRef.current?.scrollWidth || 0
      const carouselSectionWidth = carouselRef.current?.offsetWidth || 0
      const distanceToScroll = carouselWidth - carouselSectionWidth

      // Animate the heading
      gsap.from(".carousel-heading", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".carousel-heading",
          start: "top 80%"
        }
      })

      // Horizontal scroll animation
      gsap.to(carouselRef.current, {
        x: -distanceToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom center",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden section-padding bg-white"
    >
      <div className="container mx-auto px-4 mb-12">
        <div className="carousel-heading max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title} <span className="gradient-text">{subtitle}</span>
          </h2>
          <p className="text-lg text-gray-600">
            SixthStar CRM provides everything you need to manage your leads
            effectively and close more deals.
          </p>
        </div>
      </div>

      <div className="relative">
        <div ref={carouselRef} className="flex ml-20 gap-6 overflow-visible">
          {items.map((item, index) => (
            <Card
              key={index}
              className="min-w-[300px] md:min-w-[380px] feature-card flex-shrink-0"
            >
              <CardContent className="p-6 flex flex-col items-start">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-left">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HorizontalScrollCarousel
