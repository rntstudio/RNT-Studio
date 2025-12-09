import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoCarousel from './components/LogoCarousel';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Work from './components/Work';
import CTA from './components/CTA';
import AITool from './components/AITool';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#EFEDE8] selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <Services />
        <AboutUs />
        <Work />
        <CTA />
        <AITool />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;