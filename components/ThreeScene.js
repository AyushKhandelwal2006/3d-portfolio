import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";

function FloatingOrb() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.12;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
    }
  });
  return (
    <Sphere ref={meshRef} args={[1.4, 64, 64]}>
      <MeshDistortMaterial color="#4ecdc4" distort={0.35} speed={1.8}
        roughness={0.05} metalness={0.9} transparent opacity={0.75} />
    </Sphere>
  );
}

function InnerCore() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.3;
      ref.current.rotation.z = clock.getElapsedTime() * 0.2;
    }
  });
  return (
    <Sphere ref={ref} args={[0.6, 32, 32]}>
      <MeshDistortMaterial color="#ff6b35" distort={0.6} speed={3}
        roughness={0} metalness={1} transparent opacity={0.5} />
    </Sphere>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-[480px] rounded-3xl overflow-hidden" style={{ background: "transparent" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 55 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[3, 3, 3]} intensity={1.5} color="#4ecdc4" />
        <pointLight position={[-3, -2, -3]} intensity={1} color="#ff6b35" />
        <Stars radius={120} depth={60} count={4000} factor={3} saturation={0} fade speed={0.5} />
        <FloatingOrb />
        <InnerCore />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}