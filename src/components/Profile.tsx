import { Mail, Github, Linkedin } from "lucide-react";
import { incognito } from "../../public/assets/font/font";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import NameComp from "./namecomp";


const ProfileSection = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["i", "p", "i", "n"];

  // useEffect(() => {
  //   // Reduced timeout from 4000 to 3000 for faster initial animation
  //   const timer = setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //     const textZone = document.querySelector(".text-zone") as HTMLElement;
  //     if (textZone) {
  //       textZone.startTime = performance.now();
  //     }
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <div className={`flex items-start gap-6 mt-6 ${incognito.variable}`}>
        <div className="profile-image-container relative inline-block">
          <div
            className="pointer-events-none relative size-[70px] select-none hover:saturate-[70%]"
            style={{
              WebkitTouchCallout: "none",
              WebkitUserSelect: "none",
              KhtmlUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            <div className="absolute inset-1">
              <Image
                className="size-full rounded-full bg-muted-foreground/30 object-cover ring-2 ring-muted-foreground/50 ring-offset-2 ring-offset-background dark:hidden"
                src="/assets/images/profile.jpeg"
                alt="Profile"
                width={80}
                height={80}
              />
              <Image
                className="hidden size-full rounded-full bg-muted-foreground object-cover ring-2 ring-muted-foreground/50 ring-offset-2 ring-offset-background dark:block"
                src="/assets/images/profile.jpeg"
                alt="Profile Dark"
                width={80}
                height={80}
              />
              <Image
                className="z-10 absolute top-[2.5px] left-[3px] size-[50px] glasses"
                src="/assets/images/glasses.png"
                alt="Glasses"
                width={50}
                height={50}
              />
            </div>
            <svg
              className="absolute inset-0 size-full"
              viewBox="0 0 100 100"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                className="circle stroke-emerald-500 dark:stroke-green-500 "
                cx="50"
                cy="50"
                r="46"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="289.03"
                strokeDashoffset="289.03"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="lg:text-4xl md:text-3xl sm:text-xl text-xl font-semibold cursor-pointer transition-colors duration-300">
            <span>
                <NameComp text="Hey, I'm" /><br/> <NameComp text="Bipin Kalakheti" />
            </span>
            <span className="inline-block waving-hand">👋</span>
          </h1>
          <a
            href="mailto:bipinkalakheti7@Gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-1.5 mb-4"
          >
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="relative cursor-pointer overflow-hidden">
              <p className="group text-muted-foreground">
                <span className="group-hover:-translate-y-full flex flex-col border-b border-dashed transition-all duration-1000 ease-slow">
                  Available for work
                  <span className="invisible h-0"> Reach out</span>
                </span>
                <span className="group-hover:-translate-y-full absolute top-full flex items-center transition-all duration-1000 ease-slow">
                  Reach out
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 w-4 h-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
              </p>
            </div>
          </a>
        </div>
        <div className="hidden gap-4  sm:flex">
          <a
            href="mailto:bipinkalakheti7@gmail.com"
            className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Bipin-Kalakheti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/bipin-kalakheti/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <p className="dark:text-zinc-300 text-lg">
        I&apos;m a software engineering graduate specializing in modern web development, with a strong focus on building responsive and intuitive applications using React, Next.js, and Node.js. Through my projects, I combine technical skills with creative problem-solving to create engaging user experiences.
        </p>
      </div>
    </>
  );
};

export default ProfileSection;
