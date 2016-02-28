var Game = Game || {};

Game.tryAgain = function() {

    'use strict';

    Game.app.counter++;

    if (Game.app.counter === 4) {

        Game.app.gameStatus('You lost, try again');

    } else {

        Game.app.wrongSpot.innerText = 'That move was not correct';
    }
};
