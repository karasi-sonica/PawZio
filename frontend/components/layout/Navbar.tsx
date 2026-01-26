"use client";

import Link from "next/link";
import { PawPrint } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2">
          <PawPrint className="text-emerald-600" />
          <span className="font-bold text-xl">PawzIO</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/dashboard/owner"
            className="text-slate-700 hover:text-emerald-600 font-medium"
          >
            Pet Owner
          </Link>

          <Link
            href="/dashboard/doctor"
            className="text-slate-700 hover:text-emerald-600 font-medium"
          >
            Doctor
          </Link>
        </div>
      </div>
    </nav>
  );
}
