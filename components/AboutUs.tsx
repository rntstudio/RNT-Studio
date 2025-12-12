import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {

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
              En RNT Studio ayudamos a marcas, negocios y creadores a comunicar con claridad, intención y coherencia.
              Nuestra misión es construir presencias digitales que transmitan identidad, conecten con la audiencia correcta y generen crecimiento real.

              No hacemos contenido por hacer.
              Creamos estrategias que ordenan, diferencian y potencian a cada marca desde adentro hacia afuera.

              Somos un estudio creado para quienes entienden que comunicar es más que publicar:
              es encontrar una voz, una estética y una estrategia que trabajen juntas.

              Nos mueve un principio:
              las marcas crecen cuando lo que dicen coincide con lo que son.

              Por eso diseñamos contenido con intención y estrategias que se sienten, se ven y funcionan.
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
                    Facilitando el crecimiento de mas de 20 marcas de manera exitosa
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;