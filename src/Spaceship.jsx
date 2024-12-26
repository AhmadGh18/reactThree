import React, { useEffect, useRef, useState } from "react";
import img from "./assets/istockphoto-1249611748-612x612-removebg-preview.png";

const Spaceship = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Floating animation using a simple timer
  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() * 0.001; // Get time in seconds
      const x = Math.sin(time) * 420; // Horizontal oscillation
      const y = Math.cos(time) * 107; // Vertical oscillation
      setPosition({ x, y });
    }, 16); // 60 FPS (~16ms per frame)

    return () => clearInterval(interval); // Clean up the interval
  }, []);
  const getRandomNumber = () => {
    return Math.floor(Math.random() * (200 - -200 + 1)) - 200;
  };

  const [num, setNum] = useState(getRandomNumber()); // State for num
  useEffect(() => {
    const interval = setInterval(() => {
      setNum(getRandomNumber()); // Update num with a random value every interval
    }, 700); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []); // E
  return (
    <img
      src={img}
      alt="Spaceship"
      className="h-[20vh] absolute z-0"
      draggable={false}
      style={{
        top: `calc(50% + ${position.y}px)`,
        left: `calc(50% + ${position.x}px)`,
        transform: `rotate(${num}deg)`, // Rotate by 45 degrees
      }}
    />
  );
};

export default Spaceship;
