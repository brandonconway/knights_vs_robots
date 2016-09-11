import {Game} from './Game.js';
import {Boot} from './states/Boot.js';

var game = new Game(512, 384, Phaser.AUTO, 'game-container');
game.state.add('Boot', Boot);
game.state.start('Boot');
