import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-links">
        <a
          href="https://github.com/Aadharbindal"
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer-link"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/aadhar-bindal-71222327b"
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer-link"
        >
          LinkedIn
        </a>
        <a href="mailto:aadharbindal@gmail.com" className="site-footer-link">
          Email
        </a>
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Aadhar_Bindal_Resume.pdf" className="site-footer-link">
          Résumé
        </a>
      </div>
      <p className="site-footer-note">
        © {new Date().getFullYear()} Aadhar Bindal · Jaipur, India
      </p>
    </footer>
  );
};

export default Footer;
