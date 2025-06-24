import { FaServer, FaArrowsAltH, FaClock, FaSyncAlt, FaChartLine, FaCloudUploadAlt } from "react-icons/fa";

export default function ManageAdvancedFeatures() {
  const features = [
    { icon: <FaServer className="text-blue-600 text-4xl" />, label: "SSD based Servers" },
    { icon: <FaArrowsAltH className="text-blue-600 text-4xl" />, label: "Highly scalable" },
    { icon: <FaClock className="text-blue-600 text-4xl" />, label: "24/7 Support & Monitoring" },
    { icon: <FaSyncAlt className="text-blue-600 text-4xl" />, label: "Alternate day Acronis backup included" },
    { icon: <FaChartLine className="text-blue-600 text-4xl" />, label: "15 days backup retention" },
    { icon: <FaCloudUploadAlt className="text-blue-600 text-4xl" />, label: "Instant upgrade" },
  ];

  return (
    <div className="bg-white py-8 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-0 pt-0">
            <span className="gradient-text">Advanced Features</span>
          </h2>
        </div>
      <div className="grid grid-cols-3 divide-x divide-y divide-gray-100 max-w-5xl mx-auto border border-gray-50">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center justify-center space-y-3 py-10 px-4"
          >
            {feature.icon}
            <p className="text-gray-700 font-medium text-sm md:text-base">{feature.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
