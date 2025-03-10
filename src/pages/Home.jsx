import React from 'react';
import '../index'; // Fichier de styles global, optionnel
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Home/Carousel';
import LabOverview from '../components/Home/LabOverview';
import ResearchDomains from '../components/Home/ResearchDomains';

const Home = () => {
    return (
        <div className="bg-gray-100">
            {/* Balises SEO */}
            <title>Accueil | Laboratoire de Chimie URCHINGE</title>
            <meta
                name="description"
                content="Bienvenue sur le site du laboratoire de chimie URCHINGE. Découvrez nos domaines de recherche, nos équipements de pointe et notre équipe d'experts en chimie analytique et organique."
            />
            <meta
                name="keywords"
                content="laboratoire de chimie, URCHINGE, recherche scientifique, chimie analytique, chimie organique, équipements de laboratoire"
            />
            <meta name="author" content="Laboratoire de Chimie URCHINGE" />
            <meta name="robots" content="index, follow" />

            <Header />
            <Carousel />
            <div className="flex items-center">
                <LabOverview />
            </div>
            <section>
                <div className='mt-12 pb-10 sm:mt-auto'>
                    <ResearchDomains />
                </div>
            </section>
            <div className='pt-10'>
                <Footer />
            </div>
        </div>
    );
};

export default Home;