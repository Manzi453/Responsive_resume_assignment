import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FOOTER_LINKS, SOCIAL_LINKS } from '../constants';
import { Button } from './shared';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory border-t border-ivory/10 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 notch-btn overflow-hidden border border-ochre/30 flex-shrink-0">
                <img src="/logo.jpeg" alt="Manzi Ya Musana Ivan Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl font-bold text-ochre">
                Manzi Ya Musana Ivan
              </h3>
            </div>
            <p className="text-ivory/60 text-sm leading-relaxed mb-4 font-body">
              Freelance web developer and AI-systems builder shipping production websites and automation for real clients.
            </p>
            <div className="flex items-center gap-2 text-sm text-ivory/60 font-body">
              <FaMapMarkerAlt className="text-ochre flex-shrink-0" />
              <span>Kigali, Rwanda &middot; Available for remote work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-ivory/90 mb-4 font-body">Sitemap</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm font-body">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`text-ivory/60 hover:text-ochre transition-colors duration-300 ${FOCUS_RING}`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / CTA */}
          <div>
            <h4 className="font-semibold text-ivory/90 mb-4 font-body">Let&apos;s Work Together</h4>
            <p className="text-ivory/60 text-sm mb-4 font-body">
              Have a project in mind? I&apos;m open to freelance work and full-time opportunities.
            </p>
            <Button to="/contact" size="none" className="py-2.5 px-6 text-sm mb-5">
              Start a Project
            </Button>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, url, name, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={name}
                  className={`w-10 h-10 bg-charcoal text-ivory/70 notch-btn flex items-center justify-center transition-all duration-300 border border-ivory/10 hover:border-ochre/40 ${FOCUS_RING} ${color}`}
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left font-body">
          <p className="text-ivory/50 text-sm">
            &copy; {currentYear} Manzi Ya Musana Ivan. All rights reserved.
          </p>
          <p className="text-ivory/50 text-sm">Built with React &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
