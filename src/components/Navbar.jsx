import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl shadow-black/50' 
        : 'bg-gray-900/50 backdrop-blur-sm'
    }`}>
      <motion.nav 
        className="container mx-auto px-4 py-4 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative group"
        >
          <h2 className="text-white text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Manzi Ivan
          </h2>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.ul 
          className="hidden md:flex space-x-2"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {NAV_LINKS.map((link) => (
            <motion.li key={link.href} variants={itemVariants}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 relative group px-4 py-2"
              >
                {link.text}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white text-2xl hover:text-cyan-400 transition-colors duration-300 relative z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 90 }}
              >
                <FaTimes />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: -90 }}
              >
                <FaBars />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50"
          >
            <motion.ul 
              className="px-4 py-6 space-y-3"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 block py-3 px-4 rounded-lg hover:bg-gray-800/50"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
