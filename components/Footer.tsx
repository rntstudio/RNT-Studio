import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <span className="font-bold text-xl tracking-tight font-['Syne']">RNT Studio</span>
        </div>

        <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>

        <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all"><Linkedin className="w-5 h-5" /></a>
        </div>

      </div>
      <div className="text-center mt-12 text-gray-600 text-xs">
        © 2025 RNT Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;