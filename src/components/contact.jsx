import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SocialLink = ({ icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-[#1a1a2e] border-2 border-transparent hover:border-purple-600 
      rounded-xl p-3 transition-all duration-300 flex items-center justify-center"
  >
    {icon}
  </motion.a>
);

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    { 
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      ), 
      link: "https://github.com/Shivam-Fl" 
    },
    { 
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

  const handleData = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const { name, email, message } = userData;
    
    if (name && email && message) {
      try {
        const res = await fetch(
          "https://shivam-fl-default-rtdb.firebaseio.com/userDataRecords.json",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
          }
        );
        
        if (res.ok) {
          alert("Form Submitted Successfully");
          setUserData({ name: "", email: "", message: "" });
        } else {
          alert("Error in submitting form");
        }
      } catch (error) {
        alert("Network error. Please try again.");
      }
    } else {
      alert('Please fill all the fields');
    }
  };

  return (
    <div className="py-16 lg:py-24 px-2 mx-4" id="contact">
      <div className="max-w-5xl ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1a1a2e] rounded-2xl p-4 space-y-6"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SM</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-300">Shivam Mishra</h3>
                <p className="text-gray-400 text-sm">Software Developer</p>
              </div>
            </div>

            <div className="space-y-4 ">
              <div className="flex items-center justify-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a 
                  href="mailto:shivam.r.mishra9120@gmail.com" 
                  className="text-gray-300 hover:text-purple-300 transition "
                >
                  shivam.r.mishra9120@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M20 10c0 6-8 0-8 0s-8 6-8 0a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-gray-300">Bhiwandi, Maharashtra, India</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-purple-300 text-center">Connect</h3>
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} icon={link.icon} link={link.link} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side form remains the same */}
          <motion.form 
            method="POST"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1a1a2e] rounded-2xl p-4 space-y-6"
          >
            <input
              className="w-full bg-[#202328] p-4 rounded-lg focus:border-purple-600 focus:outline-none text-gray-300"
              type="text"
              name="name"
              placeholder="Name"
              value={userData.name}
              onChange={handleData}
            />
            <input
              className="w-full bg-[#202328] p-4 rounded-lg focus:border-purple-600 focus:outline-none text-gray-300"
              type="email"
              name="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleData}
            />
            <textarea
              className="w-full bg-[#202328] p-4 rounded-lg focus:border-purple-600 focus:outline-none text-gray-300"
              name="message"
              rows="5"
              placeholder="Message"
              value={userData.message}
              onChange={handleData}
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={submit}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 
                text-white font-bold hover:from-purple-700 hover:to-pink-700 
                transition duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;