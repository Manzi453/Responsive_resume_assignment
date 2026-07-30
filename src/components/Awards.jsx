import React, { useState } from 'react';
import { FaAward, FaTrophy, FaExternalLinkAlt, FaCalendarAlt, FaExpandAlt, FaTimes, FaDownload, FaCode, FaLaptopCode, FaChartLine, FaMobileAlt, FaShieldAlt, FaBriefcase, FaCertificate } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';

import backendNodeExpress from '../Manzi_Certificates_Portfolio_Ready/Certificate_Backend_Development_NodeJS_ExpressJS.jpg';
import cssFundamentals from '../Manzi_Certificates_Portfolio_Ready/Certificate_CSS_Fundamentals.jpg';
import controlFlowPython from '../Manzi_Certificates_Portfolio_Ready/Certificate_Control_Flow_in_Python.jpg';
import cybersecurityFundamentals from '../Manzi_Certificates_Portfolio_Ready/Certificate_Cybersecurity_Fundamentals.jpg';
import dataAnalysisR from '../Manzi_Certificates_Portfolio_Ready/Certificate_Data_Analysis_with_R_Programming.jpg';
import dataTypesPython from '../Manzi_Certificates_Portfolio_Ready/Certificate_Data_Types_in_Python.jpg';
import financialPlanning from '../Manzi_Certificates_Portfolio_Ready/Certificate_Financial_Planning_for_Young_Adults.jpg';
import flutterDart from '../Manzi_Certificates_Portfolio_Ready/Certificate_Flutter_and_Dart_Mobile_Apps.jpg';
import ultimateHtml from '../Manzi_Certificates_Portfolio_Ready/Certificate_HTML_Ultimate_HTML.jpg';
import introJavaScript from '../Manzi_Certificates_Portfolio_Ready/Certificate_Introduction_to_JavaScript.jpg';
import introPython from '../Manzi_Certificates_Portfolio_Ready/Certificate_Introduction_to_Python.jpg';
import introReact from '../Manzi_Certificates_Portfolio_Ready/Certificate_Introduction_to_React.jpg';
import jsDataStructures from '../Manzi_Certificates_Portfolio_Ready/Certificate_JavaScript_Data_Structures.jpg';
import jsLogicInteraction from '../Manzi_Certificates_Portfolio_Ready/Certificate_JavaScript_Logic_and_Interaction.jpg';
import javaBasics from '../Manzi_Certificates_Portfolio_Ready/Certificate_Java_Basics.jpg';
import jetBlueTraining from '../Manzi_Certificates_Portfolio_Ready/Certificate_JetBlue_University_Customer_Support_Training.jpg';
import neuralNetworks from '../Manzi_Certificates_Portfolio_Ready/Certificate_Neural_Networks_and_Deep_Learning.jpg';
import nextjsMastery from '../Manzi_Certificates_Portfolio_Ready/Certificate_NextJS_14_Mastery.jpg';
import pythonDataStructures from '../Manzi_Certificates_Portfolio_Ready/Certificate_Python_Data_Structures.jpg';
import pythonFunctions from '../Manzi_Certificates_Portfolio_Ready/Certificate_Python_Functions_Tutorial.jpg';
import pythonLoops from '../Manzi_Certificates_Portfolio_Ready/Certificate_Python_Loops_Tutorial.jpg';
import tostSoftwareDev from '../Manzi_Certificates_Portfolio_Ready/Certificate_Software_Development_Training_TOST_Group.jpg';
import abTestCert from '../Manzi_Certificates_Portfolio_Ready/conducting_a_b_test_certificate.png';
import pythonZeroToHero from '../Manzi_Certificates_Portfolio_Ready/python_from_zero_to_hero_certificate.png';

