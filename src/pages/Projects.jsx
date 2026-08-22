import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      title: "CXL Enablement with QEMU-based Emulation",
      description:
        "A QEMU-based virtualized CXL testbed that emulates Compute Express Link devices for system-level validation, letting experimental Linux kernel drivers be configured and tested without physical CXL hardware. Debugging and feature-verification workflows automated with Shell scripting.",
      tech: ["Linux", "QEMU", "Shell", "C"],
      projectUrl: "https://github.com/madhurkedia/CXL-Enablement-with-QEMU-Based-Emulation",
    },
    {
      title: "Numerate OS — Data Analytics Platform",
      description:
        "A full-stack analytics platform built with React and Python. Exposes REST APIs with user authentication, and queries uploaded datasets to generate on-demand insights.",
      tech: ["React", "TypeScript", "Python", "REST"],
      projectUrl: "https://github.com/Aadharbindal/Data_Analytical_Platform",
      liveUrl: "https://numerate-analytics.vercel.app",
    },
    {
      title: "Rockfall Prediction (AI/ML)",
      description:
        "An AI-driven rockfall prediction model trained on geological datasets, using data preprocessing and model optimisation to improve accuracy on high-risk events and enable proactive site safety.",
      tech: ["Python", "Machine Learning", "JavaScript"],
      projectUrl: "https://github.com/Aadharbindal/AI-Rockfall-Prediction-System",
    },
    {
      title: "House Price Prediction",
      description:
        "Property valuation across 20 Indian cities using a Gradient Boosting Regressor at an R² of 0.948, served through a Node.js and Express REST API with an interactive dashboard.",
      tech: ["Node.js", "Express", "scikit-learn"],
      projectUrl: "https://github.com/Aadharbindal/House_Price_Prediction",
      liveUrl: "https://house-price-prediction-w1j9.onrender.com",
    },
  ];

  return (
    <div className="page-section section-projects">
      <h1 className="projects-title">MY PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card-animated">
            <ProjectCard
              title={project.title}
              description={project.description}
              tech={project.tech}
              projectUrl={project.projectUrl}
              liveUrl={project.liveUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
