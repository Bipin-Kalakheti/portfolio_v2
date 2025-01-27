"use client";
import { useTheme } from "@/hooks/useTheme";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="py-6 md:px-4 md:py-0">
      <div className="container mx-auto max-w-4xl p-6 md:py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center dark:text-zinc-400 text-zinc-600">
            Built with Next.js, Tailwind & Framer Motion
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bipinkalra"
              target="_blank"
              rel="noreferrer"
              className="dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/bipinkalra"
              target="_blank"
              rel="noreferrer"
              className="dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/bipinkalra"
              target="_blank"
              rel="noreferrer"
              className="dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
