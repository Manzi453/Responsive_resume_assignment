import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBriefcase, FaTag } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Button, CircuitBackground } from './shared';
import { SERVICES } from '../constants/services';

const ServiceCard = ({ service, index, isVisible }) => {
  const Icon = service.icon;
  const isBusiness = service.register === 'business';

  return (
    <div
      className="notch-card bg-charcoal border border-ivory/10 p-6 flex flex-col h-full transition-all duration-300 hover:border-ochre/40"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className={`w-14 h-14 notch-btn flex items-center justify-center mb-4 ${
          isBusiness ? 'bg-ochre text-ink' : 'bg-sage text-ink'
        }`}
      >
        <Icon className="text-2xl" />
      </div>

      <h3 className="font-display text-xl font-bold text-ivory mb-2">{service.title}</h3>
      <p className="text-ivory/60 leading-relaxed mb-4 font-body">{service.description}</p>

      <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 mb-4 bg-gold/15 text-gold text-sm font-semibold border border-gold/30">
        <FaTag className="text-xs" />
        {service.startingAt}
      </div>

      <ul className="space-y-2 mb-6 flex-1">
        {service.deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ivory/60 font-body">
            <span className={`w-1.5 h-1.5 mt-1.5 rounded-full flex-shrink-0 ${isBusiness ? 'bg-ochre' : 'bg-sage'}`}></span>
            {item}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        state={{ subject: `${service.title} Inquiry` }}
        className={`inline-flex items-center justify-center gap-2 px-4 py-2 notch-btn font-semibold transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal ${
          isBusiness ? 'bg-ochre text-ink hover:bg-[#2578b3]' : 'bg-sage text-ink hover:bg-[#4d948d]'
        }`}
      >
        Request This Service
        <FaArrowRight className="text-sm" />
      </Link>
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" ref={ref} className="section-padding bg-gradient-to-b from-ink via-charcoal to-ink relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <CircuitBackground />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-ochre/15 text-gold text-sm font-semibold mb-4 border border-ochre/30">
            <FaBriefcase className="inline mr-2" />
            Services
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-ivory">
            What I Build
          </h2>
          <p className="text-ivory/60 text-lg max-w-3xl mx-auto font-body">
            Pick a category, or describe the project — pricing is scoped to what you actually need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-ivory/60 mb-4 font-body">Not sure which category fits? Tell me about the project and I&apos;ll help scope it.</p>
          <Button to="/contact" size="none" className="px-6 py-3">
            Get In Touch
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
