import { Database, Server, BarChart3 } from 'lucide-react';

export const projects = [
  {
    id: 1,
    title: "EGN Bot (AI Study Assistant)",
    description: "Sistema inteligente RAG que permite a estudiantes 'chatear' con sus documentos PDF mediante Inteligencia Artificial.",
    tags: ["Python", "FastAPI", "Docker", "AI/RAG"],
    link: "#", // Puedes poner el link real a tu repo luego
    icon: Database,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "Colección de análisis estadísticos y limpieza de datos utilizando las librerías más potentes del ecosistema científico.",
    tags: ["Python", "NumPy", "Pandas", "Jupyter"],
    link: "#",
    icon: BarChart3,
    color: "bg-emerald-500"
  },
  {
    id: 3,
    title: "DevOps & Infrastructure",
    description: "Automatización de despliegues y contenerización de aplicaciones para entornos de producción escalables.",
    tags: ["Docker", "CI/CD", "Bash", "Linux"],
    link: "#",
    icon: Server,
    color: "bg-slate-600"
  }
];

export const personalInfo = {
  name: "WeLink", // Tu nombre de usuario o real
  role: "Desarrollador de Software & Estudiante",
  bio: "Apasionado por construir soluciones eficientes. Me enfoco en el desarrollo backend, inteligencia artificial y la automatización de infraestructuras.",
  email: "contacto@ejemplo.com",
  github: "https://github.com/welink"
};