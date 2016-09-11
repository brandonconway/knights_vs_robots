// Game class

class Game extends Phaser.Game {

    constructor (width=1024, height=764, renderer, el) {
        super(width, height, Phaser.AUTO, el, null);

    }

    addFullScreenButton () {
        var game, button;
        game = this;
        button = this.add.button(this.width-20,
                                 20,
                                 'fullScreenButton',
                                 this.enterFullScreen, this
                             );
        button.anchor.set(0.5);
        this.scale.onFullScreenChange.add(function() {
            button.visible = !game.scale.isFullScreen;
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
