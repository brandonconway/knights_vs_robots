import {LevelMenu} from "./LevelMenu.js";

class HowToPlay extends Phaser.State {

    create() {
        this.game.addFullScreenButton();

        var text, playButton;
        text = this.add.text(this.game.width/2,
                             this.game.height/4,
                             "This is how you play:",
                             this.game.headerStyle
                            ).anchor.set(0.5);
        playButton = this.add.button(
                                     this.game.width/2,
                                     text.y+300, 'playButton',
                                     this.startGame, this
                                    ).anchor.set(0.5);

        this.state.add('LevelMenu', LevelMenu);
	}

	startGame (level) {
		this.state.start('LevelMenu');
	}

};

export { HowToPlay };
