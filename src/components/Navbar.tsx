"use client";
import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="top-0 left-0 right-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center font-incognito">
          <Link
            href="/"
            className="text-xl font-bold cursor-pointer dark:text-white text-zinc-900"
          >
            Bipin Kalakheti
          </Link>
          <div className="flex gap-6">
            <Link
              href="/about"
              className={`px-3 py-1 rounded-md dark:text-zinc-400 dark:hover:text-white hover:text-zinc-900 
                transition-all duration-300 hover:bg-zinc-400 dark:hover:bg-zinc-800/50
                ${
                  pathname === "/about" ? "bg-zinc-400 dark:bg-zinc-800/50" : ""
                }`}
            >
              about
            </Link>
            {/* <Link
              href="/blog"
              className="dark:text-zinc-400 hover:text-white transition"
            >
              blog
            </Link> */}
            <Link
              href="/projects"
              className={`px-3 py-1 rounded-md dark:text-zinc-400 dark:hover:text-white hover:text-zinc-900 
                transition-all duration-300 hover:bg-zinc-400 dark:hover:bg-zinc-800/50
                ${
                  pathname === "/projects"
                    ? "bg-zinc-400 dark:bg-zinc-800/50"
                    : ""
                }`}
            >
              projects
            </Link>

            {/* <Link
              href="/visitors"
              className="dark:text-zinc-400 hover:text-white transition"
            >
              visitors
            </Link> */}
            <Link
              href="/contact"
              className={`px-3 py-1 rounded-md dark:text-zinc-400 dark:hover:text-white hover:text-zinc-900 
                transition-all duration-300 hover:bg-zinc-400 dark:hover:bg-zinc-800/50
                ${
                  pathname === "/contact"
                    ? "bg-zinc-400 dark:bg-zinc-800/50"
                    : ""
                }`}
            >
              contact
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
