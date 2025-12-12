import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
        const [openFaq, setOpenFaq] = useState<number | null>(0);

        const faqs = [
                {
                        q: "¿Cómo trabajan la estrategia de mi marca?",
                        a: "Creamos una estrategia personalizada basada en objetivos, identidad, audiencia y métricas. Nada se improvisa: cada acción responde a un propósito."
                },
                {
                        q: "¿Necesito tener material propio o ustedes producen contenido?",
                        a: "Podemos trabajar con material que tengas o encargarnos de la producción completa: fotos, videos, reels, guiones y todo lo necesario para tu comunicación."
                },
                {
                        q: "¿Cómo se mide el rendimiento de las redes?",
                        a: "Realizamos reportes mensuales con métricas claras: alcance, interacción, crecimiento, rendimiento de contenidos y recomendaciones estratégicas."
                },
                {
                        q: "Si no tengo muchos seguidores, ¿igual puedo crecer?",
                        a: "Sí. El crecimiento no depende de la cantidad de seguidores actuales, sino de tener una estrategia clara, contenido de calidad y una comunicación coherente. Trabajamos para que tu marca conecte con las personas correctas, genere interacción real y atraiga una comunidad que crezca de manera orgánica y sostenida. Todos los perfiles empiezan en cero: lo importante es cómo se construye desde ahí."
                },
                {
                        q: "¿Ustedes responden los mensajes o lo hago yo?",
                        a: "Nos adaptamos a lo que necesite tu marca. Podemos encargarnos de la gestión de mensajes, consultas y comentarios, o trabajar en conjunto para que vos respondas lo que requiera conocimiento interno del negocio. Lo importante es mantener una comunicación rápida, clara y alineada al tono de tu marca —y eso lo definimos juntos desde el inicio."
                },
        ];

        return (
            <section id="faq" className="py-24 px-8 md:px-12 lg:px-16 bg-[#EFEDE8]">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-[#F5F2EC] rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-sm">
                        {/* Small tag */}
                        <div className="inline-flex items-center px-4 py-2 rounded-xl bg-black/5 text-sm font-medium text-black mb-8">
                            Preguntas
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Syne'] leading-tight mb-10">
                            Preguntas<br />
                            <span className="italic">Frecuentes</span>
                        </h2>

                        {/* Accordion */}
                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openFaq === index;
                                return (
                                    <div key={index} className="bg-[#EFECE6] rounded-2xl px-6 md:px-8 py-5">
                                        <button
                                            type="button"
                                            className="w-full flex items-center justify-between gap-6 text-left"
                                            onClick={() => setOpenFaq(isOpen ? null : index)}
                                        >
                                            <span className="text-lg md:text-xl font-semibold">
                                                {faq.q}
                                            </span>

                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white shrink-0">
                                                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                            </span>
                                        </button>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                                        >
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
};

export default FAQ;