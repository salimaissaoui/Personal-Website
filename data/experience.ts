export interface Experience {
  id: string;
  title: string;
  company: string;
  department?: string;
  period: string;
  bullets: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: "nokia-2025",
    title: "Software Engineering Intern",
    company: "Nokia",
    department: "Network Automation",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Built test automation for containerlab environments (Robot Framework libraries).",
      "Designed virtual network topologies with Docker/Containerlab for Digital Twin validation.",
    ],
    technologies: ["Python", "XGBoost", "LightGBM", "AWS", "Robot Framework", "Docker", "Containerlab"],
  },
  {
    id: "nokia-2024",
    title: "Software Engineering Intern",
    company: "Nokia",
    department: "Network Automation",
    period: "Apr 2024 – Dec 2024",
    bullets: [
      "Implemented end-to-end packet encryption improving routing speed & reliability.",
      "Added concurrency to test scripts → ~3× faster runs.",
      "Led protocol/services testing for 7750 SR; surfaced ~40% more bugs.",
      "Fixed numerous frontend issues on Network Services Platform.",
    ],
    technologies: ["Python", "JavaScript", "React", "Network Protocols"],
  },
  {
    id: "ssc-2023",
    title: "Software Engineering Intern",
    company: "Shared Services Canada",
    period: "Oct 2023 – Apr 2024",
    bullets: [
      "Halved a core site's load time via graphic/asset optimization.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Performance Optimization"],
  },
  {
    id: "dnd-2023",
    title: "Software Engineering Intern",
    company: "Dept. of National Defence",
    period: "Jun 2023 – Aug 2023",
    bullets: [
      "Built Dev Issues forum app (JS/React/SPFx) for 100+ devs.",
      "Cut critical workflow runtimes >25% with Power Apps/Automate.",
    ],
    technologies: ["JavaScript", "React", "SPFx", "Power Apps", "Power Automate"],
  },
];