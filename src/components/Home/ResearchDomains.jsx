import React from "react";
import chimieImage from '../../images/chimie.jpg';
import materiauxImage from  '../../images/chimie.jpg';
import environnementImage from  '../../images/pepinieres.jpg';

const ResearchDomains = () => {
  const domains = [
    {
      title: "Chimie Organique",
      description:
        "Découvrez les solutions innovantes pour des composés organiques, essentiels pour la recherche pharmaceutique et industrielle.",
      image: chimieImage,
      link: "/chimie-organique",
    },
    {
      title: "Matériaux Avancés",
      description:
        "Développement de matériaux de pointe pour l'aérospatial, l'énergie et bien plus encore.",
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      link: "/materiaux-avances",
    },
    {
      title: "Environnement & Durabilité",
      description:
        "Des solutions pour protéger notre planète et assurer un avenir plus vert.",
      image: environnementImage,
      link: "/environnement-durabilite",
    },
  ];

  return (
    <section className=" px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* Section Title */}
        <h2 className="lg:text-4xl md:text-2xl text-xl font-extrabold text-gray-800">
          Domaines de Recherche
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Explorez nos principaux axes de recherche qui définissent notre laboratoire.
        </p>
      </div>

      {/* Research Domains */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 sm:mx-8 lg:mx-16">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={domain.image}
                alt={domain.title}
                className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
              />
            </div>
            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-darkGreen transition duration-300">
                {domain.title}
              </h3>
              <p className="text-gray-600 mt-4">{domain.description}</p>
              {/* Learn More */}
              <div className="mt-6 inline-block text-gray-800 hover:text-gray-100 rounded-lg border-darkGreen shadow-md hover:bg-darkGreen transition">
              <a 
                href={domain.link}
                className="p-2"
              >
                En savoir plus
              </a>
              <p className="bg-darkGreen p-[0.1rem]"></p>
 
              </div>
              
           </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchDomains;
