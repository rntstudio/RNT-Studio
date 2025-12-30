import React from 'react';
import { Helmet } from 'react-helmet-async';
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
        <Helmet>
          <title>Casos de Éxito | RNT Studio</title>
          <meta name="robots" content="index, follow" />
        </Helmet>
        <Work />
        <CTA />
        <FAQ />
      </main>
    </div>
  );
}

export default App;