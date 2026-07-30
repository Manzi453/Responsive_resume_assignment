import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-gray-300 mb-8">This page doesn&apos;t exist.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 py-3 px-8 bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:from-cyan-700 hover:to-blue-800 shadow-lg shadow-cyan-500/25"
        >
          <FaHome />
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
