import {
  Activity,
  Award,
  BrainCircuit,
  Boxes,
  BriefcaseBusiness,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Gauge,
  Github,
  HardDrive,
  Layers3,
  Mail,
  MapPin,
  Network,
  RadioTower,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Video
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const personal = {
  name: "Abhay Jangra",
  role: "Full-Stack Developer",
  tagline: "Building production-ready AI media, backend, and cloud systems.",
  intro:
    "I work across backend APIs, cloud infrastructure, AI integrations, media processing pipelines, real-time job systems, credits/payments, and scalable worker architecture.",
  location: "Bahadurgarh, India",
  shortLocation: "India",
  email: "krabhay476@gmail.com",
  linkedIn: "abhay-j",
  github: "Abhay Jangra",
  linkedInUrl: "https://www.linkedin.com/in/abhay-j/",
  githubUrl: "https://github.com/AbhayJangra",
  resumeUrl: "/resume.pdf"
};

export const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export const heroBadges = ["AI Media Systems", "Backend Architecture", "AWS + Docker", "Real-time Workflows"];

export const heroStats = [
  { label: "App Downloads Impacted", value: "5M+" },
  { label: "Projects Built", value: "20+" },
  { label: "AWS Systems", value: "Prod" },
  { label: "AI + Media Infra", value: "Live" }
];

export const heroCommandLines = [
  { prompt: "abhay@systems", command: "build --ai-media --backend --cloud" },
  { prompt: "pipeline/status", command: "uploads -> credits -> queue -> workers -> delivery" },
  { prompt: "runtime", command: "ffmpeg | fal.ai | openai | s3 | cloudfront | socket.io" }
];

export const commandDockItems = [
  { label: "Terminal", value: "abhay@systems:~$", icon: Terminal },
  { label: "Location", value: "Bahadurgarh, India", icon: MapPin },
  { label: "Status", value: "Open to product engineering", icon: Activity },
  { label: "Focus", value: "AI Media + Backend + Cloud", icon: Code2 },
  { label: "Build Mode", value: "Production systems", icon: Rocket }
];

export const aboutStats = [
  "5M+ App Downloads Impacted",
  "20+ Projects Built",
  "Production AWS Systems",
  "AI + Media Infrastructure"
];

export const aboutCards = [
  {
    title: "Media Processing",
    text: "FFmpeg, large-file handling, S3 delivery, CloudFront, async workers.",
    icon: Video
  },
  {
    title: "AI Integrations",
    text: "Fal AI, OpenAI, video transformation, voice cloning, B-roll, translation.",
    icon: BrainCircuit
  },
  {
    title: "Cloud Systems",
    text: "AWS ECS Fargate, S3, CloudFront, Route 53, CloudWatch, Docker.",
    icon: Cloud
  },
  {
    title: "Product Backend",
    text: "Credits, Stripe, webhooks, sessions, real-time job tracking.",
    icon: CreditCard
  }
];

export const workAreas = [
  {
    title: "AI Media Platform Engineering",
    description:
      "Worked on Timbre, an AI-powered audio/video editing platform at Unity Internet. I built the backend, cloud, worker, and media-processing systems from scratch, including job orchestration, AI transformations, real-time status updates, credit deduction, and scalable deployment.",
    tags: ["Timbre", "Company Product", "Backend from Scratch", "Workers", "AWS", "React", "PostgreSQL"],
    icon: Sparkles
  },
  {
    title: "Scalable Media Processing Pipelines",
    description:
      "Built and improved systems for handling video/audio operations such as shorts generation, B-roll insertion, voice cloning, video translation, noise cleanup, caption workflows, and large-file processing. Focused on reliability, async execution, and user-visible progress.",
    tags: ["FFmpeg", "Queues", "Docker", "ECS Fargate", "S3", "CloudFront", "Socket.IO"],
    icon: Boxes
  },
  {
    title: "AI Integrations and Creative Tools",
    description:
      "Integrated AI services into product workflows, including image generation, video transformation, voice synthesis, transcription, translation, and OpenAI-powered automation. Worked with APIs such as Fal AI, OpenAI, Akool, and other media/AI services.",
    tags: ["Fal AI", "OpenAI", "Akool", "Flux LoRA", "Hunyuan Video", "Voice Clone"],
    icon: BrainCircuit
  },
  {
    title: "Cloud and Infrastructure Ownership",
    description:
      "Handled production infrastructure around AWS, Dockerized workers, S3 media storage, CloudFront delivery, Route 53 domains, SSL, IAM/SSM configuration, CloudWatch monitoring, CI/CD, and deployment debugging.",
    tags: ["AWS", "Docker", "ECS", "EC2", "S3", "CloudFront", "Route 53", "CloudWatch"],
    icon: Cloud
  },
  {
    title: "Payments, Credits, and Product Backend",
    description:
      "Worked on operation-based credit/cost tracking, Stripe payment flows, webhooks, subscription-related backend logic, transaction history, and usage-based product systems.",
    tags: ["Stripe", "Webhooks", "Credits", "PostgreSQL", "Node.js", "Express"],
    icon: CreditCard
  },
  {
    title: "Real-time Product Experience",
    description:
      "Built user-facing real-time flows where users can track long-running processing jobs live. Focused on making backend job states visible and understandable from the frontend.",
    tags: ["Socket.IO", "Job Status", "Progress UI", "React", "Backend APIs"],
    icon: RadioTower
  }
];

export const experienceItems = [
  {
    role: "Software Development Engineer",
    company: "Unity Internet Private Limited",
    period: "March 2025 - Present",
    context: "Company product: Timbre",
    link: "https://www.timbrehq.com/",
    ownership:
      "Built Timbre's backend, cloud, worker, and media-processing systems from scratch across production APIs, AWS infrastructure, queue-driven workers, credits/payments, and real-time job updates.",
    tags: ["Timbre", "Company Product", "Backend from Scratch", "AWS", "Workers", "AI Media", "Stripe"]
  },
  {
    role: "Full-Stack Developer Intern",
    company: "LSOYS Games & Apps Pvt. Ltd.",
    period: "August 2024 - January 2025",
    context: "FuelMatrix and live full-stack product work",
    link: "https://fuelmatrix.in",
    ownership:
      "Worked on full-stack product features, including fuel tracking workflows, fraud-reduction logic, responsive dashboards, backend APIs, and OpenAI-powered automation.",
    tags: ["FuelMatrix", "Internship", "Full-Stack", "React", "Node.js", "OpenAI"]
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "LSOYS Games & Apps Pvt. Ltd.",
    period: "Post-internship freelance engagement",
    context: "Education platform with multi-role dashboard",
    link: "",
    ownership:
      "Built a freelance education platform for LSOYS after the internship ended, including multi-role dashboards and product flows for different user types.",
    tags: ["Freelance", "Education Platform", "Multi-role Dashboard", "Full-Stack", "Client Work"]
  }
];

export const projects = [
  {
    title: "Timbre AI Media Platform",
    type: "Company Product",
    ownership: "Built at Unity Internet Private Limited",
    link: "https://www.timbrehq.com/",
    description:
      "A production AI audio/video platform at Unity Internet where I built the backend, cloud, worker, and media-processing systems from scratch, including APIs, scalable workers, AI integrations, AWS deployment, credits, payments, and real-time job tracking.",
    impact: "5M+ Android downloads impacted",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS ECS", "S3", "CloudFront", "Docker", "Socket.IO", "Stripe", "FFmpeg", "Fal AI"],
    command: "deploy media platform --workers=ai --delivery=cloudfront",
    signal: "Company Product"
  },
  {
    title: "AI B-roll and Shorts Workflow",
    type: "Timbre Product Area",
    ownership: "Built as part of company product work",
    link: "https://www.timbrehq.com/",
    description:
      "A Timbre product workflow for AI-powered video operations: analyzing media, generating/selecting B-roll, creating short-form content, running jobs asynchronously, and showing users real-time progress.",
    tech: ["Node.js", "OpenAI", "FFmpeg", "Workers", "Docker", "AWS ECS", "S3", "Socket.IO"],
    command: "queue video job -> analyze -> generate b-roll -> render shorts",
    signal: "Product Workflow"
  },
  {
    title: "Credits and Stripe Billing System",
    type: "Timbre Product Backend",
    ownership: "Built as part of company product work",
    link: "https://www.timbrehq.com/",
    description:
      "A Timbre backend system for usage-based AI operations, including operation-based credit deduction, cost tracking, Stripe integration, webhook handling, and transaction history.",
    tech: ["Node.js", "Express", "PostgreSQL", "Stripe", "Webhooks", "Credits", "APIs"],
    command: "estimate cost -> deduct credits -> process webhook -> log usage",
    signal: "Billing Backend"
  },
  {
    title: "Cloud Media Delivery Pipeline",
    type: "Timbre Infrastructure",
    ownership: "Built as part of company product work",
    link: "https://www.timbrehq.com/",
    description:
      "Production media infrastructure for upload, storage, processing, delivery, and streaming-related improvements using S3, CloudFront, workers, FFmpeg, and async backend workflows.",
    tech: ["AWS S3", "CloudFront", "FFmpeg", "Node.js", "Docker", "ECS Fargate"],
    command: "upload -> worker -> s3 path -> cloudfront delivery",
    signal: "Infrastructure"
  },
  {
    title: "Education Platform with Multi-role Dashboard",
    type: "Freelance Client Project",
    ownership: "Freelance project for LSOYS Games & Apps after internship",
    link: "#contact",
    description:
      "A freelance education platform built for LSOYS after my internship ended, with multi-role dashboards and product flows designed for different user types.",
    tech: ["React", "Node.js", "Express", "Database", "Dashboard", "Role-based Access"],
    command: "build dashboard --roles=admin,teacher,student --client=lsoys",
    signal: "Freelance Client Work"
  },
  {
    title: "FuelMatrix",
    type: "Company Internship Work",
    ownership: "Built during internship at LSOYS Games & Apps",
    link: "https://fuelmatrix.in",
    description:
      "A fuel tracking and petrol pump management system built during my LSOYS internship, focused on reducing manual work, improving operational control, and adding fraud-prevention features.",
    tech: ["React", "Node.js", "Express", "Database", "OpenAI"],
    command: "track fuel ops -> reconcile cash -> flag anomalies",
    signal: "Internship Product Work"
  },
  {
    title: "LuxeCart Marketplace",
    type: "Full-Stack Application",
    ownership: "Independent full-stack build",
    link: "https://luxecart.onrender.com",
    description:
      "Created a second-hand marketplace with product listings, real-time bidding, notifications, and admin product verification.",
    tech: ["React", "Express.js", "MongoDB", "Real-time Notifications"],
    command: "socket.emit('bid:update', verifiedProduct)",
    signal: "Full-Stack Application"
  }
];

export const architectureNodes: Array<{
  title: string;
  detail: string;
  icon: LucideIcon;
}> = [
  { title: "User Upload", detail: "Large audio/video files, validation, and metadata.", icon: Layers3 },
  { title: "Backend API", detail: "Auth, operation setup, job creation, and state management.", icon: Server },
  { title: "Credits", detail: "Estimate cost, deduct credits, log transaction history.", icon: CreditCard },
  { title: "Queue / Worker", detail: "Async processing for long-running media jobs.", icon: Network },
  { title: "AI / FFmpeg", detail: "AI transformations, transcription, B-roll, voice, video processing.", icon: BrainCircuit },
  { title: "Storage", detail: "S3 object storage and organized media paths.", icon: Database },
  { title: "Delivery", detail: "CloudFront CDN for fast media delivery.", icon: HardDrive },
  { title: "Real-time Progress", detail: "Socket.IO / status polling for live job updates.", icon: RadioTower }
];

export const systemHighlights = [
  "Large-file upload workflows",
  "Operation-based credit checks",
  "Queue-driven worker execution",
  "AI + FFmpeg media processing",
  "S3 object storage",
  "CloudFront delivery",
  "Socket.IO live progress",
  "Production AWS deployment"
];

export const skillGroups = [
  {
    category: "Product Frontend",
    icon: Layers3,
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Metronic", "Redux"]
  },
  {
    category: "Backend APIs",
    icon: Server,
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "Socket.IO"]
  },
  {
    category: "AI & Media",
    icon: BrainCircuit,
    skills: ["OpenAI", "Fal AI", "Akool", "FFmpeg", "Voice Cloning", "Video Translation", "B-roll"]
  },
  {
    category: "Cloud & Infra",
    icon: Cloud,
    skills: ["AWS", "ECS Fargate", "S3", "CloudFront", "Route 53", "Docker", "CloudWatch"]
  },
  {
    category: "Payments & Product Systems",
    icon: CreditCard,
    skills: ["Stripe", "Webhooks", "Credits", "Subscriptions", "Usage Tracking"]
  },
  {
    category: "Dev Tools",
    icon: Terminal,
    skills: ["GitHub", "Linux", "Ubuntu", "TMUX", "CI/CD", "Sentry"]
  }
];

