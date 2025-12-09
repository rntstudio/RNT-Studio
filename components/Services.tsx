import React from 'react';
import { Camera, Smartphone, Megaphone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Content Creation",
      description: "Short-form video, UGC, reels, and visuals designed to stop the scroll and spark engagement.",
      bg: "bg-[#F5F5F0]"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Social Management",
      description: "We handle your content calendar, posting, and day-to-day management of your socials.",
      bg: "bg-[#FDFCF8]"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Paid Media",
      description: "We build and manage targeted ad campaigns that turn attention into results and help you scale.",
      bg: "bg-[#FFFBF5]"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white rounded-t-[3rem] -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 border border-gray-200 rounded-full text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
            Services
          </span>
          <h2 className="text-5xl md:text-6xl font-bold font-['Syne']">
            How we can <br />
            help you <span className="italic font-serif">grooow</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-[2rem] ${service.bg} border border-transparent hover:border-black/5 hover:shadow-lg transition-all duration-300`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-black">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;