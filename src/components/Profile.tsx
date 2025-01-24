import { Mail, Github, Linkedin } from "lucide-react";
import { incognito } from "../../public/assets/font/font";
import Image from "next/image";

const ProfileSection = () => {
  return (
    <div className={`flex items-start gap-6 mt-6 ${incognito.variable}`}>
      <div className="w-20 h-20 relative">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src="/assets/images/profile.png"
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-semibold mb-2">
          Hey, I&apos;m Bipin Kalakheti{" "}
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
        <p className="text-zinc-300 text-lg">
          I'm a creative software developer with experience in UI design and
          crafting engaging user experiences with great attention to detail.
        </p>
      </div>
      <div className="flex gap-4">
        <a
          href="mailto:bipinkalakheti7@gmail.com"
          className="text-zinc-400 hover:text-white transition"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/Bipin-Kalakheti"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/bipin-kalakheti/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default ProfileSection;
