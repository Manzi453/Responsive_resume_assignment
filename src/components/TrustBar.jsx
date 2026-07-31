import React from 'react';

const TRUSTED_BY = ['AAA Corporate Trustees', 'AAA Financiers', 'RG Partners', 'Sora Tax AI'];

const TrustBar = () => (
  <div className="border-y border-gray-800/50 bg-gray-950/40 py-6 relative z-10">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center">
      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 shrink-0">
        Building for
      </span>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        {TRUSTED_BY.map((name, index) => (
          <React.Fragment key={name}>
            {index > 0 && <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-600"></span>}
            <span className="text-sm sm:text-base font-medium text-gray-300">{name}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default TrustBar;
