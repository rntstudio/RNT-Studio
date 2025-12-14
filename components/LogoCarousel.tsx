import React from 'react';
import { logo01, logo02, logo03, logo04, logo05, logo06, logo07, logo08, } from '../src/assets';
import { log } from 'console';
import { useTranslation } from 'react-i18next';

const LogoCarousel: React.FC = () => {
  const { t } = useTranslation();
  const brands = [
    logo01, logo02, logo03, logo04, logo05, logo06, logo07, logo08
  ];

  return (
    <div className="pt-12 pb-20 border-y border-black/5 overflow-hidden bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{t('logo_carousel.label', 'Marcas que confían en nosotros')}</p>
      </div>
      <div className="relative overflow-hidden group">
        {/* Track 1 */}
        <div className="marquee-track flex gap-16 md:gap-32 px-16 items-center">
          {brands.map((brand, index) => (
            <div key={`t1-${index}`} className="flex items-center justify-center select-none">
              {typeof brand === 'string' ? (
                <img
                  src={brand}
                  alt={`Logo ${index + 1}`}
                  className="logo-carousel-img h-8 md:h-10 w-auto opacity-30 hover:opacity-60 transition-opacity"
                  loading="lazy"
                  draggable={false}
                />
              ) : (
                brand
              )}
            </div>
          ))}
        </div>

        {/* Track 2 (aria-hidden to avoid duplicated announcements) */}
        <div className="marquee-track marquee-track-2 flex gap-16 md:gap-32 px-16 items-center" aria-hidden="true">
          {brands.map((brand, index) => (
            <div key={`t2-${index}`} className="flex items-center justify-center select-none">
              {typeof brand === 'string' ? (
                <img
                  src={brand}
                  alt=""
                  className="logo-carousel-img h-8 md:h-10 w-auto opacity-30 hover:opacity-60 transition-opacity"
                  loading="lazy"
                  draggable={false}
                />
              ) : (
                brand
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .logo-carousel-img {
          filter: grayscale(100%) contrast(1.15);
        }
        .marquee-track {
          width: max-content;
          animation: marquee 50s linear infinite;
          will-change: transform;
        }

        .marquee-track-2 {
          position: absolute;
          inset: 0 auto 0 0;
          transform: translateX(100%);
          animation-name: marquee2;
        }

        /* Pause on hover */
        .group:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: none;
          }
          .marquee-track-2 {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;