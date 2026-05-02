"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { getTechIcon } from "@/components/techIconMap";

type TechBadgeProps = {
  label: string;
  compact?: boolean;
};

export default function TechBadge({ label, compact = false }: TechBadgeProps) {
  const Icon = getTechIcon(label) ?? Cpu;

  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      className={`tech-badge inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/7 text-slate-200 shadow-[0_0_22px_rgba(34,211,238,0.06)] transition-colors duration-200 hover:border-cyan-300/45 hover:bg-cyan-300/12 hover:text-white ${
        compact ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm"
      }`}
    >
      <Icon className={compact ? "h-3.5 w-3.5 shrink-0 text-cyan-200" : "h-4 w-4 shrink-0 text-cyan-200"} />
      {label}
    </motion.span>
  );
}
