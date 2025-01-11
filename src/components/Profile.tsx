import { Mail, Github, Linkedin } from "lucide-react";
import { incognito } from "../../public/assets/font/font";

const ProfileSection = () => {
  return (
    <div className={`flex items-start gap-6 mt-6 ${incognito.variable}`}>
      <div className="w-20 h-20 relative">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
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
          I'm a creative software developer with experience in UI design and
          crafting engaging user experiences with great attention to detail.
        </p>
      </div>
      <div className="flex gap-4">
        <a
          href="mailto:your.email@example.com"
          className="text-zinc-400 hover:text-white transition"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
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
