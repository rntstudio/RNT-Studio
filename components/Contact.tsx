import React, { useState } from 'react';
import { ArrowUpRight, Loader2, Plus, Minus } from 'lucide-react';

const Contact: React.FC = () => {
    const [submitting, setSubmitting] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            alert("¡Gracias! Nos pondremos en contacto pronto.");
        }, 1500);
    }

    const faqs = [
        {
            q: "¿Qué incluye la gestión mensual?",
            a: "Incluye planificación de contenido, creación de guiones, edición de video, gestión de comunidad y reportes mensuales de rendimiento."
        },
        {
            q: "¿Cuánto tiempo toma ver resultados?",
            a: "Generalmente vemos un aumento en el alcance en el primer mes, pero los resultados de conversión sólidos suelen tomar de 3 a 6 meses de consistencia."
        },
        {
            q: "¿Trabajan con marcas personales?",
            a: "¡Sí! Nos especializamos tanto en marcas corporativas como en marcas personales de alto perfil."
        },
        {
            q: "¿Cuáles son sus precios?",
            a: "Nuestros paquetes comienzan desde $2,000 USD mensuales. Personalizamos cada propuesta según tus necesidades específicas."
        }
    ];

  return (
    <section id="contact" className="py-24 px-8 md:px-12 lg:px-16 bg-[#EFEDE8]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-16">

        {/* Right Column: Form */}
        <div className="w-full bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm">
            <h3 className="text-2xl font-bold font-['Syne'] mb-8">Formulario de Contacto</h3>
            <form onSubmit={handleSubmit} className="space-y-8 bg-transparent">
                <div className="space-y-6">
                    <div className="group">
                        <label className="block text-sm font-medium text-gray-500 mb-2">Nombre *</label>
                        <input required type="text" className="w-full bg-[#F5F5F0] rounded-xl border-none py-4 px-4 text-lg focus:ring-2 focus:ring-black transition-all" placeholder="Tu nombre" />
                    </div>
                    <div className="group">
                        <label className="block text-sm font-medium text-gray-500 mb-2">Correo *</label>
                        <input required type="email" className="w-full bg-[#F5F5F0] rounded-xl border-none py-4 px-4 text-lg focus:ring-2 focus:ring-black transition-all" placeholder="tu@email.com" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-500 mb-4">¿Qué servicios te interesan?</label>
                    <div className="flex flex-wrap gap-3">
                        {['Contenido', 'Gestión', 'Ads', 'Todo'].map(opt => (
                            <label key={opt} className="cursor-pointer">
                                <input type="checkbox" className="peer sr-only" />
                                <span className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white text-sm peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-all">
                                    {opt}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-500 mb-4">¿Presupuesto mensual?</label>
                    <div className="flex flex-wrap gap-3">
                        {['- de $600K', '$600K-$2M', '$2M-$6M', '$6M+'].map(opt => (
                            <label key={opt} className="cursor-pointer">
                                <input type="radio" name="budget" className="peer sr-only" />
                                <span className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white text-sm peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-all">
                                    {opt}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">Detalles del proyecto *</label>
                    <textarea required rows={3} className="w-full bg-[#F5F5F0] rounded-xl border-none py-4 px-4 text-lg focus:ring-2 focus:ring-black transition-all resize-none" placeholder="Cuéntanos más..."></textarea>
                </div>

                <button disabled={submitting} type="submit" className="w-full bg-black text-white py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70">
                    {submitting ? <Loader2 className="animate-spin" /> : <>Enviar Solicitud <ArrowUpRight className="w-5 h-5" /></>}
                </button>
            </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;