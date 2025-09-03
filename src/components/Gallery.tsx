import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-16-at-09.49.55.jpeg',
      title: 'Letto Matrimoniale a Scomparsa - Chiuso'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-16-at-09.49.56-3.jpeg',
      title: 'Letto Matrimoniale a Scomparsa - Aperto'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/Fum001.jpeg',
      title: 'Letto a Scomparsa con Design Moderno'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/Fum002.jpeg',
      title: 'Soluzione Salvaspazio Elegante'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/Fum003.jpeg',
      title: 'Letto Matrimoniale a Scomparsa'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/Fum004.jpeg',
      title: 'Sistema Integrato con Libreria'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/Fum005.jpeg',
      title: 'Letto a Scomparsa con Finiture di Pregio'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/Fum006.jpeg',
      title: 'Soluzione Completa per Camera'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/Fum007.jpeg',
      title: 'Design Contemporaneo'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/Fum008.jpeg',
      title: 'Letto a Scomparsa con Armadio Integrato'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/Fum009.jpeg',
      title: 'Sistema Modulare Personalizzato'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/Fum010.jpeg',
      title: 'Letto a Scomparsa di Design'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-16-at-09.49.56.jpeg',
      title: 'Soluzione Salvaspazio'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-16-at-09.49.56-1.jpeg',
      title: 'Design Moderno'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-16-at-09.49.56-2.jpeg',
      title: 'Letto a Scomparsa Personalizzato'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-24-at-18.22.19-1.jpeg',
      title: 'Letto a Scomparsa con Divano'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.24.jpeg',
      title: 'Soluzione Moderna per Camera'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.24-1.jpeg',
      title: 'Letto a Scomparsa con Armadio'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.24-2.jpeg',
      title: 'Design Elegante per Spazi Ridotti'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.25.jpeg',
      title: 'Soluzione Completa con Scrivania'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.25-1.jpeg',
      title: 'Letto a Scomparsa con Mensole'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.25-2.jpeg',
      title: 'Sistema Modulare Personalizzabile'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.25-3.jpeg',
      title: 'Letto a Scomparsa per Studio'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.25-4.jpeg',
      title: 'Soluzione Salvaspazio Moderna'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.25-5.jpeg',
      title: 'Letto a Scomparsa con Libreria'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-08-at-13.56.20.jpeg',
      title: 'Nuova Realizzazione Letto a Scomparsa'
    },
    {
      url: 'https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-16-at-09.49.55-1.jpeg',
      title: 'Letto con Libreria Integrata'
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-5xl mx-auto mt-20">
      {/* Main Image Container */}
      <div className="relative aspect-[4/3] w-full">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <p className="text-center text-lg font-semibold">{images[currentIndex].title}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={previousImage}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Gallery;