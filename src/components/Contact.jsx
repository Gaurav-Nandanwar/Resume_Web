import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = ({ personal, languages }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Let's connect!</h3>
            <p>
              I'm always open to discussing new opportunities, 
              interesting projects, or just having a conversation about tech.
            </p>

            <div className="contact-details">
              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </div>
              </motion.div>
              
              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${personal.phone}`}>{personal.phone}</a>
                </div>
              </motion.div>

              <motion.div
                className="contact-item"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>{personal.location}</p>
                </div>
              </motion.div>
            </div>

            <div className="languages-section">
              <h4>Languages</h4>
              <div className="languages-grid">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    className="language-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
          >
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
                rows="6"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary btn-submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


