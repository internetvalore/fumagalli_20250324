import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  { url: '/images/gallery/851ec7a0-3746-47f9-8ed3-9595ead37e91.png', title: 'Letto a Scomparsa' },
  { url: '/images/gallery/IMG_1393.PNG', title: 'Letto Matrimoniale a Scomparsa' },
  { url: '/images/gallery/IMG_1394.PNG', title: 'Soluzione Salvaspazio Elegante' },
  { url: '/images/gallery/IMG_1395.PNG', title: 'Design Contemporaneo' },
  { url: '/images/gallery/IMG_1396.PNG', title: 'Sistema Integrato con Libreria' },
  { url: '/images/gallery/IMG_1397.PNG', title: 'Letto a Scomparsa con Armadio' },
  { url: '/images/gallery/IMG_1398.PNG', title: 'Soluzione Completa per Camera' },
  { url: '/images/gallery/IMG_1399.PNG', title: 'Letto a Scomparsa con Finiture di Pregio' },
  { url: '/images/gallery/IMG_1400.PNG', title: 'Sistema Modulare Personalizzato' },
  { url: '/images/gallery/IMG_1401.PNG', title: 'Letto a Scomparsa con Divano' },
  { url: '/images/gallery/IMG_1402.PNG', title: 'Soluzione Moderna per Camera' },
  { url: '/images/gallery/IMG_1403.PNG', title: 'Letto a Scomparsa con Mensole' },
  { url: '/images/gallery/IMG_1404.PNG', title: 'Design Elegante per Spazi Ridotti' },
  { url: '/images/gallery/IMG_1406.PNG', title: 'Letto Matrimoniale a Scomparsa - Aperto' },
  { url: '/images/gallery/IMG_1407.PNG', title: 'Nuova Realizzazione' },
  { url: '/images/gallery/IMG_1410.PNG', title: 'Soluzione Salvaspazio Moderna' },
  { url: '/images/gallery/IMG_1411.PNG', title: 'Letto con Libreria Integrata' },
];

function FullscreenGallery({ startIndex, onClose }: { startIndex: number; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const goTo = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTranslateX(0);
    setTimeout(() => setIsTransitioning(false), 300);
  }, []);

  const next = useCallback(() => {
    if (currentIndex < images.length - 1) goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const prev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
    isDragging.current = true;
    setIsTransitioning(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchCurrentX.current - touchStartX.current;
    if (currentIndex === 0 && diff > 0) {
      setTranslateX(diff * 0.3);
    } else if (currentIndex === images.length - 1 && diff < 0) {
      setTranslateX(diff * 0.3);
    } else {
      setTranslateX(diff);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    const diff = touchCurrentX.current - touchStartX.current;
    const threshold = window.innerWidth * 0.2;

    if (Math.abs(diff) > threshold) {
      if (diff < 0 && currentIndex < images.length - 1) {
        next();
      } else if (diff > 0 && currentIndex > 0) {
        prev();
      } else {
        setIsTransitioning(true);
        setTranslateX(0);
        setTimeout(() => setIsTransitioning(false), 300);
      }
    } else {
      setIsTransitioning(true);
      setTranslateX(0);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev, onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-black/80 backdrop-blur-sm z-10">
        <span className="text-white/70 text-sm">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={onClose}
          className="text-white/80 hover:text-white p-2 -mr-2 transition-colors"
          aria-label="Chiudi"
        >
          <X size={28} />
        </button>
      </div>

      {/* Image area with swipe */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex items-center h-full w-full"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isTransitioning ? 'transform 300ms ease-out' : 'none',
          }}
        >
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].title}
            className="w-full h-full object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Desktop arrows */}
        {currentIndex > 0 && (
          <button
            onClick={prev}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="Precedente"
          >
            <ChevronLeft size={28} />
          </button>
        )}
        {currentIndex < images.length - 1 && (
          <button
            onClick={next}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
            aria-label="Successiva"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* Bottom dots indicator (mobile) */}
      <div className="sm:hidden flex justify-center gap-1 py-3 bg-black/80">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      {/* Desktop: carousel with overlaid text */}
      <div className="hidden sm:block relative max-w-5xl mx-auto">
        <div className="relative aspect-[4/3] w-full">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].title}
            className="w-full h-full object-contain cursor-pointer"
            onClick={() => setFullscreenIndex(currentIndex)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <p className="text-center text-lg font-semibold">{images[currentIndex].title}</p>
          </div>
        </div>

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

        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Mobile: grid of images, no overlaid text, tap to fullscreen */}
      <div className="sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setFullscreenIndex(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen gallery */}
      {fullscreenIndex !== null && (
        <FullscreenGallery
          startIndex={fullscreenIndex}
          onClose={() => setFullscreenIndex(null)}
        />
      )}
    </>
  );
};

export default Gallery;
