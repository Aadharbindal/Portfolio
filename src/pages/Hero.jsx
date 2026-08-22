import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profilePicture from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="page-section section-hero">
      <div className="hero-content">
        <div className="profile-picture-container profile-picture-outer">
          <motion.img
            src={profilePicture}
            alt="Aadhar Bindal"
            className="profile-picture"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        <span className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Open to internships and full-time roles
        </span>

        <h1 className="hero-title">
          I'm <span className="hero-name-gradient">Aadhar Bindal</span>
        </h1>

        <p className="hero-tagline">
          Full-stack developer and systems engineer, based in Jaipur, India.
        </p>

        <p className="hero-description">
          B.Tech Information Technology student at JECRC. I work across full-stack web
          development with the MERN stack and low-level systems work in C++ and Linux — most
          recently building a QEMU-based CXL emulation environment at Hewlett Packard Enterprise.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View my work</Link>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Aadhar_Bindal_Resume.pdf"
            className="btn btn-secondary"
          >
            Download résumé
          </a>
        </div>

        <div className="hero-links">
          <a
            href="https://github.com/Aadharbindal"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            GitHub
          </a>
          <span className="hero-link-divider">·</span>
          <a
            href="https://linkedin.com/in/aadhar-bindal-71222327b"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            LinkedIn
          </a>
          <span className="hero-link-divider">·</span>
          <a href="mailto:aadharbindal@gmail.com" className="hero-link">
            aadharbindal@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