const Awards = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [filter, setFilter] = useState('all');

  const awards = [
    {
      image: backendNodeExpress,
      title: 'Backend Development with Node.js and Express.js',
      issuer: 'Codefinity',
      date: '03 Apr 2025',
      certificateId: 'ae6a7136-5bc6-47cd-9072-6a1391d3ec96',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      level: 'Intermediate',
      category: 'web-development',
      featured: true,
    },
    {
      image: introReact,
      title: 'Introduction to React',
      issuer: 'Codefinity',
      date: '19 Dec 2024',
      certificateId: 'cb65f993-cf34-4f61-9c2c-c58f60c38571',
      skills: ['React', 'Components', 'JSX'],
      level: 'Beginner',
      category: 'web-development',
      featured: true,
    },
    {
      image: nextjsMastery,
      title: 'Next.js 14 Mastery for Building Modern Web Apps',
      issuer: 'Codefinity',
      date: '27 Jan 2025',
      certificateId: 'a00e57f8-045c-451a-93cb-6958ea4f60b1',
      skills: ['Next.js', 'React', 'Server-Side Rendering'],
      level: 'Advanced',
      category: 'web-development',
      featured: true,
    },
    {
      image: ultimateHtml,
      title: 'Ultimate HTML',
      issuer: 'Codefinity',
      date: '04 Feb 2025',
      certificateId: 'f33918b1-0cce-40e8-bbfe-d53ae4583f88',
      skills: ['HTML5', 'Semantic Markup'],
      level: 'Beginner',
      category: 'web-development',
    },
    {
      image: cssFundamentals,
      title: 'CSS Fundamentals',
      issuer: 'Codefinity',
      date: '04 Feb 2025',
      certificateId: 'fd49e150-743a-4d2d-9c21-d1ff11269cb9',
      skills: ['CSS', 'Responsive Design'],
      level: 'Beginner',
      category: 'web-development',
    },
    {
      image: introJavaScript,
      title: 'Introduction to JavaScript',
      issuer: 'Codefinity',
      date: '21 Jan 2025',
      certificateId: 'dde39add-a2f2-499a-a876-ee242d865b85',
      skills: ['JavaScript', 'Fundamentals'],
      level: 'Beginner',
      category: 'web-development',
    },
    {
      image: jsDataStructures,
      title: 'JavaScript Data Structures',
      issuer: 'Codefinity',
      date: '24 Jan 2025',
      certificateId: 'a328c8fb-ab17-4286-9b1d-592df6b9d490',
      skills: ['JavaScript', 'Data Structures'],
      level: 'Intermediate',
      category: 'web-development',
    },
    {
      image: jsLogicInteraction,
      title: 'JavaScript Logic and Interaction',
      issuer: 'Codefinity',
      date: '02 Apr 2025',
      certificateId: '19bb379d-bbb3-434c-8ba1-0d77e0816a5f',
      skills: ['JavaScript', 'DOM', 'Event Handling'],
      level: 'Intermediate',
      category: 'web-development',
    },
    {
      image: flutterDart,
      title: 'Flutter and Dart: Developing iOS, Android, and Mobile Apps',
      issuer: 'IBM (via Coursera)',
      date: '03 Mar 2026',
      verifyUrl: 'https://coursera.org/verify/I88D90R1MTHE',
      skills: ['Flutter', 'Dart', 'Mobile Development'],
      level: 'Intermediate',
      category: 'mobile',
      featured: true,
    },
    {
      image: cybersecurityFundamentals,
      title: 'Cybersecurity Fundamentals',
      issuer: 'Codefinity',
      date: '04 Apr 2025',
      certificateId: '34787ca5-0ebc-44a5-80c6-4c63c916d230',
      skills: ['Cybersecurity', 'Security Best Practices'],
      level: 'Beginner',
      category: 'security',
      featured: true,
    },
    {
      image: neuralNetworks,
      title: 'Neural Networks and Deep Learning',
      issuer: 'DeepLearning.AI (via Coursera)',
      date: '06 Jun 2026',
      verifyUrl: 'https://coursera.org/verify/9KW0D8OZ1J0A',
      skills: ['Neural Networks', 'Deep Learning', 'AI'],
      level: 'Advanced',
      category: 'data-ai',
      featured: true,
    },
    {
      image: dataAnalysisR,
      title: 'Data Analysis with R Programming',
      issuer: 'Google (via Coursera)',
      date: '18 Jan 2026',
      verifyUrl: 'https://coursera.org/verify/BWP5C4IIQ55S',
      skills: ['R', 'Data Analysis', 'Statistics'],
      level: 'Intermediate',
      category: 'data-ai',
    },
    {
      image: abTestCert,
      title: 'Conducting A/B Test',
      issuer: 'Codefinity',
      date: '24 Jan 2025',
      certificateId: 'bca341ef-ab05-48be-ac66-2a0b3165d0f4',
      skills: ['A/B Testing', 'Statistical Analysis'],
      level: 'Intermediate',
      category: 'data-ai',
    },
    {
      image: introPython,
      title: 'Introduction to Python',
      issuer: 'Codefinity',
      date: '26 Nov 2024',
      certificateId: 'ba96a9fd-6f47-4561-9d08-8db14ea2cc10',
      skills: ['Python', 'Fundamentals'],
      level: 'Beginner',
      category: 'programming',
    },
    {
      image: pythonZeroToHero,
      title: 'Python from Zero to Hero',
      issuer: 'Codefinity',
      date: '31 Jan 2025',
      certificateId: 'c28068be-2927-483f-b46a-03a8be53263a',
      skills: ['Python', 'Programming Fundamentals'],
      level: 'Beginner',
      category: 'programming',
    },
    {
      image: controlFlowPython,
      title: 'Control Flow in Python',
      issuer: 'Codefinity',
      date: '27 Jan 2025',
      certificateId: 'de28c260-926d-4b21-a044-863c1b4062ae',
      skills: ['Python', 'Conditionals', 'Loops'],
      level: 'Beginner',
      category: 'programming',
    },
    {
      image: dataTypesPython,
      title: 'Data Types in Python',
      issuer: 'Codefinity',
      date: '23 Jan 2025',
      certificateId: '9499b11e-a93b-415b-88ab-4b542db76164',
      skills: ['Python', 'Data Types'],
      level: 'Beginner',
      category: 'programming',
    },
    {
      image: pythonDataStructures,
      title: 'Python Data Structures',
      issuer: 'Codefinity',
      date: '24 Jan 2025',
      certificateId: 'b453d735-6740-44ed-a6d8-fa37af385e69',
      skills: ['Python', 'Data Structures'],
      level: 'Intermediate',
      category: 'programming',
    },
    {
      image: pythonFunctions,
      title: 'Python Functions Tutorial',
      issuer: 'Codefinity',
      date: '31 Jan 2025',
      certificateId: 'd1349965-b4b0-4b01-86c6-9d8ef345dd10',
      skills: ['Python', 'Functions'],
      level: 'Beginner',
      category: 'programming',
    },
    {
      image: pythonLoops,
      title: 'Python Loops Tutorial',
      issuer: 'Codefinity',
      date: '29 Jan 2025',
      certificateId: 'cdbf7629-1186-4a1f-b4f9-adbe5a2e219f',
      skills: ['Python', 'Loops'],
      level: 'Beginner',
      category: 'programming',
    },
    {
      image: javaBasics,
      title: 'Java Basics',
      issuer: 'Codefinity',
      date: '03 Jan 2025',
      certificateId: '4b082fe8-1daa-4f01-8495-caf518a14373',
      skills: ['Java', 'OOP Fundamentals'],
      level: 'Beginner',
      category: 'programming',
    },
    {
      image: financialPlanning,
      title: 'Financial Planning for Young Adults',
      issuer: 'University of Illinois Urbana-Champaign (via Coursera)',
      date: '11 Jul 2026',
      verifyUrl: 'https://coursera.org/verify/14R90N2W6VR9',
      skills: ['Financial Literacy', 'Budgeting'],
      category: 'professional-development',
    },
    {
      image: jetBlueTraining,
      title: 'JetBlue Customer Support Initial Training (CCI Class 62)',
      issuer: 'JetBlue University, College of Customer Support',
      date: '30 May 2025',
      skills: ['Customer Support', 'Communication'],
      category: 'professional-development',
    },
    {
      image: tostSoftwareDev,
      title: 'Software Development Training Program',
      issuer: 'TOST Group',
      date: '31 Jan 2024',
      skills: ['Software Development', 'Team Collaboration'],
      category: 'professional-development',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Certificates', icon: FaCertificate },
    { id: 'web-development', name: 'Web Development', icon: FaCode },
    { id: 'programming', name: 'Programming', icon: FaLaptopCode },
    { id: 'data-ai', name: 'Data & AI', icon: FaChartLine },
    { id: 'mobile', name: 'Mobile', icon: FaMobileAlt },
    { id: 'security', name: 'Security', icon: FaShieldAlt },
    { id: 'professional-development', name: 'Professional Development', icon: FaBriefcase },
  ];

  const categoryIcons = {
    'web-development': FaCode,
    programming: FaLaptopCode,
    'data-ai': FaChartLine,
    mobile: FaMobileAlt,
    security: FaShieldAlt,
    'professional-development': FaBriefcase,
  };

  const filteredAwards = filter === 'all' ? awards : awards.filter((award) => award.category === filter);

  const issuerCount = new Set(awards.map((award) => award.issuer)).size;
  const skillCount = new Set(awards.flatMap((award) => award.skills)).size;
  const courseraVerifiedCount = awards.filter((award) => award.verifyUrl).length;

  const CertificateModal = ({ certificate, onClose }) => {
    if (!certificate) return null;
    const Icon = categoryIcons[certificate.category] || FaCertificate;

    return (
      <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-gray-800 border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 z-10 shadow-lg"
            >
              <FaTimes />
            </button>

            {/* Certificate image */}
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto rounded-t-2xl"
            />

            {/* Certificate details */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{certificate.title}</h3>
                  {certificate.level && <p className="text-cyan-400 text-sm font-medium">{certificate.level} Level</p>}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <Icon className="text-2xl" />
                </div>
              </div>

              {/* Issuer info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-100 mb-2">Issuing Organization</h4>
                  <p className="text-gray-300">{certificate.issuer}</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-gray-100 mb-2 flex items-center gap-2">
                    <FaCalendarAlt className="text-cyan-400" />
                    Completed
                  </h4>
                  <p className="text-gray-300">{certificate.date}</p>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-200 mb-3">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-sm font-medium rounded-full border border-cyan-700/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential proof */}
              {(certificate.verifyUrl || certificate.certificateId) && (
                <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-4 rounded-xl border border-cyan-700/30">
                  {certificate.verifyUrl ? (
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-200">Verifiable Credential</h4>
                      <a
                        href={certificate.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-700 transition-colors duration-300"
                      >
                        <FaExternalLinkAlt />
                        Verify on Coursera
                      </a>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-semibold text-gray-200 mb-1">Certificate ID</h4>
                      <p className="text-gray-300 font-mono text-sm">{certificate.certificateId}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CertificateCard = ({ award, index }) => {
    const Icon = categoryIcons[award.category] || FaCertificate;

    return (
      <div
        className="group relative bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-700/30"
        style={{
          animationDelay: `${index * 80}ms`,
          animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        {/* Featured badge */}
        {award.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}

        {/* Certificate image with overlay */}
        <div className="relative overflow-hidden h-48">
          <img
            src={award.image}
            alt={award.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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
          <div className="flex items-start justify-between mb-4 gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <Icon className="text-sm" />
                </div>
                {award.level && (
                  <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold rounded-full">
                    {award.level}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-1">{award.title}</h3>
              <p className="text-gray-400 text-sm">{award.issuer}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700/50">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <FaCalendarAlt className="text-cyan-500" />
              {award.date}
            </span>
          </div>

          {/* Skills preview */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {award.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-cyan-900/50 text-cyan-300 text-xs font-medium rounded-full border border-cyan-700/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedCertificate(award)}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-300"
            >
              <FaExpandAlt />
              View Details
            </button>

            <div className="flex items-center gap-2">
              {award.verifyUrl && (
                <a
                  href={award.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  title="Verify Credential"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
              <button
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
                title="Download Certificate"
                onClick={() => {
                  const extension = award.image.split('.').pop().split('?')[0];
                  const link = document.createElement('a');
                  link.href = award.image;
                  link.download = `${award.title.replace(/\s+/g, '_')}_certificate.${extension}`;
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
    <section id="awards" ref={ref} className="section-padding bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-900/50 text-cyan-300 rounded-full text-sm font-semibold mb-4 border border-cyan-700/30">
            <FaAward className="inline mr-2" />
            Certifications & Achievements
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Professional Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A growing collection of certifications spanning web development, programming fundamentals,
            data & AI, mobile development, and professional training.
          </p>
        </div>

        {/* Stats overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center border border-gray-700/30">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              {awards.length}
            </div>
            <h3 className="font-semibold text-gray-200">Total Certificates</h3>
            <p className="text-sm text-gray-400 mt-2">Professional achievements</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center border border-gray-700/30">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              {issuerCount}
            </div>
            <h3 className="font-semibold text-gray-200">Issuing Organizations</h3>
            <p className="text-sm text-gray-400 mt-2">Codefinity, Coursera & more</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center border border-gray-700/30">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              {skillCount}
            </div>
            <h3 className="font-semibold text-gray-200">Skills Covered</h3>
            <p className="text-sm text-gray-400 mt-2">Technical competencies</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-center border border-gray-700/30">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              {courseraVerifiedCount}
            </div>
            <h3 className="font-semibold text-gray-200">Verified via Coursera</h3>
            <p className="text-sm text-gray-400 mt-2">Independently checkable</p>
          </div>
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

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAwards.map((award, index) => (
            <CertificateCard key={award.title} award={award} index={index} />
          ))}
        </div>

        {filteredAwards.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-700/30">
              <FaTrophy className="text-gray-500 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No certificates found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
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
