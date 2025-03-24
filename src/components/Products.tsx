import React from 'react';
import { MessageCircle, Bed, BookOpen, Sofa } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Products = () => {
  const sectionRef = useIntersectionObserver();

  const products = [
    {
      title: 'Letti Matrimoniali',
      description: 'Verticali, orizzontali, con divano o libreria integrata',
      icon: Bed,
      image: 'https://leprimescelte.com/wp-content/uploads/2025/02/lettoascmatrimoniale.jpeg'
    },
    {
      title: 'Letti Singoli',
      description: 'Perfetti per camerette e spazi ridotti',
      icon: BookOpen,
      image: 'https://leprimescelte.com/wp-content/uploads/2025/02/lettoascsingolo.jpeg'
    },
    {
      title: 'Letti con Divano',
      description: 'La soluzione ideale per living multifunzionali',
      icon: Sofa,
      image: 'https://leprimescelte.com/wp-content/uploads/2025/02/lettoascdivano.jpeg'
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" ref={sectionRef}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">I Nostri Letti a Scomparsa</h2>
          <p className="text-xl text-gray-600">
            Soluzioni personalizzabili per ogni esigenza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <product.icon className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/+393755961916?text=Vorrei richiedere un letto a scomparsa personalizzato"
            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors hover-scale"
          >
            <MessageCircle className="mr-2" size={24} />
            Richiedi il tuo letto personalizzato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;