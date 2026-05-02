"use client";

import { motion } from "framer-motion";
import { highlights } from "@/data/portfolio";
import GlowCard from "@/components/GlowCard";
import SectionHeading from "@/components/SectionHeading";

export default function Achievements() {
  return (
    <section id="highlights" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Highlights"
          title="Highlights"
          description="A few concrete signals from the systems, product areas, and teams I have worked with."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } }
          }}
          className="grid gap-4 md:grid-cols-2"
        >
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <GlowCard
                key={highlight.title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } }
                }}
                whileHover={{ y: -5 }}
                className="p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-violet-300/25 bg-violet-300/10 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="pt-2 text-base font-medium leading-7 text-slate-200">{highlight.title}</p>
                </div>
              </GlowCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
