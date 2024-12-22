import React from 'react';
import logo from './logo.svg'; // Votre logo si utilisé ailleurs
import './App.css'; // Fichier de styles global, optionnel
import Header from './components/Header.jsx'; // Assurez-vous que ce chemin est correct

function App() {
  return (
    <div className="bg-gray-100">
      {/* Header placé en tête */}
      <Header />
      
      {/* Contenu principal (exemple) */}
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-xl font-bold text-gray-800">Welcome to HHU</h1>
      </div>
    </div>
  );
}

export default App;
