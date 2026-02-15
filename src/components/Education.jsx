import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaSchool, FaBook, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaStar, FaCheckCircle } from 'react-icons/fa';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const educationSection = document.getElementById('education');
      if (educationSection) {
        const rect = educationSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const education = [
    {
      degree: "Bachelor's in Software Engineering",
      school: 'African Leadership University',
      location: 'Kigali, Rwanda',
      period: '2023 - 2027 (Expected)',
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
      color: 'from-blue-500 to-purple-500',
      level: 'university'
    },
    {
      degree: 'High School Diploma - Mathematics, Physics & Computer Science',
      school: 'Group Scolaire Mater Dei Nyanza',
      location: 'Nyanza, Rwanda',
      period: '2020 - 2023',
      status: 'Completed',
      gpa: '85/100',
      highlights: [
        'Advanced Mathematics and Physics Track',
        'Computer Science Club President',
        'National Science Competition Finalist'
      ],
      achievements: [
        'Best in Computer Science Award',
        'Mathematics Olympiad Participant'
      ],
      icon: FaSchool,
      color: 'from-green-500 to-emerald-500',
      level: 'high-school'
    },
    {
      degree: 'Primary School Diploma',
      school: 'Ecole Privee Marie Auxiliatrice',
      location: 'Nyanza, Rwanda',
      period: '2010 - 2016',
      status: 'Completed',
      gpa: '92/100',
      highlights: [
        'Excellence in Mathematics and Science',
        'Student Class Representative',
        'Sports Team Captain'
      ],
      achievements: [
        'Academic Excellence Award',
        'Leadership Recognition'
      ],
      icon: FaBook,
      color: 'from-orange-500 to-red-500',
      level: 'primary'
    }
  ];

  const EducationCard = ({ edu, index }) => {
    const Icon = edu.icon;
    
    return (
      <div 
        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
        style={{
          animationDelay: `${index * 200}ms`,
          animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        {/* Header with icon and status */}
        <div className={`bg-gradient-to-r ${edu.color} p-6 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-2xl" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {edu.status === 'Current' && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                      <FaCheckCircle className="text-xs" />
                      Currently Studying
                    </span>
                  )}
                  {edu.status === 'Completed' && (
                    <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                      <FaCheckCircle className="inline mr-1" />
                      Completed
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              </div>
            </div>
            <div className="text-white/80">
              <FaStar className="text-2xl group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 relative z-10">
          {/* School and location */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
              {edu.school}
            </h4>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCalendarAlt className="text-green-500" />
                <span>{edu.period}</span>
              </div>
            </div>
          </div>
          
          {/* GPA */}
          {edu.gpa && (
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Academic Performance</span>
                <span className="text-lg font-bold text-blue-600">{edu.gpa}</span>
              </div>
            </div>
          )}
          
          {/* Highlights */}
          <div className="mb-6">
            <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <FaAward className="text-blue-500" />
              Key Highlights
            </h5>
            <ul className="space-y-2">
              {edu.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600 text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Achievements */}
          {edu.achievements.length > 0 && (
            <div>
              <h5 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                Achievements & Awards
              </h5>
              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, achIndex) => (
                  <span 
                    key={achIndex}
                    className="px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 text-xs font-medium rounded-full border border-orange-200"
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
    <section id="education" className="section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
            <FaGraduationCap className="inline mr-2" />
            Academic Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education Background</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            My educational foundation from primary school through university, 
            building the knowledge and skills that drive my passion for software engineering
          </p>
        </div>
        
        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </div>
        
        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              10+
            </div>
            <h3 className="font-semibold text-gray-800">Years of Education</h3>
            <p className="text-sm text-gray-600 mt-2">Continuous learning journey</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              3.8
            </div>
            <h3 className="font-semibold text-gray-800">Current GPA</h3>
            <p className="text-sm text-gray-600 mt-2">Academic excellence</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              5+
            </div>
            <h3 className="font-semibold text-gray-800">Awards</h3>
            <p className="text-sm text-gray-600 mt-2">Academic achievements</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
