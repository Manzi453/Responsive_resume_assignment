import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaBriefcase, FaHandshake, FaGraduationCap, FaGlobe, FaAward, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const PAGES = [
  {
    to: '/skills',
    icon: FaCode,
    title: 'Skills',
    description: 'Frontend, backend, and DevOps expertise across modern stacks.',
  },
  {
    to: '/services',
    icon: FaHandshake,
    title: 'Services',
    description: 'What I can build for you — web, mobile, backend, and data/ML solutions.',
  },
  {
    to: '/experience',
    icon: FaBriefcase,
    title: 'Experience',
    description: 'Real-world roles building production websites, including ongoing work for RG Partners.',
  },
  {
    to: '/education',
    icon: FaGraduationCap,
    title: 'Education',
    description: 'Software Engineering degree in progress at African Leadership University.',
  },
  {
    to: '/projects',
    icon: FaGlobe,
    title: 'Projects',
    description: 'Live web apps and full-stack builds spanning web, mobile, and automation.',
  },
  {
    to: '/awards',
    icon: FaAward,
    title: 'Awards',
    description: '24 certifications spanning web development, programming, data & AI, and more.',
  },
  {
    to: '/contact',
    icon: FaEnvelope,
    title: 'Contact',
    description: 'Get in touch or request a service for your next project.',
  },
];

const LandingOverview = () => (
  <section className="pb-20 lg:pb-32 relative bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">Explore the Site</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">A quick look at what&apos;s on each page.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PAGES.map(({ to, icon: Icon, title, description }, index) => (
          <motion.div
            key={to}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
          >
            <Link
              to={to}
              className="group block h-full bg-gray-800/50 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2 flex items-center gap-2">
                {title}
                <FaArrowRight className="text-sm text-cyan-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LandingOverview;
