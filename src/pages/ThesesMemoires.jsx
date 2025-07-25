import React, { useState, useEffect, useMemo } from "react";
import { GraduationCap, User, Calendar, Search, FileText, Award, Clock, Download, RefreshCw, AlertCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Configuration API
const API_BASE_URL = 'http://localhost:8000/api';

// Service API
const apiService = {
  // Récupérer toutes les thèses
  getTheses: async (params = {}) => {
    try {
      const searchParams = new URLSearchParams();
      // Ajouter les paramètres de recherche
      if (params.search) searchParams.append('search', params.search);
      if (params.type) searchParams.append('type', params.type);
      if (params.status) searchParams.append('status', params.status);
      if (params.domain) searchParams.append('domain', params.domain);
      if (params.year) searchParams.append('year', params.year);
      if (params.page) searchParams.append('page', params.page);
      if (params.per_page) searchParams.append('per_page', params.per_page);

      const url = `${API_BASE_URL}/theses${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la récupération des thèses:', error);
      throw error;
    }
  },
  // Télécharger un PDF
  downloadPdf: async (thesisId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/theses/${thesisId}/download`, {
        method: 'GET',
        headers: {
          'Accept': 'application/pdf',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      throw error;
    }
  }
};

// Fonction pour tronquer le résumé
const truncatedSummary = (summary, maxLength = 200) => {
  if (!summary) return "Aucun résumé disponible.";
  if (summary.length <= maxLength) return summary;
  return summary.slice(0, maxLength).trim() + "...";
};

// Composant Modal simple
const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl leading-none"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

// Carte d'une thèse ou mémoire
const ThesisCard = ({
  id,
  title,
  type,
  author,
  supervisor,
  year,
  domain,
  summary,
  keywords,
  defense_date,
  university,
  laboratory,
  status,
  pdf_url,
  created_at,
  updated_at
}) => {
  const [showModal, setShowModal] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleDownload = async () => {
    if (!pdf_url && !id) return;
    setDownloading(true);
    try {
      if (pdf_url) {
        // Téléchargement direct via URL
        const link = document.createElement('a');
        link.href = pdf_url;
        link.download = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
        link.click();
      } else {
        // Téléchargement via API
        const blob = await apiService.downloadPdf(id);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      alert('Erreur lors du téléchargement du PDF');
    } finally {
      setDownloading(false);
    }
  };

  const getTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case "thèse":
      case "these":
        return "bg-blue-500 text-white";
      case "mémoire":
      case "memoire":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "soutenue":
        return "bg-green-500 text-white";
      case "en cours":
        return "bg-yellow-500 text-white";
      case "déposée":
      case "deposee":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={`px-2 py-1 rounded-full text-xs sm:text-sm ${getTypeColor(type)}`}>
            {type}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs sm:text-sm ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 leading-tight">
          {title}
        </h3>

        <div className="flex flex-wrap gap-3 text-gray-500 text-xs sm:text-sm mb-3">
          <div className="flex items-center">
            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            {year}
          </div>
          <div className="flex items-center">
            <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            {domain}
          </div>
        </div>

        {supervisor && (
          <div className="mb-2">
            <span className="text-sm text-gray-600">
              <strong>Directeur:</strong> {supervisor}
            </span>
          </div>
        )}

        {university && (
          <div className="mb-2">
            <span className="text-sm text-gray-600">
              <strong>Université:</strong> {university}
            </span>
          </div>
        )}

        {defense_date && (
          <div className="mb-3">
            <span className="text-sm text-gray-600">
              <strong>Date de soutenance:</strong> {formatDate(defense_date)}
            </span>
          </div>
        )}

        <p className="text-sm sm:text-base text-gray-600 mb-4">
          {truncatedSummary(summary)}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {summary && summary.length > 200 && (
            <button
              onClick={openModal}
              className="text-teal-600 font-semibold hover:underline flex items-center"
            >
              <FileText className="w-4 h-4 mr-1" />
              Voir résumé complet
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <Modal onClose={closeModal}>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Auteur:</strong> {author}</p>
                <p><strong>Type:</strong> {type}</p>
                <p><strong>Année:</strong> {year}</p>
                <p><strong>Domaine:</strong> {domain}</p>
              </div>
              <div>
                {supervisor && <p><strong>Directeur:</strong> {supervisor}</p>}
                {university && <p><strong>Université:</strong> {university}</p>}
                {laboratory && <p><strong>Laboratoire:</strong> {laboratory}</p>}
                {defense_date && <p><strong>Date de soutenance:</strong> {formatDate(defense_date)}</p>}
                <p><strong>Statut:</strong> {status}</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Résumé</h4>
              {summary ? (
                <p className="text-sm text-gray-700 whitespace-pre-line break-words leading-relaxed">
                  {summary}
                </p>
              ) : (
                <p className="text-sm text-gray-500">
                  Aucun résumé disponible.
                </p>
              )}
            </div>
            <div className="flex gap-3 pt-4">
              {(pdf_url || id) && (
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center"
                >
                  {downloading ? (
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Download className="w-4 h-4 mr-2" />
                  )}
                  {downloading ? 'Téléchargement...' : 'Télécharger PDF'}
                </button>
              )}
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

// Carte Skeleton (chargement)
const ThesisCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="h-6 bg-gray-300 rounded-full w-16"></span>
          <span className="h-6 bg-gray-300 rounded-full w-20"></span>
        </div>

        <h3 className="h-6 bg-gray-300 rounded w-3/4 mb-3"></h3>

        <div className="flex flex-wrap gap-3 text-gray-400 text-xs sm:text-sm mb-3">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-1 bg-gray-300 rounded-full"></div>
            <span className="h-4 bg-gray-300 rounded w-20"></span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-1 bg-gray-300 rounded-full"></div>
            <span className="h-4 bg-gray-300 rounded w-12"></span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-1 bg-gray-300 rounded-full"></div>
            <span className="h-4 bg-gray-300 rounded w-24"></span>
          </div>
        </div>

        <div className="mb-2">
          <span className="h-4 bg-gray-300 rounded w-2/3"></span>
        </div>

        <div className="mb-3">
          <span className="h-4 bg-gray-300 rounded w-1/2"></span>
        </div>

        <div className="space-y-2 mb-4">
          <p className="h-4 bg-gray-200 rounded w-full"></p>
          <p className="h-4 bg-gray-200 rounded w-5/6"></p>
          <p className="h-4 bg-gray-200 rounded w-4/6"></p>
        </div>

        <div className="mt-4">
          <h4 className="h-4 bg-gray-300 rounded w-1/4 mb-2"></h4>
          <div className="flex flex-wrap gap-2">
            <span className="h-6 bg-gray-200 rounded-full w-16"></span>
            <span className="h-6 bg-gray-200 rounded-full w-20"></span>
            <span className="h-6 bg-gray-200 rounded-full w-18"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant principal
const ThesesMemoires = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [domainFilter, setDomainFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [theses, setTheses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 10
  });

  // Filtres disponibles (statiques ou récupérés via une API différente si nécessaire)
  const [filters, setFilters] = useState({
    types: ["Thèse", "Mémoire"],
    statuses: ["Soutenue", "En cours", "Déposée"],
     domains: ["Chimie organique", "Chimie inorganique", "Chimie analytique", "Chimie physique", "Chimie environnementale", "Biochimie"],
    years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(String)
  });

  // Debounce pour la recherche
  const [searchDebounce, setSearchDebounce] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchDebounce(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Charger les thèses
  useEffect(() => {
    const loadTheses = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = {
          search: searchDebounce,
          type: typeFilter,
          status: statusFilter,
          domain: domainFilter,
          year: yearFilter,
          page: pagination.current_page,
          per_page: pagination.per_page
        };

        const response = await apiService.getTheses(params);

        if (response.data) {
          setTheses(response.data);
          setPagination({
            current_page: response.current_page || 1,
            last_page: response.last_page || 1,
            total: response.total || 0,
            per_page: response.per_page || 10
          });
        } else {
          setTheses(response);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des thèses:', error);
        setError(error.message || 'Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    loadTheses();
  }, [searchDebounce, typeFilter, statusFilter, domainFilter, yearFilter, pagination.current_page]);

  const handlePageChange = (page) => {
    setPagination(prev => ({ ...prev, current_page: page }));
  };

  const refreshData = async () => {
    setLoading(true);
    try {
      const params = {
        search: searchDebounce,
        type: typeFilter,
        status: statusFilter,
        domain: domainFilter,
        year: yearFilter,
        page: pagination.current_page,
        per_page: pagination.per_page
      };

      const response = await apiService.getTheses(params);

      if (response.data) {
        setTheses(response.data);
        setPagination({
          current_page: response.current_page || 1,
          last_page: response.last_page || 1,
          total: response.total || 0,
          per_page: response.per_page || 10
        });
      } else {
        setTheses(response);
      }
      setError(null);
    } catch (error) {
      console.error('Erreur lors du rafraîchissement:', error);
      setError(error.message || 'Erreur lors du rafraîchissement des données');
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setTypeFilter("");
    setStatusFilter("");
    setDomainFilter("");
    setYearFilter("");
  };

  // Filtrage frontend (supprimé car le filtrage est maintenant fait via l'API backend)
  // const filteredTheses = useMemo(() => {
  //   return theses.filter(thesis => {
  //     const matchesSearch = !searchQuery || 
  //       thesis.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       thesis.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       thesis.summary.toLowerCase().includes(searchQuery.toLowerCase());
  //     
  //     const matchesType = !typeFilter || thesis.type === typeFilter;
  //     const matchesStatus = !statusFilter || thesis.status === statusFilter;
  //     const matchesDomain = !domainFilter || thesis.domain === domainFilter;
  //     const matchesYear = !yearFilter || thesis.year.toString() === yearFilter;
  //     
  //     return matchesSearch && matchesType && matchesStatus && matchesDomain && matchesYear;
  //   });
  // }, [theses, searchQuery, typeFilter, statusFilter, domainFilter, yearFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <Header/>
      
      <div className="bg-gradient-to-r from-darkGreen pt-26 text-dark py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mt-10 mb-4">
              Thèses de Doctorat et Mémoires de Master
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Explorez les travaux de recherche soutenus dans notre laboratoire et découvrez 
              les contributions scientifiques de nos étudiants et chercheurs
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Filtres */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Filtres de recherche</h2>
            <div className="flex gap-2">
              <button
                onClick={refreshData}
                className="flex items-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-1" />
                Actualiser
              </button>
              <button
                onClick={clearFilters}
                className="flex items-center px-3 py-2 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Effacer les filtres
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">Tous les types</option>
              {filters.types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">Tous les statuts</option>
              {filters.statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            
            <select
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">Tous les domaines</option>
              {filters.domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
            
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="">Toutes les années</option>
              {filters.years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Informations de résultats */}
        {!loading && !error && (
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
             
            </p>
            {pagination.total > 0 && (
              <p className="text-sm text-gray-500">
                Page {pagination.current_page} sur {pagination.last_page}
              </p>
            )}
          </div>
        )}

        {/* Message d'erreur */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <p className="text-red-600">
                {error}
              </p>
            </div>
          </div>
        )}

        {/* Affichage des résultats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ThesisCardSkeleton key={index} />
              ))
            : theses.length > 0
            ? theses.map((thesis) => (
                <ThesisCard key={thesis.id || thesis.title} {...thesis} />
              ))
            : !error && (
                <div className="col-span-full text-center text-gray-500 py-8">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>Aucune thèse ou mémoire trouvé(e) avec les critères sélectionnés.</p>
                </div>
              )
          }
        </div>

        {/* Pagination */}
        {pagination.last_page > 1 && !loading && (
          <div className="flex justify-center space-x-2">
            <button
              onClick={() => handlePageChange(pagination.current_page - 1)}
              disabled={pagination.current_page === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Précédent
            </button>
            
            {[...Array(pagination.last_page)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg ${
                    page === pagination.current_page
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              );
            })}
            
            <button
              onClick={() => handlePageChange(pagination.current_page + 1)}
              disabled={pagination.current_page === pagination.last_page}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Suivant
            </button>
          </div>
        )}
      </div>
      
      <Footer/>
    </div>
  );
};

export default ThesesMemoires;