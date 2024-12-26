import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Earth from "../public/Earth"; // Ensure you have a proper Earth model here.

const SpaceScene = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas>
        {/* Ambient Light for the planet */}
        <ambientLight />

        {/* OrbitControls for rotating the planet */}
        <OrbitControls enableZoom={true} />

        <Suspense fallback={null}>
          {/* Earth component, ensure it's a proper 3D model */}
          <Earth />
        </Suspense>

        {/* Environment preset for lighting */}
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default SpaceScene;
