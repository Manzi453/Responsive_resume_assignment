import React from 'react';
import { FaComments, FaCode, FaRocket, FaHeadset } from 'react-icons/fa';
import { Section, Card } from './shared';

const STEPS = [
  {
    icon: FaComments,
    title: 'Discover',
    description: 'I learn your goals, users, and constraints before writing a line of code.',
  },
  {
    icon: FaCode,
    title: 'Build',
    description: 'Iterative development with regular check-ins, so you see progress, not surprises.',
  },
  {
    icon: FaRocket,
    title: 'Launch',
    description: 'Deployed, tested, and handed off cleanly — production-ready, not a demo.',
  },
  {
    icon: FaHeadset,
    title: 'Support',
    description: 'Bug fixes and small iterations after launch, not radio silence.',
  },
];

const HowItWorks = () => (
  <Section
    id="how-i-work"
    variant="gradient"
    title="How I Work"
    subtitle="A simple, four-step process from first conversation to shipped product."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {STEPS.map(({ icon: Icon, title, description }, index) => (
        <Card key={title} className="text-center">
          <div className="w-14 h-14 mx-auto mb-4 notch-btn bg-ochre text-ink flex items-center justify-center shadow-lg">
            <Icon className="text-2xl" />
          </div>
          <h3 className="font-display font-bold text-ivory text-lg mb-2">{index + 1}. {title}</h3>
          <p className="text-sm text-ivory/60 leading-relaxed font-body">{description}</p>
        </Card>
      ))}
    </div>
  </Section>
);

export default HowItWorks;
