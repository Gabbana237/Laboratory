import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ResearchDomains = () => {
  const [domains, setDomains] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/research-domains")
      .then(response => response.json())
      .then(data => setDomains(data))
      .catch(error => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <section className="px-4 md:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="lg:text-4xl md:text-2xl text-xl font-extrabold text-gray-800">
          Domaines de Recherche
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Explorez nos principaux axes de recherche qui définissent notre laboratoire.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {domains.length > 0 ? (
          domains.map((domain, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={domain.image}
                alt={domain.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {domain.title}
                </h3>
                <p className="text-gray-600 mt-3 line-clamp-3">
                  {domain.description}
                </p>
                <div className="mt-6">
                  <Link
                    to={`/research?domain=${encodeURIComponent(domain.title)}`}
                    className="inline-block bg-darkGreen text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Chargement des données...</p>
        )}
      </div>
    </section>
  );
};

export default ResearchDomains;
