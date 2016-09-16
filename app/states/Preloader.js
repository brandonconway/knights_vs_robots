import {MainMenu} from "./MainMenu.js"


class Preloader extends Phaser.State  {

  	preload() {

        this.load.image('playButton', 'assets/images/play_button.png');
        this.load.image('pauseButton', 'assets/images/pause_button.jpeg');
        this.load.image('fullScreenButton', 'assets/images/fullscreen.jpg');
        this.load.image('enemy', 'assets/images/enemy1.png');
        this.load.image('enemy1', 'assets/images/enemy1.png');

    	this.background = this.add.sprite(0, 0, 'preloaderBackground');
	    this.preloadBar = this.add.sprite(400, 100, 'preloaderBar');
	    this.text = this.add.text(350, 100, "Loading...", this.headerStyle);
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
