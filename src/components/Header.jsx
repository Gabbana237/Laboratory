import React, { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setActiveDropdown(null); // Réinitialiser les dropdowns si on ferme le menu
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    {
      label: "Accueil",
      href: "/",
     
    },
    {
      label: "Recherches",
      href: "/research",
      subItems: [
        { label: "Recherches en cours", href: "/current-research" },
        { label: "Publications", href: "/publications" },
        { label: "Projets", href: "/projects" },
        { label: "Collaborations", href: "/collaborations" },
      ],
    },
    {
      label: "Plateformes",
      href: "/platforms",
      subItems: [
        { label: "Nos laboratoires", href: "/labs" },
        { label: "Équipements", href: "/equipment" },
        { label: "Installations", href: "/facilities" },
        { label: "Services", href: "/services" },
      ],
    },
   
    {
      label: "Actualités",
      href: "/news",
      subItems: [
        { label: "Nouvelles récentes", href: "/recent-news" },
        { label: "Événements à venir", href: "/upcoming-events" },
        { label: "Séminaires", href: "/seminars" },
        { label: "Conférences", href: "/conferences" },
      ],
    },
    {
      label: "Équipe",
      href: "/team",
      subItems: [
        { label: "Direction", href: "/management" },
        { label: "Chercheurs", href: "/researchers" },
        { label: "Doctorants", href: "/phd-students" },
        { label: "Staff technique", href: "/technical-staff" },
      ],
    },
    {
      label: "A propos",
      href: "/about",
    
    },
    {
      label: "Contact",
      href: "/contact",
    
    },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/5">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold">Laboratoire Chimie</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <a
                href={item.href}
                className="flex items-center gap-1 text-darkGreen hover:text-green-700"
              >
                {item.label}
                {item.subItems?.length > 0 && (
                  <ChevronDown className="w-4 h-4" />
                )}
              </a>
              {item.subItems && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm hover:bg-green-100"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-darkGreen p-2"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="space-y-4 p-4">
            {navItems.map((item, index) => (
              <div key={index} className="border-b pb-2">
                <div className="flex justify-between items-center">
                  <a
                    href={item.href}
                    className="text-darkGreen font-medium"
                  >
                    {item.label}
                  </a>
                  {item.subItems?.length > 0 && (
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="text-darkGreen"
                    >
                      {activeDropdown === index ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </button>
                  )}
                </div>
                {activeDropdown === index && (
                  <div className="mt-2 pl-4">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block py-2 text-sm text-darkGreen hover:bg-green-100"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
