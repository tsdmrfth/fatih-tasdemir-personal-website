import { Project, Experience, SkillCategory, Education } from './types'

export const CAREER_STARTING_DATE = '01/10/2027'

export const SOCIAL_LINKS = {
  github: "https://github.com/tsdmrfth",
  linkedin: "https://linkedin.com/in/fatih-tasdemir",
  email: "tsdmrfth@gmail.com",
  phone: "(+90) 505 001 0493"
}

export const BIO_SUMMARY = "Software Engineer with 8+ years of experience, capable of independently architecting and delivering enterprise-level, battle-tested software solutions. Deep expertise in React, React Native, and JavaScript, complemented by strong proficiency in TypeScript, Node.js, and Python. Leverage rigorous Clean Code principles and SOLID design patterns to build maintainable, scalable systems. Proven track record of engineering high-performance platforms from scratch—including real-time financial trading ecosystems—while adhering to industry best practices in TDD, security, and cloud infrastructure. Experienced in collaborating with cross-functional teams to deliver high-quality products."

export const PROJECTS: Project[] = [
  {
    title: "Traider",
    role: "Founder & Full Stack Engineer",
    type: "Entrepreneurship",
    status: "Current",
    tech: ["Next.js 15", "React 19", "FastAPI", "Firebase"],
    description: "AI-Powered Social Trading Platform. A scalable social trading ecosystem where AI agents execute autonomous strategies (currently in private backtesting).",
    highlights: [
      "Built a responsive Next.js 15 application using React 19 and Redux Toolkit, featuring a waitlist subscription system for the public onboarding page. Configured production deployments via Firebase App Hosting.",
      "Architected a high-concurrency FastAPI gateway and WebSocket server, building the entire backend codebase using a strict Test-Driven Development (TDD) approach. Implemented a non-blocking event bus to process real-time Telegram signals and media analysis.",
      "Managed Firebase infrastructure, configured DNS/SSL, and integrated Sentry for full-stack error monitoring.",
      "Key Features: Real-time trade signal broadcasting (WebSockets), secure JWT authentication, and automated AI confidence scoring loops."
    ],
    link: "https://traider.social",
    showWebview: false,
    images: [
      "/assets/traider/image1.png",
      "/assets/traider/image2.png",
      "/assets/traider/image3.png",
    ]
  },
  {
    title: "Lighter Coin",
    role: "Creator & Developer",
    type: "Indie Hacking",
    status: "Completed",
    tech: ["React 19", "Vite", "React Spring", "i18n"],
    description: "Official Website. Developed a high-performance, interactive storytelling landing page for the $LIGHTER cryptocurrency ecosystem.",
    highlights: [
      "Engineered a custom scroll-based animation system using React Spring, featuring a dynamic timeline with interactive elements.",
      "Implemented full internationalization (i18n) for English and Turkish, ensuring seamless language switching.",
      "Integrated Sentry for error monitoring and Hotjar for user behavior analytics to optimize UX/UI."
    ],
    link: "https://lighter-coin.com",
    showWebview: true,
    images: [
      "assets/lighter-coin/image1.png",
      "assets/lighter-coin/image2.png",
      "assets/lighter-coin/image3.png",
    ]
  },
  {
    title: "Langton's Ant",
    role: "Creator & Developer",
    type: "Indie Hacking",
    status: "Completed",
    tech: ["React", "TypeScript", "Node.js", "WebSockets"],
    description: "Simulation. Developed a real-time multiplayer implementation of Langton’s Ant, enabling users to collaboratively explore cellular automaton patterns on a shared grid.",
    highlights: [
      "Deployed the responsive React frontend on Netlify, featuring a high-performance Canvas rendering engine for smooth 60fps animations.",
      "Architected a custom Node.js WebSocket backend to handle bidirectional communication and synchronize game state across clients.",
      "Designer of a flexible rule configuration system, allowing users to define custom ant behaviors and modify simulation parameters in real-time."
    ],
    link: "https://tsdmrfth-langtons-ant.netlify.app",
    showWebview: true,
    images: [
      "assets/langtons-ant/image1.png",
      "assets/langtons-ant/image2.png",
    ]
  },
  {
    title: "react-native-steve",
    role: "Author & Maintainer",
    type: "Open Source",
    status: "Active",
    tech: ["React Native", "TypeScript", "NPM"],
    description: "Authored and maintained a high-performance Clubhouse-style staggered grid animation component (Masonry Layout) for React Native.",
    highlights: [
      "Designed a declarative, developer-friendly API with full TypeScript support and type definitions.",
      "Implemented efficient rendering logic to ensure 60fps performance on both iOS and Android devices.",
      "Configured automated CI/CD pipelines for semantic versioning, testing, and streamlined package releases."
    ],
    link: "https://github.com/tsdmrfth/react-native-steve",
    images: [
      "https://camo.githubusercontent.com/09d31a2c3500f523204afcb0ecedb9b8a5581d2ed0faee03d9f0d453f57e23bd/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f464671346c4b6571654149467268374372492f67697068792e676966"
    ]
  }
]

