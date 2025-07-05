import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const ResearchDomains = () => {
  const [domains, setDomains] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/research-domains")
      .then((res) => res.json())
      .then((data) => {
        setDomains(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="px-4 md:px-8 bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Domaines de Recherche</h2>
        <p className="mt-4 text-gray-600">
          Explorez nos principaux axes de recherche.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[50vh] w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              {domain.image && (
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-56 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold">{domain.title}</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {domain.description}
                </p>
                <div className="mt-4">
                  <Link
                    to={`/research?domain=${encodeURIComponent(domain.title)}`}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ResearchDomains;
