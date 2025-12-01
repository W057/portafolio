import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/info';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experiencia y <span className="text-indigo-400">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl">
            Una selección de mi trabajo en automatización inteligente, análisis financiero y desarrollo de software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-2xl hover:shadow-indigo-900/10"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl ${project.color} bg-opacity-10 text-indigo-400`}>
                    <project.icon size={32} className={project.color.replace('bg-', 'text-')} />
                  </div>
                  {project.link !== "#" && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-sm font-medium text-slate-500 mb-4 block">
                  {project.role}
                </span>
                
                <p className="text-slate-400 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;