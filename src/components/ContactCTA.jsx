import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { LedgerLine, Button } from './shared';

const ContactCTA = () => (
  <section className="section-padding bg-charcoal relative overflow-hidden">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <span className="font-body text-sm font-bold uppercase tracking-widest text-ochre">
        Let&apos;s Build Something
      </span>
      <h2 className="font-display text-3xl lg:text-4xl font-bold text-ivory mt-3 mb-4">
        Have a project in mind?
      </h2>
      <p className="text-ivory/70 text-lg mb-6 font-body">
        Tell me about it — I reply within 24&ndash;48 hours with next steps, not a sales pitch.
      </p>

      <div className="max-w-xs mx-auto mb-8">
        <LedgerLine flip />
      </div>

      <Button to="/contact">
        <FaEnvelope />
        Start a Project
      </Button>
    </div>
  </section>
);

export default ContactCTA;
