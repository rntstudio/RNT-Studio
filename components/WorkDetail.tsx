import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { niu, belleza, street } from "../src/assets/";

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
}

const WorkDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const casesData = t('work.cases', { returnObjects: true });

    // Map image keys to actual imported images
    const imageMap: { [key: string]: string } = {
        'street': street,
        'niu': niu,
        'belleza': belleza
    };

    // Find the specific case study
    const cases = Array.isArray(casesData)
        ? (casesData as CaseStudy[]).map(caseStudy => ({
            ...caseStudy,
            image: imageMap[caseStudy.image as unknown as string] || caseStudy.image
        }))
        : [];

    const caseStudy = cases.find(c => c.id === id);

    if (!caseStudy) {
        return (
            <div className="min-h-screen bg-[#EFEDE8] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Caso de estudio no encontrado</h2>
                    <button
                        onClick={() => navigate('/CDE')}
                        className="text-[#D4A574] hover:underline"
                    >
                        Volver a casos de éxito
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#EFEDE8]">
            {/* Hero Section - No Animations */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* Title and Description Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24">
                    <div className="max-w-4xl space-y-6">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none font-['Syne']">
                            {caseStudy.title}
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl">
                            {caseStudy.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Back Button */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
                <button
                    onClick={() => navigate('/CDE')}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm uppercase tracking-wider font-semibold">Volver a Proyectos</span>
                </button>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                {/* Meta Information Grid */}
                <MetaGrid caseStudy={caseStudy} />

                {/* Challenge Section */}
                <ContentSection
                    label={caseStudy.challenge_label}
                    content={caseStudy.challenge}
                />

                {/* Strategy Section */}
                <ContentSection
                    label={caseStudy.strategy_label}
                    content={caseStudy.strategy}
                />

                {/* Results Section */}
                <ResultsSection
                    label={caseStudy.results_label}
                    stats={caseStudy.stats}
                />
            </div>
        </div>
    );
};

// Meta Grid Component - No Animations
const MetaGrid: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-gray-300">
            {/* Category */}
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-[0.15em] font-bold mb-3">
                    {caseStudy.category_label}
                </p>
                <p className="text-xl font-bold text-gray-900">
                    {caseStudy.category}
                </p>
            </div>

            {/* Platforms */}
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-[0.15em] font-bold mb-3">
                    {caseStudy.platforms_label}
                </p>
                <div className="flex gap-3 flex-wrap">
                    {caseStudy.platforms.map((platform, i) => (
                        <span
                            key={i}
                            className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-semibold text-gray-800 hover:bg-[#D4A574] hover:text-white transition-all duration-300"
                        >
                            {platform}
                        </span>
                    ))}
                </div>
            </div>

            {/* Year */}
            <div>
                <p className="text-xs text-gray-500 uppercase tracking-[0.15em] font-bold mb-3">
                    {caseStudy.year_label}
                </p>
                <p className="text-xl font-bold text-gray-900">
                    {caseStudy.year}
                </p>
            </div>
        </div>
    );
};

// Content Section Component - No Animations
const ContentSection: React.FC<{ label: string; content: string }> = ({ label, content }) => {
    return (
        <div className="mb-16">
            <h3 className="text-xs text-gray-500 uppercase tracking-[0.15em] font-bold mb-6">
                {label}
            </h3>
            <p className="text-lg md:text-2xl font-medium leading-relaxed text-gray-800 max-w-5xl">
                {content}
            </p>
        </div>
    );
};

// Results Section - No Animations
const ResultsSection: React.FC<{ label: string; stats: Stat[] }> = ({ label, stats }) => {
    return (
        <div className="mb-16">
            {/* Title - Always Visible */}
            <h3 className="text-xs text-gray-400 uppercase tracking-[0.2em] font-semibold mb-12">
                {label}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                {stats.map((stat, i) => (
                    <StatCard key={i} stat={stat} />
                ))}
            </div>
        </div>
    );
};

// Stat Card - Uniform Design
const StatCard: React.FC<{ stat: Stat }> = ({ stat }) => {
    return (
        <div>
            {/* Stat Box - All Cards Identical */}
            <div
                className="px-8 py-10 rounded-3xl transition-all duration-500 hover:shadow-lg hover:scale-105"
            >
                {/* Number - Consistent Stylized Typography */}
                <p className="text-5xl font-light text-gray-900 mb-3 font-['Syne'] leading-none tracking-wide">
                    {stat.value}
                </p>

                {/* Label - Elegant Typography */}
                <p className="text-sm text-gray-600 font-light leading-snug">
                    {stat.label}
                </p>
            </div>
        </div>
    );
};

export default WorkDetail;
