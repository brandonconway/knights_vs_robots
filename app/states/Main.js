
class Main extends Phaser.State {

    init () {
        this.game.addFullScreenButton();
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#cecece';
    }

    update() {

    }

}

export { Main };
