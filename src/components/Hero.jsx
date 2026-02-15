import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="section-padding pt-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="picture flex-shrink-0 relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              <img
                src="/cv pic .jpg"
                alt="Profile Picture"
                className="w-72 h-72 lg:w-96 lg:h-96 rounded-full shadow-2xl border-4 border-white transform transition-all duration-500 group-hover:scale-105"
              />
              {/* Status indicator */}
              <div className="absolute bottom-8 right-8 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
            </div>
          </div>
          
          <aside className="max-w-2xl text-center lg:text-left">
            {/* Greeting */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4 animate-fade-in">
                👋 Hello, I'm
              </span>
            </div>
            
            {/* Name with gradient */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-gray-900 animate-slide-up">Manzi Ya Musana</span>
              <span className="block text-4xl lg:text-6xl gradient-text animate-slide-up animation-delay-200">Ivan</span>
            </h1>
            
            {/* Title */}
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 animate-slide-up animation-delay-400">
                Full Stack Developer
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-600 animate-slide-up animation-delay-600">Available for opportunities</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 animate-slide-up animation-delay-800">
              Passionate software developer crafting innovative solutions that bridge technology and real-world challenges. 
              Specialized in building scalable web applications with modern frameworks and best practices.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in animation-delay-1000">
              <a href="#contact" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaEnvelope />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="#projects" className="relative group overflow-hidden border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  View Projects
                </span>
              </a>
              <a 
                href="#" 
                className="relative group overflow-hidden border-2 border-gray-600 text-gray-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  // Add download CV functionality
                  alert('CV download functionality to be implemented');
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <FaDownload />
                  Download CV
                </span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in animation-delay-1200">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="mailto:your.email@example.com"
                className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
