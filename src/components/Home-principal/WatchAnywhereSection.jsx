import React from 'react';
import './WatchAnywhereSection.css';

export function WatchAnywhereSection() {
  return (
    <div className="watch-anywhere">
      <h2>Assista onde quiser</h2>
      <p>Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.</p>
      {/* Puedes agregar aquí los íconos de dispositivos, por ejemplo */}
      <div className="device-icons">
        <img src="celular-icon.png" alt="Celular" />
        <img src="tablet-icon.png" alt="Tablet" />
        <img src="laptop-icon.png" alt="Laptop" />
        <img src="tv-icon.png" alt="TV" />
      </div>
    </div>
  );
}


