import buttonToRestart from "../assets/image/restart_button.png";
import buttonToNextLevel from "../assets/image/next_level.png";

var scoreToApi =0;
class FinalScene extends Phaser.Scene {
  constructor() {
    super('FinalScene');
  }

  init(data){
    this.result = data.result;
    scoreToApi = data.score;
  }
  preload() {
    this.load.image("restart_button", buttonToRestart);
    this.load.image("nextLevel_button", buttonToNextLevel);
    this.objects = {};
  }
  create(){
    this.objects.camera = this.cameras.add(0, 0, 640, 480);
    this.objects.camera.setBackgroundColor('#2b2e4a');
    
    if(this.result === "dead"){
      this.losingText = this.add.text(
          240,
          140,
          "Score "+scoreToApi+"\nRestart?" ,
          {
              fontSize: 32,
              fontStyle: "bold"
          }
      )

      this.restartButton = this.add.image(320, 240, "restart_button");
      this.restartButton.setInteractive();
      this.restartButton.on('pointerdown', () => {
        console.log('pointerdown');
        this.scene.start("GameScene", {score:0,c:10});
       });
      }
  
    // }else{
    //   this.text = this.add.text(
    //       160,
    //       160,
    //       "You won. Continue?",
    //       {
    //           fontSize: 32,
    //           fontStyle: "bold"
    //       }
    //   )

    //   this.nextLevelButton = this.add.image(320, 240, "nextLevel_button");
    //   this.nextLevelButton.setInteractive();
    //   this.nextLevelButton.on('pointerdown', () => {
    //     console.log('pointerdown');
    //     this.scene.restart("GameScene");
    //    });
    // }
  }
}

export default FinalScene;
