import React, { useState } from 'react';
import { generateSocialStrategy, StrategyResult } from '../services/geminiService';
import { Sparkles, Loader2, Copy } from 'lucide-react';

const AITool: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [industry, setIndustry] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResult | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand || !industry) return;
    
    setLoading(true);
    const data = await generateSocialStrategy(brand, industry);
    setResult(data);
    setLoading(false);
  };

  return (
    <section id="ai-tools" className="py-24 px-6 bg-black text-[#EFEDE8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-6 text-purple-400">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">RNT AI Studio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-['Syne'] mb-6">
            Generate your <br/> viral strategy
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md">
            Not sure where to start? Use our internal AI tool to generate a quick content strategy snippet for your brand.
          </p>

          <form onSubmit={handleGenerate} className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Brand Name</label>
              <input 
                type="text" 
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g. Urban Coffee"
                className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Industry / Niche</label>
              <input 
                type="text" 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g. Sustainable Fashion"
                className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <button 
              type="submit" 
              disabled={loading || !brand || !industry}
              className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Generate Strategy'}
            </button>
          </form>
        </div>

        <div className="relative">
            {/* Result Card */}
            <div className={`bg-[#1A1A1A] border border-gray-800 rounded-3xl p-8 min-h-[400px] transition-all duration-500 ${result ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4'}`}>
                {result ? (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div>
                            <p className="text-xs text-purple-400 font-bold uppercase tracking-widest mb-2">Headline Bio</p>
                            <h3 className="text-2xl font-bold leading-tight">"{result.headline}"</h3>
                        </div>

                        <div>
                            <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-3">Viral Hooks</p>
                            <ul className="space-y-3">
                                {result.hooks.map((hook, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <span className="bg-blue-500/10 text-blue-400 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</span>
                                        {hook}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-xs text-green-400 font-bold uppercase tracking-widest mb-2">Hashtags</p>
                            <div className="flex flex-wrap gap-2">
                                {result.hashtags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center text-gray-600 space-y-4">
                        <Sparkles className="w-12 h-12 opacity-20" />
                        <p>Enter your brand details to unlock AI insights.</p>
                    </div>
                )}
            </div>

            {/* Decorative BG element */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-900 to-blue-900 opacity-20 blur-3xl -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default AITool;