// ... imports inchangés
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";

const ResearchUnitePage = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [domains, setDomains] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const domainParam = searchParams.get("domain");
    if (domainParam) setSelectedDomain(domainParam);
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [membersRes, domainsRes] = await Promise.all([
          axios.get("http://127.0.0.1:8000/api/members"),
          axios.get("http://127.0.0.1:8000/api/research-domains"),
        ]);
        setMembers(membersRes.data);
        setFilteredMembers(membersRes.data);
        setDomains(domainsRes.data);
      } catch (error) {
        console.error("Erreur de chargement :", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...members];
    if (selectedDomain !== "all") {
      filtered = filtered.filter(
        (member) =>
          member.research_domain?.toLowerCase() ===
          selectedDomain.toLowerCase()
      );
    }
    if (activeCategory !== "all") {
      filtered = filtered.filter((member) => member.category === activeCategory);
    }
    setFilteredMembers(filtered);
  }, [members, selectedDomain, activeCategory]);

  const handleFilterDomain = (e) => setSelectedDomain(e.target.value);
  const filterByCategory = (category) => setActiveCategory(category);

  const categories = [
    { value: "all", label: "Toutes" },
    { value: "docteur", label: "Docteur" },
    { value: "maitre_de_conferences", label: "Maître de conférences" },
    { value: "charge_de_cours", label: "Chargé de cours" },
    { value: "professeur", label: "Professeur" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      {/* En-tête */}
      <header className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkGreen pt-4">
            Membres de l'unité
          </h1>
          <p className="mt-4 text-sm lg:text-lg text-gray-600">
            Découvrez les membres de l'unité, filtrés par domaine et catégorie.
          </p>
        </div>
      </header>

      {/* Filtres */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Domaine */}
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h2 className="text-xl font-semibold text-center mb-4">Filtrer par domaine</h2>
            <div className="flex justify-center">
              <select
                value={selectedDomain}
                onChange={handleFilterDomain}
                className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 shadow focus:ring-2 focus:ring-green-400"
              >
                <option value="all">Tous les domaines</option>
                {domains.map((domain) => (
                  <option key={domain.id} value={domain.title}>
                    {domain.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Catégorie */}
          <div className="bg-white p-6 shadow-md rounded-xl">
            <h2 className="text-xl font-semibold text-center mb-4">Filtrer par catégorie</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => filterByCategory(cat.value)}
                  className={`px-5 py-2 w-full sm:w-auto rounded-full text-sm font-medium transition duration-200 ${
                    activeCategory === cat.value
                      ? "bg-darkGreen text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-emerald-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Liste des membres */}
      <main className="py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={
                    member.image
                      ? `http://127.0.0.1:8000/storage/${member.image}`
                      : "/images/avatar.webp" // Chemin vers votre image professionnelle par défaut
                  }
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 shadow"
                />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.category}</p>
                <p className="text-sm mt-1">
                  <strong>Domaine :</strong> {member.research_domain}
                </p>
                {member.speciality && (
                  <p className="text-sm">
                    <strong>Spécialisation :</strong> {member.speciality}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResearchUnitePage;