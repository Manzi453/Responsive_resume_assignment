import React from 'react';
import { FaLaptopCode, FaProjectDiagram, FaCertificate, FaLayerGroup } from 'react-icons/fa';
import { Card } from './shared';

// Every figure here is a plain count from data already on the site
// (Projects.jsx, Awards/LandingOverview copy, Services.jsx) — no invented stats.
const STATS = [
  { icon: FaLaptopCode, value: '3', label: 'Client Sites Shipped' },
  { icon: FaProjectDiagram, value: '14+', label: 'Projects Built' },
  { icon: FaCertificate, value: '24', label: 'Certifications Earned' },
  { icon: FaLayerGroup, value: '6', label: 'Service Categories Offered' },
];

const Stats = () => (
  <section className="pt-8 lg:pt-12 pb-16 lg:pb-20 bg-gradient-to-b from-ink via-charcoal to-ink relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map(({ icon: Icon, value, label }) => (
          <Card key={label} className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 notch-btn bg-sage text-ink flex items-center justify-center">
              <Icon className="text-xl" />
            </div>
            <div className="font-display text-3xl font-bold text-ivory mb-1">{value}</div>
            <div className="text-sm text-ivory/60 font-body">{label}</div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
