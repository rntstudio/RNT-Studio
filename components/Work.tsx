import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
            <div>
                <span className="inline-block py-1 px-4 border border-gray-300 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-600 mb-4">
                    Casos de Éxito
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-['Syne']">Nuestros mejores trabajos</h2>
            </div>
            
        </div>

        {/* Main Case Study */}
        <div className="bg-white rounded-[3rem] p-4 md:p-6 shadow-sm overflow-hidden group">
            <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden mb-8">
                <img 
                    src="https://picsum.photos/1600/900?random=2" 
                    alt="Caso de Éxito Border Headphones" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <div className="flex justify-between items-start w-full">
                        <div>
                            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs mb-4 inline-block">Proyecto Destacado</span>
                            <h3 className="text-5xl md:text-7xl font-bold text-white mb-4">Border</h3>
                            <p className="text-white/80 max-w-lg text-lg">
                                Una marca de audio premium que crea audífonos de alta calidad para entusiastas de la música y profesionales creativos.
                            </p>
                        </div>
                        <button className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                             <ArrowUpRight />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-4">
                <div className="space-y-2">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Categoría</p>
                    <p className="text-lg font-semibold">Tecnología</p>
                </div>
                <div className="space-y-2">
                     <p className="text-xs text-gray-400 uppercase tracking-widest">Plataformas</p>
                     <div className="flex gap-4">
                        <span className="font-semibold">Instagram</span>
                        <span className="font-semibold">TikTok</span>
                        <span className="font-semibold">YouTube</span>
                     </div>
                </div>
                <div className="space-y-2">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Año</p>
                    <p className="text-lg font-semibold">2025</p>
                </div>
            </div>
            
            {/* El Desafío */}
            <div className="mt-8 pt-8 border-t border-gray-100 px-4 pb-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    El Desafío
                </div>
                <div className="md:col-span-3">
                    <p className="text-xl md:text-2xl font-medium leading-snug">
                        Border quería posicionarse como la opción premium para entusiastas del audio mientras irrumpía en el competitivo mercado de audífonos dominado por marcas más grandes.
                    </p>
                </div>
            </div>

            {/* Nuestra Estrategia */}
            <div className="pt-8 border-t border-gray-100 px-4 pb-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Nuestra Estrategia
                </div>
                <div className="md:col-span-3">
                    <p className="text-xl md:text-2xl font-medium leading-snug">
                        Desarrollamos una estrategia de contenido centrada en video corto y storytelling de producto, optimizada para maximizar alcance orgánico y conversiones de interés.
                    </p>
                </div>
            </div>

            {/* Los Resultados */}
            <div className="pt-8 border-t border-gray-100 px-4 pb-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                    Los Resultados
                </div>
                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">128K</p>
                            <p className="mt-1 text-sm text-gray-500">Visualizaciones de Reels</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">245%</p>
                            <p className="mt-1 text-sm text-gray-500">Engagement</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">189%</p>
                            <p className="mt-1 text-sm text-gray-500">Crecimiento de seguidores</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Work;