import React from 'react';
import './Skills.css';

const icon = (i) => `https://skillicons.dev/icons?i=${i}`;

const categories = [
  {
    title: 'Languages',
    items: [
      { name: 'C++', icon: icon('cpp') },
      { name: 'C', icon: icon('c') },
      { name: 'Python', icon: icon('python') },
      { name: 'JavaScript', icon: icon('js') },
    ],
  },
  {
    title: 'Web Development',
    items: [
      { name: 'React', icon: icon('react') },
      { name: 'Node.js', icon: icon('nodejs') },
      { name: 'Express', icon: icon('express') },
      { name: 'Tailwind', icon: icon('tailwind') },
      { name: 'HTML', icon: icon('html') },
      { name: 'CSS', icon: icon('css') },
    ],
  },
  {
    title: 'Systems & Databases',
    items: [
      { name: 'Linux', icon: icon('linux') },
      { name: 'Bash', icon: icon('bash') },
      { name: 'MySQL', icon: icon('mysql') },
      { name: 'MongoDB', icon: icon('mongodb') },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: icon('git') },
      { name: 'GitHub', icon: icon('github') },
      { name: 'Postman', icon: icon('postman') },
      { name: 'VS Code', icon: icon('vscode') },
    ],
  },
];

const coreDomains = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Computer Networks',
  'QEMU / CXL Emulation',
  'REST APIs',
];

const Skills = () => {
  return (
    <div className="page-section section-skills">
      <div className="skills-container">
        <h1 className="skills-title">SKILLS</h1>
        <p className="skills-description">
          The tools and technologies I work with day to day, across web development and
          low-level systems.
        </p>

        <div className="skills-layout">
          {categories.map((cat) => (
            <section className="skill-category-card" key={cat.title}>
              <header className="skill-category-header">
                <h2 className="category-title">{cat.title}</h2>
                <span className="category-count">{cat.items.length}</span>
              </header>

              <div className="skills-grid">
                {cat.items.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <img src={skill.icon} alt="" loading="lazy" width="20" height="20" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="skill-category-card skill-category-card-wide">
            <header className="skill-category-header">
              <h2 className="category-title">Core Domains</h2>
              <span className="category-count">{coreDomains.length}</span>
            </header>

            <div className="skill-chip-grid">
              {coreDomains.map((domain) => (
                <span className="skill-chip" key={domain}>{domain}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;
