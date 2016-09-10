// Game class

class Game extends Phaser.Game {

    constructor (width=1024, height=764) {
        super(width, height, Phaser.AUTO, 'content', null);
    }

    init () {}
    
    create () {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#6DCFF6';
    }
}

export {
    Game
}
