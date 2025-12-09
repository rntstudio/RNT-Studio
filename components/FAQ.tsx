import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
        const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            <section id="faq" className="py-24 px-6 bg-[#EFEDE8]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-['Syne'] mb-8">Preguntas Frecuentes</h2>
                    <div className="mt-8 space-y-4">
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
            </section>
        );
};

export default FAQ;