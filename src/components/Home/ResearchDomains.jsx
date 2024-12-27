import React from "react";
import chimieOrganique from '../../images/chimieOrganique.webp';
import materiauxImage from  '../../images/chimieMater.jpg';
import absorpImage from  '../../images/chimieabsop.jpg';
import coordination from  '../../images/chimiecoord.jpg';
import computationnelle from  '../../images/chimiecomp.jpg';

const ResearchDomains = () => {
  const domains = [
    {
      title: "Chimie Organique",
      description:
        "Explorez la synthèse et les réactions des composés organiques, fondamentales pour la création de médicaments, de polymères, et de produits agrochimiques. De la conception de molécules à la caractérisation de leurs propriétés.",
      image: chimieOrganique,
      link: "/chimie-organique",
    },
    {
      title: "Chimie Computationnelle",
      description:
        "Utilisez la puissance des simulations numériques et des calculs quantiques pour prédire et modéliser les propriétés des molécules et des matériaux. Accélérez la découverte de nouveaux composés et optimisez les réactions chimiques.",
      image:computationnelle,
      link: "/chimie-computationnelle",
    },
   {
      title: "Chimie de Coordination",
      description:
        "Plongez dans l'étude des composés de coordination, impliqués dans des processus biologiques, catalytiques et des applications matérielles. Explorez leurs propriétés électroniques et leur comportement dans diverses réactions.",
     image: coordination,
      link: "/chimie-coordination",
    },
    {
      title: "Chimie de l'Absorption",
      description:
        "Étudiez les mécanismes d'absorption et d'adsorption de molécules, avec des applications dans la purification, la séparation de mélanges, et la conception de matériaux poreux pour le stockage d'énergie et la capture de CO2.",
      image: absorpImage,
      link: "/chimie-absorption",
    },
    {
       title: "Chimie des Matériaux",
       description:
         "Concevez et synthétisez des matériaux avancés aux propriétés ciblées pour des applications en aérospatial, énergie, électronique et biotechnologies. Explorez la chimie des solides, des polymères et des nanomatériaux.",
       image:materiauxImage,
       link: "/chimie-materiaux"
    }
  ];

  

  return (
    <section className="px-4 md:px-4 lg:px-8 bg-gray-100">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
