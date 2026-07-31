import React from 'react';
import { FaLaptopCode, FaProjectDiagram, FaCertificate, FaLayerGroup } from 'react-icons/fa';
import { Card } from './shared';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

// Every figure here is a plain count from data already on the site
// (Projects.jsx, Awards/LandingOverview copy, Services.jsx) — no invented stats.
const STATS = [
  { icon: FaLaptopCode, target: 3, suffix: '', label: 'Client Sites Shipped' },
  { icon: FaProjectDiagram, target: 14, suffix: '+', label: 'Projects Built' },
  { icon: FaCertificate, target: 24, suffix: '', label: 'Certifications Earned' },
  { icon: FaLayerGroup, target: 6, suffix: '', label: 'Service Categories Offered' },
];

const StatTile = ({ icon: Icon, target, suffix, label, isVisible }) => {
  const count = useCountUp(target, isVisible);

  return (
    <Card className="text-center">
      <div className="w-12 h-12 mx-auto mb-3 notch-btn bg-sage text-ink flex items-center justify-center">
        <Icon className="text-xl" />
      </div>
      <div className="font-display text-3xl font-bold text-ivory mb-1">{count}{suffix}</div>
      <div className="text-sm text-ivory/60 font-body">{label}</div>
    </Card>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="pt-8 lg:pt-12 pb-16 lg:pb-20 bg-gradient-to-b from-ink via-charcoal to-ink relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat) => (
            <StatTile key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
