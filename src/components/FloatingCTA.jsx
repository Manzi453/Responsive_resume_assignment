import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { Button } from './shared';

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
          <Button to="/contact" size="none" className="py-3 px-5">
            <FaPaperPlane className="text-sm" />
            <span className="hidden sm:inline">Request a Service</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
