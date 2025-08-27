import React from 'react';
import ProjectCard from '../components/ProjectCard';
import '../App.css'; // Import App.css for animations
import movie from '../assets/movie.png'
const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      
      projectUrl: "https://github.com/AadharBindal/house_price_prediction",
      imageUrl: movie /* Placeholder image */
    },
    {
      title: "Hackathon Experience",
      
      projectUrl: "https://github.com/AadharBindal",
      imageUrl: movie /* Placeholder image */
    },
    {
      title: "Vyanjan",
     
      projectUrl: "https://github.com/AadharBindal/Vyanjan_Hackthon_Project",
      imageUrl: movie /* Placeholder image */
    },
    {
      title: "Experienced Google Cloud's Gen AI Exchange Program",
      projectUrl: "https://github.com/AadharBindal",
      imageUrl: movie /* Placeholder image */
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
