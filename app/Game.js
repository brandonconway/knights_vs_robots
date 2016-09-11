// Game class

class Game extends Phaser.Game {

    constructor (width=1024, height=764, renderer, el) {
        super(width, height, Phaser.AUTO, el, null);
        this.headerStyle = {
            font: "bold 32px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        }
    }

    addFullScreenButton () {
        var game, button;
        game = this;
        this.fullButton = this.add.button(this.width-20, 20,
                                 'fullScreenButton',
                                 this.enterFullScreen, this
                             );
        this.fullButton.anchor.set(0.5);
        this.scale.onFullScreenChange.add(function() {
            game.fullButton.visible = !game.scale.isFullScreen;
        });
    }

    enterFullScreen (button) {
        this.scale.startFullScreen(false);
        this.scale.refresh();
    }

}

export {
    Game
}
