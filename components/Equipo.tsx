import React from 'react';
import {renata, rode, coni, } from "../src/assets/";

const Equipo: React.FC = () => {
  const team = [
    {
      name: "Renata Montoto",
      role: "Founder & Líder de Contenido y Estrategia",
      image: renata,
    },
    {
      name: "Constanza Nicrosini",
      role: "Community Manager",
      image: coni,
    },
    {
      name: "Roderick Max Lean",
      role: "Community Manager y editor de videos",
      image: rode,
    },
  ];

  return (
    <section id="about-us" className="py-24 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto">

        {/* Team Grid */}
        <div className="mb-20">
            <h3 className="text-3xl md:text-5xl font-bold font-['Syne'] text-center mb-16">
                Conocé al equipo detrás de tu <span className="italic font-serif font-light">éxito</span>.
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="group">
                        <div className="relative h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden mb-6 bg-gray-200">
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover transition-all duration-500"
                            />
                        </div>
                        <h4 className="text-2xl font-bold font-['Syne']">{member.name}</h4>
                        <p className="text-gray-500 mt-1">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;