import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const FloatingCTA = () => {
  const { pathname } = useLocation();

  return (
    <AnimatePresence>
      {pathname !== '/contact' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold rounded-full py-3 px-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            <FaPaperPlane className="text-sm" />
            <span className="hidden sm:inline">Request a Service</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
