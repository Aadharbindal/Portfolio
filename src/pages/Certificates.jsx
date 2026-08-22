import React, { useRef } from 'react';
import './Certificates.css';

const certificatesList = [
  {
    id: 1,
    title: 'Cloud Infrastructure AI Foundation Associate',
    url: 'https://drive.google.com/file/d/11yrqwXhw90lbkP2gr2rDPrtx2f53uLTj/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Advanced Computer Networks',
    url: 'https://drive.google.com/file/d/14mja9sudu5DQFulDrFXn_f8j1ldVKFgZ/view?usp=sharing',
  },
  {
    id: 3,
    title: 'Web-Based Technologies and Multimedia Applications',
    url: 'https://drive.google.com/file/d/1QXV732gTqzMggub-0Oq_CaXNxM6ivZzR/view?usp=sharing',
  },
  {
    id: 4,
    title: 'Fundamentals of Investment',
    url: 'https://drive.google.com/file/d/1lrTNVMM2X70PqgouxpNebcqtRhgPZ1Cz/view?usp=sharing',
  },
];

const Certificates = () => {
  const trackRef = useRef(null);

  const scrollBy = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const frame = track.querySelector('.film-frame');
    const step = frame ? frame.getBoundingClientRect().width + 24 : 300;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  return (
    <div className="page-section section-certificates">
      <div className="certificates-content">
        <h1 className="certificates-title">CERTIFICATES</h1>
        <p className="certificates-description">
          Certifications completed alongside my degree.
        </p>

        <div className="filmstrip">
          <div className="filmstrip-perforations filmstrip-perforations-top" aria-hidden="true" />

          <div className="filmstrip-track" ref={trackRef}>
            {certificatesList.map((cert, i) => (
              <article className="film-frame" key={cert.id}>
                <div className="film-frame-header">
                  <span className="film-frame-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="film-frame-kind">CERTIFICATE</span>
                </div>

                <h3 className="film-frame-title">{cert.title}</h3>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="film-frame-link"
                >
                  View certificate
                </a>
              </article>
            ))}
          </div>

          <div className="filmstrip-perforations filmstrip-perforations-bottom" aria-hidden="true" />
        </div>

        <div className="filmstrip-controls">
          <button
            type="button"
            className="filmstrip-button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous certificate"
          >
            ←
          </button>
          <span className="filmstrip-counter">{certificatesList.length} frames</span>
          <button
            type="button"
            className="filmstrip-button"
            onClick={() => scrollBy(1)}
            aria-label="Next certificate"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
