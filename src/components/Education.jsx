import { EDUCATIONS } from "../constants";

const Education = () => {
  return (
    <div className="py-28 px-8 sm:px-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-bold text-white mb-16 sm:mb-20">
          Academic Qualifications
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {EDUCATIONS.map((education, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 p-6 sm:p-8"
            >
              {/* Year */}
              <div className="text-center mb-6">
                <p className="text-xl font-semibold text-yellow-400">{education.year}</p>
              </div>

              {/* Education Details */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">{education.dep}</h2>
                <h3 className="text-lg sm:text-xl text-white mb-4">{education.institute}</h3>

                <p className="text-md text-neutral-300 mb-2">
                  <strong className="text-white">Grade:</strong> {education.grade}
                </p>
                <p className="text-md text-neutral-300">
                  <strong className="text-white">Subjects:</strong> {education.subjects}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="mt-8 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
