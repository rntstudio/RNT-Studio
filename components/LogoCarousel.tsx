import React from 'react';

const LogoCarousel: React.FC = () => {
  // Placeholder logos for demo purposes (using text/svg representation for simplicity)
  const brands = [
    "Vogue", "Forbes", "Nike", "Adidas", "Sony", "Canon", "Spotify", "Netflix"
  ];

  return (
    <div className="py-12 border-y border-black/5 overflow-hidden bg-[#EFEDE8]">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Marcas que confían en nosotros</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-32 px-16 items-center">
          {/* Double the list for infinite scroll effect */}
          {[...brands, ...brands].map((brand, index) => (
            <span 
              key={index} 
              className="text-3xl md:text-4xl font-['Syne'] font-bold text-black/10 hover:text-black/30 transition-colors cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;