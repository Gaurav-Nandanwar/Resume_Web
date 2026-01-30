import { motion } from 'framer-motion';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <motion.div
                  className="timeline-marker"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                />
                
                <motion.div
                  className="experience-card"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="experience-header">
                    <div>
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                    </div>
                    <div className="experience-badge">
                      <span className="badge-type">{exp.type}</span>
                    </div>
                  </div>
                  
                  <div className="experience-meta">
                    <span>📍 {exp.location}</span>
                    <span>📅 {exp.period}</span>
                  </div>

                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.05 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="experience-tech">
                    {exp.technologies.map((tech, techIdx) => (
                      <motion.span
                        key={techIdx}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + techIdx * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


