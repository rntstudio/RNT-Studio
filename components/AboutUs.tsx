import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about-us" className="py-24 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto">

        {/* Intro */}
        <div className="mb-20">
          <span className="inline-block py-1 px-4 bg-gray-200/50 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
            {t('about.section_label', 'Nosotros')}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-['Syne'] mb-8">
            {t('about.section_title', 'Quiénes somos')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              {t('about.main_text', 'En RNT Studio ayudamos a marcas, negocios y creadores a comunicar con claridad e intención, construyendo presencias digitales con identidad y crecimiento real. No hacemos contenido por hacer: desarrollamos estrategias que ordenan, diferencian y potencian desde adentro hacia afuera. Creemos que comunicar es encontrar una voz, una estética y una estrategia que trabajen juntas. Las marcas crecen cuando lo que dicen coincide con lo que son, y por eso diseñamos contenido y estrategias que se sienten, se ven y funcionan. Por eso diseñamos contenido con intención y estrategias que se sienten, se ven y funcionan.')}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#EFEDE8] overflow-hidden">
                    <img src={`https://picsum.photos/100/100?random=${i + 50}`} alt="Team member" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-black text-white border-2 border-[#EFEDE8] flex items-center justify-center">
                  <span className="font-['Syne']">*</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-500">
                {t('about.team_footer', 'Facilitando el crecimiento de mas de 20 marcas de manera exitosa')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;