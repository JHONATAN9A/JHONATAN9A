import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackgroundSVG from './AnimatedBackground'; 

// --- Datos de Perfil y Proyectos ---
const profile = {
  name: "Jonathan Ferney Calderon Rodriguez",
  title: "GIS Developer | Python Developer | Electrical Engineering",
  email: "calderonjonatan99@gmail.com",
  phone: "3123733895",
  location: "Bogota D.C.",
  linkedin: "www.linkedin.com/in/jf-calderon",
  github: "https://github.com/JHONATAN9A",
  cvLink: "https://flowcv.com/resume/dumb5lu8f4as", 
  about:
    "Desarrollador Full Stack con tres años de experiencia en la creación e implementación de soluciones robustas, con un fuerte dominio y experiencia en sistemas de información geográfica (GIS). Experto en Django, Node.js, PostGIS y Google Cloud Platform (GCP). Mi enfoque se centra en el desarrollo de aplicaciones web escalables y eficientes, con una sólida capacidad para manejar, visualizar y analizar datos espaciales, aportando soluciones innovadoras en este ámbito. Con pasión por la innovación y la mejora continua, estoy explorando activamente la integración de agentes de IA basados en LLMs para potenciar futuras soluciones. Mi perfil combina la responsabilidad y la creatividad para entregar resultados de alto impacto."
};

const skills = [
  { name: "Python", description: "Backend y automatización." },
  { name: "Django", description: "Framework web robusto." },
  { name: "API Rest", description: "APIs RESTful eficientes." },
  { name: "FastAPI", description: "APIs modernas y rápidas." },
  { name: "Flask", description: "Microservicios web." },
  { name: "JavaScript", description: "Frontend dinámico." },
  { name: "Leaflet", description: "Mapas interactivos." },
  { name: "HTML", description: "Estructura web." },
  { name: "CSS", description: "Diseño de interfaz." },
  { name: "GCP", description: "Servicios cloud escalables." },
  { name: "Angular", description: "SPA frameworks." },
  { name: "SQL", description: "Consultas eficientes." },
  { name: "PostgreSQL", description: "Base de datos avanzada." },
  { name: "PostGIS", description: "Geodatos en PostgreSQL." },
  { name: "Geoserver", description: "Servidor de mapas." },
  { name: "C++", description: "Rendimiento avanzado." },
  { name: "Git", description: "Control de versiones." },
  { name: "LangChain", description: "Framework de LLMs." },
  { name: "CI/CD", description: "Automatización DevOps." },
  { name: "TCP/IP", description: "Redes y protocolos." },
  { name: "Pandas", description: "Análisis de datos." },
  { name: "GeoPandas", description: "Datos geoespaciales." },
  { name: "ArcGIS", description: "Software SIG comercial." },
  { name: "QGIS", description: "SIG de código abierto." },
  { name: "Jira", description: "Gestión de proyectos." }
];

const experience = [
  {
    type: "work",
    title: "Desarrollador Web Full-Stack",
    company: "Veredata",
    period: "02/2023 - 11/2024",
    location: "Bogota D.C, Colombia",
    description: [
      "Lideré interfaces geográficas con Django y Leaflet.",
      "Rediseñé UX/UI y APIs REST usando Django, GCP y PostGIS.",
      "Automatización con Pandas, GeoPandas y App Engine.",
      "Implementación de CI/CD en GCP App Engine."
    ]
  },
  {
    type: "work",
    title: "Desarrollador Web Front-End",
    company: "Geoproyecciones",
    period: "06/2022 - 08/2023",
    location: "Bogota D.C, Colombia",
    description: [
      "Desarrollé geovisores catastrales con Node.js y Leaflet.",
      "Integración de endpoints REST con datos registrales.",
      "Despliegue con GitLab y VMs en GCP."
    ]
  },
  {
    type: "education",
    title: "Ingeniería Electrónica",
    institution: "Universidad de Cundinamarca",
    period: "02/2021 - 04/2026",
    location: "Colombia",
    description: []
  },
  {
    type: "education",
    title: "Tecnología en Cartografía",
    institution: "Universidad de Cundinamarca",
    period: "02/2017 - 09/2020",
    location: "Colombia",
    description: []
  }
];

