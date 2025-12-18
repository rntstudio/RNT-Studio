import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Equipo from '@/components/Equipo';

function App() {
  return (
    <div className="min-h-screen bg-[#EFEDE8] selection:bg-black selection:text-white">
      <Header />
      <main>
        <AboutUs />
        <Equipo />
        <CTA />
      </main>
    </div>
  );
}

export default App;