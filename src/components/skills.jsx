import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Globe, Terminal, Database, Cpu } from 'lucide-react';

const SkillCard = ({ skill }) => {
  const iconMap = {
    "Frontend": Code,
    "Backend": Terminal,
    "Database": Database,
    "Programming Languages": Cpu
  };

  const Icon = iconMap[skill.title] || Code;

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#1a1a2e] border-2 border-transparent hover:border-purple-600 
        rounded-2xl p-6 space-y-4 cursor-pointer transition-all duration-300 
        transform hover:shadow-2xl"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-purple-600/20 p-3 rounded-xl">
            <Icon className="text-purple-400" size={24} />
          </div>
          <h3 className="text-xl font-bold text-purple-300">
            {skill.title}
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.skills.map((skillName, index) => (
          <span 
            key={index}
            className="bg-blue-900/50 text-blue-300 
              px-3 py-1 rounded-full text-xs"
          >
            {skillName}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'HTML/CSS',
        'Javascript',
        'Bootstrap',
        'Tailwind CSS',
        'React.js',
      ]
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express.js'
      ]
    },
    {
      title: 'Database',
      skills: [
        'SQL',
        'MongoDB',
        'PostgreSQL',
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        'Python',
        'Javascript',
        'Java',
        'C',
      ]
    },
  ];

  return (
    <div id='skills' className="lg:py-24 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          My Technical Arsenal
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((skill, index) => (
            <SkillCard 
              key={index} 
              skill={skill}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;