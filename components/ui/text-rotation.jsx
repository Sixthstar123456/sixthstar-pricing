"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function HeadingAnimation() {
  const words = ["Secure.", "Protection.", "Privacy."]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2000) // change word every 2 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center h-8">
      Choose{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mx-1 text-blue-600 font-bold"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
     Choose Sixthstar Technologies
    </h3>
  )
}
