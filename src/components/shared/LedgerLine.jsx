import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * The Ledger Line — signature accent. A faceted, hard-angled path (never a
 * smooth curve) that echoes Imigongo linework, drawing itself in as it
 * scrolls into view. Appears at a few connective points down the homepage
 * (hero, between Services and Selected Work, at the closing CTA) as one
 * recurring motif rather than a single continuous path spanning the page.
 * Renders fully drawn, with no animation, when prefers-reduced-motion is set.
 */
const LedgerLine = ({ className = '', flip = false }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      className={`w-full h-auto ${className}`}
      viewBox="0 0 400 60"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d={flip
          ? 'M0 50 L80 50 L110 10 L200 10 L230 50 L320 50 L400 5'
          : 'M0 5 L80 5 L110 45 L200 45 L230 5 L320 5 L400 50'}
        stroke="#2D8FD1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.4, ease: 'easeInOut' }}
      />
    </svg>
  );
};

export default LedgerLine;
