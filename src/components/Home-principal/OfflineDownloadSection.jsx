import React from 'react';
import './OfflineDownloadSection.css';

export function OfflineDownloadSection() {
  return (
    <div className="offline-download">
      <h2>Baixe séries para assistir offline</h2>
      <p>Disponíveis somente em planos sem anúncios.</p>
      <div className="animation-container">
        <img
          alt=""
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          data-uia="nmhp-card-animation-asset-image"
          className="download-image"
        />
        <div
          data-uia="nmhp-card-animation-asset-motion"
          className="download-animation"
        >
          <div className="boxshot">
            <img
              data-uia="nmhp-card-animation-asset-animation"
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              className="boxshot-image"
            />
          </div>
          <div className="download-info">
            <div className="show-title" id="" data-uia="">
              Stranger Things
            </div>
            <div className="download-status" id="" data-uia="">
              Download em andamento...
            </div>
          </div>
          <div
            data-uia="nmhp-card-animation-asset-custom"
            aria-hidden="true"
            className="custom-element"
          ></div>
        </div>
      </div>
    </div>
  );
}
