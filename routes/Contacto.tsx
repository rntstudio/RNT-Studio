import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-[#EFEDE8] selection:bg-black selection:text-white">
      <Header />
      <main>
        <Helmet>
          <title>Contacto | RNT Studio</title>
          <meta name="robots" content="index, follow" />
        </Helmet>
        <Contact />
        <FAQ />
      </main>
    </div>
  );
}

export default App;