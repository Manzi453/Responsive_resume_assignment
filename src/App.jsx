import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FloatingCTA from './components/FloatingCTA';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhatIBuild from './components/WhatIBuild';
import SelectedWork from './components/SelectedWork';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import AboutSnippet from './components/AboutSnippet';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

// Lazy-loaded: keeps the homepage bundle light (fast first paint) while
// deferring secondary routes — Awards alone pulls in ~5MB of certificate images.
const Skills = lazy(() => import('./components/Skills'));
const Services = lazy(() => import('./components/Services'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Projects = lazy(() => import('./components/Projects'));
const Awards = lazy(() => import('./components/Awards'));
const Contact = lazy(() => import('./components/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));

// Loading fallback component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ochre"></div>
  </div>
);

// Resets scroll position on every route change, since React Router
// doesn't do this automatically the way a full page navigation would.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const PAGE_TITLES = {
  '/': 'Manzi Ivan - Web & AI Systems for East African Businesses',
  '/skills': 'Skills - Manzi Ya Musana Ivan',
  '/services': 'Services - Manzi Ya Musana Ivan',
  '/experience': 'About & Experience - Manzi Ya Musana Ivan',
  '/education': 'Education - Manzi Ya Musana Ivan',
  '/projects': 'Projects - Manzi Ya Musana Ivan',
  '/awards': 'Awards & Certifications - Manzi Ya Musana Ivan',
  '/contact': 'Contact - Manzi Ya Musana Ivan',
};

// Keeps the tab/share title in sync with the route, since this is a single-page
// app and the static <title> in index.html would otherwise never change.
const DocumentTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] || 'Page Not Found - Manzi Ya Musana Ivan';
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ink text-ivory">
        <Navbar />
        <ScrollToTop />
        <DocumentTitle />
        <Suspense fallback={<LoadingSpinner />}>
          <main>
            <Routes>
              <Route path="/" element={<><Hero /><WhatIBuild /><SelectedWork /><HowItWorks /><Stats /><Testimonials /><AboutSnippet /><ContactCTA /></>} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/services" element={<Services />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Suspense>
        <FloatingCTA />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
