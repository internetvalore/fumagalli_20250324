import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Dove Siamo</h2>
          <p className="text-xl text-gray-600">
            Vieni a trovarci nel nostro showroom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Informazioni di Contatto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">Indirizzo</h4>
                  <p className="text-gray-600">Via Carducci 59, Lissone (MB)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-gray-600">+39 375 5961916</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">Orari</h4>
                  <p className="text-gray-600">Su appuntamento</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/+393755961916?text=Vorrei fissare un appuntamento"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="mr-2" size={20} />
                Prenota un appuntamento
              </a>
            </div>
          </div>

          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Mappa showroom"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.8105883563584!2d9.2358333!3d45.6166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786baf0f24b6c63%3A0x3cff5f3f35417ef7!2sVia%20Giosu%C3%A8%20Carducci%2C%2059%2C%2020851%20Lissone%20MB!5e0!3m2!1sen!2sit!4v1625764283123!5m2!1sen!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;