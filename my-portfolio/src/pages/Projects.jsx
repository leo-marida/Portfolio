import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import styles from "./Projects.module.css";

// Project data now includes all projects from your resume, ordered strategically.
const projectsData = [
  {
    title: "Equipment Manager Mobile App",
    description:
      "Owned the full product lifecycle for over 3 years, taking the app from initial concept to launch to continuous, long-term maintenance for a local mechanic to track equipment inventory, availability, and service history, as well as reducing manual check times by 50%.",
    technologies: ["React Native", "JavaScript", "Firebase", "Product Lifecycle Management", "Application Performance Optimization"],
    liveLink: "#",
    githubLink: "https://github.com/leo-marida/Mechanic-App",
  },
  {
    title: "AI Road Tracking System",
    description:
      "Engineered a high-fidelity, real-time multi-object tracking (MOT) system by custom-training a YOLOv5 model on a large-scale Roboflow dataset and integrating it with a Norfair tracker, achieving exceptional robustness in identifying vehicles across complex and varied driving conditions.",
    technologies: ["Python", "Deepsort", "Supervised Learning", "Modal Generalization", "Norfair"],
    liveLink: "#",
    githubLink: "https://github.com/leo-marida/AI-Road-Tracking-System",
  },
  {
    title: "Full stack developer intern at Greatech",
    description:
      "As a Full Stack Developer Intern, I elevated the Actifit.io platform by developing key front-end features in Nuxt.js, boosting mobile responsiveness by 25% and resolving over 15 UI bugs to significantly enhance user engagement and overall application performance.",
    technologies: ["Nuxt.js", "Vue.js", "JavaScript", "UI Bug Resolution", "REST APIs", "Mobile Responsiveness"],
    liveLink: "actifit.io",
    githubLink: "https://github.com/leo-marida/AI-Road-Tracking-System",
  },
  {
    title: "Travel Agency Platform",
    description:
      "Architected a full-stack, tripal-portal web application for users, admins, and service providers, enabling dynamic service listings and secure booking management.",
    technologies: ["React.js", "Spring Boot", "Java", "PostgreSQL", "REST APIs", "Secure User Authentication"],
    liveLink: "#", // Replace with your live demo link
    githubLink: "https://github.com/leo-marida/Grand-Voyage", // Replace with your GitHub repo link
  },
  {
    title: "Slova AI - Automation Agency Platform",
    description:
      "Architected a full-stack, client-facing website for a solo AI automation agency, featuring a multi-niche service menu, and an interactive AI chatbot built with a custom backend workflow.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "OpenAI API",
      "Make.com",
      "Vercel",
    ],
    liveLink: "https://slovaautomations.com", // <-- IMPORTANT: Replace with your final domain
    githubLink: "https://github.com/leo-marida/Automation-agency", // <-- IMPORTANT: Replace with your actual GitHub repo link
  },
  {
    title: "Car Dealership Web Application",
    description:
      "Built a responsive, multi-form web application featuring user sign-in, vehicle booking, and dynamic content updates with a smooth, single-page-like user experience.",
    technologies: ["PHP", "MySQL", "JavaScript", "AJAX", "HTML5", "CSS3"],
    liveLink: "#",
    githubLink: "https://github.com/leo-marida/SurgeMotors",
  },
  {
    title: "Secure Password Manager",
    description:
      "Engineered a secure Android application for password management, supporting encrypted storage (AES-256), strong password generation, and user authentication.",
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
