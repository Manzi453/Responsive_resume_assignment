import React from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { Section, Button } from './shared';

const FACTS = [
  { icon: FaMapMarkerAlt, text: 'Kigali, Rwanda — remote-ready' },
  { icon: FaGraduationCap, text: 'Software Engineering @ African Leadership University' },
  { icon: FaBriefcase, text: 'Currently: Digital Marketing & Technology Associate, RG Partners' },
];

const AboutSnippet = () => (
  <Section id="about-summary" variant="default" title="About">
    <div className="grid lg:grid-cols-3 gap-10 items-start">
      <div className="lg:col-span-2">
        <p className="text-lg text-ivory/80 leading-relaxed mb-4 font-body">
          I&apos;m Manzi Ya Musana Ivan — a software engineering student building
          production websites and AI systems for real clients, not just
          coursework. At RG Partners I build and maintain the web presence for
          the group and its advisory affiliates; alongside that I build
          full-stack applications, mobile apps, and machine-learning systems
          end-to-end, from data pipeline to deployed API.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button to="/experience" variant="secondary" size="none" className="py-2.5 px-5 text-sm">
            Full Experience <FaArrowRight className="text-xs" />
          </Button>
          <Button to="/education" variant="ghost" size="none" className="py-2.5 px-5 text-sm border border-ivory/15">
            Education &amp; Certifications <FaArrowRight className="text-xs" />
          </Button>
        </div>
      </div>

      <ul className="space-y-4">
        {FACTS.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3">
            <span className="w-9 h-9 notch-btn bg-charcoal border border-ivory/10 flex items-center justify-center text-ochre shrink-0">
              <Icon className="text-sm" />
            </span>
            <span className="text-sm text-ivory/70 leading-relaxed font-body pt-1.5">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default AboutSnippet;
