import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaGraduationCap, FaLock, FaLeaf, FaTerminal, FaServer, FaGlobe, FaUsers, FaCalendarAlt , FaReact} from 'react-icons/fa';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Responsive Resume Portfolio',
      description: 'Dynamic, fully responsive portfolio website showcasing professional achievements with modern design, smooth animations, and optimal user experience across all devices.',
      longDescription: 'Sophisticated web application featuring responsive design principles, interactive components, and seamless performance. Built with cutting-edge frontend technologies to create an impressive digital presence.',
      link: 'https://responsive-resume-assign-git-54c6f9-manziivan453-9405s-projects.vercel.app/',
      linkText: 'Live Demo',
      tags: ['React', 'Responsive Design', 'Portfolio', 'Web Development'],
      icon: FaGlobe,
      color: 'from-purple-500 to-pink-500',
      category: 'web',
      featured: true,
      status: 'live',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Responsive Design'],
      highlights: ['Fully responsive layout', 'Smooth animations', 'Modern UI/UX', 'Cross-device compatibility'],
      liveVisitors: '1K+',
      lastUpdated: '2024-02-26'
    },
    {
      title: 'Shell Scripting Project',
      description: 'Advanced automation suite leveraging Bash scripting to streamline system administration, deployment workflows, and infrastructure monitoring. Implements intelligent backup systems, log analysis, and proactive health monitoring for Linux environments.',
      longDescription: 'Enterprise-grade shell scripting solution that transforms manual system administration into automated workflows, significantly improving operational efficiency and reducing human error in production environments.',
      link: 'https://github.com/Manzi453/alu-shell',
      linkText: 'View on GitHub',
      tags: ['Bash', 'Automation', 'Linux', 'DevOps'],
      icon: FaTerminal,
      color: 'from-green-500 to-emerald-500',
      category: 'automation',
      featured: true,
      status: 'completed',
      technologies: ['Bash', 'Shell Scripting', 'Linux', 'Cron Jobs', 'System Administration'],
      highlights: ['Automated system monitoring', 'Backup management', 'Performance optimization'],
      githubStars: 15,
      lastUpdated: '2024-01-15'
    },
    {
      title: 'Agri-Link App',
      description: 'Revolutionary agricultural platform connecting farmers with real-time market data, weather intelligence, and expert agricultural guidance. Features comprehensive community forums, crop management tools, and direct market access for enhanced farming productivity.',
      longDescription: 'A comprehensive digital ecosystem transforming agriculture by bridging information gaps between farmers and critical resources, enabling data-driven farming decisions and improved market access.',
      link: 'https://agri-linkk.netlify.app/',
      linkText: 'Live Demo',
      tags: ['React', 'Responsive', 'Web Design', 'Agriculture'],
      icon: FaLeaf,
      color: 'from-green-600 to-lime-500',
      category: 'web',
      featured: true,
      status: 'live',
      technologies: ['React', 'Tailwind CSS', 'REST API', ],
      highlights: ['Real-time market data', 'Weather integration', 'Community forums'],
      liveVisitors: '500+',
      lastUpdated: '2024-02-01'
    },
    {
      title: 'Academic ALU Platform',
      description: 'Sophisticated academic management system revolutionizing educational workflows through intelligent course tracking, automated assessments, and comprehensive student support mechanisms. Designed for scalability and seamless academic administration.',
      longDescription:
          'Next-generation academic platform engineered to streamline educational processes, enhance student engagement, and provide administrators with powerful tools for effective academic management and data-driven insights.',
      link: 'https://github.com/Manzi453/academic_alu',
      linkText: 'View on GitHub',
      tags: ['Education', 'Academic', 'Web App', 'Full-Stack'],
      icon: FaGraduationCap,
      color: 'from-blue-500 to-indigo-600',
      category: 'mobile',
      featured: false,
      status: 'development',
      technologies: [
        'Flutter',
        'Dart',

      ],
      highlights: [
        'Academic assessment management',
        'Structured course workflows',
        'Student-focused UI'
      ],
      progress: 70,
      estimatedLaunch: '2024-06-01'
    },
    {title: 'Smart RwandaBill – Frontend',
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
      technologies: [
        'React',
        'Tailwind CSS',
        'JavaScript',
        'REST API',
        'Responsive Design'
      ],
      highlights: [
        'Clean and responsive UI',
        'Reusable React components',
        'API integration with backend services',
        'Optimized user experience'
      ],
      progress: 85,
      estimatedLaunch: '2024-05-15'
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
      technologies: [
        'Node.js',
        'Postgresql',
        'JWT Authentication',
        'REST API'
      ],
      highlights: [
        'Secure RESTful API',
        'Bill and payment management logic',
        'JWT-based authentication',
        'Scalable backend architecture'
      ],
      progress: 80,
      estimatedLaunch: '2024-06-01'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode },
    { id: 'web', name: 'Web Apps', icon: FaGlobe },
    { id: 'fullstack', name: 'Full-Stack', icon: FaDatabase },
    { id: 'mobile', name: 'Mobile', icon: FaMobile },
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
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}
        
        {/* Status indicator */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-lg ${
            project.status === 'live' ? 'bg-green-500 text-white' :
            project.status === 'completed' ? 'bg-blue-500 text-white' :
            project.status === 'development' ? 'bg-yellow-500 text-white' :
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
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
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
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${project.progress}%` : '0%',
                    transitionDelay: `${index * 100 + 500}ms`
                  }}
                ></div>
              </div>
            </div>
          )}
          
          {/* Stats */}
          <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
            {project.githubStars && (
              <div className="flex items-center gap-1">
                <FaGithub className="text-gray-400" />
                <span>{project.githubStars} stars</span>
              </div>
            )}
            {project.liveVisitors && (
              <div className="flex items-center gap-1">
                <FaUsers className="text-gray-400" />
                <span>{project.liveVisitors} visitors</span>
              </div>
            )}
            {project.lastUpdated && (
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-gray-400" />
                <span>Updated {project.lastUpdated}</span>
              </div>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center justify-between">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                {project.link.includes('github') ? <FaGithub /> : <FaExternalLinkAlt />}
                {project.linkText}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 font-medium rounded-lg">
                <FaLock />
                {project.linkText}
              </span>
            )}
            
            {/* View details button */}
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300">
              View Details →
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
      
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
              <FaCode className="text-gray-500 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
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
