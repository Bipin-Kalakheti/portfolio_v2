"use client";
import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadStarsPreset } from "tsparticles-preset-stars";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground;
