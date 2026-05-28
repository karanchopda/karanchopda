import React, { useState, useEffect } from "react";
import {
  Github,
  Laptop,
  Globe,
  Database,
  Calendar,
  Code2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleExpanded = (projectId) => {
    setExpandedCards(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 1,
      title: "Ask-PDF Application",
      subtitle: "AI-Powered Platform",
      description:
        "An intelligent document interaction platform allowing users to upload PDFs and query content using multiple AI models. Engineered PDF parsing and AI model integration for natural language querying of document content.",
      technologies: ["ReactJS", "NodeJS", "Python", "AI Models", "MongoDB"],
      features: [
        "PDF parsing and AI integration",
        "Multi-model support",
        "Natural language querying",
        "Real-time document analysis",
        "Production deployment",
      ],
      liveDemo: "https://ask-pdf.edeltacorp.com",
      github: null,
      icon: Database,
      delay: "100",
    },
    {
      id: 2,
      title: "WhatsApp Broadcast",
      subtitle: "Business Communication Tool",
      description:
        "A web application enabling businesses to send bulk WhatsApp messages, manage contacts, and track broadcast campaigns. Built bulk messaging system with contact management and real-time delivery updates.",
      technologies: ["ReactJS", "NodeJS", "Express.js", "Supabase", "PostgreSQL", "WhatsApp API"],
      features: [
        "Bulk messaging system",
        "Contact management",
        "Campaign tracking",
        "Real-time delivery updates",
        "Audience segmentation",
      ],
      liveDemo: "https://wb.edeltacorp.com",
      github: null,
      icon: Globe,
      delay: "200",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      subtitle: "Showcase Website",
      description:
        "Designed and built a modern, interactive portfolio to showcase projects, skills, and work experience with smooth animations for a professional user experience.",
      technologies: ["ReactJS", "Tailwind CSS", "NodeJS"],
      features: [
        "Interactive animations",
        "Contact form integration",
        "Email service connection",
        "Custom domain support",
        "Professional UX design",
      ],
      liveDemo: "https://karanchopda.vercel.app",
      github: "https://github.com/karanchopda/karanchopda_portfolio",
      icon: Laptop,
      delay: "300",
    },
    {
      id: 4,
      title: "Seva Auto Sales",
      subtitle: "Client Project",
      description:
        "Developed a fully responsive website for a business that customizes vehicles for individuals with physical disabilities. Implemented accessibility features to ensure usability for all users.",
      technologies: ["ReactJS", "NodeJS", "Tailwind CSS"],
      features: [
        "Fully responsive design",
        "Accessibility features",
        "SEO optimization",
        "Custom vehicle showcase",
        "Contact integration",
      ],
      liveDemo: "https://sevaautosales.vercel.app",
      github: "https://github.com/Sevaautosales/sevaautosales",
      icon: Globe,
      delay: "400",
    },
    {
      id: 5,
      title: "Seva Invoice Generator",
      subtitle: "Business Tool",
      description:
        "Personal invoice generator web app designed for creating professional invoices quickly and efficiently with customizable templates and automated calculations.",
      technologies: ["ReactJS", "NextJS", "Tailwind CSS"],
      features: [
        "Invoice generation",
        "Customizable templates",
        "Automated calculations",
        "PDF export",
        "Client management",
      ],
      liveDemo: "https://seva-invoice-generator.vercel.app",
      github: null,
      icon: Code2,
      delay: "500",
    },
    {
      id: 6,
      title: "Nindra",
      subtitle: "Health Tracker",
      description:
        "Sleep cycle tracker for logging hours, monitoring patterns & health insights. Helps users understand their sleep quality and improve their rest habits.",
      technologies: ["ReactJS", "NodeJS", "Supabase", "PostgreSQL"],
      features: [
        "Sleep cycle tracking",
        "Pattern monitoring",
        "Health insights",
        "Data visualization",
        "Progress reports",
      ],
      liveDemo: "https://nindra.vercel.app",
      github: null,
      icon: Calendar,
      delay: "600",
    },
    {
      id: 7,
      title: "Moniqo AI",
      subtitle: "AI Financial Tool",
      description:
        "AI-powered tool to detect wasteful spending & suggest expense reductions from bank statements. Analyzes spending patterns and provides actionable insights.",
      technologies: ["ReactJS", "NodeJS", "AI API", "Supabase", "PostgreSQL"],
      features: [
        "Spending pattern analysis",
        "Wasteful expense detection",
        "AI-powered suggestions",
        "Bank statement parsing",
        "Financial insights",
      ],
      liveDemo: "https://moniqoai.vercel.app",
      github: null,
      icon: Database,
      delay: "700",
    },
    {
      id: 8,
      title: "Dr.Fix Family",
      subtitle: "Loyalty & Rewards Mobile App",
      description:
        "A React Native-based loyalty and rewards mobile application developed for cement, chemical, and distributor networks. Enhances customer engagement through reward programs, user management, and seamless brand-customer interaction.",
      technologies: ["React Native", "NodeJS", "MongoDB"],
      features: [
        "Loyalty & rewards program",
        "Distributor network connectivity",
        "User management system",
        "Brand-customer engagement",
        "Scalable architecture",
      ],
      liveDemo: "https://dr-fix-family.vercel.app/api/download-apk",
      github: null,
      icon: Laptop,
      delay: "800",
    },
    {
      id: 9,
      title: "AI Model Tester Platform",
      subtitle: "ML Testing Tool",
      description:
        "A platform for uploading, managing, and testing Python-trained AI models including STT, TTS, and LLM models. Built admin panel with real-time comparison testing and model switching functionality.",
      technologies: ["ReactJS", "NodeJS", "Express.js", "Python", "MongoDB"],
      features: [
        "STT, TTS, LLM model support",
        "Real-time comparison testing",
        "Model switching functionality",
        "Admin panel for management",
        "Performance metrics",
      ],
      liveDemo: null,
      github: null,
      icon: Code2,
      delay: "900",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
          {/* Left-aligned Header like Skills Page */}
          <div
            className={`text-left mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-500 shadow-lg">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  Look What I Made
                </h1>
              </div>
            </div>
            <p className="text-gray-400 text-lg sm:text-xl max-w-3xl font-light leading-relaxed">
              A collection of projects showcasing my skills in web development,
              from client work to personal experiments
            </p>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                } hover:scale-[1.02] hover:-translate-y-2`}
                style={{ animationDelay: `${project.delay}ms` }}
              >
                {/* Subtle hover glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

                {/* Main card */}
                <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 h-full flex flex-col hover:border-yellow-500/30 transition-all duration-500">
                  {/* Project Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description with Read More functionality */}
                  <div className="mb-4">
                    <p className={`text-gray-300 text-sm leading-relaxed ${
                      expandedCards[project.id] ? '' : 'line-clamp-3'
                    }`}>
                      {project.description}
                    </p>
                    
                    {/* Read More Button - Show when content would overflow */}
                    {project.description.length > 120 && (
                      <button
                        onClick={() => toggleExpanded(project.id)}
                        className="mt-2 text-xs text-orange-400 hover:text-orange-300 transition-colors duration-200 flex items-center space-x-1 font-medium"
                      >
                        <span>{expandedCards[project.id] ? 'Show Less' : 'Read More'}</span>
                        {expandedCards[project.id] ? 
                          <ChevronUp className="w-3 h-3" /> : 
                          <ChevronDown className="w-3 h-3" />
                        }
                      </button>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-gray-600 transition-colors duration-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features - Show/hide based on expanded state for longer descriptions */}
                  <div className={`mb-6 ${
                    project.description.length > 120 && !expandedCards[project.id] ? 'hidden md:block' : 'block'
                  }`}>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 flex-1 group/btn"
                      >
                        <Globe className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex-1 border border-gray-700 hover:border-gray-600 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Footer */}
          <div className="mt-20 mb-8">{/* Empty footer space */}</div>
        </div>
      </main>

      {/* Enhanced floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;