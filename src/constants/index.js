import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Navigation links for header, each backed by its own route (see App.jsx)
export const NAV_LINKS = [
  { href: '/', text: 'About' },
  { href: '/skills', text: 'Skills' },
  { href: '/services', text: 'Services' },
  { href: '/experience', text: 'Experience' },
  { href: '/education', text: 'Education' },
  { href: '/projects', text: 'Projects' },
  { href: '/awards', text: 'Awards' },
  { href: '/contact', text: 'Contact' },
];

// Social media links, shared by the Hero and Footer sections
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Manzi453',
    icon: FaGithub,
    color: 'hover:text-cyan-400 hover:bg-cyan-900/20',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/manzi-ya-musana-ivan-327597346/',
    icon: FaLinkedin,
    color: 'hover:text-blue-400 hover:bg-blue-900/20',
  },
  {
    name: 'Email',
    url: 'mailto:manziivan453@gmail.com',
    icon: FaEnvelope,
    color: 'hover:text-blue-400 hover:bg-blue-900/20',
  },
];

export default {
  NAV_LINKS,
  SOCIAL_LINKS,
};
