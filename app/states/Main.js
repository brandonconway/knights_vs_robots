
class Main extends Phaser.State {

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#cecece';
    }

    update() {

    }

}

export { Main };
