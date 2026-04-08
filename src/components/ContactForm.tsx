"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: false, email: false, message: false };

    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }
    
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = true;
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for field when typing
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: false });
    }
  };

  return (
    <section id="contacto" className="pt-24 pb-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Póngase en <span className="text-primary">Contacto</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Envíenos su consulta y nuestros expertos le responderán a la brevedad.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 group-focus-within:border-primary/50 transition-colors duration-500 relative z-10"
        >
          {success ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
              <p className="text-gray-600">Nos pondremos en contacto pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} focus:outline-none focus:ring-1 transition-colors duration-200`}
                    placeholder="Ej. Juan Pérez"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">El nombre es requerido.</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} focus:outline-none focus:ring-1 transition-colors duration-200`}
                    placeholder="correo@ejemplo.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">Ingrese un correo válido.</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Asunto (Opcional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 border border-gray-200 focus:border-primary focus:ring-primary focus:outline-none focus:ring-1 transition-colors duration-200"
                  placeholder="Asesoramiento Laboral"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-gray-50 text-gray-900 rounded-lg px-4 py-3 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-primary focus:ring-primary'} focus:outline-none focus:ring-1 transition-colors duration-200 resize-none`}
                  placeholder="Escriba su consulta detallada..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">El mensaje no puede estar vacío.</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-violet-500 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_15px_rgba(167,139,250,0.3)] hover:shadow-[0_8px_25px_rgba(167,139,250,0.4)]"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
      
      {/* SVG curva hacia abajo conectando con Footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.23,23.3,110.15,44.5,172,56.44,222.06,66.12,273.68,66.7,321.39,56.44Z"
            className="fill-[#050C1A]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
