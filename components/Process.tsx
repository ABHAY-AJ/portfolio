"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/portfolio";
import GlowCard from "@/components/GlowCard";
import SectionHeading from "@/components/SectionHeading";

export default function Process() {
  return (
    <section id="process" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="My process"
          title="How I approach product engineering"
          description="A practical loop for turning product behavior into reliable APIs, workers, infrastructure, and user-visible states."
        />

        <div className="relative">
          <div className="process-line absolute bottom-8 left-6 top-8 w-px md:left-1/2 md:hidden" />
          <div className="hidden md:absolute md:left-0 md:right-0 md:top-10 md:block md:h-px md:bg-gradient-to-r md:from-cyan-300/10 md:via-cyan-300/70 md:to-violet-300/10" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } }
            }}
            className="grid gap-5 md:grid-cols-5"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={{
                    hidden: { opacity: 0, y: 26 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: "easeOut" } }
                  }}
                  className="group relative pl-16 md:pl-0 md:pt-20"
                >
                  <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/30 bg-slate-950 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.15)] md:left-1/2 md:top-4 md:-translate-x-1/2">
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300 text-[10px] font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <Icon className="h-5 w-5 transition duration-200 group-hover:text-white" />
                  </div>
                  <GlowCard whileHover={{ y: -6 }} className="group h-full p-5">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
