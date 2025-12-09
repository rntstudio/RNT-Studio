import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import AITool from './components/AITool';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#EFEDE8] selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <AITool />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;