"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

interface ExperienceData {
  title: string;
  company: string;
  location: string;
  remote: boolean;
  period: string;
  duration: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceData[] = [
  {
    title: "Web Development Intern",
    company: "Groove AI",
    location: "Edmonton, Alberta, Canada",
    remote: true,
    period: "Mar 2025 - Present",
    duration: "1 mo",
    description: [
      "Assisting with development tasks for web applications",
      "Learning modern development workflows and version control with Git",
      "Contributing to frontend development using Next.js",
      "Working with backend technologies including Node.js",
      "Participating in team meetings and learning about software development processes",
      "Building practical knowledge of RESTful API implementation",
    ],
    skills: ["Next.js", "Node.js", "Git", "RESTful APIs"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto my-16 space-y-6">
      <motion.h2
        className="text-2xl md:text-4xl sm:text-3xl font-bold dark:text-white text-zinc-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex"
          >
            <div className="relative mr-6">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-amber-500 to-transparent dark:from-green-500 h-full"></div>
              <div className="relative z-10 w-6 h-6 rounded-full bg-amber-500 dark:bg-green-500 flex items-center justify-center">
                <Briefcase className="text-white w-3 h-3" />
              </div>
            </div>

            <div className="flex-1">
              <motion.div
                className="rounded-lg bg-zinc-50 dark:bg-zinc-900/50 p-6 border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-400">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span className="inline-flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.location}
                        {exp.remote && (
                          <span className="ml-1 text-xs">· Remote</span>
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="text-zinc-500 dark:text-zinc-400 text-sm flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{exp.period}</span>
                    <span className="mx-1">·</span>
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                    My responsibilities include:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-600 dark:text-zinc-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-amber-100 text-amber-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <div className="mt-10 text-center">
        <a
          href="/about"
          className="inline-flex items-center gap-1 text-sm font-medium text-amber-600 dark:text-emerald-400 hover:text-amber-800 dark:hover:text-emerald-300 transition-colors hover:translate-x-1"
        >
          View full résumé
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div> */}
    </section>
  );
};

export default ExperienceSection;
