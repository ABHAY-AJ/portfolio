"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, RadioTower, Server, Terminal, Workflow, Zap } from "lucide-react";
import { projects } from "@/data/portfolio";
import GlowCard from "@/components/GlowCard";
import SectionHeading from "@/components/SectionHeading";
import TechBadge from "@/components/TechBadge";
import { getTechIcon } from "@/components/techIconMap";

type Project = (typeof projects)[number];

function ProjectPreview({ project }: { project: Project }) {
  const previewTech = project.tech.slice(0, 5);

  return (
    <div className="absolute inset-6 rounded-lg border border-cyan-300/18 bg-slate-950/46 p-4 backdrop-blur-md transition duration-500 group-hover:border-cyan-200/40">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
        </div>
        <span className="rounded-full border border-cyan-300/25 px-2 py-1 text-[10px] uppercase text-cyan-100">
          {project.type}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
            <Workflow className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">system</span>
            <span className="mt-0.5 block truncate text-sm font-semibold text-white">{project.signal}</span>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "API", icon: Server },
            { label: "Worker", icon: Zap },
            { label: "Live", icon: RadioTower }
          ].map((node) => {
            const Icon = node.icon;
            return (
              <div key={node.label} className="rounded-lg border border-white/10 bg-white/6 p-3 text-center">
                <Icon className="mx-auto h-4 w-4 text-cyan-200" />
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">{node.label}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2 rounded-lg border border-white/10 bg-slate-950/55 p-3">
          {previewTech.map((tech) => {
            const Icon = getTechIcon(tech);
            return (
              <span
                key={tech}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/15 bg-cyan-300/8 text-cyan-200"
                title={tech}
              >
                {Icon ? <Icon className="h-4 w-4" /> : <Server className="h-4 w-4" />}
              </span>
            );
          })}
        </div>

        <div className="h-2 rounded-full bg-white/10">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Case studies"
          title="Case studies with clear ownership."
          description="Company product work, product-area systems, freelance client work, and independent builds are labeled honestly."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid gap-5 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <GlowCard
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.54, ease: "easeOut" } }
              }}
              whileHover={{ y: -7, scale: 1.008 }}
              className={`group p-0 ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <article className={`grid h-full overflow-hidden ${index === 0 ? "lg:grid-cols-[0.92fr_1.08fr]" : ""}`}>
                <div className="relative min-h-56 overflow-hidden border-b border-white/10 bg-slate-950/60 lg:border-b-0 lg:border-r lg:border-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.28),transparent_34%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.22),transparent_34%)] transition duration-500 group-hover:scale-105" />
                  <div className="project-scan" aria-hidden="true" />
                  <ProjectPreview project={project} />
                </div>

                <div className="flex h-full flex-col p-6 sm:p-7">
                  <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    {project.type}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 inline-flex w-fit rounded-full border border-violet-300/20 bg-violet-300/8 px-3 py-1.5 text-xs font-semibold text-violet-100">
                    {project.ownership}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>
                  {"impact" in project ? (
                    <p className="mt-4 inline-flex w-fit rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-sm font-semibold text-emerald-200">
                      {project.impact}
                    </p>
                  ) : null}
                  <div className="mt-5 rounded-lg border border-white/10 bg-slate-950/62 p-3 font-mono text-xs text-slate-300">
                    <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <Terminal className="h-3.5 w-3.5 text-cyan-200" />
                        command
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-emerald-300">
                        <RadioTower className="h-3.5 w-3.5" />
                        online
                      </span>
                    </div>
                    <p className="break-words">
                      <span className="text-emerald-300">$</span> {project.command}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <TechBadge key={tech} label={tech} compact />
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={project.link}
                      target={project.link.startsWith("http") ? "_blank" : undefined}
                      rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                      className="group/link inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-white"
                    >
                      {project.link.startsWith("http") ? "Open Product" : "Discuss Build"}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-lg border border-violet-300/25 bg-violet-300/8 px-4 py-2.5 text-sm font-semibold text-violet-100 transition hover:border-violet-200/55 hover:bg-violet-300/14"
                    >
                      Discuss Build
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </GlowCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
