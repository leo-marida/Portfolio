import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
// The image is now in the public folder, so we don't need to import it.

const skills = {
  languages: ['Java', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  frameworks: ['React', 'Spring Boot', 'Node.js', 'React Native', 'Vue.js', 'Nuxt.js', 'Framer Motion'],
  databases: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'Firebase'],
  tools: ['Git', 'Vercel (CI/CD)', 'Docker (Familiarity)', 'Agile Methodologies', 'REST APIs']
};

const About = ({ variants, transition }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' }
    }
  };

  return (
    <motion.div
      className={styles.aboutContainer}
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.introContent}>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <img src="/profile-placeholder.jpg" alt="Leonard Rabih Marida" className={styles.profileImage} />
        </motion.div>
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p>
            I am a detail-oriented Computer Science student with a passion for turning complex problems into elegant, user-centric software solutions. With over three years of hands-on experience in full-stack development, I have honed my abilities across a wide range of modern technologies.
          </p>
          <p>
            My journey into tech began with a curiosity for how things work, which quickly evolved into building applications that people can interact with and enjoy. I thrive in collaborative environments and am driven by a philosophy of continuous learning and improvement.
          </p>
        </motion.div>
      </div>

      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>My Technical Toolbox</h2>
        <div className={styles.skillsGrid}>
          <motion.div className={styles.skillCategory} variants={containerVariants} initial="hidden" animate="visible">
            <h3>Languages</h3>
            <ul>
              {skills.languages.map(skill => <motion.li key={skill} variants={itemVariants}>{skill}</motion.li>)}
            </ul>
          </motion.div>
          <motion.div className={styles.skillCategory} variants={containerVariants} initial="hidden" animate="visible">
            <h3>Frameworks & Libraries</h3>
            <ul>
              {skills.frameworks.map(skill => <motion.li key={skill} variants={itemVariants}>{skill}</motion.li>)}
            </ul>
          </motion.div>
          <motion.div className={styles.skillCategory} variants={containerVariants} initial="hidden" animate="visible">
            <h3>Databases & Storage</h3>
            <ul>
              {skills.databases.map(skill => <motion.li key={skill} variants={itemVariants}>{skill}</motion.li>)}
            </ul>
          </motion.div>
          <motion.div className={styles.skillCategory} variants={containerVariants} initial="hidden" animate="visible">
            <h3>Tools & Technologies</h3>
            <ul>
              {skills.tools.map(skill => <motion.li key={skill} variants={itemVariants}>{skill}</motion.li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;