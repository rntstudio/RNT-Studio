import React from 'react';
import { Camera, Smartphone, Megaphone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Creación de Contenido",
      description: "Video corto, UGC, reels y visuales diseñados para detener el scroll y generar interacción.",
      bg: "bg-[#F5F5F0]"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Gestión de Redes",
      description: "Manejamos tu calendario de contenido, publicaciones y la gestión diaria de tus redes sociales.",
      bg: "bg-[#FDFCF8]"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Medios Pagados",
      description: "Creamos y gestionamos campañas publicitarias dirigidas que convierten la atención en resultados y te ayudan a escalar.",
      bg: "bg-[#FFFBF5]"
    }
  ];

  return (
    <section id="services" className="pt-40 pb-24 px-6 bg-white rounded-t-[3rem] -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 border border-gray-200 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Servicios
          </span>
          <h2 className="text-5xl md:text-6xl font-bold font-['Syne']">
            Cómo podemos <br />
            ayudarte a <span className="italic font-serif">creceeer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-[2rem] ${service.bg} border border-transparent hover:border-black/5 hover:shadow-lg transition-all duration-300`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-black">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;