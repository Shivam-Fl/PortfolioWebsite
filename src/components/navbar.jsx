import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Code, Zap, Briefcase, Mail } from 'lucide-react';

const navLinks = [
  { id: 0, header: "Home", link: "#home", icon: Home },
  { id: 1, header: "Skills", link: "#skills", icon: Code },
  { id: 2, header: "Projects", link: "#projects", icon: Zap },
  { id: 3, header: "Experience", link: "#experience", icon: Briefcase },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = () => setToggle(!toggle);
  const closeMenu = () => setToggle(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#1a1a2e] shadow-xl">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.1 }}
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Shivam
        </motion.h1>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 bg-[#16213e] rounded-full px-6 py-2 shadow-lg">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.link}
                onClick={() => setActiveLink(link.id)}
                className={`flex items-center space-x-2 px-3 py-1 rounded-full transition-all duration-300 ${
                  activeLink === link.id 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:text-purple-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={20} />
                <span>{link.header}</span>
              </motion.a>
            ))}
          </div>

          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:from-pink-600 hover:to-purple-500 transition-all shadow-lg">
              Contact Me
            </button>
          </motion.a>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full">
              Contact
            </button>
          </motion.a>
          
          <motion.button 
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
            className="text-white focus:outline-none"
          >
            {toggle ? 'X' : '☰'}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 bg-[#1a1a2e] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.link}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: link.id * 0.1 }}
                  className="text-3xl text-gray-300 hover:text-purple-300 flex items-center space-x-4"
                >
                  <link.icon size={30} className="text-purple-400" />
                  <span>{link.header}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}