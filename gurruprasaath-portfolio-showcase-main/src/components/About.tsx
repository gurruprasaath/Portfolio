
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Passionate about AI & Full-Stack Development
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated B.Tech student specializing in Artificial Intelligence and Data Science at Kongu Engineering College. My journey in technology is driven by a passion for solving complex real-world problems through innovative solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I enjoy creating end-to-end solutions that make a meaningful impact. My expertise spans from machine learning algorithms to modern web development frameworks.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">8.34</div>
                <div className="text-gray-700 font-medium">CGPA</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">🎯 Current Focus</h4>
              <p className="text-gray-700">Building AI-powered applications and mastering full-stack development to create impactful solutions.</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">🚀 Goals</h4>
              <p className="text-gray-700">To become a versatile developer who can bridge the gap between AI research and practical applications.</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">💡 Interests</h4>
              <p className="text-gray-700">Machine Learning, Web Development, Data Science, and exploring emerging technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
