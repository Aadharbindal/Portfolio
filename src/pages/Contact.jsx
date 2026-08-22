import React, { useState } from 'react';
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
        <header className="contact-header">
          <h1 className="contact-title">GET IN TOUCH</h1>
          <p className="contact-description">
            I'm open to internships and full-time roles, and happy to talk about interesting
            problems either way. The fastest route is email — or use the form and it lands
            in the same inbox.
          </p>
        </header>

        <div className="contact-grid">
          <aside className="contact-aside">
            <h2 className="contact-aside-title">Reach me directly</h2>
            <dl className="contact-channels">
              {channels.map((c) => (
                <div className="contact-channel" key={c.label}>
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
                </div>
              ))}
            </dl>

            <div className="contact-availability">
              <span className="contact-availability-dot" />
              Currently open to opportunities
            </div>
          </aside>

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
        </div>
      </div>
    </div>
  );
};

export default Contact;