export const processSteps = [
  {
    title: "Understand the product flow",
    text: "I first understand the user journey, operation behavior, edge cases, and where the system can fail.",
    icon: Sparkles
  },
  {
    title: "Design the system",
    text: "I plan APIs, database models, queue flows, storage paths, worker logic, and failure handling before writing code.",
    icon: Network
  },
  {
    title: "Build for production",
    text: "I write backend/frontend code with real product behavior in mind: validation, errors, logs, states, retries, and scalability.",
    icon: Code2
  },
  {
    title: "Ship and observe",
    text: "I deploy with Docker/AWS/CI-CD and monitor logs, job progress, CloudWatch, Sentry, and user-facing behavior.",
    icon: Rocket
  },
  {
    title: "Improve continuously",
    text: "I optimize speed, cost, reliability, UX clarity, and developer maintainability after the feature is live.",
    icon: Gauge
  }
];

export const highlights = [
  { title: "Worked on an AI media platform with 5M+ Android downloads.", icon: Award },
  { title: "Built backend and worker systems for long-running media operations.", icon: Boxes },
  { title: "Managed AWS infrastructure, deployments, domains, monitoring, and media delivery.", icon: Cloud },
  { title: "Integrated AI APIs for image/video generation, translation, voice, and automation.", icon: BrainCircuit },
  { title: "Built Stripe/credits backend flows for usage-based AI operations.", icon: CreditCard },
  { title: "First runner-up in Teachathon/Hackathon.", icon: ShieldCheck },
  { title: "Intern of the Month at LSOYS Games & Apps Pvt. Ltd.", icon: BriefcaseBusiness }
];

export const contactItems = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "Location", value: personal.shortLocation, href: "https://maps.google.com/?q=India", icon: MapPin },
  { label: "GitHub", value: personal.github, href: personal.githubUrl, icon: Github },
  { label: "LinkedIn", value: personal.linkedIn, href: personal.linkedInUrl, icon: Network }
];
