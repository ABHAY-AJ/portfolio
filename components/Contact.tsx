"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import { contactItems, personal } from "@/data/portfolio";
import GlowCard from "@/components/GlowCard";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something real."
          description="I'm open to backend, full-stack, AI product, and cloud infrastructure opportunities where I can work on meaningful production systems."
        />

        <GlowCard
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.62, ease: "easeOut" }}
          className="overflow-hidden p-0"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:border-white/10">
              <p className="text-sm font-semibold uppercase text-cyan-200">Open to meaningful product engineering</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Production backend, AI media workflows, and cloud infrastructure.
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                I like working on real systems with clear product behavior: APIs, queues, workers, AI operations,
                storage, delivery, billing, observability, and user-visible progress.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="group inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/35 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  View GitHub
                </a>
                <a
                  href={personal.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-100 transition hover:border-cyan-200/55 hover:bg-cyan-300/15"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } }
              }}
              className="grid gap-3 p-6 sm:p-8"
            >
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    variants={{
                      hidden: { opacity: 0, x: 18 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.42 } }
                    }}
                    className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/35 hover:bg-cyan-300/8"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-200/55">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase text-slate-500">{item.label}</span>
                      <span className="mt-1 block text-sm font-semibold text-slate-100 sm:text-base">{item.value}</span>
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
