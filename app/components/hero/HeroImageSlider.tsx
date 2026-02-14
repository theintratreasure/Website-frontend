"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type HeroImageSliderProps = {
  images: readonly string[];
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  intervalMs?: number;
  fadeDuration?: number;
};

export default function HeroImageSlider({
  images,
  alt = "",
  className,
  imageClassName = "object-cover",
  priority = false,
  intervalMs = 6500,
  fadeDuration = 1.1,
}: HeroImageSliderProps) {
  const prefersReducedMotion = useReducedMotion();
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, prefersReducedMotion, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className={["pointer-events-none absolute inset-0", className].filter(Boolean).join(" ")}>
      {slides.map((src, idx) => (
        <motion.div
          key={`${src}-${idx}`}
          className="absolute inset-0"
          initial={{ opacity: idx === index ? 1 : 0 }}
          animate={{ opacity: idx === index ? 1 : 0 }}
          transition={{ duration: fadeDuration, ease: "easeInOut" }}
        >
          <Image src={src} alt={alt} fill sizes="100vw" priority={priority && idx === 0} className={imageClassName} />
        </motion.div>
      ))}
    </div>
  );
}
