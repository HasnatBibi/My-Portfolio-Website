import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white shadow-lg fixed w-full top-0 z-50 h-20">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-3xl font-bold text-yellow-400 tracking-wide">Hasnat Bibi</h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-lg">
          {["Home", "Education", "Certifications", "Projects", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-lg font-semibold text-white hover:text-yellow-400 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          {[{ href: "https://github.com/HasnatBibi", Icon: FaGithub },
            { href: "https://www.linkedin.com/in/hasnat-bibi99", Icon: FaLinkedin },
            { href: "mailto:h.shalmani1@gmail.com", Icon: FaEnvelope }].map(({ href, Icon }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300 text-2xl"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-yellow-400 text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-neutral-900 text-white py-4 px-6`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg">
          {["Home", "Education", "Certifications", "Projects", "Experience", "Contact"].map((item) => (
            <li key={item} className="py-2">
              <a
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-yellow-400 text-lg font-semibold"
                onClick={closeMenu}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
