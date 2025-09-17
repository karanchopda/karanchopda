import React, { useState, useEffect } from "react";
import {  ArrowDown } from "lucide-react";
import Navbar from "./Navbar";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
   
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Responsive Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Desktop background elements */}
        <div className="hidden md:block absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-gray-800/10 to-gray-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-gray-700/10 to-gray-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Mobile background elements - smaller and repositioned */}
        <div className="md:hidden absolute top-10 left-5 w-48 h-48 bg-gradient-to-r from-gray-800/10 to-gray-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="md:hidden absolute bottom-10 right-5 w-48 h-48 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="md:hidden absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-r from-gray-700/10 to-gray-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Responsive Grid Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/5 to-transparent">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content - Responsive Layout */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
        {/* Main Text Section */}
        <div
          className={`text-center transition-all duration-1000 delay-300 max-w-5xl mx-auto ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Responsive Main Heading with Blinking Cursor */}
          <div className="mb-6 sm:mb-8">
            <h1 className="font-black text-white tracking-tight leading-none">
              {/* Mobile: Inline Layout */}
              <div className="block sm:hidden">
                <div className="text-4xl xs:text-5xl flex items-center justify-center space-x-2">
                  <span className="inline-block animate-fade-in-up">KARAN</span>
                  <span className="inline-block animate-fade-in-up delay-200">
                    CHOPDA
                  </span>
                  <span className="h-16 xs:h-20 w-[4px] xs:w-[6px] bg-yellow-500 animate-blink"></span>
                </div>
              </div>

              {/* Tablet and up: Horizontal Layout */}
              <div className="hidden sm:flex items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="inline-block animate-fade-in-up">KARAN</span>
                <span className="inline-block animate-fade-in-up delay-200 ml-2 sm:ml-4">
                  CHOPDA
                </span>
                <span className="ml-2 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-[6px] sm:w-[8px] bg-yellow-500 animate-blink"></span>
              </div>
            </h1>
          </div>

          {/* Responsive Subtitle */}
          <div
            className={`text-gray-400 font-light tracking-widest transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Mobile: Stacked subtitle */}
            <div className="block sm:hidden text-sm xs:text-base space-y-1">
              <span className="mx-2 sm:mx-4 text-gray-600">•</span>

              <p className="text-gray-200 font-medium">Full Stack Developer</p>
              <div className="flex items-center justify-center">
                <span className="mx-2 sm:mx-4 text-gray-600">•</span>
              </div>
            </div>

            {/* Tablet and up: Horizontal subtitle */}
            <div className="hidden sm:block text-base sm:text-lg md:text-xl">
              <p>
                <span className="mx-2 sm:mx-4 text-gray-600">•</span>
                <span className="text-gray-200 font-medium">
                  Full Stack Developer
                </span>
                <span className="mx-2 sm:mx-4 text-gray-600">•</span>
              </p>
            </div>
          </div>
        </div>

        {/* Ultra Modern Morphing Circle Scroll Indicator */}
        <div
          className={`absolute bottom-8 sm:bottom-12 transition-all duration-1000 delay-1200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Option 1: Morphing Circle Indicator - Active */}
          <div 
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => {
              // Scroll to about section
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
          >
            <div className="relative">
              {/* Main morphing circle */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                <div className="absolute inset-0 border border-gray-500/50 rounded-full animate-morph-circle group-hover:border-white/80 transition-colors duration-300"></div>
                <div className="absolute inset-2 border border-gray-400/30 rounded-full animate-morph-circle-inner group-hover:border-white/60 transition-colors duration-300" style={{animationDelay: '0.5s'}}></div>
                
                {/* Center arrow that rotates and pulses */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white animate-rotate-pulse transition-colors duration-300" />
                </div>
                
                {/* Orbiting dots */}
                <div className="absolute inset-0">
                  <div className="w-full h-full animate-orbit">
                    <div className="w-2 h-2 bg-yellow-500/60 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 animate-pulse group-hover:bg-yellow-400 transition-colors duration-300"></div>
                  </div>
                  <div className="w-full h-full animate-orbit-reverse" style={{animationDelay: '1s'}}>
                    <div className="w-1.5 h-1.5 bg-blue-500/60 rounded-full absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 animate-pulse group-hover:bg-blue-400 transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Enhanced hover effect - outer glow ring */}
                <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-full h-full rounded-full border border-white/10 animate-ping"></div>
                </div>

                {/* Secondary hover ring */}
                <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-500/5 to-blue-500/5 animate-pulse blur-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced animated text */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-0.5 bg-gradient-to-r from-transparent to-gray-400 animate-expand group-hover:to-white transition-colors duration-300"></div>
                <span className="text-xs text-gray-400 font-light tracking-[0.2em] animate-type-writer group-hover:text-white transition-colors duration-300">EXPLORE</span>
                <div className="w-2 h-0.5 bg-gradient-to-l from-transparent to-gray-400 animate-expand group-hover:to-white transition-colors duration-300"></div>
              </div>
            </div>

            {/* Additional floating particles on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-400/40 rounded-full animate-float-gentle"></div>
              <div className="absolute top-4 right-3 w-0.5 h-0.5 bg-blue-400/40 rounded-full animate-float-gentle" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute bottom-3 left-4 w-0.5 h-0.5 bg-white/30 rounded-full animate-float-gentle" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }

        @keyframes morph-circle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            border-radius: 50%;
          }
          25% {
            transform: scale(1.1) rotate(90deg);
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          50% {
            transform: scale(0.9) rotate(180deg);
            border-radius: 50%;
          }
          75% {
            transform: scale(1.05) rotate(270deg);
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
          }
        }

        @keyframes morph-circle-inner {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.7;
          }
        }

        @keyframes rotate-pulse {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(90deg) scale(1.1);
          }
          50% {
            transform: rotate(180deg) scale(0.9);
          }
          75% {
            transform: rotate(270deg) scale(1.1);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes expand {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 0.5rem;
            opacity: 0.7;
          }
        }

        @keyframes type-writer {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: auto;
            opacity: 1;
          }
        }

        @keyframes liquid-drop {
          0%, 100% {
            transform: scale(1);
            border-radius: 50%;
          }
          25% {
            transform: scale(1.2);
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          50% {
            transform: scale(0.8);
            border-radius: 50%;
          }
          75% {
            transform: scale(1.1);
            border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%;
          }
        }

        @keyframes liquid-drop-inner {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.3) rotate(180deg);
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes drip {
          0% {
            height: 0;
            opacity: 0;
          }
          20% {
            height: 1rem;
            opacity: 1;
          }
          80% {
            height: 1.5rem;
            opacity: 0.7;
          }
          100% {
            height: 2rem;
            opacity: 0;
          }
        }

        @keyframes tech-rotate {
          0% {
            transform: rotate(45deg) scale(1);
          }
          100% {
            transform: rotate(405deg) scale(1);
          }
        }

        @keyframes tech-rotate-reverse {
          0% {
            transform: rotate(-45deg) scale(1);
          }
          100% {
            transform: rotate(-405deg) scale(1);
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          10% {
            transform: translate(-1px, -1px);
          }
          20% {
            transform: translate(1px, 1px);
          }
          30% {
            transform: translate(-1px, 1px);
          }
          40% {
            transform: translate(1px, -1px);
          }
          50% {
            transform: translate(0);
          }
        }

        @keyframes scan {
          0% {
            box-shadow: inset 0 0 0 0 rgba(6, 182, 212, 0.1);
          }
          50% {
            box-shadow: inset 0 0 0 10px rgba(6, 182, 212, 0.1);
          }
          100% {
            box-shadow: inset 0 0 0 0 rgba(6, 182, 212, 0.1);
          }
        }

        @keyframes binary-rain {
          0% {
            height: 0;
            opacity: 1;
          }
          50% {
            height: 1rem;
            opacity: 0.7;
          }
          100% {
            height: 1.5rem;
            opacity: 0;
          }
        }

        @keyframes type-cursor {
          0%, 50% {
            border-right: 2px solid cyan;
          }
          51%, 100% {
            border-right: 2px solid transparent;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .animate-blink {
          animation: blink 1s step-start infinite;
        }

        .animate-morph-circle {
          animation: morph-circle 4s ease-in-out infinite;
        }

        .animate-morph-circle-inner {
          animation: morph-circle-inner 3s ease-in-out infinite;
        }

        .animate-rotate-pulse {
          animation: rotate-pulse 3s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 8s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 6s linear infinite;
        }

        .animate-expand {
          animation: expand 2s ease-out infinite;
        }

        .animate-type-writer {
          animation: type-writer 0.8s ease-out forwards;
        }

        .animate-liquid-drop {
          animation: liquid-drop 3s ease-in-out infinite;
        }

        .animate-liquid-drop-inner {
          animation: liquid-drop-inner 2s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 2s ease-in-out infinite;
        }

        .animate-drip {
          animation: drip 2s ease-out infinite;
        }

        .animate-tech-rotate {
          animation: tech-rotate 4s linear infinite;
        }

        .animate-tech-rotate-reverse {
          animation: tech-rotate-reverse 3s linear infinite;
        }

        .animate-glitch {
          animation: glitch 2s step-start infinite;
        }

        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }

        .animate-binary-rain {
          animation: binary-rain 1.5s ease-out infinite;
        }

        .animate-type-cursor {
          animation: type-cursor 1s step-start infinite;
        }

        /* Custom responsive breakpoint for very small screens */
        @media (min-width: 475px) {
          .xs\\:text-5xl {
            font-size: 3rem;
            line-height: 1;
          }
          .xs\\:text-base {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .xs\\:h-20 {
            height: 5rem;
          }
          .xs\\:w-\\[6px\\] {
            width: 6px;
          }
        }

        /* Ensure proper line height for large text */
        .leading-none {
          line-height: 0.9;
        }

        /* Optimize text rendering */
        h1 {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Enhanced hover effects */
        .group:hover .animate-scroll-dot {
          animation-duration: 1s;
        }

        .group:hover .animate-float-dot {
          animation-duration: 1.5s;
        }

        .group:hover .animate-gentle-bounce {
          animation-duration: 1.5s;
        }
      `}</style>
    </div>
  );
}