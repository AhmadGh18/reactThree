import React from "react";
import SpaceBackground from "./SpaceBackground";
import SpaceScene from "./SpaceScene";
import MoonP from "./MoonP";
import Spaceship from "./Spaceship";
import Text from "./Text";

const App = () => {
  return (
    <div className="">
      <SpaceBackground />
      <SpaceScene />
      <MoonP />
      <Spaceship />
      <Text />
    </div>
  );
};

export default App;
