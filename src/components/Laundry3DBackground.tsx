"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Sphere, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

/**
 * 3D Laundry Flowing Fabric & Bubbles Background
 * 
 * INSTRUCTIONS FOR USE:
 * 1. You must install the required 3D libraries:
 *    npm install three @react-three/fiber @react-three/drei
 * 2. Import and use this component anywhere you want a premium 3D background.
 */

// Custom hook to animate the fabric plane vertices
function FlowingFabric({ color = "#e0f2fe" }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a highly detailed plane geometry
  const geometry = useMemo(() => new THREE.PlaneGeometry(15, 10, 64, 64), []);
  
  // Store original vertex positions for the animation calculation
  const originalPositions = useMemo(() => {
    const positions = geometry.attributes.position.array;
    const orig = new Float32Array(positions.length);
    for (let i = 0; i < positions.length; i++) {
      orig[i] = positions[i];
    }
    return orig;
  }, [geometry]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Time variable to drive the animation (adjust multiplier for speed)
    const time = state.clock.getElapsedTime() * 0.8;
    
    const positions = geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = originalPositions[i];
      const y = originalPositions[i + 1];
      
      // Calculate complex wave pattern using sine waves
      // Adjust these values to change the ripple frequency and amplitude
      const waveX = Math.sin(x * 0.5 + time) * 0.5;
      const waveY = Math.sin(y * 0.8 + time * 0.8) * 0.5;
      const waveZ = Math.sin((x + y) * 0.4 + time * 1.2) * 0.3;
      
      positions[i + 2] = waveX + waveY + waveZ;
    }
    
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 3, 0, 0]} position={[0, -2, -2]}>
      <meshPhysicalMaterial 
        color={color} 
        roughness={0.4} 
        metalness={0.1}
        clearcoat={0.5}
        clearcoatRoughness={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Subtle mouse parallax effect for the camera
function MouseParallax() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    // Lerp camera position based on mouse coordinates for a smooth, premium feel
    // Adjust the multiplier (e.g., 2) to increase or decrease the parallax intensity
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, (state.mouse.x * 2), 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, (state.mouse.y * 1) + 2, 0.05);
    camera.lookAt(0, 0, -2);
  });

  return null;
}

export default function Laundry3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-slate-50">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        {/* Advanced Lighting Setup */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, 10, -5]} intensity={0.5} color="#cffafe" />
        
        {/* Environment map for realistic glass reflections */}
        <Environment preset="studio" />

        {/* The Flowing Fabric Plane */}
        {/* Edit the color prop here to match your brand (e.g., pure white, soft seafoam, cerulean) */}
        <FlowingFabric color="#f0f9ff" />

        {/* Floating Glassmorphic Spheres (Water Droplets/Bubbles) */}
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere args={[0.8, 64, 64]} position={[-3, 1, 1]}>
            <MeshTransmissionMaterial 
              thickness={1.5} 
              roughness={0} 
              transmission={1} 
              ior={1.5} 
              chromaticAberration={0.03} 
              backside 
              color="#e0f2fe"
            />
          </Sphere>
        </Float>

        <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
          <Sphere args={[0.5, 64, 64]} position={[2.5, 2, 0]}>
            <MeshTransmissionMaterial 
              thickness={1} 
              roughness={0} 
              transmission={1} 
              ior={1.4} 
              chromaticAberration={0.02} 
              backside 
              color="#ffffff"
            />
          </Sphere>
        </Float>

        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={3}>
          <Sphere args={[1.2, 64, 64]} position={[0, -0.5, 2]}>
            <MeshTransmissionMaterial 
              thickness={2} 
              roughness={0} 
              transmission={1} 
              ior={1.5} 
              chromaticAberration={0.04} 
              backside 
              color="#bae6fd"
            />
          </Sphere>
        </Float>

        {/* Interactive Mouse Parallax */}
        <MouseParallax />
      </Canvas>
    </div>
  );
}
