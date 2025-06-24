import { motion } from "framer-motion";
import CloudHost from "../cloud";
import { CloudSun, Server, Layers, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center pt-28 md:pt-20 lg:pt-16">
      {/* Cloud Animations */}
      <CloudHost size="sm" x="5vw" y="15vh" delay={0.2} duration={7} opacity={0.5} />
      <CloudHost size="md" x="15vw" y="40vh" delay={0.5} duration={9} opacity={0.6} />
      <CloudHost size="lg" x="75vw" y="20vh" delay={0.8} duration={8} opacity={0.7} />
      <CloudHost size="md" x="65vw" y="65vh" delay={1} duration={7.5} opacity={0.5} />
      <CloudHost size="sm" x="35vw" y="75vh" delay={1.5} duration={6} opacity={0.4} />

      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400/10 filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-400/10 filter blur-3xl" />
      </div>

      {/* Geometric Shapes */}
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

      {/* Main Content Container */}
      <div className="w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-20 mx-auto z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center pt-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 xl:order-1"
          >
            <motion.div
              className="flex items-center gap-2 mb-6 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full w-fit shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-gray-700">
                Enterprise-grade reliability
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Cloud Infrastructure for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-700 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Build, deploy, and scale applications with our secure,
              high-performance cloud platform. Trusted by developers and
              enterprises worldwide.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {/* Buttons can go here */}
            </motion.div>

            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center gap-6 mt-2">
                {["Company A", "Company B", "Company C", "Company D"].map(
                  (company, idx) => (
                    <div
                      key={idx}
                      className="h-8 bg-gray-200 rounded-md w-20 opacity-60"
                    />
                  )
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="order-1 xl:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
          >
            <div className="relative w-full max-w-xl xl:max-w-2xl mx-auto">
              <motion.div
                className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-6 z-20 border border-gray-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Server className="text-blue-600" size={20} />
                    <span className="font-semibold text-gray-800">SS Cloud</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Infrastructure Status */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-medium text-gray-700">
                      Infrastructure Status
                    </h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      All Systems Operational
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: <Server size={16} />, name: "Compute", status: "Active", color: "bg-green-400" },
                      { icon: <Layers size={16} />, name: "Database", status: "Healthy", color: "bg-green-400" },
                      { icon: <CloudSun size={16} />, name: "Storage", status: "Connected", color: "bg-green-400" },
                      { icon: <Shield size={16} />, name: "Security", status: "Protected", color: "bg-green-400" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-2 bg-white rounded-md border border-gray-100"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-blue-50 rounded-md text-blue-600">{item.icon}</div>
                          <span className="text-sm font-medium text-gray-700">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${item.color}`} />
                          <span className="text-xs text-gray-500">{item.status}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Usage Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">CPU Usage</p>
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="font-medium">28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        className="bg-blue-500 h-1.5 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "28%" }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Memory</p>
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <motion.div
                        className="bg-indigo-500 h-1.5 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "45%" }}
                        transition={{ duration: 1, delay: 1.3 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl blur-2xl -z-10 scale-95" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 mx-auto max-w-6xl bg-white/80 backdrop-blur-md rounded-xl shadow-lg py-5 px-8 z-10 hidden lg:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "99.99%", label: "Uptime" },
            { value: "24*7/365", label: "Expert Support" },
            { value: "5+", label: "Global Data Centers" },
            { value: "3K+", label: "Happy Customers" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
