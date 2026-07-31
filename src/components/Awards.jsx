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
      <div className="fixed inset-0 bg-ink/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="notch-card bg-charcoal border border-ivory/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-ink/70 hover:bg-ink notch-btn flex items-center justify-center text-ivory/70 hover:text-ivory transition-all duration-300 z-10 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto"
            />

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-ivory mb-2">{certificate.title}</h3>
                  {certificate.level && <p className="text-gold text-sm font-medium font-body">{certificate.level} Level</p>}
                </div>
                <div className="w-16 h-16 bg-ochre notch-btn flex items-center justify-center text-ink shadow-lg flex-shrink-0">
                  <Icon className="text-2xl" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-ink/50 p-4">
                  <h4 className="font-semibold text-ivory/90 mb-2 font-body">Issuing Organization</h4>
                  <p className="text-ivory/70 font-body">{certificate.issuer}</p>
                </div>
                <div className="bg-ink/50 p-4">
                  <h4 className="font-semibold text-ivory/90 mb-2 flex items-center gap-2 font-body">
                    <FaCalendarAlt className="text-ochre" />
                    Completed
                  </h4>
                  <p className="text-ivory/70 font-body">{certificate.date}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-ivory/90 mb-3 font-body">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-ochre/15 text-gold text-sm font-medium border border-ochre/30 font-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {(certificate.verifyUrl || certificate.certificateId) && (
                <div className="bg-ochre/10 p-4 border border-ochre/30">
                  {certificate.verifyUrl ? (
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <h4 className="font-semibold text-ivory/90 font-body">Verifiable Credential</h4>
                      <a
                        href={certificate.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 notch-btn bg-ochre text-ink font-medium hover:bg-[#2578b3] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                      >
                        <FaExternalLinkAlt />
                        Verify on Coursera
                      </a>
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-semibold text-ivory/90 mb-1 font-body">Certificate ID</h4>
                      <p className="text-ivory/70 font-mono text-sm">{certificate.certificateId}</p>
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
        className="group relative notch-card bg-charcoal shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-ivory/10 hover:border-ochre/30"
        style={{
          animationDelay: `${index * 80}ms`,
          animation: isVisible ? 'slide-up 0.8s ease-out forwards' : 'none',
          opacity: isVisible ? 1 : 0
        }}
      >
        {award.featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-gold text-ink text-xs font-bold shadow-lg">
              ⭐ Featured
            </span>
          </div>
        )}

        <div className="relative overflow-hidden h-48">
          <img
            src={award.image}
            alt={award.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <button
            onClick={() => setSelectedCertificate(award)}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus-visible:opacity-100 focus-visible:outline-none"
          >
            <div className="bg-ivory px-4 py-2 flex items-center gap-2 text-ink font-medium">
              <FaExpandAlt />
              View Certificate
            </div>
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4 gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-ochre notch-btn flex items-center justify-center text-ink shadow-md flex-shrink-0">
                  <Icon className="text-sm" />
                </div>
                {award.level && (
                  <span className="px-2 py-1 bg-ochre/15 text-gold text-xs font-semibold border border-ochre/30">
                    {award.level}
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-bold text-ivory mb-1">{award.title}</h3>
              <p className="text-ivory/60 text-sm font-body">{award.issuer}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4 pb-4 border-b border-ivory/10">
            <span className="text-sm text-ivory/60 flex items-center gap-2 font-body">
              <FaCalendarAlt className="text-ochre" />
              {award.date}
            </span>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {award.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-ochre/15 text-gold text-xs font-medium border border-ochre/30 font-body"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedCertificate(award)}
              className="flex items-center gap-2 text-gold hover:text-ivory font-medium text-sm transition-colors duration-300 font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm"
            >
              <FaExpandAlt />
              View Details
            </button>

            <div className="flex items-center gap-3">
              {award.verifyUrl && (
                <a
                  href={award.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-ivory transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm"
                  title="Verify Credential"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
              <button
                className="text-ivory/60 hover:text-ivory transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm"
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
    <section id="awards" ref={ref} className="section-padding bg-gradient-to-b from-ink via-charcoal to-ink relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-ochre/15 text-gold text-sm font-semibold mb-4 border border-ochre/30">
            <FaAward className="inline mr-2" />
            Certifications & Achievements
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4 text-ivory">
            Professional Certifications
          </h2>
          <p className="text-ivory/60 text-lg max-w-3xl mx-auto font-body">
            A growing collection of certifications spanning web development, programming fundamentals,
            data & AI, mobile development, and professional training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {[
            { value: awards.length, label: 'Total Certificates', sub: 'Professional achievements' },
            { value: issuerCount, label: 'Issuing Organizations', sub: 'Codefinity, Coursera & more' },
            { value: skillCount, label: 'Skills Covered', sub: 'Technical competencies' },
            { value: courseraVerifiedCount, label: 'Verified via Coursera', sub: 'Independently checkable' },
          ].map((stat) => (
            <div key={stat.label} className="notch-card bg-charcoal p-6 shadow-lg text-center border border-ivory/10">
              <div className="w-16 h-16 bg-ochre notch-btn flex items-center justify-center text-ink text-2xl font-bold font-display mx-auto mb-4">
                {stat.value}
              </div>
              <h3 className="font-semibold text-ivory/90 font-body">{stat.label}</h3>
              <p className="text-sm text-ivory/60 mt-2 font-body">{stat.sub}</p>
            </div>
          ))}
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
          {filteredAwards.map((award, index) => (
            <CertificateCard key={award.title} award={award} index={index} />
          ))}
        </div>

        {filteredAwards.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-charcoal notch-btn flex items-center justify-center mx-auto mb-4 border border-ivory/10">
              <FaTrophy className="text-ivory/40 text-3xl" />
            </div>
            <h3 className="font-display text-xl font-semibold text-ivory/80 mb-2">No certificates found</h3>
            <p className="text-ivory/60 font-body">Try selecting a different category</p>
          </div>
        )}
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};

export default Awards;
