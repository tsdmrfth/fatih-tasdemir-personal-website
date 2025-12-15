import { Project, Experience, SkillCategory } from './types'

export const SOCIAL_LINKS = {
  github: "https://github.com/tsdmrfth",
  linkedin: "https://linkedin.com/in/fatih-tasdemir",
  email: "tsdmrfth@gmail.com",
  phone: "(+90) 505 001 0493"
}

export const PROJECTS: Project[] = [
  {
    title: "Traider",
    role: "Founder & Full Stack Engineer",
    type: "Entrepreneurship",
    status: "Current",
    tech: ["Next.js 15", "React 19", "FastAPI", "Firebase", "WebSockets"],
    description: "AI-Powered Social Trading Platform. A scalable ecosystem where AI agents execute autonomous strategies.",
    highlights: [
      "Designed a high-concurrency FastAPI gateway with non-blocking event bus.",
      "Built responsive Next.js 15 app with React 19 & Redux Toolkit.",
      "Implemented real-time trade signal broadcasting via WebSockets.",
      "Managed production DevOps via Firebase App Hosting with integrated Sentry."
    ],
    link: "https://traider.social"
  },
  {
    title: "Lighter Coin",
    role: "Creator & Developer",
    type: "Indie Hacking",
    status: "Completed",
    tech: ["React 19", "Vite", "React Spring", "i18n"],
    description: "High-performance interactive storytelling landing page for $LIGHTER cryptocurrency ecosystem.",
    highlights: [
      "Engineered custom scroll-based animation system using React Spring.",
      "Implemented full internationalization (i18n) for English/Turkish.",
      "Integrated Hotjar analytics and Sentry error monitoring."
    ],
    link: "https://lighter-coin.com"
  },
  {
    title: "react-native-steve",
    role: "Author & Maintainer",
    type: "Open Source",
    status: "Active",
    tech: ["React Native", "TypeScript", "NPM"],
    description: "High-performance Clubhouse-style staggered grid animation component (Masonry Layout).",
    highlights: [
      "Optimized rendering logic for 60fps performance on iOS & Android.",
      "Designed declarative API with full TypeScript support.",
      "Configured automated CI/CD for semantic versioning and releasing."
    ],
    link: "https://github.com/tsdmrfth/react-native-steve"
  },
  {
    title: "Langton's Ant",
    role: "Creator & Developer",
    type: "Indie Hacking",
    status: "Completed",
    tech: ["React", "TypeScript", "Node.js", "WebSockets"],
    description: "Real-time multiplayer implementation of cellular automaton patterns on a shared grid.",
    highlights: [
      "Architected custom Node.js WebSocket backend for bidirectional state sync.",
      "Developed high-performance Canvas rendering engine.",
      "Designed flexible rule configuration system for real-time modification."
    ],
    link: "https://tsdmrfth-langtons-ant.netlify.app"
  }
]

export const EXPERIENCE: Experience[] = [
  {
    company: "Combiine",
    role: "React Native Developer",
    location: "United Kingdom (Remote)",
    period: "11/2020 – Present",
    description: [
      "Spearheaded end-to-end development of white-label mobile applications including MOVE by Fleet Operations and Traxall.",
      "Architected scalable, modular codebases with multi-language support.",
      "Improved feature delivery speed by 20% through active contribution to sprint planning.",
      "Reduced app load times and memory usage via rigorous performance profiling."
    ]
  },
  {
    company: "EvdekiBakicim.com",
    role: "Mobile Application Developer",
    location: "Istanbul, Türkiye",
    period: "10/2017 – 03/2020",
    description: [
      "Developed and maintained two flagship applications: EvdekiBakicim & Kurumsal.",
      "Created a shared Redux-based module to standardize state management across apps.",
      "Built custom Native Modules for hardware-specific requirements.",
      "Designed CI/CD pipelines significantly reducing deployment time."
    ]
  }
]

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "Java"]
  },
  {
    category: "Frontend & Mobile",
    items: ["React Native", "React 19", "Next.js 15", "Redux Toolkit", "React Spring", "Tailwind CSS", "Vite"]
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "FastAPI", "Firebase", "WebSockets", "Docker", "Redis", "MongoDB"]
  },
  {
    category: "Domains & Strategy",
    items: ["Algorithmic Trading", "DeFi / Cryptocurrency", "AI Agents & LLMs"]
  }
]