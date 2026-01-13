"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="text-4xl font-bold text-primary"
      >
        🐾 PawZio is Ready
      </motion.div>
    </div>
  );
}
