import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, projectUrl, imageUrl }) => {
  return (
    <div
      className="project-card"
    >
      {imageUrl && <img src={imageUrl} alt={title} className="project-card-image" />}
      <h3>{title}</h3>
      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
