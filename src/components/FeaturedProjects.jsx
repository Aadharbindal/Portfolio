import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const FeaturedProjects = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="page-section section-featured">
      <h1 className="projects-title">FEATURED WORK</h1>
      <p className="featured-description">
        A few things I've built recently — from systems-level emulation to full-stack analytics.
      </p>
      <div className="projects-grid">
        {featured.map((project, index) => (
          <div key={index} className="project-card-animated">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <Link to="/projects" className="btn btn-secondary featured-cta">
        View all projects
      </Link>
    </div>
  );
};

export default FeaturedProjects;
