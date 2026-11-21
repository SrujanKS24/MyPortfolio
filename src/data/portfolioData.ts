export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: 'Ongoing' | 'Completed';
  featured: boolean;
  description: string;
  longDescription: string;
  technologies: string[];
  keyFeatures: string[];
  architecture?: {
    layers: { name: string; desc: string; icon: string }[];
    roles?: { name: string; desc: string; color: string }[];
    highlights: string[];
  };
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  focus: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  score: string;
  scoreType: string;
  location?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  badge?: string;
  description: string;
  verificationUrl?: string;
}

export interface ActivityItem {
  title: string;
  organization: string;
  period?: string;
  description: string;
  tags: string[];
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "Srujan K S",
    shortName: "Srujan",
    initials: "SKS",
    roleTitle: "Computer Science Engineering Student",
    roles: [
      "Software Engineer",
      "Full-Stack Developer",
      "Backend Developer",
      "Problem Solver",
    ],
    headlines: {
      primary: "Building digital experiences. Engineering solutions.",
      secondary: "Code. Build. Solve. Repeat.",
    },
    location: "Bengaluru, India",
    availability: "Open to Software Engineering Opportunities",
    educationOverview: "BMS Institute of Technology and Management • BE in CSE (2023–2027)",
    cgpa: "9.02 / 10",
    previousCgpa: "8.41 / 10",
    description: "I build scalable web applications, design backend systems, and turn ideas into functional digital products.",
    bio: "Computer Science Engineering student with hands-on experience developing full-stack web applications using modern technologies. Skilled in building RESTful APIs, database integration, authentication, authorization, and responsive web interfaces.",
    extendedBio: "I'm a Computer Science Engineering student at BMS Institute of Technology and Management with a strong interest in software engineering and full-stack development. I enjoy building applications that solve real-world problems, understanding how systems work behind the scenes, and continuously improving my engineering skills. My experience includes developing full-stack applications, designing REST APIs, implementing authentication systems, working with databases, and structuring maintainable backend architectures. Currently, I'm focused on strengthening my software engineering fundamentals, backend development skills, and problem-solving abilities while building meaningful projects.",
  },

  socialLinks: {
    github: "https://github.com/SrujanKS24",
    linkedin: "https://linkedin.com/in/srujan-k-s",
    leetcode: "https://leetcode.com/srujanks",
    email: "srujanks0406@gmail.com",
    resumeUrl: "/Srujan_K_S_Resume.pdf",
  },

  interests: [
    "Software Engineering",
    "Full-Stack Development",
    "Backend Engineering",
    "System Design",
    "Database Design",
    "Data Structures and Algorithms",
    "Cloud Computing",
    "AI-powered applications",
  ],

  projects: [
    {
      id: "agrios",
      title: "AgriOS",
      subtitle: "AI-Assisted Agricultural Procurement Platform",
      status: "Ongoing",
      featured: true,
      description: "An agricultural supply-chain platform designed to connect farmers, buyers, warehouses, logistics providers, and administrators through a unified digital procurement ecosystem.",
      longDescription: "AgriOS eliminates middleman inefficiencies in agricultural commerce through a unified multi-stakeholder ecosystem. Engineered with enterprise-grade modular architecture, AgriOS manages end-to-end procurement workflows—from crop listing and quality assessment to automated warehouse intake, logistics routing, and transparent order settlement. Security is enforced via JWT access tokens coupled with HTTP-only refresh tokens and granular Role-Based Access Control (RBAC).",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "JWT", "Docker"],
      keyFeatures: [
        "Multi-role platform: Farmer, Buyer, Warehouse, Logistics, Admin",
        "Farmer management & dynamic crop listing engine",
        "Buyer procurement workflows & streamlined order bidding",
        "Warehouse inventory tracking & intake validation",
        "Logistics integration with real-time transit status",
        "Enterprise authentication with HTTP-only refresh tokens",
        "Granular Role-Based Access Control (RBAC) middleware",
        "Modular Service-Repository backend architecture with centralized error handling",
      ],
      architecture: {
        layers: [
          { name: "Client Layer", desc: "React.js Dynamic SPA with role-tailored dashboards & real-time views", icon: "Monitor" },
          { name: "API Gateway / Middleware", desc: "Express Router, Rate Limiters, CORS, Centralized Error Interceptor", icon: "Shield" },
          { name: "Auth & RBAC Layer", desc: "JWT verification & HTTP-only refresh tokens with strict permission gates", icon: "Lock" },
          { name: "Controllers", desc: "HTTP request validation, payload sanitation, and HTTP status orchestration", icon: "Cpu" },
          { name: "Services Layer", desc: "Core business logic, procurement workflows, transactional guarantees", icon: "Layers" },
          { name: "Repository & ORM", desc: "Prisma Client abstractions, parameterized queries & safe migrations", icon: "Database" },
          { name: "Data Tier", desc: "PostgreSQL relational store with indexed relational schemas & foreign key integrity", icon: "Server" },
        ],
        roles: [
          { name: "Farmer", desc: "Lists harvests, tracks procurement pricing, schedules warehouse drop-offs", color: "#10B981" },
          { name: "Buyer", desc: "Discovers verified produce batches, places bulk purchase orders, tracks fulfillment", color: "#06B6D4" },
          { name: "Warehouse", desc: "Inspects incoming crop quality, logs grain weight, manages silo allocation", color: "#F59E0B" },
          { name: "Logistics", desc: "Assigns fleet routes, updates milestone tracking, verifies delivery receipt", color: "#8B5CF6" },
          { name: "Admin", desc: "Audits platform compliance, resolves trade disputes, oversees system metrics", color: "#EC4899" },
        ],
        highlights: [
          "Controllers → Services → Repositories pattern ensures high testability & zero vendor lock-in",
          "Decoupled authentication prevents credential leakage via secure cookies",
          "Containerized with Docker for deterministic staging & production builds",
        ],
      },
      githubUrl: "https://github.com/SrujanKS24/AgriOS",
      liveUrl: "https://agrios-preview.vercel.app",
      tags: ["Full-Stack", "Backend Architecture", "System Design", "Supply Chain", "PostgreSQL"],
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Web Application Platform",
      subtitle: "Full-Stack Retail System with Scalable Inventory Management",
      status: "Completed",
      featured: true,
      description: "Developed a full-stack e-commerce web application featuring secure user authentication, product search, cart management, RESTful APIs, and database-driven inventory management.",
      longDescription: "A high-performance full-stack digital commerce engine engineered for snappy shopping experiences and reliable inventory operations. Includes reactive client-side catalog filtering, real-time cart state synchronization, atomic inventory decrements during checkout, transactional receipt generation, and robust RESTful API endpoints protected by authorization guards.",
      technologies: ["React", "Node.js", "Express.js", "Database", "REST APIs", "Tailwind CSS"],
      keyFeatures: [
        "Secure token-based authentication and user session management",
        "Instant debounced product search & dynamic multi-criteria filtering",
        "Persistent cart management with optimistic UI updates",
        "Dynamic React frontend with smooth page transitions and cart drawer",
        "RESTful API integration with uniform response envelopes",
        "Database schema design for users, orders, categories, and inventory items",
        "Atomic inventory management preventing overselling conditions",
        "Complete transaction history records and order tracking",
        "Automated endpoint testing and cloud deployment workflow",
      ],
      githubUrl: "https://github.com/SrujanKS24/ecommerce-platform",
      liveUrl: "https://shop-engine-preview.vercel.app",
      tags: ["React", "Express.js", "REST APIs", "Database Design", "Full-Stack"],
    },
  ] as Project[],

  skills: [
    {
      title: "Programming Languages",
      description: "Core languages used for systems programming, data structures, and web development",
      skills: [
        { name: "C", highlight: true },
        { name: "C++", highlight: true },
        { name: "SQL", highlight: true },
        { name: "HTML", highlight: false },
        { name: "CSS", highlight: false },
      ],
    },
    {
      title: "Frontend Development",
      description: "Building responsive, modern, and accessible user interfaces",
      skills: [
        { name: "React.js", highlight: true },
        { name: "JavaScript", highlight: true },
        { name: "Tailwind CSS", highlight: true },
      ],
    },
    {
      title: "Backend Development",
      description: "Designing resilient server-side services, APIs, and business logic",
      skills: [
        { name: "Node.js", highlight: true },
        { name: "Express.js", highlight: true },
        { name: "REST APIs", highlight: true },
      ],
    },
    {
      title: "Database Management",
      description: "Relational and non-relational database design and query optimization",
      skills: [
        { name: "PostgreSQL", highlight: true },
        { name: "MySQL", highlight: true },
        { name: "MongoDB", highlight: false },
      ],
    },
    {
      title: "Tools & DevOps",
      description: "Version control, containerization, and developer tooling",
      skills: [
        { name: "Git", highlight: true },
        { name: "GitHub", highlight: true },
        { name: "Docker", highlight: true },
        { name: "Postman", highlight: true },
      ],
    },
    {
      title: "Cloud Infrastructure",
      description: "Deploying and managing cloud-native services and computing",
      skills: [
        { name: "AWS", highlight: true },
      ],
    },
    {
      title: "Core Computer Science Concepts",
      description: "Fundamental engineering principles governing scalable software",
      skills: [
        { name: "Data Structures & Algorithms", highlight: true },
        { name: "Object-Oriented Programming", highlight: true },
        { name: "Database Management Systems", highlight: true },
        { name: "Computer Networks", highlight: false },
        { name: "Authentication", highlight: true },
        { name: "Authorization", highlight: true },
        { name: "RESTful API Design", highlight: true },
      ],
    },
  ] as SkillCategory[],

  experienceBuilding: [
    {
      id: "exp-1",
      title: "Full-Stack Project Development",
      focus: "End-to-End Product Engineering",
      period: "2023 – Present",
      description: "Architecting and implementing modern full-stack web applications from conceptual wireframes to scalable backend microservices and responsive frontends.",
      highlights: [
        "Constructing modular client SPAs using React.js, Tailwind CSS, and state management",
        "Engineering RESTful API ecosystems with Node.js and Express",
        "Bridging frontend interactions with robust error handling and loading indicators",
      ],
      technologies: ["React", "Node.js", "Express.js", "Tailwind CSS", "REST"],
    },
    {
      id: "exp-2",
      title: "Backend Architecture & Service Design",
      focus: "Scalability & Maintainability",
      period: "2024 – Present",
      description: "Designing layered server applications following clean architecture patterns (Controllers, Services, Repositories) for high testability and clean separation of concerns.",
      highlights: [
        "Decoupling business logic from HTTP transport layers for modular maintenance",
        "Implementing centralized middleware for logging, rate limiting, and exception capture",
        "Structuring deterministic configuration and environment variable validation",
      ],
      technologies: ["Node.js", "Express.js", "Docker", "Clean Architecture"],
    },
    {
      id: "exp-3",
      title: "Database Modeling & Query Engineering",
      focus: "Data Integrity & Performance",
      period: "2023 – Present",
      description: "Architecting normalized relational schemas in PostgreSQL and MySQL, modeling entity relationships, indexes, and transactional boundaries.",
      highlights: [
        "Designing 3NF schemas with foreign key constraints, cascade rules, and check constraints",
        "Leveraging Prisma ORM and raw SQL for efficient query execution",
        "Mitigating N+1 query bottlenecks and structuring multi-table join strategies",
      ],
      technologies: ["PostgreSQL", "MySQL", "Prisma", "SQL", "MongoDB"],
    },
    {
      id: "exp-4",
      title: "Authentication & Security Systems",
      focus: "Access Control & Data Protection",
      period: "2024 – Present",
      description: "Implementing bulletproof identity verification and authorization layers for multi-tenant and multi-role enterprise web applications.",
      highlights: [
        "Authoring stateless JWT authentication paired with secure HTTP-only refresh tokens",
        "Implementing granular Role-Based Access Control (RBAC) middleware",
        "Enforcing password hashing using bcrypt with adaptive salt work factors",
      ],
      technologies: ["JWT", "RBAC", "Bcrypt", "HTTP Cookies", "Security"],
    },
    {
      id: "exp-5",
      title: "Software Engineering & Problem Solving",
      focus: "Algorithms & Best Practices",
      period: "2023 – Present",
      description: "Rigorous daily practice of Data Structures and Algorithms, object-oriented design principles, Git version control workflows, and automated API validation.",
      highlights: [
        "Practicing DSA problem solving on LeetCode across trees, graphs, DP, and arrays",
        "Maintaining clean Git commits, feature branch workflows, and PR code reviews",
        "Documenting API endpoints with Postman collections and schema contracts",
      ],
      technologies: ["C++", "C", "DSA", "Git", "Postman", "OOP"],
    },
  ] as ExperienceItem[],

  education: [
    {
      institution: "BMS Institute of Technology and Management",
      degree: "Bachelor of Engineering",
      field: "Computer Science Engineering",
      period: "2023 – 2027",
      score: "8.41",
      scoreType: "CGPA (Out of 10)",
      location: "Bengaluru, Karnataka",
      highlights: [
        "Core coursework: Data Structures, Operating Systems, Database Management Systems, Object-Oriented Programming, Computer Networks",
        "Active member of developer and technical coding communities on campus",
      ],
    },
    {
      institution: "Vishwachetana Vidyaniketana PU College",
      degree: "12th / Pre-University",
      field: "Science Stream (PCMB)",
      period: "2020 – 2022",
      score: "93.45%",
      scoreType: "Percentage",
      location: "Karnataka, India",
      highlights: [
        "Strong foundation in Mathematics, Physics, Chemistry, and analytical reasoning",
        "Graduated with distinction",
      ],
    },
    {
      institution: "Gurudeva Vidya Prasara Parishath",
      degree: "Secondary School Leaving Certificate (SSLC)",
      field: "General Academics",
      period: "2020",
      score: "95.67%",
      scoreType: "Percentage",
      location: "Karnataka, India",
      highlights: [
        "Academic excellence with top percentile ranking across academic subjects",
      ],
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      description: "Validated comprehensive understanding of AWS Cloud concepts, security, architecture, pricing models, computing instances, and cloud-native infrastructure.",
      badge: "Cloud Practitioner",
    },
    {
      title: "Large Language Model",
      issuer: "NPTEL",
      description: "Covered foundational neural network architectures, attention mechanisms, Transformer models, prompt engineering, and LLM fine-tuning methodologies.",
      badge: "Deep Learning / AI",
    },
  ] as CertificationItem[],

  activities: [
    {
      title: "Annual Tech Fest Participant & Coordinator",
      organization: "BMSIT Tech Fest",
      description: "Coordinated event logistics and participant engagement during a three-day college-wide technical festival, facilitating competitive coding and project showcases.",
      tags: ["Event Coordination", "Technical Management", "Leadership"],
    },
    {
      title: "NSS Volunteer",
      organization: "National Service Scheme (NSS)",
      description: "Contributed to community service initiatives, including blood donation drives, educational outreach programs, and environmental awareness campaigns.",
      tags: ["Community Service", "Social Impact", "Teamwork"],
    },
  ] as ActivityItem[],
};
