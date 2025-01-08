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
              <a href="/" className="flex items-center space-x-3 mb-2">
              <img src="/images/logoSite.png" alt="Logo du site" className="h-16 w-16 object-contain" />
                <h3 className="text-lg font-bold">URCHINCHE</h3>
              </a>
              <p><i class="fas fa-map-marker-alt"></i>  Porte <span className="font-bold text-darkGreen">417</span> du decanat de la faculte des sciences</p>
              <p><i class="fa fa-envelope"></i>   <a href="mailto:contact@laboratoire-chimir.com" className="underline decoration-darkGreen">contact@laboratoire-chimir.com</a></p>
              <p><i className="fa-phone fa "></i>  +237 6 86 36 23 76</p>
            </div>

            {/* Section Liens rapides */}
            <div>
              <h3 className="text-lg font-bold mb-2">Liens rapides</h3>
              <ul className="space-y-2">
              <li>
               
               <a href="/" className="hover:text-darkGreen">
                 Accueil
               </a>
             </li>
                <li>
               
                  <a href="/about" className="hover:text-darkGreen">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="/team" className="hover:text-darkGreen ">
                    Team
                  </a>
                </li>
                <li>
                  <a href="contact" className="hover:text-darkGreen">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Section Réseaux sociaux */}
            <div>
              <h3 className="text-lg font-bold mb-2">Suivez-nous</h3>
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
  <br />
  Développé par <span className="text-darkGreen"><a href="mailto:hopedingammadji@gmail.com" className="">[Esperance]</a></span> et <span className="text-darkGreen"><a href="mailto:votreemail@example.com" className="">[Hamed]</a></span>.
</div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
