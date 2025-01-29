"use client";
import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 left-0 right-0 z-10  bg-white/70 dark:bg-black ">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center ">
          <Link
            href="/"
            className="text-xl font-semibold cursor-pointer dark:text-white text-zinc-900 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] transition-colors duration-300"
          >
            <h1 className="text-xl font-semibold cursor-pointer dark:text-white text-zinc-900 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] transition-colors duration-300">
              Bipin Kalakheti
            </h1>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            {[
              { href: "/about", label: "about" },
              { href: "/projects", label: "projects" },
              { href: "/contact", label: "contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium
                  ${
                    pathname === link.href
                      ? "bg-zinc-100 dark:bg-zinc-800 text-[var(--accent-color)]"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"
                  } transition-all duration-300`}
              >
                {link.label}
              </Link>
            ))}
            <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-2" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
