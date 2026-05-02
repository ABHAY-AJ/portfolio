"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type GlowCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export default function GlowCard({
  children,
  className = "",
  interactive = true,
  onMouseMove,
  ...props
}: GlowCardProps) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (interactive) {
      const rect = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
      event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
    }

    onMouseMove?.(event);
  }

  return (
    <motion.div
      {...props}
      onMouseMove={handleMouseMove}
      className={`glow-card glow-border rounded-lg ${className}`}
    >
      <span className="card-sheen" aria-hidden="true" />
      <span className="cyber-corners" aria-hidden="true" />
      {children}
    </motion.div>
  );
}
