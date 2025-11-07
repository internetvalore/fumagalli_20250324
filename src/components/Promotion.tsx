import React from 'react';
import { MessageCircle, Package, Ruler, Palette, Euro } from 'lucide-react';

const Promotion = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Promozione</h2>
          <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold mb-4">
            Offerta Speciale
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images Section */}
            <div className="p-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg relative">
                  <img
                    src="https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-16-at-09.49.55.jpeg"
                    alt="Letto a scomparsa in promozione - vista 1"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg text-xl font-bold shadow-xl transform rotate-12">
                    VENDUTO
                  </div>
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg relative">
                  <img
                    src="https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-16-at-09.49.56-3.jpeg"
                    alt="Letto a scomparsa in promozione - vista 2"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg text-xl font-bold shadow-xl transform rotate-12">
                    VENDUTO
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Package className="w-6 h-6 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Unico pezzo fuori misura</h3>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-block mb-6">
                  <strong>Pronta consegna</strong>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Ruler className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-lg"><strong>Chiuso:</strong> prof 27, largh 185, altezza 200 cm</span>
                </div>
                <div className="flex items-center">
                  <Palette className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-lg"><strong>Colore:</strong> bianco</span>
                </div>
                <div className="flex items-center">
                  <Euro className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-2xl font-bold text-green-600">2000 euro + IVA</span>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                <p className="text-yellow-800">
                  <strong>Nota:</strong> Prezzo trasporto e montaggio in base alla destinazione
                </p>
              </div>

              <div className="text-center">
                <a
                  href="https://wa.me/+393755961916?text=Ciao, vorrei richiedere un preventivo per un letto a scomparsa personalizzato"
                  className="inline-flex items-center bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors hover:scale-105 transform duration-300 shadow-lg"
                >
                  <MessageCircle className="mr-2" size={24} />
                  Richiedi il tuo letto personalizzato
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;