import React from 'react';
import { MessageCircle, Ruler, Truck, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Ruler,
      title: 'Progettazione Personalizzata',
      description: 'Soluzioni su misura per ogni esigenza e spazio'
    },
    {
      icon: Truck,
      title: 'Consegna e Installazione',
      description: 'Servizio completo in Lombardia, Piemonte, Svizzera, Emilia-Romagna, Veneto e Trentino-Alto Adige'
    },
    {
      icon: CreditCard,
      title: 'Pagamenti Flessibili',
      description: 'Diverse modalità di pagamento disponibili'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">I Nostri Servizi</h2>
          <p className="text-xl text-gray-600">
            Un servizio completo dalla progettazione all'installazione
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <service.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/+393755961916?text=Vorrei maggiori informazioni sui vostri servizi"
            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="mr-2" size={24} />
            Prenota una consulenza su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;