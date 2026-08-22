import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal, { EASE } from '../components/Reveal';
import '../App.css';
import './Contact.css';

const channels = [
  {
    label: 'Email',
    value: 'aadharbindal@gmail.com',
    href: 'mailto:aadharbindal@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'aadhar-bindal',
    href: 'https://linkedin.com/in/aadhar-bindal-71222327b',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'Aadharbindal',
    href: 'https://github.com/Aadharbindal',
    external: true,
  },
  {
    label: 'Location',
    value: 'Jaipur, Rajasthan, India',
  },
];

// Channels drop in one after the other once the panel has landed.
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="page-section section-contact">
      <div className="contact-shell">
        <Reveal className="contact-header-slot" y={16}>
        <header className="contact-header">
          <h1 className="contact-title">GET IN TOUCH</h1>
          <p className="contact-description">
            I'm open to internships and full-time roles, and happy to talk about interesting
            problems either way. The fastest route is email — or use the form and it lands
            in the same inbox.
          </p>
        </header>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-slot" delay={0.08}>
          <aside className="contact-aside">
            <h2 className="contact-aside-title">Reach me directly</h2>
            <motion.dl
              className="contact-channels"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {channels.map((c) => (
                <motion.div className="contact-channel" key={c.label} variants={rowVariants}>
                  <dt className="contact-channel-label">{c.label}</dt>
                  <dd className="contact-channel-value">
                    {c.href ? (
                      <a
                        href={c.href}
                        className="contact-channel-link"
                        {...(c.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {c.value}
                      </a>
                    ) : (
                      c.value
                    )}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>

            <div className="contact-availability">
              <span className="contact-availability-dot" />
              Currently open to opportunities
            </div>
          </aside>
          </Reveal>

          <Reveal className="contact-slot" delay={0.18}>
          <form
            className="contact-form"
            action="https://formspree.io/f/xnnzeyen"
            method="POST"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary contact-submit">
              Send message
            </button>
          </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
