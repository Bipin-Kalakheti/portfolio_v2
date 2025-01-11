import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-zinc-400 py-6 mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Bipin Kalakheti. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/Bipin-Kalakheti" className="hover:text-white transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bipin-kalakheti/" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="mailto:bipin.kalakheti@example.com" className="hover:text-white transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;