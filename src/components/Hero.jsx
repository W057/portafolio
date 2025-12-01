import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/info';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
          Hola, mi nombre es
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          {personalInfo.name}.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 tracking-tight">
          {personalInfo.role}.
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
          {personalInfo.bio}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors md:text-lg group"
          >
            Ver Proyectos
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a 
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors md:text-lg"
          >
            <Github className="mr-2" size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;