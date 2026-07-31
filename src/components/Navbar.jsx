import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS } from '../constants';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm';

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

  const linkClasses = ({ isActive }) =>
    `font-body font-medium transition-all duration-300 px-4 py-2 ${FOCUS_RING} ${
      isActive ? 'text-ochre' : 'text-ivory/80 hover:text-ivory'
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `font-body font-medium transition-all duration-300 block py-3 px-4 ${FOCUS_RING} ${
      isActive ? 'text-ochre bg-charcoal' : 'text-ivory/80 hover:text-ivory hover:bg-charcoal'
    }`;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-ink/95 backdrop-blur-md border-b border-ivory/10 shadow-2xl shadow-black/50'
        : 'bg-ink/50 backdrop-blur-sm'
    }`}>
      <motion.nav
        className="container mx-auto px-4 py-4 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Logo */}
        <NavLink to="/" className={`relative group ${FOCUS_RING}`}>
          <h2 className="font-display text-xl lg:text-2xl font-bold text-ochre">
            Manzi Ivan
          </h2>
        </NavLink>

        {/* Desktop Navigation */}
        <motion.ul
          className="hidden md:flex space-x-2"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {NAV_LINKS.map((link) => (
            <motion.li key={link.href} variants={itemVariants}>
              <NavLink to={link.href} end={link.href === '/'} className={linkClasses}>
                {link.text}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-ivory text-2xl hover:text-ochre transition-colors duration-300 relative z-20 p-1 ${FOCUS_RING}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
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
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-ink/95 backdrop-blur-md border-b border-ivory/10"
          >
            <motion.ul
              className="px-4 py-6 space-y-3"
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    onClick={() => setIsOpen(false)}
                    className={mobileLinkClasses}
                  >
                    {link.text}
                  </NavLink>
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
