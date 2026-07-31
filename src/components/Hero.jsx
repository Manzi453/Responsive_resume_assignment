import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';
import { CircuitBackground, Button, LedgerLine } from './shared';
import profileImage from '../Profile/Profile.jpeg';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: shouldReduceMotion ? 0 : 0.8 } },
  };

  return (
    <section id="about" className="min-h-screen pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-ink via-charcoal to-ink">
      <div className="absolute inset-0 overflow-hidden">
        <CircuitBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content leads — message before face */}
          <motion.aside className="max-w-2xl text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="font-body text-sm font-bold uppercase tracking-widest text-ochre">
                Manzi Ya Musana Ivan &middot; Kigali, Rwanda
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl lg:text-6xl font-bold mb-6 leading-tight text-ivory"
            >
              Websites and AI tools built for businesses that can&apos;t afford to look unfinished.
            </motion.h1>

            <div className="mb-6 max-w-xs mx-auto lg:mx-0">
              <LedgerLine />
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-ivory/70 leading-relaxed mb-4 font-body"
            >
              I design and build production websites, backend systems, and AI
              automation for advisory firms, startups, and growing teams across
              East Africa.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 text-sm text-ivory/60 font-body">
                <span className="inline-block w-2.5 h-2.5 bg-sage rounded-full"></span>
                Available for freelance and contract work
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button to="/contact">
                <FaEnvelope />
                Start a Project
              </Button>
              <Button to="/projects" variant="secondary">
                See the Projects
                <FaArrowRight className="text-sm" />
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {SOCIAL_LINKS.map(({ icon: Icon, url, name, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-charcoal text-ivory/70 flex items-center justify-center transition-all duration-300 border border-ivory/10 hover:border-ochre/40 notch-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${color}`}
                  title={name}
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </motion.div>
          </motion.aside>

          {/* Photo — supporting proof, not the lead */}
          <motion.div variants={itemVariants} className="flex-shrink-0 relative">
            <div className="w-64 h-80 lg:w-72 lg:h-96 notch-card bg-charcoal border border-ochre/30 overflow-hidden relative">
              <img
                src={profileImage}
                alt="Manzi Ya Musana Ivan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
