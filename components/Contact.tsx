import React, { useState } from 'react';
import { ArrowUpRight, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            alert("Thanks! We'll be in touch shortly.");
        }, 1500);
    }

  return (
    <section id="contact" className="py-24 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div>
            <span className="inline-block border-b border-black pb-1 mb-8 text-sm font-bold">Book a call</span>
            <h2 className="text-6xl md:text-7xl font-bold font-['Syne'] leading-none mb-8">
                Let's get <br/> started
            </h2>
            <p className="text-xl text-gray-600 max-w-sm mb-12">
                Ready to transform your social media? Get in touch and we'll show you what's possible for your brand.
            </p>
            
            <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#EFEDE8] overflow-hidden">
                            <img src={`https://picsum.photos/100/100?random=${i+10}`} alt="Client" className="w-full h-full object-cover" />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-black text-white border-2 border-[#EFEDE8] flex items-center justify-center text-xs font-bold">+170</div>
                </div>
                <div>
                    <div className="flex text-yellow-500 text-xs mb-1">★★★★★</div>
                    <p className="text-xs font-bold text-gray-500">Grown over 176+ creators</p>
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-transparent">
            <div className="space-y-6">
                <div className="group">
                    <label className="block text-sm font-medium text-gray-500 mb-2">Name *</label>
                    <input required type="text" className="w-full bg-transparent border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors" />
                </div>
                <div className="group">
                    <label className="block text-sm font-medium text-gray-500 mb-2">Email *</label>
                    <input required type="email" className="w-full bg-transparent border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors" />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-500 mb-4">What services are you interested in?</label>
                <div className="flex flex-wrap gap-3">
                    {['Content Creation', 'Social Management', 'Paid Media', 'All'].map(opt => (
                        <label key={opt} className="cursor-pointer">
                            <input type="checkbox" className="peer sr-only" />
                            <span className="inline-block px-4 py-2 rounded-full border border-gray-300 text-sm peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-all">
                                {opt}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-500 mb-4">Current monthly social media budget?</label>
                <div className="flex flex-wrap gap-3">
                    {['Under $2K', '$2K-$5K', '$5K-$10K', '$10K+'].map(opt => (
                        <label key={opt} className="cursor-pointer">
                            <input type="radio" name="budget" className="peer sr-only" />
                            <span className="inline-block px-4 py-2 rounded-full border border-gray-300 text-sm peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-all">
                                {opt}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Tell us about your business... *</label>
                <textarea required rows={3} className="w-full bg-transparent border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors resize-none"></textarea>
            </div>

            <button disabled={submitting} type="submit" className="w-full bg-black text-white py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70">
                {submitting ? <Loader2 className="animate-spin" /> : <>Book a call <ArrowUpRight className="w-5 h-5" /></>}
            </button>
            
            <p className="text-xs text-gray-400 text-center">By submitting, you agree to our terms & conditions.</p>
        </form>

      </div>
    </section>
  );
};

export default Contact;