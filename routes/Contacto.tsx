import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#EFEDE8] selection:bg-black selection:text-white">
      <Header />
      <main>
        <Contact />
        <FAQ />
      </main>
    </div>
  );
}

export default App;