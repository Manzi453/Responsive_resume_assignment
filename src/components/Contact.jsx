import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaCommentDots, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Button } from './shared';

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
    
    // Clear error for this field when user starts typing
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
      color: 'from-blue-600 to-cyan-600',
      description: 'Professional network'
    },
    { 
      icon: FaGithub, 
      href: 'https://github.com/Manzi453?tab=repositories', 
      label: 'GitHub', 
      color: 'from-cyan-600 to-blue-600',
      description: 'Code repositories'
    },
   
  ];

  const FormField = ({ label, name, type = 'text', placeholder, required = false, rows = null, icon: Icon }) => (
    <div className="relative">
      {Icon && (
        <div className="absolute left-4 top-4 text-gray-400">
          <Icon className="text-lg" />
        </div>
      )}
      <label 
        htmlFor={name} 
        className="block text-gray-200 font-semibold mb-2 text-sm"
      >
        {label} {required && <span className="text-cyan-400">*</span>}
      </label>
      {rows ? (
        <textarea
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          rows={rows}
          required={required}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none bg-gray-700/50 text-white placeholder-gray-400 ${
            formErrors[name]
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-600 focus:ring-cyan-500'
          } ${Icon ? 'pl-12' : ''}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          required={required}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 bg-gray-700/50 text-white placeholder-gray-400 ${
            formErrors[name] 
              ? 'border-cyan-500 focus:ring-cyan-500' 
              : 'border-gray-600 focus:ring-cyan-500'
          } ${Icon ? 'pl-12' : ''}`}
          placeholder={placeholder}
        />
      )}
      {formErrors[name] && (
        <div className="mt-1 text-sm text-red-400 flex items-center gap-1">
          <FaExclamationTriangle className="text-xs" />
          {formErrors[name]}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Contact Info & Social */}
      <section id="contact" className="section-padding bg-gray-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-900/50 text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-cyan-700/30">
              <FaPhone className="inline mr-2" />
              Contact Information
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Reach Out Anytime</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Multiple ways to connect - choose what works best for you.
              I&apos;m always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className={`group bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center border border-gray-600 backdrop-blur-sm ${
                  info.href !== '#' ? 'cursor-pointer' : 'cursor-default'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'slide-up 0.8s ease-out forwards'
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{info.label}</h3>
                <p className="text-gray-300 font-medium mb-2">{info.text}</p>
                <p className="text-sm text-gray-400">{info.description}</p>
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Connect With Me</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Follow me on social media for updates, insights, and professional networking
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  style={{
                    animationDelay: `${index * 100 + 600}ms`,
                    animation: 'slide-up 0.8s ease-out forwards'
                  }}
                >
                  <div className="relative overflow-hidden bg-gray-700/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-600 backdrop-blur-sm">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="text-xl" />
                      </div>
                      <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        {social.label}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request a Service / Send a Message */}
      <section id="contact-form" ref={ref} className="section-padding bg-gray-900 relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Request a Service
              </span>
            </h3>
            <p className="text-gray-400 text-lg">
              Tell me about your project and I&apos;ll get back to you within 24-48 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-6 lg:p-10 space-y-6"
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
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                icon={FaEnvelope}
              />
            </div>

            <FormField
              label="Subject"
              name="subject"
              placeholder="What's this about? (e.g. Website project, Consultation)"
              required
              icon={FaCommentDots}
            />

            <FormField
              label="Message"
              name="message"
              placeholder="Describe your project, timeline, and budget..."
              required
              rows={5}
              icon={FaCommentDots}
            />

            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 text-cyan-400 bg-cyan-900/20 border border-cyan-700/30 rounded-lg px-4 py-3">
                <FaCheckCircle />
                Thanks! Your message has been sent — I&apos;ll be in touch soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-400 bg-red-900/20 border border-red-700/30 rounded-lg px-4 py-3">
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
    </>
  );
};

export default Contact;
