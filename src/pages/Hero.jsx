import React from 'react';
import { motion } from 'framer-motion';
import profilePicture from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="page-section section-hero">
      <div className="hero-content">
        <div className="profile-picture-container profile-picture-outer">
          <motion.img
            src={profilePicture}
            alt="Aadhar bindal"
            className="profile-picture"
            initial={{ z: -200, rotate: 0, opacity: 0, scale:0 }}
            animate={{ z: 0, rotate: 0, opacity: 1, scale:1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </div>
        <h1 className="hero-title">
          I'm <span className="hero-name-gradient">Aadhar Bindal</span>, frontend
          <br />developer based in India.
        </h1>
        <p className="hero-description">
          I am a frontend developer from Rajasthan, India.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Connect with me</button>
          <a 
            href="/resume.pdf" 
            download="Aadhar_Bindal_Resume.pdf"
            className="btn btn-secondary"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
