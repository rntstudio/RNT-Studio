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
    <section id="contact" className="py-24 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Title + FAQ */}
        <div className="flex flex-col justify-between">
            <div>
                <span className="inline-block border-b border-black pb-1 mb-8 text-sm font-bold">Agendar llamada</span>
                <h2 className="text-6xl md:text-7xl font-bold font-['Syne'] leading-none mb-8">
                    Empecemos <br/> ahora
                </h2>
                <p className="text-xl text-gray-600 max-w-md mb-12">
                    ¿Listo para transformar tus redes sociales? Contáctanos y te mostraremos lo que es posible para tu marca.
                </p>
            </div>

            {/* FAQ Accordion */}
            <div className="mt-8 space-y-4">
                <h3 className="text-2xl font-bold font-['Syne'] mb-6">Preguntas Frecuentes</h3>
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-black/10 pb-4">
                        <button 
                            className="w-full flex justify-between items-center text-left text-lg font-semibold py-2 hover:opacity-70 transition-opacity"
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >
                            {faq.q}
                            {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm">
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
                        {['< $2K', '$2K-$5K', '$5K-$10K', '$10K+'].map(opt => (
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