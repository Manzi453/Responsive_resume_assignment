import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaMobile, FaGraduationCap, FaLock, FaLeaf, FaTerminal, FaServer, FaGlobe, FaReact, FaLandmark, FaCoins, FaGlassCheers, FaRobot, FaSchool, FaMapMarkedAlt, FaPiggyBank, FaTasks, FaChartLine, FaSitemap } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Button, CircuitBackground } from './shared';

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'AAA Group',
      description: 'Company portal for RG Partners\' AAA Group, the central hub tying together AAA Corporate Trustees and AAA Financiers under one consistent brand.',
      longDescription: 'Group-level portal built with React, Next.js, and TypeScript, presenting RG Partners\' affiliated advisory companies and maintaining consistent branding across the group\'s digital presence.',
      link: 'https://www.aafricaa.com',
      linkText: 'Live Demo',
      icon: FaSitemap,
      category: 'web',
      featured: true,
      status: 'live',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      highlights: ['Central hub for the RG Partners group', 'Links AAA Corporate Trustees & AAA Financiers', 'Consistent branding across group sites']
    },
    {
      title: 'AAA Corporate Trustees',
      description: 'Corporate secretarial, trustee, and governance advisory website for AAA Corporate Trustees, part of the RG Partners financial advisory group in East Africa.',
      longDescription: 'Client website built for RG Partners\' corporate trustee and governance advisory arm, presenting trust administration, regulatory compliance, and board governance services to institutional clients.',
      link: 'https://aaatrustees.rw',
      linkText: 'Live Demo',
      icon: FaLandmark,
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
      icon: FaCoins,
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
      icon: FaGlassCheers,
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
      icon: FaReact,
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
      icon: FaServer,
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
      icon: FaLeaf,
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
      icon: FaRobot,
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
      icon: FaSchool,
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
      icon: FaMapMarkedAlt,
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
      icon: FaPiggyBank,
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
      icon: FaTasks,
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
      icon: FaGraduationCap,
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
      icon: FaTerminal,
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

  const STATUS_STYLES = {
    live: 'bg-sage text-ink',
    completed: 'bg-gold/90 text-ink',
    active: 'bg-ochre text-ink',
  };

  const STATUS_LABEL = {
    live: 'Live',
    completed: 'Completed',
    active: 'In Progress',
  };

  const ProjectCard = ({ project, index }) => {
    const Icon = project.icon;
    const isBusiness = project.category === 'web';

    return (
      <div
        className="group relative notch-card bg-charcoal shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-ivory/10 hover:border-ochre/30"
        style={{
          animationDelay: `${index * 100}ms`,
          animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        {project.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-gold text-ink text-xs font-bold shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}

        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 text-xs font-semibold shadow-lg ${STATUS_STYLES[project.status] || 'bg-ivory/20 text-ivory'}`}>
            {STATUS_LABEL[project.status] || 'Planning'}
          </span>
        </div>

        <div className={`p-6 relative overflow-hidden ${isBusiness ? 'bg-ochre' : 'bg-sage'}`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 notch-btn flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4 bg-ink/15 text-ink">
              <Icon className="text-2xl" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2 text-ink">{project.title}</h3>
            <p className="text-sm font-body text-ink/70">{project.longDescription}</p>
          </div>
        </div>

        <div className="p-6 relative z-10">
          <p className="text-ivory/70 leading-relaxed mb-6 font-body">
            {project.description}
          </p>

          <div className="mb-6">
            <h4 className="font-semibold text-ivory/80 mb-3 text-sm font-body">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-ochre/15 text-gold text-xs font-medium border border-ochre/30 font-body"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-ivory/10 text-ivory/60 text-xs font-medium font-body">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-ivory/80 mb-3 text-sm font-body">Key Features</h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight} className="flex items-center gap-2 text-sm text-ivory/60 font-body">
                  <span className="w-1.5 h-1.5 bg-ochre rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 notch-btn bg-ochre text-ink font-semibold hover:bg-[#2578b3] transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                {project.link.includes('github') ? <FaGithub /> : <FaExternalLinkAlt />}
                {project.linkText}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-ink text-ivory/50 font-medium border border-ivory/10">
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
    <section id="projects" ref={ref} className="section-padding bg-gradient-to-b from-ink via-charcoal to-ink relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <CircuitBackground />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-ochre/15 text-gold text-sm font-semibold mb-4 border border-ochre/30">
            <FaCode className="inline mr-2" />
            Portfolio Showcase
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-ivory">
            Featured Projects
          </h2>
          <p className="text-ivory/60 text-lg max-w-3xl mx-auto font-body">
            A diverse portfolio spanning client websites, full-stack applications, mobile apps,
            and AI/ML systems — built with modern technologies and production practices.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 notch-btn font-medium transition-all duration-300 font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                  filter === category.id
                    ? 'bg-ochre text-ink shadow-lg transform scale-105'
                    : 'bg-charcoal text-ivory/70 hover:bg-charcoal/70 border border-ivory/10'
                }`}
              >
                <Icon className="text-sm" />
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-charcoal notch-btn flex items-center justify-center mx-auto mb-4 border border-ivory/10">
              <FaCode className="text-ivory/40 text-3xl" />
            </div>
            <h3 className="font-display text-xl font-semibold text-ivory/80 mb-2">No projects found</h3>
            <p className="text-ivory/60 font-body">Try selecting a different category</p>
          </div>
        )}

        <div className="text-center mt-16">
          <Button href="https://github.com/Manzi453" size="none" className="px-6 py-3">
            <FaGithub />
            View More on GitHub
            <FaExternalLinkAlt className="text-sm" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
