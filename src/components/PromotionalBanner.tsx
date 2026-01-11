import React from 'react';
import { AlertCircle } from 'lucide-react';

const PromotionalBanner: React.FC = () => {
  return (
    <div className="bg-red-600 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <div className="flex items-center space-x-3">
            <AlertCircle size={32} className="text-white animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Per Rinnovo Showroom Aziendale
            </h2>
            <AlertCircle size={32} className="text-white animate-pulse" />
          </div>
          <div className="bg-white text-red-600 px-8 py-4 rounded-lg shadow-2xl transform hover:scale-105 transition-transform">
            <p className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider">
              Sconti dal 30% al 50%
            </p>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
            Sui Prodotti Esposti
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
