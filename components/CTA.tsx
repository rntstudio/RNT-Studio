import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
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
                 <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">
                    Agendar una llamada <ArrowRight className="w-4 h-4" />
                 </a>
             </div>
        </div>

        {/* Right Card - Visual */}
        <div className="bg-[#FDFBF7] rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden min-h-[500px]">
             <div className="relative w-[300px] h-[550px] bg-[#2A2A2A] rounded-[3rem] border-8 border-[#2A2A2A] shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-700">
                <div className="w-full h-full bg-[#EFEDE8] rounded-[2.5rem] overflow-hidden p-4 relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="w-20 h-2 rounded-full bg-gray-200"></div>
                    </div>
                    {/* Post */}
                    <div className="w-full aspect-[4/5] bg-gradient-to-tr from-orange-200 to-red-200 rounded-2xl mb-4 shadow-inner"></div>
                    {/* Lines */}
                    <div className="space-y-2 mb-6">
                        <div className="w-3/4 h-2 rounded-full bg-gray-200"></div>
                        <div className="w-1/2 h-2 rounded-full bg-gray-200"></div>
                    </div>
                    {/* Icons */}
                    <div className="flex gap-3">
                         <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                         <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                         <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    </div>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;