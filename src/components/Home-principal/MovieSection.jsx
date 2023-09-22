import React, { useState, useEffect } from 'react';
import './MovieSection.css';
import { Navbar } from '../Navbar/Navbar';

export function MovieSection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Aquí realizas la solicitud a la API de TMDb y actualizas el estado "movies"
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
          </div>
        ))}
      </div>
    </div>
  );
}


