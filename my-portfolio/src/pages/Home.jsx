import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import ShowcaseModel from '../components/ShowcaseModel'; // Import the new model component

const Home = ({ variants, transition }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    // We apply the main container variants here to orchestrate the animation
    <motion.div
      className={styles.homeContainer}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="out"
    >
      {/* This container for the text content no longer needs its own variants,
          as the parent `homeContainer` is handling the stagger effect. */}
      <div className={styles.content}>
        <motion.h1 variants={itemVariants}>Leonard Rabih Marida</motion.h1>
        <motion.h2 variants={itemVariants}>Junior Software Developer</motion.h2>
        <motion.p variants={itemVariants}>
          3+ years of experience building high-quality, performant web applications with a focus on 
exceptional customer experience. I specialize in the modern web stack, and have a proven track record of owning features from inception to launch in fast-paced, innovative environments.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link to="/projects" className={styles.ctaButton}>
            View My Work
          </Link>
        </motion.div>
      </div>

      {/*
        THIS IS THE NEW PART.
        We place the 3D model container here, right after the text content.
        We also apply the 'itemVariants' to it so it fades/slides in.
      */}
      <motion.div className={styles.modelContainer} variants={itemVariants}>
        <ShowcaseModel />
      </motion.div>
    </motion.div>
  );
};

export default Home;