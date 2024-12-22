import React from 'react';
import './App.css'; // Fichier de styles global, optionnel
import Header from './components/Header.jsx'; // Assurez-vous que ce chemin est correct
import LabOverview from './components/Home/LabOverview.jsx';
import ResearchDomains from './components/Home/ResearchDomains.jsx';
import Carousel from './components/Home/Carousel.jsx';
import Footer from './components/Footer';
function App() {
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
}


export default App;
