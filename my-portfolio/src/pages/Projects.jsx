import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

// Project data now includes all projects from your resume, ordered strategically.
const projectsData = [
  {
    title: 'Travel Agency Platform',
    description: 'Architected a full-stack, dual-portal web application for users and service providers, enabling dynamic service listings and secure booking management.',
    technologies: ['React', 'Spring Boot', 'Java', 'PostgreSQL', 'REST APIs'],
    liveLink: '#', // Replace with your live demo link
    githubLink: 'https://github.com/leo-marida/Grand-Voyage', // Replace with your GitHub repo link
  },
  {
    title: 'Car Dealership Web Application',
    description: 'Built a responsive, multi-form web application featuring user sign-in, vehicle booking, and dynamic content updates with a smooth, single-page-like user experience.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'AJAX', 'HTML5', 'CSS3'],
    liveLink: '#',
    githubLink: 'https://github.com/leo-marida/SurgeMotors',
  },
  {
    title: 'Equipment Manager Mobile App',
    description: 'Developed and launched a cross-platform mobile application for a local mechanic to track equipment inventory, availability, and service history, reducing manual check times by 50%.',
    technologies: ['React Native', 'JavaScript', 'Firebase'],
    liveLink: '#',
    githubLink: 'https://github.com/leo-marida/Mechanic-App',
  },
  {
    title: 'Secure Password Manager',
    description: 'Engineered a secure Android application for password management, supporting encrypted storage (AES-256), strong password generation, and user authentication.',
    technologies: ['Java', 'XML', 'MySQL', 'Android SDK'],
    liveLink: '#',
    githubLink: 'https://github.com/leo-marida/SafePass',
  },
  {
    title: 'RISC Processor Simulation',
    description: 'Developed a software simulation of a simplified RISC processor, demonstrating a foundational understanding of CPU architecture, instruction cycles, and memory handling.',
    technologies: ['C', 'Assembly', 'Computer Architecture'],
    liveLink: '#',
    githubLink: '#',
  },
];

const Projects = ({ variants, transition }) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  return (
    <motion.div
      className={styles.projectsContainer}
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      <h1 className={styles.title}>My Work</h1>
      <p className={styles.subtitle}>
        A selection of projects that demonstrate my passion for building robust and user-friendly applications.
      </p>
      <br/>
      <motion.div
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;