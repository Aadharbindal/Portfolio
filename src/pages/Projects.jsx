import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../App.css'; // Import App.css for animations
import movie from '../assets/movie.png'
const Projects = () => {
  const projects = [
    {
      title: "Data Analytical Platform",
      description: "An end-to-end analytics workspace for exploring and visualising datasets, built with TypeScript and Next.js.",
      projectUrl: "https://github.com/Aadharbindal/Data_Analytical_Platform",
      imageUrl: movie
    },
    {
      title: "AI Rockfall Prediction System",
      description: "A risk-prediction system for monitoring open-pit mine slopes, combining sensor data with a machine learning model.",
      projectUrl: "https://github.com/Aadharbindal/AI-Rockfall-Prediction-System",
      imageUrl: movie
    },
    {
      title: "House Price Prediction",
      description: "Property valuation across 20 Indian cities using a Gradient Boosting model at R² 0.948, served through a Node.js REST API.",
      projectUrl: "https://github.com/Aadharbindal/House_Price_Prediction",
      imageUrl: movie
    },
    {
      title: "Industrial Control Dashboard",
      description: "A dense, real-time operator interface for industrial control systems, built with React 19 and Vite.",
      projectUrl: "https://github.com/Aadharbindal/industrial-control-dashboard",
      imageUrl: movie
    },
  ];

  return (
    <div
      className="page-section section-projects"
    >
      <h1 className="projects-title">MY PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card-animated" 
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              projectUrl={project.projectUrl}
              imageUrl={project.imageUrl} /* Pass the imageUrl prop */
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
