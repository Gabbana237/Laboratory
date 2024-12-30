import React, { useState } from "react";
import { Calendar, Clock, MapPin, ChevronDown, ChevronRight, Search, Tag, ExternalLink } from "lucide-react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import absorpImage from  '../images/chimieabsop.jpg';
const EventCard = ({ title, date, time, location, type, capacity, image, description, tags, registrationLink }) => (
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
      <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{description}</p>
      
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

const EventFilter = ({ icon: Icon, label, options, value, onChange }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="appearance-none w-full pl-8 pr-4 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-darkGreen text-sm"
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <Icon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
  </div>
);

const UpcomingEvents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");

  const events = [
    {
      title: "Symposium International de Chimie Organique",
      date: "15 Janvier 2025",
      time: "9:00 - 18:00",
      location: "Amphithéâtre Principal",
      type: "Conférence",
      capacity: 200,
      image: absorpImage,
      description: "Une journée complète dédiée aux avancées récentes en chimie organique avec des intervenants de renommée mondiale.",
      tags: ["Chimie Organique", "Innovation", "International"],
      registrationLink: "#"
    },
    {
      title: "Workshop: Techniques Avancées en Spectrométrie de Masse",
      date: "22 Janvier 2025",
      time: "14:00 - 17:00",
      location: "Salle TP-4",
      type: "Workshop",
      capacity: 30,
      image: absorpImage,
      description: "Session pratique sur les dernières techniques de spectrométrie de masse appliquées à l'analyse des composés organiques.",
      tags: ["Analytique", "Formation", "Hands-on"],
      registrationLink: "#"
    },
    {
      title: "Séminaire: Catalyse et Développement Durable",
      date: "5 Février 2025",
      time: "10:30 - 12:00",
      location: "Salle de Conférence B",
      type: "Séminaire",
      capacity: 80,
      image: absorpImage,
      description: "Présentation des dernières avancées en catalyse verte et leurs applications industrielles.",
      tags: ["Catalyse", "Développement Durable", "Industrie"],
      registrationLink: "#"
    },
    {
      title: "Journée Portes Ouvertes du Laboratoire",
      date: "15 Février 2025",
      time: "13:00 - 18:00",
      location: "Tous les laboratoires",
      type: "Événement Public",
      image: absorpImage,
      description: "Découvrez nos installations et rencontrez nos chercheurs lors de cette journée portes ouvertes.",
      tags: ["Grand Public", "Démonstrations", "Networking"],
      registrationLink: "#"
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = !typeFilter || event.type === typeFilter;
    const matchesMonth = !monthFilter || event.date.includes(monthFilter);
    return matchesSearch && matchesType && matchesMonth;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Header/>
      <div className="bg-gradient-to-r from-darkGreen pt-24 text-dark py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-4xl mt-4 font-bold mb-4">Événements à venir</h1>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl">
            Découvrez nos prochains événements scientifiques, conférences et workshops
          </p>
        </div>
      </div>

      {/* Filters Section */}
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
        options={["Conférence", "Workshop", "Séminaire", "Événement Public"]}
        value={typeFilter}
        onChange={setTypeFilter}
      />
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>

    <div className="relative">
      <EventFilter
        icon={Calendar}
        label="Mois"
        options={["Janvier", "Février", "Mars", "Avril","Mai"]}
        value={monthFilter}
        onChange={setMonthFilter}
      />
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  </div>

  {/* Events Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
    {filteredEvents.map((event, index) => (
      <EventCard key={index} {...event} />
    ))}
  </div>

  {/* No Results Message */}
  {filteredEvents.length === 0 && (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">Aucun événement ne correspond à vos critères de recherche</p>
    </div>
  )}

  {/* Load More Button */}
  {filteredEvents.length > 0 && (
    <div className="text-center mt-8">
      <button className="inline-flex items-center px-6 py-3 bg-darkGreen text-white rounded-full hover:bg-darkGreen transition-colors duration-200">
        Voir plus d'événements
        <ChevronRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  )}
</div>;
      <Footer/>
    </div>
  );
};

export default UpcomingEvents;