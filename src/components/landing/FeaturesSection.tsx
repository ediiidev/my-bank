"use client";
import { motion } from "motion/react";
import { Globe, Lock, Shield, Smartphone, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    description: "Protección de nivel bancario con encriptación end-to-end",
    color: "indigo",
  },
  {
    icon: Zap,
    title: "Transferencias Instantáneas",
    description: "Envía y recibe dinero en segundos, sin comisiones ocultas",
    color: "emerald",
  },
  {
    icon: TrendingUp,
    title: "Análisis Inteligente",
    description: "IA que te ayuda a gestionar mejor tus finanzas",
    color: "violet",
  },
  {
    icon: Globe,
    title: "Global y Local",
    description: "Opera en 150+ países con tarifas transparentes",
    color: "amber",
  },
  {
    icon: Smartphone,
    title: "App Multiplataforma",
    description: "Accede desde cualquier dispositivo, en cualquier momento",
    color: "rose",
  },
  {
    icon: Lock,
    title: "Privacidad Total",
    description: "Tus datos son tuyos, nunca los compartimos",
    color: "cyan",
  },
];

export default function FeaturesSection() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold text-zinc-950 tracking-tight mb-4">
          Todo lo que necesitas
        </h2>
        <p className="text-lg text-slate-600">
          Funcionalidades diseñadas para simplificar tu vida financiera
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const colorClasses = {
            indigo: { bg: "bg-indigo-50", text: "text-indigo-600" },
            emerald: { bg: "bg-emerald-50", text: "text-emerald-600" },
            violet: { bg: "bg-violet-50", text: "text-violet-600" },
            amber: { bg: "bg-amber-50", text: "text-amber-600" },
            rose: { bg: "bg-rose-50", text: "text-rose-600" },
            cyan: { bg: "bg-cyan-50", text: "text-cyan-600" },
          };
          const colors =
            colorClasses[feature.color as keyof typeof colorClasses];
          return (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all border border-slate-200 hover:border-indigo-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}
              >
                <Icon className={`w-6 h-6 ${colors.text}`} />
              </div>
              <h3 className="text-lg font-semibold text-zinc-950 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
