import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, FileText } from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <nav className=" flex-1 overflow-auto top-0 w-full bg-black/90 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 md:space-x-12">
              {['HOME', 'ABOUT', 'SKILLS', 'EXPERIENCE', 'CONTACT', 'RESUME'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-xs sm:text-sm font-light tracking-widest transition-all duration-300 hover:text-white hover:transform hover:-translate-y-0.5 py-1 ${
                    item === 'CONTACT' 
                      ? 'text-white relative after:absolute after:bottom-[-4px] sm:after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:rounded-full' 
                      : 'text-gray-400'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 sm:pt-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start min-h-[30vh]">
            
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="space-y-6 sm:space-y-8">
                <h1 className="text-3xl sm:text-4xl font-light text-white mb-6 sm:mb-8 tracking-wide">
                  Contact
                </h1>
                
                <div className="mb-8 sm:mb-12">
                  <a 
                    href="mailto:Karanchopda714@gmail.com"
                    className="text-gray-400 hover:text-blue-400 font-mono text-base sm:text-lg break-all sm:break-normal transition-colors duration-300 cursor-pointer"
                  >
                    Karanchopda714@gmail.com
                  </a>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    { 
                      name: 'Resume', 
                      icon: FileText, 
                      href: process.env.PUBLIC_URL + '/karan_resume.pdf',
                      delay: '0.2s'
                    },
                    // { 
                    //   name: 'Read.cv', 
                    //   icon: ExternalLink, 
                    //   href: '#read-cv',
                    //   delay: '0.4s'
                    // },
                    { 
                      name: 'LinkedIn', 
                      icon: Linkedin, 
                      href: 'https://www.linkedin.com/in/karan-chopda-b7870127a/',
                      delay: '0.6s'
                    },
                    { 
                      name: 'Github', 
                      icon: Github, 
                      href: 'https://github.com/karanchopda',
                      delay: '0.8s'
                    }
                  ].map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3 sm:space-x-4 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 sm:hover:translate-x-4 relative touch-manipulation"
                      style={{ animationDelay: link.delay }}
                    >
                      <div className="absolute -left-2 sm:-left-4 w-0 h-0.5 bg-blue-400 group-hover:w-4 sm:group-hover:w-8 transition-all duration-300"></div>
                      <link.icon className="w-5 h-5 sm:w-6 sm:h-6 opacity-70 flex-shrink-0" />
                      <span className="text-lg sm:text-xl font-light tracking-wide">
                        {link.name}
                        <ExternalLink className="inline w-3 h-3 sm:w-4 sm:h-4 ml-2 opacity-50" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - AWS Certifications */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* AWS Solutions Architect Associate */}
                {/* <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:rotate-2 touch-manipulation">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 sm:p-6 rounded-lg shadow-2xl border border-blue-500/20">
                    <div className="text-center text-white">
                      <div className="mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-white rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-xs sm:text-sm">AWS</span>
                        </div>
                      </div>
                      <div className="text-xs font-bold mb-1 sm:mb-2">SOLUTIONS</div>
                      <div className="text-xs font-bold mb-1 sm:mb-2">ARCHITECT</div>
                      <div className="text-xs font-bold mb-2 sm:mb-3">ASSOCIATE</div>
                      <div className="border-t border-white/30 pt-2">
                        <div className="text-xs opacity-90">AWS</div>
                        <div className="text-xs opacity-90">Certified</div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* AWS SysOps Administrator Associate */}
                {/* <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:-rotate-2 touch-manipulation">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-4 sm:p-6 rounded-lg shadow-2xl border border-purple-500/20">
                    <div className="text-center text-white">
                      <div className="mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-white rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-xs sm:text-sm">AWS</span>
                        </div>
                      </div>
                      <div className="text-xs font-bold mb-1 sm:mb-2">SYSOPS</div>
                      <div className="text-xs font-bold mb-1 sm:mb-2">ADMINISTRATOR</div>
                      <div className="text-xs font-bold mb-2 sm:mb-3">ASSOCIATE</div>
                      <div className="border-t border-white/30 pt-2">
                        <div className="text-xs opacity-90">AWS</div>
                        <div className="text-xs opacity-90">Certified</div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* AWS Partner Badge */}
                {/* <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:rotate-2 touch-manipulation sm:col-span-2 lg:col-span-1">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-700 p-4 sm:p-6 rounded-lg shadow-2xl border border-orange-500/20">
                    <div className="text-center text-white">
                      <div className="mb-2 sm:mb-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto bg-white rounded-full flex items-center justify-center">
                          <span className="text-orange-600 font-bold text-xs sm:text-sm">AWS</span>
                        </div>
                      </div>
                      <div className="text-xs font-bold mb-1 sm:mb-2">TECHNICAL</div>
                      <div className="text-xs font-bold mb-1 sm:mb-2">AI ESSENTIALS</div>
                      <div className="text-xs font-bold mb-2 sm:mb-3">BUSINESS</div>
                      <div className="border-t border-white/30 pt-2">
                        <div className="text-xs opacity-90">PARTNER</div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <footer className="mt-8 sm:mt-12 lg:mt-16 pb-4 sm:pb-6">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-end sm:items-center space-y-reverse space-y-4 sm:space-y-0">
              <div className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white/10 select-none">
                  Adios!
                </h2>
              </div>
              
              <div className={`transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="text-right text-white/20">
                  <div className="text-4xl sm:text-6xl md:text-8xl font-light">©2025</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;