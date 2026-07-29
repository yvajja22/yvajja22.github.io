import type {
  Education,
  Experience,
  Highlight,
  Project,
  SkillGroup,
  SocialLink,
} from "./types";

export const siteConfig = {
  name: "Yatin Vajja",
  title: "Software Engineer",
  location: "Dallas, TX",
  citizenship: "U.S. Citizen",
  workAuthorization: "Authorized to work in the United States · No sponsorship required",
  url: "https://yvajja22.github.io",
  email: "yatinsvajja@gmail.com",
  resumePath: "/Yatin_Vajja_Resume.pdf",
  dallasImage: {
    src: "/dallas-skyline.jpg",
    alt: "Downtown Dallas skyline at dusk reflected in the Trinity River",
    credit: "Downtown Dallas, TX",
  },
  description:
    "Computer Science graduate and incoming Software Engineer at Fidelity Investments with experience building scalable full-stack applications, cloud solutions, and data-driven systems.",
  ogImage: "/og.png",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/yvajja22",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yatin-vajja",
  },
  {
    label: "Email",
    href: "mailto:yatinsvajja@gmail.com",
  },
];

export const heroHighlights: Highlight[] = [
  "Incoming Software Engineer at Fidelity Investments",
  "U.S. Citizen · No sponsorship required",
  "Software Engineering Intern at Vizient",
  "Full-stack, cloud, and backend engineering",
  "Interest in AI engineering",
];

export const aboutSummary = [
  "I'm a Computer Science student at The University of Texas at Dallas with a Minor in Finance, joining Fidelity Investments as an Incoming Software Engineer through the LEAP Software Engineer Program in August 2026. Based in Dallas, TX.",
  "I've built enterprise-facing full-stack features, cloud-backed analytics pipelines, and campus-scale systems — from Angular and .NET dashboards used by healthcare leaders to Next.js applications serving thousands of students.",
  "I'm a U.S. Citizen, authorized to work in the United States with no sponsorship required. I'm especially interested in AI, LLMs, and scalable systems, and I'm focused on growing as an engineer who ships reliable software with measurable impact.",
];

export const experiences: Experience[] = [
  {
    id: "fidelity",
    company: "Fidelity Investments",
    role: "Incoming Software Engineer — LEAP Program",
    start: "August 2026",
    end: "Present",
    status: "upcoming",
    summary:
      "Incoming Software Engineer joining Fidelity Investments through the LEAP Software Engineer Program. Transitioning into a full-time software engineering role within an enterprise-scale technology environment, contributing to Agile software development and building scalable software solutions.",
  },
  {
    id: "vizient",
    company: "Vizient",
    role: "Software Engineer Intern",
    location: "Irving, TX",
    start: "June 2025",
    end: "August 2025",
    status: "past",
    summary:
      "Built and shipped full-stack features for Vizient's Healthcare Performance Executive Dashboard in an Agile Scrum environment.",
    achievements: [
      "Designed and deployed full-stack features using Angular and C#/.NET Framework for Vizient's Healthcare Performance Executive Dashboard.",
      "Application adopted by 1,000+ healthcare leaders.",
      "Improved system performance by 30% through reusable Angular components and optimized backend services.",
      "Built ETL pipelines using Azure Databricks for near real-time analytics.",
      "Automated deployments using Azure DevOps and Pulumi Infrastructure as Code.",
    ],
  },
  {
    id: "epics",
    company: "Epics UT Design",
    role: "Software Engineer",
    location: "Dallas, TX",
    start: "January 2024",
    end: "May 2024",
    status: "past",
    summary:
      "Developed full-stack tooling and backend algorithms to improve team formation and application performance at scale.",
    achievements: [
      "Developed backend algorithms improving team formation for 5,400+ students.",
      "Built full-stack applications using React.js, Next.js, TypeScript, and SQLite.",
      "Improved database performance by 2x through schema optimization.",
      "Used Prisma ORM and API routes for scalable backend development.",
    ],
  },
  {
    id: "utd-its",
    company: "UT Dallas Information Technology Systems",
    role: "IT Support Engineer",
    location: "Dallas, TX",
    start: "March 2023",
    end: "October 2024",
    status: "past",
    summary:
      "Supported university-wide technology operations spanning identity, collaboration platforms, and cloud infrastructure.",
    achievements: [
      "Supported 10,000+ university users.",
      "Assisted with authentication, Microsoft 365, and technical issues.",
      "Improved infrastructure efficiency using Azure cloud resources.",
      "Used Splunk and Microsoft Teams Admin Center for troubleshooting.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "cs-degree-planner",
    title: "CS Degree Planner",
    period: "November 2024 — May 2025",
    description:
      "Built an automated degree planning platform helping UTD students create customized degree pathways, validate prerequisites, and receive course recommendations.",
    technologies: ["Python", "React", "MongoDB", "APIs"],
    impact: [
      "Reduced planning time by 30%",
      "Supported 1,000+ concurrent users",
      "Achieved 99.9% uptime",
      "Implemented secure academic data handling",
    ],
    status: "shipped",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    description:
      "Conversational AI interface exploring LLM integration, prompt design, and production-ready chat UX.",
    technologies: ["TypeScript", "LLMs", "APIs"],
    status: "coming-soon",
  },
  {
    id: "rag-application",
    title: "RAG Application",
    description:
      "Retrieval-augmented generation system for grounded answers over private or domain-specific knowledge bases.",
    technologies: ["Python", "Embeddings", "Vector Search"],
    status: "coming-soon",
  },
  {
    id: "llm-assistant",
    title: "LLM-Powered Assistant",
    description:
      "Task-oriented assistant focused on reliable tool use, structured outputs, and practical developer workflows.",
    technologies: ["TypeScript", "LLMs", "Tool Calling"],
    status: "coming-soon",
  },
  {
    id: "ai-agent",
    title: "AI Agent",
    description:
      "Autonomous agent prototype for multi-step reasoning, planning, and action loops over real-world tasks.",
    technologies: ["Python", "Agents", "Orchestration"],
    status: "coming-soon",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "C++", "C#", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Angular", "Next.js", "JavaScript Libraries"],
  },
  {
    category: "Backend",
    skills: [".NET Framework", "REST APIs", "Prisma ORM", "Database Design"],
  },
  {
    category: "Cloud / DevOps",
    skills: [
      "Azure",
      "Azure DevOps",
      "Databricks",
      "Docker",
      "Kubernetes",
      "Pulumi",
      "Splunk",
    ],
  },
];

export const education: Education = {
  school: "The University of Texas at Dallas",
  degree: "Bachelor of Science in Computer Science",
  minor: "Minor in Finance",
  graduation: "May 2026",
  coursework: [
    "Advanced Data Structures and Algorithms",
    "Programming Language Paradigms",
    "Computer Networks",
    "Database Systems",
    "Software Engineering",
    "Business Finance",
  ],
};
