
const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Kongu Engineering College",
      duration: "2023 - Present",
      grade: "CGPA: 8.34",
      description: "Specializing in AI/ML algorithms, data structures, and modern software development practices."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Geethaanjali all india senior secondary school",
      duration: "Completed",
      grade: "90.4%",
      description: "Strong foundation in mathematics and science subjects."
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Geethaanjali all india senior secondary school",
      duration: "Completed",
      grade: "81.6%",
      description: "Comprehensive education with focus on core subjects."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            My academic journey and achievements in technology and engineering
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-l-0 last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 ml-4 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-gray-600 font-medium">{edu.duration}</p>
                    <p className="text-green-600 font-semibold">{edu.grade}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
