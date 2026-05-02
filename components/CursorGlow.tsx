"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.classList.add("has-cursor-glow");

    function handlePointerMove(event: PointerEvent) {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${event.clientX}px`;
      glowRef.current.style.top = `${event.clientY}px`;
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      document.body.classList.remove("has-cursor-glow");
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />;
}
