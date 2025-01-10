import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-2",
    title: "Portfolio Website",
    description:
      "Personal portfolio website built with Next.js and TailwindCSS.",
    imageUrl: "/images/portfolio.jpg",
    technologies: [
      { name: "React", icon: "⚛" },
      { name: "Next.js", icon: "N" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind", icon: "~" },
    ],
    featured: true,
  },
  {
    id: "guff-gaff",
    title: "GuffGaff",
    description:
      "A React-based real-time chat app leveraging Firebase for backend services.",
    imageUrl: "/images/guff-gaff.jpg",
    technologies: [
      { name: "React", icon: "⚛" },
      { name: "Firebase", icon: "🔥" },
      { name: "Node.js", icon: "⬢" },
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
    imageUrl: "/images/khaja-ghar.jpg",
    technologies: [
      { name: "React", icon: "⚛" },
      { name: "Node.js", icon: "⬢" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Express", icon: "🚂" },
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
    imageUrl: "/images/path-viz.jpg",
    technologies: [
      { name: "React", icon: "⚛" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind", icon: "~" },
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
    imageUrl: "/images/visual-sort.jpg",
    technologies: [
      { name: "Next.js", icon: "N" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind", icon: "~" },
    ],
    github: "https://github.com/Bipin-Kalakheti/visualsort",
    link: "https://visualsort-three.vercel.app/",
    featured: false,
  },
  {
    id: "roj-gar",
    title: "RojGar",
    description:
      "A NextJs app, designed to manage and organize job applications, statuses, and related notes.",
    imageUrl: "/images/roj-gar.jpg",
    technologies: [
      { name: "Node.js", icon: "⬢" },
      { name: "Next.js", icon: "N" },
      { name: "Prisma", icon: "🔷" },
      { name: "Tailwind", icon: "~" },
    ],
    github: "https://github.com/Bipin-Kalakheti/RojGar",
    link: "https://rojgar-jade.vercel.app/",
    featured: false,
  },
  {
    id: "mini-project",
    title: "Mini Practice project",
    description:
      "A NextJs app, designed to manage and organize job applications, statuses, and related notes.",
    imageUrl: "/images/mini-project.jpg",
    technologies: [
      { name: "Next.js", icon: "N" },
      { name: "JavaScript", icon: "JS" },
    ],
    github: "https://github.com/Bipin-Kalakheti/Practice_NextJs",
    link: "https://nextjs-mini-projects-iota.vercel.app/",
    featured: false,
  },
];