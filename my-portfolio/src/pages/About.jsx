import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import ShowcaseModel from '../components/ShowcaseModel'; // 1. IMPORT THE MODEL

const skills = {
  languages: ['Java', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  frameworks: ['React', 'Spring Boot', 'Node.js', 'React Native', 'Vue.js', 'Nuxt.js','Next.js', 'Framer Motion'],
  databases: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'Firebase'],
  tools: ['Git', 'Vercel (CI/CD)', 'Docker (Familiarity)', 'Agile Methodologies', 'REST APIs']
};

const About = ({ variants, transition }) => {
  const categoryContainerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const listItemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, }
  };

  // 2. A NEW VARIANT FOR THE 3D MODEL CONTAINER
  const modelVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.5 // Let it appear after the text
      }
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
          <img src="/leo_image.jpg" alt="Leonard Rabih Marida" className={styles.profileImage} />
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
          <p>
            My three-year dedication to bodybuilding has cultivated a mindset that directly enhances my approach to software engineering. I bring the same principles of structure and perseverance from the gym to my code
          </p>
        </motion.div>
      </div>
      
      {/* 3. PLACE THE MODEL CONTAINER HERE */}
      <motion.div
        className={styles.modelContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={modelVariant}
      >
        <ShowcaseModel />
      </motion.div>
      
      <div className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>My Technical Toolbox</h2>
        <div className={styles.skillsGrid}>
          {/* Languages */}
          <motion.div
            className={styles.skillCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={categoryContainerVariant}
          >
            <h3>Languages</h3>
            <ul>{skills.languages.map(skill => <motion.li key={skill} variants={listItemVariant}>{skill}</motion.li>)}</ul>
          </motion.div>
          {/* Frameworks */}
          <motion.div
            className={styles.skillCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={categoryContainerVariant}
          >
            <h3>Frameworks & Libraries</h3>
            <ul>{skills.frameworks.map(skill => <motion.li key={skill} variants={listItemVariant}>{skill}</motion.li>)}</ul>
          </motion.div>
          {/* Databases */}
          <motion.div
            className={styles.skillCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={categoryContainerVariant}
          >
            <h3>Databases & Storage</h3>
            <ul>{skills.databases.map(skill => <motion.li key={skill} variants={listItemVariant}>{skill}</motion.li>)}</ul>
          </motion.div>
          {/* Tools */}
          <motion.div
            className={styles.skillCategory}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={categoryContainerVariant}
          >
            <h3>Tools & Technologies</h3>
            <ul>{skills.tools.map(skill => <motion.li key={skill} variants={listItemVariant}>{skill}</motion.li>)}</ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;