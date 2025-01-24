import JavaScriptIcon from "../../public/assets/Icons/JavaScript";
import ReactIcon from "../../public/assets/Icons/React";
import TypeScriptIcon from "../../public/assets/Icons/TypeScript";
import NextjsIcon from "../../public/assets/Icons/Nextjs";
import ViteIcon from "../../public/assets/Icons/Vite";
import HtmlIcon from "../../public/assets/Icons/Html";
import RustIcon from "../../public/assets/Icons/Rust";
import GitIcon from "../../public/assets/Icons/Github";
import JavaIcon from "../../public/assets/Icons/Java";
import ExpressIcon from "../../public/assets/Icons/Express";
import PythonIcon from "../../public/assets/Icons/Python";
import MongoDBIcon from "../../public/assets/Icons/Mongodb";
import NodejsIcon from "../../public/assets/Icons/Node";
import FirebaseIcon from "../../public/assets/Icons/Firebase";
import FigmaIcon from "../../public/assets/Icons/Figma";
import TailwindIcon from "../../public/assets/Icons/Tailwind";
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-2",
    title: "Portfolio V1",
    description:
      "Personal portfolio website built with Next.js and TailwindCSS.",
    imageUrl: "/assets/images/portfolio.png",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/Portfolio",
    link: "https://portfolio-old-mauve-sigma.vercel.app/",
    featured: true,
  },
  {
    id: "guff-gaff",
    title: "GuffGaff",
    description:
      "A React-based real-time chat app leveraging Firebase for backend services.",
    imageUrl: "/assets/images/GuffGaff.png",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "Firebase", icon: FirebaseIcon },
      { name: "Node.js", icon: NodejsIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/GuffGaff",
    link: "https://chatapp-e9717.firebaseapp.com",
    featured: true,
  },
  {
    id: "khaja-ghar",
    title: "KhajaGhar",
    description:
      "A full-stack food ordering web application built with the MERN stack.",
    imageUrl: "/assets/images/KhajaGhar.png",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "Node.js", icon: NodejsIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "Express", icon: ExpressIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/KhajaGhar",
    link: "https://khajaaghaar.netlify.app/",
    featured: false,
  },
  {
    id: "path-viz",
    title: "PathViz",
    description:
      "A NextJs app, designed to manage and organize job applications, statuses, and related notes.",
    imageUrl: "/assets/images/pathviz.png",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/pathviz",
    link: "https://pathviz-phi.vercel.app/",
    featured: false,
  },
  {
    id: "visual-sort",
    title: "VisualSort",
    description:
      "A NextJs app, designed to manage and organize job applications, statuses, and related notes.",
    imageUrl: "/assets/images/visualSort.png",
    technologies: [
      { name: "Next.js", icon: NextjsIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind", icon: TailwindIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/visualsort",
    link: "https://visualsort-three.vercel.app/",
    featured: false,
  },
  // {
  //   id: "roj-gar",
  //   title: "RojGar",
  //   description:
  //     "A NextJs app, designed to manage and organize job applications, statuses, and related notes.",
  //   imageUrl: "/assets/images/RojGar.png",
  //   technologies: [
  //     { name: "Node.js", icon: "⬢" },
  //     { name: "Next.js", icon: "N" },
  //     { name: "Prisma", icon: "🔷" },
  //     { name: "Tailwind", icon: "~" },
  //   ],
  //   github: "https://github.com/Bipin-Kalakheti/RojGar",
  //   link: "https://rojgar-jade.vercel.app/",
  //   featured: false,
  // },
  {
    id: "mini-project",
    title: "Mini Practice project",
    description:
      "A NextJs app, designed to manage and organize job applications, statuses, and related notes.",
    imageUrl: "/assets/images/mini-project.gif",
    technologies: [
      { name: "Next.js", icon: NextjsIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
    ],
    github: "https://github.com/Bipin-Kalakheti/Practice_NextJs",
    link: "https://nextjs-mini-projects-iota.vercel.app/",
    featured: false,
  },
];
