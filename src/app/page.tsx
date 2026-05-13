import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-20 md:py-32"
          id="home"
        >
          <HeroSection />
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white" id="features">
          <FeaturesSection />
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-50" id="testimonials">
          <TestimonialsSection />
        </section>

        {/* CTA Section */}
        <section
          className="py-20 bg-gradient-to-br from-indigo-600 to-violet-600 text-white"
          id="ctasection"
        >
          <CTASection />
        </section>
      </main>
    </div>
  );
}
