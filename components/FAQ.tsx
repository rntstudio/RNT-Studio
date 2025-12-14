import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const { t } = useTranslation();

    const faqs = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>;

    return (
        <section id="faq" className="py-24 px-8 md:px-12 lg:px-16 bg-[#EFEDE8]">
            <div className="max-w-5xl mx-auto">
                <div className="bg-[#F5F2EC] rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-sm">
                    {/* Small tag */}
                    <div className="inline-flex items-center px-4 py-2 rounded-xl bg-black/5 text-sm font-medium text-black mb-8">
                        {t('faq.tag', 'Preguntas')}
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Syne'] leading-tight mb-10">
                        {t('faq.title_main', 'Preguntas')}<br />
                        <span className="italic">{t('faq.title_highlight', 'Frecuentes')}</span>
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