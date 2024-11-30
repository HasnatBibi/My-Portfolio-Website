import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pt-12 pb-12">
      <h1 className="my-20 text-center font-bold text-4xl text-white">My Projects</h1>
      
      {/* Projects Grid Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            
            {/* Project Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              
              {/* Project Image */}
              <div className="mb-6 flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg max-w-full max-h-48 object-cover"
                />
              </div>
              
              {/* Project Title */}
              <h6 className="mb-2 text-xl font-semibold text-yellow-400">{project.title}</h6>
              
              {/* Project Description */}
              <p className="mb-4 text-md text-neutral-300">{project.description}</p>
              
              {/* Project Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-neutral-900 px-3 py-1 rounded-md text-sm font-medium text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
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

export default Projects;
