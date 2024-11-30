import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="py-12 px-6">
      <h1 className="my-20 text-center font-bold text-4xl text-white">Professional Experience</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="w-full sm:w-1/3 bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            {/* Experience Card */}
            <div className="flex flex-col items-center">
              {/* Year */}
              <p className="text-2xl font-bold text-yellow-400 mb-4">{experience.year}</p>

              {/* Role and Company */}
              <h6 className="text-lg font-semibold text-white mb-2 text-center">
                {experience.role} -{" "}
                <span className="text-md text-neutral-300">{experience.company}</span>
              </h6>

              {/* Description */}
              <p className="text-md text-neutral-300 mb-4 text-center">{experience.description}</p>

              {/* Technologies Used */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
