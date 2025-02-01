"use client";
import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MovingPlane, MovingClouds } from "@/components/MapParts";
import "@/styles/Map.css";
import { useTheme } from "@/context/ThemeContext";

const MAPTILER_API_KEY = process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "";

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const marker = useRef<maplibregl.Marker | null>(null);
  const { theme } = useTheme();
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
    console.log("MapComponent - theme changed:", theme);
  }, [theme]);

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

  // Initial map setup - no theme dependency
  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/basic-v2${
        theme === "dark" ? "-dark" : ""
      }/style.json?key=${MAPTILER_API_KEY}`,
      center: [-79.3832, 43.6532],
      zoom: 2,
      bearing: 0,
      pitch: 0,
      attributionControl: false,
      interactive: false,
    });

    const setupMarker = () => {
      const el = document.createElement("div");
      el.innerHTML = `
        <span class="relative flex size-2.5 maplibregl-marker maplibregl-marker-anchor-center">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
          <span class="relative inline-flex size-2.5 rounded-full bg-sky-500"></span>
        </span>
      `;

      marker.current = new maplibregl.Marker({
        element: el,
        anchor: "center",
      })
        .setLngLat([-79.3832, 43.6532])
        .addTo(map.current!);
    };

    map.current.on("load", () => {
      setupMarker();

      setTimeout(() => {
        map.current?.flyTo({
          zoom: 11,
          speed: 2.5,
          curve: 1,
          easing: (t) => t,
          essential: true,
        });
      }, 500);
    });

    // Enable interactions after zoom
    setTimeout(() => {
      if (map.current) {
        map.current.dragPan.enable();
        map.current.scrollZoom.enable();
        map.current.boxZoom.enable();
        map.current.doubleClickZoom.enable();
        map.current.touchZoomRotate.enable();
      }
      setAnimationsStarted(true);
    }, 3500);

    // Add inside the first useEffect, after the map initialization (around line 65):
    map.current.on("dragstart", () => setIsInteracting(true));
    map.current.on("dragend", () => setIsInteracting(false));
    map.current.on("zoomstart", () => setIsInteracting(true));
    map.current.on("zoomend", () => setIsInteracting(false));

    return () => {
      marker.current?.remove();
      map.current?.remove();
    };
  }, []); // Empty dependency array for initial setup

  // Theme change effect
  useEffect(() => {
    console.log("Theme changed to:", theme); // Debug log
    if (!map.current) {
      console.log("Map not initialized yet"); // Debug log
      return;
    }

    const styleUrl = `https://api.maptiler.com/maps/basic-v2${
      theme === "dark" ? "-dark" : ""
    }/style.json?key=${MAPTILER_API_KEY}`;

    console.log("Updating map style to:", styleUrl); // Debug log

    // Store current map state
    const currentCenter = map.current.getCenter();
    const currentZoom = map.current.getZoom();
    const currentBearing = map.current.getBearing();
    const currentPitch = map.current.getPitch();

    // Remove existing marker before style change
    marker.current?.remove();

    try {
      // Update the style
      map.current.setStyle(styleUrl);

      // Restore map state and marker after style change
      map.current.once("style.load", () => {
        console.log("Style loaded successfully"); // Debug log

        if (!map.current) return;

        map.current.setCenter(currentCenter);
        map.current.setZoom(currentZoom);
        map.current.setBearing(currentBearing);
        map.current.setPitch(currentPitch);

        // Re-add marker
        const el = document.createElement("div");
        el.innerHTML = `
          <span class="relative flex size-2.5 maplibregl-marker maplibregl-marker-anchor-center">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
            <span class="relative inline-flex size-2.5 rounded-full bg-sky-500"></span>
          </span>
        `;

        marker.current = new maplibregl.Marker({
          element: el,
          anchor: "center",
        })
          .setLngLat([-79.3832, 43.6532])
          .addTo(map.current);
      });
    } catch (error) {
      console.error("Error updating map style:", error); // Debug log
    }
  }, [theme]);

  return (
    <div
      className={`relative w-full h-64 rounded-lg overflow-hidden ${
        isInteracting ? "interacting" : ""
      }`}
    >
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
