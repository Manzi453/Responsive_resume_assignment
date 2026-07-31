import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Button, CircuitBackground } from './shared';

const NotFound = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gradient-to-b from-ink via-charcoal to-ink relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <CircuitBackground />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-display text-7xl lg:text-8xl font-bold mb-4 text-ochre">
          404
        </h1>
        <p className="text-xl text-ivory/70 mb-8 font-body">This page doesn&apos;t exist.</p>
        <Button to="/">
          <FaHome />
          Back Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
