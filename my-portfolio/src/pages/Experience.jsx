import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import styles from "./Projects.module.css";

// Project data now includes all projects from your resume, ordered strategically.
const projectsData = [
  {
    title: "Full Stack Mobile Developer | Equipment Manager App (Freelance Contract) ",
    description:
      "Built and launched a custom mobile app with real-time Firebase sync, cutting manual tracking errors by 40% and improving client workflow efficiency.",
    technologies: [
      "React Native",
      "JavaScript",
      "Firebase",
      "Product Lifecycle Management",
      "Application Performance Optimization",
    ],
    liveLink: "#",
    githubLink: "https://github.com/leo-marida/Mechanic-App",
  },
  {
    title: "Machine Learning Engineer | AI Road Tracking System (Personal R&D Project)",
    description:
      "Engineered a YOLOv5 detection + tracking system, boosting object recognition accuracy in traffic environments by 30%.",
    technologies: [
      "Supervised Learning",
      "Deepsort",
      "Python",
      "Model Generalization",
      "Norfair",
    ],
    liveLink: "#",
    githubLink: "https://github.com/leo-marida/AI-Road-Tracking-System",
  },
  {
    title: "Full Stack Developer Intern | Greatech",
    description:
      "Improved Actifit.io’s mobile responsiveness by 25%, resolved 15+ UI issues, and integrated scalable REST APIs for smoother data flow.",
    technologies: [
      "Nuxt.js",
      "Vue.js",
      "JavaScript",
      "UI Bug Resolution",
      "REST APIs",
      "Mobile Responsiveness",
    ],
    liveLink: "actifit.io",
    githubLink: "https://github.com/leo-marida/AI-Road-Tracking-System",
  },
  {
    title: "Full Stack Developer Intern | Integrated Digital Systems (IDS) ",
    description:
      "Delivered a real-time event management app, optimizing database queries to improve response times and ensure data consistency.",
    technologies: [
      "ASP.NET MVC",
      "C#",
      "Microsoft SQL Server",
      ".NET Framework",
      "Real-time Management",
    ],
    liveLink: "",
    githubLink: "",
  },
  {
    title: "Full Stack Developer | AI Automation Agency (Freelance Contract)",
    description:
      "Built an AI-driven automation platform that reduced manual workload by automating client workflows with OpenAI and Notion DB. ",
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
    title: "Full Stack Developer | Travel Agency Platform (Freelance Contract)",
    description:
      "Developed a scalable multi-portal travel system supporting bookings, secure authentication, and seamless service management. ",
    technologies: [
      "React.js",
      "Spring Boot",
      "Java",
      "PostgreSQL",
      "REST APIs",
      "Secure User Authentication",
    ],
    liveLink: "#", // Replace with your live demo link
    githubLink: "https://github.com/leo-marida/Grand-Voyage", // Replace with your GitHub repo link
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
      <h1 className={styles.title}>My Professional Experience</h1>
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
