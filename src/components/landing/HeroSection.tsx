"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, CreditCard, TrendingUp, CheckCircle } from "lucide-react";

const stats = [
  { value: "1M+", label: "Usuarios activos" },
  { value: "$50B+", label: "Transacciones procesadas" },
  { value: "150+", label: "Países disponibles" },
  { value: "99.9%", label: "Uptime garantizado" },
];

export default function HeroSection() {
  return (
    <div>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-violet-200 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              🚀 Banca digital del futuro
            </motion.span>
            <h1 className="text-5xl md:text-6xl font-semibold text-zinc-950 tracking-tight mb-6">
              Gestiona tus finanzas{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                sin límites
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              La banca digital que se adapta a ti. Transferencias instantáneas,
              análisis inteligente y seguridad de nivel empresarial. Todo en una
              app.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Link
                href="/register"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30"
              >
                <span className="font-medium">Abrir cuenta gratis</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-all">
                <span className="font-medium">Ver demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <p className="text-2xl font-semibold text-zinc-950">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div
            className="relative h-[600px] hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Card */}
            <motion.div
              className="absolute top-20 left-0 w-80 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-2xl"
              animate={{
                y: [0, -20, 0],
                rotate: [-2, 0, -2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm opacity-80">Tarjeta Principal</span>
                <CreditCard className="w-6 h-6" />
              </div>
              <p className="text-2xl font-medium tracking-wider mb-8">
                **** **** **** 4829
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs opacity-80">Saldo disponible</p>
                  <p className="text-xl font-semibold">$12,847.32</p>
                </div>
                <div className="text-xs">12/28</div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="absolute top-10 right-0 w-72 bg-white rounded-2xl p-6 shadow-xl border border-slate-200"
              animate={{
                y: [0, 15, 0],
                rotate: [2, 0, 2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Ingresos este mes</p>
                  <p className="text-xl font-semibold text-zinc-950">+$3,250</p>
                </div>
              </div>
              <div className="w-full h-20 bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 rounded-lg flex items-end justify-around p-2">
                {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-2 bg-gradient-to-t from-emerald-500 to-indigo-500 rounded-full"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Transaction Card */}
            <motion.div
              className="absolute bottom-20 left-10 w-64 bg-white rounded-2xl p-5 shadow-xl border border-slate-200"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-violet-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-violet-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-zinc-950">
                    Pago recibido
                  </p>
                  <p className="text-xs text-slate-500">Hace 2 minutos</p>
                </div>
              </div>
              <p className="text-2xl font-semibold text-emerald-600">
                +$450.00
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
