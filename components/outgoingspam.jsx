import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const TwoColumnSectionOut = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image Column */}
          <motion.div
            className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741237636/cybersecurity-concept-collage-design_1_cy58qb.jpg"
                alt="Modern workspace with laptop and plants"
                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
              animate={{ x: isHovered ? 10 : 0 }}
            >
             Outgoing Spam Filter
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 text-justify"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ delay: 0.1 }}
            >
             In this spam filter service, you can easily manage your user accounts by limiting the number of emails that are sent and received at your end as well as your customers. The log search will have a set of activities that are performed by the spam filter where you can view and work accordingly. Also, this allows you to manage identifies
            </motion.p>

            <ul className="space-y-4">
              {["Adding", "Deleting the user accounts", "As well as generating outgoing reports for certain operations"].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <span className="h-2 w-2 rounded-full bg-blue-500 mr-3"></span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.button
              className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center space-x-2 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More</span>
              <FaArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSectionOut ;