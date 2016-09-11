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

    getObjectsByTypeFromTileMap (file, object_type) {
        // args; tilemap file (path), objects to retrieve (string)
        // returns: list of objects
    }

    getPointsFromPointObjects (point_objects) {
        // args: point objects from tilemap
        // returns: two arrays of points (or an array of objects with x,y coords?)
    }

    generatePathFromPoints (points) {
        // args: points from tilemap objects and creates motion path
        // return: generated path

        this.bmd.clear();

        var x = 1 / this.width;
        var path = [];


        for (var i = 0; i <= 1; i += x) {
            var px = this.math.catmullRomInterpolation(points.x, i);
            var py = this.math.catmullRomInterpolation(points.y, i);
            this.bmd.rect(px, py, 1, 1, 'rgba(255, 255, 255, 1)');
            path.push( { x: px, y: py });
        }

        for (var p = 0; p < points.x.length; p++) {
            this.bmd.rect(points.x[p]-3, points.y[p]-3, 6, 6, 'rgba(255, 0, 0, 1)');
        }

        return path;
    }

    loseGame () {
        // Necessary logic when the game is overa
        // returns: a phaser game state
    }

    winLevel () {
        // Necessary logic when passing a level.
        // returns: a phaser game state
    }

    completeGame () {
        // Necessary logic when completing game.
        // returns: a phaser game state
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
