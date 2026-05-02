import {
  SiCloudflare,
  SiDocker,
  SiExpress,
  SiFalco,
  SiFfmpeg,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Bot, BrainCircuit, CreditCard, Database, GitBranch, Layers3, RadioTower, Server, Video, Zap } from "lucide-react";
import type { ComponentType } from "react";

export type TechIcon = ComponentType<{ className?: string }>;

const iconMap: Record<string, TechIcon> = {
  "ai operations": BrainCircuit,
  "akool": Bot,
  "apis": Server,
  "aws": FaAws,
  "aws ecs": FaAws,
  "aws s3": FaAws,
  "b-roll": Video,
  "backend": Server,
  "backend apis": Server,
  "ci/cd": GitBranch,
  "cloudfront": SiCloudflare,
  "credits": CreditCard,
  "database": Database,
  "docker": SiDocker,
  "ecs": FaAws,
  "ecs fargate": FaAws,
  "express": SiExpress,
  "express.js": SiExpress,
  "fal ai": SiFalco,
  "ffmpeg": SiFfmpeg,
  "github": SiGithub,
  "linux": SiLinux,
  "metronic": Layers3,
  "mongodb": SiMongodb,
  "node.js": SiNodedotjs,
  "next.js": SiNextdotjs,
  "openai": SiOpenai,
  "postgreSQL": SiPostgresql,
  "postgresql": SiPostgresql,
  "react": SiReact,
  "redis": SiRedis,
  "route 53": FaAws,
  "s3": FaAws,
  "sentry": Zap,
  "socket.io": SiSocketdotio,
  "stripe": SiStripe,
  "tailwind": SiTailwindcss,
  "typescript": SiTypescript,
  "ubuntu": SiUbuntu,
  "usage tracking": RadioTower,
  "video translation": Video,
  "voice clone": Video,
  "voice cloning": Video,
  "webhooks": RadioTower,
  "workers": Server
};

export function getTechIcon(label: string): TechIcon | null {
  const key = label.trim().toLowerCase();
  return iconMap[key] ?? null;
}
