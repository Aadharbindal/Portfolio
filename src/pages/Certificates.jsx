import React, { useState } from 'react';
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

const Frame = ({ cert, index, clone }) => (
  <article className="film-frame" {...(clone ? { 'aria-hidden': 'true' } : {})}>
    <div className="film-frame-header">
      <span className="film-frame-index">{String(index + 1).padStart(2, '0')}</span>
      <span className="film-frame-kind">CERTIFICATE</span>
    </div>

    <h3 className="film-frame-title">{cert.title}</h3>

    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className="film-frame-link"
      tabIndex={clone ? -1 : undefined}
    >
      View certificate
    </a>
  </article>
);

const Certificates = () => {
  const [paused, setPaused] = useState(false);

  return (
    <div className="page-section section-certificates">
      <div className="certificates-content">
        <h1 className="certificates-title">CERTIFICATES</h1>
        <p className="certificates-description">
          Certifications completed alongside my degree.
        </p>

        <div className="filmstrip">
          <div className="filmstrip-perforations filmstrip-perforations-top" aria-hidden="true" />

          <div className="filmstrip-viewport">
            {/* The reel holds two identical runs of frames. Sliding it by
                exactly half its width lands the copy where the original was,
                so the loop never shows a seam. */}
            <div className={`filmstrip-reel${paused ? ' is-paused' : ''}`}>
              <div className="filmstrip-run">
                {certificatesList.map((cert, i) => (
                  <Frame cert={cert} index={i} key={cert.id} />
                ))}
              </div>
              <div className="filmstrip-run">
                {certificatesList.map((cert, i) => (
                  <Frame cert={cert} index={i} key={`clone-${cert.id}`} clone />
                ))}
              </div>
            </div>
          </div>

          <div className="filmstrip-perforations filmstrip-perforations-bottom" aria-hidden="true" />
        </div>

        <div className="filmstrip-controls">
          <button
            type="button"
            className="filmstrip-button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
          >
            {paused ? '▶' : '❚❚'}
          </button>
          <span className="filmstrip-counter">
            {certificatesList.length} frames · {paused ? 'paused' : 'rolling'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
