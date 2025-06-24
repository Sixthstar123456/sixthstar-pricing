import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const AutoProgressStepper = () => {
  const steps = [
    { title: "Initial meeting & Requirements" },
    { title: "Custom pricing  that benefits " },
    { title: "Deployment of cloud services" },
    
    
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoProgress, setIsAutoProgress] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer;
    if (isAutoProgress && currentStep < steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep((prev) => {
          const nextStep = prev + 1;
          setProgress((nextStep / (steps.length - 1)) * 100);
          return nextStep;
        });
      }, 100);
    }

    return () => clearTimeout(timer);
  }, [currentStep, isAutoProgress, steps.length]);

  const handleStepClick = (index) => {
    setIsAutoProgress(false);
    setCurrentStep(index);
    setProgress((index / (steps.length - 1)) * 100);
  };

  const resetStepper = () => {
    setCurrentStep(0);
    setProgress(0);
    setIsAutoProgress(true);
  };

  return (
    <div className=" bg-gray-50 flex items-center justify-center px-4">
      <div className=" w-full bg-white rounded-xl  p-8 space-y-8">
        <div className=" ">
          <h2 className="text-4xl text-center font-bold text-gray-800 ">Cloud deployment made easy with 3 steps  </h2>
          <div className="flex items-center gap-4">
           
         
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute top-1/2 left-0 h-1 bg-gray-200 transform -translate-y-1/2 transition-all duration-500 rounded-full"
            style={{ width: "100%" }}
          >
            <div
              className="absolute h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center"
                role="button"
                tabIndex={0}
                onClick={() => handleStepClick(index)}
                onKeyDown={(e) => e.key === "Enter" && handleStepClick(index)}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${index <= currentStep
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-gray-300 bg-white text-gray-500"}`}
                  aria-label={`Step ${index + 1}: ${step.title}`}
                >
                  {index < currentStep ? (
                    <FaCheck className="w-5 h-5" />
                  ) : (
                    <span className="font-medium">{index + 1}</span>
                  )}
                </div>
                <div className="mt-4 space-y-1">
                  <div className="text-xl font-medium text-gray-700">{step.title}</div>
                  <div className="text-xs text-gray-500">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoProgressStepper;