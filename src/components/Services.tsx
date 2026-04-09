"use client";

import { motion } from "framer-motion";
import { Scale, Briefcase, Calculator, FileText, Car, Shield } from "lucide-react";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Asesoramiento General",
      description: "Asesoramiento contable, impositivo y atención personalizada.",
      icon: <Briefcase className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" />,
      category: "Contable",
      image: "/images/servicio-contable.jpg"
    },
    {
      title: "Liquidación de Impuestos",
      description: "Auditoría, liquidación de impuestos y reducción de infracciones.",
      icon: <Calculator className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" />,
      category: "Impositivo",
      image: "/images/servicio-impuestos.jpg"
    },
    {
      title: "Seguros",
      description: "Asesoramiento integral y cobertura de seguros adaptada a tus necesidades.",
      icon: <Shield className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" />,
      category: "Seguros",
      image: "/images/servicio-seguros.jpg"
    },
    {
      title: "Trámites del Automotor",
      description: "Gestión completa de trámites automotores de forma ágil y profesional.",
      icon: <Car className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300" />,
      category: "Automotor",
      image: "/images/servicio-automotor.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="servicios" className="pt-24 pb-40 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Tomando con seriedad cada situación, siendo prolijos en nuestra labor.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(167,139,250,0.3)] overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent group-hover:from-primary/30 transition-colors duration-300"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="uppercase text-xs font-bold tracking-wider text-gray-400 group-hover:text-primary transition-colors">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-primary mb-4 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SVG curva hacia abajo para conectar con el formulario de contacto (blanco) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[1px]">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.09,10.59,660.83-6.75,575-5.74,493.33,5.99c-58,11.73-114.16,30.13-172,41.86C273.68,66.7,222.06,66.12,172,56.44,110.15,44.5,50.23,23.3,0,0V120H1200V3C1132.19,26.09,1055.71,74.35,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
