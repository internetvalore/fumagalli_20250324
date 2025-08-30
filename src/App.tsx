import React from 'react';
import { Phone, MapPin, Clock, ChevronDown, Menu, X, MessageCircle } from 'lucide-react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Contact from './components/Contact';
import FAQ from './components/FAQ';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gray-800">Fumagalli Letti a Scomparsa</span>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900">Chi Siamo</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-gray-900">Galleria</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-gray-900">Prodotti</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900">Contatti</button>
              <a
                href="https://wa.me/+393755961916"
                className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 w-full text-left"
              >
                Chi Siamo
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 w-full text-left"
              >
                Galleria
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 w-full text-left"
              >
                Prodotti
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 w-full text-left"
              >
                Contatti
              </button>
              <a
                href="https://wa.me/+393755961916"
                className="block px-3 py-2 bg-green-500 text-white rounded-md text-center mt-4"
              >
                Contattaci su WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <div id="gallery" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">La Nostra Galleria</h2>
              <p className="text-xl text-gray-600">
                Scopri le nostre realizzazioni
              </p>
            </div>
            <Gallery />
          </div>
        </div>
        <AboutUs />
        <Products />
        <Benefits />
        <Testimonials />
        <Services />
        <Contact />
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Fumagalli Letti a Scomparsa</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Via Carducci 59, Lissone (MB)
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" size={20} />
                  +39 375 5961916
                </p>
                <p className="flex items-center">
                  <Clock className="mr-2" size={20} />
                  Su appuntamento
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Zone Servite</h3>
              <ul className="space-y-2">
                <li>Lombardia</li>
                <li>Piemonte</li>
                <li>Svizzera</li>
                <li>Emilia-Romagna</li>
                <li>Veneto</li>
                <li>Trentino-Alto Adige</li>
                <li>Liguria</li>
                <li>Francia - Costa Azzurra</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contattaci</h3>
              <a
                href="https://wa.me/+393755961916"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="mr-2" size={20} />
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="mb-2">&copy; {new Date().getFullYear()} Fumagalli Letti a Scomparsa. Tutti i diritti riservati.</p>
            <p className="text-gray-400 text-sm">leprimescelte.com è un portale di Internet Valore s.r.l. PI 06767350967</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;