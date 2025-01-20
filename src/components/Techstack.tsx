import React from "react";
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

const TechStack = () => {
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
    return (
      <div className=" flex items-end relative w-full h-16 overflow-hidden">
        <div
          className={`flex absolute ${
            direction > 0 ? "animate-scroll-left" : "animate-scroll-right"
          } hover:pause-animation`}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={`set-${setIndex}`} className="flex gap-8 mx-4">
              {items.map((tech, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex items-center gap-2 group cursor-pointer min-w-max"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:-translate-y-1 techIcon">
                    {React.cloneElement(tech.icon, {
                      className: "w-full h-full text-white",
                    })}
                  </div>
                  <span className="text-gray-400 font-semibold group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black p-8 space-y-8 rounded-lg">
      <h2 className="text-3xl font-bold text-white">What I work with</h2>
      <div className="space-y-8">
        <InfiniteScroll items={technologies1} direction={1} />
        <InfiniteScroll items={technologies2} direction={-1} />
      </div>
      <style jsx global>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .techIcon svg {
          width: 40px;
          height: 40px;
        }
        .animate-scroll-left {
          animation: scrollLeft 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scrollRight 20s linear infinite;
        }

        .hover:pause-animation:hover {
          animation-play-state: paused;
        }

        .hover:pause-animation:hover * {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TechStack;
