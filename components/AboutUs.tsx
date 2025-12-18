import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { aura, alimento } from '../src/assets';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  const images = [aura, alimento];
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [images.length]);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section id="about-us" className="py-24 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#FDFBF7] rounded-[3rem] p-12 md:p-16">
        {/* Intro */}
        <div className="mb-20">
          <span className="inline-block py-1 px-4 bg-gray-200/50 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
            {t('about.section_label', 'Nosotros')}
          </span>

          <h2 className="text-5xl md:text-7xl font-bold font-['Syne'] mb-8">
            {t('about.section_title', 'Quiénes somos')}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light mx-auto">
              {t(
                'about.main_text',
                'En RNT Studio ayudamos a marcas, negocios y creadores a comunicar con claridad e intención, construyendo presencias digitales con identidad y crecimiento real. No hacemos contenido por hacer: desarrollamos estrategias que ordenan, diferencian y potencian desde adentro hacia afuera. <Creemos que comunicar es encontrar una voz, una estética y una estrategia que trabajen juntas. Las marcas crecen cuando lo que dicen coincide con lo que son, y por eso diseñamos contenido y estrategias que se sienten, se ven y funcionan.'
              )}
            </p>

            {/* Right Card - Visual */}
            <div className="flex items-center justify-center relative overflow-hidden min-h-[500px]">
              <div className="relative w-[300px] h-[550px] bg-[#2A2A2A] rounded-[3rem] border-8 border-[#2A2A2A] shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-700">
                <div className="w-full h-full bg-[#EFEDE8] rounded-[2.5rem] overflow-hidden p-0 relative">
                  {/* Full-screen Carousel */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Fallback gradient behind the images */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-red-200 z-0" />

                    {/* Slides */}
                    <div
                      className="absolute inset-0 flex transition-transform duration-500 ease-out z-10"
                      style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                      {images.map((src, i) => (
                        <div key={i} className="w-full h-full flex-shrink-0">
                          <img src={src} alt={`Post visual ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>

                    {/* Controls */}
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Imagen anterior"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white/90 backdrop-blur rounded-full p-2"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Imagen siguiente"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white/90 backdrop-blur rounded-full p-2"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setCurrent(i)}
                          aria-label={`Ir a imagen ${i + 1}`}
                          className={`w-2.5 h-2.5 rounded-full ${i === current ? 'bg-white/90' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;