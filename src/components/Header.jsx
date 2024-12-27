import React, { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setActiveDropdown(null);
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
      label: "Actualités",
      href: "#",
      subItems: [
        { label: "Nouvelles récentes", href: "/recent-news" },
        { label: "Événements à venir", href: "/upcoming-events" },
      ],
    },
    {
      label: "Équipe",
      href: "/team",
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
      <div className="flex items-center">
    <img
      src="/images/logoSite.png"
      alt="Logo du site"
      className="h-16 w-16 object-contain"
    /> <span className="mx-2 font-bold text-xl">URCHINGE</span>
   </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseLeave={() => setTimeout(() => setActiveDropdown(null), 200)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 text-darkGreen hover:text-green-700 py-2"
                onMouseEnter={() => item.subItems && setActiveDropdown(index)}
              >
                {item.label}
                {item.subItems?.length > 0 && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </a>
              {item.subItems && activeDropdown === index && (
                <div 
                  className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-lg border border-gray-100"
                  onMouseEnter={() => setActiveDropdown(index)}
                >
                  <div className="py-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm hover:bg-green-50 text-black transition-colors duration-150"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
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
          <nav className="space-y-1 p-4">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100">
                <div className="flex justify-between items-center py-2">
                  <a
                    href={item.href}
                    className="text-darkGreen font-medium hover:text-green-700"
                  >
                    {item.label}
                  </a>
                  {item.subItems?.length > 0 && (
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="text-darkGreen p-2"
                    >
                      {activeDropdown === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </div>
                {activeDropdown === index && (
                  <div className="mt-1 pl-4 pb-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block py-3 text-sm text-darkGreen hover:bg-green-50 rounded"
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