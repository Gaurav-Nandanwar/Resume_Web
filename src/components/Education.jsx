import { motion } from 'framer-motion';

const Education = ({ education, certifications }) => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education & Certifications</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="education-icon">🎓</div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <div className="education-meta">
                  <span>📍 {edu.location}</span>
                  <span>📅 {edu.period}</span>
                  {edu.gpa && <span>⭐ {edu.gpa} GPA</span>}
                </div>
                <p>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="cert-icon">🏆</div>
                <h4>{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-meta">
                  <span>{cert.date}</span>
                  <span>{cert.credential}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;


