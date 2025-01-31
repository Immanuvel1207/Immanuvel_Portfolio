import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_9pmq9de',   // Replace with your EmailJS service ID
      'template_0w3uo4m',  // Replace with your EmailJS template ID
      {
        name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'mJNtxfgpx5E8LaIS5'    // Replace with your EmailJS public key
    )
    .then(() => {
      setIsSent(true);
      setError('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      setError('Failed to send message. Please try again.');
      console.error('EmailJS Error:', err);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Perundurai</h3>
                <p>Erode, India</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>r.immanuvel12@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+91 8825503860</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/immanuvel-r-336442259/" className="social-link">LinkedIn</a>
              <a href="https://github.com/Immanuvel1207" className="social-link">GitHub</a>
              <a href="https://leetcode.com/u/Immanuvel12/" className="social-link">Leetcode</a>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {isSent && <p className="success-message">✅ Message sent successfully!</p>}
            {error && <p className="error-message">❌ {error}</p>}
            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
