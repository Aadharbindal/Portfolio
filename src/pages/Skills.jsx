import React from 'react';
import { motion } from 'framer-motion';
import Reveal, { EASE } from '../components/Reveal';
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

// The items inside a card ripple in one after another once the card lands.
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

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
          {categories.map((cat, i) => (
            <Reveal className="skill-card-slot" delay={i * 0.09} key={cat.title}>
              <section className="skill-category-card">
                <header className="skill-category-header">
                  <h2 className="category-title">{cat.title}</h2>
                  <span className="category-count">{cat.items.length}</span>
                </header>

                <motion.div
                  className="skills-grid"
                  variants={gridVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {cat.items.map((skill) => (
                    <motion.div className="skill-item" key={skill.name} variants={itemVariants}>
                      <img src={skill.icon} alt="" loading="lazy" width="20" height="20" />
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            </Reveal>
          ))}

          <Reveal className="skill-card-slot skill-card-slot-wide" delay={categories.length * 0.09}>
            <section className="skill-category-card skill-category-card-wide">
              <header className="skill-category-header">
                <h2 className="category-title">Core Domains</h2>
                <span className="category-count">{coreDomains.length}</span>
              </header>

              <motion.div
                className="skill-chip-grid"
                variants={gridVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {coreDomains.map((domain) => (
                  <motion.span className="skill-chip" key={domain} variants={itemVariants}>
                    {domain}
                  </motion.span>
                ))}
              </motion.div>
            </section>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Skills;
