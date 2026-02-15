import React, { useState, useEffect } from 'react';
import { FaAward, FaCertificate, FaTrophy, FaStar, FaExternalLinkAlt, FaCalendarAlt, FaCheckCircle, FaDownload, FaExpandAlt, FaTimes, FaCode, FaChartBar, FaTerminal } from 'react-icons/fa';

const Awards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const awardsSection = document.getElementById('awards');
      if (awardsSection) {
        const rect = awardsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const awards = [
    {
      image: '/ultimate_html_certificate.png',
      title: 'Ultimate HTML Certification',
      description: 'Advanced HTML certification covering modern web standards, semantic markup, accessibility, and best practices for responsive web development.',
      longDescription: 'Comprehensive HTML course covering HTML5, semantic elements, forms, multimedia, accessibility standards, and modern web development practices.',
      issuer: 'HTML Academy',
      issuerLogo: '🏛️',
      date: 'December 2023',
      duration: '40 hours',
      credentialId: 'HTML-ADV-2023-001',
      credentialUrl: 'https://example.com/verify/html-2023-001',
      skills: ['HTML5', 'Semantic Markup', 'Accessibility', 'Forms', 'Multimedia'],
      level: 'Advanced',
      icon: FaCertificate,
      color: 'from-orange-500 to-red-500',
      category: 'web-development',
      featured: true,
      verificationStatus: 'verified'
    },
    {
      image: '/conducting_a_b_test_certificate.png',
      title: 'A/B Testing Mastery',
      description: 'Professional certification in A/B testing methodologies, statistical analysis, and data-driven optimization strategies.',
      longDescription: 'Advanced course covering A/B testing design, statistical significance, multivariate testing, conversion optimization, and data analysis techniques.',
      issuer: 'Analytics Institute',
      issuerLogo: '📊',
      date: 'November 2023',
      duration: '30 hours',
      credentialId: 'ABT-PRO-2023-042',
      credentialUrl: 'https://example.com/verify/abt-2023-042',
      skills: ['A/B Testing', 'Statistical Analysis', 'Conversion Optimization', 'Data Analysis', 'User Research'],
      level: 'Professional',
      icon: FaTrophy,
      color: 'from-blue-500 to-purple-500',
      category: 'analytics',
      featured: true,
      verificationStatus: 'verified'
    },
    {
      image: '/python_from_zero_to_hero_certificate.png',
      title: 'Python Programming Excellence',
      description: 'Comprehensive certification in Python programming, from fundamentals to advanced concepts including data structures and algorithms.',
      longDescription: 'Complete Python development course covering syntax, data structures, OOP, web development, data analysis, and best practices.',
      issuer: 'Python Institute',
      issuerLogo: '🐍',
      date: 'October 2023',
      duration: '60 hours',
      credentialId: 'PY-ADV-2023-156',
      credentialUrl: 'https://example.com/verify/python-2023-156',
      skills: ['Python', 'Data Structures', 'OOP', 'Web Development', 'Data Analysis'],
      level: 'Intermediate',
      icon: FaAward,
      color: 'from-green-500 to-emerald-500',
      category: 'programming',
      featured: false,
      verificationStatus: 'verified'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certificates', icon: FaCertificate },
    { id: 'web-development', name: 'Web Development', icon: FaCode },
    { id: 'analytics', name: 'Analytics', icon: FaChartBar },
    { id: 'programming', name: 'Programming', icon: FaTerminal }
  ];

  const CertificateModal = ({ certificate, onClose }) => {
    if (!certificate) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:text-gray-900 transition-all duration-300 z-10 shadow-lg"
            >
              <FaTimes />
            </button>
            
            {/* Certificate image */}
            <div className="relative">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto rounded-t-2xl"
              />
              <div className="absolute bottom-4 right-4">
                <span className={`px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1`}>
                  <FaCheckCircle />
                  {certificate.verificationStatus === 'verified' ? 'Verified' : 'Pending'}
                </span>
              </div>
            </div>
            
            {/* Certificate details */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{certificate.title}</h3>
                  <p className="text-gray-600">{certificate.longDescription}</p>
                </div>
                <div className={`w-16 h-16 bg-gradient-to-br ${certificate.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  <certificate.icon className="text-2xl" />
                </div>
              </div>
              
              {/* Issuer info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-2xl">{certificate.issuerLogo}</span>
                    Issuing Organization
                  </h4>
                  <p className="text-gray-700">{certificate.issuer}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500" />
                    Completion Details
                  </h4>
                  <p className="text-gray-700">{certificate.date} • {certificate.duration}</p>
                </div>
              </div>
              
              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Skills Acquired</h4>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Credential verification */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Credential ID</h4>
                    <p className="text-gray-700 font-mono text-sm">{certificate.credentialId}</p>
                  </div>
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt />
                    Verify Credential
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CertificateCard = ({ award, index }) => {
    const Icon = award.icon;
    
    return (
      <div 
        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
        style={{
          animationDelay: `${index * 150}ms`,
          animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        {/* Featured badge */}
        {award.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}
        
        {/* Verification status */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full shadow-lg ${
            award.verificationStatus === 'verified' 
              ? 'bg-green-500 text-white' 
              : 'bg-yellow-500 text-white'
          }`}>
            <FaCheckCircle className="inline mr-1" />
            {award.verificationStatus === 'verified' ? 'Verified' : 'Pending'}
          </span>
        </div>
        
        {/* Certificate image with overlay */}
        <div className="relative overflow-hidden h-48">
          <img
            src={award.image}
            alt={award.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* View certificate button */}
          <button
            onClick={() => setSelectedCertificate(award)}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2 text-gray-800 font-medium">
              <FaExpandAlt />
              View Certificate
            </div>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-10 h-10 bg-gradient-to-br ${award.color} rounded-lg flex items-center justify-center text-white shadow-md`}>
                  <Icon className="text-sm" />
                </div>
                <span className={`px-2 py-1 bg-gradient-to-r ${award.color} text-white text-xs font-semibold rounded-full`}>
                  {award.level}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{award.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
            </div>
          </div>
          
          {/* Issuer and date */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-xl">{award.issuerLogo}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">{award.issuer}</p>
                <p className="text-xs text-gray-500">{award.duration}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{award.date}</p>
              <p className="text-xs text-gray-500">Completed</p>
            </div>
          </div>
          
          {/* Skills preview */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {award.skills.slice(0, 3).map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
              {award.skills.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                  +{award.skills.length - 3}
                </span>
              )}
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedCertificate(award)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300"
            >
              <FaExpandAlt />
              View Details
            </button>
            
            <div className="flex items-center gap-2">
              <a
                href={award.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                title="Verify Credential"
              >
                <FaExternalLinkAlt />
              </a>
              <button
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                title="Download Certificate"
                onClick={() => {
                  // Download functionality
                  const link = document.createElement('a');
                  link.href = award.image;
                  link.download = `${award.title.replace(/\s+/g, '_')}_certificate.png`;
                  link.click();
                }}
              >
                <FaDownload />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="awards" className="section-padding bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            <FaAward className="inline mr-2" />
            Certifications & Achievements
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Certifications</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Recognized certifications and continuous learning achievements that validate my expertise 
            and commitment to professional development in software engineering and related technologies
          </p>
        </div>
        
        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              {awards.length}
            </div>
            <h3 className="font-semibold text-gray-800">Total Certificates</h3>
            <p className="text-sm text-gray-600 mt-2">Professional achievements</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              130+
            </div>
            <h3 className="font-semibold text-gray-800">Hours Completed</h3>
            <p className="text-sm text-gray-600 mt-2">Learning time invested</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              15+
            </div>
            <h3 className="font-semibold text-gray-800">Skills Acquired</h3>
            <p className="text-sm text-gray-600 mt-2">Technical competencies</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              100%
            </div>
            <h3 className="font-semibold text-gray-800">Verification Rate</h3>
            <p className="text-sm text-gray-600 mt-2">All certificates verified</p>
          </div>
        </div>
        
        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <CertificateCard key={award.title} award={award} index={index} />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <FaAward />
            <span className="font-semibold">View All Credentials</span>
            <FaExternalLinkAlt />
          </div>
        </div>
      </div>
      
      {/* Certificate Modal */}
      <CertificateModal 
        certificate={selectedCertificate} 
        onClose={() => setSelectedCertificate(null)} 
      />
    </section>
  );
};

export default Awards;
