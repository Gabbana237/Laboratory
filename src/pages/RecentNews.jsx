import React, { useState, useEffect } from "react";
import {
  Calendar,
  Award,
  Beaker,
  Users,
  ChevronRight,
  Search,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Composant NewsCard avec gestion de la description tronquée
const NewsCard = ({ title, date, category, image, description, tags }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Limiter la description à 150 caractères
  const truncatedDescription = description?.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
      <div className="relative h-48 sm:h-56">
        <img
          src={`http://127.0.0.1:8000/storage/${image}`}
          alt={title} // Balise alt descriptive
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-darkGreen text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
          {category || "Non spécifiée"}
        </span>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          {date ? new Date(date).toLocaleDateString() : "Date non spécifiée"}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 line-clamp-2">
          {title || "Titre non spécifié"}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">
          {showFullDescription ? description : truncatedDescription}
        </p>
        {/* Bouton "Voir plus" ou "Voir moins" */}
        {description?.length > 150 && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-darkGreen text-sm mb-8 font-medium hover:underline focus:outline-none"
          >
            {showFullDescription ? "Voir moins" : "Voir plus"}
          </button>
        )}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const RecentNews = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [news, setNews] = useState([]); // State pour stocker les données de l'API
  const [loading, setLoading] = useState(true); // Indicateur de chargement

  const stats = [
    { icon: Beaker, value: "45", label: "Publications en 2024" },
    { icon: Users, value: "12", label: "Nouveaux doctorants" },
    { icon: Award, value: "3", label: "Prix reçus" },
  ];

  const filters = ["all", "recherche", "conference", "collaboration", "venement"];

  // Récupération des données depuis l'API au montage du composant
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/news"); // URL de ton API Laravel
        if (!response.ok) {
          throw new Error("Échec lors de la récupération des actualités.");
        }
        const data = await response.json();
        setNews(data.data); // On suppose que les données sont dans 'data'
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Filtrage des actualités
  const filteredNews = news.filter((item) => {
    const matchesFilter =
      activeFilter === "all" || item.type.toLowerCase() === activeFilter.toLowerCase(); // Filtrer par 'type'
    const matchesSearch =
      item.title?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase()?.includes(searchQuery.toLowerCase()) || // Utilisez description ici
      (item.tags || []).some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Balises SEO */}
      <title>Actualités du Laboratoire | Laboratoire de Chimie URCHINGE</title>
      <meta
        name="description"
        content="Découvrez les dernières actualités du laboratoire de chimie URCHINGE. Restez informé sur nos recherches, publications et événements scientifiques."
      />
      <meta
        name="keywords"
        content="actualités, laboratoire de chimie, URCHINGE, recherche scientifique, publications, événements scientifiques"
      />
      <meta name="author" content="Laboratoire de Chimie URCHINGE" />
      <meta name="robots" content="index, follow" />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mt-8 mb-4 sm:mb-6">
            Actualités du Laboratoire
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 sm:space-x-4 bg-white/10 p-3 sm:p-4 rounded-lg"
              >
                <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold">{value}</div>
                  <div className="text-xs sm:text-sm opacity-80">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col gap-4">
          {/* Search Bar - Always visible */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Toggle Button - Mobile Only */}
          <button
            className="md:hidden w-full px-4 py-2 bg-white rounded-lg shadow text-gray-600 flex justify-between items-center"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span>Filtrer par: {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}</span>
            <ChevronRight className={`w-4 h-4 transform transition-transform ${isFilterOpen ? "rotate-90" : ""}`} />
          </button>

          {/* Filter Buttons */}
          <div className={`md:flex gap-2 overflow-x-auto ${isFilterOpen ? "flex" : "hidden"}`}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`whitespace-nowrap px-3 py-2 rounded-full transition-colors duration-200 text-sm ${
                  activeFilter === filter
                    ? "bg-darkGreen text-white"
                    : "bg-white text-gray-600 hover:bg-green-50"
                }`}
                onClick={() => {
                  setActiveFilter(filter);
                  setIsFilterOpen(false);
                }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="text-center my-8">
            <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-darkGreen rounded-full"></div>
          </div>
        )}

        {/* News Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 my-6 sm:my-8">
            {filteredNews.length > 0 ? (
              filteredNews.map((item, index) => (
                <NewsCard
                  key={index}
                  title={item.title}
                  date={item.date}
                  category={item.category}
                  image={item.image}
                  description={item.description} // Utilisez description ici
                  tags={item.tags}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">Aucune actualité ne correspond à votre recherche.</p>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RecentNews;