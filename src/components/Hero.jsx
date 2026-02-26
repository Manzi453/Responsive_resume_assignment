import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Button } from './shared';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const socialIcons = [
    { Icon: FaGithub, url: 'https://github.com/Manzi453', label: 'GitHub', color: 'hover:text-gray-300 hover:bg-gray-800' },
    { Icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400 hover:bg-blue-900/20' },
    { Icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400 hover:bg-sky-900/20' },
    { Icon: FaEnvelope, url: 'mailto:manziivan453@gmail.com', label: 'Email', color: 'hover:text-red-400 hover:bg-red-900/20' },
  ];

  return (
    <section id="about" className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.12, 0.1]
          }}
          transition={{ duration: 7, repeat: Infinity }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Picture */}
          <motion.div variants={itemVariants} className="flex-shrink-0 relative group">
            {/* Animated gradient border */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.3)',
                  '0 0 40px rgba(2, 132, 199, 0.5)',
                  '0 0 20px rgba(6, 182, 212, 0.3)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div
                className="w-72 h-72 lg:w-96 lg:h-96 rounded-full shadow-2xl border-4 border-gray-800 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center"
              >
                <div className="text-center">
                  <svg className="w-24 h-24 lg:w-32 lg:h-32 text-gray-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Add your photo</p>
                </div>
              </div>
              {/* Status indicator */}
              <motion.div
                className="absolute bottom-8 right-8 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-800 shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <motion.aside className="max-w-2xl text-center lg:text-left">
            {/* Greeting Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span
                className="inline-block px-4 py-2 bg-cyan-900/50 text-cyan-300 rounded-full text-sm font-semibold border border-cyan-700/30"
                whileHover={{ scale: 1.05 }}
              >
                👋 Hello, I'm
              </motion.span>
            </motion.div>
            
            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Manzi Ya Musana
              </motion.span>
              <motion.span 
                className="block text-4xl lg:text-6xl bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Ivan
              </motion.span>
            </motion.h1>
            
            {/* Title */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-200 mb-3">Full Stack Developer</h2>
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-2"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-gray-400">Available for opportunities</span>
              </motion.div>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8"
            >
              Passionate software developer crafting innovative solutions that bridge technology and real-world challenges. 
              Specialized in building scalable web applications with modern frameworks and best practices.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 py-3 px-8 bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:from-cyan-700 hover:to-blue-800 shadow-lg shadow-cyan-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 py-3 px-8 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialIcons.map(({ Icon, url, label, color }, index) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-gray-500 ${color}`}
                  whileHover={{ scale: 1.1, rotate: 12 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  title={label}
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-gray-400 text-center">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
