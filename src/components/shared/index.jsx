import React from 'react';
import { motion } from 'framer-motion';

/**
 * Button component with consistent styling
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:from-cyan-700 hover:to-blue-800 shadow-lg shadow-cyan-500/25',
    secondary: 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-700/20',
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

/**
 * Section wrapper with consistent padding and animations
 */
export const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  variant = 'default',
}) => {
  const bgVariants = {
    default: 'bg-gray-900',
    dark: 'bg-gray-950',
    gradient: 'bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900',
  };

  return (
    <section id={id} className={`${bgVariants[variant]} py-20 lg:py-32 relative ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-400 max-w-2xl">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

/**
 * Card component with hover effects
 */
export const Card = ({
  children,
  className = '',
  hover = true,
  animated = true,
  ...props
}) => {
  return animated ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -10 } : {}}
      className={`bg-gray-800/50 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 transition-all duration-300 ${
        hover ? 'hover:shadow-2xl hover:shadow-blue-500/20' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  ) : (
    <div
      className={`bg-gray-800/50 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 transition-all duration-300 ${
        hover ? 'hover:shadow-2xl hover:shadow-blue-500/20' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Badge component
 */
export const Badge = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variants = {
    primary: 'bg-cyan-900/50 text-cyan-300 border border-cyan-700/30',
    success: 'bg-green-900/50 text-green-300 border border-green-700/30',
    warning: 'bg-yellow-900/50 text-yellow-300 border border-yellow-700/30',
    danger: 'bg-red-900/50 text-red-300 border border-red-700/30',
  };

  return (
    <span
      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

/**
 * Container component with max width
 */
export const Container = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>{children}</div>
  );
};

export default {
  Button,
  Section,
  Card,
  Badge,
  Container,
};
