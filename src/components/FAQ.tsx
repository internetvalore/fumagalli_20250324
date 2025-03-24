import React from 'react';
import { MessageCircle, Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'In quanto tempo viene consegnato il letto?',
      answer: 'La consegna indicativa è prevista entro un massimo di 60 giorni, ma a seconda della disponibilità potrebbe essere molto più rapida. Ti invitiamo a visitare il nostro showroom a Lissone per ricevere informazioni più dettagliate sui tempi di consegna specifici per il modello che ti interessa.'
    },
    {
      question: 'I letti possono essere personalizzati?',
      answer: 'Sì, è possibile personalizzare completamente il letto scegliendo finiture, colori e materiali secondo le tue preferenze.'
    },
    {
      question: 'Posso pagare a rate?',
      answer: 'Offriamo diverse soluzioni di pagamento. Contattaci su WhatsApp per discutere le opzioni disponibili.'
    },
    {
      question: 'Effettuate l\'installazione a domicilio?',
      answer: 'Sì, effettuiamo l\'installazione professionale in Lombardia, Piemonte, Svizzera, Emilia-Romagna, Veneto e Trentino-Alto Adige.'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Domande Frequenti</h2>
          <p className="text-xl text-gray-600">
            Trova le risposte alle domande più comuni
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Non hai trovato la risposta che cercavi?</p>
          <a
            href="https://wa.me/+393755961916?text=Ho una domanda sui vostri letti a scomparsa"
            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="mr-2" size={24} />
            Fai una domanda su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;