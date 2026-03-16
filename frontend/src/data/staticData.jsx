

export const degrees = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    subtitle: "Vellore Institute of Technology – AP University",
    duration: "2023 – 2027",
    logo_path: "vitap.png",
    alt_name: "VIT-AP",
    initials: "VIT",
    descriptions: [
      "🎓 Pursuing B.Tech in Computer Science and Engineering with strong focus on Android and Backend Development.",
      "🚀 Completed a 7-month Android Developer Internship at FinTradify, shipping production apps to the Google Play Store.",
      "💻 Built scalable applications using Spring Boot, React and Jetpack Compose.",
      "🎤 Conducted technical sessions including Spring Boot and Android Development webinars with 100+ live participants.",
      "📚 Strong foundation in DSA, OOP, DBMS, Operating Systems and Computer Networks."
    ],
    website_link: "https://vitap.ac.in"
  }
];

// ─────────────────────────────────────────────────────────────
// CERTIFICATIONS
// ─────────────────────────────────────────────────────────────

export const certifications = [

  {
    title: "Spring Boot Development Course",
    subtitle: "Udemy",
    certificate_link: "",
    color_code: "#22c55e",
    icon: "🍃"
  },

  {
    title: "Android App Development",
    subtitle: "Neat Roots",
    certificate_link: "",
    color_code: "#3b82f6",
    icon: "📱"
  },

  {
    title: "AWS Cloud Foundations",
    subtitle: "Amazon Web Services",
    certificate_link: "",
    color_code: "#f59e0b",
    icon: "☁️"
  }

];

// ─────────────────────────────────────────────────────────────
// COMPETITIVE CODING
// ─────────────────────────────────────────────────────────────

export const competitiveSites = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Harsh_01815/",
    icon: "⚡",
    color: "#fb923c"
  },
  {
    name: "CSI Dev Team Associate Lead",
    url: "#",
    icon: "👨‍💻",
    color: "#3b82f6"
  },
  {
    name: "Dang (Freelance Agency)",
    url: "#",
    icon: "🏭",
    color: "#a3e635"
  }
];

// ─────────────────────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────────────────────

export const experiences = [

  {
    id: 1,
    role: "Android Developer Intern",
    company: "FinTradify",
    type: "Internship",
    period: "Jun 2025 – Jan 2026",
    location: "Noida, India",
    logo_path: "",
    color: "#38bdf8",
    current: false,
    highlights: [
      "Built and shipped production Android features using Kotlin and Jetpack Compose, deployed to the Google Play Store.",
      "Architected screens and modules following MVVM and Clean Architecture best practices for scalable codebases.",
      "Integrated REST APIs for real-time data synchronization between the mobile client and backend services.",
      "Boosted app stability by implementing Firebase Analytics, Sentry, and Instabug for crash monitoring and user-behavior insights.",
      "Reduced memory leaks and improved rendering performance through systematic profiling with Android Studio tools.",
      "Collaborated with cross-functional teams to ship iterative releases, improving user retention and app store ratings."
    ],
    tags: [
      "Kotlin",
      "Jetpack Compose",
      "MVVM",
      "REST APIs",
      "Firebase",
      "Sentry",
      "Play Store"
    ]
  }

];

// ─────────────────────────────────────────────────────────────
// CORE COMPUTER SCIENCE
// ─────────────────────────────────────────────────────────────

export const coreCS = [
  "Data Structures & Algorithms",
  "Object Oriented Programming",
  "System Design",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Microservices Architecture",
  "REST API Design",
  "Authentication & Authorization",
  "MVC Architecture",
  "Agile / SDLC",
  "Git Version Control"
];

// ─────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────

export const allProjects = [

  // ── FEATURED PROJECTS ──────────────────────────────────────

  {
    id: 1,
    title: "Patient Management Microservices",
    tagline: "Spring Boot Microservices Healthcare Backend",
    description:
      "An enterprise-grade distributed backend platform for healthcare providers. Includes Auth, Patient, Billing, and Analytics services, secured with JWT and routed via Spring Cloud Gateway. Services run in Docker on ECS Fargate, provisioned using AWS CDK and tested locally with LocalStack.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3250d3d1?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/patient-management-microservices",
    githubUrl: "https://github.com/Harsh181507/patient-management-microservices",
    technologies: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Docker",
      "JWT",
      "gRPC",
      "Kafka",
      "AWS"
    ],
    year: "2025",
    category: "Backend Microservices",
    featured: true,
    stats: {
      stars: 30,
      forks: 0,
      services: 4
    }
  },

  {
    id: 2,
    title: "Tomato Smart Food Delivery App",
    tagline: "Full-Stack Food Delivery Platform with AI Safety Features",
    description:
      "A modern food delivery app built during a hackathon with Kotlin & Jetpack Compose. Features restaurant browsing, cart management, Razorpay payments, smart bill splitting (equal & item-wise), and an AI-powered delivery partner safety system using accelerometer/gyroscope data to detect accidents and auto-notify emergency contacts via Twilio.",
    image:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/Tomato-Hackathon",
    githubUrl: "https://github.com/Harsh181507/Tomato-Hackathon",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Spring Boot",
      "Razorpay",
      "Firebase",
      "Twilio",
      "ML"
    ],
    year: "2025",
    category: "Mobile Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      screens: 15
    }
  },

  // ── OTHER PROJECTS ─────────────────────────────────────────

  {
    id: 3,
    title: "CSI Event Management System",
    tagline: "Backend API for College Event Management",
    description:
      "A Spring Boot backend system for managing college events for the CSI Development Team at VIT-AP. Features event CRUD operations, participant management, and Docker deployment with Render hosting.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/csieventmangement",
    githubUrl: "https://github.com/Harsh181507/csieventmangement",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Docker",
      "Maven"
    ],
    year: "2025",
    category: "Backend Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      endpoints: 15
    }
  },

  {
    id: 4,
    title: "MySchool – Attendance Tracker",
    tagline: "Android App for School Activity Management",
    description:
      "An Android app built with Jetpack Compose and Kotlin for managing school activities. Includes attendance tracking, attendance history, and auto-generated timetable with a modern Material 3 UI and Navigation Component.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/My_School",
    githubUrl: "https://github.com/Harsh181507/My_School",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "Navigation"
    ],
    year: "2025",
    category: "Mobile Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      screens: 6
    }
  }

];

