// Game class

class Game extends Phaser.Game {

    constructor (width=1024, height=764) {
        super(width, height, Phaser.AUTO, 'content', null);
    }
}

export {
    Game
}

