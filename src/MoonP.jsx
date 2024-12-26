import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Moon from "../public/Moon"; // Ensure you have a proper Earth model here.

const MoonP = () => {
  return (
    <div className="absolute top-0 left-0 h-auto w-auto ">
      <Canvas>
        <ambientLight />

        {/* OrbitControls for rotating the planet */}
        <OrbitControls enableZoom={true} />

        <Suspense fallback={null}>
          <Moon />
        </Suspense>

        {/* Environment preset for lighting */}
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default MoonP;
