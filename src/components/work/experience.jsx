import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Globe, Terminal } from 'lucide-react';

const ExperienceCard = ({ experience, onSelect }) => {
  const iconMap = {
    "Software": Code,
    "Technical": Terminal,
    "Automation": Zap,
    "Web": Globe
  };

  const findIcon = () => {
    const matchingKey = Object.keys(iconMap).find(key => 
      experience.position.toLowerCase().includes(key.toLowerCase())
    );
    return matchingKey ? iconMap[matchingKey] : Code;
  };

  const Icon = findIcon();

  return (
    <motion.div 
      onClick={onSelect}
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
          <div>
            <h3 className="text-xl font-bold text-purple-300">
              {experience.position}
            </h3>
            <p className="text-gray-400">{experience.organization}</p>
          </div>
        </div>
        <span className="text-sm text-gray-500">{experience.period}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-blue-900/50 text-blue-300 
              px-3 py-1 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState({
    position: "Software Developer",
    organization: "Effilearn",
    description: "Developed company website using Next.js, Express.js, and Tailwind CSS. Created comprehensive systems including LMS, recording management, and admin portal.",
    period: "Apr 2024 - Present",
    skills: ["Next.js", "Express.js", "Tailwind CSS", "LMS Development"]
  });

  const work = [
    {
      position: "Software Developer",
      organization: "Effilearn",
      description: "Developed company website using Next.js, Express.js, and Tailwind CSS. Created comprehensive systems including LMS, recording management, and admin portal.",
      period: "Apr 2024 - Present",
      skills: ["Next.js", "Express.js", "Tailwind CSS", "LMS Development"]
    },
    {
      position: "Technical Lead",
      organization: "Rotaract Club - TCET",
      description: "Led team of 7 developers migrating club website from Wix to React.js. Managed deployment, SEO, and optimized site performance.",
      period: "Aug 2024 - Present",
      skills: ["React.js", "Web Migration", "SEO", "Team Leadership"]
    },
    {
      position: "Automation Intern",
      organization: "Dinosys Infotech Pvt Ltd.",
      description: "Contributed to social profiling project using Selenium and Appium for website and app automation.",
      period: "Dec 2023 - Apr 2024",
      skills: ["Selenium", "Appium", "Automation", "Web Testing"]
    }
  ];

  return (
    <div className="  py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Professional Journey
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
        {selectedExperience && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#1a1a2e] rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-purple-300 mb-4">
                {selectedExperience.position}
              </h3>
              <p className="text-gray-300 mb-6">
                {selectedExperience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-blue-900/50 text-blue-300 
                      px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
          <div className="space-y-6">
            {work.map((experience, index) => (
              <ExperienceCard 
                key={index} 
                experience={experience}
                onSelect={() => setSelectedExperience(experience)}
              />
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Experience;