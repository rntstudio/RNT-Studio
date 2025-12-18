import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement | null>(null);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'es';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!langMenuRef.current) return;
      const target = event.target as Node;
      if (!langMenuRef.current.contains(target)) {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigate = useNavigate();

  const navLinks = [
    { name: t('nav.home', 'Inicio'), href: '/inicio' },
    { name: t('nav.about', 'Nosotros'), href: '/nosotros' },
    { name: t('nav.work', 'Casos de Éxito'), href: '/CDE' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setLangMenuOpen(false);

    // Always go to the top when using the navbar
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navigate to the base route (ignore any hash)
    const baseHref = href.split('#')[0];

    if (baseHref.startsWith('/')) {
      navigate(baseHref);
      return;
    }

    // Fallback for non-router anchors
    if (baseHref === '#' || baseHref.length === 0) {
      return;
    }

    navigate(baseHref);
  };

  const setLanguage = (lang: 'en' | 'es') => {
    i18n.changeLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-[#EFEDE8]/80 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="/inicio"
          onClick={(e) => handleNavClick(e, '/inicio')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          {/* Logo Icon */}
          <span className="font-bold text-xl tracking-tight font-['Syne']">RNT Studio</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div ref={langMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black transition-colors"
              aria-haspopup="menu"
              aria-expanded={langMenuOpen}
            >
              <Globe className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'EN' : 'ES'}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {langMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-24 bg-[#EFEDE8] border border-black/10 rounded-xl shadow-lg overflow-hidden"
                role="menu"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('es')}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-black/5 transition-colors ${currentLang === 'es' ? 'font-semibold text-black' : 'text-gray-700'}`}
                  role="menuitem"
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`w-full px-3 py-2 text-left text-sm hover:bg-black/5 transition-colors ${currentLang === 'en' ? 'font-semibold text-black' : 'text-gray-700'}`}
                  role="menuitem"
                >
                  EN
                </button>
              </div>
            )}
          </div>

          <a
            href="/contacto"
            onClick={(e) => handleNavClick(e, '/contacto')}
            className="hidden md:block px-5 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform"
          >
            {t('nav.contact', 'Agendar llamada')}
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#EFEDE8] p-6 border-b border-black/10 md:hidden flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-800"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contacto"
            onClick={(e) => handleNavClick(e, '/contacto')}
            className="px-5 py-3 bg-black text-white rounded-full text-center text-sm font-semibold"
          >
            {t('nav.contact', 'Agendar llamada')}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;