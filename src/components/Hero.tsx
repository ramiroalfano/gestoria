"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Oficina moderna, elementos legales y contables" 
          fill 
          className="object-cover object-center" 
          priority 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-bold mb-6 block">
            Estudio Integral
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Asesoramiento profesional <br />
            <span className="text-primary">
              para tu futuro.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            Somos personas que brindan servicios de manera profesional y personalizada. Asesoramiento sin cargo y reducción de infracciones.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#contacto"
              className="group flex items-center gap-2 bg-primary hover:bg-violet-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(167,139,250,0.4)] hover:shadow-[0_0_30px_rgba(167,139,250,0.6)]"
            >
              Consulta Gratuita
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="flex items-center gap-2 bg-transparent border border-gray-400 hover:border-primary text-gray-700 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:text-primary"
            >
              Nuestros Servicios
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Ola SVG curva hacia abajo */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.23,23.3,110.15,44.5,172,56.44,222.06,66.12,273.68,66.7,321.39,56.44Z"
            className="fill-gray-50"
          ></path>
        </svg>
      </div>
    </section>
  );
}
