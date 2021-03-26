import button from "../assets/image/button.png";
import continueButton from "../assets/image/continue_button.png";

class StartingScene extends Phaser.Scene {
    constructor ()
    {
        super('StartingScene');
    }
    preload(){
      this.load.image("button", button);
      this.load.image("continue_button", continueButton);
    }
    create(){

      this.text = this.add.text(
          160,
          160,
          "Demo Foody Snake",
          {
              fontSize: 32,
              fontStyle: "bold"
          }
      )

      this.newGameButton = this.add.image(320, 240, "button");
      this.newGameButton.setInteractive();
      this.newGameButton.on('pointerdown', () => {
        console.log('pointerdown');
        this.scene.start("GameScene");
       });

    }
    update(){}
}

export default StartingScene;
