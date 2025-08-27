import React, { useState } from 'react';
import '../App.css'; // Import App.css for animations

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    // Destructure `name` and `value` from the event target (the input field).
    // `name` corresponds to the 'name' attribute of the input (e.g., "name", "email", "subject", "message").
    // `value` is the current text entered in that input field.
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState, 
      [name]: value 
    }));
  };

  return (
    <div
      className="page-section section-contact"
    >
      <div className="contact-content">
        <h1 className="contact-title">CONTACT ME</h1>
        <p className="contact-description">Feel free to reach out to me! You can connect with me via email using the form below.</p>
        
        <form className="contact-form" action="https://formspree.io/f/xnnzeyen" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
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
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
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
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
