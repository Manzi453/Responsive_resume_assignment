import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaGitAlt, FaDocker, FaLanguage, FaGraduationCap } from 'react-icons/fa';
import { Section, Card, Badge } from './shared';
import { useScrollInView } from '../hooks/useScrollInView';

const Skills = () => {
  const { ref, isInView } = useScrollInView();

  const technicalSkills = [
    { 
      name: 'Frontend Development', 
      level: 90, 
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['React', 'HTML', 'CSS', 'TypeScript', 'Tailwind CSS']
    },
    { 
      name: 'Backend Development', 
      level: 75,
      icon: FaDatabase,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Spring Boot', 'Java', 'Python', 'PostgreSQL']
    },
    {
      name: 'DevOps & Cloud', 
      level: 65,
      icon: FaDocker,
      color: 'from-purple-500 to-pink-500',
      technologies: ['Docker', 'CI/CD', 'Kubernetes']
    },
    { 
      name: 'Version Control', 
      level: 92, 
      icon: FaGitAlt,
      color: 'from-orange-500 to-red-500',
      technologies: ['Git', 'GitHub', 'Gitflow']
    }
  ];

  const languages = [
    { 
      name: 'English', 
      level: 90, 
      flag: '🇬🇧',
      proficiency: 'Professional'
    },
    { 
      name: 'French', 
      level: 70, 
      flag: '🇫🇷',
      proficiency: 'Professional'
    },
    { 
      name: 'Kinyarwanda', 
      level: 100, 
      flag: '🇷🇼',
      proficiency: 'Native'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const SkillCard = ({ skill, index }) => {
    const Icon = skill.icon;
    
    return (
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: index * 0.1 }}
      >
        <Card className="h-full group bg-gray-800/50">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <motion.div
                className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Icon className="text-2xl" />
              </motion.div>
              <div>
                <h3 className="font-bold text-gray-100 text-lg">{skill.name}</h3>
                <p className="text-sm text-cyan-400">{skill.level}% Expertise</p>
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="mb-4">
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
              />
            </div>
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {skill.technologies.map((tech, idx) => (
              <Badge key={idx} variant="primary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </motion.div>
    );
  };

  const LanguageCard = ({ language, index }) => {
    return (
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: (index + 4) * 0.1 }}
      >
        <Card className="text-center h-full">
          <motion.div
            className="text-5xl mb-3"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            {language.flag}
          </motion.div>
          <h3 className="font-bold text-gray-100 text-lg mb-1">{language.name}</h3>
          <p className="text-sm text-cyan-400 mb-4">{language.proficiency} Proficiency</p>
          
          <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-600"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${language.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: (index + 4) * 0.1 + 0.3 }}
            />
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <Section id="skills" title="Skills & Languages" subtitle="Technical expertise and language proficiency">
      <div ref={ref} className="space-y-16">
        {/* Technical Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaCode className="text-cyan-400" />
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
        
        {/* Languages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaLanguage className="text-cyan-400" />
            Languages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <LanguageCard key={language.name} language={language} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
