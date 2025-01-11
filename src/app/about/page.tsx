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
        <div className="relative rounded-xl overflow-hidden bg-zinc-900/50 p-8">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
          <div className="relative">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-zinc-300">
              Early tech enthusiast turned software developer, with a passion
              for creating impactful web applications and solving complex
              problems.
            </p>
          </div>
        </div>

        {/* Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Code2 className="w-8 h-8 mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Early Tech Journey</h3>
            <p className="text-zinc-400">
              Started programming at a young age, tinkering with Nokia phones
              and exploring Linux systems. This early exposure sparked a
              lifelong passion for technology.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <BookOpen className="w-8 h-8 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Education & Growth</h3>
            <p className="text-zinc-400">
              Graduated from Centennial College with a Software Engineering
              Technician Diploma, mastering modern development practices and
              technologies.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Brain className="w-8 h-8 mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
            <p className="text-zinc-400">
              Specialized in full-stack development with React, Node.js, and
              modern web technologies. Passionate about creating efficient,
              scalable solutions.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Rocket className="w-8 h-8 mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Current Focus</h3>
            <p className="text-zinc-400">
              Building production-ready applications while exploring emerging
              technologies. Seeking opportunities to contribute to innovative
              projects.
            </p>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-4">My Philosophy</h2>
          <p className="text-zinc-300 leading-relaxed">
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
