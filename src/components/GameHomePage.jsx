import Phaser from "phaser";
import StartingScene from "../phaser/StartingScene.js";
import GameScene from "../phaser/GameScene.js";
import FinalScene from "../phaser/FinalScene.js";
import RatingTable from "./RatingTable.jsx";

import React from "react";

function GameHomePage(props) {
  const players = props.data;

  var config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    backgroundColor: "#5DACD8",
    scene: [StartingScene, GameScene, FinalScene],
  };

  var game = new Phaser.Game(config);
  
  return (
    <div>
      {/* Uncommit below to check our DB */}
       {game}
    </div>
  );
}
export default GameHomePage;
