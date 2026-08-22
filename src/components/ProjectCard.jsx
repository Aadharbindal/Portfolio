import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ slug, title, description, tech, projectUrl, liveUrl, imageUrl }) => {
  return (
    <div className="project-card">
      {imageUrl && <img src={imageUrl} alt={title} className="project-card-image" />}

      <div className="project-card-body">
        <h3>{title}</h3>
        {description && <p className="project-card-description">{description}</p>}
      </div>

      {/* Tech and actions sit in a footer so every card lines them up at the
          same height, regardless of how long its description runs. */}
      <div className="project-card-footer">
        {tech && tech.length > 0 && (
          <div className="project-card-tech">
            {tech.map((t, i) => (
              <span key={i} className="project-card-tag">{t}</span>
            ))}
          </div>
        )}

        <div className="project-card-actions">
          {slug && (
            <Link to={`/projects/${slug}`} className="project-card-link">
              Case study
            </Link>
          )}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link project-card-link-secondary"
            >
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link project-card-link-secondary"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
