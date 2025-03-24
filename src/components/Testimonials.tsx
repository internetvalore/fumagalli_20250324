import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Luca M.',
      text: 'Abbiamo trasformato il nostro monolocale! Facile da usare, bellissimo e comodissimo!',
      rating: 5
    },
    {
      name: 'Giulia F.',
      text: 'Servizio eccellente, letto su misura perfetto per il mio spazio ridotto.',
      rating: 5
    },
    {
      name: 'Maria R.',
      text: 'Qualità eccellente e servizio impeccabile.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cosa Dicono i Nostri Clienti</h2>
          <p className="text-xl text-gray-600">
            Cerca "Fumagalli Letti a Scomparsa" su Google per altre recensioni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;