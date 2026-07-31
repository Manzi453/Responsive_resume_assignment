import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaGitAlt, FaDocker, FaLanguage } from 'react-icons/fa';
import { Section, Card, Badge } from './shared';
import { useScrollInView } from '../hooks/useScrollInView';

const Skills = () => {
  const { ref, isInView } = useScrollInView();

  const technicalSkills = [
    {
      name: 'Frontend Development',
      icon: FaCode,
      technologies: ['React', 'HTML', 'CSS', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'Backend Development',
      icon: FaDatabase,
      technologies: ['Spring Boot', 'Java', 'Python', 'PostgreSQL']
    },
    {
      name: 'DevOps & Cloud',
      icon: FaDocker,
      technologies: ['Docker', 'CI/CD', 'Kubernetes']
    },
    {
      name: 'Version Control',
      icon: FaGitAlt,
      technologies: ['Git', 'GitHub', 'Gitflow']
    }
  ];

  const languages = [
    { name: 'English', level: 90, flag: '🇬🇧', proficiency: 'Professional' },
    { name: 'French', level: 70, flag: '🇫🇷', proficiency: 'Professional' },
    { name: 'Kinyarwanda', level: 100, flag: '🇷🇼', proficiency: 'Native' },
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
        <Card className="h-full group">
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="w-14 h-14 notch-btn bg-sage text-ink flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="text-2xl" />
            </motion.div>
            <h3 className="font-display font-bold text-ivory text-lg">{skill.name}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {skill.technologies.map((tech) => (
              <Badge key={tech} variant="sage" className="text-xs">
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
          <h3 className="font-display font-bold text-ivory text-lg mb-1">{language.name}</h3>
          <p className="text-sm text-gold mb-4 font-body">{language.proficiency} Proficiency</p>

          <div className="w-full bg-ink rounded-full h-1.5 overflow-hidden">
            <motion.div
              className="h-full bg-sage"
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
    <Section id="skills" circuit title="Technical Expertise & Languages" subtitle="Comprehensive skill set spanning modern development technologies and multilingual capabilities">
      <div ref={ref} className="space-y-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-ivory mb-8 flex items-center gap-3">
            <FaCode className="text-ochre" />
            Core Technical Competencies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-ivory mb-8 flex items-center gap-3">
            <FaLanguage className="text-ochre" />
            Language Proficiency
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
