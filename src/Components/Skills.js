import React from 'react';

const SkillsSection = () => {
  const skillsData = {
    Frontend: [
      'HTML',
      'CSS', 
      'React Js',
      'vue Js',
      'Tailwind',
      'MUI',
      'Javascript',
      'Typescript',
    //   'Next Js 13'
    ],
    Backend: [
      'Node Js',
      'Express Js', 
      'RESTful APIs',
      'Authentication (JWT, OAuth)'
    //   'Python',
    //   'GoLang',
    //   'Fiber'
    ],
    Database: [
      'MySQL',
    //   'PostgreSQL',
      'MongoDB',
      'Mongoose'
    ],
    // Devops: [
    //   'AWS',
    // //   'Terraform',
    // //   'Terragrunt',
    //   'Firebase'
    // ],
    Languages: [
    //   'Python',
    //   'GoLang',
      'Javascript',
      'Typescript'
    ]
  };

  const SkillBadge = ({ skill }) => (
    <div className="px-4 sm:px-5 py-2 sm:py-2.5 bg-transparent border border-gray-700 text-white rounded-lg text-xs sm:text-sm font-medium hover:border-yellow-400 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/10 transform hover:scale-105 transition-all duration-300 ease-out cursor-default whitespace-nowrap">
      {skill}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex items-center gap-3 sm:gap-4 mb-16 sm:mb-20 md:mb-24 animate-fade-in">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-500 flex items-center justify-center text-xl sm:text-2xl md:text-3xl shadow-lg shadow-purple-500/25">
              🔮
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              What I know
            </h1>
          </div>

          {/* Skills Sections - Vertical Stack */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <div 
                key={category} 
                className="animate-slide-up"
                style={{
                  animationDelay: `${categoryIndex * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Category Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-10 tracking-wide">
                  {category}
                </h2>
                
                {/* Skills Row - Horizontal Layout */}
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5">
                  {skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="animate-fade-in-up"
                      style={{
                        animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      <SkillBadge skill={skill} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-slide-up {
            animation-delay: 0s !important;
          }
          
          .animate-fade-in-up {
            animation-delay: 0s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;