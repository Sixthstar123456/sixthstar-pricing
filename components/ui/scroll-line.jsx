import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const MoveScroll = () => {
  const steps = [
    { title: "Order Placed", description: "Your order has been received" },
    { title: "Processing", description: "Order is being processed" },
    { title: "Completed", description: "Order successfully delivered" }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Instead of calculating based on exact scroll position,
    // we'll increment the step on each scroll event
    const handleScroll = () => {
      // Only increment if we haven't reached the last step
      if (currentStep < steps.length - 1) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        setProgress((nextStep / (steps.length - 1)) * 100);
      }
    };

    // Use 'wheel' event instead of 'scroll' to detect individual scroll actions
    window.addEventListener("wheel", handleScroll, { once: true });
    
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentStep, steps.length]);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="sticky top-0 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8 space-y-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Order Progress</h2>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 h-1 bg-gray-200 transform -translate-y-1/2 w-full rounded-full">
              <div 
                className="absolute h-full bg-blue-500 rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center transition-transform duration-300">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      index <= currentStep ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300 bg-white text-gray-500"
                    }`}
                  >
                    {index < currentStep ? <FaCheck className="w-5 h-5" /> : <span className="font-medium">{index + 1}</span>}
                  </div>
                  <div className="mt-4 space-y-1 text-center">
                    <div className="text-sm font-medium text-gray-700">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Add content to enable scrolling */}
      <div className="h-screen"></div>
    </div>
  );
};

export default MoveScroll;