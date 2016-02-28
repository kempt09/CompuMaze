var Game = Game || {};

Game.update = function(movement) {

    'use strict';

    Game.app.nextMove.push(movement);
    Game.checkAdvance();

};

