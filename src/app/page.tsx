"use client";

import Navbar from "@/components/Navbar";
import TechStack from "@/components/Techstack";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <div className="mt-20">
          <div className="relative">
            {/* Map Section */}
            <div className="w-full h-64 rounded-lg overflow-hidden mb-8 bg-zinc-900">
              <div className="w-full h-full bg-opacity-50 flex items-center justify-center">
                <span className="text-zinc-500">Map View</span>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-md px-3 py-1">
                04:44 PM CST
              </div>
            </div>

            {/* Profile Section */}
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-zinc-800">
                {/* Add your profile image here */}
                <div className="w-full h-full bg-zinc-800" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-semibold mb-2">
                  Hey, I'm Bipin Kalakheti 👋
                </h1>
                <div className="flex items-center text-green-500 gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span>Available for work</span>
                </div>
                <p className="text-zinc-300 text-lg">
                  I'm a creative software developer with experience in UI design
                  and crafting engaging user experiences with great attention to
                  detail.
                </p>
              </div>
            </div>
          </div>

          <TechStack />
        </div>
      </div>
    </main>
  );
}
