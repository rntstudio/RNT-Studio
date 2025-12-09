import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  const navLinks = [
    { name: 'Inicio', href: '/inicio' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Casos de Éxito', href: '/CDE' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'bg-[#EFEDE8]/80 backdrop-blur-md border-b border-black/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="/inicio" 
          onClick={(e) => handleNavClick(e, '/inicio')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          {/* Logo Icon */}
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
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
          <a 
            href="/contacto" 
            onClick={(e) => handleNavClick(e, '/contacto')}
            className="hidden md:block px-5 py-2.5 bg-black text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform"
          >
            Agendar llamada
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
            Agendar llamada
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;