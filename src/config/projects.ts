import { Projects } from "types";

export const projects: Projects = [
  {
    title: "Portfolio",
    technologies: ["Astro", "TypeScript", "React", "TailwindCSS", "Shadcn/ui"],
    description:
      "This portfolio was built using Astro, TypeScript, React and TailwindCSS. It is hosted on Vercel.",
    href: "temp",
  },
  {
    title: "Sorting algorithm visualizer",
    technologies: ["Next.js", "TypeScript", "React", "TailwindCSS", "Daisy/ui"],
    description:
      "Sorting Algorithm Visualizer is a fun Next.js app that lets you visualize sorting algorithms in action. Playfully explore and understand algorithms like Bubble Sort, Insertion Sort, Merge Sort, and more, as animated visuals demonstrate their step-by-step execution. Perfect for learning and entertainment!",
    href: "https://github.com/norbertbla/Sorting-Algorithm-Visualiser",
  },
  {
    title: "Booksly",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
    ],
    description:
      "Bookly is a web application that allows you browse books, filter them by category, and much more. It makes use of improved OpenLibrary database.",
    href: null,
  },
];
