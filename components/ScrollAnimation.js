import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ScrollAnimation = ({ children, className }) => {
  const ref = useRef(null);

  // useInView hook detects when the element is in view
  const { inView } = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    threshold: 0.5,    // Trigger when 50% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state before the animation
      animate={{
        opacity: inView ? 1 : 0, // Fade in when in view
        y: inView ? 0 : 50, // Move the element upwards when it comes into view
      }}
      transition={{
        type: "spring", // Smooth spring-based animation
        stiffness: 50,
        damping: 25,
        duration: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;