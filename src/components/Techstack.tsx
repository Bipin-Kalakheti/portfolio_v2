import React from "react";
import { motion } from "framer-motion";
import JavaScriptIcon from "../../public/assets/Icons/JavaScript";
import TypeScriptIcon from "../../public/assets/Icons/TypeScript";
import ReactIcon from "../../public/assets/Icons/React";
import NextjsIcon from "../../public/assets/Icons/Nextjs";
import ViteIcon from "../../public/assets/Icons/Vite";
import HtmlIcon from "../../public/assets/Icons/Html";
import RustIcon from "../../public/assets/Icons/Rust";
import GitIcon from "../../public/assets/Icons/Github";
import JavaIcon from "../../public/assets/Icons/Java";
import ExpressIcon from "../../public/assets/Icons/Express";
import PythonIcon from "../../public/assets/Icons/Python";
import MongoDBIcon from "../../public/assets/Icons/MongoDB";
import NodejsIcon from "../../public/assets/Icons/Node";
import FirebaseIcon from "../../public/assets/Icons/Firebase";
import FigmaIcon from "../../public/assets/Icons/Figma";
import TailwindIcon from "../../public/assets/Icons/Tailwind";

const technologies1 = [
  { name: "JavaScript", icon: <JavaScriptIcon /> },
  { name: "TypeScript", icon: <TypeScriptIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Next.js", icon: <NextjsIcon /> },
  { name: "Vite", icon: <ViteIcon /> },
  { name: "HTML", icon: <HtmlIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
];

const technologies2 = [
  { name: "Rust", icon: <RustIcon /> },
  { name: "Git", icon: <GitIcon /> },
  { name: "Java", icon: <JavaIcon /> },
  { name: "Express", icon: <ExpressIcon /> },
  { name: "Python", icon: <PythonIcon /> },
  { name: "MongoDB", icon: <MongoDBIcon /> },
  { name: "Node.js", icon: <NodejsIcon /> },
  { name: "Firebase", icon: <FirebaseIcon /> },
];

const InfiniteScroll = ({ items, direction = 1 }) => {
  const [width, setWidth] = React.useState(0);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      setWidth(scrollRef.current.offsetWidth / 2);
    }
  }, [items]);

  return (
    <div className="flex relative overflow-hidden w-full py-4">
      <motion.div
        ref={scrollRef}
        className="flex gap-2 whitespace-nowrap"
        animate={{
          x: direction > 0 ? [-width, 0] : [0, -width],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {[...Array(2)].map((_, setIndex) => (
          <React.Fragment key={`set-${setIndex}`}>
            {items.map((tech, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-black rounded-full grayscale transition-transform duration-4000 ease-out group-hover:-translate-y-2 group-hover:grayscale-0">
                  {React.cloneElement(tech.icon, {
                    className:
                      "w-full h-full text-current group-hover:text-white",
                  })}
                </div>
                <span className="text-lg font-semibold group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-black p-8 space-y-8 rounded-lg">
      <h1 className="text-3xl font-bold text-white font-incognito">
        What I work with
      </h1>
      <div className="space-y-2">
        <InfiniteScroll items={technologies1} direction={1} />
        <InfiniteScroll items={technologies2} direction={-1} />
      </div>
    </div>
  );
};

export default TechStack;
