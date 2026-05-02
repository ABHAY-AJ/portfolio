"use client";

import { motion } from "framer-motion";
import { Braces, Terminal } from "lucide-react";

type CodeWindowProps = {
  title: string;
  lines: Array<{
    prompt?: string;
    command: string;
  }>;
  className?: string;
};

export default function CodeWindow({ title, lines, className = "" }: CodeWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`code-window rounded-lg border border-cyan-300/20 bg-slate-950/68 shadow-[0_0_38px_rgba(34,211,238,0.1)] backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
        </div>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
          <Braces className="h-3.5 w-3.5 text-cyan-200" />
          {title}
        </span>
      </div>
      <div className="grid gap-2 px-4 py-4 font-mono text-xs leading-6">
        {lines.map((line, index) => (
          <motion.div
            key={`${line.command}-${index}`}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36, delay: index * 0.08 }}
            className="flex min-w-0 items-start gap-2 text-slate-300"
          >
            <Terminal className="mt-1 h-3.5 w-3.5 shrink-0 text-cyan-200" />
            <span className="shrink-0 text-emerald-300">{line.prompt ?? "$"}</span>
            <span className="min-w-0 break-words text-slate-200">{line.command}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
