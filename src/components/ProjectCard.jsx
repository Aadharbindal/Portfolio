import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const MAX_TAGS = 3;

const ProjectCard = ({
  slug,
  title,
  description,
  tech = [],
  projectUrl,
  liveUrl,
  context,
  label,
}) => {
  const shown = tech.slice(0, MAX_TAGS);
  const overflow = tech.length - shown.length;

  return (
    <article className="project-card">
      <div className="project-card-body">
        {(label || context) && (
          <span className="project-card-context">{label || context}</span>
        )}

        <h3 className="project-card-title">
          {slug ? (
            // Stretched link: the whole card is clickable, while the buttons
            // below stay individually clickable via z-index.
            <Link to={`/projects/${slug}`} className="project-card-title-link">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>

        {description && <p className="project-card-description">{description}</p>}
      </div>

      {/* Tech and actions sit in a footer so every card in a row lines them
          up at the same height, whatever the description length. */}
      <div className="project-card-footer">
        {shown.length > 0 && (
          <div className="project-card-tech">
            {shown.map((t) => (
              <span key={t} className="project-card-tag">{t}</span>
            ))}
            {overflow > 0 && (
              <span className="project-card-tag project-card-tag-more">+{overflow}</span>
            )}
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
    </article>
  );
};

export default ProjectCard;
