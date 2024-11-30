import { FaRegHandshake, FaFileDownload } from "react-icons/fa";
import Hasnat_Bibi_Resume from "../assets/Hasnat_Bibi_Resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="text-white pt-60 pb-24"
    >
      <div className="container mx-auto px-6 text-center space-y-8">
        <h1 className="text-5xl lg:text-6xl font-bold">
          Welcome to <span className="text-yellow-400">My Portfolio</span>
        </h1>
        <p className="text-lg lg:text-2xl font-light">
          Passionate about creating delightful and impactful web experiences.
        </p>
        <p className="text-md lg:text-lg text-gray-400 max-w-2xl mx-auto">
          I specialize in crafting user-friendly and visually appealing websites 
          that provide exceptional user experiences. Let’s collaborate to bring 
          your ideas to life with innovative and modern designs.
        </p>
        <div className="flex justify-center gap-6">
          <a
             href="https://www.linkedin.com/in/hasnat-bibi99" 
             target="_blank"
             rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 text-lg border-2 border-yellow-400 text-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 hover:text-blue-900 transition duration-300"
          >
            <FaRegHandshake className="text-xl" />
            <span>Hire Me</span>
          </a>
          <a
            href={Hasnat_Bibi_Resume} 
              download="Hasnat_Bibi_Resume.pdf"
            target="_blank"
            className="flex items-center gap-2 px-8 py-4 text-lg border-2 border-yellow-400 text-yellow-400 rounded-lg shadow-md hover:bg-yellow-400 hover:text-blue-900 transition duration-300"
          >
            <FaFileDownload className="text-xl" />
            <span>My Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

