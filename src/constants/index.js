import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// Primary nav — tightened to what a business-owner evaluating a hire
// actually needs. Deeper reference pages (Skills, Education, Awards) are
// still routed and live in the footer, not the top nav.
export const NAV_LINKS = [
  { href: '/', text: 'Home' },
  { href: '/services', text: 'Services' },
  { href: '/projects', text: 'Work' },
  { href: '/experience', text: 'About' },
  { href: '/contact', text: 'Contact' },
];

// Fuller sitemap for the footer, including the pages demoted out of the
// primary nav.
export const FOOTER_LINKS = [
  { href: '/', text: 'Home' },
  { href: '/services', text: 'Services' },
  { href: '/projects', text: 'Work' },
  { href: '/experience', text: 'Experience' },
  { href: '/education', text: 'Education' },
  { href: '/skills', text: 'Skills' },
  { href: '/awards', text: 'Awards' },
  { href: '/contact', text: 'Contact' },
];

// Social media links, shared by the Hero and Footer sections
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/Manzi453',
    icon: FaGithub,
    color: 'hover:text-ochre hover:bg-ochre/10',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/manzi-ya-musana-ivan-327597346/',
    icon: FaLinkedin,
    color: 'hover:text-sage hover:bg-sage/10',
  },
  {
    name: 'Email',
    url: 'mailto:manziivan453@gmail.com',
    icon: FaEnvelope,
    color: 'hover:text-sage hover:bg-sage/10',
  },
];

export default {
  NAV_LINKS,
  FOOTER_LINKS,
  SOCIAL_LINKS,
};
