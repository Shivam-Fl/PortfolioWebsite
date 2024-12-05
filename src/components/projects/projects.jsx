import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "eKabaadi",
    description: "A business solution to revolutionize waste management",
    img: "assets/eKabaadi.png",
    link: "https://github.com/Shivam-Fl/eKabaadi",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "EWT: E-waste Terminal",
    description: "Helps user to locate nearest e-waste facility",
    img: "assets/ewt.png",
    link: "https://github.com/Shivam-Fl/EWT",
    technologies: ["React Native", "Geolocation API", "Firebase"]
  },
  {
    title: "Reactode",
    description: "A developer group collaboration platform",
    img: "assets/reactodeLogo.png",
    link: "https://github.com/reactode/Reactode",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"]
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#1a1a2e] border-2 border-transparent hover:border-purple-600 
        rounded-2xl p-6 space-y-4 cursor-pointer transition-all duration-300 
        transform hover:shadow-2xl"
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full rounded-xl mb-4"
      />
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-purple-300">
          {project.title}
        </h3>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-600"
        >
          <ExternalLink size={20} />
        </a>
      </div>
      <p className="text-gray-400 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className="bg-blue-900/50 text-blue-300 
              px-3 py-1 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <div className="py-16 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}