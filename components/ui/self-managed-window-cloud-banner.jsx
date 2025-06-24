import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Server,
  Database,
  ArrowRight,
} from "lucide-react";

export const SelfManagedWindowBanner = () => {
  return (
    <section className="relative overflow-hidden  bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 pb-10 pt-4">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px]  bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse z-0"></div>

      {/* Hero Content */}
      <div className="relative container mx-auto lg:px-20 grid lg:grid-cols-2 gap-10 items-center z-10 pt-28">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-7 ">
            Empower your Self Managed{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ">
              Window Cloud Server
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Get high-availability, performance, and peace of mind with our
            secure cloud infrastructure.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md transition">
            Contact us <ArrowRight size={18} />
          </button>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              { icon: <ShieldCheck />, label: "Secure by Design" },
              { icon: <Rocket />, label: "Optimized Performance" },
              { icon: <Database />, label: "Managed Databases" },
              { icon: <Server />, label: "Reliable Compute" },
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
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1747200546/nxewf9vvfgduxj1tochb.png" // Replace with actual image
            alt="Cloud Infrastructure"
            // className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </motion.div>
      </div>

     





      {/* Bottom CTA Block */}
      {/* <div className="shadow-xl shadow-white p-6 bg-blue-600 rounded-lg mx-6 mb-20">
        <h1 className="text-3xl text-center md:text-4xl font-bold text-white leading-tight mb-6">
          Protect and Stop Unwanted Emails Reaching Your Network
        </h1>
      </div> */}
    </section>
  );
};

export default SelfManagedWindowBanner;
