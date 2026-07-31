import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaCommentDots, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Button, CircuitBackground } from './shared';

const FOCUS_RING = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal';

const FormField = ({ label, name, type = 'text', placeholder, required = false, rows = null, icon: Icon, value, onChange, error }) => (
  <div className="relative">
    {Icon && (
      <div className="absolute left-4 top-11 text-ivory/40">
        <Icon className="text-lg" />
      </div>
    )}
    <label
      htmlFor={name}
      className="block text-ivory/90 font-semibold mb-2 text-sm font-body"
    >
      {label} {required && <span className="text-gold">*</span>}
    </label>
    {rows ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className={`w-full px-4 py-3 border transition-all duration-300 resize-none bg-ink/50 text-ivory placeholder-ivory/40 font-body ${FOCUS_RING} ${
          error ? 'border-red-500' : 'border-ivory/15'
        } ${Icon ? 'pl-12' : ''}`}
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 border transition-all duration-300 bg-ink/50 text-ivory placeholder-ivory/40 font-body ${FOCUS_RING} ${
          error ? 'border-red-500' : 'border-ivory/15'
        } ${Icon ? 'pl-12' : ''}`}
        placeholder={placeholder}
      />
    )}
    {error && (
      <div className="mt-1 text-sm text-red-400 flex items-center gap-1 font-body">
        <FaExclamationTriangle className="text-xs" />
        {error}
      </div>
    )}
  </div>
);

const Contact = () => {
  const location = useLocation();
  // Populated when arriving via a "Request This Service" link from /services
  const prefilledSubject = location.state?.subject || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefilledSubject,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const { ref, isVisible } = useScrollReveal();

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'manziivan453@gmail.com',
      label: 'Email',
      href: 'mailto:manziivan453@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: FaPhone,
      text: '+250 787 734 901',
      label: 'Phone',
      href: 'tel:+250787734901',
      description: 'Available for calls'
    },
    {
      icon: FaMapMarkerAlt,
      text: 'Kigali, Rwanda',
      label: 'Location',
      href: 'https://maps.google.com/?q=Kigali,Rwanda',
      description: 'Based in Kigali, open to remote'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/manzi-ya-musana-ivan-327597346/?isSelfProfile=true',
      label: 'LinkedIn',
      description: 'Professional network'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/Manzi453?tab=repositories',
      label: 'GitHub',
      description: 'Code repositories'
    },
  ];

  return (
    <>
      <section id="contact-form" ref={ref} className="section-padding bg-ink relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <CircuitBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-ivory">
              Request a Service
            </h3>
            <p className="text-ivory/60 text-lg font-body">
              Tell me about your project and I&apos;ll get back to you within 24-48 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="notch-card bg-charcoal border border-ivory/10 p-6 lg:p-10 space-y-6"
            style={{
              animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
              opacity: isVisible ? 1 : 0
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Name"
                name="name"
                placeholder="Your full name"
                required
                icon={FaUser}
                value={formData.name}
                onChange={handleChange}
                error={formErrors.name}
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                icon={FaEnvelope}
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
              />
            </div>

            <FormField
              label="Subject"
              name="subject"
              placeholder="What's this about? (e.g. Website project, Consultation)"
              required
              icon={FaCommentDots}
              value={formData.subject}
              onChange={handleChange}
              error={formErrors.subject}
            />

            <FormField
              label="Message"
              name="message"
              placeholder="Describe your project, timeline, and budget..."
              required
              rows={5}
              icon={FaCommentDots}
              value={formData.message}
              onChange={handleChange}
              error={formErrors.message}
            />

            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 text-ivory bg-sage/10 border border-sage/30 px-4 py-3 font-body">
                <FaCheckCircle className="text-sage" />
                Thanks! Your message has been sent — I&apos;ll be in touch soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-400 bg-red-900/20 border border-red-700/30 px-4 py-3 font-body">
                <FaExclamationTriangle />
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
              <FaPaperPlane />
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </Button>
          </form>
        </div>
      </section>

      <section id="contact" className="section-padding bg-charcoal relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-ochre/15 text-gold text-sm font-semibold mb-4 border border-ochre/30">
              <FaPhone className="inline mr-2" />
              Contact Information
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-ivory">
              Reach Out Anytime
            </h2>
            <p className="text-ivory/70 text-lg max-w-3xl mx-auto font-body">
              Multiple ways to connect - choose what works best for you.
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                className={`group notch-card bg-ink/40 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center border border-ivory/10 hover:border-ochre/30 ${FOCUS_RING}`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'slide-up 0.8s ease-out forwards'
                }}
              >
                <div className="w-16 h-16 bg-ochre notch-btn flex items-center justify-center text-ink text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon />
                </div>
                <h3 className="font-display font-bold text-ivory text-lg mb-2">{info.label}</h3>
                <p className="text-ivory/80 font-medium mb-2 font-body">{info.text}</p>
                <p className="text-sm text-ivory/60 font-body">{info.description}</p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <h3 className="font-display text-2xl font-bold text-ivory mb-4">Connect With Me</h3>
            <p className="text-ivory/70 mb-8 max-w-2xl mx-auto font-body">
              Follow me on social media for updates, insights, and professional networking
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative ${FOCUS_RING}`}
                  style={{
                    animationDelay: `${index * 100 + 600}ms`,
                    animation: 'slide-up 0.8s ease-out forwards'
                  }}
                >
                  <div className="relative overflow-hidden notch-card bg-ink/40 p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-ivory/10 hover:border-ochre/30">
                    <div className="w-12 h-12 bg-sage notch-btn flex items-center justify-center text-ink mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <social.icon className="text-xl" />
                    </div>
                    <p className="text-sm font-medium text-ivory/70 group-hover:text-ivory transition-colors duration-300 font-body">
                      {social.label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
