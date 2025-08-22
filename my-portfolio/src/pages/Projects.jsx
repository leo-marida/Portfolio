import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import styles from "./Projects.module.css";

// Project data now includes all projects from your resume, ordered strategically.
const projectsData = [
  {
    title: "Personal Portfolio Website",
    description:
      "Built and deployed a personal portfolio with CI/CD pipelines and interactive 3D graphics, attracting 500+ unique visitors within the first month. ",
    technologies: ["React.js", "Three.js", "Framer Motion", "Vite", "Vercel (CI/CD)"],
    liveLink: "#",
    githubLink: "https://github.com/leo-marida/Portfolio",
  },
  {
    title: "Full Stack Car Dealership Web App",
    description:
      "Designed a car dealership platform with secure sign-in, vehicle booking, and async submissions, improving booking efficiency and user experience. ",
    technologies: ["PHP", "MySQL", "JavaScript", "AJAX", "HTML5", "CSS3"],
    liveLink: "#",
    githubLink: "https://github.com/leo-marida/SurgeMotors",
  },
  {
    title: "Full Stack Android Password Manager",
    description:
      "Developed a secure Android app with AES-256 encryption and MySQL storage, protecting sensitive user data and strengthening trust in mobile security.",
    technologies: ["Java", "XML", "MySQL", "Android SDK"],
    liveLink: "#",
    githubLink: "https://github.com/leo-marida/SafePass",
  }
];

const Projects = ({ variants, transition }) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.7 },
    },
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
        A selection of projects that demonstrate my passion for building robust
        and user-friendly applications.
      </p>
      <br />
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
