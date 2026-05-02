"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Cloud,
  Cpu,
  Github,
  Linkedin,
  Mail,
  Network,
  Play,
  Server,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import CodeWindow from "@/components/CodeWindow";
import CommandDock from "@/components/CommandDock";
import { heroBadges, heroCommandLines, heroStats, personal } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } }
};

const particles = [
  { left: "14%", top: "18%", delay: "0s" },
  { left: "78%", top: "16%", delay: "0.8s" },
  { left: "88%", top: "54%", delay: "1.2s" },
  { left: "20%", top: "72%", delay: "1.6s" },
  { left: "62%", top: "86%", delay: "2.1s" },
  { left: "44%", top: "12%", delay: "2.6s" }
];

function MagneticLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      onMouseMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        setOffset({
          x: (event.clientX - rect.left - rect.width / 2) * 0.12,
          y: (event.clientY - rect.top - rect.height / 2) * 0.12
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      whileTap={{ scale: 0.98 }}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition duration-200 sm:px-6 ${
        variant === "primary"
          ? "cta-gradient text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.2)] hover:shadow-[0_0_44px_rgba(168,85,247,0.28)]"
          : "border border-cyan-300/25 bg-cyan-300/8 text-cyan-100 hover:border-cyan-200/55 hover:bg-cyan-300/13"
      }`}
    >
      {children}
    </motion.a>
  );
}

function HeroVisual() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setTilt({
          x: ((event.clientY - rect.top) / rect.height - 0.5) * -9,
          y: ((event.clientX - rect.left) / rect.width - 0.5) * 9
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
      className="relative mx-auto min-h-[520px] w-full max-w-[560px] transition-transform duration-200"
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-lg border border-cyan-300/10 bg-slate-950/24 backdrop-blur-md" />
      <div className="absolute inset-x-12 bottom-14 h-20 rounded-[50%] bg-cyan-300/10 blur-3xl" />

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/25 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.26),rgba(34,211,238,0.22)_18%,rgba(59,130,246,0.13)_42%,rgba(8,13,31,0.9)_72%)] shadow-[0_0_70px_rgba(34,211,238,0.26)] sm:h-80 sm:w-80"
      >
        <div className="hero-radar-sweep" />
        <div className="hero-core-grid" />
        <div className="absolute inset-7 rounded-full border border-cyan-200/15" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-200/28 to-transparent" />
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-200/28 to-transparent" />
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.08)_45%,transparent_62%)]" />
      </motion.div>

      <div className="hero-data-beam beam-one" />
      <div className="hero-data-beam beam-two" />
      <div className="hero-data-beam beam-three" />
      <span className="hero-orbit-label label-api">API</span>
      <span className="hero-orbit-label label-ecs">ECS</span>
      <span className="hero-orbit-label label-ai">AI</span>
      <span className="hero-orbit-label label-s3">S3</span>

      <div className="absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/18" style={{ animation: "orbit-slow 28s linear infinite" }}>
        <div className="absolute -top-1 left-1/2 h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-[29rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/18" style={{ animation: "orbit-slow 36s linear infinite reverse" }}>
        <div className="absolute bottom-12 right-5 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(168,85,247,0.88)]" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-[18rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/14" style={{ animation: "orbit-slow 42s linear infinite" }} />

      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-100/80 shadow-[0_0_14px_rgba(34,211,238,0.9)]"
          style={{
            left: particle.left,
            top: particle.top,
            animation: `float-soft 5.5s ease-in-out ${particle.delay} infinite`
          }}
        />
      ))}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute left-0 top-16 max-w-[190px] rounded-lg p-4"
      >
        <div className="mb-3 flex items-center gap-2 text-cyan-200">
          <Cloud className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase">Cloud mesh</span>
        </div>
        <div className="space-y-2">
          <div className="h-1.5 rounded-full bg-cyan-300/70" />
          <div className="h-1.5 w-2/3 rounded-full bg-violet-300/60" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute right-0 top-24 hidden w-[230px] rounded-lg p-4 sm:block"
      >
        <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
          <span>deploy.log</span>
          <span className="text-emerald-300">live</span>
        </div>
        <div className="space-y-2 font-mono text-[10px] leading-5">
          <p>
            <span className="text-emerald-300">$</span> docker push timbre/api
          </p>
          <p>
            <span className="text-cyan-300">ecs</span> rolling update 4/4
          </p>
          <p>
            <span className="text-violet-300">queue</span> media-worker healthy
          </p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel absolute bottom-16 right-0 max-w-[205px] rounded-lg p-4"
      >
        <div className="mb-3 flex items-center gap-2 text-violet-200">
          <BrainCircuit className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase">AI workers</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full ${index % 3 === 0 ? "bg-cyan-300/70" : index % 2 === 0 ? "bg-blue-400/55" : "bg-violet-300/60"}`}
            />
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-x-3 bottom-0 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {heroStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 + index * 0.12, duration: 0.5 }}
            className="glass-panel rounded-lg p-3 text-center"
            style={{ animation: `float-soft ${6 + index}s ease-in-out ${index * 0.35}s infinite` }}
          >
            <p className="text-base font-bold text-white sm:text-lg">{stat.value}</p>
            <p className="mt-1 text-[10px] text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="absolute right-10 top-8 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 shadow-glow">
        <Server className="h-5 w-5" />
      </div>
      <div className="absolute bottom-32 left-8 flex h-11 w-11 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-300/10 text-violet-200 shadow-violetGlow">
        <Cpu className="h-5 w-5" />
      </div>
      <div className="absolute right-24 top-40 flex h-10 w-10 items-center justify-center rounded-lg border border-blue-300/20 bg-blue-300/10 text-blue-200">
        <Network className="h-5 w-5" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-4xl">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3.5 py-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            <Sparkles className="h-4 w-4" />
            I build production-ready AI media, backend, and cloud systems.
          </motion.div>

          <motion.h1 variants={item} className="text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {personal.name}
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-4xl text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
            <span className="animated-gradient-text">{personal.tagline}</span>
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {personal.intro}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticLink href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </MagneticLink>
            <MagneticLink href="#contact" variant="secondary">
              Let&apos;s Connect
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-1" />
            </MagneticLink>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            {[
              { label: "GitHub", href: personal.githubUrl, icon: Github },
              { label: "LinkedIn", href: personal.linkedInUrl, icon: Linkedin },
              { label: "Email", href: `mailto:${personal.email}`, icon: Mail }
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition duration-200 hover:border-cyan-300/40 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-cyan-200 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  {social.label}
                </a>
              );
            })}
          </motion.div>

          <motion.div variants={item} className="mt-8 max-w-2xl">
            <CodeWindow title="runtime console" lines={heroCommandLines} />
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <Play className="h-3.5 w-3.5 text-cyan-200" />
              Real product systems
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <Cpu className="h-3.5 w-3.5 text-violet-200" />
              AI media infrastructure
            </span>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
      <CommandDock />
    </section>
  );
}
