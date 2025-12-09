import React from 'react';
import { ArrowRight, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left Content */}
        <div className="space-y-8 relative z-10">
          <div className="flex gap-4 mb-4">
            <Linkedin className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <Instagram className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <Twitter className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
            <Youtube className="w-5 h-5 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
            Redes sociales <br />
            bien <span className="italic font-serif font-light">hechas</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-md leading-relaxed">
            Combinamos contenido, gestión y medios pagados para ayudar a las marcas a crecer y convertir en las plataformas que más importan.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="group px-8 py-4 bg-black text-white rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Agendar llamada
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#work" className="px-8 py-4 bg-transparent border border-gray-300 rounded-full font-semibold hover:border-black transition-colors">
              Ver trabajos
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-[600px] w-full flex justify-center items-center">
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#E6E1D6] to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>

            {/* Main Phone Card Image Mockup */}
            <div className="relative w-[320px] md:w-[380px] h-[600px] bg-white rounded-[3rem] shadow-2xl p-4 overflow-hidden border-8 border-white transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Simulated Screen Content */}
                <div className="w-full h-full rounded-[2.5rem] bg-gray-100 relative overflow-hidden">
                    <img 
                        src="https://picsum.photos/400/800?random=1" 
                        alt="Social Media Content" 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Floating UI Elements inside phone */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        @rntstudio
                    </div>

                    <div className="absolute bottom-6 right-6">
                         <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full animate-spin-slow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                            </svg>
                         </div>
                    </div>
                </div>
            </div>

             {/* Floating Badge */}
            <div className="absolute bottom-12 left-0 md:left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
                 <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Interacción</p>
                    <p className="text-lg font-bold">+124%</p>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;