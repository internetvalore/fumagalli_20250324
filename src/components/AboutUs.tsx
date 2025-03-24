import React from 'react';
import { Award, MapPin, PenTool as Tool, MessageCircle, User } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AboutUs = () => {
  const sectionRef = useIntersectionObserver();
  const giovanniRef = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giovanni Section - Moved to top */}
        <div 
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8 mb-20 text-white animate-on-scroll transform hover:scale-[1.02] transition-transform duration-300" 
          ref={giovanniRef}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="bg-white/10 rounded-full p-6 backdrop-blur-sm">
                <User className="w-16 h-16 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">Il Nostro Punto di Forza: Giovanni</h3>
                <p className="text-xl text-blue-100">L'esperto che trasforma i tuoi spazi</p>
              </div>
            </div>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              Giovanni è il nostro esperto che si prende cura di te dall'analisi delle esigenze fino all'installazione. 
              Con la sua esperienza, valuta soluzioni di misure diverse e, grazie a un accurato sopralluogo, 
              ti garantisce la soluzione ideale. Solo visitando il nostro showroom a Lissone potrai scoprire 
              di persona la differenza che fa un servizio realmente su misura.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/+393755961916?text=Ciao Giovanni, vorrei informazioni sui vostri letti a scomparsa"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors hover:scale-105 transform duration-300 shadow-lg"
              >
                <MessageCircle className="mr-2" size={24} />
                Contatta Giovanni su WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 animate-on-scroll" ref={sectionRef}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">La Nostra Storia</h2>
          <p className="text-xl text-gray-600">
            Da oltre 65 anni, specialisti nei letti a scomparsa di alta qualità
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Award,
              title: 'Esperienza',
              description: 'Oltre 65 anni di specializzazione nella progettazione e realizzazione di letti a scomparsa',
              icon: Award,
            },
            {
              icon: MapPin,
              title: 'Posizione Strategica',
              description: 'Showroom situato a Lissone (MB), facilmente raggiungibile da Milano e hinterland',
              icon: MapPin,
            },
            {
              icon: Tool,
              title: 'Soluzioni Su Misura',
              description: 'Progettiamo e realizziamo soluzioni personalizzate per ottimizzare ogni spazio',
              icon: Tool,
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="text-center hover-lift"
            >
              <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg hover-scale">
                <item.icon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;