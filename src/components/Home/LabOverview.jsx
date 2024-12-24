import React from "react";
import CountUp from "react-countup";

const LabOverview = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="lg:text-4xl md:text-2xl text-xl font-extrabold text-gray-800">
          Bienvenue au Laboratoire de Chimie
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Explorons ensemble les merveilles de la chimie et repoussons les limites de la science.
        </p>
      </div>

      {/* Content Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-12 md:gap-8 lg:gap-8">
        {/* Objectives */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
          <div className="text-emerald-500 text-4xl mb-4">🔬</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Notre Objectif</h3>
          <p className="text-gray-600">
            Contribuer à des avancées scientifiques significatives en chimie organique, analytique, et environnementale.
          </p>
        </div>

        {/* History */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
          <div className="text-sky-500 text-4xl mb-4">🏛️</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Notre Histoire</h3>
          <p className="text-gray-600">
            Fondé il y a plus de 20 ans, notre laboratoire est devenu un acteur clé de l'innovation scientifique.
          </p>
        </div>

        {/* Expertise */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
          <div className="text-yellow-500 text-4xl mb-4">⚗️</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Nos Domaines d'Expertise</h3>
          <p className="text-gray-600">
            Spécialisé en catalyse, polymères durables, et chimie des matériaux avancés.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center sm:gap-12 md:gap-8 lg:gap-8">
        <div className="bg-emerald-100 p-6 rounded-lg shadow-md">
          <p className="text-4xl font-bold text-dark">
            <CountUp start={0} end={20} duration={2.5} />+
          </p>
          <p className="text-gray-700 mt-2">Années d'expertise</p>
          <p className="bg-darkGreen p-[0.12rem]"></p>
        </div>
        <div className="bg-gray-300 p-6 rounded-lg shadow-md">
          <p className="text-4xl font-bold text-dark">
            <CountUp start={0} end={100} duration={2.5} />+
          </p>
          <p className="text-gray-700 mt-2">Projets terminés</p>
          <p className="bg-darkGreen p-[0.12rem]"></p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <p className="text-4xl font-bold text-dark">
            <CountUp start={0} end={50} duration={2.5} />+
          </p>
          <p className="text-gray-700 mt-2">Collaborateurs</p>
          <p className="bg-darkGreen p-[0.12rem]"></p>
        </div>
        <div className="bg-pink-100 p-6 rounded-lg shadow-md">
          <p className="text-4xl font-bold text-dark">
            <CountUp start={0} end={10} duration={2.5} />+
          </p>
          <p className="text-gray-700 mt-2">Prix et distinctions</p>
          <p className="bg-darkGreen p-[0.12rem]"></p>
        </div>
      </div>
    </section>
  );
};

export default LabOverview;
