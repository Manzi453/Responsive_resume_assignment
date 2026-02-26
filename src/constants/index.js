// Navigation links for header
export const NAV_LINKS = [
  { href: '#about', text: 'About' },
  { href: '#skills', text: 'Skills' },
  { href: '#experience', text: 'Experience' },
  { href: '#education', text: 'Education' },
  { href: '#projects', text: 'Projects' },
  { href: '#awards', text: 'Awards' },
  { href: '#contact', text: 'Contact' },
];

// Social media links
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Manzi453',
    icon: 'FaGithub',
    color: 'hover:text-gray-400',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'FaLinkedin',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'FaTwitter',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Email',
    url: 'mailto:your-email@gmail.com',
    icon: 'FaEnvelope',
    color: 'hover:text-red-400',
  },
];

// Animation variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
};

// Transition config
export const TRANSITION_CONFIG = {
  default: { duration: 0.5, ease: 'easeOut' },
  fast: { duration: 0.3, ease: 'easeOut' },
  slow: { duration: 0.8, ease: 'easeOut' },
  bounce: { type: 'spring', damping: 10, stiffness: 100 },
};

// Color gradients
export const GRADIENTS = {
  cyan: 'from-cyan-400 to-blue-600',
  blue: 'from-blue-500 to-blue-600',
  purple: 'from-purple-500 to-pink-500',
  green: 'from-green-500 to-emerald-500',
  orange: 'from-orange-500 to-red-500',
};

export default {
  NAV_LINKS,
  SOCIAL_LINKS,
  ANIMATION_VARIANTS,
  TRANSITION_CONFIG,
  GRADIENTS,
};
