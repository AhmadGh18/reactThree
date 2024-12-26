import React from "react";
import { motion } from "framer-motion";
import SpaceScene from "./SpaceScene"; // Import SpaceScene with the planet

const SpaceComponent = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Stars Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-fixed"
        style={{
          background: `url('https://www.transparenttextures.com/patterns/stardust.png')`,
          backgroundSize: "200px 200px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "100px 100px", "0px 0px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      />

      {/* Light Dust */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-40"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      />

      {/* <motion.div
        className="absolute top-4 left-4 transform -translate-x-1/2"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 1) 30%, rgba(80, 80, 80, 1) 80%)", // Moon-like gradient with light center and dark edge
          boxShadow:
            "0 0 40px rgba(255, 255, 255, 0.2), 0 0 50px rgba(255, 255, 255, 0.5)", // Light glow to simulate moon's atmosphere
          border: "2px solid rgba(255, 255, 255, 0.1)", // Subtle border for better separation
        }}
        animate={{
          rotate: [0, 360], // Optionally add rotation if desired
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      /> */}

      {/* Stars */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(100)].map((_, index) => (
          <div
            key={index}
            className="absolute bg-white opacity-50 rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 5 + 5}s infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      {/* Global Styles for Twinkling Effect */}
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SpaceComponent;
