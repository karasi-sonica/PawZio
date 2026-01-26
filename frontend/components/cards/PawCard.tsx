"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";

interface PawCardProps {
  title: string;
  description: string;
  accent?: "rose" | "emerald" | "blue";
  href?: string;
}

const accentStyles = {
  rose: "text-rose-500 bg-rose-50",
  emerald: "text-emerald-600 bg-emerald-50",
  blue: "text-blue-600 bg-blue-50",
};

export default function PawCard({
  title,
  description,
  accent = "emerald",
  href,
}: PawCardProps) {
  const card = (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition cursor-pointer h-full"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${accentStyles[accent]}`}
      >
        <PawPrint />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </motion.div>
  );

  return href ? <Link href={href}>{card}</Link> : card;
}
