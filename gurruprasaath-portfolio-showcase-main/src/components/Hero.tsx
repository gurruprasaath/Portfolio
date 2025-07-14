
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/23ADR052 Gurruprasaath M K.pdf';
    link.download = 'Gurruprasaath_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gurruprasaath M K
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-gray-600 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              B.Tech Student in AI & Data Science
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Enthusiastic and dedicated B.Tech student passionate about solving real-world problems using full-stack and AI/ML knowledge.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-wrap gap-4 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="mailto:gurru9440@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail size={18} />
                gurru9440@gmail.com
              </a>
              <a href="tel:+916382911708" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone size={18} />
                +91 6382911708
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <a
                href="https://github.com/gurruprasaath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gurruprasaath"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              
              <Button variant="outline" className="px-8 py-3 font-medium">
                <a href="#projects" className="block">
                  View My Work
                </a>
              </Button>
              
              <Button variant="outline" className="px-8 py-3 font-medium">
                <a href="#contact" className="block">
                  Get In Touch
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <img
                src="../public/profile.jpg"
                alt="Gurruprasaath M K"
                draggable={false}
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
