import React from 'react';
import { personalInfo } from '../data/info';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-2">
          Diseñado y desarrollado por {personalInfo.name}
        </p>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} - Construido con React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;