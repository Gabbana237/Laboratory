import React, { useState } from "react";
import { Calendar, Award, Beaker, Users, ChevronRight, Search } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import absorpImage from  '../images/chimieabsop.jpg';
const NewsCard = ({ title, date, category, image, summary, tags }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
    <div className="relative h-48 sm:h-56">
      <img 
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
        {category}
      </span>
    </div>
    <div className="p-4 sm:p-6">
      <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
        {date}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 line-clamp-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">{summary}</p>
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {tags.map((tag, index) => (
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

const RecentNews = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const news = [
    {
      title: "Découverte majeure dans la catalyse des métaux de transition",
      date: "22 Décembre 2024",
      category: "Recherche",
      image: absorpImage,
      summary: "Notre équipe a développé un nouveau catalyseur permettant une efficacité accrue de 300% dans les réactions de couplage croisé.",
      tags: ["Catalyse", "Métaux", "Innovation"]
    },
    {
      title: "Prix d'excellence en chimie verte",
      date: "15 Décembre 2024",
      category: "Distinction",
      image: absorpImage,
      summary: "Le Dr. Marie Lambert reçoit le prix national pour ses travaux sur les solvants écologiques.",
      tags: ["Prix", "Chimie verte", "Reconnaissance"]
    },
    {
      title: "Nouveau partenariat avec l'industrie pharmaceutique",
      date: "10 Décembre 2024",
      category: "Collaboration",
      image:absorpImage,
      summary: "Signature d'un contrat de recherche majeur avec BioPharma pour le développement de nouveaux antimicrobiens.",
      tags: ["Industrie", "Pharma", "R&D"]
    },
    {
      title: "Séminaire international sur la chimie supramoléculaire",
      date: "5 Décembre 2024",
      category: "Événement",
      image:absorpImage,
      summary: "Notre laboratoire accueillera les plus grands experts mondiaux pour un séminaire de trois jours.",
      tags: ["Conférence", "International", "Réseautage"]
    }
  ];

  const stats = [
    { icon: Beaker, value: "45", label: "Publications en 2024" },
    { icon: Users, value: "12", label: "Nouveaux doctorants" },
    { icon: Award, value: "3", label: "Prix reçus" }
  ];

  const filters = ["all", "recherche", "conference", "collaboration", "événement"];

  const filteredNews = news.filter(item => {
    const matchesFilter = activeFilter === "all" || item.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Header/>
      <div className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
        <div className="container mx-auto py-4 px-4">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">Actualités du Laboratoire</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div key={index} className="flex items-center space-x-3 sm:space-x-4 bg-white/10 p-3 sm:p-4 rounded-lg">
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
            <ChevronRight className={`w-4 h-4 transform transition-transform ${isFilterOpen ? 'rotate-90' : ''}`} />
          </button>

          {/* Filter Buttons */}
          <div className={`md:flex gap-2 overflow-x-auto ${isFilterOpen ? 'flex' : 'hidden'}`}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`whitespace-nowrap px-3 py-2 rounded-full transition-colors duration-200 text-sm ${
                  activeFilter === filter 
                    ? "bg-green-600 text-white" 
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

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 my-6 sm:my-8">
          {filteredNews.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200 text-sm sm:text-base">
            Voir plus d'actualités
            <ChevronRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default RecentNews;