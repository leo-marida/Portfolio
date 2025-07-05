import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import profilePic from '../assets/profile-placeholder.jpg'; // Make sure you have this image

const About = ({ variants, transition }) => {
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
      <div className={styles.content}>
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <img src={profilePic} alt="Leonard Rabih Marida" className={styles.profileImage} />
        </motion.div>
        <motion.div
          className={styles.textContainer}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          <p>
            I am a detail-oriented Software Developer with a passion for turning complex problems into elegant, user-centric software solutions. With over three years of hands-on experience in full-stack development, I have honed my skills in technologies like React, Java (Spring Boot), and Python.
          </p>
          <p>
            My journey into tech began with a curiosity for how things work, which quickly evolved into building applications that people can interact with and enjoy. I thrive in collaborative environments and am driven by a philosophy of continuous learning and improvement.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or diving into a good book on system design.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;