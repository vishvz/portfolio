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
    tagline: "IoT device management platform for ~20,000 smart street lights",
    description:
      "A backend-heavy IoT platform for real-time monitoring and remote control of ~20,000 IoT-enabled smart street-lighting devices.",
    techStack: ["TypeScript", "NestJS", "MongoDB", "MQTT", "Next.js"],
    role: "Backend Developer",
    highlights: [
      "Architected backend services for real-time monitoring and remote control of ~20,000 devices",
      "Engineered MQTT telemetry ingestion processing ~50 million messages per day, with validation and deduplication of delayed or duplicate data",
      "Built two-way device control APIs with command execution tracking and acknowledgment handling",
      "Implemented server-side alarm evaluation for power failures, communication loss, and threshold breaches",
      "Optimized MongoDB schemas and indexes, cutting global dashboard API response from ~20s to under 2s",
    ],
    type: "iot",
    order: 1,
  },
  {
    id: "zenabook",
    name: "Zenabook",
    tagline: "AI-powered multi-tenant accounting SaaS platform",
    description:
      "A multi-tenant SaaS accounting platform that lets accounting firms onboard clients and manage their accounting through staff-based workflows, assisted by an AI service.",
    techStack: ["Python", "FastAPI", "LangGraph", "RabbitMQ", "React", "PostgreSQL"],
    role: "Backend Developer",
    highlights: [
      "Building FastAPI services backed by PostgreSQL for client onboarding, staff management, and accounting operations",
      "Collaborating on a LangGraph AI service that auto-categorizes transactions, extracts invoice and receipt data, and drafts ledger entries",
      "Using RabbitMQ for asynchronous, event-driven communication between the backend and AI services",
    ],
    type: "enterprise",
    order: 2,
  },
  {
    id: "neutron",
    name: "Neutron",
    tagline: "Healthcare coordination platform for insurance and diagnostics",
    description:
      "A healthcare intermediary platform connecting insurers, corporates, and diagnostic service providers across five role-based portals.",
    techStack: ["TypeScript", "React", "Express.js", "MongoDB"],
    role: "Backend Developer",
    highlights: [
      "Built backend workflows connecting insurers, corporates, and diagnostic providers across 5 role-based portals",
      "Implemented end-to-end appointment lifecycle management handling ~1,000 appointments per day",
      "Developed secure server-side document pipelines handling ~1,000 medical documents per day",
      "Handled ID-proof attachment, image processing, face-match snapshots, PDF stamping, and document merging",
    ],
    type: "healthcare",
    order: 3,
  },
  {
    id: "oopchar",
    name: "Oopchar",
    tagline: "Multi-tenant healthcare platform for clinics and hospitals",
    description:
      "A multi-tenant healthcare platform supporting patients, clinics, hospitals, laboratories, and staff.",
    techStack: ["TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    role: "Sole Backend Developer",
    highlights: [
      "Designed a microservices architecture of 7 backend services behind a centralized API Gateway",
      "Enforced tenant- and clinic-level data isolation",
      "Built dynamic appointment scheduling with safeguards against overbooking and concurrent booking conflicts",
      "Used PostgreSQL transactions to guarantee consistency across appointments, clinical interactions, invoicing, and billing",
    ],
    type: "healthcare",
    order: 4,
  },
  {
    id: "xcare",
    name: "Xcare",
    tagline: "Live healthcare product used by 10–15 clinics",
    description:
      "A live healthcare product with backend services and a cross-platform Electron desktop app, used by 10–15 clinics serving roughly 5,000 patients each.",
    techStack: [
      "TypeScript",
      "Node.js",
      "Electron",
      "React",
      "Twilio",
      "Google Calendar API",
    ],
    role: "Backend + Desktop Developer",
    highlights: [
      "Implemented a secure desktop auto-update mechanism using backend-controlled GitHub releases",
      "Built two-way clinic-to-patient messaging with Twilio Conversations (desktop chat to patient SMS)",
      "Implemented usage-based SMS billing per clinic",
      "Integrated Google Calendar via OAuth with bi-directional sync to auto-block appointment slots",
    ],
    type: "healthcare",
    order: 5,
  },
  {
    id: "dmms",
    name: "DMMS",
    tagline: "Full-stack asset management system with lifecycle tracking",
    description:
      "A full-stack asset management system tracking assets, maintenance schedules, warranties, and lifecycle events.",
    techStack: ["TypeScript", "Next.js", "MongoDB"],
    role: "Full-Stack Developer",
    highlights: [
      "Designed and built asset tracking across maintenance schedules, warranties, and lifecycle events",
      "Built role-based access control and multi-site data segregation",
      "Implemented custom approval workflows for sensitive asset actions",
    ],
    type: "enterprise",
    order: 6,
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
      "FastAPI",
      "REST APIs",
      "Microservices",
      "RabbitMQ",
      "MQTT",
    ],
  },
  {
    label: "Languages",
    order: 2,
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    label: "Databases",
    order: 3,
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "MySQL", "Redis"],
  },
  {
    label: "Frontend",
    order: 4,
    items: ["React", "Next.js", "Electron", "Tailwind CSS"],
  },
  {
    label: "Cloud & DevOps",
    order: 5,
    items: [
      "AWS (EC2, S3, RDS, Lambda, SQS, SES, CloudWatch)",
      "GCP",
      "Docker",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    label: "AI / LLM",
    order: 6,
    items: ["LangGraph"],
  },
  {
    label: "Integrations",
    order: 7,
    items: [
      "Razorpay",
      "PhonePe",
      "Stripe",
      "Twilio",
      "Google Maps",
      "Google Calendar",
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
  resumePath: "/Vishvajeet_Zala.pdf",
  openToWork: true,
};
