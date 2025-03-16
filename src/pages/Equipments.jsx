import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";

const Equipments = () => {
    const [equipments, setEquipments] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true); // État du chargement

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/equipments")
            .then((response) => response.json())
            .then((data) => {
                setEquipments(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erreur lors du chargement des équipements :", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="bg-gray-50 font-sans text-gray-800">
            {/* Balises SEO */}
            <title>Équipements de Laboratoire | Laboratoire de Chimie URCHINGE</title>
            <meta
                name="description"
                content="Découvrez notre gamme complète d'équipements de laboratoire de chimie. Explorez les outils et technologies que nous utilisons pour nos recherches innovantes."
            />
            <meta
                name="keywords"
                content="équipements de laboratoire, chimie, laboratoire URCHINGE, outils scientifiques, technologies de laboratoire"
            />
            <meta name="author" content="Laboratoire de Chimie URCHINGE" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content="Équipements de Laboratoire | Laboratoire de Chimie URCHINGE" />
            <meta property="og:description" content="Découvrez notre gamme complète d'équipements de laboratoire de chimie." />
            <meta property="og:image" content="%PUBLIC_URL%/logoSite.png" />
            <meta property="og:url" content="https://www.labo-chimie-urchinge.com/equipements" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content="Équipements de Laboratoire | Laboratoire de Chimie URCHINGE" />
            <meta property="twitter:description" content="Découvrez notre gamme complète d'équipements de laboratoire de chimie." />
            <meta property="twitter:image" content="%PUBLIC_URL%/logoSite.png" />

            <Header />
            <div className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-dark mt-8 mb-4">
                        Équipements de Laboratoire
                    </h1>
                    <p className="text-dark text-lg">
                        Découvrez notre gamme complète d'équipements de laboratoire de chimie
                    </p>
                </div>
            </div>
            {loading && (
            <div className="flex justify-center items-center">
              <LoadingSpinner />
              
            </div>
          )}

            <div className="container mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-darkGreen mb-5">Équipements</h2>

                {/* Affichage du loader si les données sont en cours de chargement */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                        {equipments.map((equipment, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={equipment.image_url}
                                    alt={equipment.name}
                                    className="w-full sm:w-52 h-52 object-cover rounded-lg shadow-lg mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                                    onClick={() => setSelectedImage(equipment.image_url)}
                                />
                                <p className="mt-2 text-lg font-semibold">{equipment.name}</p>
                            </div>
                        ))}
                    </div>
            </div>

            {/* Modale pour afficher l'image en plein écran */}
            {selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="relative">
                        <img
                            src={selectedImage}
                            alt="Équipement en plein écran"
                            className="max-w-full max-h-screen rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-200 transition duration-300"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Equipments;