import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
  return (
    <div className="border-b border-neutral-900 pt-12 pb-12">
      <h1 className="my-20 text-center font-bold text-4xl text-white tracking-widest">
        My Certifications
      </h1>


      <div className="flex flex-wrap justify-center gap-10">
        {CERTIFICATIONS.map((certificate, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105">
              
              {/* Certification Image */}
              <div className="mb-6 flex justify-center">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="rounded-lg max-w-full max-h-48 object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>

              {/* Certification Title */}
              <h6 className="mb-2 text-xl font-semibold text-white text-center">
                {certificate.title}
              </h6>


              {/* Certification Link or Date */}
              <div className="mt-4 flex justify-center">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-white text-lg font-semibold transition duration-300"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
