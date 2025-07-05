import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 191, 255, 0.2)" }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>
        <div className={styles.techList}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <div className={styles.cardLinks}>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
            <FaGithub />
          </a>
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