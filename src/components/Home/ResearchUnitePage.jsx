import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";



const ResearchUnitePage = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const [selectedDomain, setSelectedDomain] = useState("all");

  const handleFilterDomain = (event) => {
    setSelectedDomain(event.target.value);
  };

  useEffect(() => {
    const fetchedMembers = [
      {
        id: 1,
        name: "Professeur Xavier",
        role: "Docteur",
        year: 2023,
        specialization: "Physique Quantique",
        description: "Expert en théorie des particules et mentor des jeunes chercheurs.",
        publications: 12,
        contact: "xavier@example.com",
        img: "/images/me.jpg",
      },
      {
        id: 2,
        name: "Doctorant Youssef",
        role: "Doctorant",
        year: 2023,
        specialization: "Intelligence Artificielle",
        description: "Travaille sur les modèles d'apprentissage profond pour les applications médicales.",
        publications: 5,
        contact: "youssef@example.com",
        img: "/images/me.jpg",
      },
      {
        id: 3,
        name: "Masterien Zaki",
        role: "Masterien",
        year: 2022,
        specialization: "Analyse des données",
        description: "Étudiant en deuxième année de Master, spécialisé en statistique avancée.",
        publications: 0,
        contact: "zaki@example.com",
        img: "",
      },
      {
        id: 4,
        name: "Doctorant Wafa",
        role: "Doctorant",
        year: 2023,
        specialization: "Réseaux Informatiques",
        description: "Recherche sur les protocoles de sécurité pour les systèmes distribués.",
        publications: 3,
        contact: "wafa@example.com",
        img: "",
      },
      {
        id: 5,
        name: "Professeur Nour",
        role: "Docteur",
        year: 2021,
        specialization: "Biotechnologie",
        description: "Spécialiste en génétique moléculaire et conférencière internationale.",
        publications: 20,
        contact: "nour@example.com",
        img: "",
      },
    ];
    setMembers(fetchedMembers);
    setFilteredMembers(fetchedMembers);
  }, []);

  const handleFilterYear = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    const filtered = year === "all"
      ? members
      : members.filter((member) => member.year.toString() === year);
    setFilteredMembers(filtered);
  };

  const filterByCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header/>
      <header className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkGreen pt-4 md:pt-6 lg:pt-10">Membres de l'unité</h1>
          <p className="mt-4 text-sm lg:text-lg text-gray-600">
          Découvrez les membres de l'unité, filtrés par année et catégorie.
          </p>
        </div>
      </header>

      {/* Section de filtrage */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Filtrage par année */}
          <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
  <h2 className="text-lg font-bold mb-4 text-center">Filtrer par année et domaine</h2>
  <div className="flex flex-col md:flex-row gap-4">
    <select
      value={selectedYear}
      onChange={handleFilterYear}
      className="block w-full md:w-1/2 px-4 py-2 border rounded-lg bg-gray-100 shadow-md text-gray-700"
    >
      <option value="all">Toutes les années</option>
      {[...new Set(members.map((member) => member.year))].map((year) => (
        <option key={year} value={year}>
          Année {year}
        </option>
      ))}
    </select>

    <select
      value={selectedDomain}
      onChange={handleFilterDomain}
      className="block w-full md:w-1/2 px-4 py-2 border rounded-lg bg-gray-100 shadow-md text-gray-700"
    >
      <option value="all">Tous les domaines</option>
      {["Chimie organique", "Chimie inorganique", "Chimie analytique", "Chimie physique"].map((domain) => (
        <option key={domain} value={domain}>
          {domain}
        </option>
      ))}
    </select>
  </div>
</div>

          {/* Filtrage par catégorie */}
          <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
            <h2 className="text-lg font-bold mb-4 text-center">
              Filtrer par catégorie
            </h2>
            <div className="flex justify-center gap-4">
              {["all", "Docteur", "Doctorant", "Masterien"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterByCategory(category)}
                  className={`px-4 py-2 rounded-md ${
                    activeCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  } hover:bg-blue-400 transition duration-200`}
                >
                  {category === "all" ? "Toutes" : category}s
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liste des membres */}
      <main className="py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers
            .filter(
              (member) =>
                activeCategory === "all" || member.role === activeCategory
            )
            .map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={
                      member.img ||
                      "https://via.placeholder.com/150?text=Avatar"
                    }
                    alt={`${member.name}'s avatar`}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {member.role} • Année {member.year}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Spécialisation :</strong> {member.specialization}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Publications :</strong> {member.publications}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Contact :</strong> {member.contact}
                  </p>
                </div>
                <p className="mt-4 text-sm text-gray-700">
                  {member.description}
                </p>
              </div>
            ))}
        </div>
      </main>

      {/* Footer */}
      < Footer />
    </div>
  );
};

export default ResearchUnitePage;
