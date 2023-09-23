import React from 'react';
import './WatchOnDevicesSection.css';

export function WatchOnDevicesSection() {
  return (
    
    <div >
      <div className='nombre'>
      <h2>Aproveite na TV</h2>
      <p>
        Assista em Smart TVs, PlayStation, Xbox, Chromecast, 
        Apple TV, aparelhos de Blu-ray e outros dispositivos.
      </p>
      </div>
      
      <div className="watch-on-devices">
        <img
          alt=""
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          data-uia="nmhp-card-animation-asset-image"
          className="default-ltr-cache-1d3w5wq"
        />
        <video
          data-uia="nmhp-card-animation-asset-video"
          autoPlay
          playsInline
          muted
          loop
          className="video-element"
        >
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
