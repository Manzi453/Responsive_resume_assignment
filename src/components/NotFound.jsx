import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Button } from './shared';

const NotFound = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-gray-300 mb-8">This page doesn&apos;t exist.</p>
        <Button to="/">
          <FaHome />
          Back Home
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
