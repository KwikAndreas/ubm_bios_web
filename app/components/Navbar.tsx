"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const yOffset = -70;
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="backdrop-filter:blur(10px) bg-primary dark:bg-gray-900 p-4 fixed w-full z-10 shadow transition duration-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">BIOS</div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-900 dark:text-white focus:outline-none"
          >
            {isMenuOpen ? "✖️" : "☰"}
          </button>
        </div>

        <div className="hidden lg:flex lg:space-x-4">
          <a
            href="#profile"
            onClick={(e) => handleLinkClick(e, "#profile")}
            className="text-white/80 hover:text-orange-300 transition-colors duration-300 font-semibold select-none"
          >
            Profile
          </a>
          <a
            href="#visimisi"
            onClick={(e) => handleLinkClick(e, "#visimisi")}
            className="text-white/80 hover:text-orange-300 transition-colors duration-300 font-semibold select-none"
          >
            Visi Misi
          </a>
          <a
            href="#divisi"
            onClick={(e) => handleLinkClick(e, "#divisi")}
            className="text-white/80 hover:text-orange-300 transition-colors duration-300 font-semibold select-none"
          >
            Divisi
          </a>
          <a
            href="#struktur"
            onClick={(e) => handleLinkClick(e, "#struktur")}
            className="text-white/80 hover:text-orange-300 transition-colors duration-300 font-semibold select-none"
          >
            Struktur
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="text-white/80 hover:text-orange-300 transition-colors duration-300 font-semibold select-none"
          >
            Contact
          </a>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-gray-100 dark:bg-gray-900 p-4 fixed w-full top-16 z-10 shadow-md transition duration-300">
            <div className="flex flex-col items-center space-y-4">
              <a
                href="#profile"
                onClick={(e) => {
                  handleLinkClick(e, "#profile");
                  setIsMenuOpen(false);
                }}
                className="text-gray-900 dark:text-white hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Profile
              </a>
              <a
                href="#visimisi"
                onClick={(e) => {
                  handleLinkClick(e, "#visimisi");
                  setIsMenuOpen(false);
                }}
                className="text-gray-900 dark:text-white hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Visi Misi
              </a>
              <a
                href="#divisi"
                onClick={(e) => {
                  handleLinkClick(e, "#divisi");
                  setIsMenuOpen(false);
                }}
                className="text-gray-900 dark:text-white hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Divisi
              </a>
              <a
                href="#struktur"
                onClick={(e) => {
                  handleLinkClick(e, "#struktur");
                  setIsMenuOpen(false);
                }}
                className="text-gray-900 dark:text-white hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Struktur
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  handleLinkClick(e, "#contact");
                  setIsMenuOpen(false);
                }}
                className="text-gray-900 dark:text-white hover:text-blue-900 dark:hover:text-blue-300 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
