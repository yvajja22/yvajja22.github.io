export type SocialLink = {
  label: string;
  href: string;
};

export type Highlight = string;

export type Experience = {
  id: string;
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  status?: "upcoming" | "current" | "past";
  summary: string;
  achievements?: string[];
};

export type Project = {
  id: string;
  title: string;
  period?: string;
  description: string;
  technologies: string[];
  impact?: string[];
  href?: string;
  status: "shipped" | "coming-soon";
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Education = {
  school: string;
  degree: string;
  minor?: string;
  graduation: string;
  coursework: string[];
};
