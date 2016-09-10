import {Preloader} from "./Preloader.js"

var Boot = function (game) {};

Boot.prototype = {

     init: function () {
         this.scale.pageAlignHorizontally = true;
     },

     preload: function () {
         this.load.image('preloaderBackground', 'assets/images/starsky.jpeg');
         this.load.image('preloaderBar', 'assets/images/preloader_bar.png');
     },

     create: function () {
         this.state.add('Preloader', Preloader);
         this.state.start('Preloader');
     }

 };

export {
    Boot
}
