import { FaRocket, FaCogs, FaDatabase, FaMicrochip, FaWindows, FaKey } from "react-icons/fa";

const features = [
  {
    icon: <FaRocket className="text-white text-2xl" />,
    title: "Instant Activation",
    desc: "Your VPS will be ready to go in minutes after payment, with no delays.",
  },
  {
    icon: <FaCogs className="text-white text-2xl" />,
    title: "VPS Management Panel",
    desc: "Easily reboot, reinstall, and monitor your VPS with full control.",
  },
  {
    icon: <FaDatabase className="text-white text-2xl" />,
    title: "RAID 10 Disk Arrays",
    desc: "Ensures fast performance and reliability using RAID 10 SSD arrays.",
  },
  {
    icon: <FaMicrochip className="text-white text-2xl" />,
    title: "Powerful Nodes",
    desc: "Hosted on Dual Xeon and ECC RAM machines for maximum performance.",
  },
  {
    icon: <FaWindows className="text-white text-2xl" />,
    title: "Choice of OS",
    desc: "Pick from multiple Linux or Windows distributions.",
  },
  {
    icon: <FaKey className="text-white text-2xl" />,
    title: "Full Root Access",
    desc: "Gain full control of your server with root-level privileges.",
  },
];

export default function ManagdedLinuxServices() {
  return (
    <div className="py-4 px-6 bg-gradient-to-b from-white via-blue-50 to-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What You Get</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-white bg-opacity-60 shadow-md rounded-xl p-6 hover:shadow-lg transition-all backdrop-blur-sm border border-blue-100"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-md">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
