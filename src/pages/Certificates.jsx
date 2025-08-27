import React, { useState } from 'react';
import './Certificates.css';
import certificate from '../assets/cert.png'
import ct from '../assets/cert2.png'

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const certificatesList = [
    { id: 1,  issuer: 'Amazon Web Services', date: 'Dec 2023', imageUrl: certificate },
    { id: 2,  issuer: 'Google', date: 'Nov 2023', imageUrl: ct },
    { id: 3,  issuer: 'Microsoft', date: 'Oct 2023', imageUrl: certificate },
  ];
  // Duplicate the list to create a seamless loop
  const duplicatedCertificates = [...certificatesList, ...certificatesList];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <div className="page-section section-certificates-wrapper">
      <div className={`page-section section-certificates${modalOpen ? ' certificates-blur' : ''}`}>
        <div className="certificates-content">
          <h1 className="certificates-title">CERTIFICATES</h1>
          <p className="certificates-description">A collection of my certifications and achievements.</p>
          {/* Wrapper for the scrolling animation */}
          <div className="certificates-carousel-wrapper">
            <div
              className="certificates-carousel"
            >
              {duplicatedCertificates.map((cert, index) => (
                <div key={`${cert.id}-${index}`} className="certificate-card">
                  <img src={cert.imageUrl} className="certificate-image" />
                  <button className="btn btn-primary certificate-view-button" onClick={() => openModal(cert)}>
                    View Certificate
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="certificate-modal-overlay" onClick={closeModal}>
          <div className="certificate-modal" onClick={e => e.stopPropagation()}>
            <img src={selectedCert?.imageUrl} alt="Certificate" className="certificate-modal-image" style={{ filter: 'none' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
