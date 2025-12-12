import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { phone_scroll } from '../src/assets';

const CTA: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-6">
        
        {/* Left Card */}
        <div className="bg-[#FDFBF7] rounded-[3rem] p-12 md:p-16 flex flex-col justify-center items-start relative overflow-hidden min-h-[500px]">
             
             <div className="text-center md:text-left w-full">
                 <span className="inline-block px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold mb-6">Empieza ahora</span>
                 <h2 className="text-5xl md:text-6xl font-bold font-['Syne'] leading-[0.95] mb-6 tracking-tight">
                    Tu viaje viral <br/>
                    comienza <span className="italic font-serif font-light">aquí mismo.</span>
                 </h2>
                 <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto md:mx-0">
                    Agenda una llamada de estrategia gratuita de 30 minutos y te mostraremos cómo convertir seguidores en clientes.
                 </p>
                 <Link
                   to="/Contacto"
                   onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                   className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">
                  Agendar llamada
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </Link>
             </div>
        </div>

        {/* Right Card - Visual */}
        <div className="bg-[#FDFBF7] rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden min-h-[500px]">
            <div className="relative h-[400px] md:h-[460px] lg:h-[500px] aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-[#EFEDE8] shadow-2xl">
              <video
                className="w-full h-full object-cover"
                src={phone_scroll}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;