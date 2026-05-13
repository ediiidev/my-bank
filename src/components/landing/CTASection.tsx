"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold mb-4 tracking-tight">
          Abre tu cuenta en 5 minutos
        </h2>
        <p className="text-lg text-indigo-100 mb-8">
          Sin papeleo, sin comisiones ocultas, sin permanencia
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-slate-50 transition-all font-medium shadow-xl"
          >
            <span>Comenzar ahora</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-medium">
            Contactar ventas
          </button>
        </div>
      </motion.div>
    </div>
  );
}
