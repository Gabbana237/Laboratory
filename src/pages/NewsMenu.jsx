import React from "react";
import { Link } from "react-router-dom";

const NewsMenu = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">Actualités</h1>
      <ul className="space-y-4">
        <li>
          <Link
            to="/recent-news"
            className="block p-4 bg-white text-blue-600 rounded-md shadow-lg hover:shadow-xl hover:bg-blue-50 transition"
          >
            <h2 className="text-2xl font-semibold">Nouvelles récentes</h2>
            <p className="text-sm mt-1">
              Découvrez les dernières actualités et avancées du laboratoire.
            </p>
          </Link>
        </li>
        <li>
          <Link
            to="/upcoming-events"
            className="block p-4 bg-white text-purple-600 rounded-md shadow-lg hover:shadow-xl hover:bg-purple-50 transition"
          >
            <h2 className="text-2xl font-semibold">Événements à venir</h2>
            <p className="text-sm mt-1">
              Restez informé des conférences et événements prochains.
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsMenu;
