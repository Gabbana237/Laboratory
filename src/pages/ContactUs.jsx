import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="bg-lightGray min-h-screen flex flex-col  py-10">
      <Header />

      {/* Section des cartes (en haut) */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-10 lg:grid-cols-4 mt-14 gap-4 w-full max-w-6xl mb-10">
        {/* Carte: Adresse */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-blue-500 text-3xl mb-3">📍</div>
          <h3 className="text-md font-bold mb-2">NOTRE SIÈGE PRINCIPAL</h3>
          <p className="text-sm">Universite de dschang</p>
          <p className="text-sm">Faculte des sciences</p>
        </div>

        {/* Carte: Téléphone */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-blue-500 text-3xl mb-3">📞</div>
          <h3 className="text-md font-bold mb-2">NUMÉRO DE TÉLÉPHONE</h3>
          <p className="text-sm">691224241</p>
          <p className="text-sm">672116339(Numéro gratuit)</p>
        </div>

        {/* Carte: Fax */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-blue-500 text-3xl mb-3">📠</div>
          <h3 className="text-md font-bold mb-2">FAX</h3>
          <p className="text-sm">BP 67</p>
        </div>

        {/* Carte: Email */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <div className="text-blue-500 text-3xl mb-3">✉️</div>
          <h3 className="text-md font-bold mb-2">EMAIL</h3>
          <p className="text-sm">contact@theme.com</p>
        </div>
      </div>

      {/* Section formulaire et carte Google (côte à côte) */}
      <div className="flex flex-col mx-10 lg:flex-row gap-6 w-full max-w-6xl">
  {/* Section formulaire (à gauche) */}
  <div className="bg-white p-8 rounded-lg shadow-[0_4px_6px_-1px_rgba(34,139,34,0.6)] w-full lg:w-1/2">
    <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Contactez-nous</h2>
    <form>
      <input
        type="text"
        placeholder="Entrez votre nom"
        className="w-full p-2 text-sm mb-3 border border-gray-300 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-darkGreen"
      />
      <input
        type="email"
        placeholder="Entrez une adresse e-mail valide"
        className="w-full p-2 text-sm mb-3 border border-gray-300 rounded focus:outline-none focus:border-transparent focus:ring-2 focus:ring-darkGreen"
      />
      <textarea
        placeholder="Votre message"
        className="w-full p-2 text-sm mb-3 border border-gray-300 rounded h-24 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-darkGreen"
      ></textarea>
      <button className="bg-darkGreen text-white px-4 py-2 rounded hover:bg-green-700 w-full">
        ENVOYER
      </button>
    </form>
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
      ></iframe>
    </div>
  </div>
</div>



      {/* Section des réseaux sociaux */}
      <div className="mt-10 text-center text-dark">
        <h3 className="text-lg font-bold mb-4">Suivez-nous sur</h3>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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
