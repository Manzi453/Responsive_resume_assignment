import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { Button } from './shared';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white border-t border-gray-800/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/30 flex-shrink-0">
                <img src="/logo.jpeg" alt="Manzi Ya Musana Ivan Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Manzi Ya Musana Ivan
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full-stack developer building responsive, production-ready web applications for clients and teams.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FaMapMarkerAlt className="text-cyan-500 flex-shrink-0" />
              <span>Kigali, Rwanda &middot; Available for remote work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / CTA */}
          <div>
            <h4 className="font-semibold text-gray-200 mb-4">Let&apos;s Work Together</h4>
            <p className="text-gray-400 text-sm mb-4">
              Have a project in mind? I&apos;m open to freelance work and full-time opportunities.
            </p>
            <Button to="/contact" size="none" className="py-2.5 px-6 text-sm mb-5">
              Request a Service
            </Button>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, url, name, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={name}
                  className={`w-10 h-10 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-gray-500 ${color}`}
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Manzi Ya Musana Ivan. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
