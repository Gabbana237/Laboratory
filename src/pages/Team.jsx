import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Team = () => {
  const [activeTab, setActiveTab] = useState("responsables");
  const [selectedGuestDate, setSelectedGuestDate] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [invitedStudents, setInvitedStudents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/anciens-etudiants")
      .then((response) => response.json())
      .then((data) => setInvitedStudents(data))
      .catch((error) => console.error("Erreur lors du chargement des étudiants:", error));
  }, []);

  const filteredStudents = invitedStudents.filter((student) => {
    if (!selectedGuestDate) return true;
    return student.annee_debut <= selectedGuestDate && student.annee_sortie >= selectedGuestDate;
  });

  // Données simulées pour les collaborateurs
  const collaborateursNationaux = [
    {
      id: 1,
      nom: "Dr. Marie Tchougang",
      poste: "Chercheur Principal",
      institution: "Université de Yaoundé I",
      domaine: "Chimie Environnementale",
      photo: "/images/collab1.jpg",
      email: "marie.tchougang@univ-yaounde1.cm"
    },
    {
      id: 2,
      nom: "Prof. Jean-Baptiste Nkeng",
      poste: "Professeur",
      institution: "Université de Douala",
      domaine: "Analyse Spectroscopique",
      photo: "/images/collab2.jpg",
      email: "jb.nkeng@univ-douala.cm"
    },
    {
      id: 3,
      nom: "Dr. Françoise Mballa",
      poste: "Directrice de Recherche",
      institution: "IRAD Cameroun",
      domaine: "Chimie des Matériaux",
      photo: "/images/collab3.jpg",
      email: "f.mballa@irad.cm"
    },
    {
      id: 4,
      nom: "Dr. Paul Biyong",
      poste: "Chef de Département",
      institution: "Université de Dschang",
      domaine: "Chimie Organique",
      photo: "/images/collab4.jpg",
      email: "p.biyong@univ-dschang.cm"
    }
  ];

  const collaborateursInternationaux = [
    {
      id: 5,
      nom: "Prof. Sarah Johnson",
      poste: "Professeur Associé",
      institution: "University of Oxford, UK",
      domaine: "Chimie Analytique Avancée",
      photo: "/images/collab5.jpg",
      email: "sarah.johnson@ox.ac.uk"
    },
    {
      id: 6,
      nom: "Dr. Ahmed Ben Ali",
      poste: "Directeur de Laboratoire",
      institution: "Université de Tunis, Tunisie",
      domaine: "Nanotechnologie",
      photo: "/images/collab6.jpg",
      email: "ahmed.benali@utunis.tn"
    },
    {
      id: 7,
      nom: "Prof. Michel Dubois",
      poste: "Chercheur Senior",
      institution: "CNRS, France",
      domaine: "Chimie Verte",
      photo: "/images/collab7.jpg",
      email: "michel.dubois@cnrs.fr"
    },
    {
      id: 8,
      nom: "Dr. Kwame Asante",
      poste: "Professeur",
      institution: "University of Ghana",
      domaine: "Chimie Pharmaceutique",
      photo: "/images/collab8.jpg",
      email: "k.asante@ug.edu.gh"
    },
    {
      id: 9,
      nom: "Prof. Lisa Chen",
      poste: "Directrice de Recherche",
      institution: "MIT, USA",
      domaine: "Biotechnologie",
      photo: "/images/collab9.jpg",
      email: "lisa.chen@mit.edu"
    }
  ];

  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      <Header />
      <header className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkGreen pt-4 md:pt-6 lg:pt-10">
            Notre Équipe
          </h1>
        </div>
      </header>

      <div className="container mx-auto py-5">
        <div className="flex justify-center space-x-5 border-b">
          <button className={`py-2 px-4 text-sm lg:text-base ${activeTab === "responsables" ? "border-b-4 border-darkGreen font-bold text-darkGreen" : "text-gray-600"}`} onClick={() => setActiveTab("responsables")}>Responsables</button>
          <button className={`py-2 px-4 text-sm lg:text-base ${activeTab === "oldersStudent" ? "border-b-4 border-darkGreen font-bold text-darkGreen" : "text-gray-600"}`} onClick={() => setActiveTab("oldersStudent")}>Anciens Étudiants</button>
          <button className={`py-2 px-4 text-sm lg:text-base ${activeTab === "collaborateurs" ? "border-b-4 border-darkGreen font-bold text-darkGreen" : "text-gray-600"}`} onClick={() => setActiveTab("collaborateurs")}>Collaborateurs</button>
        </div>
      </div>

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
        
        {activeTab === "oldersStudent" && (
          <div>
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-darkGreen mb-5">Les Anciens Étudiants</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filtrer par année :</label>
              <select className="block w-full px-4 py-2 border border-darkGreen rounded-lg shadow-sm" value={selectedGuestDate} onChange={(e) => setSelectedGuestDate(e.target.value)}>
                <option value="">Toutes les années</option>
                {Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStudents.map((student) => (
                <div key={student.id} className="bg-white shadow-xl rounded-lg p-6 border hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <img src={student.photo ? `http://127.0.0.1:8000/storage/${student.photo}` : "/images/me.jpg"} alt={`${student.nom} ${student.prenom}`} className="w-16 h-16 rounded-full object-cover border border-gray-300" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-darkGreen">{student.nom} {student.prenom}</h3>
                      <p className="text-sm text-gray-600">{student.annee_debut} - {student.annee_sortie}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{student.description?.slice(0, 100)}... <span className="text-blue-500 cursor-pointer" onClick={() => setSelectedStudent(student)}>Voir plus</span></p>
                </div>
              ))}
            </div>

            {selectedStudent && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 md:w-3/4 lg:w-1/2 relative">
                  <button onClick={() => setSelectedStudent(null)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
                  <div className="flex flex-col md:flex-row items-center">
                    <img src={selectedStudent.photo ? `http://127.0.0.1:8000/storage/${selectedStudent.photo}` : "/images/me.jpg"} alt={selectedStudent.nom} className="w-40 h-40 rounded-full object-cover border border-gray-300" />
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-darkGreen mb-4">{selectedStudent.nom} {selectedStudent.prenom}</h3>
                      <p className="text-gray-700"><strong>Année :</strong> {selectedStudent.annee_debut} - {selectedStudent.annee_sortie}</p>
                      <p className="text-gray-700"><strong>Description :</strong> {selectedStudent.description}</p>
                      <p className="text-gray-700"><strong>Email :</strong> {selectedStudent.email}</p>
                      <p className="text-gray-700"><strong>Téléphone :</strong> {selectedStudent.telephone}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "collaborateurs" && (
          <div>
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-darkGreen mb-8">Nos Collaborateurs</h2>
            
            {/* Collaborateurs Nationaux */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-darkGreen mb-6 border-b-2 border-gray-200 pb-2">
                Collaborateurs Nationaux
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collaborateursNationaux.map((collab) => (
                  <div key={collab.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4">
                    <div className="flex items-center mb-4">
                      <img 
                        src={collab.photo} 
                        alt={collab.nom}
                        className="w-16 h-16 rounded-full object-cover border-2 border-darkGreen"
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-800">{collab.nom}</h4>
                        <p className="text-sm text-darkGreen font-medium">{collab.poste}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Institution:</span> {collab.institution}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Domaine:</span> {collab.domaine}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Email:</span> {collab.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collaborateurs Internationaux */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-darkGreen mb-6 border-b-2 border-gray-200 pb-2">
                Collaborateurs Internationaux
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collaborateursInternationaux.map((collab) => (
                  <div key={collab.id} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4">
                    <div className="flex items-center mb-4">
                      <img 
                        src={collab.photo} 
                        alt={collab.nom}
                        className="w-16 h-16 rounded-full object-cover border-2 border-darkGreen"
                      />
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-800">{collab.nom}</h4>
                      
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Institution:</span> {collab.institution}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Pays:</span> {collab.domaine}
                      </p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Team;