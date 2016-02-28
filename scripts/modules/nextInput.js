var Game = Game || {};

Game.nextInput = function() {

    'use strict';

    if (Game.app.nextMove.length === 10) {

        Game.app.wrongSpot.innerText = "You win!!!";

    } else {

        Game.app.wrongSpot.innerText = 'That was correct. Keep going!!! ' + Game.app.n + ' of 10';

    }

};
