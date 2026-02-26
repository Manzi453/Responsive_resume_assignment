import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Awards />
          <Contact />
        </main>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
