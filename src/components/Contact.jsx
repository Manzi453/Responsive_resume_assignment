import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaCommentDots, FaClock, FaCheckCircle, FaExclamationTriangle, FaTwitter, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      // Simulate form submission - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
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
      href: '#',
      description: 'Based in Kigali, open to remote'
    }
  ];

  const socialLinks = [
    { 
      icon: FaLinkedin, 
      href: 'www.linkedin.com/in/manzi-ya-musana-ivan-327597346',
      label: 'LinkedIn', 
      color: 'from-blue-600 to-blue-700',
      description: 'Professional network'
    },
    { 
      icon: FaGithub, 
      href: 'https://github.com/Manzi453?tab=repositories', 
      label: 'GitHub', 
      color: 'from-gray-700 to-gray-900',
      description: 'Code repositories'
    },
    { 
      icon: FaTwitter, 
      href: 'https://twitter.com', 
      label: 'Twitter', 
      color: 'from-sky-500 to-sky-600',
      description: 'Follow me'
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/__manzii/', 
      label: 'Instagram', 
      color: 'from-pink-500 to-purple-600',
      description: 'Personal updates'
    },
    { 
      icon: FaWhatsapp, 
      href: 'https://wa.me/250787734901', 
      label: 'WhatsApp', 
      color: 'from-green-500 to-green-600',
      description: 'Quick chat'
    },
    { 
      icon: FaTelegram, 
      href: 'https://t.me', 
      label: 'Telegram', 
      color: 'from-blue-500 to-blue-600',
      description: 'Message me'
    }
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
        {label} {required && <span className="text-red-400">*</span>}
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
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-600 focus:ring-cyan-500'
          } ${Icon ? 'pl-12' : ''}`}
          placeholder={placeholder}
        />
      )}
      {formErrors[name] && (
        <div className="mt-1 text-sm text-red-500 flex items-center gap-1">
          <FaExclamationTriangle className="text-xs" />
          {formErrors[name]}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div 
            className="text-center mb-16"
            style={{
              animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
              opacity: isVisible ? 1 : 0
            }}
          >
            <div className="inline-block px-4 py-2 bg-cyan-900/50 text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-cyan-700/30">
              <FaEnvelope className="inline mr-2" />
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Let's Connect</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Ready to bring your ideas to life or explore collaboration opportunities? I'm excited to discuss your project and create something extraordinary together. 
              Reach out and let's transform your vision into reality!
            </p>
          </div>
          
          {/* Success/Error Messages */}
          {submitStatus && (
            <div 
              className={`max-w-2xl mx-auto mb-8 p-4 rounded-lg flex items-center gap-3 ${
                submitStatus === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}
            >
              {submitStatus === 'success' ? (
                <>
                  <FaCheckCircle className="text-xl" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </>
              ) : (
                <>
                  <FaExclamationTriangle className="text-xl" />
                  <div>
                    <p className="font-semibold">Something went wrong!</p>
                    <p className="text-sm">Please try again later or contact me directly.</p>
                  </div>
                </>
              )}
            </div>
          )}
          
          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit} 
            className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-700"
            style={{
              animationDelay: '200ms',
              animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
              opacity: isVisible ? 1 : 0
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <FormField
                label="Your Name"
                name="name"
                placeholder="John Doe"
                required
                icon={FaUser}
              />
              <FormField
                label="Your Email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                icon={FaEnvelope}
              />
            </div>

            <div className="mb-6">
              <FormField
                label="Subject"
                name="subject"
                placeholder="Project inquiry, collaboration, etc."
                required
                icon={FaCommentDots}
              />
            </div>

            <div className="mb-6">
              <FormField
                label="Your Message"
                name="message"
                rows="6"
                placeholder="Tell me about your project, ask questions, or just say hello..."
                required
                icon={FaCommentDots}
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FaClock />
                <span>I typically respond within 24 hours</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </section>

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
              <span className="gradient-text">Reach Out Anytime</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Multiple ways to connect - choose what works best for you. 
              I'm always open to discussing new projects, creative ideas, or opportunities.
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-3xl mx-auto">
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
    </>
  );
};

export default Contact;
