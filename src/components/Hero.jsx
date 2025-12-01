import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '../data/info';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
            Data Science & Finance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-medium text-slate-400 mb-8">
            {personalInfo.role}
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed border-l-4 border-indigo-500 pl-6">
            {personalInfo.bio}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-900/20"
            >
              Ver Experiencia
              <ArrowRight className="ml-2" size={20} />
            </a>
            
            <div className="flex gap-4">
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-slate-400 bg-slate-800/50 hover:text-white hover:bg-slate-800 transition-all border border-slate-700 hover:border-slate-600"
                title="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-slate-400 bg-slate-800/50 hover:text-white hover:bg-slate-800 transition-all border border-slate-700 hover:border-slate-600"
                title="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-lg text-slate-400 bg-slate-800/50 hover:text-white hover:bg-slate-800 transition-all border border-slate-700 hover:border-slate-600"
                title="Contact Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;