// Datos de los proyectos (¡Personaliza estos con tus propios proyectos!)
const projectsData = [
  {
    title: "Plataforma GIS con Django Geo y Leaflet",
    description: "Desarrollo de una plataforma web para visualización y gestión de datos geoespaciales interactivos. Integración de mapas dinámicos y herramientas de análisis GIS.",
    technologies: ["Django", "GeoDjango", "Leaflet", "PostGIS", "Python"],
    icon: "🗺️", 
    // link: "https://github.com/JHONATAN9A/proyecto-gis-ejemplo" // Descomenta y agrega si es público
  },
  {
    title: "API RESTful con Django REST Framework",
    description: "Diseño e implementación de una API REST robusta para servicios de datos. Autenticación, serialización y filtrado avanzados para aplicaciones web y móviles.",
    technologies: ["Django REST Framework", "Python", "PostgreSQL", "API REST"],
    icon: "🔌",
  },
  {
    title: "Análisis Geoespacial con Pandas y GeoPandas",
    description: "Procesamiento y limpieza de grandes volúmenes de datos geoespaciales. Automatización de flujos de trabajo para análisis y visualización de información geográfica.",
    technologies: ["Python", "Pandas", "GeoPandas", "Jupyter Notebook"],
    icon: "📊",
    // link: "https://github.com/JHONATAN9A/analisis-geopandas" 
  },
  {
    title: "Dashboard de Sensores IoT con ESP32",
    description: "Desarrollo de un sistema para la recolección y visualización en tiempo real de datos de sensores. Integración con ESP32 para monitoreo y control de dispositivos IoT.",
    technologies: ["ESP32", "Python", "MQTT", "Node.js", "IoT"],
    icon: "💡",
  },
  {
    title: "Asistente Conversacional con LangChain y RAG",
    description: "Implementación de un chatbot inteligente utilizando modelos de lenguaje grandes (LLMs) y la arquitectura RAG para respuestas contextuales y precisas.",
    technologies: ["LangChain", "Python", "LLMs", "RAG", "FastAPI"],
    icon: "🤖",
  },
  {
    title: "Sistema de Control de Circuitos (PID)",
    description: "Diseño y simulación de controladores PID para optimización de sistemas electrónicos. Análisis de estabilidad y respuesta de sistemas mediante técnicas de control.",
    technologies: ["C++", "MATLAB/Simulink", "Control Systems", "PID"],
    icon: "⚙️",
  },
];

// --- Componente Principal de la Aplicación ---
function App() {
  return (
    <div className="relative min-h-screen font-mono text-gray-800 bg-transparent">
      <AnimatedBackgroundSVG />
      <main className="relative p-6 z-10">
        <Header profile={profile} />
        <Section title="Perfil" content={<p>{profile.about}</p>} />
        <Section title="Habilidades" content={<SkillsGrid skills={skills} />} />
        <Section title="Proyectos Destacados" content={<ProjectsGrid projects={projectsData} />} />
        <Section title="Experiencia y Educación" content={<ExperienceTimeline experience={experience} />} />
        <footer className="text-center text-gray-500 text-sm mt-12">
          &copy; {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </footer>
      </main>
    </div>
  );
}

// --- Componentes Reutilizables ---

const Header = ({ profile }) => (
  <header className="text-center mb-12">
    <h1 className="text-4xl font-bold text-gray-900 mb-2">{profile.name}</h1>
    <p className="text-xl text-gray-600 mb-4">{profile.title}</p>
    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
      <a href={`mailto:${profile.email}`} className="hover:text-gray-900">{profile.email}</a>
      <span>|</span>
      <span>{profile.phone}</span>
      <span>|</span>
      <span>{profile.location}</span>
      <span>|</span>
      <a href={profile.linkedin} className="hover:text-gray-900" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <span>|</span>
      <a href={profile.github} className="hover:text-gray-900" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
    <div className="mt-6">
      <motion.a
        href={profile.cvLink} 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Descargar CV
      </motion.a>
    </div>
  </header>
);

const Section = ({ title, content }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow mb-10"
  >
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
    <div className="text-gray-700 leading-relaxed text-base">{content}</div>
  </motion.section>
);

const SkillsGrid = ({ skills }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {skills.map((skill, i) => (
      <SkillCard key={i} skill={skill} />
    ))}
  </div>
);

const SkillCard = ({ skill }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-100 p-3 rounded-lg text-center hover:bg-blue-100 transition cursor-pointer relative"
    >
      <span className="font-medium text-gray-800">{skill.name}</span>
      {hovered && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white text-xs rounded px-2 py-1 shadow whitespace-nowrap">
          {skill.description}
        </div>
      )}
    </motion.div>
  );
};


const ProjectsGrid = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, i) => (
      <ProjectCard key={i} project={project} />
    ))}
  </div>
);


const ProjectCard = ({ project }) => {

  return (
    <motion.div
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center relative overflow-hidden"
    >
      <div 
        className="text-6xl mb-4 opacity-60" 
        style={{ filter: 'hue-rotate(180deg) saturate(150%)' }}
      >
        {project.icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-700 text-sm mb-4 flex-grow">{project.description}</p>

      <div className="flex flex-wrap justify-center gap-2 mt-auto">
        {project.technologies.map((tech, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-gray-800 text-white text-sm py-2 px-4 rounded-full hover:bg-gray-900 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Ver Proyecto
        </motion.a>
      )}
       {!project.link && (
        <p className="mt-4 text-sm text-gray-500">
          Contacto para más información
        </p>
      )}
    </motion.div>
  );
};

const ExperienceTimeline = ({ experience }) => (
  <div className="relative pl-4 border-l-2 border-gray-200">
    {experience.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative mb-8"
      >
        <div className="absolute -left-3 top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
        <div className="ml-4 bg-gray-100 p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">
            {item.type === "work" ? item.company : item.institution} | {item.period}
          </p>
          <p className="text-xs text-gray-500 mt-1">{item.location}</p>
          {item.description.length > 0 && (
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 space-y-1">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    ))}
  </div>
);

export default App;