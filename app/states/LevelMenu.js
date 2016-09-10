import {Main} from "./Main.js"


class LevelMenu extends Phaser.State {

	create() {
        var style, text, playButton;
        style = {
                  font: "bold 32px Arial",
                  fill: "white",
                  boundsAlignH: "center",
                  boundsAlignV: "middle"
                 };
        text = this.add.text(this.game.width/2,
                             this.game.height/4, "Start Level 1",
                             style
                            ).anchor.set(0.5);
        playButton = this.add.button(
                                     this.game.width/2,
                                     text.y+200, 'playButton',
                                     this.startGame, this
                                    ).anchor.set(0.5);
        this.state.add('Main', Main);
	}

	startGame (level) {
		this.state.start('Main');
	}

};

export { LevelMenu };
