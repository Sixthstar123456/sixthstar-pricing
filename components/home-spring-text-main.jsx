import React from "react";
import BlurText from "./ui/home-spring-text";

const App = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="flex items-center justify-center bg-white">
      <BlurText
        text="Trusted by 10000+ businesses like yours"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl font-bold 	"
      />
    </div>
  );
};

export default App;