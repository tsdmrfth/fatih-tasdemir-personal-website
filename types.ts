export interface Project {
  title: string;
  role: string;
  tech: string[];
  description: string;
  highlights: string[];
  link?: string;
  type: 'Entrepreneurship' | 'Open Source' | 'Indie Hacking';
  status: 'Current' | 'Completed' | 'Active';
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface NavItem {
  label: string;
  id: string;
}