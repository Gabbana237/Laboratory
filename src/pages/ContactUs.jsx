import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // Can be "loading", "success", or "error"
  const [errorMessage, setErrorMessage] = useState(""); // Store specific error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(""); // Clear previous error messages

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success: Reset form and show success message
        setStatus("success");
        setFormData({ nom: "", email: "", message: "" });
      } else {
        // Handle validation or server errors
        setStatus("error");
        if (data.errors) {
          // If the API returns validation errors
          setErrorMessage(Object.values(data.errors).join(", "));
        } else {
          setErrorMessage(data.message || "Erreur lors de l'envoi du message.");
        }
      }
    } catch (error) {
      // Handle network or unexpected errors
      setStatus("error");
      setErrorMessage("Erreur réseau. Veuillez réessayer plus tard.");
      console.error("Erreur lors de l'envoi :", error);
    }
  };

  return (
    <div className="bg-lightGray flex flex-col">
      {/* Balises SEO */}
      <title>Contactez-nous | Laboratoire de Chimie URCHINGE</title>
      <meta
        name="description"
        content="Contactez le laboratoire de chimie URCHINGE pour toute question ou demande d'information. Nous sommes situés à l'Université de Dschang, Cameroun."
      />
      <meta
        name="keywords"
        content="contact, laboratoire de chimie, URCHINGE, Université de Dschang, Cameroun, formulaire de contact"
      />
      <meta name="author" content="Laboratoire de Chimie URCHINGE" />
      <meta name="robots" content="index, follow" />

      <Header />

      {/* Section des cartes (en haut) */}
      <div className="bg-gradient-to-r from-darkGreen pt-20 text-dark sm:py-16 grid grid-cols-1 py-12 md:py-16 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-3 md:px-4 lg:px-8 mb-10">
        {/* Carte: Adresse */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center mt-8 md:mt-10 lg:mt-16">
          <div className="text-blue-500 text-3xl mb-3">📍</div>
          <h3 className="text-md font-bold mb-2">NOTRE SIÈGE PRINCIPAL</h3>
          <p className="text-sm">Faculté des Sciences, Département de Chimie </p>
          <p className="text-sm">Porte <span className="font-bold text-darkGreen">417</span>  Campus C</p>
        </div>

        {/* Carte: Téléphone */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center md:mt-10 lg:mt-16">
          <div className="text-blue-500 text-3xl mb-3">📞</div>
          <h3 className="text-md font-bold mb-2">NUMÉRO DE TÉLÉPHONE</h3>
          <p className="text-sm">Prof. TONLE KENFACK Ignas</p>
          <p className="text-sm"> Tel : 696 141 545</p>
        </div>

        {/* Carte: Fax */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center md:mt-10 lg:mt-16">
          <div className="text-blue-500 text-3xl mb-3">📠</div>
          <h3 className="text-md font-bold mb-2">FAX</h3>
          <p className="text-sm">BP 67</p>
        </div>

        {/* Carte: Email */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center md:mt-10 lg:mt-16">
          <div className="text-blue-500 text-3xl mb-3">✉️</div>
          <h3 className="text-md font-bold mb-2">EMAIL</h3>
          <p className="text-sm">ignas.tonle@univ-dschang.org ou itonle@yahoo.com</p>
        </div>
      </div>

      {/* Section formulaire et carte Google (côte à côte) */}
      <div className="flex flex-col lg:flex-row gap-6 w-full px-3 md:px-4 lg:px-8">
        {/* Section formulaire (à gauche) */}
        <div className="bg-white p-8 rounded-lg shadow-[0_4px_6px_-1px_rgba(34,139,34,0.6)] w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-darkGreen mb-4 text-center">Contactez-nous</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              placeholder="Entrez votre nom"
              className="w-full p-2 text-sm mb-3 border rounded focus:outline-none"
              value={formData.nom}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Entrez une adresse e-mail valide"
              className="w-full p-2 text-sm mb-3 border rounded focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              className="w-full p-2 text-sm mb-3 border rounded h-24 focus:outline-none"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-darkGreen text-white px-4 py-2 rounded hover:bg-green-700 w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Envoi en cours..." : "ENVOYER"}
            </button>
          </form>
          {status === "success" && <p className="text-green-500 mt-3">Message envoyé avec succès !</p>}
          {status === "error" && <p className="text-red-500 mt-3">{errorMessage}</p>}
        </div>

        {/* Section carte Google (à droite) */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-lg font-bold text-center mb-4">Trouvez-nous sur la carte</h3>
          <div className="w-full h-auto rounded-lg overflow-hidden shadow-[0_4px_6px_-1px_rgba(34,139,34,0.6)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10001.8654484972083!2d10.0534!3d5.444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10f4445c5b2b7e5%3A0x316ad7db229540ff!2sUniversit%C3%A9+de+Dschang%2C+Cameroon!5e0!3m2!1sen!2sus!4v1678145170421!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen=""
              loading="lazy"
              title="Carte Google de l'Université de Dschang"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Section des réseaux sociaux */}
      <div className="mt-10 text-center text-dark">
        <h3 className="text-lg font-bold mb-4">Suivez-nous sur</h3>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-400" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-700" />
          </a>
        </div>
      </div>
      <div className='pt-10 '>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;