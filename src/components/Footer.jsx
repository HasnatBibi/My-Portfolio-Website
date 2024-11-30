import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white py-10">
      <div className="container mx-auto text-center space-y-6">
        {/* Copyright */}
        <p className="text-lg md:text-xl font-semibold">© 2024 Hasnat Bibi. All Rights Reserved.</p>
        
        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/hasnatbibi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hasnatbibi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
