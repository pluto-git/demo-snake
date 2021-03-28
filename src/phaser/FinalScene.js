import buttonToRestart from "../assets/image/restart_button.png";
import buttonToNextLevel from "../assets/image/next_level.png";
import buttonToTopScores from "../assets/image/topScores_button.png";
import { fetchingGET, fetchingPOST } from "./fetching.js";

import React from "react";
import { Redirect} from "react-router-dom";
import RatingTable from "../components/RatingTable.jsx";

class FinalScene extends Phaser.Scene {
  constructor() {
    super("FinalScene");
  }

  init(data) {
    this.result = data.result;
    this.score = data.score;
    this.name = data.name;
    this.id = data.id;
    this.level = data.level;
  }
  preload() {
    this.load.image("restart_button", buttonToRestart);
    this.load.image("nextLevel_button", buttonToNextLevel);
    this.load.image("topScore_button", buttonToTopScores);
    this.objects = {};
  }
  create() {
    this.objects.camera = this.cameras.add(0, 0, 640, 480);
    this.objects.camera.setBackgroundColor("#2b2e4a");

    if (this.result === "dead") {
      var data = {
        currentLevel: 0,
      };
      fetchingPOST(data);
      this.losingText = this.add.text(
        240,
        140,
        "Score " + this.score + "\nRestart?",
        {
          fontSize: 32,
          fontStyle: "bold",
        }
      );

      this.restartButton = this.add.image(320, 240, "restart_button");
      this.restartButton.setInteractive();
      this.restartButton.on("pointerdown", () => {
        this.scene.start("GameScene", {
          time: 60,
          mode: "death",
          level:0
        });
      });
    } else if (this.result === "won") {
      var data = {
        login: this.name,
        score: this.score,
        _id: this.id,
        currentLevel: this.level,
      };
      console.log(this.level);
      fetchingPOST(data);

      this.continueButton = this.add.image(320, 240, "nextLevel_button");
      this.continueButton.setInteractive();
      this.continueButton.on("pointerdown", () => {
        this.scene.start("GameScene", {
          time: 60,
          mode: "won",
          level: this.level,
        });
      });
    } else {
      console.log("Error in the Final Scene!");
    }

    this.topScoreButton = this.add.image(320, 300, "topScore_button");
    this.topScoreButton.setInteractive();
    this.topScoreButton.on("pointerdown", () => {
      fetchingGET();
      var data = {
        login: this.name,
        score: this.score,
        _id: this.id,
        currentLevel: this.level,
      };
      if (this.result === "won") {
        fetchingPOST(data);
      }
    });
  }
}
export default FinalScene;
