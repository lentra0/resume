export type Contact = {
  label: string;
  value: string;
  href?: string;
  /** kept out of the public web page, printed in the PDF only */
  pdfOnly?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  context?: string | string[];
  bullets: string[];
};

export type Project = {
  name: string;
  href?: string;
  meta?: string;
  description: string;
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type Education = {
  org: string;
  degree: string;
  period: string;
  note?: string;
};

export type ResumeData = {
  lang: "ru" | "en";
  name: string;
  title: string;
  location: string;
  summary: string;
  contacts: Contact[];
  experience: Experience[];
  skills: SkillGroup[];
  projects: Project[];
  education: Education[];
  extras?: { label: string; value: string }[];
  ui: {
    sections: {
      summary: string;
      experience: string;
      skills: string;
      projects: string;
      education: string;
      extras: string;
    };
    downloadPdf: string;
    langLabel: string;
  };
};

export type Variant = "web" | "pdf";
