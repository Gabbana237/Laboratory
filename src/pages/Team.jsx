import React, { useState } from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';

const Team = () => {
  const [activeTab, setActiveTab] = useState("responsables");
  const [selectedGuestDate, setSelectedGuestDate] = useState("");
  const [selectedOldStudentDate, setSelectedOldStudentDate] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

 
  
  const oldStudents = [
    { id: 1, name: "David", date: "2023", details: "Ancien diplômé, ingénieur logiciel." },
    { id: 2, name: "Eva", date: "2022", details: "Actuellement en master en IA." },
    { id: 3, name: "Frank", date: "2021", details: "Consultant en technologie." },
  ];

  
  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* Header */}
      <Header />
      <header className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkGreen pt-4 md:pt-6 lg:pt-10">Notre Équipe</h1>
          <p className="mt-4 text-sm lg:text-lg text-gray-600">
            Découvrez les professionnels qui dirigent et soutiennent notre laboratoire.
          </p>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="container mx-auto py-5">
        <div className="flex justify-center space-x-5 border-b">
          <button
            className={`py-2 px-1  lg:px-4 text-sm lg:text-base ${
              activeTab === "responsables" ? "border-b-4 border-darkGreen font-bold text-darkGreen" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("responsables")}
          >
            Responsables
          </button>
        
          <button
            className={`py-2 px-1  lg:px-4 text-sm lg:text-base ${
              activeTab === "oldersStudent" ? "border-b-4 border-darkGreen font-bold text-darkGreen" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("oldersStudent")}
          >
           Ancien Etudiants
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto py-10 px-5">
        {activeTab === "responsables" && (
          <div>
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-darkGreen mb-5">Responsables</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example: Responsible 1 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/me.jpg"
                  alt="Directeur du laboratoire"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Dr. Dingammadji Esperance</h3>
                <p className="text-sm text-gray-600">Directrice Générale</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Spécialiste en chimie analytique avec plus de 20 ans d'expérience dans la recherche scientifique.
                </p>
              </div>
              {/* Example: Responsible 2 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/director2.jpg"
                  alt="Responsable technique"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Dr. Alain Dubois</h3>
                <p className="text-sm text-gray-600">Responsable Technique</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Expert en chimie organique, responsable des projets de recherche innovants.
                </p>
              </div>
              {/* Example: Responsible 3 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/hamed.jpg"
                  alt="Responsable des normes"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Dr. Hamed Kamal</h3>
                <p className="text-sm text-gray-600">Responsable des Normes</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Assure la conformité aux normes environnementales et sanitaires.
                </p>
              </div>
            </div>
            <div className="mt-10">
            <h2 className=" text-2xl lg:text-3xl font-bold text-darkGreen mb-5">Staff Technique</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example: Staff Member 1 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/technician1.jpg"
                  alt="Technicien du laboratoire"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Jean Dupont</h3>
                <p className="text-sm text-gray-600">Technicien en Chimie Analytique</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Manipule les équipements de pointe pour réaliser des analyses complexes.
                </p>
              </div>
              {/* Example: Staff Member 2 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/technician2.jpg"
                  alt="Technicien du laboratoire"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Claire Lefevre</h3>
                <p className="text-sm text-gray-600">Assistante de Recherche</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Soutient les chercheurs dans la mise en œuvre des protocoles expérimentaux.
                </p>
              </div>
              {/* Example: Staff Member 3 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/technician3.jpg"
                  alt="Technicien du laboratoire"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">Paul Moreau</h3>
                <p className="text-sm text-gray-600">Technicien en Chimie Organique</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Expert en préparation des solutions chimiques pour les expériences.
                </p>
              </div>
            </div>
          </div>

       </div>
          
        )}

       



{isModalOpen && selectedStudent && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        onClick={() => setIsModalOpen(false)}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="flex items-center mb-6">
        <img
          src={selectedStudent.profileImage || "/images/me.jpg"}
          alt={`${selectedStudent.name} Profile`}
          className="w-20 h-20 rounded-full object-cover border border-gray-300"
        />
        <div className="ml-6">
          <h3 className="text-2xl font-bold text-darkGreen">{selectedStudent.name}</h3>
          <p className="text-sm text-gray-600">Année : {selectedStudent.date.split("-")[0]}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">{selectedStudent.details}</p>
      
      <div className="mt-6">
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <p className="text-gray-600 text-sm">Email : <span className="font-medium">sophie.martin@example.com</span></p>
          <p className="text-gray-600 text-sm">Affiliation : <span className="font-medium">Université de Chimie de Paris</span></p>
          <p className="text-gray-600 text-sm">Objet de la visite : <span className="font-medium">Recherche sur les composés organiques</span></p>
          <p className="text-gray-600 text-sm">Date de la visite : <span className="font-medium">15 février 2025</span></p>
          <p className="text-gray-600 text-sm">Téléphone : <span className="font-medium">01 23 45 67 89</span></p>
        </div>
      </div>
    </div>
  </div>
)}






      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Team;
