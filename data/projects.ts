export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  role: string;
  highlights: string[];
  type: "healthcare" | "iot" | "enterprise";
  order: number;
}

export interface SkillGroup {
  label: string;
  items: string[];
  order: number;
}

export const projects: Project[] = [
  {
    id: "qbit-cms",
    name: "Qbit CMS",
    tagline: "IoT management system for street light devices at scale",
    description:
      "A backend-heavy IoT management system acting as a centralized control plane for remotely monitoring and controlling street light devices at scale.",
    techStack: ["NestJS", "MongoDB", "REST APIs", "IoT Protocols"],
    role: "Backend Developer",
    highlights: [
      "Designed high-frequency telemetry ingestion handling duplicate and delayed payloads",
      "Implemented server-side alarm evaluation for power failure, communication loss, and threshold breaches",
      "Built command dispatch system with acknowledgment tracking and execution status",
      "Created time-based scheduling for devices and groups to reduce real-time dependency",
      "Enforced role-based access control using NestJS guards for multi-tenant security",
    ],
    type: "iot",
    order: 1,
  },
  {
    id: "oopchar",
    name: "Oopchar",
    tagline: "Multi-tenant healthcare platform for clinics and hospitals",
    description:
      "A backend-driven, multi-tenant healthcare platform serving patients, clinics, multi-branch hospitals, laboratories, and healthcare staff through multiple role-based portals.",
    techStack: [
      "Node.js",
      "Microservices",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "REST APIs",
    ],
    role: "Sole Backend Developer (~1 year)",
    highlights: [
      "Designed and maintained ~7 microservices with a central API Gateway for authentication and routing",
      "Implemented multi-tenant isolation using JWT claims enforced at database query level",
      "Built dynamic appointment slot generation with transaction-based overbooking prevention",
      "Managed clinical workflows including vitals, prescriptions, lab investigations, and medical records",
      "Architected dual-database strategy: MongoDB for master data, PostgreSQL for transactional healthcare data",
    ],
    type: "healthcare",
    order: 2,
  },
  {
    id: "xcare",
    name: "Xcare",
    tagline:
      "Live healthcare product with real-time communication and calendar sync",
    description:
      "A live healthcare product featuring a desktop application built with Electron and React, focusing on real-time communication, calendar integrations, and secure updates.",
    techStack: [
      "Node.js",
      "Electron",
      "React",
      "Twilio",
      "Google Calendar API",
      "OAuth",
    ],
    role: "Freelance Engineer (Backend + Desktop)",
    highlights: [
      "Built secure auto-update mechanism for desktop app integrated with GitHub releases",
      "Designed chat module using Twilio Conversations with SMS routing for patient communication",
      "Implemented usage-based SMS billing per clinic from backend message logs",
      "Integrated Google Calendar with OAuth for provider-level calendar creation and mapping",
      "Built bi-directional sync between system appointments and external calendar events",
    ],
    type: "healthcare",
    order: 3,
  },
  {
    id: "neutron",
    name: "Neutron",
    tagline: "Healthcare coordination platform for insurance and diagnostics",
    description:
      "An internal backend-driven healthcare coordination platform acting as a bridge between insurance companies, corporates, and diagnostic service providers.",
    techStack: [
      "Express.js",
      "TypeScript",
      "MongoDB",
      "PDF Processing",
      "Image Processing",
    ],
    role: "Backend Developer",
    highlights: [
      "Managed end-to-end appointment workflows across multiple stakeholders",
      "Built secure medical report handling with image stamps, face-match snapshots, and PDF merging",
      "Implemented role-based access control for 5 distinct portals",
      "Designed dual-database architecture separating sensitive medical data from operational data",
      "All document processing handled server-side ensuring consistency and auditability",
    ],
    type: "healthcare",
    order: 4,
  },
  {
    id: "dmms",
    name: "DMMS",
    tagline: "Full-stack asset management system with lifecycle tracking",
    description:
      "A full-stack asset management system helping organizations track company assets across multiple sites while managing their complete lifecycle.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "REST APIs"],
    role: "Full-Stack Developer",
    highlights: [
      "Built asset lifecycle management: registration, maintenance scheduling, warranty tracking",
      "Implemented custom approval workflows for asset allocation, transfers, and disposal",
      "Designed multi-site data segregation with role-based access control",
      "Used flexible MongoDB schemas for varying asset types while maintaining core consistency",
      "Demonstrated end-to-end ownership from data modeling to API design to frontend integration",
    ],
    type: "enterprise",
    order: 5,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    order: 1,
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "Microservices",
      "API Gateway",
    ],
  },
  {
    label: "Databases",
    order: 2,
    items: ["MongoDB", "PostgreSQL", "Redis"],
  },
  {
    label: "Frontend",
    order: 3,
    items: ["React", "Next.js", "Electron", "Tailwind CSS"],
  },
  {
    label: "Integrations",
    order: 4,
    items: [
      "Twilio",
      "Google Calendar API",
      "OAuth 2.0",
      "JWT",
      "GitHub API",
      "Webhooks",
    ],
  },
];

export const siteConfig = {
  name: "Vishvajeetsinh Zala",
  title: "Backend / Full-Stack Software Engineer",
  tagline:
    "Building reliable backend systems for healthcare, IoT, and enterprise applications",
  location: "Ahmedabad, India",
  email: "vishvz2495@gmail.com",
  linkedin: "https://linkedin.com/in/vishvz",
  github: "https://github.com/vishvz",
  resumePath: "/resume.pdf",
  openToWork: true,
};
