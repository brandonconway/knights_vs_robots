import {Game} from './Game.js';
import {Boot} from './states/Boot.js';

var game = new Game(800, 600);
game.state.add('Boot', Boot);
game.state.start('Boot');
