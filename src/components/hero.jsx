import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch, Linkedin, Mail } from 'lucide-react';

const PortfolioHero = () => {
  return (
    <div className=" px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex flex-col items-center mb-8">
            <img 
              src="/assets/picofme.png" 
              alt="Profile"
              className="w-40 h-40 sm:w-52 sm:h-52 border-4 border-black rounded-full object-cover mb-6"
            />
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Shivam Mishra
            </h1>
          </div>
          
          <h2 className="text-2xl mb-6 text-gray-300">
            Software Engineer | Web Developer
          </h2>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about crafting elegant solutions and building innovative web experiences that push the boundaries of design and functionality.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { 
                icon: GitBranch, 
                href: "https://github.com/yourusername",
                className: "bg-[#1a1a2e] hover:border-purple-600 border-2 border-transparent"
              },
              { 
                icon: Linkedin, 
                href: "https://linkedin.com/in/yourusername",
                className: "bg-[#1a1a2e] hover:border-purple-600 border-2 border-transparent"
              },
              { 
                icon: Mail, 
                href: "mailto:your.email@example.com",
                className: "bg-[#1a1a2e] hover:border-purple-600 border-2 border-transparent"
              },
              { 
                icon: Code, 
                text: "View Projects", 
                href: "/projects",
                className: "bg-purple-600 hover:bg-purple-700 text-white"
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  p-3 rounded-2xl flex items-center space-x-2 
                  transition-all duration-300 transform
                  ${item.className}
                `}
              >
                <item.icon className="text-purple-400" size={24} />
                {item.text && <span>{item.text}</span>}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioHero;