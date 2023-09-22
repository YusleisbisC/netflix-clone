// Rutas.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home-principal/home';
import { Login } from './components/Usuario/Login';
import { MovieSection } from './components/Home-principal/MovieSection';
 // Asegúrate de importar la página MovieSection

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movie-section" element={<MovieSection />} /> {/* Agregamos esta ruta */}
      {/* Otras rutas */}
    </Routes>
  );
}

export default Rutas;

