import React from 'react';
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
  return (
    <div className="page-section section-certificates">
      <div className="certificates-content">
        <h1 className="certificates-title">CERTIFICATES</h1>
        <p className="certificates-description">
          Certifications completed alongside my degree.
        </p>

        <div className="certificates-grid">
          {certificatesList.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <h3 className="certificate-name">{cert.title}</h3>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary certificate-view-button"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
