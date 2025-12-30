import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './routes/Inicio';
import CDE from './routes/CDE';
import Contacto from './routes/Contacto';
import Nosotros from './routes/Nosotros';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#EFEDE8] selection:bg-black selection:text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Navigate to="/" replace />} />
          <Route path="/CDE" element={<CDE />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;