"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  value: string;
  suffix: string;
};

export default function StatsCard({ title, value, suffix }: Props) {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 4 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="glass relative rounded-3xl p-7 shadow-[0_20px_35px_-25px_var(--shadow-color)]"
    >
      <p className="text-sm text-[var(--text-muted)]">{title}</p>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-4xl font-black text-[var(--foreground)]">{value}</span>
        <span className="mb-1 text-sm text-[var(--text-muted)]">{suffix}</span>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[color-mix(in_srgb,var(--card-border)_70%,transparent)]" />
    </motion.div>
  );
}

