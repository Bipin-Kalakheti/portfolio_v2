"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-black">
      <div className=" max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold cursor-pointer">
            Bipin Kalakheti
          </Link>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-zinc-400 hover:text-white transition"
            >
              about
            </Link>
            <Link
              href="/blog"
              className="text-zinc-400 hover:text-white transition"
            >
              blog
            </Link>
            <Link
              href="/projects"
              className="text-zinc-400 hover:text-white transition"
            >
              projects
            </Link>

            <Link
              href="/visitors"
              className="text-zinc-400 hover:text-white transition"
            >
              visitors
            </Link>
            <Link
              href="/contact"
              className="text-zinc-400 hover:text-white transition"
            >
              contact
            </Link>

            <button className="text-zinc-400 hover:text-white transition">
              🌙
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
