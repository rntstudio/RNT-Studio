import React from 'react';
import { ArrowRight } from 'lucide-react';

const Equipo: React.FC = () => {
  const team = [
    {
      name: "Sofia Little",
      role: "Líder Creativa",
      image: "../dist/assets/renata-montoto.png"
    },
    {
      name: "Renata Montoto",
      role: "Fundador & CEO",
      image: "../dist/assets/renata-montoto.png"
    },
    {
      name: "Maya Rodriguez",
      role: "Especialista en Crecimiento",
      image: "../dist/assets/renata-montoto.png"
    }
  ];

  return (
    <section id="about-us" className="py-24 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto">

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

export default Equipo;