"use client";
import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MovingPlane, MovingClouds } from "@/components/MapParts";

const MAPTILER_API_KEY = process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "";

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [time, setTime] = useState("05:29 PM CST");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "CST",
        }) + " CST"
      );
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/basic/style.json?key=${MAPTILER_API_KEY}`,
      center: [-79.3832, 43.6532], // Toronto coordinates
      zoom: 11,
      bearing: 0,
      pitch: 0,
      attributionControl:false,
    });

    map.current.on("load", () => {
      // Create a custom HTML element for the marker
      const el = document.createElement("div");
      el.innerHTML = `
          <span class="relative flex size-2.5 maplibregl-marker maplibregl-marker-anchor-center">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
            <span class="relative inline-flex size-2.5 rounded-full bg-sky-500"></span>
          </span>
        `;

      // Add the marker to the map
      new maplibregl.Marker({
        element: el,
        anchor: "center",
      })
        .setLngLat([-79.3832, 43.6532])
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden bg-white">
      {/* Map container */}
      <div ref={mapContainer} className="absolute inset-0 w-full h-full map-fadeout" />

      {/* Clouds */}
      <MovingClouds />

      {/* Plane */}
      <MovingPlane />

      {/* Pulsing dot */}

      {/* Time display */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-md px-3 py-1 text-white">
        {time}
      </div>
    </div>
  );
};

export default MapComponent;
