import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import CloudHost from "../cloud";

const ConBanner = () => {
  return (
<div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-8 pt-40">
{/* Clouds */}
      <CloudHost size="sm" x="10vw" y="20vh" delay={0.2} duration={7} opacity={0.5} />
      <CloudHost size="md" x="25vw" y="50vh" delay={0.5} duration={9} opacity={0.6} />
      <CloudHost size="lg" x="70vw" y="25vh" delay={0.8} duration={8} opacity={0.7} />
      <CloudHost size="md" x="60vw" y="70vh" delay={1} duration={7.5} opacity={0.5} />

      {/* Background glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400/10 filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-400/10 filter blur-3xl" />
      </div>

      {/* Visual elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full border-4 border-blue-100/30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 rounded-full border-4 border-indigo-100/30"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get in Touch with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Sixthstar Technologies
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Have questions or need support? Our team is here to help you 24/7.
              Reach out to us anytime and we’ll respond as soon as possible.
            </motion.p>
          </motion.div>

          {/* Contact-themed image with animation */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.img
              src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746593379/Untitled_design_24_tojitz.png" // Replace this with your actual path
              alt="Contact Us Illustration"
              className="w-full max-w-sm mx-auto "
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConBanner;
