"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";

interface DoctorCardProps {
  id: string;
  name: string;
  specialization: string;
  experience: string;
}

export default function DoctorCard({
  id,
  name,
  specialization,
  experience,
}: DoctorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition"
    >
      <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-4">
        <Stethoscope />
      </div>

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-slate-600 text-sm">{specialization}</p>
      <p className="text-slate-500 text-sm mt-1">{experience}</p>

      <Link
        href={`/vet/book/${id}`}
        className="inline-block mt-5 text-sm font-medium text-white bg-rose-500 px-4 py-2 rounded-xl hover:bg-rose-600 transition"
      >
        Book Appointment
      </Link>
    </motion.div>
  );
}
