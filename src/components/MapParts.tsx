"use client";
import React from "react";
import Image from "next/image";

/**
 * PulsingDot: A pulsing blue dot, similar to a live location pin
 */
export const PulsingDot = () => {
  return (
    <span
      className="relative flex size-2.5 maplibregl-marker maplibregl-marker-anchor-center"
      aria-label="Map marker"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
      <span className="relative inline-flex size-2.5 rounded-full bg-sky-500"></span>
    </span>
  );
};
/**
 * MovingPlane: A plane image element that can be animated via CSS
 */
export const MovingPlane = () => {
  return (
    <div className="absolute transform -translate-y-1/2 animate-plane-movement">
      <div className="relative">
        {/* Plane shadow */}
        <div className="absolute bottom-[-20px] left-1/2 w-12 h-3 bg-black/20 rounded-full blur-sm transform -translate-x-1/2"></div>
        {/* Plane image */}
        <Image
          src="/assets/images/plane.webp"
          alt="Airplane"
          width={32}
          height={32}
          className="rotate-[-55deg] sm:rotate-[-65deg]"
        />
      </div>
    </div>
  );
};

/**
 * MovingClouds: A set of animated cloud images
 */
export const MovingClouds = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-cloud-1 absolute">
          <Image
            src="/assets/images/cloud.webp"
            alt="Cloud"
            width={600}
            height={600}
            className="opacity-100"
          />
        </div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-cloud-2 absolute" style={{ top: "60%" }}>
          <Image
            src="/assets/images/cloud.webp"
            alt="Cloud"
            width={500}
            height={500}
            className="opacity-60 rotate-[-280deg]"
          />
        </div>
      </div>
    </>
  );
};
