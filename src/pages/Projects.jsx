import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import '../App.css';

const Projects = () => {
  return (
    <div className="page-section section-projects">
      <h1 className="projects-title">MY PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card-animated">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