export const EXPERIENCE: Experience[] = [
  {
    company: "Combiine",
    role: "React Native Developer",
    location: "United Kingdom (Remote)",
    period: "11/2020 – Present",
    description: [
      "Spearheaded the end-to-end development of white-label mobile applications, including: MOVE by Fleet Operations (Android | iOS), MOVE by Traxall UK (Android | iOS), Traxall Germany (Android | iOS), and Combiine (Android | iOS).",
      "Architecting scalable, modular codebases with multi-language support, optimized for maintainability and high performance.",
      "Improving feature delivery speed by 20% through active contribution to sprint planning and product discussions.",
      "Reducing app load times and memory usage via rigorous performance profiling and optimization.",
      "Integrating CI/CD pipelines for streamlined delivery to both iOS and Android platforms."
    ],
    images: [
      "/assets/combiine/image.png",
      "/assets/combiine/image1.png",
      "/assets/combiine/image2.png",
      "/assets/combiine/image3.png",
      "/assets/combiine/image4.png",
      "/assets/combiine/image5.png",
      "/assets/combiine/image6.png",
      "/assets/combiine/image7.png",
    ],
    products: [
      {
        name: "Combiine White Label Application",
        description: "A robust, scalable white-label solution designed to power multiple customized enterprise applications from a single unified codebase. \n\nKey Engineering Features:\n• Modular Architecture: Optimized for maintainability and rapid feature rollout across different client configurations.\n• Multi-Language Support: Fully integrated internalization (i18n) handling dynamic content for diverse regions.\n• Performance: Rigorously profiled to minimize memory usage and load times ensuring smooth 60fps performance.\n• CI/CD Integration: Automated pipelines streaming delivery to both Google Play and App Store for multiple app flavors.\n• Feature Flags: Dynamic configuration allowing granular control over features per tenant.",
        deployments: [
          {
            name: "MOVE by Fleet Operations (England and Northern Ireland)",
            links: {
              android: "https://play.google.com/store/apps/details?id=com.combiine.fleetops",
              ios: "https://apps.apple.com/app/move-by-fleet-operations/id1562643472"
            }
          },
          {
            name: "MOVE by Traxall UK (England)",
            links: {
              android: "https://play.google.com/store/apps/details?id=com.combiine.traxall",
              ios: "https://apps.apple.com/app/move-by-traxall-uk/id1603866196"
            }
          },
          {
            name: "Traxall Germany (Germany)",
            links: {
              android: "https://play.google.com/store/apps/details?id=de.combiine.traxall",
              ios: "https://apps.apple.com/app/traxall-germany/id6739236245"
            }
          },
          {
            name: "Combiine (England)",
            links: {
              android: "https://play.google.com/store/apps/details?id=com.combiine",
              ios: "https://apps.apple.com/app/combiine/id1616806880"
            }
          }
        ]
      }
    ]
  },
  {
    company: "EvdekiBakicim.com",
    role: "Mobile Application Developer",
    location: "Istanbul, Türkiye",
    period: "10/2017 – 03/2020",
    description: [
      "Developed and maintained two flagship applications: EvdekiBakicim and EvdekiBakicim Kurumsal.",
      "Created a shared Redux-based module to standardize state management across multiple apps.",
      "Built custom Native Modules to address hardware-specific requirements and improve integration.",
      "Designed CI/CD pipelines to automate build/distribution, significantly reducing deployment time."
    ],
    products: [
      {
        name: "EvdekiBakicim (Platform Inactive)",
        description: "A high-growth caregiving marketplace platform connecting families with certified caregivers. \n\nKey Engineering Highlights:\n• Optimized 4-step recruitment workflow for rapid caregiver matching.\n• Integrated real-time tracking for service transparency and safety.\n• Architected shared business logic between client and caregiver interfaces.\n• Streamlined booking management system reducing time-to-hire by 40%.",
        links: {
          apk: "https://apkpure.com/tr/evdekibakicim/com.fratelli.evdekibakicim",
          images: [
            "/assets/evdekibakicim/image1.jpg",
            "/assets/evdekibakicim/image2.jpg",
            "/assets/evdekibakicim/image3.jpg",
            "/assets/evdekibakicim/image4.jpg",
            "/assets/evdekibakicim/image5.jpg",
            "/assets/evdekibakicim/image6.jpg"
          ]
        }
      },
      {
        name: "EvdekiBakicim Kurumsal (Platform Inactive)",
        description: "A dedicated B2B ecosystem providing corporate employees with premium care services as a workplace benefit. \n\nKey Engineering Highlights:\n• Engineered secure corporate domain verification for exclusive onboarding.\n• Developed specialized recruitment pipelines for enterprise-scale job management.\n• Implemented granular filtering for diverse care categories (Elderly, Child, Tutoring).\n• Scaled the platform to support high-concurrency corporate user loads.",
        links: {
          apk: "https://apkpure.com/tr/evdekibakicim/com.eb_corporate_rn",
          images: [
            "/assets/evdekibakicim-kurumsal/image1.jpg",
            "/assets/evdekibakicim-kurumsal/image2.jpg",
            "/assets/evdekibakicim-kurumsal/image3.jpg",
            "/assets/evdekibakicim-kurumsal/image4.jpg",
            "/assets/evdekibakicim-kurumsal/image5.jpg"
          ]
        }
      }
    ]
  }
]

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "Java"]
  },
  {
    category: "Frontend & Mobile",
    items: ["React Native", "React 19", "Next.js 15", "Redux Toolkit", "Vite", "React Spring", "Vanilla CSS", "Tailwind"]
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "FastAPI", "Firebase (App Hosting, Auth, Firestore)", "WebSockets", "Docker", "Redis", "MongoDB"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "CI/CD (GitHub Actions/Bitrise)", "Sentry", "Hotjar", "Jira", "Scrum/Kanban"]
  },
  {
    category: "Testing",
    items: ["Jest", "Mocha", "Unit Testing", "TDD"]
  }
]

