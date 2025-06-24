import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Server,
  Database,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const AlternateHero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen scroll-mt-28 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 pt-40 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 2xl:pt-42 pb-16"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-6 sm:px-10 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Boost Email Security with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Spam Filter Solutions
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Get Real-time protection, safeguarding you from spam, viruses, and phishing attacks without interruptions.
          </p>
          <Link
            href="#spamcontact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md transition"
          >
            Get it Now <ArrowRight size={18} />
          </Link>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              { icon: <ShieldCheck />, label: "Advanced Threat Detection" },
              { icon: <Rocket />, label: " Real-Time Email Filtering" },
              { icon: <Database />, label: "Seamless Integration" },
              { icon: <Server />, label: "Admin & User-Level Access" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition border border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  {item.icon}
                </div>
                <span className="text-sm text-gray-800 font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746505340/Untitled_design_18_ig6y7d.png"
            alt="Cloud Infrastructure"
            className="w-full max-w-md md:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto"
          />
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <motion.div
        className="relative z-20 mt-16 mb-12 mx-auto p-8 px-6 sm:px-10 md:px-20 bg-white rounded-xl shadow-lg border border-gray-100 max-w-6xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Why Choose Us?
        </h3>
        <div className="flex flex-wrap justify-center gap-16 sm:gap-20 lg:gap-24">
          {[
            { value: "100%", label: "Data Security" },
            { value: "25 TB/s", label: "Bandwidth" },
            { value: "99.999%", label: "Uptime SLA" },
            { value: "10K+", label: "Clients Served" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className="text-2xl font-bold text-blue-600">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AlternateHero;
