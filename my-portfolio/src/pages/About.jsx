import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const skills = {
  languages: ['Java', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  frameworks: ['React', 'Spring Boot', 'Node.js', 'React Native', 'Vue.js', 'Nuxt.js','Next.js', 'Framer Motion'],
  databases: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'Firebase'],
  tools: ['Git', 'Vercel (CI/CD)', 'Docker (Familiarity)', 'Agile Methodologies', 'REST APIs']
};

const About = ({ variants, transition }) => {
  // Variant for the container card itself (fade in and up)
  const categoryContainerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // This is key: delay the staggering of children until the container is visible
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  // Variant for the list items inside the card
  const listItemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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
      {/* --- Intro Section remains unchanged --- */}
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
            Possesses over 3 years of hands-on experience in full-stack and mobile development, with specialized expertise in building and deploying cross-platform applications from scratch.
          </p>
          <p>
            My journey into tech began with a curiosity for how things work, which quickly evolved into building applications that people can interact with and enjoy. I thrive in collaborative environments and am driven by a philosophy of continuous learning and improvement.
          </p>
        </motion.div>
      </div>
      
      {/* --- Skills Section with Corrected Animation --- */}
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>My Technical Toolbox</h2>
        <div className={styles.skillsGrid}>
          
          {/* Each category is now its own animated container */}
          <motion.div
            className={styles.skillCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={categoryContainerVariant}
          >
            <h3>Languages</h3>
            <ul>
              {skills.languages.map(skill => <motion.li key={skill} variants={listItemVariant}>{skill}</motion.li>)}
            </ul>
          </motion.div>
          
          <motion.div
            className={styles.skillCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={categoryContainerVariant}
          >
            <h3>Frameworks & Libraries</h3>
            <ul>
              {skills.frameworks.map(skill => <motion.li key={skill} variants={listItemVariant}>{skill}</motion.li>)}
            </ul>
          </motion.div>

          <motion.div
            className={styles.skillCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={categoryContainerVariant}
          >
            <h3>Databases & Storage</h3>
            <ul>
              {skills.databases.map(skill => <motion.li key={skill} variants={listItemVariant}>{skill}</motion.li>)}
            </ul>
          </motion.div>

          <motion.div
            className={styles.skillCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={categoryContainerVariant}
          >
            <h3>Tools & Technologies</h3>
            <ul>
              {skills.tools.map(skill => <motion.li key={skill} variants={listItemVariant}>{skill}</motion.li>)}
            </ul>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;