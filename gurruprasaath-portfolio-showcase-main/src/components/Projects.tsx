
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
      title: "AI Movie Recommender 🎬",
      description: "Machine learning powered movie recommendation system using collaborative filtering and content-based algorithms.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      githubLink: "https://github.com/gurruprasaath/movie-recommender",
      liveLink: "https://movie-recommender-ai.streamlit.app",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "E-Commerce Platform 🛒",
      description: "Full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/gurruprasaath/ecommerce-platform",
      liveLink: "https://ecommerce-demo.netlify.app",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Visualization Dashboard 📊",
      description: "Interactive dashboard for visualizing complex datasets with charts, graphs, and real-time data updates.",
      techStack: ["Python", "Plotly", "Dash", "Pandas"],
      githubLink: "https://github.com/gurruprasaath/data-dashboard",
      liveLink: "https://data-viz-dashboard.herokuapp.com",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Sentiment Analysis Tool 💭",
      description: "NLP-based sentiment analysis application that processes text data and provides emotional insights with accuracy metrics.",
      techStack: ["Python", "TensorFlow", "NLTK", "Flask"],
      githubLink: "https://github.com/gurruprasaath/sentiment-analyzer",
      liveLink: "https://sentiment-tool.herokuapp.com",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Task Management System ✅",
      description: "Collaborative task management application with real-time updates, team collaboration, and progress tracking features.",
      techStack: ["React", "Firebase", "Material-UI", "JavaScript"],
      githubLink: "https://github.com/gurruprasaath/task-manager",
      liveLink: "https://task-manager-pro.firebase.app",
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
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium`}
                  >
                    🚀 Live Demo
                  </a>
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
