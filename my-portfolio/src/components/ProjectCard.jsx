import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Variants for the card's fade-in-and-up animation
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50, duration: 0.8 }
  }
};

const ProjectCard = ({ project }) => {
  return (
    // This motion.div now controls its own scroll-triggered animation
    <motion.div
      className={styles.card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of card is visible
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 191, 255, 0.2)" }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.techList}>
          {project.technologies?.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <div className={styles.cardLinks}>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
            <FaGithub />
          </a>
          
          {/* Un-comment this line when you have live links! */}
          {/*
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo Link">
            <FaExternalLinkAlt />
          </a>
          */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;