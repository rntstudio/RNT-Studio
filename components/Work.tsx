import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { niu, belleza, street } from "../src/assets/";

interface Stat {
    value: string;
    label: string;
}

interface CaseStudy {
    id: string;
    label: string;
    title: string;
    image: street | belleza | niu;
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

    // Map image keys to actual imported images
    const imageMap: { [key: string]: string } = {
        'street': street,
        'niu': niu,
        'belleza': belleza
    };

    // Safety check: Ensure cases is an array and map image keys to actual images
    const cases = Array.isArray(casesData)
        ? (casesData as CaseStudy[]).map(caseStudy => ({
            ...caseStudy,
            image: imageMap[caseStudy.image as unknown as string] || caseStudy.image
        }))
        : [];

    const sectionLabel = t('work.section_label', 'Casos de Éxito');
    const sectionTitle = t('work.section_title', 'Nuestros mejores trabajos');

    return (
        <section id="work" className="py-32 px-6 bg-gradient-to-b from-[#EFEDE8] to-[#E5E1DA]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header with Animation */}
                <div className="flex justify-between items-end mb-20 animate-fade-in">
                    <div>
                        <span className="inline-block py-2 px-5 border border-gray-300 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-gray-700 mb-6 shadow-sm bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-300">
                            {sectionLabel}
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-['Syne'] text-gray-900 leading-tight">
                            {sectionTitle}
                        </h2>
                    </div>
                </div>

                {/* Case Studies Grid */}
                <div className="space-y-20">
                    {cases.map((caseStudy, index) => (
                        <CaseStudyCard key={caseStudy.id || index} caseStudy={caseStudy} index={index} />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }

                @keyframes slide-up {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-slide-up {
                    animation: slide-up 0.8s ease-out;
                }
            `}</style>
        </section>
    );
};

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy; index: number }> = ({ caseStudy, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`bg-white rounded-[3rem] p-6 md:p-8 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_80px_-15px_rgba(0,0,0,0.25)] overflow-hidden group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            {/* Hero Image Section */}
            <div className="relative h-[400px] md:h-[650px] rounded-[2.5rem] overflow-hidden mb-10 shadow-inner">
                <img
                    src={caseStudy.image}
                    alt={`Caso de Éxito ${caseStudy.title}`}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-14">
                    <div className="flex justify-between items-start w-full">
                        <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                            <span className="bg-white/25 backdrop-blur-xl text-white px-4 py-2 rounded-full text-xs font-semibold mb-5 inline-block border border-white/20 shadow-lg">
                                {caseStudy.label}
                            </span>
                            <h3 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-5 leading-none tracking-tight drop-shadow-2xl">
                                {caseStudy.title}
                            </h3>
                            <p className="text-white/90 max-w-2xl text-base md:text-lg leading-relaxed font-light">
                                {caseStudy.description}
                            </p>
                        </div>
                        <button className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-8 group-hover:translate-y-0 duration-500 shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95">
                            <ArrowUpRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 pb-6 mb-8">
                <InfoItem label={caseStudy.category_label} value={caseStudy.category} />
                <div className="space-y-3 group/item">
                    <p className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-bold">
                        {caseStudy.platforms_label}
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        {caseStudy.platforms.map((platform, i) => (
                            <span
                                key={i}
                                className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-semibold text-gray-800 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-default"
                            >
                                {platform}
                            </span>
                        ))}
                    </div>
                </div>
                <InfoItem label={caseStudy.year_label} value={caseStudy.year} />
            </div>

            {/* Challenge Section */}
            <ContentSection label={caseStudy.challenge_label} content={caseStudy.challenge} />

            {/* Strategy Section */}
            <ContentSection label={caseStudy.strategy_label} content={caseStudy.strategy} />

            {/* Results Section */}
            <div className="pt-10 border-t border-gray-200 px-6 pb-8 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="flex items-start">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold">
                        {caseStudy.results_label}
                    </div>
                </div>
                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                        {caseStudy.stats.map((stat, i) => (
                            <StatCard key={i} stat={stat} delay={i * 100} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div className="space-y-3 group/item">
        <p className="text-[11px] text-gray-500 uppercase tracking-[0.15em] font-bold group-hover/item:text-gray-700 transition-colors">
            {label}
        </p>
        <p className="text-lg md:text-xl font-bold text-gray-900 group-hover/item:text-black transition-colors">
            {value}
        </p>
    </div>
);

const ContentSection: React.FC<{ label: string; content: string }> = ({ label, content }) => (
    <div className="pt-10 border-t border-gray-200 px-6 pb-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex items-start">
            <div className="text-[11px] uppercase tracking-[0.15em] text-gray-500 font-bold relative">
                {label}
                <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </div>
        <div className="md:col-span-3">
            <p className="text-lg md:text-2xl font-medium leading-relaxed text-gray-800 hover:text-gray-900 transition-colors">
                {content}
            </p>
        </div>
    </div>
);

const StatCard: React.FC<{ stat: Stat; delay: number }> = ({ stat, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const statRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={statRef}
            className={`group/stat relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-900 hover:shadow-xl transition-all duration-500 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover/stat:opacity-5 rounded-2xl transition-opacity duration-500" />
            <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2 group-hover/stat:scale-110 transition-transform duration-300 origin-left">
                {stat.value}
            </p>
            <p className="text-sm text-gray-600 font-medium group-hover/stat:text-gray-900 transition-colors">
                {stat.label}
            </p>
        </div>
    );
};

export default Work;