export const EDUCATION: Education[] = [
  {
    school: "Istanbul Aydin University",
    degree: "BS, Software Engineering",
    period: "2017 – Current",
    location: "Istanbul",
    courses: [
      "React Native (Udemy)",
      "NodeJS (Udemy)",
      "Docker-Kubernetes Guide",
      "Java & Android (Bilge Adam)"
    ]
  }
]

export const FREELANCE_PROJECTS: Project[] = [
  {
    title: "Getlug",
    description: "Global zero-commission platform connecting travelers for package delivery and local support (interpretation, business visits).",
    platforms: "Android | iOS",
    tech: ["React Native", "Redux", "Node.js", "Firebase"],
    highlights: [
      "Architected a peer-to-peer delivery ecosystem connecting travelers with local package delivery needs.",
      "Integrated multi-language support (English, Russian, Turkish) for global accessibility.",
      "Implemented real-time chat and push notifications for order progress tracking."
    ],
    links: {
      android: "https://play.google.com/store/apps/details?id=co.meridyen.getlug&hl=en",
      ios: "https://apps.apple.com/tr/app/getlug/id1604088099"
    },
    images: [
      "/assets/getlug/image.png",
      "/assets/getlug/image1.png",
      "/assets/getlug/image2.png",
      "/assets/getlug/image3.png",
      "/assets/getlug/image4.png"
    ]
  },
  {
    title: "LookingForCarPark",
    description: "Real-time parking finder.",
    platforms: "Android | iOS",
    tech: ["React Native", "Google Maps API", "Node.js"],
    highlights: [
      "Developed a real-time parking finder app with deep Google Maps API integration.",
      "Implemented location-based search and granular filter systems for nearby car parks.",
      "Designed a responsive UI optimized for on-the-go driver interactions."
    ],
    links: {
      android: "https://play.google.com/store/apps/details?id=com.lookingforcarpark.app&hl=en",
      ios: "https://apps.apple.com/gb/app/lookingforcarpark/id1509443150"
    },
    images: [
      "/assets/looking-for-car-park/image.png",
      "/assets/looking-for-car-park/image1.png",
      "/assets/looking-for-car-park/image2.png"
    ]
  },
  {
    title: "Kader Kahini",
    description: "Card fortune app.",
    platforms: "Android APK",
    tech: ["React Native", "React Native Reanimated", "Context API"],
    highlights: [
      "Developed an interactive card fortune-telling experience with custom animations built from scratch using Reanimated.",
      "Optimized for offline performance and lightweight APK distribution (under 15MB).",
      "Built a custom randomization engine for varied and engaging user results."
    ],
    links: {
      apk: "https://apkpure.com/tr/kader-kahini/com.improv.kader_kahini"
    },
    images: [
      "/assets/kader-kahini/image.png",
      "/assets/kader-kahini/image1.png",
      "/assets/kader-kahini/image2.png"
    ]
  },
  {
    title: "ÇekiciÇağır",
    description: "Roadside assistance service.",
    platforms: "iOS",
    tech: ["React Native", "Geolocation", "Pusher"],
    highlights: [
      "Built a location-based roadside assistance request platform for rapid service matching.",
      "Implemented real-time provider tracking using Geolocation and Pusher channels.",
      "Streamlined the service request flow to minimize user input during emergencies."
    ],
    links: {
      ios: "https://apps.apple.com/app/%C3%A7ekici%C3%A7a%C4%9F%C4%B1r/id1445298041"
    },
    images: [
      "/assets/cekici-cagir/image.png",
      "/assets/cekici-cagir/image1.png",
      "/assets/cekici-cagir/image2.png",
      "/assets/cekici-cagir/image3.png"
    ]
  },
  {
    title: "LeoFun",
    description: "Online casino platform offering slots, baccarat, blackjack, and roulette with full Japanese language support. Features a unified codebase delivering a seamless experience across Mobile, Tablet, and Web.",
    platforms: "Android (Phone | Tablet) | Web",
    tech: ["Expo Router", "React Native", "TypeScript", "Mocha", "react-native-web", "react-native-reanimated", "react-native-gesture-handler"],
    highlights: [
      "Engineered a high-performance casino lobby with real-time game state synchronization.",
      "Authored a unified codebase supporting Phone, Tablet, and Web via react-native-web.",
      "Implemented strict security protocols for transaction handling and user data protection."
    ],
    links: {
      android: "https://play.google.com/store/apps/details?id=com.leo.fun&hl=en"
    },
    images: [
      "/assets/leofun/mobile/image1.png",
      "/assets/leofun/mobile/image2.png",
      "/assets/leofun/mobile/image3.png",
      "/assets/leofun/mobile/image4.png",
      "/assets/leofun/tablet/image5.png",
      "/assets/leofun/tablet/image6.png",
      "/assets/leofun/tablet/image7.png",
      "/assets/leofun/tablet/image8.png",
      "/assets/leofun/web/image1.png",
      "/assets/leofun/web/image2.png",
      "/assets/leofun/web/image3.png"
    ]
  }
]