"use client";
import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MovingPlane, MovingClouds } from "@/components/MapParts";
import "@/styles/Map.css";

const MAPTILER_API_KEY = process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "";

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [time, setTime] = useState(() => {
    const now = new Date();
    return (
      now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/Toronto",
      }) + " EST"
    );
  });
  const [animationsStarted, setAnimationsStarted] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "America/Toronto",
        }) + " EST"
      );
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/basic-v2-dark/style.json?key=${MAPTILER_API_KEY}`,
      center: [-79.3832, 43.6532], // Toronto coordinates
      zoom: 2, // Initial zoom level
      bearing: 0,
      pitch: 0,
      attributionControl: false,
      interactive: false, // Disable interactions initially
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

      // Zoom in effect
      setTimeout(() => {
        map.current?.flyTo({
          zoom: 11, // Target zoom level
          speed: 2.5,
          curve: 1,
          easing: (t) => t,
          essential: true,
        });

        // Enable interactions after zooming is complete
        setTimeout(() => {
          if (map.current) {
            map.current.dragPan.enable();
            map.current.scrollZoom.enable();
            map.current.boxZoom.enable();
            map.current.doubleClickZoom.enable();
            map.current.touchZoomRotate.enable();
            setAnimationsStarted(true);
          }
        }, 3000); // Adjust this timeout to match the duration of the zoom effect
      }, 500);
    });

    // Hide animations on map interaction
    const handleMapInteraction = () => {
      setIsInteracting(true);
    };

    const handleMapInteractionEnd = () => {
      setIsInteracting(false);
    };

    map.current.on("mousedown", handleMapInteraction);
    map.current.on("mouseup", handleMapInteractionEnd);
    map.current.on("dragstart", handleMapInteraction);
    map.current.on("dragend", handleMapInteractionEnd);
    map.current.on("zoomstart", handleMapInteraction);
    map.current.on("zoomend", handleMapInteractionEnd);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div
      className={`relative w-full h-64 rounded-lg overflow-hidden ${
        isInteracting ? "interacting" : ""
      }`}
    >
      {/* Map container */}
      <div
        ref={mapContainer}
        className="absolute inset-0 w-full h-full map-fadeout"
      />

      {/* Clouds */}
      {animationsStarted && <MovingClouds />}

      {/* Plane */}
      {animationsStarted && <MovingPlane />}

      {/* Time display */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-md px-3 py-1 text-white">
        {time}
      </div>
    </div>
  );
};

export default MapComponent;
