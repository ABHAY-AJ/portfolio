"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { skillGroups } from "@/data/portfolio";
import GlowCard from "@/components/GlowCard";
import SectionHeading from "@/components/SectionHeading";
import TechBadge from "@/components/TechBadge";

const allCategory = "All";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(allCategory);
  const visibleGroups = useMemo(
    () => (activeCategory === allCategory ? skillGroups : skillGroups.filter((group) => group.category === activeCategory)),
    [activeCategory]
  );

  return (
    <section id="stack" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I use to build production systems."
          description="A practical stack for product frontend, backend APIs, AI/media workflows, cloud infrastructure, payments, and developer operations."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter tech stack categories"
        >
          {[allCategory, ...skillGroups.map((group) => group.category)].map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 ${
                activeCategory === category
                  ? "border-cyan-300/60 bg-cyan-300/14 text-cyan-100 shadow-[0_0_26px_rgba(34,211,238,0.16)]"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-violet-300/35 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {visibleGroups.map((group, groupIndex) => {
              const Icon = group.icon;
              return (
                <GlowCard
                  key={group.category}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.42, delay: groupIndex * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                  </div>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.025 } }
                    }}
                    className="flex flex-wrap gap-2"
                  >
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        variants={{
                          hidden: { opacity: 0, scale: 0.96, y: 8 },
                          visible: { opacity: 1, scale: 1, y: 0 }
                        }}
                      >
                        <TechBadge label={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </GlowCard>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
