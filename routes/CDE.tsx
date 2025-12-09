import React from 'react';
import Header from '../components/Header';
import Work from '../components/Work';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#EFEDE8] selection:bg-black selection:text-white">
      <Header />
      <main>
        <Work />
        <CTA />
        <FAQ />
      </main>
    </div>
  );
}

export default App;