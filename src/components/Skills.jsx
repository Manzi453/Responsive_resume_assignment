import React, { useState, useEffect } from 'react';
import { FaCode, FaDatabase, FaReact, FaPython, FaJs, FaGitAlt, FaDocker, FaAws, FaLanguage, FaChartLine } from 'react-icons/fa';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technicalSkills = [
    { 
      name: 'Frontend Development', 
      level: 90, 
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS']
    },
    { 
      name: 'Backend Development', 
      level: 85, 
      icon: FaDatabase,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    { 
      name: 'React Ecosystem', 
      level: 88, 
      icon: FaReact,
      color: 'from-cyan-500 to-blue-500',
      technologies: ['React Hooks', 'Redux', 'Next.js', 'React Native']
    },
    { 
      name: 'Python Development', 
      level: 82, 
      icon: FaPython,
      color: 'from-yellow-500 to-orange-500',
      technologies: ['Django', 'FastAPI', 'Data Analysis', 'Automation']
    },
    { 
      name: 'DevOps & Cloud', 
      level: 75, 
      icon: FaDocker,
      color: 'from-purple-500 to-pink-500',
      technologies: ['Docker', 'AWS', 'CI/CD', 'Kubernetes']
    },
    { 
      name: 'Version Control', 
      level: 92, 
      icon: FaGitAlt,
      color: 'from-gray-700 to-gray-900',
      technologies: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
    }
  ];

  const languages = [
    { 
      name: 'English', 
      level: 90, 
      flag: '🇬🇧',
      proficiency: 'Professional Working Proficiency'
    },
    { 
      name: 'French', 
      level: 70, 
      flag: '🇫🇷',
      proficiency: 'Professional Working Proficiency'
    },
    { 
      name: 'Kinyarwanda', 
      level: 100, 
      flag: '🇷🇼',
      proficiency: 'Native Speaker'
    },
    { 
      name: 'Swahili', 
      level: 80, 
      flag: '🇰🇪',
      proficiency: 'Professional Working Proficiency'
    }
  ];

  const SkillCard = ({ skill, index }) => {
    const Icon = skill.icon;
    
    return (
      <div 
        className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
        style={{
          animationDelay: `${index * 100}ms`,
          animation: isVisible ? 'slide-up 0.6s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">{skill.name}</h3>
              <p className="text-sm text-gray-500">{skill.level}% Proficiency</p>
            </div>
          </div>
          <FaChartLine className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
        </div>
        
        {/* Progress bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1500 ease-out relative overflow-hidden`}
              style={{ 
                width: isVisible ? `${skill.level}%` : '0%',
                transitionDelay: `${index * 100 + 300}ms`
              }}
            >
              <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const LanguageCard = ({ language, index }) => {
    return (
      <div 
        className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
        style={{
          animationDelay: `${index * 100 + 600}ms`,
          animation: isVisible ? 'slide-up 0.6s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{language.flag}</span>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">{language.name}</h3>
              <p className="text-sm text-gray-500">{language.proficiency}</p>
            </div>
          </div>
          <FaLanguage className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
        </div>
        
        <div className="mb-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Proficiency</span>
            <span className="text-sm font-bold text-gray-800">{language.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1500 ease-out"
              style={{ 
                width: isVisible ? `${language.level}%` : '0%',
                transitionDelay: `${index * 100 + 900}ms`
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            💪 Expertise & Skills
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills & Languages</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and language proficiency that enable me to build robust, scalable solutions
          </p>
        </div>
        
        {/* Technical Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <FaCode className="text-blue-500" />
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
        
        {/* Languages Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
            <FaLanguage className="text-purple-500" />
            Language Proficiency
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <LanguageCard key={language.name} language={language} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
