"use client";
import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
        background: {
          color: "#000000",
        },
      }}
    />
  );
};

export default ParticleBackground;
