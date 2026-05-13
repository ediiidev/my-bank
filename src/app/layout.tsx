import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "My Bank",
  description: "Send money worldwide, instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar Fijo Superior */}
        <Navbar />
        {/* El contenido dinámico de las páginas va dentro de main */}
        <main className="flex-grow">{children}</main>
        {/* Footer al Fondo */}
        <Footer />
      </body>
    </html>
  );
}
