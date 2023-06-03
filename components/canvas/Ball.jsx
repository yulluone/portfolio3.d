// Import dependencies from the @react-three/drei package
import { Decal, Float, useTexture } from "@react-three/drei";

// Define Ball component
const Ball = (props) => {
  // Use the useTexture hook to load the image specified by the imgUrl prop
  const [decal] = useTexture([props.imgUrl]);

  // Render the 3D ball mesh
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Add a Decal component to apply the loaded texture to the ball */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// Export Ball component
export default Ball;
