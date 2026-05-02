"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { experienceItems, workAreas } from "@/data/portfolio";
import GlowCard from "@/components/GlowCard";
import SectionHeading from "@/components/SectionHeading";
import TechBadge from "@/components/TechBadge";

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Experience, framed by what I actually built."
          description="Company product work, internship work, and freelance client work are clearly separated so the portfolio does not present company projects as personal projects."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {experienceItems.map((item, index) => (
            <GlowCard
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -7, scale: 1.01 }}
              className="flex h-full flex-col p-6"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                {item.context}
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{item.role}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.company}</p>
              <p className="mt-1 text-sm text-violet-200">{item.period}</p>
              <p className="mt-5 flex-1 text-sm leading-7 text-slate-300">{item.ownership}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <TechBadge key={tag} label={tag} compact />
                ))}
              </div>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-cyan-300/25 bg-cyan-300/8 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/55 hover:bg-cyan-300/14"
                >
                  View product
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </GlowCard>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="System areas"
            title="What I've Worked On"
            description="The product and engineering areas behind the experience above."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {workAreas.map((area) => {
              const Icon = area.icon;
              return (
                <GlowCard
                  key={area.title}
                  variants={{
                    hidden: { opacity: 0, y: 26 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: "easeOut" } }
                  }}
                  whileHover={{ y: -7, scale: 1.01 }}
                  className="group flex h-full flex-col p-6"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-200/55 group-hover:shadow-[0_0_26px_rgba(34,211,238,0.18)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold leading-tight text-white">{area.title}</h3>
                  </div>
                  <p className="flex-1 text-sm leading-7 text-slate-300">{area.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <TechBadge key={tag} label={tag} compact />
                    ))}
                  </div>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
