import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProject } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="page-section section-detail">
        <div className="detail-content">
          <h1 className="detail-title">Project not found</h1>
          <p className="detail-lead">
            That project doesn't exist — it may have been renamed.
          </p>
          <Link to="/projects" className="btn btn-primary detail-back-cta">
            Back to all projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-section section-detail">
      <article className="detail-content">
        <Link to="/projects" className="detail-back">← All projects</Link>

        {project.context && <span className="detail-context">{project.context}</span>}

        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-lead">{project.summary}</p>

        <div className="detail-meta">
          {project.role && (
            <div className="detail-meta-item">
              <span className="detail-meta-label">Role</span>
              <span className="detail-meta-value">{project.role}</span>
            </div>
          )}
          {project.period && (
            <div className="detail-meta-item">
              <span className="detail-meta-label">Period</span>
              <span className="detail-meta-value">{project.period}</span>
            </div>
          )}
          <div className="detail-meta-item">
            <span className="detail-meta-label">Stack</span>
            <span className="detail-meta-value">{project.tech.join(' · ')}</span>
          </div>
        </div>

        <div className="detail-actions">
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View source
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Live demo
            </a>
          )}
        </div>

        <section className="detail-block">
          <h2 className="detail-heading">The problem</h2>
          <p className="detail-body">{project.problem}</p>
        </section>

        <section className="detail-block">
          <h2 className="detail-heading">What I built</h2>
          <ol className="detail-steps">
            {project.approach.map((step, i) => (
              <li key={i}>
                <span className="detail-step-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="detail-step-text">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="detail-block">
          <h2 className="detail-heading">Outcome</h2>
          <ul className="detail-outcomes">
            {project.outcome.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {project.learned && (
          <section className="detail-block">
            <h2 className="detail-heading">What I took away</h2>
            <blockquote className="detail-quote">{project.learned}</blockquote>
          </section>
        )}

        {project.note && <p className="detail-note">{project.note}</p>}

        <Link to="/projects" className="btn btn-secondary detail-back-cta">
          Back to all projects
        </Link>
      </article>
    </div>
  );
};

export default ProjectDetail;
