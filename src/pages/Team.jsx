import React, { useState } from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';

const Team = () => {
  const [activeTab, setActiveTab] = useState("responsables");

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <Header />
      <header className="text-gray-800 pt-36 pb-10">
        <div className="container mx-auto text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkGreen">Notre Équipe</h1>
          <p className="mt-4 text-lg text-gray-600">
            Découvrez les professionnels qui dirigent et soutiennent notre laboratoire.
          </p>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="container mx-auto py-5">
        <div className="flex justify-center space-x-5 border-b">
          <button
            className={`py-2 px-4 text-sm lg:text-base ${
              activeTab === "responsables" ? "border-b-4 border-darkGreen font-bold text-darkGreen" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("responsables")}
          >
            Responsables
          </button>
          <button
            className={`py-2 px-4 text-sm lg:text-base ${
              activeTab === "staff" ? "border-b-4 border-darkGreen font-bold text-darkGreen" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("staff")}
          >
            Staff Technique
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto py-10 px-5">
        {activeTab === "responsables" && (
          <div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-darkGreen mb-5">Responsables</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example: Responsible 1 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/me.jpg"
                  alt="Directeur du laboratoire"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Dr. Dingammadji Esperance</h3>
                <p className="text-sm text-gray-600">Directrice Générale</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Spécialiste en chimie analytique avec plus de 20 ans d'expérience dans la recherche scientifique.
                </p>
              </div>
              {/* Example: Responsible 2 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/director2.jpg"
                  alt="Responsable technique"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Dr. Alain Dubois</h3>
                <p className="text-sm text-gray-600">Responsable Technique</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Expert en chimie organique, responsable des projets de recherche innovants.
                </p>
              </div>
              {/* Example: Responsible 3 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/hamed.jpg"
                  alt="Responsable des normes"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Dr. Hamed Kamal</h3>
                <p className="text-sm text-gray-600">Responsable des Normes</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Assure la conformité aux normes environnementales et sanitaires.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "staff" && (
          <div>
            <h2 className="text-3xl font-bold text-darkGreen mb-5">Staff Technique</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example: Staff Member 1 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/technician1.jpg"
                  alt="Technicien du laboratoire"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Jean Dupont</h3>
                <p className="text-sm text-gray-600">Technicien en Chimie Analytique</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Manipule les équipements de pointe pour réaliser des analyses complexes.
                </p>
              </div>
              {/* Example: Staff Member 2 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/technician2.jpg"
                  alt="Technicien du laboratoire"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Claire Lefevre</h3>
                <p className="text-sm text-gray-600">Assistante de Recherche</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Soutient les chercheurs dans la mise en œuvre des protocoles expérimentaux.
                </p>
              </div>
              {/* Example: Staff Member 3 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/technician3.jpg"
                  alt="Technicien du laboratoire"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Paul Moreau</h3>
                <p className="text-sm text-gray-600">Technicien en Chimie Organique</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Expert en préparation des solutions chimiques pour les expériences.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Team;
