import React, { useState } from "react";

const Header = () => {
  // État pour gérer l'affichage du menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // États pour chaque dropdown
  const [isAccueilOpen, setIsAccueilOpen] = useState(false);
  const [isRecherchesOpen, setIsRecherchesOpen] = useState(false);
  const [isPlateformesOpen, setIsPlateformesOpen] = useState(false);
  const [isActualitesOpen, setIsActualitesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleDropdown = (setDropdownState) => {
    setDropdownState((prevState) => !prevState);
  };



  return (
    <header className="bg-white shadow-md ">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="text-lg leading-tight">
            <p className="font-bold text-blue-600 text-darkGreen text-xl">Laboratoire Chimie</p>
            <p className="text-blue-600 text-darkGreen text-lg">University of Dschang</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
  {/* Accueil Link with Attractive Dropdown */}
  <div className="relative group">
    <a
      href="#about"
      className="relative text-gray-700 text-xl hover:text-blue-600 transform hover:scale-105 transition duration-300"

    >
      Accueil
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
    </a>
  
  </div>

  {/* Recherches Link with Attractive Dropdown */}
  <div className="relative group">
    <a
      href="#studies"
      className="relative text-gray-700 text-xl hover:text-blue-600 transform hover:scale-105 transition duration-300"
    >
      Recherches
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
    </a>
    <div className="absolute left-0 w-48 mt-2 bg-white shadow-xl rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
      <ul className="space-y-2 p-3">
        <li>
          <a
            href="#current-research"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
          >
            Recherches en cours
          </a>
        </li>
        <li>
          <a
            href="#publications"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
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
      className="relative text-gray-700 text-xl hover:text-blue-600 transform hover:scale-105 transition duration-300"
    >
      Plateformes
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
    </a>
    <div className="absolute left-0 w-48 mt-2 bg-white shadow-xl rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
      <ul className="space-y-2 p-3">
        <li>
          <a
            href="#labs"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
          >
            Nos laboratoires
          </a>
        </li>
        <li>
          <a
            href="#instruments"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
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
      className="relative text-gray-700 text-xl hover:text-blue-600 transform hover:scale-105 transition duration-300"
    >
      Actualites
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
    </a>
    <div className="absolute left-0 w-48 mt-2 bg-white shadow-xl rounded-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300">
      <ul className="space-y-2 p-3">
        <li>
          <a
            href="#news"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
          >
            Nouvelles récentes
          </a>
        </li>
        <li>
          <a
            href="#events"
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
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
    className="relative text-gray-700 text-xl hover:text-blue-600 transform hover:scale-105 transition duration-300"
  >
    Contact
    <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 transition-all duration-300 hover:w-full"></span>
  </a>
 
</nav>



        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18m-6 6h6"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (collapsible) */}
      {isMenuOpen && (
    <nav className="md:hidden bg-white shadow-md">
    {/* Bouton de menu mobile */}
    <button
      onClick={toggleMenu}
      className="text-gray-700 text-2xl focus:outline-none"
    >
      {/* Icône de menu (burger) */}
      &#9776;
    </button>

    {/* Menu mobile */}
    {isMenuOpen && (
      <ul className="flex flex-col space-y-4 p-4">
        {/* Accueil */}
        <li className="relative">
          <button
            className="w-full text-gray-700 text-xl transform hover:scale-105 transition duration-300 text-left"
            onClick={() => toggleDropdown(setIsAccueilOpen)}
          >
            Accueil
          </button>
          {isAccueilOpen && (
            <ul className="absolute left-0 top-full mt-2 space-y-2 bg-white shadow-xl rounded-md p-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
                >
                  Home
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Recherches */}
        <li className="relative">
          <button
            className="w-full text-gray-700 text-xl transform hover:scale-105 transition duration-300 text-left"
            onClick={() => toggleDropdown(setIsRecherchesOpen)}
          >
            Recherches
          </button>
          {isRecherchesOpen && (
            <ul className="absolute left-0 top-full mt-2 space-y-2 bg-white shadow-xl rounded-md p-3">
              <li>
                <a
                  href="#research"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
                >
                  Research Programs
                </a>
              </li>
              <li>
                <a
                  href="#publications"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
                >
                  Publications
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Plateformes */}
        <li className="relative">
          <button
            className="w-full text-gray-700 text-xl transform hover:scale-105 transition duration-300 text-left"
            onClick={() => toggleDropdown(setIsPlateformesOpen)}
          >
            Plateformes
          </button>
          {isPlateformesOpen && (
            <ul className="absolute left-0 top-full mt-2 space-y-2 bg-white shadow-xl rounded-md p-3">
              <li>
                <a
                  href="#platforms"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
                >
                  Platforms
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Actualités */}
        <li className="relative">
          <button
            className="w-full text-gray-700 text-xl transform hover:scale-105 transition duration-300 text-left"
            onClick={() => toggleDropdown(setIsActualitesOpen)}
          >
            Actualité
          </button>
          {isActualitesOpen && (
            <ul className="absolute left-0 top-full mt-2 space-y-2 bg-white shadow-xl rounded-md p-3">
              <li>
                <a
                  href="#news"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
                >
                  News
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Contact */}
        <li className="relative">
          <button
            className="w-full text-gray-700 text-xl transform hover:scale-105 transition duration-300 text-left"
            onClick={() => toggleDropdown(setIsContactOpen)}
          >
            Contact
          </button>
          {isContactOpen && (
            <ul className="absolute left-0 top-full mt-2 space-y-2 bg-white shadow-xl rounded-md p-3">
              <li>
                <a
                  href="#contact-us"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition duration-300 rounded-lg px-2 py-1"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* Sélecteur de langue */}
      
      </ul>
    )}
  </nav>
   
     
      )}
    </header>
  );
};

export default Header;
