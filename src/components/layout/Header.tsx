
import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 gap-4">
          <div className="flex items-center gap-4">
            <Navigation />
            <Logo />
          </div>
          <div className="flex-1 flex justify-center">
            <SearchBar />
          </div>
          <div className="w-32">
            {/* Reserved space for future login/user button */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
