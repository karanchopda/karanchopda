import React, { useState, useEffect } from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import Navbar from "./Navbar";

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-gray-800/10 to-gray-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-gray-700/10 to-gray-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900/5 to-transparent">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Profile Image Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  {/* Replace this div with your actual image */}
                  {/* <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                    <div className="text-gray-400 text-center">
                      <div className="w-20 h-20 bg-gray-500 rounded-full mx-auto mb-4"></div>
                      <p className="text-sm">Your Photo Here</p>
                    </div>
                  </div> */}

                  {/* Alternative: Uncomment and add your photo */}

                  <img
                    src="/images/profile.png"
                    alt="Karan Chopda"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Greeting */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-2 flex items-center">
                Namaste
                <span className="ml-1 text-2xl animate-bounce">🙏🏼</span>
              </h2>
            </div>

            {/* Name and Title */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
                MySelf Karan Chopda
              </h1>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-lg">Surat, India</span>
                </div>

                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <GraduationCap className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-lg">BCA from VNSGU.</span>
                </div>

                <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                  <Briefcase className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-lg">Software Engineer</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="text-gray-400 text-lg leading-relaxed space-y-4 max-w-3xl mx-auto px-4">
              <p>
                I am a{" "}
                <span className="text-gray-200 font-semibold">
                  Full Stack Developer
                </span>{" "}
                passionate about building{" "}
                <span className="text-yellow-400 font-medium">
                  modern, scalable, and user-friendly applications
                </span>
                . With expertise in
                <span className="text-gray-200 font-medium"> React.js</span>,
                <span className="text-gray-200 font-medium"> Node.js</span>,and
                {/* <span className="text-gray-200 font-medium"> Flutter</span>, and */}
                <span className="text-gray-200 font-medium"> AWS Cloud</span>, I
                specialize in creating seamless experiences across web and
                mobile platforms.
              </p>

              <p>
                I have a strong foundation in{" "}
                <span className="text-gray-200 font-medium">
                  problem-solving
                </span>{" "}
                and
                <span className="text-gray-200 font-medium">
                  {" "}
                  scalable architecture design
                </span>
                . My curiosity drives me to explore{" "}
                <span className="text-gray-200 font-medium">
                  emerging technologies{" "}
                </span>
                 and refine my skills every day. I thrive in
                <span className="text-gray-200 font-medium">
                  {" "}
                  collaborative team environments
                </span>{" "}
                and am dedicated to delivering software solutions that are both
                <span className="text-yellow-400 font-medium">
                  {" "}
                  impactful
                </span>{" "}
                and
                <span className="text-yellow-400 font-medium"> efficient</span>.
              </p>
            </div>

            {/* Call to Action */}
            {/* <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Download Resume
              </button>
              <button className="border border-gray-500 text-white px-6 py-3 rounded-lg font-medium hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Contact Me
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
