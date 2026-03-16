

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
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      screens: 15
    }
  },

  {
    id: 3,
    title: "FabFit Fashion Shopping App",
    tagline: "Modern E-Commerce Android App with MVVM & Clean Architecture",
    description:
      "A full-featured Android shopping app for fashion and lifestyle. Users can browse products, view details, select sizes and colors, add items to cart or wishlist, and checkout securely with Razorpay. Built with MVVM, Hilt DI, Firebase auth, and Jetpack Compose with Material 3 design.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/FabFit",
    githubUrl: "https://github.com/Harsh181507/FabFit",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase",
      "Hilt",
      "MVVM",
      "Razorpay"
    ],
    year: "2025",
    category: "Mobile Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      screens: 12
    }
  },

  // ── OTHER PROJECTS ─────────────────────────────────────────

  {
    id: 4,
    title: "Certificate Generator Platform",
    tagline: "Automated Certificate Generation System",
    description:
      "A web tool for college clubs to generate event certificates instantly. Organizers input participant details and download certificates as PDFs using pre-designed templates — no login, no bulk upload, just fast and easy certificate creation.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/Certificate-Generator",
    githubUrl: "https://github.com/Harsh181507/Certificate-Generator",
    technologies: [
      "React",
      "JavaScript",
      "PDF Generation"
    ],
    year: "2025",
    category: "Web Application",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      templates: 5
    }
  },

  {
    id: 5,
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
    featured: true,
    stats: {
      stars: 0,
      forks: 0,
      endpoints: 15
    }
  },

  {
    id: 6,
    title: "MediApp – Medical Shop App",
    tagline: "Android App for Medical Product Ordering",
    description:
      "A modern Android app for seamless medical product ordering. Features user registration, login, product catalog, order placement, and an approval workflow. Built with Kotlin, Jetpack Compose, Hilt, Retrofit, and DataStore with a beautiful Material 3 UI.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/MediApp",
    githubUrl: "https://github.com/Harsh181507/MediApp",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Retrofit",
      "Hilt",
      "DataStore"
    ],
    year: "2025",
    category: "Mobile Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      screens: 8
    }
  },

  {
    id: 7,
    title: "Medical Shop Management API",
    tagline: "Flask REST API for Medical Shop Backend",
    description:
      "A Flask-based REST API for managing a medical shop. Includes user management, product catalog CRUD, and order management with structured error handling and modular code architecture.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/flask_api",
    githubUrl: "https://github.com/Harsh181507/flask_api",
    technologies: [
      "Python",
      "Flask",
      "REST APIs",
      "SQLite"
    ],
    year: "2025",
    category: "Backend Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      endpoints: 12
    }
  },

  {
    id: 8,
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
  },

  {
    id: 9,
    title: "E-Book Reader App",
    tagline: "Firebase-Powered Book Reader for Android",
    description:
      "An Android app that fetches and displays books from Firebase Firestore. Users can view book covers and open PDFs to read. Built with Jetpack Compose, Coil for image loading, Hilt for DI, and MVVM architecture.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/e-book",
    githubUrl: "https://github.com/Harsh181507/e-book",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Firebase Firestore",
      "Coil",
      "Hilt"
    ],
    year: "2025",
    category: "Mobile Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      screens: 4
    }
  },

  {
    id: 10,
    title: "News App",
    tagline: "Real-Time News Reader with Category Filters",
    description:
      "An Android news reader app with real-time updates via News API. Features search, favorite categories, smooth Jetpack Compose UI, and MVVM architecture with Retrofit and Coroutines for async data fetching.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/My_News",
    githubUrl: "https://github.com/Harsh181507/My_News",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Retrofit",
      "MVVM",
      "News API"
    ],
    year: "2025",
    category: "Mobile Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      screens: 5
    }
  },

  {
    id: 11,
    title: "CryptoPriceTracker",
    tagline: "Real-Time Cryptocurrency Price Tracker",
    description:
      "An Android app that fetches real-time cryptocurrency prices from CoinMarketCap API. Features a clean, user-friendly design with seamless navigation and optimized performance.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/RealTimeCrypto",
    githubUrl: "https://github.com/Harsh181507/RealTimeCrypto",
    technologies: [
      "Kotlin",
      "Android SDK",
      "CoinMarketCap API",
      "REST APIs"
    ],
    year: "2024",
    category: "Mobile Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      screens: 3
    }
  },

  {
    id: 12,
    title: "Auto Traffic Control System",
    tagline: "Automated Traffic Signal Management",
    description:
      "A traffic control system project that automates traffic signal management for optimized traffic flow at intersections.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/Auto-Traffic-control-System",
    githubUrl: "https://github.com/Harsh181507/Auto-Traffic-control-System",
    technologies: [
      "Java",
      "Android"
    ],
    year: "2024",
    category: "Mobile Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      screens: 3
    }
  },

  {
    id: 13,
    title: "Login & Sign-Up System",
    tagline: "Android Authentication UI with Material Design",
    description:
      "A clean and modern Android login and sign-up UI built with Kotlin. Features animated transitions, form validation, and a polished Material Design interface ready for Firebase or API integration.",
    image:
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/Login-and-Sign--up",
    githubUrl: "https://github.com/Harsh181507/Login-and-Sign--up",
    technologies: [
      "Kotlin",
      "Android",
      "Material Design"
    ],
    year: "2024",
    category: "Mobile Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      screens: 2
    }
  },

  {
    id: 14,
    title: "Calculator App",
    tagline: "Android Calculator with Clean UI",
    description:
      "A simple yet elegant Android calculator app featuring basic arithmetic operations with a clean, intuitive interface and smooth user experience.",
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=900&q=80",
    liveUrl: "https://github.com/Harsh181507/Calculator",
    githubUrl: "https://github.com/Harsh181507/Calculator",
    technologies: [
      "Kotlin",
      "Android",
      "XML"
    ],
    year: "2024",
    category: "Mobile Development",
    featured: false,
    stats: {
      stars: 0,
      forks: 0,
      screens: 1
    }
  }

];

