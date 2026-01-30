import { motion } from 'framer-motion';

const About = ({ personal }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>{personal.summary}</p>
            <p>
              I'm passionate about creating intuitive, performant applications 
              that solve real-world problems. With expertise spanning the entire 
              development stack, I bring ideas to life through clean code and 
              innovative solutions.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source 
              projects, attending tech meetups, and exploring the latest 
              trends in web development and cloud technologies.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { icon: '🎯', title: 'Problem Solver', desc: 'Innovative solutions' },
              { icon: '💡', title: 'Innovative', desc: 'Latest technologies' },
              { icon: '🚀', title: 'Efficient', desc: 'Performance focused' },
              { icon: '🤝', title: 'Collaborative', desc: 'Team player' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


