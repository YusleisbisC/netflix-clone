import React from 'react';
import './MainSection.css';
import { Navbar } from '../Navbar/Navbar';
import { WatchOnDevicesSection } from './WatchOnDevicesSection';
import { FAQSection } from './FAQSection';
import Footer from './Footer';
import { WatchAnywhereSection } from './WatchAnywhereSection';
import { OfflineDownloadSection } from './OfflineDownloadSection';

export function Home() {
  return (
    <div className="home">
      {/* Barra de navegación */}
      <div className="home__navbar">
        <Navbar />
      </div>
      <div>
        {/* Sección principal */}
        <div className="home__main">
          <div className="home__text">
            <h1>Filmes, séries e muito mais, sem limites</h1>
            <h2>Assista onde quiser. Cancele quando quiser.</h2>
            <p>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            <div className="home__input">
              <input type="email" placeholder="Endereço de e-mail" />
              {/* Agrega un botón para continuar */}
              <button className="home__login-button">Vamos lá</button>
            </div>
          </div>
        </div>
      </div>

      <div className="watch-on-devices">
        <WatchOnDevicesSection />
      </div>
      <div>
        <WatchAnywhereSection />
      </div>

      <div>
        <OfflineDownloadSection />
      </div>
      {/* Sección de Preguntas Frecuentes */}
      <div>
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
