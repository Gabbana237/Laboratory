import React, { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, ChevronDown, ChevronRight, Search, Tag, Loader2 } from "lucide-react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import absorpImage from '../images/chimieabsop.jpg';
import LoadingSpinner from "../components/LoadingSpinner";

// Composant EventCard
const EventCard = ({ title, date, time, location, type, capacity, image, description, tags, registrationLink }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const truncatedDescription = description.length > 120 ? description.slice(0, 120) + "..." : description;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
      <div className="relative h-48 sm:h-56">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-2">
          <span className="bg-darkGreen text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
            {type}
          </span>
          {capacity && (
            <span className="bg-gray-800/75 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
              {capacity} places
            </span>
          )}
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-3 text-gray-500 text-xs sm:text-sm mb-3">
          <div className="flex items-center">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            {time}
          </div>
          <div className="flex items-center">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            {location}
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          {showFullDescription ? description : truncatedDescription}
        </p>
        {description.length > 120 && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-darkGreen hover:text-green-700 text-sm font-medium underline focus:outline-none"
          >
            {showFullDescription ? "Voir moins" : "Voir plus"}
          </button>
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="flex items-center bg-purple-50 text-darkGreen px-2 py-1 rounded-full text-xs sm:text-sm"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Composant EventFilter
const EventFilter = ({ icon: Icon, label, options, value, onChange }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="appearance-none w-full pl-8 pr-4 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option.value || option} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </select>
    <Icon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
  </div>
);

// Composant principal UpcomingEvents
const UpcomingEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [monthFilter, setMonthFilter] = useState("");
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchEvents = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/evement-avenir?page=${page}`);
      const data = await response.json();
      if (data.data.length > 0) {
        setEvents((prevEvents) => {
          const existingIds = new Set(prevEvents.map(event => event.id));
          const newEvents = data.data.filter(event => !existingIds.has(event.id));
          return [...prevEvents, ...newEvents];
        });
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setError("Erreur lors du chargement des événements");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents(page);
  }, []);

  const loadMoreEvents = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchEvents(nextPage);
  };

  const getMonthFromDate = (dateString) => {
    const month = dateString.split('-')[1];
    return parseInt(month, 10);
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !typeFilter || event.type === typeFilter;
    const eventMonth = getMonthFromDate(event.event_date);
    const matchesMonth = !monthFilter || eventMonth === parseInt(monthFilter, 10);
    return matchesSearch && matchesType && matchesMonth;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Balises SEO */}
      <title>Événements à venir | Laboratoire de Chimie URCHINGE</title>
      <meta
        name="description"
        content="Découvrez les prochains événements scientifiques du laboratoire de chimie URCHINGE. Conférences, ateliers et publications à ne pas manquer."
      />
      <meta
        name="keywords"
        content="événements scientifiques, conférences, ateliers, laboratoire de chimie, URCHINGE"
      />
      <meta name="author" content="Laboratoire de Chimie URCHINGE" />
      <meta name="robots" content="index, follow" />

      <Header />
      <div className="bg-gradient-to-r from-darkGreen pt-24 text-dark py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl lg:text-4xl mt-8 font-bold mb-4">Événements à venir</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl">
            Découvrez nos prochains événements scientifiques, conférences et workshops
          </p>
        </div>
      </div>
      {loading && (
            <div className="flex justify-center items-center min-h-[50vh]">
              <LoadingSpinner />
            </div>
          )}
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un événement..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-darkGreen"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
           
          <div className="relative">
            <EventFilter
              icon={Tag}
              label="Type d'événement"
              options={["Conférence", "Publication", "Atelier"]}
              value={typeFilter}
              onChange={setTypeFilter}
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <div className="relative">
            <EventFilter
              icon={Calendar}
              label="Mois"
              options={[
                { value: "01", label: "Janvier" },
                { value: "02", label: "Février" },
                { value: "03", label: "Mars" },
                { value: "04", label: "Avril" },
                { value: "05", label: "Mai" },
                { value: "06", label: "Juin" },
                { value: "07", label: "Juillet" },
                { value: "08", label: "Août" },
                { value: "09", label: "Septembre" },
                { value: "10", label: "Octobre" },
                { value: "11", label: "Novembre" },
                { value: "12", label: "Décembre" },
              ]}
              value={monthFilter}
              onChange={setMonthFilter}
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
            
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {error && <p className="text-red-500">{error}</p>}
        
          {filteredEvents.map((event, index) => (
            <EventCard 
              key={index}
              title={event.title}
              date={event.event_date}
              time={`${event.start_time} - ${event.end_time}`}
              location={event.localisation}
              type={event.type}
              capacity={event.capacity}
              image={event.image ? `http://127.0.0.1:8000/storage/${event.image}` : absorpImage}
              description={event.description}
              tags={event.tags || []}
              registrationLink={event.registrationLink}
            />
          ))}
        </div>

        {filteredEvents.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun événement ne correspond à vos critères de recherche</p>
          </div>
        )}

        {hasMore && filteredEvents.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreEvents}
              className="inline-flex items-center px-6 py-3 bg-darkGreen text-white rounded-full hover:bg-darkGreen transition-colors duration-200"
            >
              Voir plus d'événements
              <ChevronRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UpcomingEvents;