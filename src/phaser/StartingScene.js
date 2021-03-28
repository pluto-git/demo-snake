import button from "../assets/image/button.png";
import continueButton from "../assets/image/continue_button.png";
import { fetchingPOSTandGetLevel } from "./fetching.js";

//to avoid a localStorage from Webpack
var realIndexOfOurPlayer = 0;
if (localStorage.key(0) === "loglevel:webpack-dev-server") {
  realIndexOfOurPlayer = 1;
}
class StartingScene extends Phaser.Scene {
  constructor() {
    super("StartingScene");
  }
  preload() {
    this.load.image("button", button);
    this.load.image("continue_button", continueButton);
  }
  create() {
    this.text = this.add.text(160, 160, "Demo Foody Snake", {
      fontSize: 32,
      fontStyle: "bold",
    });
    console.log(
      localStorage.key(realIndexOfOurPlayer) +
        " " +
        localStorage.getItem(localStorage.key(realIndexOfOurPlayer))
    );
    this.newGameButton = this.add.image(320, 240, "button");
    this.newGameButton.setInteractive();
    this.newGameButton.on("pointerdown", () => {
      console.log("pointerdown");
      //getting the current level for id.

      this.scene.start("GameScene", {
        name: localStorage.key(realIndexOfOurPlayer),
        id: localStorage.getItem(localStorage.key(realIndexOfOurPlayer)),
        level: 0,
        mode: "new",
      });
    });

    this.continueButton = this.add.image(320, 300, "continue_button");
    this.continueButton.setInteractive();
    this.continueButton.on("pointerdown", () => {
      console.log(localStorage.getItem(localStorage.key(realIndexOfOurPlayer)));

      ///fetching to get the current Level
      let data = {
        _id: localStorage.getItem(localStorage.key(realIndexOfOurPlayer)),
      };
      const url = "/api/rating/level";
      console.log(JSON.stringify(data) + " is the data for this fetch");
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.scene.start("GameScene", {
            name: localStorage.key(realIndexOfOurPlayer),
            id: localStorage.getItem(localStorage.key(realIndexOfOurPlayer)),
            level: json.currentLevel,
            mode: "continue",
          });
        })
        .catch((err) => console.log(err));
    });
  }
  update() {}
}

export default StartingScene;
