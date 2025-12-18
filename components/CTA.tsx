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
    <section>
      {/* other content */}
      {/* Replace footer text span with carousel visual card */}
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
    </section>
  );
};

export default AboutUs;