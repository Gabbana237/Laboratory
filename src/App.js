import React from 'react';
import './App.css'; // Fichier de styles global, optionnel
import Header from './components/Header.jsx'; // Assurez-vous que ce chemin est correct
import Carousel from './components/Home/Carousel.jsx';

function App() {
  return (
    <div className="bg-gray-100">
      {/* Header placé en tête */}
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
