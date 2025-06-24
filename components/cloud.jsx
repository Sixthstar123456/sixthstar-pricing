import { motion } from "framer-motion"
import { cn } from "../lib/utils"

const CloudHost = ({
  className,
  delay = 0,
  duration = 6,
  size = "md",
  x = "0",
  y = "0",
  opacity = 0.8
}) => {
  const sizeClasses = {
    sm: "w-12 h-6",
    md: "w-20 h-10",
    lg: "w-32 h-16"
  }

  return (
    <motion.div
      className={cn(
        "absolute rounded-full bg-white filter blur-md",
        sizeClasses[size],
        className
      )}
      initial={{ x, y, opacity: 0 }}
      animate={{
        y: [y, `calc(${y} - 20px)`, y],
        opacity: opacity
      }}
      transition={{
        y: {
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay
        },
        opacity: {
          duration: 1,
          delay: delay
        }
      }}
    />
  )
}

export default CloudHost
