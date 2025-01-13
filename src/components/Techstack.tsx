import React, { useEffect, useState } from "react";
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
import "./Techstack.css"; // Import the CSS file

const InfiniteScroll = ({ items, direction = 1 }) => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");
    if (
      scrollers.length > 0 &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      addAnimation();
      setContentLoaded(true);
    }
  }, [contentLoaded]);

  function addAnimation() {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller_inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <div
      className={`scroller ${
        direction > 0 ? "right-scrollAnimate" : "left-scrollAnimate"
      }`}
      data-direction={direction > 0 ? "right" : "left"}
    >
      <div className="scroller_inner">
        {items.map((tech, index) => (
          <div key={index} className="tech-item">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

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

  return (
    <div className="techstack-container">
      <InfiniteScroll items={technologies1} />
      <InfiniteScroll items={technologies2} direction={-1} />
    </div>
  );
};

export default TechStack;
