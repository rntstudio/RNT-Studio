import React from 'react';
import { Instagram, Linkedin, Twitter, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand Section - Spans 5 cols */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight font-['Syne']">RNT Studio</span>
            </Link>

            <h2 className="text-4xl md:text-5xl font-bold font-['Syne'] leading-[1.1] tracking-tight">
              {t('footer.tagline_main', 'Redes sociales que impulsan')}<br /> <span className="italic font-serif font-light">{t('footer.tagline_highlight', 'tu crecimiento')}</span>.
            </h2>

            <p className="text-gray-400 text-lg">
              {t('footer.sub_tagline', 'Para marcas, negocios y creadores que quieren destacar.')}
            </p>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/rnt_studios/" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform hover:bg-gray-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform hover:bg-gray-200">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Spacing col */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Section - Spans 6 cols */}
          <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 pt-2">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">{t('footer.nav_title', 'Navegar')}</h3>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><Link to="/#" className="hover:text-white transition-colors">{t('nav.home', 'Inicio')}</Link></li>
                <li><Link to="/nosotros/#" className="hover:text-white transition-colors">{t('nav.about', 'Nosotros')}</Link></li>
                <li><Link to="/cde/#" className="hover:text-white transition-colors">{t('nav.work', 'Casos de Éxito')}</Link></li>
                <li><Link to="/contacto" className="hover:text-white transition-colors">{t('nav.contact', 'Agendar llamada')}</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">{t('footer.connect_title', 'Conectar')}</h3>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li>
                  <p className="hover:text-white transition-colors">+54 9 11 3231-1023</p>
                </li>
                <li>
                  <p className="hover:text-white transition-colors">rnt.sstudio@gmail.com</p>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rnt_studios/" className="hover:text-white transition-colors"
                    target="_blank"
                  >
                    Instragram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@rnt.studio" className="hover:text-white transition-colors"
                    target="_blank"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold mb-6 text-sm uppercase tracking-wider text-white">{t('footer.info_title', 'Info')}</h3>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><Link to="/contacto" className="hover:text-white transition-colors">{t('nav.contact', 'Contacto')}</Link></li>
                <li><span className="opacity-50 cursor-not-allowed">404</span></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-20 border-t border-white/10 text-sm text-gray-500 font-medium">
          <p>© 2024 RNT Studio.</p>
          <p className="mt-2 md:mt-0 opacity-60">{t('footer.designed_by', 'Diseñado en Buenos Aires')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;