import React, { useState } from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';

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
    <>
      {/* Balises de métadonnées */}
      <title>À propos de notre laboratoire - Laboratoire de chimie URCHINGE de Dschang</title>
      <meta name="description" content="Découvrez l'histoire, les valeurs et l'équipement de pointe de notre laboratoire. Fondé en 1995, nous sommes leaders en chimie moderne." />
      <meta name="keywords" content="laboratoire, chimie moderne, recherche scientifique, équipement de pointe, innovation" />
      <meta property="og:title" content="À propos de notre laboratoire - Laboratoire XYZ" />
      <meta property="og:description" content="Découvrez l'histoire, les valeurs et l'équipement de pointe de notre laboratoire. Fondé en 1995, nous sommes leaders en chimie moderne." />
      <meta property="og:image" content="/images/logoSite.png" />
      <meta name="twitter:title" content="À propos de notre laboratoire - Laboratoire XYZ" />
      <meta name="twitter:description" content="Découvrez l'histoire, les valeurs et l'équipement de pointe de notre laboratoire. Fondé en 1995, nous sommes leaders en chimie moderne." />
      <meta name="twitter:image" content="/images/logoSite.png" />

      {/* Contenu de la page */}
      <div className="bg-gray-50 font-sans text-gray-800">
        {/* Header */}
        <Header />
        <header className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold pt-8 md:pt-12 lg:pt-16">
              À propos de notre laboratoire
            </h1>
            <p className="mt-2 text-sm lg:text-lg">
              Découvrez notre histoire, nos valeurs et notre équipement de pointe.
            </p>
          </div>
        </header>

        {/* Tabs Navigation */}
        <div className="container mx-auto py-5">
          <div className="flex justify-center space-x-5 border-b">
            <button
              className={`py-2 text-sm px-2 lg:px-4 ${
                activeTab === "history" ? "border-b-4 border-darkGreen font-bold" : ""
              }`}
              onClick={() => setActiveTab("history")}
            >
              Historique
            </button>
            <button
              className={`py-2 text-sm px-2 lg:px-4 ${
                activeTab === "values" ? "border-b-4 border-darkGreen font-bold" : ""
              }`}
              onClick={() => setActiveTab("values")}
            >
              Valeurs
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
                  src="/images/logoSite.png"
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
        </div>

        {/* Footer */}
        <div className='pt-10'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutPage;