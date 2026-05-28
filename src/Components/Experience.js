import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techSkills = [
    'React JS',
    'Node JS',
    'AWS',
    'PostgreSQL',
    'Typescript',
    'Javascript'
  ];

  const responsibilities = [
    'Developing features of software application using my frontend and backend development skills',
    'Working closely with clients for project development. Managing the software development lifecycle',
    'Testing and fixing bugs',
    'Applying best practices and standards to optimize codebase',
    'Communicating with other team members to deliver successful projects',
    'Developing and executing project plans',
    'Exploring new Technologies or frameworks as per need of client or organization',
    'Taking interviews of potential candidates'
  ];

  const TechBadge = ({ skill }) => (
    <span className="px-3 py-1.5 bg-gray-800 border border-gray-700 text-gray-300 rounded-md text-xs font-medium hover:border-yellow-400 hover:text-yellow-300 transition-all duration-300 cursor-default">
      {skill}
    </span>
  );

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/5 to-transparent">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-20 sm:pt-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Left Aligned */}
          <div
            className={`text-left mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-500 shadow-lg">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Work Experience
              </h1>
            </div>
          </div>

          {/* Experience Card */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Company Info */}
                <div className="flex-shrink-0 lg:w-64">
                  {/* Company Logo */}
                  <div className="w-24 h-24 mb-4 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg p-2 border border-gray-800">
                    <img 
                      src="/images/edelta-logo.svg" 
                      alt="EDELTA Corporation" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Company Name */}
                  <h2 className="text-2xl font-bold text-white mb-1">
                    EDELTA CORPORATION
                  </h2>

                  {/* Location */}
                  <p className="text-gray-400 text-sm mb-6">
                    Surat, India
                  </p>
                </div>

                {/* Right Side - Job Details */}
                <div className="flex-1">
                  {/* Job Title and Duration */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Full Stack Developer
                    </h3>
                    <p className="text-gray-400 text-lg mb-4">
                      April 2025 - Present
                    </p>

                    {/* Tech Skills Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {techSkills.map((skill, index) => (
                        <TechBadge key={index} skill={skill} />
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <ul className="space-y-3 text-gray-300">
                      {responsibilities.map((responsibility, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-sm leading-relaxed"
                        >
                          <span className="text-yellow-400 mt-0.5 flex-shrink-0 text-lg leading-none">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>                  
                </div>
              </div>
            </div>
          </div>

          {/* Footer Space */}
          <div className="mt-20 mb-8"></div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation-delay: 0s !important;
            animation-duration: 0.4s;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;