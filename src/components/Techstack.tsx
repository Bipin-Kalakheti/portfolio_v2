import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const technologies1 = [
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "Hugo", icon: "H" },
  { name: "React", icon: "⚛" },
  { name: "Nextjs", icon: "N" },
  { name: "Vite", icon: "⚡" },
  { name: "HTML", icon: "❖" },
];

const technologies2 = [
  { name: "Rust", icon: "🦀" },
  { name: "Git", icon: "⎇" },
  { name: "Java", icon: "☕" },
  { name: "Spring", icon: "🍃" },
  { name: "Express", icon: "EX" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MariaDB", icon: "📊" },
];

const InfiniteScroll = ({ items, direction = 1 }) => {
  const [width, setWidth] = React.useState(0);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      // Get the width of a single set of items
      setWidth(scrollRef.current.offsetWidth / 2);
    }
  }, [items]);

  return (
    <div className="flex relative overflow-hidden w-full py-4">
      <motion.div
        ref={scrollRef}
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [-width, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {/* First set of items */}
        {items.map((tech, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <span className="text-xl font-bold">{tech.icon}</span>
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((tech, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <span className="text-xl font-bold">{tech.icon}</span>
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-black p-8 space-y-6">
      <h1 className="text-3xl font-bold text-white mb-8">What I work with</h1>
      <div className="space-y-8">
        <InfiniteScroll items={technologies1} direction={-1} />
        <InfiniteScroll items={technologies2} direction={-1} />
      </div>
    </div>
  );
};

export default TechStack;
