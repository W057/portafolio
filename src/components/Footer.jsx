import React from 'react';
import { personalInfo } from '../data/info';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} <span className="text-slate-300">{personalInfo.name}</span>
        </p>
        <div className="flex space-x-6 text-sm">
          <p>Construido con React & Tailwind (Dark Mode)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;