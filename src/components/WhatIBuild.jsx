import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Section, Card, Button } from './shared';
import { SERVICES } from '../constants/services';

const WhatIBuild = () => (
  <Section
    id="what-i-build"
    variant="default"
    title="What I Build"
    subtitle="Six categories of work, all scoped to what your business actually needs."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map(({ icon: Icon, title, description, register }) => {
        const isBusiness = register === 'business';
        return (
          <Card key={title}>
            <div
              className={`w-12 h-12 notch-btn flex items-center justify-center mb-4 ${
                isBusiness ? 'bg-ochre text-ink' : 'bg-sage text-ink'
              }`}
            >
              <Icon className="text-xl" />
            </div>
            <h3 className="font-display font-bold text-ivory text-lg mb-2">{title}</h3>
            <p className="text-sm text-ivory/60 leading-relaxed font-body">{description}</p>
          </Card>
        );
      })}
    </div>

    <div className="text-center mt-12">
      <Button to="/services" size="none" className="py-3 px-6">
        See All Services &amp; Pricing
        <FaArrowRight className="text-sm" />
      </Button>
    </div>
  </Section>
);

export default WhatIBuild;
