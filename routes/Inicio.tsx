import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LogoCarousel from '../components/LogoCarousel';
import Services from '../components/Services';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import AboutUs from '@/components/AboutUs';
import Equipo from '@/components/Equipo';

function App() {
  return (
    <div className="min-h-screen bg-[#EFEDE8] selection:bg-black selection:text-white">
      <main>
        <Hero />
        <LogoCarousel />
        <Services />
        <Equipo />
        <CTA />
        <FAQ />
      </main>
    </div>
  );
}

export default App;