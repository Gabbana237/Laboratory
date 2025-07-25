import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Beaker, Users, Clock, Search, Globe } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

// Fonction pour tronquer la description
const truncatedDescription = (desc) => {
  if (!desc) return "Aucune description disponible.";
  if (desc.length <= 150) return desc;
  return desc.slice(0, 150).trim();
};

// Composant Modal utilisant React Portal
const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl leading-none"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

// Carte d'un projet
const ProjectCard = ({
  title,
  status,
  domain,
  team,
  duration,
  image,
  description,
  partners,
  keywords,
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 sm:h-56">
        <img
          src={`http://127.0.0.1:8000/storage/${image}`}
          alt={title}
          className="w-full h-full object-cover"
        />
        <span
          className={`absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm ${
            status === "En cours"
              ? "bg-teal-500 text-white"
              : status === "Terminé"
              ? "bg-gray-500 text-white"
              : "bg-yellow-500 text-white"
          }`}
        >
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

        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-gray-600 mb-4">
          {truncatedDescription(description)}
        </p>

        {description && description.length > 150 && (
          <button
            onClick={openModal}
            className="text-teal-600 font-semibold hover:underline"
          >
            Voir plus
          </button>
        )}

        {partners && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700">Partenaires :</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {partners.split(", ").map((partner, index) => (
                <span
                  key={index}
                  className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded"
                >
                  <Globe className="w-3 h-3 mr-1" />
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <Modal onClose={closeModal}>
          <h3 className="text-xl font-bold mb-4">Description complète</h3>
          {description ? (
            <p className="text-sm text-gray-700 whitespace-pre-line break-words">
              {description}
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              Aucune description disponible.
            </p>
          )}
          <button
            onClick={closeModal}
            className="mt-4 inline-block text-teal-600 font-semibold hover:underline"
          >
            Fermer
          </button>
        </Modal>
      )}
    </div>
  );
};

// Carte Skeleton (chargement)
const ProjectCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="relative h-48 sm:h-56 bg-gray-300"></div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-3 text-gray-400 text-xs sm:text-sm mb-3">
          <div className="flex items-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 mr-1 bg-gray-300 rounded-full"></div>
            <span className="h-4 bg-gray-300 rounded w-12"></span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 mr-1 bg-gray-300 rounded-full"></div>
            <span className="h-4 bg-gray-300 rounded w-16"></span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 sm:w-4 sm:h-4 mr-1 bg-gray-300 rounded-full"></div>
            <span className="h-4 bg-gray-300 rounded w-16"></span>
          </div>
        </div>

        <h3 className="h-6 bg-gray-300 rounded w-3/4 mb-2"></h3>
        <p className="h-4 bg-gray-200 rounded w-full mb-2"></p>
        <p className="h-4 bg-gray-200 rounded w-5/6 mb-4"></p>

        <div className="mt-4">
          <h4 className="h-4 bg-gray-300 rounded w-1/4 mb-2"></h4>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="h-5 bg-gray-200 rounded w-20"></span>
            <span className="h-5 bg-gray-200 rounded w-24"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [domainFilter, setDomainFilter] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/projects-de-recherche");
        if (!response.ok) {
          throw new Error("Erreur réseau");
        }
        const result = await response.json();
        if (result.success && Array.isArray(result.data)) {
          setProjects(result.data);
        } else {
          throw new Error("Format de réponse invalide");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects
    .filter((project) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        project.title?.toLowerCase().includes(searchLower) ||
        project.description?.toLowerCase().includes(searchLower) ||
        (project.keywords && project.keywords.toLowerCase().includes(searchLower));
      return matchesSearch;
    })
    .filter(
      (project) =>
        (!statusFilter || project.status === statusFilter) &&
        (!domainFilter || project.domain === domainFilter)
    );

  const statuses = [...new Set(projects.map((p) => p.status))];
  const domains = [...new Set(projects.map((p) => p.domain))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Balises SEO */}
      <title>Projets de Recherche | Laboratoire de Chimie</title>
      <meta
        name="description"
        content="Découvrez nos projets de recherche innovants en chimie et leurs impacts sur la science et la société."
      />
      <meta
        name="keywords"
        content="projets de recherche, chimie, laboratoire, innovation, science"
      />

      <Header />
      <div className="bg-gradient-to-r from-darkGreen pt-26 text-dark py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mt-10 mb-4">
              Projets de Recherche
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Découvrez nos projets de recherche innovants en chimie et leurs impacts
              sur la science et la société
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un projet..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Statut du projet</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <select
            value={domainFilter}
            onChange={(e) => setDomainFilter(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Domaine de recherche</option>
            {domains.map((domain) => (
              <option key={domain} value={domain}>
                {domain}
              </option>
            ))}
          </select>
        </div>

        {/* Affichage conditionnel selon l'état de chargement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {loading
            ? // Afficher les skeletons pendant le chargement
              Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            : filteredProjects.length > 0
            ? // Afficher les vrais projets
              filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))
            : // Aucun projet trouvé
              <div className="col-span-full text-center text-gray-500 py-8">
                Aucun projet trouvé.
              </div>}
        </div>

        {/* Message optionnel de chargement */}
        {loading && (
          <div className="text-center py-4 text-gray-500">
            Chargement des projets...
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;