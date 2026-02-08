import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Box, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 1500;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;

      const c = new THREE.Color();
      c.setHSL(Math.random() * 0.2 + 0.7, 0.8, 0.6);
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingGeometries() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[-3, 1, -2]}>
          <MeshDistortMaterial
            color="#6c5ce7"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.7}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={3} floatIntensity={1.5}>
        <Torus args={[0.8, 0.3, 32, 64]} position={[3, -1, -1]}>
          <MeshWobbleMaterial
            color="#00cec9"
            factor={0.3}
            speed={1}
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.7}
          />
        </Torus>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={3}>
        <Icosahedron args={[0.7, 1]} position={[0, 2.5, -3]}>
          <MeshDistortMaterial
            color="#a29bfe"
            distort={0.3}
            speed={3}
            roughness={0.3}
            metalness={0.7}
            transparent
            opacity={0.6}
          />
        </Icosahedron>
      </Float>

      <Float speed={1.8} rotationIntensity={2.5} floatIntensity={2}>
        <Box args={[0.6, 0.6, 0.6]} position={[-2, -2, -2]}>
          <MeshWobbleMaterial
            color="#55efc4"
            factor={0.2}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.5}
          />
        </Box>
      </Float>

      <Float speed={3} rotationIntensity={4} floatIntensity={1}>
        <Torus args={[0.5, 0.15, 16, 32]} position={[2, 2, -4]}>
          <meshStandardMaterial
            color="#fd79a8"
            roughness={0.1}
            metalness={0.9}
            transparent
            opacity={0.6}
          />
        </Torus>
      </Float>

      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={2.5}>
        <Icosahedron args={[0.5, 0]} position={[4, 0, -3]}>
          <meshStandardMaterial
            color="#e17055"
            roughness={0.3}
            metalness={0.7}
            transparent
            opacity={0.5}
            wireframe
          />
        </Icosahedron>
      </Float>
    </group>
  );
}

function GlowingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.2;
      ring2Ref.current.rotation.z = t * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.4;
      ring3Ref.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group position={[0, 0, -2]}>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#6c5ce7" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00cec9" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#a29bfe" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#6c5ce7" />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color="#00cec9" />
        <pointLight position={[0, 5, -5]} intensity={0.5} color="#a29bfe" />
        <ParticleField />
        <FloatingGeometries />
        <GlowingRings />
      </Canvas>
    </div>
  );
}
