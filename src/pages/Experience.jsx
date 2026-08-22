import React from 'react';
import './Experience.css';

const experience = [
  {
    role: 'CPP3 Intern',
    org: 'Hewlett Packard Enterprise (HPE)',
    period: 'Feb 2026 – Jul 2026',
    place: 'Remote',
    points: [
      'Configured and deployed a QEMU-based emulation environment on Ubuntu to validate Compute Express Link (CXL) specifications without requiring physical hardware.',
      'Architected custom Shell scripts to automate system configuration, the kernel compilation pipeline and QEMU environment setup, reducing manual overhead.',
    ],
  },
  {
    role: 'MERN Stack Intern',
    org: 'Regex Software Services',
    period: 'Jun 2025 – Aug 2025',
    place: 'Jaipur, Rajasthan',
    points: [
      'Engineered responsive, interactive user interfaces using HTML, CSS, JavaScript and React.',
      'Built and expanded server-side applications with Node.js, handling data modeling and operations in Firebase.',
    ],
  },
];

const education = [
  {
    role: 'B.Tech, Information Technology',
    org: 'Jaipur Engineering College and Research Centre',
    period: '2023 – 2027',
    place: 'Jaipur, Rajasthan',
    points: ['Current CGPA: 9.29'],
  },
  {
    role: 'Senior Secondary (RBSE)',
    org: 'Vivekanand Public Senior Secondary School',
    period: 'Completed 2023',
    place: 'Bharatpur, Rajasthan',
    points: ['Percentage: 89.2%'],
  },
];

const Timeline = ({ items }) => (
  <div className="timeline">
    {items.map((item, i) => (
      <div className="timeline-item" key={i}>
        <div className="timeline-marker" />
        <div className="timeline-card">
          <div className="timeline-head">
            <h3 className="timeline-role">{item.role}</h3>
            <span className="timeline-period">{item.period}</span>
          </div>
          <div className="timeline-sub">
            <span className="timeline-org">{item.org}</span>
            <span className="timeline-place">{item.place}</span>
          </div>
          <ul className="timeline-points">
            {item.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
);

const Experience = () => {
  return (
    <div className="page-section section-experience">
      <div className="experience-content">
        <h1 className="experience-title">EXPERIENCE</h1>
        <Timeline items={experience} />

        <h1 className="experience-title experience-title-second">EDUCATION</h1>
        <Timeline items={education} />
      </div>
    </div>
  );
};

export default Experience;
