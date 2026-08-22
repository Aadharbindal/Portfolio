import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tech, projectUrl, liveUrl, imageUrl }) => {
  return (
    <div className="project-card">
      {imageUrl && <img src={imageUrl} alt={title} className="project-card-image" />}
      <h3>{title}</h3>
      {description && <p className="project-card-description">{description}</p>}
      {tech && tech.length > 0 && (
        <div className="project-card-tech">
          {tech.map((t, i) => (
            <span key={i} className="project-card-tag">{t}</span>
          ))}
        </div>
      )}
      <div className="project-card-actions">
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            View Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link project-card-link-secondary"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
