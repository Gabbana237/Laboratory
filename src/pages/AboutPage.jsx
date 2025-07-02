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
    Créé en <strong>2005</strong>, le laboratoire a d’abord porté le nom de <strong>Laboratoire de Chimie des Nuisances et de Génie de l’Environnement (LACHINGE)</strong>. Il avait pour objectif initial de contribuer à l’étude et à la gestion des nuisances chimiques dans les milieux naturels, en particulier les milieux aqueux.
  </p>
  <p className="mt-3">
    Face à l’évolution des enjeux environnementaux et à l’enrichissement de ses axes de recherche, le laboratoire a connu une transformation structurelle et scientifique majeure en <strong>2017</strong>, devenant officiellement l’<strong>Unité de Recherche de Chimie des Nuisances et de Génie de l’Environnement (URCHINGE)</strong>.
  </p>
  <p className="mt-3">
    Depuis sa création, l'<strong>URCHINGE</strong> s'impose comme un pôle de recherche dynamique au sein de la <strong>Faculté des Sciences de l’Université de Dschang</strong>, combinant innovation, rigueur scientifique et engagement pour la protection de l’environnement.
  </p>
</div>

            </div>
          </div>
        )}

        {activeTab === "values" && (
          <div>
          <h2 className="text-3xl font-bold text-darkGreen mb-5">Nos valeurs</h2>
<ul className="list-disc pl-5 text-lg leading-relaxed">
  <li>Excellence scientifique dans la recherche fondamentale et appliquée en chimie et génie de l’environnement.</li>
  <li>Engagement pour la protection de l’environnement et la gestion durable des ressources naturelles.</li>
  <li>Innovation constante dans la conception de capteurs, le traitement des eaux et la chimie verte.</li>
  <li>Collaboration interdisciplinaire et ouverture aux partenariats nationaux et internationaux.</li>
  <li>Transfert de savoirs et formation de qualité pour les étudiants et jeunes chercheurs.</li>
</ul>

          </div>
        )}
      </div>
      <div className='pt-10 '>
        <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutPage;