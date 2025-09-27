export interface Skill {
  name: string;
  category: "Languages" | "Tools/Frameworks";
}

export const skills: Skill[] = [
  // Languages
  { name: "C", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "C#", category: "Languages" },
  { name: "VHDL", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "HTML", category: "Languages" },
  { name: "Assembly", category: "Languages" },

  // Tools/Frameworks
  { name: "Git", category: "Tools/Frameworks" },
  { name: "Linux", category: "Tools/Frameworks" },
  { name: "AWS", category: "Tools/Frameworks" },
  { name: "CodeWarrior", category: "Tools/Frameworks" },
  { name: "SQL", category: "Tools/Frameworks" },
  { name: "Docker", category: "Tools/Frameworks" },
  { name: "React", category: "Tools/Frameworks" },
  { name: "Node.js", category: "Tools/Frameworks" },
  { name: "TensorFlow", category: "Tools/Frameworks" },
  { name: "YAML", category: "Tools/Frameworks" },
  { name: "pandas", category: "Tools/Frameworks" },
  { name: "numpy", category: "Tools/Frameworks" },
  { name: "SPFx", category: "Tools/Frameworks" },
  { name: "Power Apps", category: "Tools/Frameworks" },
  { name: "Unity", category: "Tools/Frameworks" },
  { name: "Android Studio", category: "Tools/Frameworks" },
  { name: "Firebase", category: "Tools/Frameworks" },
  { name: "JUnit", category: "Tools/Frameworks" },
  { name: "Gradle", category: "Tools/Frameworks" },
  { name: "MongoDB", category: "Tools/Frameworks" },
  { name: "Quartus II", category: "Tools/Frameworks" },
  { name: "MATLAB", category: "Tools/Frameworks" },
  { name: "Flask", category: "Tools/Frameworks" },
  { name: "Ansible", category: "Tools/Frameworks" },
  { name: "Jenkins", category: "Tools/Frameworks" },
  { name: "PyTorch", category: "Tools/Frameworks" },
  { name: "scikit-learn", category: "Tools/Frameworks" },
];