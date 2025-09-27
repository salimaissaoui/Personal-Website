export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  tags: ProjectTag[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export type ProjectTag = "ML" | "Backend" | "Frontend" | "Cloud" | "Systems" | "Mobile";

export const projects: Project[] = [
  {
    id: "ai-stock-trader",
    title: "AI Stock Trader",
    description: "Predictive models (XGBoost/LightGBM) with AWS-backed data pipeline for automated stock trading decisions.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "XGBoost", "LightGBM", "AWS"],
    tags: ["ML", "Cloud", "Backend"],
    featured: true,
  },
  {
    id: "grnshift-navigator",
    title: "GRNShift Navigator",
    description: "Web application with machine learning capabilities to match user inputs to green-energy solutions.",
    technologies: ["Python", "SQL", "TensorFlow", "Flask"],
    tags: ["ML", "Backend", "Frontend"],
    featured: true,
  },
  {
    id: "grimpeurs-cycling-club",
    title: "Grimpeur's Cycling Club",
    description: "Mobile app for event creation and joining with comprehensive Firestore schema for users, events, and clubs.",
    technologies: ["Java", "XML", "Android Studio", "Firebase", "Firestore"],
    tags: ["Mobile", "Backend"],
    featured: true,
  },
  {
    id: "dev-issues-forum",
    title: "Dev Issues Forum",
    description: "SharePoint framework application serving 100+ developers for tracking and resolving development issues.",
    technologies: ["JavaScript", "React", "SPFx", "SharePoint"],
    tags: ["Frontend", "Systems"],
  },
  {
    id: "network-automation-tools",
    title: "Network Automation Tools",
    description: "Test automation framework for containerlab environments using Robot Framework libraries.",
    technologies: ["Python", "Robot Framework", "Docker", "Containerlab"],
    tags: ["Systems", "Backend"],
  },
  {
    id: "power-apps-workflow",
    title: "Power Apps Workflow Optimizer",
    description: "Automated workflow solution reducing critical runtime by 25% using Power Apps and Power Automate.",
    technologies: ["Power Apps", "Power Automate", "C#"],
    tags: ["Backend", "Systems"],
  },
];