import { Description } from "@radix-ui/react-toast";
import { title } from "process";

const Certifications = () => {
  const certifications = [
    {
      title: "100 Days of Python Code Bootcamp",
      description: "Comprehensive Python programming course covering fundamentals to advanced concepts",
      icon: "🐍",
      from: "Udemy"

    },
    
    {
      title: "Full Stack Web Development Bootcamp",
      description: "End-to-end web development covering frontend and backend technologies",
      icon: "🌐",
      from:"Udemy"
    },
    {
      title:"Oracle APEX Cloud Developer",
      description:"Oracle APEX Cloud Developer Certified Professional, awarded by Oracle University, recognizing expertise in low-code cloud application development using Oracle APEX.",
      icon: "🌐",
      from:"Oracle"
    },

  ];

  return (
<section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Continuous learning and skill development through professional certifications
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale group w-full max-w-sm"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {cert.title}{(cert.from) && <span className="text-sm text-gray-500 ml-2">({cert.from})</span>}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700">
                  Certified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Certifications;
