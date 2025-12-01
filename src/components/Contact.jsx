import React from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/info';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Hablemos</h2>
            <p className="text-lg text-slate-400 mb-12">
              Estoy siempre abierto a discutir nuevos proyectos, oportunidades de colaboración o simplemente charlar sobre tecnología y finanzas.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center text-slate-300 hover:text-white transition-colors p-4 rounded-xl hover:bg-slate-900">
                <Mail className="mr-4 text-indigo-500" size={24} />
                <span>{personalInfo.email}</span>
              </a>
              <div className="flex items-center text-slate-300 p-4">
                <Phone className="mr-4 text-indigo-500" size={24} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center text-slate-300 p-4">
                <MapPin className="mr-4 text-indigo-500" size={24} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Nombre</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 bg-slate-950 rounded-lg border border-slate-800 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 bg-slate-950 rounded-lg border border-slate-800 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Mensaje</label>
                <textarea 
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-950 rounded-lg border border-slate-800 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none placeholder-slate-600"
                  placeholder="¿En qué puedo ayudarte?"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-900/20"
              >
                Enviar Mensaje
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;