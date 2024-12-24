import React, { useState } from "react";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("history");

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
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-darkGreen text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">À propos de notre laboratoire</h1>
          <p className="mt-2 text-lg">
            Découvrez notre histoire, nos valeurs et notre équipement de pointe.
          </p>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="container mx-auto py-5">
        <div className="flex justify-center space-x-5 border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === "history" ? "border-b-4 border-darkGreen font-bold" : ""
            }`}
            onClick={() => setActiveTab("history")}
          >
            Historique
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "values" ? "border-b-4 border-darkGreen font-bold" : ""
            }`}
            onClick={() => setActiveTab("values")}
          >
            Valeurs
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "equipment" ? "border-b-4 border-darkGreen font-bold" : ""
            }`}
            onClick={() => setActiveTab("equipment")}
          >
            Équipements
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto py-10 px-5">
        {activeTab === "history" && (
          <div>
            <h2 className="text-3xl font-bold text-darkGreen mb-5">Historique</h2>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <img
                src="/images/equipement2.jpg"
                alt="Image du laboratoire"
                className="rounded-lg shadow-lg w-full md:w-1/2"
              />
              <div className="text-lg md:w-1/2 leading-relaxed">
                <p>
                  Fondé en <strong>1995</strong>, notre laboratoire a commencé
                  avec une mission simple : explorer les frontières de la
                  chimie moderne tout en contribuant au progrès scientifique.
                </p>
                <p className="mt-3">
                  Au fil des années, nous avons élargi nos domaines de recherche
                  pour inclure des secteurs innovants tels que la chimie verte,
                  l'analyse pharmaceutique et les nanotechnologies. Nos travaux
                  ont été reconnus par plusieurs prix internationaux.
                </p>
                <p className="mt-3">
                  Au fil des années, nous avons élargi nos domaines de recherche
                  pour inclure des secteurs innovants tels que la chimie verte,
                  l'analyse pharmaceutique et les nanotechnologies. Nos travaux
                  ont été reconnus par plusieurs prix internationaux.
                </p>
                <p className="mt-3">
                  Au fil des années, nous avons élargi nos domaines de recherche
                  pour inclure des secteurs innovants tels que la chimie verte,
                  l'analyse pharmaceutique et les nanotechnologies. Nos travaux
                  ont été reconnus par plusieurs prix internationaux.
                </p>
                <p className="mt-3">
                  Au fil des années, nous avons élargi nos domaines de recherche
                  pour inclure des secteurs innovants tels que la chimie verte,
                  l'analyse pharmaceutique et les nanotechnologies. Nos travaux
                  ont été reconnus par plusieurs prix internationaux.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "values" && (
          <div>
            <h2 className="text-3xl font-bold text-darkGreen mb-5">Nos valeurs</h2>
            <ul className="list-disc pl-5 text-lg leading-relaxed">
              <li>Recherche d'excellence et rigueur scientifique.</li>
              <li>
                Respect des normes environnementales dans toutes nos pratiques.
              </li>
              <li>
                Innovation continue pour répondre aux défis de demain.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "equipment" && (
          <div>
            <h2 className="text-3xl font-bold text-darkGreen mb-5">Équipements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {equipmentImages.map((equipment, index) => (
            <div key={index} className="text-center">
              <img
                src={equipment.src}
                alt={equipment.alt}
                className=" w-full sm:w-52 h-52 object-cover rounded-lg shadow-lg mx-auto"
              />
              <p className="mt-2 text-lg font-semibold">{equipment.alt}</p>
            </div>
          ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
