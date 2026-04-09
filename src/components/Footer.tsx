"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050C1A] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-estudio.png" alt="Estudio Integral" width={32} height={32} />
              <span className="text-white font-bold text-lg tracking-wider">
                ESTUDIO <span className="text-primary">INTEGRAL</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Somos personas que brindan servicios de manera profesional y personalizada. Tomando con seriedad cada situación que se nos presenta siendo prolijos en nuestra labor.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="text-gray-400 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-primary transition-colors">Trámites y Seguros</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-primary transition-colors">Asesoramiento Contable</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Argentina</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+54 11 40278778</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>amelia_polizio@hotmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Horarios</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lunes a Viernes<br/>
              09:00 - 19:00 hs.<br/>
              Atención con turno previo.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center"
        >
          <p>&copy; {new Date().getFullYear()} Estudio Integral. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
