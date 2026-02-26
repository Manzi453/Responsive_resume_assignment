import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaCommentDots, FaClock, FaCheckCircle, FaExclamationTriangle, FaWhatsapp } from 'react-icons/fa';

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
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:manziivan453@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client with pre-filled data
      window.location.href = mailtoLink;
      
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
      href: 'https://maps.google.com/?q=Kigali,Rwanda',
      description: 'Based in Kigali, open to remote'
    }
  ];

  const socialLinks = [
    { 
      icon: FaLinkedin, 
      href: 'https://www.linkedin.com/in/manzi-ya-musana-ivan-327597346/?isSelfProfile=true',
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
