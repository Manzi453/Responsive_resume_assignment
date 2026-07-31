import React from 'react';
import { useReducedMotion } from 'framer-motion';

// Sparse, faceted line field — the same hard-angled geometry as the Ledger
// Line, used here as a quiet background texture rather than a PCB/circuit
// motif (a developer-portfolio signifier this redesign is deliberately
// moving away from for a business-owner audience).
const TRACES = [
  { d: 'M0,120 L180,120 L220,60 L480,60', color: '#2D8FD1' },
  { d: 'M1200,180 L980,180 L940,260 L680,260', color: '#5FB0A8' },
  { d: 'M0,420 L140,420 L180,480 L420,480', color: '#5FB0A8' },
  { d: 'M1200,460 L1020,460 L980,400 L760,400', color: '#2D8FD1' },
  { d: 'M0,300 L90,300 L110,340', color: '#7DCFE0' },
];

const CircuitBackground = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {TRACES.map(({ d, color }) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.16"
        />
      ))}

      {!shouldReduceMotion && (
        <circle r="3" fill="#C9A24B" opacity="0.5">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            path={TRACES[0].d}
          />
        </circle>
      )}
    </svg>
  );
};

export default CircuitBackground;
