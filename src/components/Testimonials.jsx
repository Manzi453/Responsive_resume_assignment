import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Section, Card } from './shared';

// TODO: replace each slot below with a real client testimonial once
// collected — { quote, name, role, company }. Do not fill these with
// invented quotes or names in the meantime; the empty state below is
// intentional and honest about not having real testimonials yet.
const TESTIMONIAL_SLOTS = 3;

const Testimonials = () => (
  <Section
    id="testimonials"
    variant="dark"
    title="What Clients Say"
    subtitle="Testimonials from recent client work — added here as they come in."
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: TESTIMONIAL_SLOTS }).map((_, index) => (
        // TODO: swap this placeholder Card for a real testimonial (see note above)
        <Card key={index} hover={false} className="text-center">
          <FaQuoteLeft className="text-ochre/40 text-2xl mx-auto mb-4" />
          <p className="text-ivory/50 text-sm font-body italic">
            Client testimonial coming soon
          </p>
        </Card>
      ))}
    </div>
  </Section>
);

export default Testimonials;
