
class Main extends Phaser.State {

    init () {
        this.game.addFullScreenButton();
        this.bmd = null;

        this.points = {
            'x': [ 32, 128, 256, 484, 512, 708 ],
            'y': [ 440, 40, 300, 80, 130, 440 ]
        };
        this.speed = 0;
        this.pi = 0;
        this.step = 8; //how often to update position
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '#cecece';

        this.game.bmd = this.add.bitmapData(this.game.width, this.game.height);
        this.game.bmd.addToWorld();

        this.alien = this.add.sprite(0, 0, 'enemy1');
        this.alien.anchor.set(0.5);


        this.path = this.game.generatePathFromPoints(this.points);
    }

    update() {
        if ( this.speed % this.step === 0) {
            this.alien.x = this.path[this.pi].x;
            this.alien.y = this.path[this.pi].y;
            this.pi++;
        }

        this.speed++;

        if (this.pi >= this.path.length)
        {
            this.pi = 0;
        }

    }

}

export { Main };
