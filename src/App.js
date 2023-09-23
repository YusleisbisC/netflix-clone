import React from 'react';
import Rutas from './Rutas';
import { BrowserRouter as Router } from 'react-router-dom';
// Importa el contexto de autenticación
import './App.css';
import { AuthProvider } from './components/Usuario/AuthContext';





function App() {
  return (
    <div className="App">
      
        {/* Envuelve tu aplicación con el AuthProvider */}
        <AuthProvider>
          {/* Tus componentes y rutas van aquí */}
          <Rutas />
        </AuthProvider>
      
    </div>
  );
}

export default App;
