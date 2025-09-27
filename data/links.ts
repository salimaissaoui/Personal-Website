export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export const contactInfo: ContactInfo = {
  email: "salimaissaouii1@gmail.com",
  phone: "(613) 415-1011",
  location: "Ottawa, ON",
  github: "https://github.com/salimaissaoui",
  linkedin: "https://www.linkedin.com/in/salim-aissaoui-037030263/",
};

export const education: Education = {
  institution: "University of Ottawa",
  degree: "B.A.Sc. Honours Computer Engineering",
  period: "Sept 2022 – Present",
};

export const personalInfo = {
  name: "Salim Aissaoui",
  title: "Computer Engineering Student",
  bio: "Passionate Computer Engineering student at the University of Ottawa with extensive experience in software development, network automation, and machine learning. I enjoy building innovative solutions that solve real-world problems, from AI-powered trading systems to mobile applications that connect communities.",
  interests: [
    "Machine Learning & AI",
    "Network Automation",
    "Full-Stack Development",
    "Mobile App Development",
    "Cloud Computing",
    "Open Source Contributions"
  ],
};