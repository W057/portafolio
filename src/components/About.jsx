import React from 'react';
import { hobbies, skills } from '../data/info';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Hobbies Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Más allá del <span className="text-indigo-400">Código</span>
            </h2>
            <div className="space-y-8">
              {hobbies.map((hobby) => (
                <div key={hobby.id} className="flex items-start">
                  <div className="flex-shrink-0 p-4 bg-slate-800 rounded-xl text-indigo-400 border border-slate-700">
                    <hobby.icon size={24} />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{hobby.title}</h3>
                    <p className="text-slate-400">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Cloud Section */}
          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8">Tech Stack & Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg border border-slate-800 hover:border-indigo-500/50 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-900">
              <p className="text-slate-500 italic">
                "Siempre buscando el equilibrio entre la eficiencia técnica y el impacto estratégico en el negocio."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;