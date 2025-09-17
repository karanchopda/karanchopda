import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ isLoaded }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SKILLS', path: '/skills' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'RESUME', path: '/resume' }
  ];

  return (
    <nav className={`relative z-10 flex justify-center pt-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="flex space-x-12 text-sm font-medium tracking-wider">
        {navItems.map((item, index) => (
          <Link 
            key={item.name}
            to={item.path}
            className={`text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer
              ${location.pathname === item.path ? 'text-white border-b border-white pb-1' : ''}
              transform hover:-translate-y-0.5`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;