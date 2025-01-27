import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    console.log("Initial theme loaded:", savedTheme);
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    console.log("toggleTheme called, current theme:", theme);
    const audio = new Audio("/sounds/switch.mp3");
    audio.play().catch(() => {});

    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Setting new theme to:", newTheme);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return { theme, toggleTheme };
}
