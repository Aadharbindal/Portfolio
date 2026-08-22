import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import projects from '../data/projects';
import '../App.css';

const Projects = () => {
  return (
    <div className="page-section section-projects">
      <h1 className="projects-title">MY PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={index} className="project-card-animated" delay={index * 0.08}>
            <ProjectCard {...project} description={project.summary} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
