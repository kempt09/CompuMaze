var Game = Game || {};

(function () {

    'use strict';

    var start = document.getElementById('start');
    start.addEventListener('click', function(){
        Game.advance();
    });

    Game.app.storyGenerator('init');
    Game.app.gameStatus('start');

}());


