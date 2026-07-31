import React from 'react';
import { FaLandmark, FaCoins, FaRobot, FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import { Section, Card, Badge, Button } from './shared';

// Three flagship projects, told as case studies (problem -> build) rather
// than the full 14-project grid, which stays on /projects. Content is the
// same real project data used there — Trustees/Financiers cover the
// client-facing register, the MLOps pipeline covers the AI-systems register.
const CASE_STUDIES = [
  {
    icon: FaLandmark,
    title: 'AAA Corporate Trustees',
    problem: 'A corporate trustee and governance advisory arm needed a credible, institutional-grade web presence for trust administration and regulatory compliance services.',
    build: 'A multi-page React + TypeScript site with an animated, map-driven UI, built and maintained as part of RG Partners’ ongoing digital presence.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://aaatrustees.rw',
    linkText: 'View Live Site',
    register: 'business',
  },
  {
    icon: FaCoins,
    title: 'AAA Financiers',
    problem: 'An investment advisory arm needed to present capital-raising and financial structuring services to growth-stage businesses across African markets.',
    build: 'A Vite + React + TypeScript site using Radix UI for accessible, component-driven interactions.',
    tech: ['React', 'TypeScript', 'Vite', 'Radix UI'],
    link: 'https://aaafinanciers.rw/',
    linkText: 'View Live Site',
    register: 'business',
  },
  {
    icon: FaRobot,
    title: 'Butterfly & Moth Classifier',
    problem: 'Most ML coursework stops at a notebook. This was built to prove the same model could survive a real deployment: predict, retrain, and scale.',
    build: 'An EfficientNetB0 classifier served through FastAPI and Streamlit, containerized with Docker, and load-tested with Locust across single vs. multi-container setups.',
    tech: ['Python', 'TensorFlow/Keras', 'FastAPI', 'Docker'],
    link: 'https://github.com/Manzi453/Summative_ML_Pipelin_butterfly-mlops',
    linkText: 'View on GitHub',
    register: 'technical',
  },
];

const SelectedWork = () => (
  <Section
    id="selected-work"
    variant="dark"
    title="Selected Work"
    subtitle="A few projects worth a closer look. The full portfolio, including client and personal builds, is on the Projects page."
  >
    <div className="space-y-6">
      {CASE_STUDIES.map(({ icon: Icon, title, problem, build, tech, link, linkText, register }) => {
        const isBusiness = register === 'business';
        return (
          <Card key={title} hover={false} className="md:flex md:items-start md:gap-8">
            <div
              className={`w-16 h-16 notch-btn flex items-center justify-center mb-4 md:mb-0 shrink-0 ${
                isBusiness ? 'bg-ochre text-ink' : 'bg-sage text-ink'
              }`}
            >
              <Icon className="text-2xl" />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-xl font-bold text-ivory mb-3">{title}</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold mb-1">Problem</p>
                  <p className="text-sm text-ivory/70 leading-relaxed font-body">{problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold mb-1">Build</p>
                  <p className="text-sm text-ivory/70 leading-relaxed font-body">{build}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                {tech.map((t) => (
                  <Badge key={t} variant={isBusiness ? 'primary' : 'sage'} className="text-xs px-3 py-1">
                    {t}
                  </Badge>
                ))}
              </div>

              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-ivory transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm"
              >
                {link.includes('github') ? <FaGithub /> : <FaExternalLinkAlt />}
                {linkText}
              </a>
            </div>
          </Card>
        );
      })}
    </div>

    <div className="text-center mt-10">
      <Button to="/projects" variant="secondary" size="none" className="py-3 px-6">
        See the Full Portfolio
        <FaArrowRight className="text-sm" />
      </Button>
    </div>
  </Section>
);

export default SelectedWork;
