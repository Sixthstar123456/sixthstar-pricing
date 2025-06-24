import { motion } from "framer-motion";
import { CheckCircle, Shield, Cloud, Rocket, ArrowRight } from "lucide-react";

export const SpamProtect = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-100  py-4">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1746445088/Untitled_design_15_s1jvxa.png"
            alt="Cloud Protection"
            className=""
          />
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow">
            Safest Spamfilters
          </span>

          <h1 className="text-4xl font-extrabold text-gray-900 leading-snug">
           Protect Your Network with an<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
             Effective Spam Filter
            </span>
          </h1>

          <p className="text-gray-600 text-lg text-justify">
Spam filter software acts as a shield to protect your email inbox from unwanted messages. With the right inbound and outbound filters tailored to your security needs, the risk of falling victim to phishing attacks and malware threats is further reduced. These filters are effective across various communication protocols and determine for themselves whether it's a legitimate or illegitimate incoming or outgoing message. Sixthstartech email filter solutions are highly cost-effective and high-tech;  you will effectively detect and block spam, malware, and viruses from invading your inbox.          </p>

          

         
        </motion.div>
      </div>
    </section>
  );
};

export default SpamProtect;
