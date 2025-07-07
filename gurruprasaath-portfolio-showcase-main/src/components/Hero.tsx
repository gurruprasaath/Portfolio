
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gurruprasaath M K
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
              B.Tech Student in AI & Data Science
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Enthusiastic and dedicated B.Tech student passionate about solving real-world problems using full-stack and AI/ML knowledge.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-gray-600">
              <a href="mailto:gurru9440@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail size={18} />
                gurru9440@gmail.com
              </a>
              <a href="tel:+916382911708" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone size={18} />
                +91 6382911708
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/gurruprasaath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors hover-scale"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gurruprasaath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors hover-scale"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6">
              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover-scale"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Gurruprasaath M K"
                  className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
