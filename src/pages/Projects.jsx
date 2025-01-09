import React, { useState } from "react";
import { Beaker, Users, Clock, ChevronRight, Search, Tag, ExternalLink, Globe, Microscope, Atom } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import absorpImage from  '../images/chimieabsop.jpg';
const ProjectCard = ({ title, status, domain, team, duration, image, description, keywords, partners, publications }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="relative h-48 sm:h-56">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <span className={`absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm ${
        status === 'En cours' ? 'bg-teal-500 text-white' : 
        status === 'Terminé' ? 'bg-gray-500 text-white' :
        'bg-yellow-500 text-white'
      }`}>
        {status}
      </span>
    </div>
    
    <div className="p-4 sm:p-6">
      <div className="flex flex-wrap gap-3 text-gray-500 text-xs sm:text-sm mb-3">
        <div className="flex items-center">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          {duration}
        </div>
        <div className="flex items-center">
          <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          {team} chercheurs
        </div>
        <div className="flex items-center">
          <Beaker className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          {domain}
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {keywords.map((keyword, index) => (
          <span 
            key={index}
            className="flex items-center bg-teal-50 text-teal-600 px-2 py-1 rounded-full text-xs sm:text-sm"
          >
            <Tag className="w-3 h-3 mr-1" />
            {keyword}
          </span>
        ))}
      </div>

      {partners && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Partenaires :</h4>
          <div className="flex flex-wrap gap-2">
            {partners.map((partner, index) => (
              <span key={index} className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                <Globe className="w-3 h-3 mr-1" />
                {partner}
              </span>
            ))}
          </div>
        </div>
      )}

      {publications && (
        <a
          href={publications}
          className="inline-flex items-center text-sm sm:text-base text-teal-600 hover:text-teal-700"
        >
          Voir les publications
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [domainFilter, setDomainFilter] = useState("");

  const projects = [
    {
      title: "Développement de nouveaux catalyseurs pour la synthèse asymétrique",
      status: "En cours",
      domain: "Chimie organique",
      team: 8,
      duration: "2023-2026",
      image: absorpImage,
      description: "Recherche sur des catalyseurs innovants permettant une meilleure sélectivité dans les réactions de synthèse asymétrique.",
      keywords: ["Catalyse asymétrique", "Chimie verte", "Synthèse organique"],
      publications: "#"
    },
    {
      title: "Étude des mécanismes de dégradation des polymères biodégradables",
      status: "En cours",
      domain: "Chimie computationnelle",
      team: 5,
      duration: "2024-2025",
      image: absorpImage,
      description: "Analyse approfondie des mécanismes de dégradation des polymères biodégradables en conditions environnementales.",
      keywords: ["Polymères", "Environnement", "Analyse structurale"],
      
      publications: "#"
    },
    {
      title: "Nouveaux matériaux pour le stockage d'hydrogène",
      status: "Terminé",
      domain: "Chimie des Matériaux",
      team: 6,
      duration: "2022-2024",
      image: absorpImage,
      description: "Développement de matériaux nanoporeux innovants pour le stockage efficace de l'hydrogène.",
      keywords: ["Hydrogène", "Matériaux", "Énergie propre"],
      
      publications: "#"
    },
    {
      title: "Synthèse de molécules bioactives pour applications pharmaceutiques",
      status: "En préparation",
      domain: "Chimie de l'absorption",
      team: 4,
      duration: "2025-2027",
      image:absorpImage,
      description: "Projet de synthèse de nouvelles molécules bioactives ciblant des pathologies spécifiques.",
      keywords: ["Pharmacologie", "Synthèse", "Molécules bioactives"],
      
      publications: "#"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = !statusFilter || project.status === statusFilter;
    const matchesDomain = !domainFilter || project.domain === domainFilter;
    return matchesSearch && matchesStatus && matchesDomain;
  });

  const domains = [...new Set(projects.map(project => project.domain))];
  const statuses = [...new Set(projects.map(project => project.status))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Header/>
      <div className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className=" text-xl md:text-2xl lg:text-4xl mt-4 md:mt-8 lg:mt-8 font-bold mb-4">Projets de Recherche</h1>
            <p className="text-lg sm:text-xl opacity-90">
              Découvrez nos projets de recherche innovants en chimie et leurs impacts sur la science et la société
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <Microscope className="w-8 h-8 mb-2" />
                <div className="text-lg font-bold">12</div>
                <div className="text-sm opacity-80">Projets actifs</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-lg font-bold">45</div>
                <div className="text-sm opacity-80">Chercheurs impliqués</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <Atom className="w-8 h-8 mb-2" />
                <div className="text-lg font-bold">8</div>
                <div className="text-sm opacity-80">Domaines de recherche</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un projet..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Statut du projet</option>
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>

          <select
            value={domainFilter}
            onChange={(e) => setDomainFilter(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Domaine de recherche</option>
            {domains.map(domain => (
              <option key={domain} value={domain}>{domain}</option>
            ))}
          </select>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun projet ne correspond à vos critères de recherche</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProjects.length > 0 && (
          <div className="text-center">
            <button className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-200">
              Voir plus de projets
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;