import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaStar, FaCheckCircle } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

const EduStatTile = ({ target, suffix, decimals, color, label, sub, isVisible }) => {
  const count = useCountUp(target, isVisible, { decimals });

  return (
    <div className="notch-card bg-charcoal p-6 shadow-lg text-center border border-ivory/10">
      <div className={`w-16 h-16 ${color} notch-btn flex items-center justify-center text-ink text-2xl font-bold font-display mx-auto mb-4`}>
        {count}{suffix}
      </div>
      <h3 className="font-semibold text-ivory/90 font-body">{label}</h3>
      <p className="text-sm text-ivory/60 mt-2 font-body">{sub}</p>
    </div>
  );
};

const Education = () => {
  const { ref, isVisible } = useScrollReveal();

  const education = [
    {
      degree: "Bachelor's in Software Engineering",
      school: 'African Leadership University',
      location: 'Kigali, Rwanda',
      period: '2024 - 2027 (Expected)',
      status: 'Current',
      gpa: '4.0/5.0',
      highlights: [
        'Focus on Software Engineering and Computer Science',
        'Leadership and Entrepreneurship Program',
        'Start/End (2024, 2027)'
      ],
      achievements: [
        'Academic Excellence Scholarship',
        'Student Government Technical Lead'
      ],
      icon: FaGraduationCap,
    },
  ];

  const EducationCard = ({ edu, index }) => {
    const Icon = edu.icon;

    return (
      <div
        className="group relative notch-card bg-charcoal shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-ivory/10 hover:border-ochre/30"
        style={{
          animationDelay: `${index * 200}ms`,
          animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="bg-ochre p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-ink/15 backdrop-blur-sm notch-btn flex items-center justify-center text-ink shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-2xl" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {edu.status === 'Current' && (
                    <span className="px-3 py-1 bg-ink text-ivory text-xs font-semibold flex items-center gap-1">
                      <FaCheckCircle className="text-xs" />
                      Currently Studying
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{edu.degree}</h3>
              </div>
            </div>
            <div className="text-ink/70">
              <FaStar className="text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>

        <div className="p-6 relative z-10">
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-ivory/90 mb-2 flex items-center gap-2 font-body">
              {edu.school}
            </h4>
            <div className="flex items-center gap-4 text-sm text-ivory/60 font-body">
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-ochre" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-ochre" />
                <span>{edu.period}</span>
              </div>
            </div>
          </div>

          {edu.gpa && (
            <div className="mb-6 p-4 bg-ochre/10 border border-ochre/30">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-ivory/80 font-body">Academic Performance</span>
                <span className="text-lg font-bold text-gold font-display">{edu.gpa}</span>
              </div>
            </div>
          )}

          <div className="mb-6">
            <h5 className="font-semibold text-ivory/90 mb-3 flex items-center gap-2 font-body">
              <FaAward className="text-ochre" />
              Key Highlights
            </h5>
            <ul className="space-y-2">
              {edu.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-ochre rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-ivory/70 text-sm font-body">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {edu.achievements.length > 0 && (
            <div>
              <h5 className="font-semibold text-ivory/90 mb-3 flex items-center gap-2 font-body">
                <FaStar className="text-ochre" />
                Achievements &amp; Awards
              </h5>
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement) => (
                  <span
                    key={achievement}
                    className="px-3 py-1 bg-ochre/15 text-gold text-xs font-medium border border-ochre/30 font-body"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="education" ref={ref} className="section-padding bg-gradient-to-b from-ink via-charcoal to-ink relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-ochre/15 text-gold text-sm font-semibold mb-4 border border-ochre/30">
            <FaGraduationCap className="inline mr-2" />
            Academic Journey
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-ivory">
            Education Background
          </h2>
          <p className="text-ivory/60 text-lg max-w-3xl mx-auto font-body">
            My educational foundation from primary school through university,
            building the knowledge and skills that drive my passion for software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { target: 10, suffix: '+', decimals: 0, color: 'bg-ochre', label: 'Years of Education', sub: 'Continuous learning journey' },
            { target: 4.0, suffix: '', decimals: 1, color: 'bg-sage', label: 'Current GPA', sub: 'Academic excellence' },
            { target: 5, suffix: '+', decimals: 0, color: 'bg-ochre', label: 'Awards', sub: 'Academic achievements' },
          ].map((stat) => (
            <EduStatTile key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
