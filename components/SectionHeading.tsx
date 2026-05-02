"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mx-auto mb-12 max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
