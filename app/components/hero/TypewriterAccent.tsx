"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type TypewriterAccentProps = {
  lines: readonly string[];
  className?: string;
  caretClassName?: string;
};

export default function TypewriterAccent({
  lines,
  className,
  caretClassName = "ml-1 text-[var(--primary)]",
}: TypewriterAccentProps) {
  const prefersReducedMotion = useReducedMotion();
  const availableLines = useMemo(() => lines.filter(Boolean), [lines]);
  const longestLine = useMemo(
    () => availableLines.reduce((longest, line) => (line.length > longest.length ? line : longest), availableLines[0] ?? ""),
    [availableLines],
  );

  const [lineIndex, setLineIndex] = useState(0);
  const [typedLine, setTypedLine] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || availableLines.length === 0) return;

    const activeLine = availableLines[lineIndex];
    let delay = isDeleting ? 60 : 120;

    if (!isDeleting && typedLine === activeLine) delay = 1900;
    if (isDeleting && typedLine.length === 0) delay = 420;

    const timer = window.setTimeout(() => {
      if (!isDeleting && typedLine === activeLine) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedLine.length === 0) {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % availableLines.length);
        return;
      }

      const nextLength = isDeleting ? typedLine.length - 1 : typedLine.length + 1;
      setTypedLine(activeLine.slice(0, nextLength));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [availableLines, isDeleting, lineIndex, prefersReducedMotion, typedLine]);

  if (availableLines.length === 0) return null;

  const displayedLine = prefersReducedMotion ? availableLines[0] : typedLine;

  return (
    <div className={["text-sm font-semibold text-[var(--foreground)]", className].filter(Boolean).join(" ")}>
      <span className="relative inline-flex min-h-[1.4em] w-full items-baseline">
        <span aria-hidden="true" className="invisible">
          {longestLine}
        </span>
        <span className="absolute inset-0 inline-flex items-baseline">
          <motion.span
            className="bg-[linear-gradient(90deg,var(--primary),var(--secondary),var(--accent))] bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 200%" }}
            animate={
              prefersReducedMotion
                ? undefined
                : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
            }
            transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: "linear" }}
          >
            {displayedLine || "\u00A0"}
          </motion.span>
          <motion.span
            aria-hidden="true"
            className={caretClassName}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [1, 0] }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, repeat: Infinity }}
          >
            |
          </motion.span>
        </span>
      </span>
    </div>
  );
}
