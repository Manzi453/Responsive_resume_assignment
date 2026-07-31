import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CircuitBackground from './CircuitBackground';

const MotionLink = motion(Link);

const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-ink';

/**
 * Button component with consistent styling. Renders as a router Link when
 * given a `to` prop, a plain anchor when given `href`, or a native button
 * otherwise.
 *
 * Text/fill pairings are fixed per variant to hold WCAG AA contrast:
 * ochre and sage fills use different text colors (ivory vs ink) because
 * white text fails against a filled sage or gold-dust surface.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = `notch-btn font-semibold transition-all duration-300 transform flex items-center justify-center gap-2 ${FOCUS_RING}`;

  const variants = {
    // Solid fills use ink text: azure/teal/ice are all bright enough that
    // light text fails contrast on them (verified — see project notes).
    primary: 'bg-ochre text-ink hover:bg-[#2578b3]',
    sage: 'bg-sage text-ink hover:bg-[#4d948d]',
    secondary: 'border-2 border-ochre text-ivory hover:bg-ochre hover:text-ink',
    ghost: 'text-ivory/80 hover:text-ivory hover:bg-charcoal',
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-8 text-base',
    lg: 'py-4 px-10 text-lg',
    none: '',
  };

  const stateClasses = disabled
    ? 'opacity-60 cursor-not-allowed'
    : 'hover:scale-105';

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${stateClasses} ${className}`;
  const motionHoverProps = disabled ? {} : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } };

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionHoverProps} {...props}>
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionHoverProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      disabled={disabled}
      className={classes}
      {...motionHoverProps}
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
  circuit = false,
}) => {
  const bgVariants = {
    default: 'bg-ink',
    dark: 'bg-charcoal',
    gradient: 'bg-gradient-to-b from-ink via-charcoal to-ink',
  };

  return (
    <section id={id} className={`${bgVariants[variant]} py-20 lg:py-32 relative overflow-hidden ${className}`}>
      {circuit && (
        <div className="absolute inset-0 overflow-hidden">
          <CircuitBackground />
        </div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-ivory mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-ivory/60 max-w-2xl font-body">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

/**
 * Card component with hover effects and the signature notched corner
 */
export const Card = ({
  children,
  className = '',
  hover = true,
  animated = true,
  ...props
}) => {
  const cardClasses = `notch-card bg-charcoal border border-ivory/10 p-6 transition-all duration-300 ${
    hover ? 'hover:border-ochre/40 hover:shadow-xl hover:shadow-ochre/10' : ''
  } ${className}`;

  return animated ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -8 } : {}}
      className={cardClasses}
      {...props}
    >
      {children}
    </motion.div>
  ) : (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

/**
 * Badge component. Small text uses gold-dust rather than ochre — ochre
 * only holds AA contrast at large/bold sizes.
 */
export const Badge = ({
  children,
  variant = 'primary',
  className = '',
}) => {
  const variants = {
    primary: 'bg-ochre/15 text-gold border border-ochre/30',
    sage: 'bg-sage/15 text-gold border border-sage/30',
  };

  return (
    <span
      className={`inline-block px-4 py-2 text-sm font-semibold ${variants[variant]} ${className}`}
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

export { default as CircuitBackground } from './CircuitBackground';
export { default as LedgerLine } from './LedgerLine';

export default {
  Button,
  Section,
  Card,
  Badge,
  Container,
};
