import { motion } from "framer-motion";
import {
  Mail,
  ShieldCheck,
  Inbox,
  Send,
  ArrowRight,
} from "lucide-react";

export const CarbonioMain = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100 pb-0 pt-8">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse z-0"></div>

      {/* Hero Content */}
      <div className="relative container mx-auto lg:px-20 grid lg:grid-cols-2 gap-10 items-center z-10 pt-28">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Secure & Smart{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Email Solutions
            </span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Power your business communication with fast, secure, and scalable
            email services designed for modern teams.
          </p>
         
carboniocontact

          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              { icon: <ShieldCheck />, label: "Advanced Security" },
              { icon: <Inbox />, label: "Spam-Free Inbox" },
              { icon: <Send />, label: "High Delivery Rate" },
              { icon: <Mail />, label: "Business Class Mail" },
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
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746618356/Untitled_1000_x_1000_px_7_clwqhe.png" // Replace with actual email-related image
            alt="Email Solutions"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Stats Block */}
      <motion.div
        className="relative z-20 top-[50%] -mt-4 mb-12 mx-auto p-8 px-20 bg-white rounded-xl shadow-lg border border-gray-100 max-w-max"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Why Businesses Trust Our Email?
        </h3>
        <div className="flex flex-wrap justify-center gap-24">
          {[
            { value: "99.9%", label: "Delivery Accuracy" },
            { value: "24/7", label: "Live Support" },
            { value: "Zero", label: "Spam Tolerance" },
            { value: "500K+", label: "Emails/Day Capacity" },
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

export default CarbonioMain;
