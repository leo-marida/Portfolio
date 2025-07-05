import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.7
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home variants={pageVariants} transition={pageTransition} />} />
        <Route path="/about" element={<About variants={pageVariants} transition={pageTransition} />} />
        <Route path="/projects" element={<Projects variants={pageVariants} transition={pageTransition} />} />
        <Route path="/contact" element={<Contact variants={pageVariants} transition={pageTransition} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;