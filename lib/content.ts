/**
 * Content loader for CMS-managed content
 * Reads JSON files from /content/ directory with fallback defaults
 */

// Content Types

export interface SiteContent {
  name: string;
  title: string;
  description: string;
  url: string;
  profilePhoto?: string;
  resume?: string;
}

export interface AboutContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  intro: string;
  careerGoal: string;
  highlights: string[];
  cpaStatus: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface SkillsContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  accounting: SkillCategory;
  audit: SkillCategory;
  tax: SkillCategory;
  tools: SkillCategory;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  type: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface ExperienceContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  entries: ExperienceEntry[];
}

export interface ProjectEntry {
  title: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface ProjectsContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  entries: ProjectEntry[];
}

export interface OngoingCertification {
  name: string;
  issuer: string;
  status: string;
  expected?: string;
}

export interface CompletedCertification {
  name: string;
  issuer: string;
  year: string;
}

export interface CertificationsContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  ongoing: OngoingCertification[];
  completed: CompletedCertification[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  highlights?: string[];
}

export interface EducationContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  entries: EducationEntry[];
}

export interface ContactLink {
  title: string;
  url: string;
  icon?: string;
}

export interface ContactContent {
  sectionTitle: string;
  sectionSubtitle?: string;
  email: string;
  phone?: string;
  location?: string;
  links?: ContactLink[];
}

// All content combined
export interface Content {
  site: SiteContent;
  about: AboutContent;
  skills: SkillsContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  certifications: CertificationsContent;
  education: EducationContent;
  contact: ContactContent;
}

// Default content (fallback if files are missing)
const defaults: Content = {
  site: {
    name: "Your Name",
    title: "Your Title",
    description: "Your description",
    url: "https://example.com",
    profilePhoto: "/uploads/profile.jpg",
    resume: "",
  },
  about: {
    sectionTitle: "About Me",
    sectionSubtitle: "Professional introduction.",
    intro: "Your introduction",
    careerGoal: "Your career goal",
    highlights: [],
    cpaStatus: "",
  },
  skills: {
    sectionTitle: "Core Skills",
    sectionSubtitle: "Technical expertise.",
    accounting: { title: "Accounting", items: [] },
    audit: { title: "Audit", items: [] },
    tax: { title: "Tax", items: [] },
    tools: { title: "Tools", items: [] },
  },
  experience: {
    sectionTitle: "Professional Experience",
    sectionSubtitle: "Career journey.",
    entries: [],
  },
  projects: {
    sectionTitle: "Projects",
    sectionSubtitle: "Academic and practical work.",
    entries: [],
  },
  certifications: {
    sectionTitle: "Professional Qualifications",
    sectionSubtitle: "Industry certifications.",
    ongoing: [],
    completed: [],
  },
  education: {
    sectionTitle: "Education",
    sectionSubtitle: "Academic qualifications.",
    entries: [],
  },
  contact: {
    sectionTitle: "Get in Touch",
    sectionSubtitle: "Open to discussing opportunities.",
    email: "email@example.com",
    phone: "",
    location: "",
    links: [],
  },
};

/**
 * Read and parse a JSON file from the content directory
 * Returns the parsed content or default value on error
 */
async function readContentFile<T>(filename: string, defaultValue: T): Promise<T> {
  try {
    const path = `./content/${filename}`;
    const text = await Deno.readTextFile(path);
    return JSON.parse(text) as T;
  } catch (error) {
    console.warn(`Failed to load content/${filename}:`, error);
    return defaultValue;
  }
}

/**
 * Load all CMS-managed content
 * Call this at request time in your route handler
 */
export async function loadContent(): Promise<Content> {
  // Load all content files in parallel
  const [
    site,
    about,
    skills,
    experience,
    projects,
    certifications,
    education,
    contact,
  ] = await Promise.all([
    readContentFile<SiteContent>("site.json", defaults.site),
    readContentFile<AboutContent>("about.json", defaults.about),
    readContentFile<SkillsContent>("skills.json", defaults.skills),
    readContentFile<ExperienceContent>("experience.json", defaults.experience),
    readContentFile<ProjectsContent>("projects.json", defaults.projects),
    readContentFile<CertificationsContent>("certifications.json", defaults.certifications),
    readContentFile<EducationContent>("education.json", defaults.education),
    readContentFile<ContactContent>("contact.json", defaults.contact),
  ]);

  return {
    site,
    about,
    skills,
    experience,
    projects,
    certifications,
    education,
    contact,
  };
}

// Type alias for full content export
export type AllContent = Content;
