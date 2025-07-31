import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
//import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const location = useLocation();

  return (
    <>
      {/* <ParticlesBackground /> */}
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;