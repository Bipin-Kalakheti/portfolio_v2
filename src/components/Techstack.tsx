"use client";
import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "Motion", icon: "▲" },
  { name: "HTML 5", icon: "❖" },
  { name: "CSS", icon: "❖" },
  { name: "TypeScript", icon: "TS" },
  { name: "Next.js", icon: "N" },
  { name: "Tailwind CSS", icon: "~" },
  { name: "Supabase", icon: "⚡" },
  { name: "React.js", icon: "⚛" },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-900/50 rounded-lg p-4 flex flex-col items-center justify-center gap-2"
        >
          <span className="text-2xl">{tech.icon}</span>
          <span className="text-sm text-zinc-400">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
