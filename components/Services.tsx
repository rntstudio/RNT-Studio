import React from 'react';
import { Camera, Smartphone, Megaphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: t('services.content.title', "Creación de Contenido"),
      description: t('services.content.description', "Contenido pensado, estético y con intención. Videos cortos, UGC y piezas visuales que cuentan tu historia, detienen el scroll y construyen identidad."),
      bg: "bg-[#F5F5F0]"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t('services.management.title', "Gestión de Redes"),
      description: t('services.management.description', "Estrategia, voz de marca y coherencia diaria. Planificamos, ejecutamos y analizamos tu presencia digital para que tus redes comuniquen con propósito."),

      bg: "bg-[#FDFCF8]"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: t('services.paid.title', "Medios Pagados"),
      description: t('services.paid.description', "Publicidad que potencia lo que ya construiste. Campañas inteligentes que transforman alcance en resultados y hacen que tu marca crezca de verdad."),

      bg: "bg-[#FFFBF5]"
    }
  ];

  return (
    <section id="services" className="pt-40 pb-24 px-6 bg-white rounded-t-[3rem] -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 border border-gray-200 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
            {t('services.label', 'Servicios')}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold font-['Syne']">
            {t('services.title_main', 'Estrategias para')}  <br />
            <span className="italic font-serif">{t('services.title_highlight', 'impulsar tu negocio')}</span>
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