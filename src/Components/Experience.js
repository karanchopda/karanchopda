// import React from 'react';

// const Experience = () => {
//   const techSkills = [
//     'React Js',
//     'Node JS', 
//     'AWS',
//     'Terraform',
//     'PostgreSQL',
//     'Typescript',
//     'Javascript'
//   ];

//   const responsibilities = [
//     'Developing features of software application using my frontend and backend development skills.',
//     'Working closely with clients for project development. Managing the software development lifecycle.',
//     'Testing and fixing bugs.',
//     'Applying best practices and standards to optimize codebase.',
//     'Communicating with other team members to deliver successful projects.',
//     'Developing and executing project plans.',
//     'Exploring new Technologies or frameworks as per need of client or organization.',
//     'Taking interviews of potential candidates.'
//   ];

//   const projects = ['AMEX', 'TLYNT', 'Red Carpet', 'Tech Holding Website'];

//   const clientLogos = [
//     {
//       name: 'American Express',
//       bgColor: 'bg-blue-600',
//       textColor: 'text-white',
//       text: 'AMERICAN EXPRESS'
//     },
//     {
//       name: 'TL',
//       bgColor: 'bg-white',
//       textColor: 'text-orange-600', 
//       text: 'TL'
//     }
//   ];

//   const TechBadge = ({ skill }) => (
//     <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-transparent border border-gray-600 text-white rounded-md text-xs sm:text-sm font-medium hover:border-purple-400 hover:text-purple-300 transition-all duration-300 cursor-default">
//       {skill}
//     </span>
//   );

//   return (
//     <div className="min-h-screen bg-black text-white overflow-hidden">
//       <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20">
//         <div className="max-w-6xl mx-auto">
          
//           {/* Main Experience Card */}
//           <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            
//             {/* Left Side - Company Info */}
//             <div className="flex-shrink-0 text-center lg:text-left animate-fade-in-left">
//               {/* Company Logo */}
//               <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto lg:mx-0 mb-6 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
//                 <span className="text-white font-bold text-2xl sm:text-3xl">E</span>
//               </div>
              
//               {/* Company Name */}
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
//                 Tech Holding
//               </h2>
              
//               {/* Location */}
//               <p className="text-gray-400 text-sm sm:text-base mb-8">
//                 Ahmedabad, India
//               </p>
//             </div>

//             {/* Right Side - Job Details */}
//             <div className="flex-1 animate-fade-in-right">
              
//               {/* Job Title and Duration */}
//               <div className="mb-8">
//                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
//                   Software Engineer
//                 </h1>
//                 <p className="text-gray-400 text-lg sm:text-xl mb-6">
//                   January 2023 - Present
//                 </p>
                
//                 {/* Tech Skills Badges */}
//                 <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
//                   {techSkills.map((skill, index) => (
//                     <div
//                       key={index}
//                       className="animate-fade-in-up"
//                       style={{
//                         animationDelay: `${index * 0.1}s`,
//                         animationFillMode: 'both'
//                       }}
//                     >
//                       <TechBadge skill={skill} />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Responsibilities */}
//               <div className="mb-8 animate-slide-up" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
//                 <ul className="space-y-3 sm:space-y-4 text-gray-300">
//                   {responsibilities.map((responsibility, index) => (
//                     <li 
//                       key={index} 
//                       className="flex items-start gap-3 text-sm sm:text-base leading-relaxed animate-fade-in-up"
//                       style={{
//                         animationDelay: `${0.4 + (index * 0.1)}s`,
//                         animationFillMode: 'both'
//                       }}
//                     >
//                       <span className="text-purple-400 mt-2 flex-shrink-0">•</span>
//                       <span>{responsibility}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Projects */}
//               <div className="mb-8 animate-slide-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
//                 <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
//                   <span className="text-white">Projects:</span>{' '}
//                   <span className="text-gray-300 font-normal">
//                     {projects.join(', ')}
//                   </span>
//                 </h3>
//               </div>

//               {/* Worked for clients */}
//               <div className="animate-slide-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
//                 <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
//                   Worked for clients via tech holding
//                 </h3>
                
//                 {/* Client Logos */}
//                 <div className="flex gap-4 sm:gap-6">
//                   {clientLogos.map((client, index) => (
//                     <div
//                       key={index}
//                       className={`w-16 h-16 sm:w-20 sm:h-20 ${client.bgColor} rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transform transition-all duration-300 animate-fade-in-up`}
//                       style={{
//                         animationDelay: `${1 + (index * 0.2)}s`,
//                         animationFillMode: 'both'
//                       }}
//                     >
//                       <span className={`${client.textColor} font-bold text-xs sm:text-sm text-center leading-tight px-1`}>
//                         {client.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in-left {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fade-in-right {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-left {
//           animation: fade-in-left 0.8s ease-out;
//         }

//         .animate-fade-in-right {
//           animation: fade-in-right 0.8s ease-out;
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out;
//         }

//         /* Mobile optimizations */
//         @media (max-width: 640px) {
//           .animate-fade-in-left,
//           .animate-fade-in-right,
//           .animate-fade-in-up,
//           .animate-slide-up {
//             animation-delay: 0s !important;
//             animation-duration: 0.4s;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Experience;