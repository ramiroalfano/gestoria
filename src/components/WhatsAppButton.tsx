"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // Número de WhatsApp configurado
  const phoneNumber = "5491140278778";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola,%20me%20gustaría%20recibir%20asesoramiento.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-shadow duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      {/* Círculo indicador de notificación online */}
      <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 border-2 border-green-500 animate-pulse"></span>
    </motion.a>
  );
}
