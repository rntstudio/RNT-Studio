import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {
  const team = [
    {
      name: "Sofia Little",
      role: "Líder Creativa",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "James Cohen",
      role: "Fundador & CEO",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Maya Rodriguez",
      role: "Especialista en Crecimiento",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="about-us" className="py-24 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Intro */}
        <div className="mb-20">
          <span className="inline-block py-1 px-4 bg-gray-200/50 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
            Nosotros
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-['Syne'] mb-8">
            Quiénes somos
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              Somos estrategas, creadores y expertos en crecimiento que creen que las redes sociales deben generar resultados comerciales reales, no solo verse bonitas. Cada marca merece una presencia social que realmente funcione.
            </p>
            <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#EFEDE8] overflow-hidden">
                            <img src={`https://picsum.photos/100/100?random=${i+50}`} alt="Team member" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-12 h-12 rounded-full bg-black text-white border-2 border-[#EFEDE8] flex items-center justify-center">
                        <span className="font-['Syne']">*</span>
                    </div>
                </div>
                <span className="text-sm font-semibold text-gray-500">
                    Crecimiento en +176 creadores
                </span>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mb-20">
            <h3 className="text-3xl md:text-5xl font-bold font-['Syne'] text-center mb-16">
                Conoce al equipo detrás de tu <span className="italic font-serif font-light">éxito</span>.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="group">
                        <div className="relative h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden mb-6 bg-gray-200">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <h4 className="text-2xl font-bold font-['Syne']">{member.name}</h4>
                        <p className="text-gray-500 mt-1">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* CTA in About Section */}
        <div className="bg-black text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-4xl md:text-6xl font-bold font-['Syne'] mb-8">
                    ¿Listo para unirte al club?
                </h3>
                <p className="text-gray-400 text-lg mb-8">
                    Déjanos encargarnos de la estrategia mientras tú te enfocas en dirigir tu negocio.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                    Hablemos <ArrowRight className="w-4 h-4" />
                </a>
             </div>
             {/* Abstract BG */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30 translate-y-1/2 -translate-x-1/2"></div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;