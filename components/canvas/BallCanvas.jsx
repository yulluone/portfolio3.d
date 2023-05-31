// Import React dependencies
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

// Import custom components
import CanvasLoader from "./Loader";
import Ball from "./Ball";

// Define BallCanvas component
const BallCanvas = ({ icon }) => {
  return (
    // Create a new Canvas component from the @react-three/fiber package
    <Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
      {/* Use the Suspense component to handle loading states for the Ball component */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Add OrbitControls component for mouse and touch controls */}
        <OrbitControls enableZoom={false} />
        {/* Render the Ball component and pass the icon prop */}
        <Ball imgUrl={icon.src} />
      </Suspense>
      {/* Use the Preload component to preload assets used in the Canvas */}
      <Preload all />
    </Canvas>
  );
};

// Export BallCanvas component
export default BallCanvas;
