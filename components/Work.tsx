import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Stat {
    value: string;
    label: string;
}

interface CaseStudy {
    id: string;
    label: string;
    title: string;
    image: string;
    description: string;
    category_label: string;
    category: string;
    platforms_label: string;
    platforms: string[];
    year_label: string;
    year: string;
    challenge_label: string;
    challenge: string;
    strategy_label: string;
    strategy: string;
    results_label: string;
    stats: Stat[];
    section_label?: string;
    section_title?: string;
}

const Work: React.FC = () => {
    const { t } = useTranslation();
    const casesData = t('work.cases', { returnObjects: true });

    // DEBUG: Log what we're receiving
    console.log('=== WORK COMPONENT DEBUG ===');
    console.log('casesData:', casesData);
    console.log('Is array?', Array.isArray(casesData));
    console.log('Length:', Array.isArray(casesData) ? casesData.length : 'N/A');

    // Safety check: Ensure cases is an array
    const cases = Array.isArray(casesData) ? (casesData as CaseStudy[]) : [];

    const sectionLabel = t('work.section_label', 'Casos de Éxito');
    const sectionTitle = t('work.section_title', 'Nuestros mejores trabajos');

    // if (cases.length === 0) {
    //     return null; // Or render a loading state/fallback
    // }

    return (
        <section id="work" className="py-24 px-6 bg-[#EFEDE8]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header - Only once */}
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="inline-block py-1 px-4 border border-gray-300 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-600 mb-4">
                            {sectionLabel}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-['Syne']">{sectionTitle}</h2>
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div className="space-y-16">
                    {cases.map((caseStudy, index) => (
                        <div key={caseStudy.id || index} className="bg-white rounded-[3rem] p-4 md:p-6 shadow-sm overflow-hidden group">
                            <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden mb-8">
                                <img
                                    src={caseStudy.image}
                                    alt={`Caso de Éxito ${caseStudy.title}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-12">
                                    <div className="flex justify-between items-start w-full">
                                        <div>
                                            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs mb-4 inline-block">
                                                {caseStudy.label}
                                            </span>
                                            <h3 className="text-5xl md:text-7xl font-bold text-white mb-4">{caseStudy.title}</h3>
                                            <p className="text-white/80 max-w-lg text-lg">
                                                {caseStudy.description}
                                            </p>
                                        </div>
                                        <button className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                                            <ArrowUpRight />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-4">
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">{caseStudy.category_label}</p>
                                    <p className="text-lg font-semibold">{caseStudy.category}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">{caseStudy.platforms_label}</p>
                                    <div className="flex gap-4">
                                        {caseStudy.platforms.map((platform, i) => (
                                            <span key={i} className="font-semibold">{platform}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest">{caseStudy.year_label}</p>
                                    <p className="text-lg font-semibold">{caseStudy.year}</p>
                                </div>
                            </div>

                            {/* El Desafío */}
                            <div className="mt-8 pt-8 border-t border-gray-100 px-4 pb-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                                    {caseStudy.challenge_label}
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-xl md:text-2xl font-medium leading-snug">
                                        {caseStudy.challenge}
                                    </p>
                                </div>
                            </div>

                            {/* Nuestra Estrategia */}
                            <div className="pt-8 border-t border-gray-100 px-4 pb-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                                    {caseStudy.strategy_label}
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-xl md:text-2xl font-medium leading-snug">
                                        {caseStudy.strategy}
                                    </p>
                                </div>
                            </div>

                            {/* Los Resultados */}
                            <div className="pt-8 border-t border-gray-100 px-4 pb-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
                                    {caseStudy.results_label}
                                </div>
                                <div className="md:col-span-3">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                        {caseStudy.stats.map((stat, i) => (
                                            <div key={i}>
                                                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                                                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;