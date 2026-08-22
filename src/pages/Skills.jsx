import React from 'react';
import './Skills.css';

const Skills = () => {
  const languages = [
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "C", icon: "https://skillicons.dev/icons?i=c" },
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
  ];

  const webDevelopment = [
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Node JS", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express JS", icon: "https://skillicons.dev/icons?i=express" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
  ];

  const systemsAndData = [
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
    { name: "Bash", icon: "https://skillicons.dev/icons?i=bash" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
  ];

  const tools = [
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
  ];

  const coreDomains = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "QEMU / CXL Emulation",
    "REST APIs",
  ];

  const renderGrid = (items) => (
    <div className="skills-grid">
      {items.map((skill, index) => (
        <div key={index} className="skill-item">
          <img src={skill.icon} alt={skill.name} />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="page-section section-skills">
      <div className="skills-container">
        <h1 className="skills-title">SKILLS</h1>
        <p className="skills-description">
          The tools and technologies I work with day to day, across web development and low-level systems.
        </p>

        <div className="skill-category-wrapper">
          <div className="skill-category-card">
            <h2 className="category-title">Languages</h2>
            {renderGrid(languages)}
          </div>

          <div className="skill-category-card">
            <h2 className="category-title">Web Development</h2>
            {renderGrid(webDevelopment)}
          </div>
        </div>

        <div className="skill-category-wrapper">
          <div className="skill-category-card">
            <h2 className="category-title">Systems &amp; Databases</h2>
            {renderGrid(systemsAndData)}
          </div>

          <div className="skill-category-card">
            <h2 className="category-title">Tools</h2>
            {renderGrid(tools)}
          </div>
        </div>

        <div className="skill-category-wrapper">
          <div className="skill-category-card skill-category-card-wide">
            <h2 className="category-title">Core Domains</h2>
            <div className="skill-chip-grid">
              {coreDomains.map((domain, index) => (
                <span key={index} className="skill-chip">{domain}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
