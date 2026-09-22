export type SkillCategory = "Programming" | "Databases" | "AI & Tools" | "Networking" | "Version Control";
export type Proficiency = "Advanced" | "Intermediate" | "Developing" | "Beginner";

export type Skill = {
  name: string;
  category: SkillCategory;
  proficiency: Proficiency;
  description: string;
};

export const skills: Skill[] = [
  { name: "Python", category: "Programming", proficiency: "Advanced", description: "Core programming foundation." },
  { name: "Java", category: "Programming", proficiency: "Developing", description: "Active learning and practice." },
  { name: "HTML", category: "Programming", proficiency: "Intermediate", description: "Working fluency for web structure." },
  { name: "Full-Stack Development", category: "Programming", proficiency: "Developing", description: "Active learning across modern web development." },
  { name: "MySQL", category: "Databases", proficiency: "Advanced", description: "Core database foundation." },
  { name: "Generative AI", category: "AI & Tools", proficiency: "Beginner", description: "Active exploration of AI-powered applications." },
  { name: "Prompt Engineering", category: "AI & Tools", proficiency: "Developing", description: "Active learning and experimentation." },
  { name: "AI Tools", category: "AI & Tools", proficiency: "Developing", description: "Hands-on exploration of AI-powered tools." },
  { name: "Claude", category: "AI & Tools", proficiency: "Intermediate", description: "Working fluency with an AI development tool." },
  { name: "GitHub Copilot", category: "AI & Tools", proficiency: "Intermediate", description: "Working fluency with AI-assisted development." },
  { name: "Computer Networking", category: "Networking", proficiency: "Intermediate", description: "Working foundation in computer networking." },
  { name: "Git", category: "Version Control", proficiency: "Developing", description: "Active learning and organized development practice." },
];

export const categories = ["All", "Programming", "Databases", "AI & Tools", "Networking", "Version Control"] as const;

export const proficiencyWidth: Record<Proficiency, string> = {
  Advanced: "w-[92%]",
  Intermediate: "w-[68%]",
  Developing: "w-[48%]",
  Beginner: "w-[28%]",
};