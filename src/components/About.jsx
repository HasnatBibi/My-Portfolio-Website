import { FaDesktop, FaServer, FaPaintBrush } from "react-icons/fa";

const About = () => {
  return (
    <div className="text-white py-12 px-6">
      <h1 className="text-center text-4xl font-bold mb-12">My Services</h1>
      
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
        
      
          <div className="service-box p-6 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <FaDesktop className="text-4xl text-yellow-400" />
            </div>
            <h3 className="text-center text-xl font-semibold text-yellow-400 mb-4">Front-End Development</h3>
            <p className="text-center text-gray-300">
              I create responsive and interactive websites using modern technologies like React, Tailwind CSS, and JavaScript.
            </p>
          </div>

        
          <div className="service-box p-6 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <FaServer className="text-4xl text-yellow-400" />
            </div>
            <h3 className="text-center text-xl font-semibold text-yellow-400 mb-4">Back-End Development</h3>
            <p className="text-center text-gray-300">
              I build robust back-end systems using technologies like Node.js, Express, and databases like MongoDB and MySQL.
            </p>
          </div>

          
          <div className="service-box p-6 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4">
              <FaPaintBrush className="text-4xl text-yellow-400" />
            </div>
            <h3 className="text-center text-xl font-semibold text-yellow-400 mb-4">UI/UX Designing</h3>
            <p className="text-center text-gray-300">
              I design user-friendly interfaces with a focus on seamless user experiences, ensuring both aesthetics and functionality.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
