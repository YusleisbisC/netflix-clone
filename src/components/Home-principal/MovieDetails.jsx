import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MovieDetails.css';
import Footer from './Footer';

export function MovieDetails() {
  const { id } = useParams(); // Obtenemos el ID de la película desde la URL
  const [movieDetails, setMovieDetails] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Realiza una solicitud a la API de TMDb para obtener los detalles de la película con el ID proporcionado
    // Utiliza la URL correcta para obtener los detalles de la película desde la API de TMDb
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ae90cf9995bf92bdcaa34cffdef7c434`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  // Función para cargar y reproducir la película
  const playMovie = () => {
    // Reemplaza la URL con la URL real del recurso de video proporcionado por TMDb
    if (movieDetails) {
      const videoUrl = `https://soqzlgevoq9t.lions-vidcdn.com/hls2/01/00535/usd8amhfp4al_o/index-v1-a1.m3u8?t=W_KyN5OaZfzKBAVsrDUzqsCUQDOxrt837zMhqzc60k0&s=1695503089&e=129600&f=2675279&srv=a1pxfexfyi99&i=0.4&sp=1500&p1=a1pxfexfyi99&p2=a1pxfexfyi99&asn=27699`; // Reemplaza con la URL correcta
      videoRef.current.src = videoUrl;
      videoRef.current.play();
    }
  };

  return (
    <div className="movie-details">
      <Link to="/">Volver a la lista de películas</Link>
      {movieDetails && (
        <div className="movie-details-content">
          <h2>{movieDetails.title}</h2>
          <p>Año: {movieDetails.release_date}</p>
          <p>Géneros: {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
          <p>Sinopsis: {movieDetails.overview}</p>
          <button onClick={playMovie}>Reproducir</button>
          <video ref={videoRef} controls>
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
        
      )}
      <div>
        <Footer/>
      </div>
    </div>
  );
}
