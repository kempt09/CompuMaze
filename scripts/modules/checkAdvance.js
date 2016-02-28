var Game = Game || {};

Game.checkAdvance = function() {

    'use strict';

    var i;

    for (i = Game.app.n; i < Game.app.nextMove.length; i++) {

        for (i = Game.app.n; i < Game.app.game.length; i++) {

            if (Game.app.game.indexOf(Game.app.nextMove[i]) !== -1) {

                if (Game.app.game[i] === Game.app.nextMove[i]) {

                    Game.app.n++;
                    return Game.nextInput();

                } else {

                    Game.app.nextMove.pop();
                    return Game.tryAgain();

                }

            } else {

                Game.app.nextMove.pop();
                return Game.tryAgain();

            }

        }

    }

};
