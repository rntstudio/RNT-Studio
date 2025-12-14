import React, { useState } from 'react';
import { generateSocialStrategy, StrategyResult } from '../services/geminiService';
import { Sparkles, Loader2, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AITool: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResult | null>(null);
  const { t } = useTranslation();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand || !industry) return;

    setLoading(true);
    setResult(null); // Clear previous result to show loader
    try {
      const data = await generateSocialStrategy(brand, industry);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tools" className="py-24 px-6 bg-black text-[#EFEDE8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-6 text-purple-400">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">{t('ai_tool.label', 'RNT AI Studio')}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-['Syne'] mb-6">
            {t('ai_tool.title', 'Genera tu estrategia viral a pelo')}
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            {t('ai_tool.description', '¿No sabes por dónde empezar? Usa nuestra herramienta interna de IA para generar un fragmento de estrategia de contenido rápido para tu marca.')}
          </p>

          <form onSubmit={handleGenerate} className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">{t('ai_tool.label_brand', 'Nombre de la Marca')}</label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder={t('ai_tool.placeholder_brand', 'ej. Café Urbano')}
                className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">{t('ai_tool.label_industry', 'Industria / Nicho')}</label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder={t('ai_tool.placeholder_industry', 'ej. Moda Sostenible')}
                className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !brand || !industry}
              className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t('ai_tool.button_generating', 'Generando...')}</span>
                </>
              ) : t('ai_tool.button_generate', 'Generar Estrategia')}
            </button>
          </form>
        </div>

        <div className="relative">
          {/* Result Card */}
          <div className={`bg-[#1A1A1A] border border-gray-800 rounded-3xl p-8 min-h-[400px] transition-all duration-500 relative overflow-hidden flex flex-col`}>
            {/* Background Grid Pattern for texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f4f4f 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            {loading ? (
              <div className="flex-1 flex flex-col items-center justify-center relative z-10 animate-in fade-in duration-300">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center animate-pulse">
                    <Sparkles className="w-10 h-10 text-purple-400 animate-spin-slow" style={{ animationDuration: '3s' }} />
                  </div>
                  <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                </div>

                <div className="space-y-4 w-full max-w-xs text-center">
                  <div className="h-4 bg-gray-800 rounded w-3/4 mx-auto animate-pulse"></div>
                  <div className="h-3 bg-gray-800 rounded w-1/2 mx-auto animate-pulse"></div>

                  <div className="flex gap-2 justify-center mt-6">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <p className="text-gray-500 text-xs font-medium tracking-widest pt-4 uppercase animate-pulse">{t('ai_tool.loading_text', 'Conectando con Gemini AI...')}</p>
                </div>
              </div>
            ) : result ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
                <div>
                  <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-2">{t('ai_tool.result_bio', 'Bio del Perfil')}</p>
                  <h3 className="text-2xl font-bold leading-tight">"{result.headline}"</h3>
                </div>

                <div>
                  <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-3">{t('ai_tool.result_hooks', 'Ganchos Virales')}</p>
                  <ul className="space-y-3">
                    {result.hooks.map((hook, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="bg-blue-500/10 text-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                        {hook}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs text-green-400 font-bold uppercase tracking-widest mb-2">{t('ai_tool.result_hashtags', 'Hashtags')}</p>
                  <div className="flex flex-wrap gap-2">
                    {result.hashtags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-600 space-y-4 relative z-10">
                <Sparkles className="w-12 h-12 opacity-20" />
                <p>{t('ai_tool.empty_state', 'Ingresa los detalles de tu marca para desbloquear insights de IA.')}</p>
              </div>
            )}
          </div>

          {/* Decorative BG element */}
          <div className={`absolute -inset-4 bg-gradient-to-r from-purple-900 to-blue-900 blur-3xl -z-10 rounded-full transition-opacity duration-1000 ${loading ? 'opacity-40 animate-pulse' : 'opacity-20'}`}></div>
        </div>
      </div>
    </section>
  );
};

export default AITool;