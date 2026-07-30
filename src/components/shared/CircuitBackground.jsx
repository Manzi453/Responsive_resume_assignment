import React from 'react';

// Manhattan-style traces reminiscent of a motherboard/PCB layout.
const TRACES = [
  'M0,90 L220,90 L220,200 L520,200 L520,60 L900,60 L900,140 L1200,140',
  'M0,260 L160,260 L160,360 L430,360 L430,460 L780,460 L780,320 L1200,320',
  'M0,430 L110,430 L110,540 L380,540 L380,260 L680,260 L680,540 L1200,540',
  'M1200,150 L1000,150 L1000,320 L680,320 L680,40 L360,40 L360,150 L0,150',
  'M1200,400 L980,400 L980,220 L640,220 L640,480 L260,480 L260,560 L0,560',
  'M0,20 L60,20 L60,120 L260,120',
  'M1200,500 L1140,500 L1140,400',
  'M520,600 L520,470 L860,470',
  'M60,600 L60,500 L320,500',
  'M900,20 L900,90 L1080,90',
];

// A subset of the traces get an animated light pulse travelling along them.
const PULSE_TRACES = [TRACES[0], TRACES[1], TRACES[2], TRACES[3], TRACES[4]];

const CircuitBackground = ({ className = '' }) => (
  <svg
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="circuit-line" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <filter id="circuit-glow" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Static traces */}
    {TRACES.map((d) => (
      <path
        key={d}
        d={d}
        fill="none"
        stroke="url(#circuit-line)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.18"
      />
    ))}

    {/* Junction pads */}
    {[
      [220, 90], [520, 200], [900, 140], [160, 260], [430, 360], [780, 460],
      [110, 430], [380, 540], [680, 260], [1000, 150], [680, 320], [640, 220],
      [260, 480],
    ].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="#22d3ee" opacity="0.3" />
    ))}

    {/* Travelling light pulses */}
    {PULSE_TRACES.map((d, i) => (
      <circle key={d} r="3.5" fill="#67e8f9" filter="url(#circuit-glow)">
        <animateMotion
          dur={`${6 + i * 1.5}s`}
          begin={`${i * 1.2}s`}
          repeatCount="indefinite"
          path={d}
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;0.1;0.9;1"
          dur={`${6 + i * 1.5}s`}
          begin={`${i * 1.2}s`}
          repeatCount="indefinite"
        />
      </circle>
    ))}
  </svg>
);

export default CircuitBackground;
