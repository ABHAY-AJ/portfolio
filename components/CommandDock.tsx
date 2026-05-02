"use client";

import { motion } from "framer-motion";
import { commandDockItems } from "@/data/portfolio";

export default function CommandDock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.85, ease: "easeOut" }}
      className="command-dock glass-panel mx-auto mt-10 grid w-full max-w-7xl gap-0 overflow-hidden rounded-lg"
    >
      <div className="grid divide-y divide-white/10 md:grid-cols-5 md:divide-x md:divide-y-0 md:divide-white/10">
        {commandDockItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="group flex items-center gap-3 px-4 py-4 transition hover:bg-cyan-300/7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-200/55 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.16)]">
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </span>
                <span className="mt-1 block truncate text-sm font-semibold text-slate-100">{item.value}</span>
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
