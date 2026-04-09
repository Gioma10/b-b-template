"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const presets = {
  bottom: { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0 } },
  left:   { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
  right:  { hidden: { opacity: 0, x: 30 },  visible: { opacity: 1, x: 0 } },
  scale:  { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  fade:   { hidden: { opacity: 0 },          visible: { opacity: 1 } },
} as const;

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  from?: keyof typeof presets;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollReveal({
  children,
  delay = 0,
  from = "bottom",
  duration = 0.7,
  className,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const { hidden, visible } = presets[from];

  return (
    <motion.div
      ref={ref}
      animate={inView ? visible : hidden}
      transition={{ duration, ease: "easeOut", delay: inView ? delay : 0 }}
      className={cn(className)}
      style={style}
    >
      {children}
    </motion.div>
  );
}
