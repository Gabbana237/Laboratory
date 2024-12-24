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
        <Header />
        <Carousel/>
        <div className="flex items-center">
         <LabOverview/>
        </div>
        <section>
        <div className='mt-12 pb-10 flex items-center sm:mt-auto'>
          <ResearchDomains/>
        </div>
        </section>
       
        <div className='pt-10 '>
        <Footer />
        </div>
        
      </div>
    );
};

export default Home;