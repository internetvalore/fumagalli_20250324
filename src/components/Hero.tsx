import React from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1920"
        >
          <source
            src="https://videos.ctfassets.net/your-video-url/wall-bed-demo.mp4"
            type="video/mp4"
          />
          {/* Fallback image */}
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1920"
            alt="Letto a scomparsa"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <a
          href="https://wa.me/393755961916"
          className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors mb-8"
        >
          <MessageCircle className="mr-2" size={24} />
          Contattaci su WhatsApp per informazioni
        </a>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Ottimizza il tuo spazio con i nostri letti a scomparsa su misura!
        </h1>
        <p className="text-xl sm:text-2xl mb-8">
          Soluzioni salvaspazio eleganti e funzionali, disponibili in showroom a Milano e Lissone.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce"
        >
          <ChevronDown size={32} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Hero;