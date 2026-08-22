import React from 'react';
import { motion } from 'framer-motion';
import { EASE } from '../components/Reveal';
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
        {/* The rail draws downward, then the dot lands, then the card
            slides in — each entry a beat after the one above it. */}
        <motion.span
          className="timeline-rail"
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: i * 0.18, ease: 'easeInOut' }}
        />
        <motion.span
          className="timeline-marker"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: i * 0.18 + 0.25, ease: 'backOut' }}
        />
        <motion.div
          className="timeline-card"
          initial={{ opacity: 0, x: 26 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: i * 0.18 + 0.15, ease: EASE }}
        >
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
        </motion.div>
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
