import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
          <path d="M16 8.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z"/>
          <path d="M12 12V16"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      ), 
      link: "https://www.instagram.com/__shivam__fl/" 
    },
    { 
      name: "GitHub",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      ), 
      link: "https://github.com/Shivam-Fl" 
    },
    { 
      name: "Website",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
          <path d="M2 12h20"/>
        </svg>
      ), 
      link: "https://shivammishra.vercel.app/" 
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[#1a1a2e] w-full py-12 px-4">
      <div className=" max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Left Column - About */}
          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-4">Shivam Mishra</h3>
            <p className="text-gray-400 text-sm">
              Passionate Software Developer creating innovative solutions 
              and pushing the boundaries of web technology.
            </p>
          </div>

          {/* Middle Column - Navigation */}
          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-4">Quick Links</h3>
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ translateX: 5 }}
                  className="block text-gray-400 hover:text-purple-300 transition"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div>
            <h3 className="text-xl font-bold text-purple-300 mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#202328] p-3 rounded-xl hover:bg-purple-900/20 transition"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-gray-800 mt-8 pt-6 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Shivam Mishra. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;