import React from "react";
import ParticleBackground from "./ParticleBackground";

const TestComponent = () => {
  return (
    <div className="relative w-full h-screen bg-gray-800">
      <ParticleBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl">Hello, World!</h1>
      </div>
    </div>
  );
};

export default TestComponent;
