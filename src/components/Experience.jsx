import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaGraduationCap, FaBuilding, FaCalendarAlt, FaExternalLinkAlt, FaCode, FaUsers, FaChartLine, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Banque Populaire du Rwanda Plc (BPR)',
      period: '2025',
      duration: '3 months',
      location: 'Kigali, Rwanda',
      description: 'During this period, I worked on an academic project for RwandaBill, which I developed independently under guidance. The project involved applying Java (Spring Boot) and PostgreSQL on the backend, and React with Tailwind CSS on the frontend, while leveraging foundational knowledge of Docker and Kubernetes concepts gained during training.',
      achievements: [
        'Designed and fully implemented the RwandaBill application by integrating React, Tailwind CSS, and Java (Spring Boot)',
        'Developed backend services and database interactions using PostgreSQL for a school-based billing system',
        'Applied containerization and deployment concepts learned during training to understand application deployment workflows'
      ],

      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      type: 'internship',
      icon: FaBuilding,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Business Continuity Plan LTD',
      period: '2024',
      duration: '3 months',
      location: 'Kigali, Rwanda',
      description: 'Supported the maintenance of business continuity planning software by observing development workflows, assisting with troubleshooting, and gaining exposure to risk assessment modules and system architecture practices.',
      achievements: [
        'Assisted in troubleshooting application issues and resolving minor bugs',
        'Observed and supported ongoing development of risk assessment features',
        'Provided general IT support and maintenance assistance to the development team'
      ],

      technologies: ['React', 'Python','Linux'],
      type: 'internship',
      icon: FaBriefcase,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Software Development Training',
      company: 'Tost Group Training',
      period: '2023',
      duration: '3 months',
      location: 'Kigali, Rwanda',
      description: 'Completed intensive training program covering full-stack development, software engineering best practices, and problem-solving techniques.',
      achievements: [
        'Mastered full-stack development fundamentals',
        'Completed 10+ hands-on projects',
        'Received certification of excellence'
      ],
      technologies: ['JavaScript', 'PHP', 'HTML','CSS', 'Git'],
      type: 'training',
      icon: FaGraduationCap,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const TimelineItem = ({ experience, index, isLeft }) => {
    const Icon = experience.icon;
    
    return (
      <div 
        className={`flex items-center mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
        style={{
          animationDelay: `${index * 200}ms`,
          animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        {/* Content */}
        <div className={`md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
          <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
            
            {/* Header */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${experience.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-xl" />
                </div>
                <div className={`flex-1 ${isLeft ? 'md:text-right' : ''}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-3 py-1 bg-gradient-to-r ${experience.color} text-white text-xs font-semibold rounded-full`}>
                      {experience.type === 'internship' ? 'Internship' : 'Training'}
                    </span>
                    {experience.type === 'internship' && (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                        Professional Experience
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                  <p className="text-lg font-semibold text-blue-600">{experience.company}</p>
                </div>
              </div>
              
              {/* Meta info */}
              <div className={`flex flex-wrap gap-4 mb-4 text-sm text-gray-600 ${isLeft ? 'md:justify-end' : ''}`}>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-500" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-green-500" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span>{experience.location}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {experience.description}
              </p>
              
              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <FaChartLine className="text-blue-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Timeline dot and line */}
        <div className="relative flex items-center justify-center">
          {/* Timeline line */}
          <div className="absolute w-0.5 h-full bg-gradient-to-b from-blue-200 via-blue-400 to-purple-200"></div>
          
          {/* Timeline dot */}
          <div className="relative z-10 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg hover:scale-125 transition-transform duration-300">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>
        
        {/* Empty space for alternating layout */}
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    );
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            <FaBriefcase className="inline mr-2" />
            Professional Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            My professional journey through hands-on internships and training programs, 
            building real-world software solutions and gaining valuable industry experience
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-purple-200 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={experience.title} 
                experience={experience} 
                index={index} 
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <FaCode />
            <span className="font-semibold">Ready for new challenges</span>
            <FaExternalLinkAlt />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
