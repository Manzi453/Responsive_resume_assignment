import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaLandmark, FaServer, FaMobile, FaRobot, FaTerminal, FaArrowRight, FaBriefcase } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Button } from './shared';

const services = [
  {
    icon: FaGlobe,
    title: 'Web Application Development',
    description: 'Custom, responsive web apps built with React, Next.js, and Tailwind CSS — from marketing sites to interactive dashboards.',
    deliverables: ['Responsive, production-ready frontend', 'Component-driven architecture', 'Performance & SEO best practices'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: FaLandmark,
    title: 'Corporate & Business Websites',
    description: 'Professional websites for companies and advisory firms that need a credible digital presence — the same work built and maintained for RG Partners and its affiliates.',
    deliverables: ['Brand-consistent design', 'Multi-page structure & content sections', 'Ongoing maintenance & updates'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaServer,
    title: 'Backend & API Development',
    description: 'Secure, well-structured backend services and REST APIs using Node.js/Express or Java Spring Boot with PostgreSQL.',
    deliverables: ['RESTful API design', 'Authentication & authorization (JWT)', 'Database schema & integration'],
    color: 'from-cyan-600 to-blue-600',
  },
  {
    icon: FaMobile,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps built with Flutter, from concept to deployment on Android, iOS, and web.',
    deliverables: ['Cross-platform Flutter builds', 'Firebase backend integration', 'Real-time data sync'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    icon: FaRobot,
    title: 'Data & Machine Learning Solutions',
    description: 'ML pipelines and model-serving APIs — from data preprocessing to deployment, containerized and load-tested.',
    deliverables: ['Model training & evaluation', 'FastAPI/Streamlit serving layer', 'Docker containerization'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: FaTerminal,
    title: 'Automation & DevOps',
    description: 'Scripts and workflows that cut manual ops work — backups, monitoring, and deployment automation for Linux environments.',
    deliverables: ['Bash automation scripts', 'CI/CD pipeline setup', 'System monitoring & backups'],
    color: 'from-blue-500 to-cyan-500',
  },
];

const ServiceCard = ({ service, index, isVisible }) => {
  const Icon = service.icon;

  return (
    <div
      className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-700/30"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className={`bg-gradient-to-r ${service.color} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4">
            <Icon className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col h-[calc(100%-7.5rem)]">
        <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

        <ul className="space-y-2 mb-6 flex-1">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 mt-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          state={{ subject: `${service.title} Inquiry` }}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${service.color} brightness-50 text-white font-semibold rounded-lg hover:shadow-lg hover:brightness-[0.6] transition-all duration-300 transform hover:scale-105`}
        >
          Request This Service
          <FaArrowRight className="text-sm" />
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" ref={ref} className="section-padding bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-900/50 text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-cyan-700/30">
            <FaBriefcase className="inline mr-2" />
            Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">What I Can Build For You</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Freelance and contract development, from a single landing page to a full-stack
            application. Pick what fits your project, or just describe what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} isVisible={isVisible} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Not sure which category fits? Tell me about the project and I&apos;ll help scope it.</p>
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
