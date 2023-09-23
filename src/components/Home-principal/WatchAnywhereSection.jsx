import React from 'react';
import './WatchAnywhereSection.css';

export function WatchAnywhereSection() {
  return (
    <div className="watch-anywhere">
      <div className="device-container">
        <img
          alt=""
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          data-uia="nmhp-card-animation-asset-image"
          className="device-image"
        />
        <div className="device-animation">
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoPlay
            playsInline
            muted
            loop
            className="device-video"
          >
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
