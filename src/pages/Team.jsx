import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

const Team = () => {
  const [activeTab, setActiveTab] = useState("responsables");
  const [selectedGuestDate, setSelectedGuestDate] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [invitedStudents, setInvitedStudents] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // États pour la pagination des collaborateurs
  const [visibleNational, setVisibleNational] = useState(6);
  const [visibleInternational, setVisibleInternational] = useState(6);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/anciens-etudiants")
      .then((response) => response.json())
      .then((data) => setInvitedStudents(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des étudiants:", error)
      );
  }, []);

  const filteredStudents = invitedStudents.filter((student) => {
    if (!selectedGuestDate) return true;
    return student.annee_etude.includes(selectedGuestDate);
  });

  const toggleDescription = (studentId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [studentId]: !prev[studentId]
    }));
  };

  
  // Collaborateurs Nationaux
  const collaborateursNationaux = [
    {
      id: 1,
      nom: "Pr Emmanuel Ngameni",
      poste: "Professeur",
      institution: "Université de Yaoundé 1",
      domaine: "Chimie Analytique",
      photo: "/images/collab1.jpg",
      email: "e.ngameni@univ-yaounde1.cm"
    },
    {
      id: 2,
      nom: "Pr Emmanuel Djoufack",
      poste: "Professeur",
      institution: "Université de Yaoundé 1",
      domaine: "Chimie Analytique",
      photo: "/images/collab2.jpg",
      email: "e.djoufack@univ-yaounde1.cm"
    },
    {
      id: 3,
      nom: "Pr Charles Nanseu",
      poste: "Professeur",
      institution: "Université de Yaoundé 1",
      domaine: "Chimie Analytique",
      photo: "/images/collab3.jpg",
      email: "c.nanseu@univ-yaounde1.cm"
    },
    {
      id: 4,
      nom: "Pr Gustave Kenne Dedzo",
      poste: "Professeur",
      institution: "Université de Yaoundé 1",
      domaine: "Chimie Analytique",
      photo: "/images/collab4.jpg",
      email: "g.kennededzo@univ-yaounde1.cm"
    },
    {
      id: 5,
      nom: "Pr Peter Ndifon",
      poste: "Professeur",
      institution: "Université de Yaoundé 1",
      domaine: "Chimie de Coordination",
      photo: "/images/collab5.jpg",
      email: "p.ndifon@univ-yaounde1.cm"
    },
    {
      id: 6,
      nom: "Pr Justin Nenwa",
      poste: "Professeur",
      institution: "Université de Yaoundé 1",
      domaine: "Chimie de Coordination",
      photo: "/images/collab6.jpg",
      email: "j.nenwa@univ-yaounde1.cm"
    },
    {
      id: 7,
      nom: "Pr Elie Younang",
      poste: "Professeur",
      institution: "Université de Yaoundé 1",
      domaine: "Chimie Physique et Théorique",
      photo: "/images/collab7.jpg",
      email: "e.younang@univ-yaounde1.cm"
    },
    {
      id: 8,
      nom: "Pr Ndi Julius",
      poste: "Professeur",
      institution: "Université de Yaoundé 1",
      domaine: "Chimie Physique et Théorique",
      photo: "/images/collab8.jpg",
      email: "n.julius@univ-yaounde1.cm"
    },
    {
      id: 9,
      nom: "Pr Ghogomu Paul",
      poste: "Professeur",
      institution: "Université de Yaoundé 1",
      domaine: "Chimie Physique et Théorique",
      photo: "/images/collab9.jpg",
      email: "g.paul@univ-yaounde1.cm"
    },
    {
      id: 10,
      nom: "Dr Rufis Tiegam Tagne",
      poste: "Docteur",
      institution: "Université de Yaoundé 1",
      domaine: "Energies renouvelables",
      photo: "/images/collab10.jpg",
      email: "r.tiegam@univ-yaounde1.cm"
    },
    {
      id: 11,
      nom: "Pr Hervé Tcheumi",
      poste: "Professeur",
      institution: "Université de Maroua",
      domaine: "Chimie Analytique",
      photo: "/images/collab11.jpg",
      email: "h.tcheumi@univ-maroua.cm"
    },
    {
      id: 12,
      nom: "Pr Martin Pengou",
      poste: "Professeur",
      institution: "Université de Maroua",
      domaine: "Chimie Analytique",
      photo: "/images/collab12.jpg",
      email: "m.pengou@univ-maroua.cm"
    },
    {
      id: 13,
      nom: "Dr Francis Merlin Tchieno Mélataguia",
      poste: "Docteur",
      institution: "Université de Maroua",
      domaine: "Chimie Analytique",
      photo: "/images/collab13.jpg",
      email: "f.tchieno@univ-maroua.cm"
    },
    {
      id: 14,
      nom: "Pr Joseph Dika Manga",
      poste: "Professeur",
      institution: "Université de Douala",
      domaine: "Chimie Analytique",
      photo: "/images/collab14.jpg",
      email: "j.dikamanga@univ-douala.cm"
    },
    {
      id: 15,
      nom: "Pr Bikelé Mama",
      poste: "Professeur",
      institution: "Université de Douala",
      domaine: "Chimie Physique et Théorique",
      photo: "/images/collab15.jpg",
      email: "b.mama@univ-douala.cm"
    },
    {
      id: 16,
      nom: "Pr Francois Eya'ane Meva",
      poste: "Professeur",
      institution: "Université de Douala",
      domaine: "Chimie Analytique",
      photo: "/images/collab16.jpg",
      email: "f.meva@univ-douala.cm"
    },
    {
      id: 17,
      nom: "Dr Guy Ngassa Piégang",
      poste: "Docteur",
      institution: "Université de Douala",
      domaine: "Chimie Analytique",
      photo: "/images/collab17.jpg",
      email: "g.piegang@univ-douala.cm"
    },
    {
      id: 18,
      nom: "Pr Arlette Deutchoua",
      poste: "Professeur",
      institution: "Université de Douala",
      domaine: "Chimie Analytique",
      photo: "/images/collab18.jpg",
      email: "a.deutchoua@univ-douala.cm"
    },
    {
      id: 19,
      nom: "Pr Guy Noumi",
      poste: "Professeur",
      institution: "Université de Ngaoundéré",
      domaine: "Chimie Analytique",
      photo: "/images/collab19.jpg",
      email: "g.noumi@univ-ngaoundere.cm"
    },
    {
      id: 20,
      nom: "Dr Joel Donkeng",
      poste: "Docteur",
      institution: "Université de Ngaoundéré",
      domaine: "Chimie Analytique",
      photo: "/images/collab20.jpg",
      email: "j.donkeng@univ-ngaoundere.cm"
    },
    {
      id: 21,
      nom: "Dr Aude Kameni Wendji",
      poste: "Docteur",
      institution: "Université de Ngaoundéré",
      domaine: "Chimie Analytique",
      photo: "/images/collab21.jpg",
      email: "a.wendji@univ-ngaoundere.cm"
    }
  ];

  // Collaborateurs Internationaux
  const collaborateursInternationaux = [
    {
      id: 22,
      nom: "Pr Modou Fall",
      poste: "Professeur",
      institution: "Université Cheikh Anta Diop (Dakar)",
      pays: "Sénégal",
      photo: "/images/collab22.jpg",
      email: "modou.fall@ucad.edu.sn"
    },
    {
      id: 23,
      nom: "Pr Aubin Ondo",
      poste: "Professeur",
      institution: "Ecole Normale de Libreville",
      pays: "Gabon",
      photo: "/images/collab23.jpg",
      email: "a.ondo@enlibreville.ga"
    },
    {
      id: 24,
      nom: "Pr Jean Jacques Anguilé",
      poste: "Professeur",
      institution: "Université des Science et Technologie de Masuku",
      pays: "Gabon",
      photo: "/images/collab24.jpg",
      email: "jj.anguile@ustm.ga"
    },
    {
      id: 25,
      nom: "Pr Etienne Sagbo",
      poste: "Professeur",
      institution: "Université d'Abomey-Calavy (Cotonou)",
      pays: "Bénin",
      photo: "/images/collab25.jpg",
      email: "e.sagbo@uac.bj"
    },
    {
      id: 26,
      nom: "Pr Issa Tapsoba",
      poste: "Professeur",
      institution: "Université Joseph Ki-Zerbo (Ouagadougou)",
      pays: "Burkina Faso",
      photo: "/images/collab26.jpg",
      email: "i.tapsoba@ujkz.bf"
    },
    {
      id: 27,
      nom: "Pr Emeka Oguzie",
      poste: "Professeur",
      institution: "Federal University of Technology Oweri",
      pays: "Nigéria",
      photo: "/images/collab27.jpg",
      email: "e.oguzie@futo.edu.ng"
    },
    {
      id: 28,
      nom: "Pr Alain Walcarius",
      poste: "Professeur",
      institution: "Université de Lorraine (Nancy)",
      pays: "France",
      photo: "/images/collab28.jpg",
      email: "alain.walcarius@univ-lorraine.fr"
    },
    {
      id: 29,
      nom: "Pr Claude Lecomte",
      poste: "Professeur",
      institution: "Université de Lorraine (Nancy)",
      pays: "France",
      photo: "/images/collab29.jpg",
      email: "claude.lecomte@univ-lorraine.fr"
    },
    {
      id: 30,
      nom: "Pr Emmanuel Wenger",
      poste: "Professeur",
      institution: "Université de Lorraine (Nancy)",
      pays: "France",
      photo: "/images/collab30.jpg",
      email: "emmanuel.wenger@univ-lorraine.fr"
    },
    {
      id: 31,
      nom: "Pr Maxime Pontié",
      poste: "Professeur",
      institution: "Université d'Angers",
      pays: "France",
      photo: "/images/collab31.jpg",
      email: "maxime.pontie@univ-angers.fr"
    },
    {
      id: 32,
      nom: "Pr Jean Philippe Bouchara",
      poste: "Professeur",
      institution: "Université d'Angers",
      pays: "France",
      photo: "/images/collab32.jpg",
      email: "jp.bouchara@univ-angers.fr"
    },
    {
      id: 33,
      nom: "Pr Christine Mousty",
      poste: "Professeur",
      institution: "Université Blaise Pascal Clermont-Ferrand",
      pays: "France",
      photo: "/images/collab33.jpg",
      email: "christine.mousty@uca.fr"
    },
    {
      id: 34,
      nom: "Pr Dr Wolfgang Schuhman",
      poste: "Professeur",
      institution: "Ruhr-Université Bochum, Bochum",
      pays: "Allemagne",
      photo: "/images/collab34.jpg",
      email: "wolfgang.schuhmann@rub.de"
    },
    {
      id: 35,
      nom: "Pr Dr Christoph Janiak",
      poste: "Professeur",
      institution: "Université Heinrich-Heine, Dusseldorf",
      pays: "Allemagne",
      photo: "/images/collab35.jpg",
      email: "janiak@hhu.de"
    },
    {
      id: 36,
      nom: "Dr Anayancy Osorio-Madrazo",
      poste: "Docteur",
      institution: "Université Freiburg",
      pays: "Allemagne",
      photo: "/images/collab36.jpg",
      email: "anayancy.osorio@uni-freiburg.de"
    },
    {
      id: 37,
      nom: "Pr Huayna",
      poste: "Professeur",
      institution: "Université Kiel",
      pays: "Allemagne",
      photo: "/images/collab37.jpg",
      email: "huayna@uni-kiel.de"
    },
    {
      id: 38,
      nom: "Pr Andreas Lesch",
      poste: "Professeur",
      institution: "Université de Bologne",
      pays: "Italie",
      photo: "/images/collab38.jpg",
      email: "andreas.lesch@unibo.it"
    },
    {
      id: 39,
      nom: "Pr Fabio Machetti",
      poste: "Professeur",
      institution: "Université de Camerino",
      pays: "Italie",
      photo: "/images/collab39.jpg",
      email: "fabio.machetti@unicam.it"
    },
    {
      id: 40,
      nom: "Pr Claudio Pettinari",
      poste: "Professeur",
      institution: "Université de Camerino",
      pays: "Italie",
      photo: "/images/collab40.jpg",
      email: "claudio.pettinari@unicam.it"
    },
    {
      id: 41,
      nom: "Pr Eleutero Alvarez",
      poste: "Professeur",
      institution: "Université de Séville",
      pays: "Espagne",
      photo: "/images/collab41.jpg",
      email: "alvarez@us.es"
    },
    {
      id: 42,
      nom: "Pr Panchanan Puzari",
      poste: "Professeur",
      institution: "Tezpur University",
      pays: "Inde",
      photo: "/images/collab42.jpg",
      email: "ppuzari@tezu.ernet.in"
    }
  ];


  return (
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* Balises SEO */}
      <title>Notre Équipe | Laboratoire de Chimie URCHINGE</title>
      <meta
        name="description"
        content="Découvrez notre équipe de responsables, chercheurs et anciens étudiants du laboratoire de chimie URCHINGE. Rencontrez nos experts en chimie analytique et organique."
      />
      <meta
        name="keywords"
        content="équipe, laboratoire de chimie, URCHINGE, responsables, anciens étudiants, chercheurs, chimie analytique, chimie organique"
      />
      <meta name="author" content="Laboratoire de Chimie URCHINGE" />
      <meta name="robots" content="index, follow" />

      <Header />

      <header className="bg-gradient-to-r from-darkGreen pt-20 text-dark py-8 sm:py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold pt-4 md:pt-6 lg:pt-10">
            Equipements disponibles pour la recherche 
          </h1>
        </div>
      </header>

      <div className="container mx-auto py-5">
        <div className="flex justify-center space-x-5 border-b">
          <button
            className={`py-2 px-4 text-sm lg:text-base ${
              activeTab === "responsables"
                ? "border-b-4 border-darkGreen font-bold text-darkGreen"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("responsables")}
          >
            Responsables
          </button>
          <button
            className={`py-2 px-4 text-sm lg:text-base ${
              activeTab === "oldersStudent"
                ? "border-b-4 border-darkGreen font-bold text-darkGreen"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("oldersStudent")}
          >
            Anciens Étudiants
          </button>
          <button
            className={`py-2 px-4 text-sm lg:text-base ${
              activeTab === "collaborateurs"
                ? "border-b-4 border-darkGreen font-bold text-darkGreen"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("collaborateurs")}
          >
            Collaborateurs
          </button>
        </div>
      </div>

      <div className="container mx-auto py-10 px-5">
        {/* RESPONSABLES */}
        {activeTab === "responsables" && (
          <div>
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-darkGreen mb-5">
              Responsables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Exemple Responsable 1 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/me.jpg"
                  alt="Directeur du laboratoire"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Dr. Dingammadji Esperance
                </h3>
                <p className="text-sm text-gray-600">Directrice Générale</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Spécialiste en chimie analytique avec plus de 20 ans
                  d'expérience dans la recherche scientifique.
                </p>
              </div>
              {/* Exemple Responsable 2 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/director2.jpg"
                  alt="Responsable technique"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Dr. Alain Dubois
                </h3>
                <p className="text-sm text-gray-600">Responsable Technique</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Expert en chimie organique, responsable des projets de
                  recherche innovants.
                </p>
              </div>
              {/* Exemple Responsable 3 */}
              <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                <img
                  src="/images/hamed.jpg"
                  alt="Responsable des normes"
                  className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Dr. Hamed Kamal
                </h3>
                <p className="text-sm text-gray-600">Responsable des Normes</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Assure la conformité aux normes environnementales et
                  sanitaires.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-darkGreen mb-5">
                Staff Technique
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Exemple Membre Staff 1 */}
                <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                  <img
                    src="/images/technician1.jpg"
                    alt="Technicien du laboratoire"
                    className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Jean Dupont
                  </h3>
                  <p className="text-sm text-gray-600">
                    Technicien en Chimie Analytique
                  </p>
                  <p className="mt-3 text-gray-600 text-sm">
                    Manipule les équipements de pointe pour réaliser des analyses
                    complexes.
                  </p>
                </div>
                {/* Exemple Membre Staff 2 */}
                <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                  <img
                    src="/images/technician2.jpg"
                    alt="Technicien du laboratoire"
                    className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Claire Lefevre
                  </h3>
                  <p className="text-sm text-gray-600">Assistante de Recherche</p>
                  <p className="mt-3 text-gray-600 text-sm">
                    Soutient les chercheurs dans la mise en œuvre des protocoles
                    expérimentaux.
                  </p>
                </div>
                {/* Exemple Membre Staff 3 */}
                <div className="bg-white shadow-lg rounded-lg p-5 text-center">
                  <img
                    src="/images/technician3.jpg"
                    alt="Technicien du laboratoire"
                    className="rounded-full w-32 h-32 mx-auto mb-4 border-2 border-darkGreen object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Paul Moreau
                  </h3>
                  <p className="text-sm text-gray-600">
                    Technicien en Chimie Organique
                  </p>
                  <p className="mt-3 text-gray-600 text-sm">
                    Expert en préparation des solutions chimiques pour les
                    expériences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "oldersStudent" && (
          <div className="px-4 md:px-8 lg:px-16 py-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-darkGreen mb-6 text-center">
              🎓 Nos Anciens Étudiants
            </h2>

            {/* FILTRE PAR ANNÉE */}
            <div className="mb-6 max-w-xs mx-auto">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Filtrer par année :
              </label>
              <select
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-darkGreen"
                value={selectedGuestDate}
                onChange={(e) => setSelectedGuestDate(e.target.value)}
              >
                <option value="">Toutes les années</option>
                {Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index).map(
                  (year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  )
                )}
              </select>
            </div>

            {/* LISTE DES ÉTUDIANTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudents.map((student) => {
                const isExpanded = expandedDescriptions[student.id];
                const description = student.description || '';
                const shouldTruncate = description.length > 150 && !isExpanded;
                const displayText = shouldTruncate ? `${description.substring(0, 150)}...` : description;

                return (
                  <div
                    key={student.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={
                          student.photo
                            ? `http://127.0.0.1:8000/storage/${student.photo}`
                            : "/images/me.jpg"
                        }
                        alt={`${student.nom} ${student.prenom}`}
                        className="w-16 h-16 rounded-full object-cover border border-gray-300"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-darkGreen">
                          {student.nom} {student.prenom}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Année d'étude : {student.annee_etude}
                        </p>
                      </div>
                    </div>

                    <div className="text-sm text-gray-700 space-y-1 flex-grow">
                      <p><strong>Email :</strong> {student.email}</p>
                      <p><strong>Domaine de recherche :</strong> {student.domaine_recherche}</p>
                      <p><strong>Nombre de publications :</strong> {student.nombre_publications}</p>
                      {student.position && <p><strong>Position actuelle :</strong> {student.position}</p>}
                      {student.bourse && <p><strong>Bourse :</strong> {student.bourse}</p>}
                      {description && (
                        <div className="mt-3 text-gray-600 border-t border-gray-200 pt-3 text-justify leading-relaxed">
                          <span className="block font-semibold text-gray-800 mb-1">Description :</span>
                          {displayText}
                          {description.length > 150 && (
                            <button
                              onClick={() => toggleDescription(student.id)}
                              className="text-darkGreen text-sm font-medium mt-2 hover:underline focus:outline-none"
                            >
                              {isExpanded ? 'Voir moins' : 'Voir plus'}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredStudents.length === 0 && (
              <p className="text-center text-gray-500 mt-10">
                Aucun ancien étudiant trouvé pour cette année.
              </p>
            )}
          </div>
        )}

        {/* COLLABORATEURS */}
        {activeTab === "collaborateurs" && (
          <div>
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-darkGreen mb-8">
              Nos Collaborateurs
            </h2>

            {/* Collaborateurs Nationaux */}
            <div className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-darkGreen mb-6 border-b-2 border-gray-200 pb-2">
                Collaborateurs Nationaux
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collaborateursNationaux.slice(0, visibleNational).map((collab) => (
                  <div
                    key={collab.id}
                    className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4"
                  >
                    <div className="flex items-center mb-4">
                      <div className="">
                        <h4 className="text-lg font-semibold text-gray-800">
                          {collab.nom}
                        </h4>
                        <p className="text-sm text-darkGreen font-medium">
                          {collab.poste}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Institution:</span>{" "}
                        {collab.institution}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Domaine:</span>{" "}
                        {collab.domaine}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {visibleNational < collaborateursNationaux.length && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() =>
                      setVisibleNational((prev) => prev + 6)
                    }
                    className="px-6 py-2 bg-darkGreen text-white rounded-full hover:bg-green-700 transition"
                  >
                    Voir plus (Nationaux)
                  </button>
                </div>
              )}
            </div>

            {/* Collaborateurs Internationaux */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-darkGreen mb-6 border-b-2 border-gray-200 pb-2">
                Collaborateurs Internationaux
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collaborateursInternationaux
                  .slice(0, visibleInternational)
                  .map((collab) => (
                    <div
                      key={collab.id}
                      className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4"
                    >
                      <div className="flex items-center mb-4">
                        <div className="">
                          <h4 className="text-lg font-semibold text-gray-800">
                            {collab.nom}
                          </h4>
                          <p className="text-sm text-blue-600 font-medium">
                            {collab.poste}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Institution:</span>{" "}
                          {collab.institution}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Pays:</span>{" "}
                          {collab.pays}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
              {visibleInternational <
                collaborateursInternationaux.length && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() =>
                      setVisibleInternational((prev) => prev + 6)
                    }
                    className="px-6 py-2 bg-darkGreen text-white rounded-full hover:bg-green-700 transition"
                  >
                    Voir plus (Internationaux)
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Team;