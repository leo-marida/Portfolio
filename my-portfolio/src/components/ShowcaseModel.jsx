import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// IMPORT THE NEW HELPERS!
import { useGLTF, Stage, OrbitControls, Environment } from '@react-three/drei';

// Your Model component can stay the same, it's perfect.
function Model(props) {
  const { scene } = useGLTF('/models/showcase.glb');
  return <primitive object={scene} {...props} />;
}

// The ShowcaseModel component gets a major upgrade.
const ShowcaseModel = () => {
  return (
    <Canvas
      shadows // Turn on shadows for the scene
      dpr={[1, 2]} // Use device pixel ratio for sharp rendering on all screens
      camera={{ fov: 50 }} // Set a field-of-view for a natural perspective
    >
      <Suspense fallback={null}>
        {/* 
          THE STAGE COMPONENT: This is the star of the show.
          - 'intensity': Adjusts the main studio lighting.
          - 'environment': Links to the environment map for reflections.
          - 'shadows': Configures the soft ground shadow.
          - It automatically centers and scales its children!
        */}
        <Stage intensity={0.8} environment="city" shadows={{ type: 'contact', opacity: 0.6, blur: 1.5 }}>
          {/* 
            Because <Stage> handles scaling and centering, we can remove the
            'scale' and 'position' props from our model!
          */}
          <Model />
        </Stage>
      </Suspense>

      {/* 
        THE ENVIRONMENT COMPONENT
        - 'preset': Loads a pre-compiled environment map for realistic lighting and reflections.
        - Options include: 'city', 'park', 'sunset', 'apartment', 'studio', 'dawn'.
      */}
      <Environment preset="city" />

      <OrbitControls 
        autoRotate
        autoRotateSpeed={4}
        enableZoom={false} // Keeping zoom off is a good design choice here
        enablePan={false}
        minPolarAngle={Math.PI / 2.5} // Prevents looking from below the ground
        maxPolarAngle={Math.PI / 2.5} // Prevents looking from directly above
      />
    </Canvas>
  );
};

useGLTF.preload('/models/showcase.glb');

export default ShowcaseModel;