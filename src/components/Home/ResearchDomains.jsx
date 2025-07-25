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
          Explorez nos principaux Axes de recherche et Membres.
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
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition h-full flex flex-col min-h-[500px]"
            >
              {domain.image && (
                <img
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-56 object-cover"
                />
              )}

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-2">{domain.title}</h3>
                  {/* ✅ Responsable ajouté ici */}
                  {domain.responsable && (
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Responsable :</strong> {domain.responsable}
                    </p>
                  )}

                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {domain.thematiques?.map((theme, index) => (
                      <li key={index}>{theme}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Link
                    to={`/research?domain=${encodeURIComponent(domain.title)}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-white bg-darkGreen rounded-full shadow-md transition duration-300 hover:bg-green-500 hover:scale-105 active:scale-95"
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
