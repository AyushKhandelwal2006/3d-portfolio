
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <div className="w-full h-[420px] rounded-3xl overflow-hidden bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        
        <ambientLight intensity={0.5} />

        
        <Stars
          radius={100}    
          depth={50}       
          count={5000}    
          factor={4}       
          saturation={0}
          fade
          speed={1}        
        />

       
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
