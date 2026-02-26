import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500/30">
              <img 
                src="/src/images/logo.jpeg" 
                alt="Manzi Ya Musana Ivan Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">Manzi Ya Musana Ivan</h3>
            <p className="text-gray-400">Software Developer & Innovator</p>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              &copy; {currentYear} Manzi Ya Musana Ivan. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
