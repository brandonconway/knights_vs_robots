import {LevelMenu} from "./LevelMenu.js"


class MainMenu extends Phaser.State {

    init () {
        this.game.addFullScreenButton();
    }
    create() {
        var style, text, playButton;
        style = {
                      font: "bold 32px Arial",
                      fill: "white",
                      boundsAlignH: "center",
                      boundsAlignV: "middle"
                     };
        text = this.add.text(this.game.width/2,
                             this.game.height/4, "Play Knights vs. Robots",style
                            ).anchor.set(0.5);
        playButton = this.add.button(
                                     this.game.width/2,
                                     text.y+300, 'playButton',
                                     this.startGame, this
                                    ).anchor.set(0.5);

        this.state.add("LevelMenu", LevelMenu);
    }

    startGame(pointer) {
	    this.state.start('LevelMenu');
	}
};

export { MainMenu };
