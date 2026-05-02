"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { architectureNodes, systemHighlights } from "@/data/portfolio";
import GlowCard from "@/components/GlowCard";
import SectionHeading from "@/components/SectionHeading";

export default function Architecture() {
  return (
    <section id="architecture" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Systems I like building"
          title="Systems I Like Building"
          description="Backend-heavy product systems where AI, media, infra, and real-time UX connect."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="architecture-flow absolute left-6 right-6 top-1/2 hidden h-px -translate-y-1/2 lg:block" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
            {architectureNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={node.title} className="relative">
                  <GlowCard
                    whileHover={{ y: -6, scale: 1.015 }}
                    className="group h-full p-4 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 transition duration-200 group-hover:border-cyan-200/60 group-hover:shadow-[0_0_26px_rgba(34,211,238,0.2)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white">{node.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{node.detail}</p>
                    <span className="mx-auto mt-4 block h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
                  </GlowCard>
                  {index < architectureNodes.length - 1 ? (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-cyan-200/70 xl:block" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {systemHighlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-200" />
              {highlight}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
