import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    {
      label: "Accueil",
      href: "#about",
      subItems: [],
    },
    {
      label: "Recherches",
      href: "#studies",
      subItems: [
        { label: "Recherches en cours", href: "#current-research" },
        { label: "Publications", href: "#publications" },
      ],
    },
    {
      label: "Plateformes",
      href: "#research",
      subItems: [
        { label: "Nos laboratoires", href: "#labs" },
        { label: "Équipements", href: "#instruments" },
      ],
    },
    {
      label: "Actualités",
      href: "#citizens",
      subItems: [
        { label: "Nouvelles récentes", href: "#news" },
        { label: "Événements à venir", href: "#events" },
      ],
    },
    {
      label: "Contact",
      href: "#contact",
      subItems: [],
    },
    {
      label: "Langue",
      href: "#",
      subItems: [],
    },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm bg-white/5">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-lg font-bold text-white flex-1">
          <p className="text-darkGreen">Laboratoire Chimie</p>
          <p className="text-sm text-darkGreen">University of Dschang</p>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
  {/* Accueil Link with Attractive Dropdown */}
  <div className="relative group">
    <a
      href="#about"
      className="relative text-darkGreen text-xl hover:text-darkGreen-600 transform hover:scale-105 transition duration-300"

    >
      Accueil
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-darkGreen-600 transition-all duration-300 hover:w-full"></span>
    </a>
  
  </div>

  {/* Recherches Link with Attractive Dropdown */}
  <div className="relative group">
    <a
      href="#studies"
      className="relative text-darkGreen text-xl hover:text-darkGreen-600 transform hover:scale-105 transition duration-300"
    >
      Recherches
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-darkGreen-600 transition-all duration-300 hover:w-full"></span>
    </a>
    <div className="absolute left-0 w-48 mt-2 bg-white shadow-xl rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
      <ul className="space-y-2 p-3">
        <li>
          <a
            href="#current-research"
            className="text-darkGreen hover:text-darkGreen-600 hover:bg-darkGreen-50 transition duration-300 rounded-lg px-2 py-1"
          >
            Recherches en cours
          </a>
        </li>
        <li>
          <a
            href="#publications"
            className="text-darkGreen hover:text-darkGreen-600 hover:bg-darkGreen-50 transition duration-300 rounded-lg px-2 py-1"
          >
            Publications récentes
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Plateformes Link with Attractive Dropdown */}
  <div className="relative group">
    <a
      href="#research"
      className="relative text-darkGreen text-xl hover:text-darkGreen-600 transform hover:scale-105 transition duration-300"
    >
      Plateformes
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-darkGreen-600 transition-all duration-300 hover:w-full"></span>
    </a>
    <div className="absolute left-0 w-48 mt-2 bg-white shadow-xl rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
      <ul className="space-y-2 p-3">
        <li>
          <a
            href="#labs"
            className="text-gray-700 hover:text-darkGreen-600 hover:bg-darkGreen-50 transition duration-300 rounded-lg px-2 py-1"
          >
            Nos laboratoires
          </a>
        </li>
        <li>
          <a
            href="#instruments"
            className="text-gray-700 hover:text-darkGreen-600 hover:bg-darkGreen-50 transition duration-300 rounded-lg px-2 py-1"
          >
             équipements
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Actualites Link with Attractive Dropdown */}
  <div className="relative group">
    <a
      href="#citizens"
      className="relative text-darkGreen text-xl hover:text-darkGreen-600 transform hover:scale-105 transition duration-300"
    >
      Actualites
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-darkGreen-600 transition-all duration-300 hover:w-full"></span>
    </a>
    <div className="absolute left-0 w-48 mt-2 bg-white shadow-xl rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
      <ul className="space-y-2 p-3">
        <li>
          <a
            href="#news"
            className="text-gray-700 hover:text-darkGreen-600 hover:bg-darkGreen-50 transition duration-300 rounded-lg px-2 py-1"
          >
            Nouvelles récentes
          </a>
        </li>
        <li>
          <a
            href="#events"
            className="text-gray-700 hover:text-darkGreen-600 hover:bg-darkGreen-50 transition duration-300 rounded-lg px-2 py-1"
          >
            Événements à venir
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/* Contact Link (no dropdown) */}
  <a
    href="#international"
    className="relative text-darkGreen text-xl hover:text-darkGreen-600 transform hover:scale-105 transition duration-300"
  >
    Contact
    <span className="absolute left-0 bottom-0 w-0 h-1 bg-darkGreen-600 transition-all duration-300 hover:w-full"></span>
  </a>
  <a
    href="#"
    className="relative text-darkGreen text-xl hover:text-darkGreen-600 transform hover:scale-105 transition duration-300"
  >
  langue
    <span className="absolute left-0 bottom-0 w-0 h-1 bg-darkGreen-600 transition-all duration-300 hover:w-full"></span>
  </a>
</nav>



        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8 text-darkGreen"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18m-6 6h6"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-xl rounded-md`}
      >
        <ul className="space-y-4 p-4">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <a
                href={item.href}
                className="text-darkGreen text-lg hover:text-darkGreen-600 transform hover:scale-105 transition duration-300"
              >
                {/* Ajouter le "+" devant les éléments ayant des sous-menus */}
              
                {item.label}
              </a>

              {/* Dropdown menu pour mobile */}
              {item.subItems.length > 0 && (
                <button
                  className="text-darkGreen text-lg w-full text-left hover:text-darkGreen-600 transform hover:scale-105 transition duration-300"
                  onClick={() => handleDropdownToggle(index)}
                >
                  +
                </button>
              )}

              {/* Affichage du sous-menu en mobile */}
              {activeDropdown === index && (
                <ul className="space-y-2 ml-4 p-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href={subItem.href}
                        className="text-darkGreen hover:text-darkGreen-600 hover:bg-darkGreen-50 transition duration-300 rounded-lg px-2 py-1"
                      >
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
