import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Handle scroll to add background on navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar items - Complete navigation
  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'CONTACT', id: 'contact' }, // ✅ Contact section included
    { name: 'RESUME', id: 'resume', isResume: true }
  ];

  // Handle navbar item click
  const handleNavClick = (item) => {
    if (item.isResume) {
      // ✅ Open resume directly from public folder
      window.open(process.env.PUBLIC_URL + '/karan_resume.pdf', '_blank', 'noopener,noreferrer');
    } else {
      scrollToSection(item.id);
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
      ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center h-16 space-x-8">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer
                ${activeSection === item.id && !item.isResume ? 'text-white border-b border-white pb-1' : ''}
                transform hover:-translate-y-0.5 relative group animate-fade-in-down px-3 py-2 text-sm font-medium tracking-wider`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
              {/* Hover underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center h-16">
          {/* Burger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white transition-colors duration-200 p-2"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6 flex flex-col justify-center">
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/95 backdrop-blur-md`}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`block w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 
                ${
                  activeSection === item.id && !item.isResume
                    ? 'text-white bg-white/5 border-l-2 border-white'
                    : ''
                }
                transition-all duration-300 rounded-lg text-sm font-medium tracking-wider
                transform hover:translate-x-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;