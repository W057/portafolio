import { Database, Brain, BarChart3, Utensils, Globe, Code2, Cpu, Camera, Plane } from 'lucide-react';

export const personalInfo = {
  name: "Wilfredo Salazar Villarreal",
  alias: "Welink",
  role: "Data Scientist & Financial Strategist",
  bio: "Combino la potencia de la Ciencia de Datos con la estrategia financiera. Especializado en automatización inteligente (RAG/NLP), ingeniería de datos y optimización operativa. Actualmente transformando procesos en el sector salud y retail.",
  email: "wsalazar.villarreal@gmail.com",
  phone: "+52 (646) 210-9103",
  github: "https://github.com/W057",
  linkedin: "https://linkedin.com/in/wilfredo-salazar-697a502a1",
  location: "CDMX, México"
};

export const projects = [
  {
    id: 1,
    title: "IMSS Intelligent Automation",
    role: "Data Analyst & Software Developer",
    description: "Desarrollo de sistema RAG (Retrieval-Augmented Generation) propietario para automatizar el análisis y respuesta de correspondencia crítica. Implementación de OCR para registro estructurado de datos, reduciendo drásticamente los tiempos de triaje manual.",
    tags: ["Python", "NLP/RAG", "OCR", "Socio-demographic Analysis"],
    link: "#", 
    icon: Brain,
    color: "bg-indigo-600"
  },
  {
    id: 2,
    title: "ITAM AI Study Companion",
    role: "AI Developer",
    description: "Herramienta de estudio especializada para cursos del ITAM. Utiliza una base de conocimiento de años de notas históricas para crear un asistente sensible al contexto y a la metodología específica de la institución.",
    tags: ["RAG", "Vector DBs", "LLMs", "Education Tech"],
    link: "https://github.com/welink/EGN_Bot",
    icon: Database,
    color: "bg-blue-600"
  },
  {
    id: 3,
    title: "Prima Sales Operations",
    role: "Sales Ops Intern",
    description: "Impulso de estrategia de ventas mediante análisis de rendimiento y previsión de ingresos (SQL + Python). Desarrollo de reportes ejecutivos semanales para seguimiento de KPIs operativos y eficiencia del pipeline.",
    tags: ["SQL", "Python", "Business Intelligence", "Revenue Forecasting"],
    link: "#",
    icon: BarChart3,
    color: "bg-emerald-600"
  },
  {
    id: 4,
    title: "Family Business Digital Transformation",
    role: "Full-Stack & Strategist",
    description: "Modernización digital de retail familiar (Textiles & Joyería) con 25 años de trayectoria. Desarrollo de plataforma e-commerce personalizada para diversificar ingresos y optimizar márgenes operativos.",
    tags: ["E-commerce", "Web Dev", "Digital Strategy"],
    link: "#",
    icon: Globe,
    color: "bg-purple-600"
  },
  {
    id: 5,
    title: "Koi Roll - Food Truck",
    role: "Founder & Operator",
    description: "Fundación y operación completa de empresa gastronómica. Gestión de equipo de 6 personas, control de Unit Economics, COGS y estrategias de precios para lograr crecimiento sostenido de ingresos.",
    tags: ["Entrepreneurship", "P&L Mgmt", "Unit Economics"],
    link: "#",
    icon: Utensils,
    color: "bg-orange-500"
  }
];

export const hobbies = [
  {
    id: 1,
    title: "Finanzas & Mercados",
    description: "Análisis de mercados bursátiles y modelos de valoración.",
    icon: BarChart3
  },
  {
    id: 2,
    title: "Fotografía Urbana",
    description: "Capturando la arquitectura y vida de la CDMX.",
    icon: Camera
  },
  {
    id: 3,
    title: "Viajes",
    description: "Explorando nuevas culturas y gastronomías locales.",
    icon: Plane
  }
];

export const skills = [
  "Python (Pandas, NumPy)", "SQL (Advanced)", "RAG Systems", 
  "Financial Modeling", "Docker", "FastAPI", "React", "Git"
];