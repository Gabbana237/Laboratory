import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <p className="bg-darkGreen p-[2px]"></p>
      <div className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-4">
          {/* Utilisation de Grid pour un layout responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* Section Informations du laboratoire */}
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <img src="/image" alt="logo" className="w-10 h-10" />
                <h3 className="text-xl font-bold">Laboratoire de Chimie</h3>
              </div>
              <p>Université de Dschang, Afrique, Cameroun</p>
              <p><i class="fa fa-envelope"></i>  <a href="mailto:contact@laboratoire-chimir.com" className="underline decoration-darkGreen">contact@laboratoire-chimir.com</a></p>
              <p><i className="fa-phone fa "></i> +237 6 86 36 23 76</p>
            </div>

            {/* Section Liens rapides */}
            <div>
              <h3 className="text-xl font-bold mb-2">Liens rapides</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-blue-400">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 ">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Section Réseaux sociaux */}
            <div>
              <h3 className="text-xl font-bold mb-2">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 flex items-center space-x-2"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                  <span>Facebook</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 flex items-center space-x-2"
                >
                  <i className="fab fa-twitter fa-lg"></i>
                  <span>Twitter</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 flex items-center space-x-2"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Laboratoire de Chimie. Tous droits
            réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
