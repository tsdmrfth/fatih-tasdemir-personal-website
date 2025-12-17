export interface Project {
  title: string
  role?: string
  tech?: string[]
  description: string
  highlights?: string[]
  link?: string
  links?: {
    android?: string
    ios?: string
    apk?: string
  }
  type?: 'Entrepreneurship' | 'Open Source' | 'Indie Hacking' | 'Freelance'
  status?: 'Current' | 'Completed' | 'Active'
  images?: string[]
  platforms?: string
}

export interface Experience {
  company: string
  role: string
  location: string
  period: string
  description: string[]
  images?: string[]
  products?: {
    name: string
    links?: {
      android?: string
      ios?: string
      apk?: string
      images?: string[]
    }
  }[]
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface NavItem {
  label: string
  id: string
}

export interface Education {
  school: string
  degree: string
  period: string
  location: string
  courses?: string[]
}