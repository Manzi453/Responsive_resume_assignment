import React from 'react';
import { FaBriefcase, FaGraduationCap, FaBuilding, FaCalendarAlt, FaExternalLinkAlt, FaCode, FaChartLine, FaClock, FaMapMarkerAlt, FaBullhorn, FaCertificate, FaArrowRight, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Button, Card, CircuitBackground } from './shared';

const CORE_SKILLS = [
  { name: 'Frontend Development', icon: FaCode, technologies: 'React, TypeScript, Tailwind CSS' },
  { name: 'Backend Development', icon: FaDatabase, technologies: 'Spring Boot, Java, Python, PostgreSQL' },
  { name: 'DevOps & Cloud', icon: FaDocker, technologies: 'Docker, CI/CD, Kubernetes' },
  { name: 'Version Control', icon: FaGitAlt, technologies: 'Git, GitHub, Gitflow' },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  const experiences = [
    {
      title: 'Digital Marketing & Technology Associate',
      company: 'RG Partners',
      period: 'May 2026 – Present',
      duration: 'Ongoing',
      location: 'Kigali, Rwanda',
      description: 'Building and maintaining the web presence for RG Partners, a full-service financial advisory group in East Africa, and its affiliated companies AAA Corporate Trustees and AAA Financiers, while supporting the group\'s digital marketing and brand consistency across all three sites.',
      achievements: [
        'Developed the AAA Group company portal with React, Next.js, TypeScript, and Tailwind CSS',
        'Built the AAA Corporate Trustees and AAA Financiers advisory websites with React, TypeScript, React Router, and Tailwind CSS',
        'Maintain consistent branding and content across the group\'s digital presence to support marketing and investor-facing communications'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      typeLabel: 'Current Role',
      current: true,
      icon: FaBullhorn,
      register: 'business',
    },
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
      typeLabel: 'Internship',
      icon: FaBuilding,
      register: 'technical',
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
      technologies: ['React', 'Python', 'Linux'],
      typeLabel: 'Internship',
      icon: FaBriefcase,
      register: 'technical',
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
      technologies: ['JavaScript', 'PHP', 'HTML', 'CSS', 'Git'],
      typeLabel: 'Training',
      icon: FaGraduationCap,
      register: 'technical',
    }
  ];

  const TimelineItem = ({ experience, index, isLeft }) => {
    const Icon = experience.icon;
    const isBusiness = experience.register === 'business';

    return (
      <div
        className={`flex items-center mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
        style={{
          animationDelay: `${index * 200}ms`,
          animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className={`md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
          <div className="group relative notch-card bg-charcoal p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-ivory/10 hover:border-ochre/30">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 notch-btn flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${isBusiness ? 'bg-ochre text-ink' : 'bg-sage text-ink'}`}>
                  <Icon className="text-xl" />
                </div>
                <div className={`flex-1 ${isLeft ? 'md:text-right' : ''}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`px-3 py-1 text-xs font-semibold ${isBusiness ? 'bg-ochre text-ink' : 'bg-sage text-ink'}`}>
                      {experience.typeLabel}
                    </span>
                    {experience.current && (
                      <span className="px-3 py-1 bg-gold/15 text-gold text-xs font-semibold border border-gold/30">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-ivory">{experience.title}</h3>
                  <p className="text-lg font-semibold text-gold font-body">{experience.company}</p>
                </div>
              </div>

              <div className={`flex flex-wrap gap-4 mb-4 text-sm text-ivory/60 font-body ${isLeft ? 'md:justify-end' : ''}`}>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-ochre" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-ochre" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-ochre" />
                  <span>{experience.location}</span>
                </div>
              </div>

              <p className="text-ivory/70 leading-relaxed mb-6 font-body">
                {experience.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-ivory/90 mb-3 flex items-center gap-2 font-body">
                  <FaChartLine className="text-ochre" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-ochre rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-ivory/70 text-sm font-body">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-ochre/15 text-gold text-xs font-medium border border-ochre/30 font-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute w-0.5 h-full bg-ochre/20"></div>
          <div className="relative z-10 w-6 h-6 bg-ink border-4 border-ochre rounded-full shadow-lg hover:scale-125 transition-transform duration-300">
            <div className="absolute inset-0 bg-ochre rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2"></div>
      </div>
    );
  };

  return (
    <section id="experience" ref={ref} className="section-padding bg-gradient-to-b from-ink via-charcoal to-ink relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <CircuitBackground />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-ochre/15 text-gold text-sm font-semibold mb-4 border border-ochre/30">
            <FaBriefcase className="inline mr-2" />
            Professional Journey
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-ivory">
            Work Experience
          </h2>
          <p className="text-ivory/60 text-lg max-w-3xl mx-auto font-body">
            My professional journey through hands-on internships and training programs,
            building real-world software solutions and gaining valuable industry experience
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-ochre/20 transform -translate-x-1/2"></div>

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

        {/* Core Skills (brief — full breakdown on /skills) */}
        <div className="max-w-6xl mx-auto mt-24">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-ivory mb-8 flex items-center gap-3">
            <FaCode className="text-ochre" />
            Core Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {CORE_SKILLS.map(({ name, icon: Icon, technologies }) => (
              <Card key={name} hover={false}>
                <div className="w-12 h-12 notch-btn bg-sage text-ink flex items-center justify-center mb-3">
                  <Icon className="text-xl" />
                </div>
                <h4 className="font-display font-bold text-ivory mb-1">{name}</h4>
                <p className="text-sm text-ivory/60 font-body">{technologies}</p>
              </Card>
            ))}
          </div>
          <Button to="/skills" variant="ghost" size="none" className="py-2 px-0 text-sm">
            Full Skills Breakdown &amp; Languages <FaArrowRight className="text-xs" />
          </Button>
        </div>

        {/* Education (brief — full detail on /education) */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-ivory mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-ochre" />
            Education
          </h3>
          <Card hover={false} className="md:flex md:items-center md:gap-6">
            <div className="w-14 h-14 notch-btn bg-ochre text-ink flex items-center justify-center mb-4 md:mb-0 shrink-0">
              <FaGraduationCap className="text-2xl" />
            </div>
            <div className="flex-1">
              <h4 className="font-display font-bold text-ivory text-lg">Bachelor&apos;s in Software Engineering</h4>
              <p className="text-gold font-body mb-1">African Leadership University &middot; Kigali, Rwanda</p>
              <p className="text-sm text-ivory/60 font-body">2024 &ndash; 2027 (Expected) &middot; GPA 4.0/5.0 &middot; Currently studying</p>
            </div>
          </Card>
          <Button to="/education" variant="ghost" size="none" className="py-2 px-0 text-sm mt-4">
            Full Education Details <FaArrowRight className="text-xs" />
          </Button>
        </div>

        {/* Awards (brief — full gallery on /awards) */}
        <div className="max-w-6xl mx-auto mt-16 mb-8">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-ivory mb-8 flex items-center gap-3">
            <FaCertificate className="text-ochre" />
            Certifications
          </h3>
          <Card hover={false} className="flex items-center gap-6">
            <div className="w-14 h-14 notch-btn bg-sage text-ink flex items-center justify-center text-2xl font-bold font-display shrink-0">
              24
            </div>
            <p className="text-ivory/70 font-body">
              24 certifications spanning web development, programming, data &amp; AI, mobile, and security &mdash; from Codefinity, Coursera (DeepLearning.AI, Google, IBM), and professional training programs.
            </p>
          </Card>
          <Button to="/awards" variant="ghost" size="none" className="py-2 px-0 text-sm mt-4">
            View All Certifications <FaArrowRight className="text-xs" />
          </Button>
        </div>

        <div className="text-center mt-16">
          <Button to="/contact" size="none" className="px-6 py-3">
            <FaCode />
            Ready for New Challenges
            <FaExternalLinkAlt />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
