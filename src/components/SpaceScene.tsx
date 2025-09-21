import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Planet = () => {
  const planetRef = useRef<THREE.Mesh>(null);
  
  // Create planet texture with gradient-like appearance
  const planetMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color().setHSL(0.75, 0.8, 0.4), // Purple hue
      roughness: 0.7,
      metalness: 0.3,
    });
    return material;
  }, []);

  useFrame((state) => {
    if (planetRef.current) {
      // Rotate the planet
      planetRef.current.rotation.y += 0.005;
      planetRef.current.rotation.x += 0.002;
      
      // Add subtle floating motion
      planetRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Sphere ref={planetRef} args={[1.2, 32, 32]} position={[3, 0, -2]} material={planetMaterial}>
      <meshStandardMaterial
        color="#8B5CF6"
        roughness={0.7}
        metalness={0.3}
        emissive="#4C1D95"
        emissiveIntensity={0.1}
      />
    </Sphere>
  );
};

const MovingStars = () => {
  const starsRef = useRef<any>(null);
  
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0005;
      starsRef.current.rotation.x += 0.0002;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={3000}
      factor={4}
      saturation={0.8}
      fade
      speed={0.5}
    />
  );
};

const SpaceScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient lighting for overall illumination */}
        <ambientLight intensity={0.3} color="#8B5CF6" />
        
        {/* Directional light for planet lighting */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          color="#A855F7"
          castShadow
        />
        
        {/* Point light for atmospheric glow */}
        <pointLight
          position={[-5, 0, 3]}
          intensity={0.8}
          color="#C084FC"
          distance={20}
        />
        
        {/* Moving stars background */}
        <MovingStars />
        
        {/* Animated planet */}
        <Planet />
      </Canvas>
    </div>
  );
};

export default SpaceScene;