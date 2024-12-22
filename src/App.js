import React from 'react';
import logo from './logo.svg'; // Votre logo si utilisé ailleurs
import './App.css'; // Fichier de styles global, optionnel
import Header from './components/Header.jsx'; // Assurez-vous que ce chemin est correct
import LabOverview from './components/Home/LabOverview.jsx';
import ResearchDomains from './components/Home/ResearchDomains.jsx';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="pt-4 flex items-center justify-center h-screen">
       <LabOverview/>
      </div>
      <div className='pt-10 flex items-center justify-center h-screen'>
        <ResearchDomains/>
      </div>
    </div>
  );
}


export default App;
