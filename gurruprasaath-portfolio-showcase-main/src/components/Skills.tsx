
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Flask", "Express"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI/ML Libraries",
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Seaborn"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "VS Code", "Jupyter Notebook", "Streamlit"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl mb-4 flex items-center justify-center`}>
                <div className="w-6 h-6 bg-white rounded-lg"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
