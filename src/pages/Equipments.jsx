import React from 'react';
import Header from "../components/Header";
const Equipments = () => {
    const equipmentImages = [
        { src: "/images/equipement1.jpg", alt: "Microscope" },
        { src: "/images/equipement2.jpg", alt: "Spectromètre" },
        { src: "/images/equipement3.jpg", alt: "Hotte chimique" },
        { src: "/images/equipement2.jpg", alt: "Centrifugeuse" },
        { src: "/images/equipement1.jpg", alt: "Balance analytique" },
        { src: "/images/equipement2.jpg", alt: "Réacteur chimique" },
        { src: "/images/equipement3.jpg", alt: "Chromatographe" },
        { src: "/images/equipement1.jpg", alt: "Bains-marie" },
      ];
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Header with gradient */}
      <Header/>
      <div className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-dark mt-8 mb-4">
              Équipements de Laboratoire
            </h1>
            <p className=" text-dark text-lg">
              Découvrez notre gamme complète d'équipements de laboratoire de chimie
            </p>
          </div>
        </div>
      </div>

      {/* Equipment Grid Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-darkGreen mb-5">Équipements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {equipmentImages.map((equipment, index) => (
            <div key={index} className="text-center">
              <img
                src={equipment.src}
                alt={equipment.alt}
                className="w-full sm:w-52 h-52 object-cover rounded-lg shadow-lg mx-auto"
              />
              <p className="mt-2 text-lg font-semibold">{equipment.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;