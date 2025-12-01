import React from 'react';
import { Mail, Send } from 'lucide-react';
import { personalInfo } from '../data/info';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">¿Te interesa mi trabajo?</h2>
        <p className="text-lg text-slate-600 mb-12">
          Actualmente estoy buscando nuevas oportunidades para aplicar mis conocimientos.
          Si tienes alguna pregunta o propuesta, no dudes en escribirme.
        </p>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
            <form className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                <textarea 
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button 
                  type="button"
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enviar Mensaje
                  <Send size={18} className="ml-2" />
                </button>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;