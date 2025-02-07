import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

const ResearchUnitePage = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMember, setSelectedMember] = useState(null);
  const location = useLocation();

  // Lors du montage, si un paramètre "domain" est présent dans l'URL, on le définit comme filtre
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const domainParam = searchParams.get("domain");
    if (domainParam) {
      setSelectedDomain(domainParam);
    }
  }, [location]);

  // Récupération des membres depuis l'API
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/members")
      .then((response) => {
        setMembers(response.data);
        setFilteredMembers(response.data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des membres :", error)
      );
  }, []);

  // Mise à jour des résultats filtrés dès que l'un des filtres change
  useEffect(() => {
    let filtered = members;

    if (selectedYear !== "all") {
      filtered = filtered.filter(
        (member) => member.year.toString() === selectedYear
      );
    }

    if (selectedDomain !== "all") {
      filtered = filtered.filter(
        (member) =>
          member.research_domain.toLowerCase() === selectedDomain.toLowerCase()
      );
    }
    

    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (member) => member.category === activeCategory
      );
    }

    setFilteredMembers(filtered);
  }, [members, selectedYear, selectedDomain, activeCategory]);

  // Gestion des filtres
  const handleFilterYear = (e) => setSelectedYear(e.target.value);
  const handleFilterDomain = (e) => setSelectedDomain(e.target.value);
  const filterByCategory = (category) => setActiveCategory(category);

  // Liste d'années (année en cours à 10 ans en arrière)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, i) => currentYear - i);

  // Définition des catégories selon la migration
  const categories = [
    { value: "all", label: "Toutes" },
    { value: "docteur", label: "Docteur" },
    { value: "doctorant", label: "Doctorant" },
    { value: "masterient", label: "Masterient" },
    { value: "professeur", label: "Professeur" },
  ];

  // Fonction pour tronquer la description sur les cartes
  const truncateText = (text, maxLength) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <header className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkGreen pt-4 md:pt-6 lg:pt-10">
            Membres de l'unité
          </h1>
          <p className="mt-4 text-sm lg:text-lg text-gray-600">
            Découvrez les membres de l'unité, filtrés par année, domaine et
            catégorie.
          </p>
        </div>
      </header>

      {/* Section des filtres */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Filtrage par année et domaine */}
          <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
            <h2 className="text-lg font-bold mb-4 text-center">
              Filtrer par année et domaine
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <select
                value={selectedYear}
                onChange={handleFilterYear}
                className="block w-full md:w-1/2 px-4 py-2 border rounded-lg bg-gray-100 shadow-md text-gray-700"
              >
                <option value="all">Toutes les années</option>
                {years.map((year) => (
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
                {[
                  "Chimie organique",
                  "Chimie inorganique",
                  "Chimie physique",
                  "Chimie analytique",
                ].map((domain) => (
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
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => filterByCategory(cat.value)}
                  className={`px-4 py-2 rounded-md ${
                    activeCategory === cat.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  } hover:bg-blue-400 transition duration-200`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affichage des membres */}
      <main className="py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <div className="flex flex-col items-center">
                <img
                  src={
                    member.image
                      ? `http://127.0.0.1:8000/storage/${member.image}`
                      : "https://via.placeholder.com/150?text=Avatar"
                  }
                  alt={`${member.name}'s avatar`}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {member.category} • Année {member.year}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Domaine :</strong> {member.research_domain}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Spécialisation :</strong> {member.speciality}
                </p>
              </div>
              {/* Description tronquée pour uniformiser les cartes */}
              <div className="mt-4 flex-grow">
                <p className="text-sm text-gray-700">
                  {truncateText(member.description, 100)}
                </p>
              </div>
              <div className="mt-4 text-center">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Voir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Modal pour afficher toutes les informations d'un membre */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0 flex items-center justify-center md:w-1/3">
                <img
                  src={
                    selectedMember.image
                      ? `http://127.0.0.1:8000/storage/${selectedMember.image}`
                      : "https://via.placeholder.com/150?text=Avatar"
                  }
                  alt={selectedMember.name}
                  className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover"
                />
              </div>
              <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-gray-500 mb-4">
                  {selectedMember.category} • Année {selectedMember.year}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Domaine :</strong> {selectedMember.research_domain}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Spécialisation :</strong> {selectedMember.specialization}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Publications :</strong> {selectedMember.publications}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Email :</strong> {selectedMember.email}
                </p>
                <div className="mt-4">
                  <p className="text-gray-700">
                    {selectedMember.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchUnitePage;
