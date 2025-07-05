import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = ({ variants, transition }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div
      className={styles.homeContainer}
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>Leonard Rabih Marida</motion.h1>
        <motion.h2 variants={itemVariants}>Full-Stack Developer & Creative Problem-Solver</motion.h2>
        <motion.p variants={itemVariants}>
          I build dynamic, user-centric web applications with a focus on clean code and stunning design.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link to="/projects" className={styles.ctaButton}>
            View My Work
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;