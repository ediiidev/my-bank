import { Building2, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-lg bg-white/90">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-semibold text-sm">MB</span>
          </div>
          <span className="text-xl font-semibold text-zinc-950 tracking-tight">
            My Bank
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Características
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Testimonios
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            Precios
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in?type=individual"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
          >
            <User className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Personas</span>
          </Link>
          <Link
            href="/sign-in?type=business"
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
          >
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">Empresas</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
