import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/info';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Proyectos Destacados</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Una selección de trabajos que demuestran mis habilidades en desarrollo backend, 
            ciencia de datos y DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col"
            >
              {/* Placeholder visual para la miniatura */}
              <div className={`h-48 ${project.color} flex items-center justify-center text-white`}>
                <project.icon size={64} className="opacity-50" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link}
                    className="text-slate-400 hover:text-blue-600 transition-colors"
                    title="Ver Código"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <p className="text-slate-600 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
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