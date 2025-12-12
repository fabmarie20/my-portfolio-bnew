import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.css';

// Contact Page Component
// Contains contact information and an interactive form that collects user messages.
// Form redirects to the Home page after submission.

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! Redirecting to home page.');
    navigate('/');
  }

  return (
    <section>
      <h1>Contact Me</h1>

      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div
          style={{
            flex: '1 1 250px',
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> your.email@example.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Location:</strong> Toronto, ON</p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ flex: '2 1 300px', display: 'grid', gap: '8px' }}
        >
          <div>
            <label>First Name</label><br />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name</label><br />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Contact Number</label><br />
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email Address</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message</label><br />
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

    