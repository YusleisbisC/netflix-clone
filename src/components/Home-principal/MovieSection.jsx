import React, { useState, useEffect, useRef } from 'react';
import './MovieSection.css';
import { Navbar } from '../Navbar/Navbar';
import { Link } from 'react-router-dom'; // Importa Link desde React Router


export function MovieSection() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Realiza la solicitud a la API de TMDb y actualiza el estado "movies"
    // Asegúrate de utilizar tu clave de API de TMDb
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=ae90cf9995bf92bdcaa34cffdef7c434')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="movie-section">
      <Navbar/>
      <h2>Películas populares</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            {/* Utiliza Link para navegar a la página de detalles */}
            <Link to={`/movie/${movie.id}`}>Detalles</Link>
            <div>
            
            </div>
            
          </div>
         
        ))}
      </div>
     
    </div>
  );
}
