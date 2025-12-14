// components/ThreeScene.js
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <div className="w-full h-[420px] rounded-3xl overflow-hidden bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {/* Light (minimal) */}
        <ambientLight intensity={0.5} />

        {/* Stars background */}
        <Stars
          radius={100}     // space size
          depth={50}       // star depth
          count={5000}     // number of stars
          factor={4}       // star size
          saturation={0}
          fade
          speed={1}        // ⭐ motion speed
        />

        {/* Mouse interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}
