import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
            <div>
                <span className="inline-block py-1 px-4 border border-gray-300 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-600 mb-4">
                    Case Studies
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-['Syne']">Selected Work</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-semibold border-b border-black pb-1 hover:opacity-70 transition-opacity">
                View all projects <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>

        {/* Main Case Study */}
        <div className="bg-white rounded-[3rem] p-4 md:p-6 shadow-sm overflow-hidden group">
            <div className="relative h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden mb-8">
                <img 
                    src="https://picsum.photos/1600/900?random=2" 
                    alt="Border Headphones Case Study" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-12">
                    <div className="flex justify-between items-start w-full">
                        <div>
                            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs mb-4 inline-block">Featured Project</span>
                            <h3 className="text-5xl md:text-7xl font-bold text-white mb-4">Border</h3>
                            <p className="text-white/80 max-w-lg text-lg">
                                A premium audio brand crafting high-quality headphones for music enthusiasts and creative professionals.
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
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Category</p>
                    <p className="text-lg font-semibold">Technology</p>
                </div>
                <div className="space-y-2">
                     <p className="text-xs text-gray-400 uppercase tracking-widest">Platforms</p>
                     <div className="flex gap-4">
                        <span className="font-semibold">Instagram</span>
                        <span className="font-semibold">TikTok</span>
                        <span className="font-semibold">YouTube</span>
                     </div>
                </div>
                <div className="space-y-2">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Year</p>
                    <p className="text-lg font-semibold">2025</p>
                </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-100 px-4 pb-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-sm font-semibold text-gray-400">The Challenge</div>
                <div className="md:col-span-3">
                    <p className="text-xl md:text-2xl font-medium leading-tight">
                        Border wanted to position themselves as the premium choice for audio enthusiasts while breaking into the competitive headphone market dominated by larger brands.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Work;