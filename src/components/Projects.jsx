import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaGraduationCap, FaLock, FaLeaf, FaTerminal, FaServer, FaGlobe, FaReact, FaLandmark, FaCoins, FaGlassCheers, FaRobot, FaSchool, FaMapMarkedAlt, FaPiggyBank, FaTasks, FaChartLine } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Responsive Resume Portfolio',
      description: 'Dynamic, fully responsive portfolio website showcasing professional achievements with modern design, smooth animations, and optimal user experience across all devices.',
      longDescription: 'Sophisticated web application featuring responsive design principles, interactive components, and seamless performance. Built with cutting-edge frontend technologies to create an impressive digital presence.',
      link: 'https://responsive-resume-assign-git-54c6f9-manziivan453-9405s-projects.vercel.app/',
      linkText: 'Live Demo',
      tags: ['React', 'Responsive Design', 'Portfolio', 'Web Development'],
      icon: FaGlobe,
      color: 'from-cyan-500 to-blue-500',
      category: 'web',
      featured: true,
      status: 'live',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'React Router'],
      highlights: ['Fully responsive layout', 'Smooth animations', 'Modern UI/UX', 'Cross-device compatibility']
    },
    {
      title: 'AAA Corporate Trustees',
      description: 'Corporate secretarial, trustee, and governance advisory website for AAA Corporate Trustees, part of the RG Partners financial advisory group in East Africa.',
      longDescription: 'Client website built for RG Partners\' corporate trustee and governance advisory arm, presenting trust administration, regulatory compliance, and board governance services to institutional clients.',
      link: 'https://aaatrustees.rw',
      linkText: 'Live Demo',
      tags: ['React', 'TypeScript', 'Client Work', 'Advisory'],
      icon: FaLandmark,
      color: 'from-cyan-500 to-blue-500',
      category: 'web',
      featured: true,
      status: 'live',
      technologies: ['React', 'TypeScript', 'React Router', 'Tailwind CSS', 'Framer Motion'],
      highlights: ['Corporate governance & trustee services showcase', 'Built for RG Partners group', 'Animated, map-driven UI']
    },
    {
      title: 'AAA Financiers',
      description: 'Investment advisory website for AAA Financiers, specialising in capital raising and financial structuring for growth-stage businesses across African markets.',
      longDescription: 'Client website built for RG Partners\' investment advisory arm, presenting capital raising, investment advisory, and financial structuring services with a professional, accessible interface.',
      link: 'https://aaafinanciers.rw/',
      linkText: 'Live Demo',
      tags: ['React', 'TypeScript', 'Client Work', 'Finance'],
      icon: FaCoins,
      color: 'from-blue-500 to-cyan-500',
      category: 'web',
      featured: true,
      status: 'live',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Radix UI'],
      highlights: ['Investment advisory & capital raising showcase', 'Built for RG Partners group', 'Accessible, component-driven UI']
    },
    {
      title: 'Nziza Memorable Event',
      description: 'Production website for a corporate events and conferences studio in Kigali, covering award nights, product launches, summits, and hybrid sessions.',
      longDescription: 'Freelance client site built with Next.js 14 and Tailwind CSS, with dedicated pages for services, portfolio, about, and contact to support a corporate events and conferences business.',
      link: 'https://event-plan-vert.vercel.app',
      linkText: 'Live Demo',
      tags: ['Next.js', 'Tailwind CSS', 'Client Work', 'Events'],
      icon: FaGlassCheers,
      color: 'from-cyan-600 to-blue-600',
      category: 'web',
      featured: false,
      status: 'live',
      technologies: ['Next.js', 'React', 'Tailwind CSS'],
      highlights: ['Multi-page site with App Router', 'Services & portfolio showcase', 'Static export for fast delivery']
    },
    {
      title: 'Smart RwandaBill – Frontend',
      description: 'Cutting-edge responsive interface for RwandaBill digital billing platform, delivering seamless user experience through modern React architecture and intuitive design patterns.',
      longDescription: 'Sophisticated frontend application built with React and Tailwind CSS, providing an elegant and efficient interface for digital billing management, payment tracking, and seamless backend integration.',
      link: 'https://smart-rwanda-bill-frontend1-ofcv.vercel.app/',
      linkText: 'Live Demo',
      tags: ['React', 'Tailwind CSS', 'UI/UX', 'Frontend'],
      icon: FaReact,
      color: 'from-cyan-500 to-blue-600',
      category: 'fullstack',
      featured: false,
      status: 'active',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'REST API', 'Responsive Design'],
      highlights: ['Clean and responsive UI', 'Reusable React components', 'API integration with backend services']
    },
    {
      title: 'Smart RwandaBill – Backend',
      description: 'Enterprise-grade backend architecture powering RwandaBill digital billing ecosystem, featuring robust API design, secure payment processing, and scalable data management solutions.',
      longDescription: 'High-performance backend service engineered with Node.js and Express, delivering secure RESTful APIs for comprehensive billing management, payment processing, user authentication, and real-time data synchronization.',
      link: 'https://github.com/Manzi453/Smart_RwandaBill_Backend',
      linkText: 'View Backend Repository',
      tags: ['Node.js', 'Express', 'REST API', 'Backend'],
      icon: FaServer,
      color: 'from-slate-700 to-gray-900',
      category: 'fullstack',
      featured: true,
      status: 'active',
      technologies: ['Node.js', 'PostgreSQL', 'JWT Authentication', 'REST API'],
      highlights: ['Secure RESTful API', 'Bill and payment management logic', 'JWT-based authentication']
    },
    {
      title: 'Agri-Link App',
      description: 'Agricultural platform concept connecting farmers with market data, weather intelligence, and community forums for improved farming productivity.',
      longDescription: 'A digital ecosystem aimed at bridging information gaps between farmers and critical resources, enabling data-driven farming decisions and improved market access.',
      link: 'https://agri-linkk.netlify.app/',
      linkText: 'Live Demo',
      tags: ['React', 'Responsive', 'Web Design', 'Agriculture'],
      icon: FaLeaf,
      color: 'from-cyan-600 to-blue-500',
      category: 'web',
      featured: false,
      status: 'live',
      technologies: ['React', 'Tailwind CSS', 'REST API'],
      highlights: ['Market data & weather integration concept', 'Community forums', 'Responsive design']
    },
    {
      title: 'Butterfly & Moth Classifier — MLOps Pipeline',
      description: '100-species image classifier with a full predict → upload → retrain loop, built as an end-to-end MLOps pipeline rather than a notebook-only model.',
      longDescription: 'EfficientNetB0 transfer-learning classifier served through a FastAPI backend and Streamlit UI, containerized with Docker, and load-tested with Locust to compare single vs. multi-container throughput.',
      link: 'https://github.com/Manzi453/Summative_ML_Pipelin_butterfly-mlops',
      linkText: 'View on GitHub',
      tags: ['Machine Learning', 'MLOps', 'FastAPI', 'Docker'],
      icon: FaRobot,
      color: 'from-blue-600 to-cyan-600',
      category: 'data-ai',
      featured: true,
      status: 'completed',
      technologies: ['Python', 'TensorFlow/Keras', 'FastAPI', 'Streamlit', 'Docker', 'Locust'],
      highlights: ['EfficientNetB0 transfer learning on 100 species', 'Predict/upload/retrain loop via API + UI', 'Load-tested single vs. multi-container scaling']
    },
    {
      title: 'School Management System',
      description: 'Comprehensive school management system centralizing administrative, academic, and communication workflows for Admin, Teacher, Student, and Parent roles.',
      longDescription: 'Full-featured platform covering enrollment, class scheduling, attendance tracking, grading, fee management, assignment sharing, and library management for a school environment.',
      link: 'https://github.com/Manzi453/School_System',
      linkText: 'View on GitHub',
      tags: ['Education', 'Full-Stack', 'Management System'],
      icon: FaSchool,
      color: 'from-cyan-500 to-blue-500',
      category: 'fullstack',
      featured: false,
      status: 'completed',
      technologies: ['JavaScript', 'Node.js'],
      highlights: ['Role-based access for 4 user types', 'Attendance, grading & fee management', 'Library and resource sharing']
    },
    {
      title: 'Kigali Directory',
      description: 'Flutter mobile app for discovering and managing local businesses, services, and points of interest across Kigali, Rwanda.',
      longDescription: 'Cross-platform directory app with category filtering, an interactive OpenStreetMap view, user-submitted listings, and email/password authentication with verification.',
      link: 'https://github.com/Manzi453/Kigali_Directory',
      linkText: 'View on GitHub',
      tags: ['Flutter', 'Dart', 'Mobile', 'Maps'],
      icon: FaMapMarkedAlt,
      color: 'from-blue-500 to-cyan-500',
      category: 'mobile',
      featured: false,
      status: 'completed',
      technologies: ['Flutter', 'Dart', 'OpenStreetMap', 'Firebase Auth'],
      highlights: ['Category-filtered local business directory', 'Interactive map view', 'User-submitted listings with sharing']
    },
    {
      title: 'Community Savings Groups (CSG-DMS)',
      description: 'Digital management system replacing paper-based community savings group records — the informal savings model relied on across Rwanda and wider Africa.',
      longDescription: 'A digital transformation concept for community savings groups (tontines/stokvels), aimed at reducing disputes over contributions and loan repayments through transparent, shared digital records.',
      link: null,
      linkText: 'Private Repository',
      tags: ['Fintech', 'Social Impact', 'TypeScript'],
      icon: FaPiggyBank,
      color: 'from-cyan-600 to-blue-600',
      category: 'fullstack',
      featured: false,
      status: 'completed',
      technologies: ['TypeScript', 'React'],
      highlights: ['Digitizes informal savings group record-keeping', 'Targets 30 districts of Rwanda', 'Transparent contribution & repayment tracking']
    },
    {
      title: 'Habitat App',
      description: 'Cross-platform habit and goal tracking app with a Firebase backend and real-time sync across devices.',
      longDescription: 'Flutter habit/goal tracker refactored with Riverpod state management, supporting habit and goal CRUD, light/dark themes, and real-time Firestore sync across Android, iOS, and web.',
      link: null,
      linkText: 'Private Repository',
      tags: ['Flutter', 'Firebase', 'Mobile'],
      icon: FaTasks,
      color: 'from-blue-500 to-cyan-600',
      category: 'mobile',
      featured: false,
      status: 'completed',
      technologies: ['Flutter', 'Dart', 'Riverpod', 'Firebase'],
      highlights: ['Real-time habit & goal sync via Firestore', 'Riverpod state management', 'Cross-platform: Android, iOS, web, desktop']
    },
    {
      title: 'Academic ALU Platform',
      description: 'Academic management app concept for course tracking, assessments, and student support, built with Flutter.',
      longDescription: 'A mobile academic platform prototype aimed at streamlining educational processes and giving administrators tools for academic management.',
      link: 'https://github.com/Manzi453/academic_alu',
      linkText: 'View on GitHub',
      tags: ['Education', 'Academic', 'Mobile'],
      icon: FaGraduationCap,
      color: 'from-blue-500 to-cyan-500',
      category: 'mobile',
      featured: false,
      status: 'completed',
      technologies: ['Flutter', 'Dart'],
      highlights: ['Academic assessment management', 'Structured course workflows', 'Student-focused UI']
    },
    {
      title: 'Shell Scripting Project',
      description: 'Automation suite leveraging Bash scripting to streamline system administration, deployment workflows, and infrastructure monitoring for Linux environments.',
      longDescription: 'Shell scripting exercises covering automated backups, log analysis, and health monitoring, aimed at reducing manual system administration work.',
      link: 'https://github.com/Manzi453/alu-shell',
      linkText: 'View on GitHub',
      tags: ['Bash', 'Automation', 'Linux', 'DevOps'],
      icon: FaTerminal,
      color: 'from-blue-500 to-cyan-500',
      category: 'automation',
      featured: false,
      status: 'completed',
      technologies: ['Bash', 'Shell Scripting', 'Linux', 'Cron Jobs'],
      highlights: ['Automated system monitoring', 'Backup management', 'Performance optimization']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode },
    { id: 'web', name: 'Web Apps', icon: FaGlobe },
    { id: 'fullstack', name: 'Full-Stack', icon: FaDatabase },
    { id: 'mobile', name: 'Mobile', icon: FaMobile },
    { id: 'data-ai', name: 'Data & AI', icon: FaChartLine },
    { id: 'automation', name: 'Automation', icon: FaTerminal }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectCard = ({ project, index }) => {
    const Icon = project.icon;
    
    return (
      <div 
        className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-700/30"
        style={{
          animationDelay: `${index * 100}ms`,
          animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}
        
        {/* Status indicator */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-lg ${
            project.status === 'live' ? 'bg-cyan-500 text-white' :
            project.status === 'completed' ? 'bg-blue-500 text-white' :
            project.status === 'development' ? 'bg-cyan-600 text-white' :
            'bg-gray-500 text-white'
          }`}>
            {project.status === 'live' ? '🔴 Live' :
             project.status === 'completed' ? '✅ Completed' :
             project.status === 'development' ? '🚧 In Development' :
             '📋 Planning'}
          </span>
        </div>
        
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Project header */}
        <div className={`bg-gradient-to-r ${project.color} p-6 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute inset-0 bg-black/35"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4">
              <Icon className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/80 text-sm">{project.longDescription}</p>
          </div>
        </div>
        
        {/* Project content */}
        <div className="p-6 relative z-10">
          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-200 mb-3 text-sm">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full hover:bg-gray-600 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs font-medium rounded-full">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
          
          {/* Highlights */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-200 mb-3 text-sm">Key Features</h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                <li key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Progress bar for development projects */}
          {project.status === 'development' && project.progress && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-300">Development Progress</span>
                <span className="text-sm font-bold text-cyan-400">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${project.progress}%` : '0%',
                    transitionDelay: `${index * 100 + 500}ms`
                  }}
                ></div>
              </div>
            </div>
          )}
          {/* Action buttons */}
          <div className="flex items-center justify-between">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} brightness-50 text-white font-semibold rounded-lg hover:shadow-lg hover:brightness-[0.6] transition-all duration-300 transform hover:scale-105`}
              >
                {project.link.includes('github') ? <FaGithub /> : <FaExternalLinkAlt />}
                {project.linkText}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 font-medium rounded-lg border border-gray-700/50">
                <FaLock />
                {project.linkText}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" ref={ref} className="section-padding bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-900/50 text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-cyan-700/30">
            <FaCode className="inline mr-2" />
            Portfolio Showcase
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore my diverse portfolio of projects spanning web applications, automation tools, 
            and full-stack solutions built with modern technologies and best practices
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg transform scale-105'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/30'
                }`}
              >
                <Icon className="text-sm" />
                {category.name}
              </button>
            );
          })}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        
        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700/30">
              <FaCode className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <FaGithub />
            <span className="font-semibold">View more on GitHub</span>
            <FaExternalLinkAlt />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
