"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, BookOpen, Brain, Rocket } from "lucide-react";

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="mt-20 max-w-4xl mx-auto">
      <motion.div
        className="space-y-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden dark:bg-zinc-900/50 bg-zinc-100/50 p-8 card-glow">
          <div className="relative hover-lift">
            <h1 className="text-4xl font-bold mb-4 text-gradient">About Me</h1>
            <p className="text-lg dark:text-zinc-300 text-zinc-700">
              Early tech enthusiast turned software developer, with a passion
              for creating impactful web applications and solving complex
              problems.
            </p>
          </div>
        </div>

        {/* Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              Icon: Code2,
              title: "Early Tech Journey",
              description:
                "Started coding at a young age, driven by curiosity and passion for technology.",
              color: "purple",
              delay: 0.2,
            },
            {
              Icon: BookOpen,
              title: "Education & Growth",
              description:
                "Continuously learning and adapting to new technologies in the ever-evolving tech landscape.",
              color: "blue",
              delay: 0.3,
            },
            {
              Icon: Brain,
              title: "Technical Expertise",
              description:
                "Specialized in full-stack development with React, Node.js, and modern web technologies.",
              color: "green",
              delay: 0.4,
            },
            {
              Icon: Rocket,
              title: "Current Focus",
              description:
                "Building production-ready applications while exploring emerging technologies.",
              color: "yellow",
              delay: 0.5,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="p-6 rounded-lg dark:bg-zinc-900/50 bg-zinc-100/50 border dark:border-zinc-800 border-zinc-200 card-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <item.Icon className={`w-8 h-8 mb-4 text-${item.color}-500`} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="dark:text-zinc-400 text-zinc-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="p-8 rounded-xl dark:bg-zinc-900/50 bg-zinc-100/50 border dark:border-zinc-800 border-zinc-200 card-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gradient">
            My Philosophy
          </h2>
          <p className="dark:text-zinc-300 text-zinc-600 leading-relaxed">
            I believe in continuous learning and staying current with technology
            trends. My approach combines technical excellence with creative
            problem-solving, always focusing on delivering value through clean,
            efficient code and intuitive user experiences.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
