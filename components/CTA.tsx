import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { aura, alimento } from '../src/assets';
import { useTranslation } from 'react-i18next';

const CTA: React.FC = () => {
  const images = [aura, alimento];
  const [current, setCurrent] = React.useState(0);
  const { t } = useTranslation();

  const scrollToTop = () => {
    // Make sure every navigation starts at the top of the target page
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [images.length]);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section className="py-12 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Card */}
        <div className="bg-[#FDFBF7] rounded-[3rem] p-12 md:p-16 flex flex-col justify-center items-start relative overflow-hidden min-h-[500px]">

          <div className="text-center md:text-left w-full">
            <span className="inline-block px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold mb-6">{t('cta.tag', 'Empieza ahora')}</span>
            <h2 className="text-5xl md:text-6xl font-bold font-['Syne'] leading-[0.95] mb-6 tracking-tight">
              {t('cta.title_main', 'Tu viaje viral')} <br />
              {t('cta.title_sub', 'comienza')} <span className="italic font-serif font-light">{t('cta.title_highlight', 'aquí mismo.')}</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-md mx-auto md:mx-0">
              {t('cta.description', 'Ágenda una llamada de estrategia gratuita de 30 minutos y te mostraremos cómo convertir seguidores en clientes.')}
            </p>

            <Link
              to="/contacto"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform"
            >
              {t('cta.button', 'Ágendar una llamada')} <ArrowRight className="w-4 h-4" />
            </Link>
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
              {/* Post (Carousel) */}
              <div className="w-full aspect-[4/5] rounded-2xl mb-4 shadow-inner overflow-hidden relative">
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
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`Ir a imagen ${i + 1}`}
                      className={`w-2.5 h-2.5 rounded-full ${i === current ? 'bg-black/80' : 'bg-black/30'}`}
                    />
                  ))}
                </div>
              </div>

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