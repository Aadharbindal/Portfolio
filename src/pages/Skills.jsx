import React from 'react';
import './Skills.css';

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "SASS", icon: "https://skillicons.dev/icons?i=sass" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "React JS", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Angular", icon: "https://skillicons.dev/icons?i=angular" },
    { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
    { name: "Next JS", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "GSAP", icon: "https://skillicons.dev/icons?i=gsap" },
    { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui" },
    { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
  ];

  const backendSkills = [
    { name: "Springboot", icon: "https://skillicons.dev/icons?i=spring" },
    { name: "Node JS", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express JS", icon: "https://skillicons.dev/icons?i=express" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
  ];

  const languages = [
    { name: "C", icon: "https://skillicons.dev/icons?i=c" },
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "C-Sharp", icon: "https://skillicons.dev/icons?i=cs" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
  ];

  const tools = [
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
    { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
    { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
    { name: "Netlify", icon: "https://skillicons.dev/icons?i=netlify" },
    { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
  ];

  return (
    <div
      className="page-section section-skills"
    >
      <div className="skills-container">
        <h1 className="skills-title">SKILLS</h1>
        <p className="skills-description">A collection of my technical skills and expertise honed through various projects and experiences</p>
        
        <div className="skill-category-wrapper">
          <div className="skill-category-card">
            <h2 className="category-title">Frontend</h2>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                >
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category-card">
            <h2 className="category-title">Backend</h2>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                >
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skill-category-wrapper">
          <div className="skill-category-card">
            <h2 className="category-title">Languages</h2>
            <div className="skills-grid">
              {languages.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                >
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category-card">
            <h2 className="category-title">Tools</h2>
            <div className="skills-grid">
              {tools.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                >
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
