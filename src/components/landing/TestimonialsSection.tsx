"use client";
import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "María González",
    role: "Diseñadora Freelance",
    avatar: "MG",
    content:
      "My Bank ha simplificado completamente mi gestión financiera. Las transferencias son instantáneas y sin comisiones.",
    rating: 5,
  },
  {
    name: "Carlos Ruiz",
    role: "CEO TechStart",
    avatar: "CR",
    content:
      "Perfecta para empresas en crecimiento. La integración con nuestras herramientas fue inmediata.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Emprendedora",
    avatar: "AM",
    content:
      "El análisis inteligente me ayuda a tomar mejores decisiones financieras cada día.",
    rating: 5,
  },
  {
    name: "Diego López",
    role: "Desarrollador",
    avatar: "DL",
    content:
      "La app es increíblemente rápida y el soporte técnico responde en minutos. Totalmente recomendable.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-semibold text-zinc-950 tracking-tight mb-4">
          Lo que dicen nuestros usuarios
        </h2>
        <p className="text-lg text-slate-600">
          Más de 1 millón de personas confían en My Bank
        </p>
      </motion.div>

      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-950">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
