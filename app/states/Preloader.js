import {MainMenu} from "./MainMenu.js"


class Preloader extends Phaser.State  {

  	preload() {
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(400, 100, 'preloaderBar');
        this.load.image('playButton', 'assets/images/play_button.png');
        this.style = {
                      font: "bold 32px Arial",
                      fill: "#fff",
                      boundsAlignH: "center",
                      boundsAlignV: "middle"
                     };
		this.text = this.add.text(350, 100, "Loading...", this.style);
		this.load.setPreloadSprite(this.preloadBar);
    }

    create() {
		this.preloadBar.cropEnabled = false;
	}

    update() {
        this.state.add("MainMenu", MainMenu);
        this.state.start('MainMenu');
    }

}

export { Preloader }
