import React from 'react';
import { Maximize2, Shield, Palette, PenTool as Tools } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Benefits = () => {
  const sectionRef = useIntersectionObserver();

  const benefits = [
    {
      icon: Maximize2,
      title: 'Ottimizzazione degli Spazi',
      description: 'Massimizza lo spazio disponibile in appartamenti, uffici e seconde case'
    },
    {
      icon: Shield,
      title: 'Sicurezza Garantita',
      description: 'Meccanismi testati e certificati per un utilizzo sicuro e duraturo'
    },
    {
      icon: Palette,
      title: 'Design Elegante',
      description: 'Soluzioni estetiche che si integrano perfettamente in ogni ambiente'
    },
    {
      icon: Tools,
      title: 'Installazione Professionale',
      description: 'Servizio completo chiavi in mano con personale qualificato'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" ref={sectionRef}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">I Vantaggi dei Nostri Letti</h2>
          <p className="text-xl text-gray-600">
            Scopri perché scegliere un letto a scomparsa Fumagalli
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover-lift">
              <div className="text-blue-600 mb-4 transition-transform duration-300 hover:scale-110">
                <benefit.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;