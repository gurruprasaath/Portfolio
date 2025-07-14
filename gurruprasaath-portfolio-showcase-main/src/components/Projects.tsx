
import { Github, Mail } from "lucide-react";

const Projects = () => {
  // Sample projects data - in a real app, this would come from MongoDB
  const projects = [
    {
      title: "Weather App 🌦️",
      description: "A React-based application that fetches live weather data using OpenWeatherMap API with beautiful UI and location-based forecasts.",
      techStack: ["React", "API", "Tailwind", "JavaScript"],
      githubLink: "https://github.com/gurruprasaath/weather-app",
      liveLink: "https://weather-app-nine-beta-74.vercel.app/",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Scrapper 🤖",
      description: "An AI-powered web scraper that extracts and processes dynamic website content using Selenium and Streamlit.",
      techStack: ["Python", "Selinium", "Pandas", "Streamlit"],
      githubLink: "https://github.com/gurruprasaath/Web-scrapper",
      liveLink: "",

      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Mern Chat App",
      description: "Real-time chat application built with the MERN stack, enabling seamless messaging with user authentication and socket-based communication.",
      techStack: ["React", "Node.js", "MongoDB", "Express","MERN","JWT"],
      githubLink: "https://github.com/gurruprasaath/MERN-CHAT-APP",
      liveLink: "",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Product Store 🛒",
      description: "A full-stack product management app that allows users to create, view, update, and delete products with a responsive UI and backend integration.",
      techStack: ["Reactjs", "MongoDB", "Expressjs", "Nodejs"],
      githubLink: "https://github.com/gurruprasaath/product-store",
      liveLink: "https://product-store-ebon.vercel.app/",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Web Scrapper",
      description: "Automated web scraping application that extracts, processes, and stores structured data from websites for analysis and reporting.",
      techStack: ["Python", "BeautifulSoup", "Requests", "Pandas", "Flask"],
      githubLink: "https://github.com/gurruprasaath/Web-scrapper",
      liveLink: "",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "E-commerce platform for clothing brands",
      description: "A seamless e-commerce platform tailored for clothing brands to showcase, sell, and grow their fashion business online.",
      techStack: ["React", "vercel", "Mongodb","Expressjs","MERN", "JavaScript"],
      githubLink: "https://github.com/gurruprasaath/trendify",
      liveLink: "https://trendify-orcin-one.vercel.app/",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my work in web development, AI/ML, and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover-scale"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium`}
                      >
                        🚀 Live Demo
                      </a>
                    ) : null}
                   
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/gurruprasaath"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover-scale"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
