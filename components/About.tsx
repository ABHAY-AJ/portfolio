"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { aboutCards, aboutStats, personal } from "@/data/portfolio";
import GlowCard from "@/components/GlowCard";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About me"
          title="Builder of backend systems, AI workflows, and cloud infrastructure."
          description="I focus on production systems where product, backend, infrastructure, and AI come together."
        />

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <GlowCard
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="p-6"
          >
            <div className="relative mx-auto flex max-w-sm flex-col items-center text-center">
              <div className="absolute inset-x-10 top-8 h-36 rounded-full bg-cyan-300/14 blur-3xl" />
              <div className="relative rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-500 p-[3px] shadow-[0_0_42px_rgba(34,211,238,0.24)]">
                <div className="rounded-full bg-slate-950 p-2">
                  <Image
                    src="/profile.png"
                    alt="Portrait of Abhay Jangra"
                    width={260}
                    height={260}
                    priority
                    className="h-56 w-56 rounded-full object-cover sm:h-64 sm:w-64"
                  />
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{personal.name}</h3>
              <p className="mt-2 text-sm text-cyan-200">AI media, backend, and cloud systems</p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-violet-200" />
                {personal.location}
              </p>
            </div>
          </GlowCard>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="grid gap-6"
          >
            <GlowCard whileHover={{ y: -6 }} className="p-6 sm:p-8">
              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m a full-stack developer with a strong backend and infrastructure focus. Most of my work has been
                around building real production systems, not just UI pages. I have worked on AI-powered media workflows,
                video/audio processing, cloud deployments, worker queues, large-file pipelines, Stripe-based credits,
                real-time progress updates, and production debugging.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                I like working on systems where product, backend, infrastructure, and AI come together.
              </p>
            </GlowCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <GlowCard
                    key={card.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ y: -5 }}
                    className="p-5"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="text-base font-semibold text-white">{card.title}</h3>
                    </div>
                    <p className="text-sm leading-6 text-slate-400">{card.text}</p>
                  </GlowCard>
                );
              })}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutStats.map((stat, index) => (
                <GlowCard
                  key={stat}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="p-5"
                >
                  <p className="text-lg font-semibold text-white">{stat}</p>
                </GlowCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
