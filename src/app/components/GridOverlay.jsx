"use client";

import {
  motion,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function GridOverlay() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // no mouse tracking on mobile
    if (!isMobile) {
      window.addEventListener("mousemove", handleMove);
      return () => window.removeEventListener("mousemove", handleMove);
    }
  }, [isMobile]);

  const radius = isMobile ? 100 : 160;

  const mask = useMotionTemplate`
    radial-gradient(
      ${radius}px at ${mouseX}px ${mouseY}px,
      rgba(255,255,255,1),
      rgba(255,255,255,0)
    )
  `;

  const cols = isMobile ? 12 : 32;
  const rows = isMobile ? 14 : 18;
  const cells = cols * rows;

  return (
    <>
      {/* BASE GRID */}
      <div
        className="h-screen pointer-events-none fixed inset-0 z-0 bg-[#18181b]"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          opacity: isMobile ? 0.90 : 0.90,
        }}
      >
        {Array.from({ length: cells }).map((_, i) => (
          <div
            key={i}
            className="border border-[#292636]/50"
          />
        ))}
      </div>

      {/* HIGHLIGHT GRID */}
      {!isMobile && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            WebkitMaskImage: mask,
            maskImage: mask,
            opacity: 0.8,
          }}
        >
          {Array.from({ length: cells }).map((_, i) => (
            <div
              key={i}
              className="border border-neutral-500"
            />
          ))}
        </motion.div>
      )}
    </>
  );
}
